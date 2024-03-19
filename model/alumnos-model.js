const { Schema, model } = require('mongoose');

const alumnoSchema = Schema({
	nombre: {
		type: String,
		required: true,
	},

	apellido: {
		type: String,
		required: true,
	},

	añoCurso: {
		type: Number,
		required: true,
	},

	expediente: {
		type: Number,
		required: true,
	},
	
	situacionCuota: {
		type: Boolean,
		required: true,
	},


	
});

module.exports = model('Alumno', alumnoSchema);