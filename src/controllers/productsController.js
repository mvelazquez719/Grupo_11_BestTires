const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../model/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    products: (req, res) => {
        res.render('products');
    },    
    carrito: (req, res) => {
        res.render ('carrito');
    },   
    cargaProduc: (req, res) => {
        res.render ('cargaProduc'); 
    },
    store: (req, res) => {
        
        let objeto = {
			id: products.slice(-1)[0].id + 1,
			ancho: req.body.detalleProduct,
			perfil: req.body.ProfileProduct,
			rodado: req.body.Rolled,
			marca: req.body.mark,
			modelo: req.body.model,
            precio: req.body.priceProduct,
			image: "img-sin-imagen-disponible.jpg"
		};
        

        products.push(objeto);
		let productsJSON = JSON.stringify(products);
		fs.writeFileSync(productsFilePath, productsJSON),JSON.stringify(productsJSON, null, 4),
        {encoding:"utf-8"};

		



        

    },
    
    editProduc: (req, res) => {
        res.render ('editProduc'); 
    },
    productID: (req, res) => {
        res.render ('productID'); 
    }
}

module.exports= productsController;


