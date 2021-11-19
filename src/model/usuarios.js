const db = require("../database/models")
const bcrypt = require ('bcrypt')

const usuarioModel = {

   getUsuario: async () => {
    try {
        const response = await db.Usuarios.findAll()
        return response

    } catch (error) {
        console.log(`fallo consulta a la base de datos ${error.message}`);
    }
   },

   createUsuario: async (usuario) => {
       try {
         const response = await db.Usuarios.create(
             {
                 ...usuario,
                

             }
         )

       } catch (error) {
           console.log(`fallo consulta a la base de datos ${error.message}`)
           return []
       }
   },
   findByField: async function  (field, text){
    let allUsers = await this.getUsuario()
    
    let userFound= allUsers.find(oneUser => oneUser[field] === text);
    return userFound;
},
}

module.exports = usuarioModel