const express = require("express");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
require("dotenv").config();
require("./auth.js");
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
app.use(express.urlencoded({ extended: false }));
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
      maxAge: 1000 * 60 * 2,
    },
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.session());
app.use(passport.authenticate("session"));
const authRouter = require("./routes/authRouter.js");
app.use("/auth", authRouter);

/** GET REQUESTS **/

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

    // Create object to store building data
    const building = query.rows[0];

    res.status(200).json(building);
  } catch (error) {
    // Respond with an error message
    res
      .status(404)
      .json({ error: `Building with name ${buildingName} not found` });
  }
});

// Get floors by building ID
app.get("/floors/:buildingID", async function (req, res) {
  const { buildingID } = req.params;

  try {
    // Get all floors with building ID
    const query = await pool.query(
      "SELECT * FROM floors WHERE building_id = $1 ORDER BY index",
      [buildingID]
    );

    // Get array of floors from rows returned
    const floors = query.rows;

    res.status(200).json(floors);
  } catch (error) {
    // Respond with an error message
    res.status(404).json({ error: `Error retrieving floors` });
  }
});

// Get locations by building ID
app.get("/locations/:buildingID", async function (req, res) {
  const { buildingID } = req.params;

  try {
    // Get all locations with building ID by performing a join
    const query = await pool.query(
      "SELECT location_id, floor_id, description, locations.position, default_enabled, type FROM buildings RIGHT JOIN floors USING(building_id) RIGHT JOIN locations USING(floor_id) WHERE building_id = $1",
      [buildingID]
    );

    const locations = {};

    // Loop through locations returned
    query.rows.forEach((location) => {
      // Group locations by floor id
      if (!Object.hasOwn(locations, location.floor_id)) {
        // Add empty array for the floor if it doesn't already exist
        locations[location.floor_id] = [];
      }
      // Add location to the array for the floor
      locations[location.floor_id].push(location);
    });

    res.status(200).json(locations);
  } catch (error) {
    console.log(error);
    // Respond with an error message
    res.status(404).json({ error: `Error retrieving locations` });
  }
});

const server = app.listen(PORT, function () {
  console.log(`Server ready on port ${PORT}`);
});
