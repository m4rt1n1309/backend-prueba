const Admin = require('../model/admin-model');

// const crearProducto = async (req, res) => {
// 	const { nombre, descripcion, precio } = req.body;
	
// 	//validar
// 	if (!nombre || !descripcion || !precio) {
// 		return res.status(400).json({
// 			msg: 'Todos los campos son obligatorios',
// 		});
// 	}else if(precio <= 0) {

//         return res.status(400).json({
// 			msg: 'El precio debe ser mayor a cero (0) pesos',
// 		});
//     }
	

// 	try {
		
		
// 		const producto = new Producto(req.body);

		

// 		//guardamos en la base de datos
// 		await producto.save();

// 		res.status(201).json({
// 			msg: 'Producto creado',
// 		});
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).json({
// 			msg: 'Error en el servidor comunicarse con un administrador',
// 		});
// 	}
// };

 const mostrarAdmin = async (req, res) => {
    
	const {email} = req.body;
	
     try {
 		const admin = await Admin.findOne({email});
 		res.status(200).json({
 			msg: 'admin encontrado',
 			admin,
 		});
 	} catch (error) {
 		res.status(500).json({
 			msg: 'Por favor contactarse con el administrador',
 		});
 	}
 };

module.exports = {
// 	crearProducto,
     mostrarAdmin,
 };