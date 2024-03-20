const Admin = require('../model/admin-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const crearAdmin = async (req, res) => {
	const { nombre, apellido, email, password, telefono, } = req.body;
	
	//validar
	if (!nombre || !apellido || !email || !password || !telefono) {
		return res.status(400).json({
			msg: 'Todos los campos son obligatorios',
		});
	}
	// } else if (password < 5) {
	// 	return res.status(400).json({
	// 		msg: ' la contraseña debe ser mayor a 5 caracteres',
	// 	});
	// }

	try {
		//analizamos si el correo ingresado no esta registrado
		let admin = await Admin.findOne({ email });

		//si el correo se encontro lo rechazamos
		if (admin) {
			return res.status(400).json({
				msg: 'Un Administrador ya existe con este correo',
			});
		}

		//en el caso que no exista el correo, creamos una instancia
		admin = new Admin(req.body);

		//encriptar contraseña
		const salt = bcrypt.genSaltSync(10);
		admin.password = bcrypt.hashSync(password, salt);

		//guardamos en la base de datos
		await admin.save();

		res.status(201).json({
			msg: 'Admin Registrado',
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error en el servidor comunicarse con un administrador',
		});
	}
};

const loginAdmin = async (req, res) => {
	const { email, password } = req.body;
	//validan datos

	try {
		let admin = await Admin.findOne({ email });
		if (!admin) {
			return res.status(400).json({
				msg: 'El Correo ingresado no se encuentra',
			});
		}

		const validarPassword = bcrypt.compareSync(password, admin.password);

		if (!validarPassword) {
			return res.status(400).json({
				msg: 'La contraseña es incorrecta',
			});
		}

		//creamos un objeto el cual definimos los datos que queremos guardar en el token, NO GUARDAR INFORMACION SENSIBLE
		const payload = {
			name: admin.nombre,
			id: admin._id,
			rol: admin.rol,
		};

		//creamos el token y definimos cuanto tiempo queremos que dure
		const token = jwt.sign(payload, process.env.SECRET_JWT, {
			expiresIn: '3h',
		});

		const { rol } = admin;

		res.status(200).json({
			msg: 'Admin Logueado',
			rol: admin.rol,
			token,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			msg: 'Error en el servidor comunicarse con un administrador',
		});
	}
};

module.exports = {
	crearAdmin,
	loginAdmin,
};