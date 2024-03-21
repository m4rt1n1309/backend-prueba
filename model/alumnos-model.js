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
	},

	lenguaLiteratura: {
	type: String,
	required: true,},

	biologia: {
	type: String,
	required: true,},

	fisica: {
	type: String,
	required: true,},

	quimica: {
	type: String,
	required: true,},

	economia: {
	type: String,
	required: true,},

	geografia: {
	type: String,
	required: true,},

	historia: {
	type: String,
	required: true,},


	educacionFisica: {
	type: String,
	required: true,},


	
});

module.exports = model('Alumno', alumnoSchema);