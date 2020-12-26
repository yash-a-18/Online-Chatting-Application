var mongoose = require('mongoose')
var bcrypt = require('bcrypt');
var userSchema = mongoose.Schema({
    firstname: { type: String, require: true },
    lastname: { type: String, require: true },
    dob: { type: String, require: true },
    email: { type: String, require: true },
    mobileno: { type: Number, require: true },
    pswd: { type: String, require: true }
}, { timestamp: true })

userSchema.statics.hashPassword = function hashPassword(pswd) {
    return bcrypt.hashSync(pswd, 10);
}

userSchema.methods.isValid = function(hashedpassword) {
    return bcrypt.compareSync(hashedpassword, this.pswd);
}

module.exports = mongoose.model('user', userSchema)