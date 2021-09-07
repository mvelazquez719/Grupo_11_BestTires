const usersController = {
    register:(req, res) => {
        res.render("register");
    },
    
    login:(req, res) => {
       res.render("login");
    },
    contacto:(req, res) => {
        res.render("contacto");
     }
}

module.exports= usersController;

