const express = require ('express');
const router = express.Router();
const mainController= require("../controllers/mainController");
const usersController= require("../controllers/usersController");
const productsController= require("../controllers/productsController");

router.get("/", mainController.index);
router.get("/register", usersController.register);
router.get("/login", usersController.login);
router.get("/contacto", usersController.contacto);
router.get("/productDetail", productsController.productDetail);
router.get("/carrito", productsController.carrito);

module.exports = router ;