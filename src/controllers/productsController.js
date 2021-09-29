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
    editProduc: (req, res) => {
        res.render ('editProduc'); 
    },
    productID: (req, res) => {
        res.render ('productID'); 
    }
}

module.exports= productsController;


