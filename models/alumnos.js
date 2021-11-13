const { Schema, model } = require('mongoose');

const alumnoSchema = Schema({

    nombre: {
        type: String,
        required: true,
    },
    carrera: {
        type: String,
        required: true,
    },
    seccion: {
        type: String,
        required: true,
    }

});


alumnoSchema.method( 'toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();

    object.uid = _id;
    return object;
})

module.exports = model( 'Alumno', alumnoSchema )