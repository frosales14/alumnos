
const mongoose = require('mongoose')


const dbConnection = async() => {
    try {
        await mongoose.connect( 'mongodb://localhost:27017/alumnos', {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('BD ONLINE');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD ver logs')
    }
}

module.exports = {
    dbConnection
}
