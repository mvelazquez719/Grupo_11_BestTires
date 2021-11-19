const {usuarioModel} = require("../model")

const usuariosController = {

    getUsuario : async (req,res,next) => {
        const respuesta = await usuarioModel.getUsuario()
        res.render('listaUsuarios', {products: respuesta});
    },

    profile : (req, res, next) => {
        res.render ('userProfile', {user: req.session.userLogged})
    },

    createUsuario: async (req, res, next) => {
        console.log(req.body)
        const respuesta = await usuarioModel.createUsuario(req.body)
        res.redirect('/')
    },
    loginProcces: (req,res) => {
        let usuarioParaLogear = usuarioModel.findByField('email',req.body.nameUsers);
        if (usuarioParaLogear) {
            let okPassword = bcryptjs.compareSync(req.body.contraseña, usuarioParaLogear.contraseña)
            if (okPassword) {
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
      console.log(req.session);
      }

    
}

module.exports = usuariosController