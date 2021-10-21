const fs = require('fs');
const path = require('path');
const {validationResult} = require ('express-validator');
const User = require ('../model/User');
const bcryptjs = require ('bcryptjs')
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

        let userInDb = User.findByField('email', req.body.email);

        if (userInDb) {
            return res.render ('register',{
                errors: {
                    email: {
                        msg: 'Este email ya está registrado'
                    }
                },
                oldData: req.body,
        })
    }

        let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }

        let userCreated = User.create(userToCreate);

        return res.redirect('login');
    },
    
    login:(req, res) => {
        console.log(req.session);
       res.render('login');
    },

    loginProcces: (req,res) => {
      let usuarioParaLogear = User.findByField('email',req.body.nameUsers);
      if (usuarioParaLogear) {
          let okPassword = bcryptjs.compareSync(req.body.password, usuarioParaLogear.password)
          if (okPassword) {
              return res.redirect('/')
          }

          return res.render ('login',{
            errors: {
                email:{
                    msg: 'Las credenciales son invalidas'
                }
            }
        })
  
      }
      return res.render ('login',{
        errors: {
            email:{
                msg: 'No se encuentra registrado'
            }
        }
    })
    },

    contacto:(req, res) => {
        res.render('contacto');
     }
}

module.exports= usersController;

