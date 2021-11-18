const {usuarioModel} = require("../model")

const usuariosController = {

    getUsuario : async (req,res,next) => {
        const respuesta = await usuarioModel.getUsuario()
        res.send(respuesta)
    }
    
}

module.exports = usuariosController