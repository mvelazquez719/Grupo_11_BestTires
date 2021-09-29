const express = require ('express');
const router = express.Router();
const mainController= require("../controllers/mainController");
const usersController= require("../controllers/usersController");
const productsController= require("../controllers/productsController");

router.get("/", mainController.index);

router.get("/login", usersController.login);
router.get("/contacto", usersController.contacto);
router.get("/products", productsController.products);
router.get("/carrito", productsController.carrito);

/*** CREATE ONE PRODUCT ***/ 
router.get("/cargaProduc",productsController.cargaProduc);
router.post("/cargaProduc",productsController.store);

/*** REGISTER ***/ 
router.get("/register", usersController.register);
router.post("/register", usersController.storee);


router.get("/editProduc",productsController.editProduc);
router.get("/productID",productsController.productID);

module.exports = router;