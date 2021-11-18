const db = require("../database/models")

const usuarioModel = {
   getUsuario: async () => {
    try {
        const response = await db.Usuarios.findAll()
        return response

    } catch (error) {
        console.log(`fallo consulta a la base de datos ${error.message}`);
    }
   }
}

module.exports = usuarioModel