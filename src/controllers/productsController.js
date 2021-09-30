const fs = require('fs');
const path = require('path');
let model = require('../model/products.json')


const productsController = {
    products: (req, res) => {
        res.render('products',{products: model});
    },    
    carrito: (req, res) => {
        res.render ('carrito');
    },   
    cargaProduc: (req, res) => {
        res.render ('cargaProduc'); 
    },
    store: (req, res) => {
        let objeto = {
			
            id: model.length + 1,
			ancho: req.body.detalleProduct,
			perfil: req.body.ProfileProduct,
			rodado: req.body.Rolled,
			marca: req.body.mark,
	     	modelo: req.body.model,
            precio: req.body.priceProduct,
        }
        model.push(objeto)
        fs.writeFileSync(path.join(__dirname,'../model/products.json'),JSON.stringify(model,null,4),{encoding:'utf8'})

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
		let product = model.find(elemento => elemento.id == id)
		res.render('productID', {product: product});
        
    },
    destroy : (req, res) => {
        const idBuscado = req.params.id
         model = model.filter (item => item.id != idBuscado)
        fs.writeFileSync(path.join(__dirname,'../model/products.json'),JSON.stringify(model,null,4),{encoding:'utf8'})

        res.render ('products', {products:model})
	
		
	}
}

module.exports= productsController;


