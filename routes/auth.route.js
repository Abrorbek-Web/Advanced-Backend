const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json({ name: "Abrorbek", surname: "Azimov" });
  return next();
});

module.exports = router;
