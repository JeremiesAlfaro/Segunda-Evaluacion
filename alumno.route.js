const express = require('express');
const dbcontroller = require('./dbcontroller');
const router = express.Router();

router.get('/alumno', dbcontroller.getAlumnos);
router.get('/alumno/:id', dbcontroller.getAlumnoById);
router.post('/alumno', dbcontroller.createAlumno);
router.delete('/alumno/:id', dbcontroller.deleteAlumno);
router.put('/alumno', dbcontroller.updateAlumno);

module.exports = router;