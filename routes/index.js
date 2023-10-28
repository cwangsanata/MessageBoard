var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: true}))

const messages = [
  {
    text: "Welcome to the MessageBoard",
    user: "System",
    added: new Date()
  },
];

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('index', { title: "MessageBoard", messages: messages })
});

module.exports = router;
