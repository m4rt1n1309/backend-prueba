const express = require('express');
const {
	
	loginAdmin,
	crearAdmin,
} = require('../controllers/authControllers');
const { check } = require('express-validator');
const { validarCampos } = require('../middleware/validarCampos');

const routerAuth = express.Router();

routerAuth.post('/login', loginAdmin);

routerAuth.post(
	'/registro',
	[check('email', 'No es un Email valido').not().isEmpty().isEmail(), validarCampos],
	crearAdmin);



//exportar archivo
module.exports = routerAuth;