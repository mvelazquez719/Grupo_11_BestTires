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

/*** GET ONE PRODUCT ***/ 
router.get('/productID/:id', productsController.productID);


router.get("/editProduc/:id",productsController.editProduc);
router.put("/editProduc/:id",productsController.update);

router.delete('/delete/:id', productsController.destroy);

module.exports = router;