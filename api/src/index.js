const express = require("express");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
require("dotenv").config();
const { isUserAdmin, isUserEditor } = require("./auth.js");
const pool = require("./db/db.js");

PORT = process.env.PORT || 8080;

const app = express();

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Use express session, store sessions in database
app.use(
  session({
    store: new (require("connect-pg-simple")(session))({
      pool: pool,
    }),
    secret: [process.env.COOKIE_SECRET],
    cookie: {
      secure: process.env.NODE_ENV === "production" ? "true" : "auto",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 1000 * 60 * 60 * 12,
    },
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.session());
app.use(passport.authenticate("session"));
const authRouter = require("./routes/authRouter.js");
app.use("/auth", authRouter);
const fileRouter = require("./routes/storageRouter.js");
app.use("/files", fileRouter);

/** GET REQUESTS **/

app.get("/users", async function (req, res) {
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Pattern matching with search term
    const term = "%" + req.query.term + "%";
    // Get number of users to return
    const limit = req.query.limit;

    // Get users in database matching search term
    const query = await pool.query(
      "SELECT * FROM users WHERE email LIKE $1 LIMIT $2",
      [term, limit]
    );

    const users = query.rows.map((user) => ({
      userID: user.user_id,
      email: user.email,
    }));

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: "Error retrieving users" });
  }
});

// Get user information
app.get("/me", async function (req, res) {
  // Return empty response if not authenticated
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  // Return user information if authenticated
  return res.status(200).json(req.user);
});

// Get buildings under user
app.get("/users/buildings", async function (req, res) {
  // Redirect if user is not authenticated
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    // Get buildings belonging to user
    const query = await pool.query(
      "SELECT building_name, building_id, role FROM users_buildings LEFT JOIN buildings USING(building_id) WHERE user_id = $1 ORDER BY building_name",
      [req.user.user_id]
    );

    const buildings = query.rows.map((row) => ({
      buildingName: row.building_name,
      buildingID: row.building_id,
      role: row.role,
    }));

    res.status(200).json(buildings);
  } catch (error) {
    return res.status(400).json({ error: "Error retrieving user buildings" });
  }
});

app.get("/buildings/:buildingID/permissions", async function (req, res) {
  const { buildingID } = req.params;

  try {
    const query = await pool.query(
      "SELECT user_id, email, building_id, role FROM users RIGHT JOIN users_buildings USING(user_id) WHERE building_id=$1",
      [buildingID]
    );

    const permissions = query.rows.map((row) => ({
      userID: row.user_id,
      email: row.email,
      buildingID: row.building_id,
      role: row.role,
    }));

    res.status(200).json(permissions);
  } catch (error) {
    res.status(400).json({ error: "Error retrieving permissions" });
  }
});

// Get building information by building name
app.get("/buildings/:buildingName", async function (req, res) {
  const { buildingName } = req.params;

  try {
    // Look for buildings matching the building name
    const query = await pool.query(
      "SELECT * FROM buildings WHERE building_name=$1",
      [buildingName]
    );

    // Send error response if building does not exist
    if (query.rows.length == 0)
      return res
        .status(404)
        .json({ error: `Building with name ${buildingName} not found` });

    // Create object to store building data - rename keys
    const building = {
      buildingID: query.rows[0].building_id,
      buildingName: query.rows[0].building_name,
      locationFontSize: query.rows[0].location_font_size,
      initialCameraPosition: query.rows[0].initial_camera_pos,
    };

    res.status(200).json(building);
  } catch (error) {
    console.log(error);
    // Respond with an error message
    res.status(404).json({ error: `Error retrieving building` });
  }
});

// Get floors by building ID
app.get("/buildings/:buildingID/floors", async function (req, res) {
  const { buildingID } = req.params;

  try {
    // Get all floors with building ID
    const query = await pool.query(
      "SELECT * FROM floors WHERE building_id = $1 ORDER BY index",
      [buildingID]
    );

    // Get array of floors from rows returned - rename keys for each
    const floors = query.rows.map((floor) => ({
      floorID: floor.floor_id,
      buildingID: floor.building_id,
      index: floor.index,
      name: floor.floor_name,
      svg: floor.svg,
      scale: floor.scale,
      verticalGap: floor.vertical_gap,
      position: floor.position,
      extrudedSections: floor.extruded_sections,
      floorLayer: floor.floor_layer,
      extrudeDepth: floor.extrude_depth,
    }));

    res.status(200).json(floors);
  } catch (error) {
    console.log(error);
    // Respond with an error message
    res.status(404).json({ error: `Error retrieving floors` });
  }
});

// Get locations by building ID
app.get("/buildings/:buildingID/locations", async function (req, res) {
  const { buildingID } = req.params;

  try {
    const locations = {};

    // Get floors in building
    const floors = await pool.query(
      "SELECT floor_id FROM floors WHERE building_id = $1",
      [buildingID]
    );
    // Make an empty array for each floor
    floors.rows.forEach((floor) => {
      locations[floor.floor_id] = [];
    });

    // Get all locations with building ID by performing a join
    const query = await pool.query(
      "SELECT location_id, floor_id, description, locations.position, default_enabled, type, location_name FROM buildings RIGHT JOIN floors USING(building_id) RIGHT JOIN locations USING(floor_id) WHERE building_id = $1",
      [buildingID]
    );

    // Loop through locations returned
    query.rows.forEach((location) => {
      // Add location to the array for the floor - rename keys
      locations[location.floor_id].push({
        name: location.location_name,
        description: location.description,
        position: location.position,
        type: location.type,
        floorID: location.floor_id,
        locationID: location.location_id,
        buildingID: location.building_id,
        defaultEnabled: location.default_enabled,
      });
    });

    res.status(200).json(locations);
  } catch (error) {
    console.log(error);
    // Respond with an error message
    res.status(404).json({ error: `Error retrieving locations` });
  }
});

/** POST REQUESTS **/

// Add user permissions
app.post("/buildings/:buildingID/permissions", async function (req, res) {
  const { buildingID } = req.params;
  const permissions = req.body;

  try {
    // Respond with 401 status if user is not authorized
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Check if user has admin permissions for the building - if not, respond with 401 status
    const isAdmin = await isUserAdmin(req.user, buildingID);
    if (!isAdmin) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const isBodyValid =
      "userID" in permissions &&
      "buildingID" in permissions &&
      "role" in permissions;

    if (!isBodyValid) {
      return res.status(400).json({ error: "Missing request parameters" });
    }

    const permissionsExist = await pool.query(
      "SELECT * FROM users_buildings WHERE user_id = $1 AND building_id = $2",
      [permissions.userID, permissions.buildingID]
    );
    if (permissionsExist.rows.length > 0) {
      return res.status(400).json({ error: "Permissions already exist" });
    }

    const query = await pool.query(
      "INSERT INTO users_buildings (user_id, building_id, role) VALUES ($1, $2, $3)",
      [permissions.userID, permissions.buildingID, permissions.role]
    );

    res.status(200).json({});
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Error adding permissions" });
  }
});

// Create new building
app.post("/buildings", async function (req, res) {
  const building = req.body;

  // Respond with 401 status if user is not authorized
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Check if request body has necessary properties
  const isBodyValid =
    "buildingName" in building &&
    "locationFontSize" in building &&
    "initialCameraPosition" in building;

  // Respond with error if request is missing parameter
  if (!isBodyValid)
    return res.status(400).json({ error: "Missing request parameters" });

  try {
    // Check if building with same name already exists
    const existingBuildings = await pool.query(
      "SELECT * FROM buildings WHERE building_name = $1",
      [building.buildingName]
    );

    // Respond with error if it already exists
    if (existingBuildings.rows.length > 0) {
      return res.status(400).json({
        error: `Building named ${building.buildingName} already exists`,
      });
    }

    // Insert a row into the buildings table with the request body data - return the new building ID
    const query = await pool.query(
      "INSERT INTO buildings (building_name, location_font_size, initial_camera_pos) VALUES ($1, $2, $3) RETURNING building_id, building_name",
      [
        building.buildingName,
        building.locationFontSize,
        building.initialCameraPosition,
      ]
    );

    // Add user permissions to building
    const userID = req.user.user_id;
    const newBuildingID = query.rows[0].building_id;

    // Insert row
    const addPermissions = await pool.query(
      "INSERT INTO users_buildings (user_id, building_id, role) VALUES ($1, $2, 'admin')",
      [userID, newBuildingID]
    );

    // Return the new building ID and name
    const newBuildingName = query.rows[0].building_name;
    res
      .status(201)
      .json({ buildingID: newBuildingID, buildingName: newBuildingName });
  } catch (error) {
    console.log(error);

    res.status(400).json({ error: "Error adding building" });
  }
});

// Create new floor
app.post("/buildings/:buildingID/floors", async function (req, res) {
  const { buildingID } = req.params;

  // Respond with 401 status if user is not authorized
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Check if user has admin permissions for the building - if not, respond with 401 status
  const isAdmin = await isUserAdmin(req.user, buildingID);
  const isEditor = await isUserEditor(req.user, buildingID);
  if (!isAdmin && !isEditor) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Query the database to get the max index of a floor
  const getFloorIndices = await pool.query(
    "SELECT index FROM floors WHERE building_id = $1 ORDER BY index DESC",
    [buildingID]
  );
  let maxIndex = -1;
  if (getFloorIndices.rows.length > 0) {
    maxIndex = getFloorIndices.rows[0].index;
  }

  // Make a new floor
  const floor = {
    index: maxIndex + 1,
    name: "Untitled Floor",
    svg: "",
    scale: 1,
    verticalGap: 0,
    position: [0, 0],
    extrudedSections: [],
    floorLayer: "",
    extrudeDepth: 0,
  };

  try {
    // Insert a row into the floors table with the request body data - return the new floor ID
    const query = await pool.query(
      "INSERT INTO floors (building_id, index, floor_name, svg, scale, vertical_gap, position, extruded_sections, floor_layer, extrude_depth) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING floor_id",
      [
        buildingID,
        floor.index,
        floor.name,
        floor.svg,
        floor.scale,
        floor.verticalGap,
        floor.position,
        floor.extrudedSections,
        floor.floorLayer,
        floor.extrudeDepth,
      ]
    );

    // Get the new floor ID and return it
    const newFloorID = query.rows[0].floor_id;
    res.status(201).json({ floorID: newFloorID });
  } catch (error) {
    console.log(error);

    res.status(400).json({ error: "Error adding floor" });
  }
});

// Create new locations
app.post("/buildings/:buildingID/locations", async function (req, res) {
  const { buildingID } = req.params;

  // Respond with 401 status if user is not authorized
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Check if user has admin permissions for the building - if not, respond with 401 status
  const isAdmin = await isUserAdmin(req.user, buildingID);
  const isEditor = await isUserEditor(req.user, buildingID);
  if (!isAdmin && !isEditor) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Get array of locations
  const locations = req.body;

  try {
    const locationIDs = [];

    for (const location of locations) {
      // Check if request body has necessary properties
      const isBodyValid =
        "name" in location &&
        "description" in location &&
        "position" in location &&
        "type" in location &&
        "floorID" in location &&
        "defaultEnabled" in location;

      if (!isBodyValid) {
        return res
          .status(400)
          .json({ error: "Missing request body parameters" });
      }

      // Insert a row into the locations table with the request body data - return the new location ID
      const query = await pool.query(
        "INSERT INTO locations (floor_id, description, position, default_enabled, type, location_name) VALUES ($1, $2, $3, $4, $5, $6) RETURNING location_id",
        [
          location.floorID,
          location.description,
          location.position,
          location.defaultEnabled,
          location.type,
          location.name,
        ]
      );

      // Get the new location ID and return it
      const newLocationID = query.rows[0].location_id;
      // Add location ID to list of IDs
      locationIDs.push(newLocationID);
    }

    res.status(201).json({ locationIDs: locationIDs });
  } catch (error) {
    console.log(error);

    res.status(400).json({ error: "Error adding locations" });
  }
});

/** PUT REQUESTS **/

// Put permissions
app.put(
  "/buildings/:buildingID/permissions/:userID",
  async function (req, res) {
    const { buildingID, userID } = req.params;

    try {
      // Respond with 401 status if user is not authorized
      if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Check if user has admin permissions for the building - if not, respond with 401 status
      const isAdmin = await isUserAdmin(req.user, buildingID);
      if (!isAdmin) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Get existing permission
      const existingPermissions = await pool.query(
        "SELECT * FROM users_buildings WHERE user_id = $1 AND building_id = $2",
        [userID, buildingID]
      );

      // Return error response if building with ID does not exist
      if (existingPermissions.rows.length == 0) {
        return res.status(404).json({ error: "Permissions do not exist" });
      }

      // Make sure role property is provided
      const isBodyValid = "role" in req.body;

      // Send error response if role not provided
      if (!isBodyValid) {
        return res.status(400).json({ error: "Invalid request body" });
      }

      // Update database
      const query = await pool.query(
        "UPDATE users_buildings SET role = $1 WHERE user_id = $2 AND building_id = $3",
        [req.body.role, userID, buildingID]
      );

      // Send response with updated data
      const newPermissions = {
        userID: userID,
        buildingID: buildingID,
        role: req.body.role,
      };

      res.status(201).json(newPermissions);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Error updating permissions" });
    }
  }
);

app.put("/buildings/:buildingID", async function (req, res) {
  const { buildingID } = req.params;

  try {
    // Respond with 401 status if user is not authorized
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Check if user has admin permissions for the building - if not, respond with 401 status
    const isAdmin = await isUserAdmin(req.user, buildingID);
    const isEditor = await isUserEditor(req.user, buildingID);

    if (!isAdmin && !isEditor) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Get existing building
    const existingBuilding = await pool.query(
      "SELECT * FROM buildings WHERE building_id = $1",
      [buildingID]
    );

    // Return error response if building with ID does not exist
    if (existingBuilding.rows.length == 0) {
      return res.status(404).json({ error: "Building does not exist" });
    }

    // Construct new building object - fill in with request body if provided, otherwise use existing data
    const newBuilding = {
      buildingName: req.body.hasOwnProperty("buildingName")
        ? req.body.buildingName
        : existingBuilding.rows[0].building_name,
      locationFontSize: req.body.hasOwnProperty("locationFontSize")
        ? req.body.locationFontSize
        : existingBuilding.rows[0].location_font_size,
      initialCameraPosition: req.body.hasOwnProperty("initialCameraPosition")
        ? req.body.initialCameraPosition
        : existingBuilding.rows[0].initial_camera_pos,
    };

    // Check if building with same already exists
    const buildingWithName = await pool.query(
      "SELECT building_id FROM buildings WHERE building_name = $1",
      [newBuilding.buildingName]
    );

    // If building name already exists, return an error response
    if (
      buildingWithName.rows.length > 0 &&
      buildingWithName.rows[0].building_id != buildingID
    ) {
      return res.status(400).json({
        error: `Building with name '${newBuilding.buildingName}' already exists`,
      });
    }

    // Update table with new data
    const query = await pool.query(
      "UPDATE buildings SET building_name = $1, location_font_size = $2, initial_camera_pos = $3 WHERE building_id = $4 RETURNING *",
      [
        newBuilding.buildingName,
        newBuilding.locationFontSize,
        newBuilding.initialCameraPosition,
        buildingID,
      ]
    );

    // Send response with updated building data
    res.status(201).json({
      buildingID: query.rows[0].building_id,
      buildingName: query.rows[0].building_name,
      initialCameraPosition: query.rows[0].initial_camera_pos,
      locationFontSize: query.rows[0].location_font_size,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({ error: "Error modifying building" });
  }
});

// Modify floor
app.put("/buildings/:buildingID/floors/:floorID", async function (req, res) {
  const { buildingID, floorID } = req.params;

  try {
    // Respond with 401 status if user is not authorized
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Check if user has admin permissions for the building - if not, respond with 401 status
    const isAdmin = await isUserAdmin(req.user, buildingID);
    const isEditor = await isUserEditor(req.user, buildingID);
    if (!isAdmin && !isEditor) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Get existing floor
    const existingFloor = await pool.query(
      "SELECT * FROM floors WHERE floor_id = $1 AND building_id = $2",
      [floorID, buildingID]
    );

    // Return error response if floor with ID does not exist
    if (existingFloor.rows.length == 0) {
      return res.status(404).json({ error: "Floor does not exist" });
    }

    // Construct new floor object - fill in with request body if provided, otherwise use existing data
    const newFloor = {
      index: req.body.hasOwnProperty("index")
        ? req.body.index
        : existingFloor.rows[0].index,
      floorName: req.body.hasOwnProperty("name")
        ? req.body.name
        : existingFloor.rows[0].floor_name,
      svg: req.body.hasOwnProperty("svg")
        ? req.body.svg
        : existingFloor.rows[0].svg,
      scale: req.body.hasOwnProperty("scale")
        ? req.body.scale
        : existingFloor.rows[0].scale,
      verticalGap: req.body.hasOwnProperty("verticalGap")
        ? req.body.verticalGap
        : existingFloor.rows[0].vertical_gap,
      position: req.body.hasOwnProperty("position")
        ? req.body.position
        : existingFloor.rows[0].position,
      extrudedSections: req.body.hasOwnProperty("extrudedSections")
        ? req.body.extrudedSections
        : existingFloor.rows[0].extruded_sections,
      floorLayer: req.body.hasOwnProperty("floorLayer")
        ? req.body.floorLayer
        : existingFloor.rows[0].floor_layer,
      extrudeDepth: req.body.hasOwnProperty("extrudeDepth")
        ? req.body.extrudeDepth
        : existingFloor.rows[0].extrude_depth,
    };

    // Update table with new data
    const query = await pool.query(
      "UPDATE floors SET index = $1, floor_name = $2, svg = $3, scale = $4, vertical_gap = $5, position = $6, extruded_sections = $7, floor_layer = $8, extrude_depth = $9 WHERE floor_id = $10 RETURNING *",
      [
        newFloor.index,
        newFloor.floorName,
        newFloor.svg,
        newFloor.scale,
        newFloor.verticalGap,
        newFloor.position,
        newFloor.extrudedSections,
        newFloor.floorLayer,
        newFloor.extrudeDepth,
        floorID,
      ]
    );

    // Send response with updated building data
    res.status(201).json({
      buildingID: query.rows[0].building_id,
      index: query.rows[0].index,
      name: query.rows[0].floor_name,
      svg: query.rows[0].svg,
      scale: query.rows[0].scale,
      verticalGap: query.rows[0].vertical_gap,
      position: query.rows[0].position,
      extrudedSections: query.rows[0].extruded_sections,
      floorLayer: query.rows[0].floor_layer,
      extrudeDepth: query.rows[0].extrude_depth,
    });
  } catch (error) {
    console.log(error);

    res.status(400).json({ error: "Error modifying building" });
  }
});

// Modify location
app.put(
  "/buildings/:buildingID/locations/:locationID",
  async function (req, res) {
    const { buildingID, locationID } = req.params;

    try {
      // Respond with 401 status if user is not authorized
      if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Check if user has admin permissions for the building - if not, respond with 401 status
      const isAdmin = await isUserAdmin(req.user, buildingID);
      const isEditor = await isUserEditor(req.user, buildingID);
      if (!isAdmin && !isEditor) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Get existing location
      const existingLocation = await pool.query(
        "SELECT location_id, description, locations.position, default_enabled, type, location_name FROM buildings RIGHT JOIN floors USING(building_id) RIGHT JOIN locations USING(floor_id) WHERE location_id = $1 AND building_id = $2",
        [locationID, buildingID]
      );

      // Return error response if location with ID does not exist
      if (existingLocation.rows.length == 0) {
        return res.status(404).json({ error: "Location does not exist" });
      }

      // Construct new location object - fill in with request body if provided, otherwise use existing data
      const newLocation = {
        description: req.body.hasOwnProperty("description")
          ? req.body.description
          : existingLocation.rows[0].description,
        position: req.body.hasOwnProperty("position")
          ? req.body.position
          : existingLocation.rows[0].position,
        defaultEnabled: req.body.hasOwnProperty("defaultEnabled")
          ? req.body.defaultEnabled
          : existingLocation.rows[0].default_enabled,
        type: req.body.hasOwnProperty("type")
          ? req.body.type
          : existingLocation.rows[0].type,
        name: req.body.hasOwnProperty("name")
          ? req.body.name
          : existingLocation.rows[0].location_name,
      };

      // Update table with new data
      const query = await pool.query(
        "UPDATE locations SET description = $1, position = $2, default_enabled = $3, type = $4, location_name = $5 WHERE location_id = $6 RETURNING *",
        [
          newLocation.description,
          newLocation.position,
          newLocation.defaultEnabled,
          newLocation.type,
          newLocation.name,
          locationID,
        ]
      );

      // Send response with updated building data
      res.status(201).json({
        locationID: query.rows[0].location_id,
        floorID: query.rows[0].floor_id,
        description: query.rows[0].description,
        position: query.rows[0].position,
        defaultEnabled: query.rows[0].default_enabled,
        type: query.rows[0].type,
        name: query.rows[0].location_name,
      });
    } catch (error) {
      console.log(error);

      res.status(400).json({ error: "Error modifying building" });
    }
  }
);

/** DELETE REQUESTS **/

// Delete permissions
app.delete(
  "/buildings/:buildingID/permissions/:userID",
  async function (req, res) {
    const { buildingID, userID } = req.params;

    try {
      // Respond with 401 status if user is not authorized
      if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Check if user has admin permissions for the building - if not, respond with 401 status
      const isAdmin = await isUserAdmin(req.user, buildingID);
      if (!isAdmin) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Check if permission exists
      const permissionSearch = await pool.query(
        "SELECT * FROM users_buildings WHERE user_id = $1 AND building_id = $2",
        [userID, buildingID]
      );

      // Respond with error if it doesn't exist
      if (permissionSearch.rows.length == 0) {
        return res.status(404).json({ error: "Permissions not found" });
      }

      // Delete permission
      const query = await pool.query(
        "DELETE FROM users_buildings WHERE user_id = $1 AND building_id = $2",
        [userID, buildingID]
      );

      // Return successful response
      res.status(204).json({});
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Error deleting permissions" });
    }
  }
);

// Delete building
app.delete("/buildings/:buildingName", async function (req, res) {
  const { buildingName } = req.params;

  try {
    // Respond with 401 status if user is not authorized
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Check if building exists
    const buildingSearch = await pool.query(
      "SELECT * FROM buildings WHERE building_name = $1",
      [buildingName]
    );

    // Respond with error if it doesn't exist
    if (buildingSearch.rows.length == 0) {
      return res.status(404).json({ error: "Building not found" });
    }

    const buildingID = buildingSearch.rows[0].building_id;

    // Check if user has admin permissions for the building - if not, respond with 401 status
    const isAdmin = await isUserAdmin(req.user, buildingID);
    if (!isAdmin) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Delete building
    const query = await pool.query(
      "DELETE FROM buildings WHERE building_name = $1",
      [buildingName]
    );

    // Return successful response
    res.status(204).json({});
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Error deleting building" });
  }
});

app.delete("/buildings/:buildingID/floors/:floorID", async function (req, res) {
  const { buildingID, floorID } = req.params;

  try {
    // Respond with 401 status if user is not authorized
    if (!req.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Check if user has admin permissions for the building - if not, respond with 401 status
    const isAdmin = await isUserAdmin(req.user, buildingID);
    const isEditor = await isUserEditor(req.user, buildingID);
    if (!isAdmin && !isEditor) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Check if floor exists and that it is in the building
    const floorSearch = await pool.query(
      "SELECT * FROM floors WHERE building_id = $1 AND floor_id = $2",
      [buildingID, floorID]
    );

    // Respond with error if it doesn't exist
    if (floorSearch.rows.length == 0) {
      return res.status(404).json({ error: "Floor not found" });
    }

    // Delete floor
    const query = await pool.query("DELETE FROM floors WHERE floor_id = $1", [
      floorID,
    ]);

    // Success response
    res.status(204).json({});
  } catch (err) {
    res.status(400).json({ error: "Error deleting floor" });
  }
});

app.delete(
  "/buildings/:buildingID/locations/:locationID",
  async function (req, res) {
    const { buildingID, locationID } = req.params;

    try {
      // Respond with 401 status if user is not authorized
      if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Check if user has admin permissions for the building - if not, respond with 401 status
      const isAdmin = await isUserAdmin(req.user, buildingID);
      const isEditor = await isUserEditor(req.user, buildingID);
      if (!isAdmin && !isEditor) {
        return res.status(401).json({ error: "Unauthorized" });
      }

      // Get existing location
      const existingLocation = await pool.query(
        "SELECT location_id, description, locations.position, default_enabled, type, location_name FROM buildings RIGHT JOIN floors USING(building_id) RIGHT JOIN locations USING(floor_id) WHERE location_id = $1 AND building_id = $2",
        [locationID, buildingID]
      );

      // Return error response if location with ID does not exist
      if (existingLocation.rows.length == 0) {
        return res.status(404).json({ error: "Location does not exist" });
      }

      // Delete location
      const query = await pool.query(
        "DELETE FROM locations WHERE location_id = $1",
        [locationID]
      );

      res.status(204).json({});
    } catch (error) {
      res.status(400).json({ error: "Error deleting floor" });
    }
  }
);

const server = app.listen(PORT, function () {
  console.log(`Server ready on port ${PORT}`);
});
