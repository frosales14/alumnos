const { Router } = require('express');
const { getAlumnos, crearAlumno } = require('../controllers/alumnos');
const { check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

router.get( '/' ,getAlumnos );

router.post( '/',
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('carrera', 'La carrera es obligatoria').not().isEmpty(),
        check('seccion', 'la seccion es Obligatoria').not().isEmpty(),
        validarCampos
    ],
    crearAlumno 
);

// router.put( '/:id', 
//     [
//         validarJwt,
//         check('nombre', 'El nombre es obligatorio').not().isEmpty(),
//         check('role', 'La contraseña es obligatoria').not().isEmpty(),
//         check('email', 'El role es Obligatorio').isEmail(),
//         validarCampos
//     ],
//     editarUsuario 
// );

// router.delete('/:id', validarJwt, borrarUsuario);

module.exports = router;