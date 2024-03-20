 const express = require ('express');

 const routerAdmin = express.Router();
 const { validarJWT } = require('../middleware/validarJWT');
 const {

    mostrarAdmin,

 } = require('../controllers/adminControllers');

 routerAdmin.post ('/datosadmin',validarJWT, mostrarAdmin);

// routerAdmin.post ("/crearproducto", crearProducto);




 module.exports = routerAdmin;