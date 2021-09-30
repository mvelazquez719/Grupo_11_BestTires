const fs = require('fs');
const path = require('path');

const usuariosPath = path.join(__dirname, '../model/users.json');
let users = JSON.parse(fs.readFileSync(usuariosPath, 'utf-8'));



const usersController = {
    register: (req, res) => {
        res.render('register');
    },
    storee: (req, res) => {
        
        let objetoo = {
			id: users.length + 1,
			nombre: req.body.firstName,
			apellido: req.body.lastName,
			nombreusuario: req.body.nameUsers,
			email: req.body.email,
			contrasenia: req.body.password,
            contrasenia2: req.body.passwordConfirmacion,
			
		};
        console.log(objetoo)

        users.push(objetoo);
		let usuariosJSON = JSON.stringify(users);
		fs.writeFileSync(usuariosPath, usuariosJSON),JSON.stringify(users, null, 4),
        {encoding:"utf-8"};

		
        
    },
    
    login:(req, res) => {
       res.render('login');
    },

    contacto:(req, res) => {
        res.render('contacto');
     }
}

module.exports= usersController;

