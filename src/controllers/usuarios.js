const {usuarioModel} = require("../model")
const bcryptjs = ("bcrypts");

const usuariosController = {

    getUsuario : async (req,res,next) => {
        const respuesta = await usuarioModel.getUsuario()
        res.render('listaUsuarios', {products: respuesta});
    },

    profile : (req, res, next) => {
        res.render ('userProfile', {user: req.session.userLogged})
    },

    createUsuario: async (req, res, next) => {

       let  userToCreate = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            password: req.body.email,
            avatar: req.file.filename
       }

        try {
            
            const respuesta = await usuarioModel.createUsuario(userToCreate)
            res.redirect('/')

        } catch (error) {
            console.log(`fallo consulta a la base de datos ${error.message}`)
        return []
        }
        
    },














    loginProcces: async  (req,res) => {
        let usuarioParaLogear = await usuarioModel.findByField('email',req.body.nameUsers);
        
        if (usuarioParaLogear) {
            //let okPassword = bcryptjs.compareSync(req.body.password, usuarioParaLogear.password)
            if (req.body.password == usuarioParaLogear.password) {
                delete usuarioParaLogear.password;
                req.session.userLogged = usuarioParaLogear;
                //console.log(req.session);   <-- Para mostrar session activa
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
      //console.log(req.session);
      }

    
}

module.exports = usuariosController