const fs = require('fs');
const path = require('path');
const {validationResult} = require ('express-validator');


const usuariosPath = path.join(__dirname, '../database/users.json');
let users = JSON.parse(fs.readFileSync(usuariosPath, 'utf-8'));



const usersController = {
    register: (req, res) => {
        res.render('register');
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req)
        
        if (resultValidation.errors.length > 0){
            return res.render ('register',{
                errors: resultValidation.mapped(),  //<---- mapped ( vuelve el Array de errores a un objeto literal)
                oldData: req.body,
            });
        }

        return res.send ('ok, las validaciones se pasaron y no tienen errores');
    },
    
    login:(req, res) => {
       res.render('login');
    },

    contacto:(req, res) => {
        res.render('contacto');
     }
}

module.exports= usersController;

