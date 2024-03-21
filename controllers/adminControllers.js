const Admin = require('../model/admin-model');
const Alumno = require('../model/alumnos-model');


 const crearAlumno = async (req, res) => {
 	const { nombre, apellido, curso, situacionCuota,matematicas,lenguaLiteratura,biologia,fisica,quimica,economia,geografia,historia,educacionFisica } = req.body;
	
 	//validar
 	if (!nombre || !apellido|| !curso|| !situacionCuota||!matematicas||!lenguaLiteratura||!biologia||!fisica||!quimica||!economia||!geografia||!historia||!educacionFisica) {
 		return res.status(400).json({
 			msg: 'Todos los campos son obligatorios',
 		});
 	}else if(curso < 1 || curso > 4) {

         return res.status(400).json({
 			msg: 'El año que cursa debe estar entre 1° y 4°',
 		});
    }else if((matematicas||lenguaLiteratura||biologia||fisica||quimica||economia||geografia||historia||educacionFisica)<0 ||(matematicas||lenguaLiteratura||biologia||fisica||quimica||economia||geografia||historia||educacionFisica) >10) {

		return res.status(400).json({
			msg: 'la nota debe ser entre los valores 0 y 10',
		});
	}
	

 	try {
		
		
 		const alumno = new Alumno(req.body);

		

 		//guardamos en la base de datos
 		await alumno.save();

 		res.status(201).json({
 			msg: 'alumno registrado',
 		});
 	} catch (error) {
 		console.log(error);
 		res.status(500).json({
 			msg: 'Error en el servidor comunicarse con un administrador',
 		});
 	}
 };

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
 	 crearAlumno,
     mostrarAdmin,
 };