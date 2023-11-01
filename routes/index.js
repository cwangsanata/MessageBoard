var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Welcome to the Wall",
    user: "System",
    added: new Date().toDateString()
  }
];

router.get('/', function(req, res, next){
  res.render('index', { title: "Wall", messages: messages })
});

router.post('/', function(req, res, next) {
  messages.push({text: req.body.message, user: req.body.user, added: new Date().toDateString()})
  res.redirect('/')
});

module.exports = router;
