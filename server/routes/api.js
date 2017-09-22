const express = require('express');
const router = express.Router();
var jwt    = require('jsonwebtoken');
var User   = require('../models/users');
var config = require('../config'); // get our config file



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
          username:user.username
        });
      }   

    }

  });
});

router.post('/register', function(req, res) {
  
  //create a sample user
  var user = new User({ 
    email: req.body.email,
    username:req.body.username,
  });
  user.password=user.generateHash(req.body.password);

  //save the sample user
  user.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
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

//GET api listing. 
// router.get('/', (req, res) => {
//   res.send('api works');
// });

router.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});  

module.exports = router;