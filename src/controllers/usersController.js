const fs = require('fs');
const path = require('path');
const {validationResult} = require ('express-validator');


const usuariosPath = path.join(__dirname, '../model/users.json');
let users = JSON.parse(fs.readFileSync(usuariosPath, 'utf-8'));



const usersController = {
    register: (req, res) => {
        res.render('register');
    },
    processRegister: (req, res) => {
        const resultValidation = validationResult(req)
        
        if (resultValidation.errors.length > 0){
            return res.render ('register',{
                errors:resultValidation.mapped()  //<---- mapped ( vuelve el Array de errores a un objeto literal)
            });
        }
    },
    
    login:(req, res) => {
       res.render('login');
    },

    contacto:(req, res) => {
        res.render('contacto');
     }
}

module.exports= usersController;

