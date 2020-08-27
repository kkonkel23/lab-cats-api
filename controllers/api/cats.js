const Cat = require('../../models/cat')

module.exports = {
    index,
    show,
    create,
    update,
    delete: deleteOne
}

function index(req,res){
    Cat.find({})
    .then((cats) => {
        res.status(200).json(cats)
    })
}

function show(req,res){
    Cat.findById(req.params.id)
    .then((cat) => {
        res.status(200).json(cat)
    })
}

function create(req,res){
    Cat.create(req.body)
    .then((cat) => {
        res.status(201).json(cat)
    })
}

function update(req,res){
    Cat.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((cat) => {
        res.status(200).json(cat)
    })
}

function deleteOne(req,res){
    Cat.findByIdAndDelete(req.params.id)
    .then((cat) => {
        res.status(200).json(cat)
    })
}