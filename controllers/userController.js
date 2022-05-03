const { createSecureServer } = require('http2');
const {User, Thought}= require('../models');

module.exports={
    //GET all users
    getUsers(req,res){
        User.find()
        .then((users) => res.json(users))
        .catch((err)=> res.status(500).json(err))
    },
    //GET a single user by its _id and populated thought and friend data
    getSingleUser(req,res){
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .populate('thoughts')
        .populate('friends')
        .then((user)=>
        !user
            ? res.status(404).json({message: 'No user with that ID'})
            : res.json(user)
        )  
        .catch((err)=> res.status(500).json(err))  
    },
    //POST a new user
    // createUser(req,res){
    //     User.create(req,)
    // }
}