const express = require("express");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
require("dotenv").config();
require("./auth.js");

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

app.use(
  session({
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

app.get("/helloworld", function (req, res) {
  res.status(200).json({ message: "Hello World!" });
});

// Get building information by building name
app.get("/buildings/:buildingName", function (req, res) {
  const { buildingName } = req.params;

  try {
    // Look for buildings matching the building name
    const building = {};

    res.status(200).json(building);
  } catch (error) {
    // Respond with an error message
    res
      .status(404)
      .json({ error: `Building with name ${buildingName} not found` });
  }
});

// Get floors by building ID
app.get("/floors/:buildingID", function (req, res) {
  const { buildingID } = req.params;

  try {
    // Get all floors with building ID
    const floors = [];

    res.status(200).json(floors);
  } catch (error) {
    // Respond with an error message
    res
      .status(404)
      .json({ error: `No floors under building ID ${buildingID} found` });
  }
});

// Get locations by building ID
app.get("/locations/:buildingID", function (req, res) {
  const { buildingID } = req.params;

  try {
    // Get all locations with building ID
    const locations = [];

    res.status(200).json(locations);
  } catch (error) {
    // Respond with an error message
    res
      .status(404)
      .json({ error: `No locations under building ID ${buildingID} found` });
  }
});

const server = app.listen(PORT, function () {
  console.log(`Server ready on port ${PORT}`);
});
