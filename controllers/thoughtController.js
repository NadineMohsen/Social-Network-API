const { createSecureServer } = require('http2');
const {User, Thought}= require('../models');

module.exports={
    //GET to get all thoughts
    getThoughts(req,res){
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err)=> res.status(500).json(err))
    },
    // GET to get a single thought by its _id
    
}