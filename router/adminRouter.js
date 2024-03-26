 const express = require ('express');

 const routerAdmin = express.Router();
 const { validarJWT } = require('../middleware/validarJWT');
 const {

    mostrarAdmin,
    crearAlumno,
    listaAlumnos,
    editarAlumno,
    eliminaralumno,
    cargarNotas,

 } = require('../controllers/adminControllers');

 routerAdmin.post ('/datosadmin',validarJWT, mostrarAdmin);

 routerAdmin.post ('/crearalumno',validarJWT, crearAlumno);

 routerAdmin.get ('/listaalumnos',validarJWT, listaAlumnos);

 routerAdmin.put('/editaralumno', validarJWT, editarAlumno);

 routerAdmin.put('/cargarnotas', validarJWT, cargarNotas);

 routerAdmin.delete('/eliminaralumno/:id', validarJWT, eliminaralumno);






 module.exports = routerAdmin;