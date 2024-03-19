const { Schema, model } = require('mongoose');

const adminSchema = Schema({
	nombre: {
		type: String,
		required: true,
	},

	apellido: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},
	
	password: {
		type: String,
		required: true,
	},

	

	telefono: {
		type: Number,
		required: true,
	},
	
	fechaIngreso: {
		type: Date, default: Date,
		required: true,
	},

    rol: {
		type: String,
		default: 'admin',
	},
	colegio: {
		type: String,
		default: 'Tucson School',
	},
	contacto: {
		type: String,
		default: '4257273 - tucsonschool@gmail.com',
	},
	direccion: {
		type: String,
		default: 'Crisostomo Alvarez 555',
	},



    

    


	
});

module.exports = model('Admin', adminSchema);