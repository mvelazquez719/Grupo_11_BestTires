const productsController = {
    productDetail: (req, res) => {
        res.render('productDetail');
    },    
    carrito: (req, res) => {
        res.render ('carrito');
    },   
    cargaProduc: (req, res) => {
        res.render ('cargaProduc'); 
    }
}

module.exports= productsController;


