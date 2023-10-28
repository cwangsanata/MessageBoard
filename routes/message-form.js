var express = require('express');
var router = express.Router();

/* GET messages listing. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'New Message'})
});

router.post('/', function(req, res, next) {
  const messageText = req.body.message
  const messageUser = req.body.user
  messages.push({text: messageText, user: messageUser, added: new Date()})
  console.log("POST Request received")
  res.redirect('/')
});


module.exports = router;
