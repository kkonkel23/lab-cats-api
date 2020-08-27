const mongoose = require('mongoose')
const Schema = mongoose.Schema

const catSchema = new Schema({
    name: {type: String, required: true},
    color: {type: String, default: 'Mixed'},
    age: {type: Number, default: 0},
    favoriteToy: String
}, {
      timestamps: true
    }
);

module.exports = mongoose.model('Cat', catSchema)
