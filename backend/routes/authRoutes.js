const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/authControllers");

// Routes -->>  /api/auth
router.post("/register", register);
router.post("/login", login);

module.exports = router;
