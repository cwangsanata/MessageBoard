var express = require('express');
var router = express.Router();
exports.router = router;
const Walls = require('../models/wall.js')
const getDateTime = require('../public/javascript/formatDate.js')

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
    .get((req, res) => {
        res.render('new-wall')
    })
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
                res.render('duplicate')
                console.log(err)
            })
    })

router.route('/:id')
    .get(async (req, res) => {
        await Walls.findById(req.params.id)
            .then(wall => {
                res.render('wall', { 
                    name: wall.name, 
                    description: wall.description, 
                    messages: wall.messages });
            })
            .catch(err => {
                res.render('404')
                console.log(err);
            });
    })
    .post(async (req, res) => {
        await Walls.findById(req.params.id)
            .then(wall => {
                wall.messages.push({
                    text: req.body.message,
                    user: req.body.user,
                    added: getDateTime(new Date())
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
