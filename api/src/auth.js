const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
require("dotenv").config();
const pool = require("./db/db.js");

// Use Google authentication strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, done) => {
      // Get Google user info
      const userData = profile._json;
      let user = {};
      try {
        // Find users with email of Google account
        const currentUserQuery = await pool.query(
          "SELECT * FROM users WHERE email = $1",
          [userData.email]
        );
        // If user already exists
        if (currentUserQuery.rows.length > 0) {
          // Create user object with user_id and email returned
          user = {
            user_id: currentUserQuery.rows[0].user_id,
            email: currentUserQuery.rows[0].email,
          };
        } else {
          // If the user doesn't already exist in the database, insert new user
          const newUser = await pool.query(
            "INSERT INTO users (email) VALUES ($1) RETURNING user_id, email",
            [userData.email]
          );
          // Create user object
          user = {
            user_id: newUser.rows[0].user_id,
            email: newUser.rows[0].email,
          };
        }
        done(null, user);
      } catch (error) {
        done(error, false);
      }
    }
  )
);

// Serialize user
passport.serializeUser((user, done) => {
  done(null, user);
});

// Deserialize user
passport.deserializeUser((user, done) => {
  done(null, user);
});

const isUserAdmin = async (user, buildingID) => {
  // Select permissions for user under the building ID where user is admin
  const query = await pool.query(
    "SELECT * FROM users_buildings WHERE user_id=$1 AND building_id=$2 AND role='admin'",
    [user.user_id, buildingID]
  );

  // Return true if permissions exist, false otherwise
  return query.rows.length > 0;
};

const isUserEditor = async (user, buildingID) => {
  // Select permissions for user under the building ID where user is editor
  const query = await pool.query(
    "SELECT * FROM users_buildings WHERE user_id=$1 AND building_id=$2 AND role='editor'",
    [user.user_id, buildingID]
  );

  // Return true if permissions exist, false otherwise
  return query.rows.length > 0;
};

module.exports = { isUserAdmin, isUserEditor };
