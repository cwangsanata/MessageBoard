const mongoose = require('mongoose')
const Schema = mongoose.Schema

const wallSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    messages: {
        type: Array,
        default: []
    }
})

module.exports = mongoose.model('Wall', wallSchema)