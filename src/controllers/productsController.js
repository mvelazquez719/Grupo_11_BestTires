const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../model/products.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    products: (req, res) => {
        res.render('products',{products: products});
    },    
    carrito: (req, res) => {
        res.render ('carrito');
    },   
    cargaProduc: (req, res) => {
        res.render ('cargaProduc'); 
    },
    store: (req, res) => {
        
        let objeto = {
			
            id: products.length + 1,
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

        res.redirect ('products')

    },
    
    editProduc: (req, res) => {
        let id = req.params.id;
		let product = products.find(elemento => elemento.id == id)
		res.render ('editProduc',{product: product}); 
        
    },
    update: (req, res) => {
        let id = req.params.id;
		products.forEach(elemento => {
			if (elemento.id == id){
				elemento.ancho = req.body.ancho;
				elemento.perfil = req.body.perfil;
				elemento.rodado = req.body.rodado;
				elemento.marca = req.body.marca;
				elemento.modelo = req.body.modelo;
                elemento.precio = req.body.precio;
                
				//elemento.image: ""
			}
		});

        let productsJSON = JSON.stringify(products);
		fs.writeFileSync(productsFilePath, productsJSON),
        

        res.redirect('/productID/' + id);

    },
    productID: (req, res) => {
        let id = req.params.id;
		let product = products.find(elemento => elemento.id == id)
		res.render('productID', {product: product});
        
    },
    destroy : (req, res) => {
		let id = req.params.id;
		products=products.filter(elemento => elemento.id != id);
		let productsJSON = JSON.stringify(products);
		fs.writeFileSync(productsFilePath, productsJSON);
		
	}
}

module.exports= productsController;


