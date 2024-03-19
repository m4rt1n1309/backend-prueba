// const Producto = require('../model/productos-model');

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

// const mostrarProducto = async (req, res) => {
	
	
//     try {
// 		const producto = await Producto.find();
// 		res.status(200).json({
// 			msg: 'Productos enviados',
// 			producto,
// 		});
// 	} catch (error) {
// 		res.status(500).json({
// 			msg: 'Por favor contactarse con el administrador',
// 		});
// 	}
// };

// module.exports = {
// 	crearProducto,
//     mostrarProducto,
// };