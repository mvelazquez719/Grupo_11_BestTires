const express = require ('express');
const router = express.Router();
const mainController= require("../controllers/mainController");
const usersController= require("../controllers/usersController.js");


router.get("/", mainController.index);
router.get("/register", usersController.register);
router.get("/login", usersController.login);

module.exports = router ;