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

	curso: {
		type: String,
		required: true,
	},

	
	situacionCuota: {
		type: Boolean,
		required: true,
	},

	matematicas: {
		type: String,
		required: true,
		default: '0',
	},

	lenguaLiteratura: {
	type: String,
	default: '0',
	},

	biologia: {
	type: String,
	default: '0',
	},

	fisica: {
	type: String,
	default: '0',
	},

	quimica: {
	type: String,
	default: '0',
	},

	economia: {
	type: String,
	default: '0',
	},

	geografia: {
	type: String,
	default: '0',
	},

	historia: {
	type: String,
	default: '0',
	},


	educacionFisica: {
	type: String,
	default: '0',
	},


	
});

module.exports = model('Alumno', alumnoSchema);