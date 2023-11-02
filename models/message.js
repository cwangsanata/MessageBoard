const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    text: {
        String,
        required: true
    },
    user: {
        String,
        required: true
    },
    added: Date
})

module.exports = mongoose.model('Message', messageSchema)