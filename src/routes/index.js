const express = require ('express');
const router = express.Router();
const mainController= require("../controllers/mainController");
const usersController= require("../controllers/usersController");
const productsController= require("../controllers/productsController");
const upload = require ('../middleware/multermidd');
const path = require ('path')

const {body} = require ('express-validator');
const validations = [
    body('firstName').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email').notEmpty().withMessage('Tienes que escribir un correo electronico').bail().isEmail().withMessage('Debes escribir un formato de correo valido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('img').custom((value,{req}) => {
        let file = req.file;
        let acceptedExtensions = ['.jpg', '.png', '.gif'];
        
        if (!file) {
            throw new Error ('Tienes que subir una imagen');
        } else {
            let fileExtension = path.extname(file.originalname); 
            if (!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
            }
            

        }

        return true;
    })

    
]

router.get("/", mainController.index);

router.get("/login", usersController.login);
router.get("/contacto", usersController.contacto);
router.get("/products", productsController.products);
router.get("/carrito", productsController.carrito);

/*** CREATE ONE PRODUCT ***/ 
router.get("/cargaProduc",productsController.cargaProduc);
router.post("/cargaProduc",upload.single('img') ,productsController.store);


/*** REGISTER ***/ 
router.get("/register", usersController.register);
/*** PROCESA REGISTER ***/ 
router.post("/register",upload.single('img'),validations, usersController.processRegister);


/*** GET ONE PRODUCT ***/ 
router.get('/productID/:id', productsController.productID);


router.get("/editProduc/:id",productsController.editProduc);
router.put("/editProduc/:id",productsController.update);

router.delete('/delete/:id', productsController.destroy);

module.exports = router;