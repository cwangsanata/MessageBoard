var express = require('express');
var router = express.Router();
exports.router = router;
const Walls = require('../models/wall.js')

// router.route('/wall')
//   // GET all messages from our database
//   .get((req, res) => {
//     Message.find()
//     .then(messages => {
//       console.log(messages)
//       res.render('index', {messages: messages})
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   })
//   // POST a new message to our database
//   .post((req, res) => {
//     const newMessage = new Message({
//       text: req.body.message,
//       user: req.body.user,
//       added: new Date()
//     })
//     newMessage.save()
//     .then(() => {
//       console.log('Message saved')
//       res.redirect('/')
//     })
//     .catch(err => {
//       console.log(err)
//     })  
//   })

// router.route('/wall/:id')
//     .get((req, res) => {
//         Message.find()
//         .then(messages => {
//         console.log(messages)
//         res.render('index', {messages: messages})
//         })
//         .catch(err => {
//         console.log(err)
//         })
//     })
//   // POST a new message to our database
//     .post((req, res) => {
//     const newMessage = new Message({
//         text: req.body.message,
//         user: req.body.user,
//         added: new Date()
//     })
//     newMessage.save()
//     .then(() => {
//         console.log('Message saved')
//         res.redirect('/')
//     })
//     .catch(err => {
//         console.log(err)
//     })
//     })

testMessages = [{
    text: "Hello World!",
    user: "John Doe",
    added: new Date()
}]

router.route('/')
    .get((req, res) => {
        Walls.find()
            .then(walls => {
                console.log(walls)
                res.render('walls', { walls: walls })
            })
            .catch(err => {
                console.log(err)
            })
    });

router.route('/new-wall')
    .post((req, res) => {
        const newWall = new Walls({
            name: req.body.name,
            description: req.body.description,
            messages: req.body.messages
        })
        newWall.save()
            .then(() => {
                console.log('Wall saved')
                res.redirect(`/walls/${newWall._id}`)
            })
            .catch(err => {
                console.log(err)
            })
    })

router.route('/:id')
    .get((req, res) => {
        Walls.findById(req.params.id)
            .then(wall => {
                console.log(wall);
                res.render('wall', { messages: wall.messages });
            })
            .catch(err => {
                console.log(err);
            });
    });


router.route('/:id/new-message')
    .post((req, res) => {
        Walls.findById(req.params.id)
            .then(wall => {
                wall.messages.push({
                    text: req.body.message,
                    user: req.body.user,
                    added: new Date()
                })
                wall.save()
                    .then(() => {
                        console.log('Message saved')
                        res.redirect(`/walls/${req.params.id}`)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
            .catch(err => {
                console.log(err)
            })
    });


module.exports = router;
