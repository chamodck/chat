
var mongoose = require('mongoose');
var MessageSchema   = require('./Messages');



var MessageGroupSchema = new mongoose.Schema({
    name : {type:String,default:''},
    friendname1 : String,
    friendname2 : String,
    members : [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    created_at : { type : Date, default: Date.now },
    messages :[{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
    type : String
});

module.exports = mongoose.model('MessageGroup', MessageGroupSchema);