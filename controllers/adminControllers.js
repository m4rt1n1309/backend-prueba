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

 const listaAlumnos = async (req, res) => {
	const listaAlumnos = await Alumno.find();

	res.status(200).json({
		msg: 'lista de alumnos enviada',
		listaAlumnos,
	});
};

 const mostrarAdmin = async (req, res) => {
    
	
	
     try {
 		const admin = await Admin.findById(req.body._id);
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

 const editarAlumno = async (req, res) => {
	try {
		const alumno = await Alumno.findById(req.body._id);

		if (!alumno) {
			return res.status(400).json({
				msg: 'no existe un alumno con este ID',
			});
		}

		await Alumno.findByIdAndUpdate(req.body._id, req.body);
		res.json({
			msg: 'alumno editado',
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Por favor comunicarse con el administrador',
		});
		console.log(error);
	}
	
};


const eliminaralumno = async (req, res) => {
	try {
		const alumno = await Alumno.findById(req.params.id);

		if (alumno == undefined) {
			return res.status(400).json({
				msg: 'No existe el alumno',
			});
		}

		await Alumno.findByIdAndDelete(req.params.id);

		res.status(200).json({
			msg: 'alumno Eliminado',
		});
	} catch (error) {
		res.status(500).json({
			msg: 'Por favor comunicarse con el administrador',
		});
		console.log(error);
	}
};




module.exports = {
 	 crearAlumno,
     mostrarAdmin,
	 listaAlumnos,
	 editarAlumno,
	 eliminaralumno,

 };

