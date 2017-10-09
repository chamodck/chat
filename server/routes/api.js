const express = require('express');
const router = express.Router();
var jwt    = require('jsonwebtoken');
var User   = require('../models/users');
var Message   = require('../models/Messages');
var MessageGroup   = require('../models/MessageGroups');
var config = require('../config'); // get our config file

var mongoose = require('mongoose');


// route to authenticate a user (POST http://localhost:8080/api/authenticate)
router.post('/authenticate', function(req, res) {
  //console.log(req.body.email);
  // find the user
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    
    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      // check if password matches
      if (!user.validPassword(req.body.password)) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {

        // if user is found and password is right
        // create a token
        var token = jwt.sign({ email: user.email, username: user.username, _id: user._id}, config.secret, { expiresIn: '24h' });
        
        // return the information including token as JSON]
        user.password=undefined;
        res.json({
          success: true,
          message: 'Authentication successful.',
          token: token,
          email:user.email,
          username:user.username,
          _id:user._id
        });
      }   

    }

  });
});

router.post('/register', function(req, res) {
  User.find({email:req.body.email}, function(err, users) {
    if (err) return handleError(err);

    if(users.length){
      res.json({ success: false,message:'Sign up failed.Email is already taken.' });
    }else{
      //create a sample user
      var user = new User({ 
        email: req.body.email,
        username:req.body.username,
      });
      user.password=user.generateHash(req.body.password);

      //save the sample user
      user.save(function(err) {
        if (err) throw err;

        
        res.json({ success: true });
      });
    }
  });
  
});

// route middleware to verify a token
router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['token'];

  // decode token
  if (token) {

    // verifies secret and checks exp
    jwt.verify(token, config.secret, function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });

  }
});

router.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});  

router.param('currentUserID', function(req, res, next, id) {
  req.currentUserID = id;
  return next();
});

router.get('/getAllFriends/:currentUserID', function(req, res, next) {
    User
      .findById(req.currentUserID)
      .populate('messageGroups') // only works if we pushed refs to children
      .exec(function (err, user) {
        //if (err) return handleError(err);
        if (err) { return next(err); }
        res.json(user);
      })
});

router.param('messageGroupID', function(req, res, next, id) {
  req.messageGroupID = id;
  return next();
});

router.get('/getMessageGroup/:messageGroupID', function(req, res, next) {
    MessageGroup
      .findById(req.messageGroupID)
      .populate('messages') // only works if we pushed refs to children
      .exec(function (err, messageGroup) {
        //if (err) return handleError(err);
        if (err) { return next(err); }
        res.json(messageGroup);
      })
});

router.param('friend', function(req, res, next, id) {
    var query = User.findById(id);

    query.exec(function (err, friend){
      if (err) { return next(err); }
      if (!friend) { return next(new Error('can\'t find user')); }

      req.friend = friend;

      return next();

    });
  });

  router.param('currentUser', function(req, res, next, id) {
    var query = User.findById(id);

    query.exec(function (err, currentUser){
      if (err) { return next(err); }
      if (!currentUser) { return next(new Error('can\'t find user')); }

      req.currentUser = currentUser;

      return next();

    });
  });

  

  function  addChat(req, res) {
    
    var currentUser=req.currentUser;
    var friend=req.friend;
    console.log(currentUser);
    
    
    var Group=new MessageGroup({
      type:'private',
      friendname1:currentUser.username,
      friendname2:friend.username,
      members:[currentUser,friend],
      messages:[],
      name : ''
    });

    console.log(Group);

    Group.save(function(err, group) {
      if(err){ return next(err); }
      Group=group;
    });

    currentUser.messageGroups.push(Group);
    //currentUser.friends.push(friend);
    currentUser.save(function(err, user) {
      if(err){ return next(err); }
      
    });

    friend.messageGroups.push(Group);
    //friend.friends.push(currentUser);
    friend.save(function(err, user) {
      if(err){ return next(err); }
    });
    
    //res.json(Group);

    res.json(Group);
  };

  //router.put('/addAsFriend/:friend/:currentUser',addChat);

  router.put('/createNewMessageGroup/:friend/:currentUser', function(req, res, next) {
    var currentUser=req.currentUser;
    var friend=req.friend;
    //console.log(currentUser);
    
    
    var Group=new MessageGroup({
      type:'private',
      friendname1:currentUser.username,
      friendname2:friend.username,
      members:[currentUser,friend],
      messages:[],
      name : ''
    });

    Group.save(function(err, group) {
      if(err){ return next(err); }
      Group=group;
    });

    currentUser.messageGroups.push(Group);
    currentUser.save(function(err, user) {
      if(err){ return next(err); }
      
    });

    friend.messageGroups.push(Group);
    friend.save(function(err, user) {
      if(err){ return next(err); }
    });
    
    res.json(Group);
  });


router.post('/sendMessage', function(req, res) {
  
  var query = MessageGroup.findById(req.body.messageGroupID);

  query.exec(function (err, messageGroup){
    if (err) { return next(err); }
    if (!messageGroup) { return next(new Error('can\'t find messageGroup')); }

    var message=new Message({
      to:mongoose.Types.ObjectId(messageGroup._id),
      from:mongoose.Types.ObjectId(req.body.currentUserID),
      text:req.body.message
    });

    message.save(function(err) {
      if (err) throw err;  
    });

    messageGroup.messages.push(message);
    
    messageGroup.save(function(err) {
      if (err) throw err;
    });

    res.json(message);

  });
});

module.exports = router;