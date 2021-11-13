const { response } = require('express');
const alumnos = require('../models/alumnos');



const getAlumnos = async (req, res) => {
    
    const alumnosDB = await alumnos.find()
    res.json({
        ok:true,
        alumnos : alumnosDB
    });
}

const crearAlumno = async (req, res) => {
    
    const uid = req.uid;
    const alumno = new alumnos({
        usuario: uid,
        ... req.body
    });

    try {

        alumnoDB = await alumno.save();

        res.json({
            ok:true,
            alumno: alumnoDB
        });

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Algo salio mal contacte al administrador'
        });
    }

}


module.exports = {
    getAlumnos,
    crearAlumno
}