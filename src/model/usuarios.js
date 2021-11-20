const db = require("../database/models")
const bcryptjs = require ('bcryptjs')

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
     const response = await db.Usuarios.create(usuario)
     //console.log(response)  < Para ver si se creo correctamente 
         
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







    editUsuario: async (user) => {
        const response = await db.Usuarios.update(
            {
                
                 ...user
            },
            {
                where: {
                    id: user.id
                }
            }
        )
    }
}

module.exports = usuarioModel


