 const express = require ('express');

 const routerAdmin = express.Router();
 const { validarJWT } = require('../middleware/validarJWT');
 const {

    mostrarAdmin,
    crearAlumno,
    listaAlumnos,

 } = require('../controllers/adminControllers');

 routerAdmin.post ('/datosadmin',validarJWT, mostrarAdmin);

 routerAdmin.post ('/crearalumno',validarJWT, crearAlumno);

 routerAdmin.get ('/listaalumnos',validarJWT, listaAlumnos);





 module.exports = routerAdmin;