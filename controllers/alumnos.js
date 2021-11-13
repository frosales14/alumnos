const { response } = require('express');
const alumnos = require('../models/alumnos');



const getAlumnos = async (req, res) => {
    
    const alumnos = await alumnos.find()
    // const medicos = await Medico.find()
    //     .populate( 'usuario','nombre')
    //     .populate( 'hospital', 'nombre');

    res.json({
        ok:true,
        alumnos
    });
}

// const getMedicoById = async(req, res) => {
//     const id = req.params.id;
//     try {
        
//         const medico = await Medico.findById(id)
//             .populate( 'usuario','nombre')
//             .populate( 'hospital', 'nombre');

//         if(!medico){
//             return res.status(404).json({
//                 ok: false,
//                 msg: `No se encontro un medico con el id ${id}`
//             });
//         }

//         return res.json({
//             ok: true,
//             medico
//         })

//     } catch (error) {
//         return res.status(500).json({
//             ok: false,
//             msg: "Contacte con el administrador"
//         })
//     }
// }

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
// const actualizarMedicos = async (req, res) => {
    
//     try {
//         const id = req.params.id;

//         const medico = await Medico.findById( id );

//         if(!medico){
//             return res.status(400).json({
//                 ok: false,
//                 msg: 'No se encontro un medico con ese id'
//             });
//         }

//         const cambiosMedico = {
//             ...req.body,
//             usuario: req.uid
//         };

//         const medicoActualizado = await Medico.findByIdAndUpdate( id, cambiosMedico,{new:true} )
        
//         res.json({
//             ok:true,
//             medicoActualizado
//         });


//     } catch (error) {
//         return res.status(500).json({
//             ok:true,
//             msg: 'actualizarMedicos'
//         });
//     }
    
// }
// const eliminarMedicos = async (req, res) => {

//     try {
//         const id = req.params.id

//         const medico = await Medico.findById( id );
        
//         if( !medico ){
//             return res.status(400).json({
//                 ok: true,
//                 msg: 'No se encontro medico con el ID'
//             });
//         }

//         await Medico.findByIdAndDelete( id );

//         return res.json({
//             ok: true,
//             msg: 'Medico Eliminado Exitosamente'
//         });

//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             ok: true,
//             msg: 'Error inesperado contacte al administrador'
//         });
//     }
// }

module.exports = {
    getAlumnos,
    crearAlumno
}