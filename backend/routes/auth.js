const express = require("express");
const User = require("../models/User");
const router = express.Router();

const { body, validationResult } = require("express-validator");

router.post(
  "/",
  [
    body("email","Enter a valid email").isEmail(),
    body("name","Enter a valid name").isLength({ min: 3 }),
    body("password").isLength({ min: 5 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.send(req.body);
  }
);

module.exports = router;
