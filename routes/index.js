var express = require('express');
var router = express.Router();
const Message = require('../models/message')

router.route('/')
  // GET all messages from our database
  .get((req, res) => {
    Message.find()
    .then(messages => {
      res.render('index', {messages: messages})
    })
    .catch(err => {
      console.log(err)
    })
  })
  // POST a new message to our database
  .post((req, res) => {
    const newMessage = new Message({
      text: req.body.message,
      user: req.body.user,
      added: new Date()
    })
    newMessage.save()
    .then(() => {
      console.log('Message saved')
      res.redirect('/')
    })
    .catch(err => {
      console.log(err)
    })  
  })

module.exports = router;
