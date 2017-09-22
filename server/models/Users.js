var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var UserSchema = new mongoose.Schema({
    email        : String,
    password     : String,
    username	 : String,
    friends: [{_id: { type: String, ref: 'User' }}],
  	messageGroups : [{ type: mongoose.Schema.Types.ObjectId, ref: 'MessageGroup' }]

});

// generating a hash
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
