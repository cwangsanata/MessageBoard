var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Welcome to the MessageBoard",
    user: "System",
    added: new Date()
  }
];

router.get('/', function(req, res, next){
  res.render('index', { title: "MessageBoard", messages: messages })
});

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.message, user: req.body.user, added: new Date()})
  console.log("POST Request received")
  res.redirect('/')
});

module.exports = router;
