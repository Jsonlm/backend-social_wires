const moment = require('moment');

const userSchema = db.Mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    lastname: {
        type: String,
        required: [true, 'El apellido es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario'],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    fechaCreacion: {
        type: String,
        default: moment(new Date()).format('YYYY-MM-DD')
    }
});

module.exports = mongoose.model('User', userSchema);