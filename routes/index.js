var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Welcome to the Wall",
    user: "System",
    added: new Date()
  }
];

router.get('/', function(req, res, next){
  res.render('index', { title: "Wall (β)", messages: messages })
});

router.post('/', function(req, res, next) {
  messages.unshift({text: req.body.message, user: req.body.user, added: new Date()})
  res.redirect('/')
});

module.exports = router;
