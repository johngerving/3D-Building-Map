const express = require("express");
const router = express.Router();
const passport = require("passport");
require("dotenv").config();

// Route /auth/google - sends user to login to authenticate
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }) // Get the user profile and email
);

// After logging in, user is sent back to /google/callback route
router.get(
  "/google/callback",
  passport.authenticate("google", { session: true }),
  (req, res) => {
    res.redirect(`${process.env.CLIENT_URL}`); // Redirect user to client URL
  }
);

// Logout the user
router.post("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    console.log("logout");

    res.status(200).json({});
  });
});

module.exports = router;
