const express = require ('express');
const router = express.Router();
const mainController= require("../controllers/mainController");
const usersController= require("../controllers/usersController");
const productsController= require("../controllers/productsController");

router.get("/", mainController.index);
router.get("/register", usersController.register);
router.get("/login", usersController.login);
router.get("/contacto", usersController.contacto);
router.get("/products", productsController.products);
router.get("/carrito", productsController.carrito);
router.get("/cargaProduc",productsController.cargaProduc);
router.get("/editProduc",productsController.editProduc);
router.get("/productID",productsController.productID);

module.exports = router;