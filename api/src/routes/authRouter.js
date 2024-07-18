const express = require("express");
const router = express.Router();
const passport = require("passport");
require("dotenv").config();

// Route /auth/google - sends user to login to authenticate
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
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

module.exports = router;
