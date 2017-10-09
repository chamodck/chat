
var mongoose = require('mongoose');

var MessageSchema = new mongoose.Schema({
    to: { type: mongoose.Schema.Types.ObjectId, ref: 'MessageGroup' },
    from : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text : String,
    created_at : { type : Date, default: Date.now }
});


module.exports = mongoose.model('Message', MessageSchema);