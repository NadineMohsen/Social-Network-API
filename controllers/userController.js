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
    createUser(req,res){
        User.create(req.body)
        .then((dbUserData) => res.json(dbUserData))
        .catch((err) => res.status(500).json(err));
    },
    //PUT to update a user by its _id
    updateSingleUser(req,res){
        User.findOneAndUpdate(
            {_id: req.params.userId},
            { $set: req.body },
            { runValidators: true, new: true }
            )
        .then((user)=>
            !user
            ? res.status(404).json({message: 'No user with that ID'})
            : res.json(user)
        )  
        .catch((err)=> res.status(500).json(err))  
    },
    // DELETE to remove user by its _id
    deleteSingleUser(req,res){
        User.findOneAndDelete({ _id: req.params.userId })
        .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
         )
      .then(() => res.json({ message: 'User and associated thoughts deleted!' }))
      .catch((err) => res.status(500).json(err));
    },
    //POST to add a new friend to a user's friend list
    addFriend(req,res){
       User.findOneAndUpdate(
           {_id:req.params.userId},
           { $addToSet: { friends: req.params.friendId} },
           { runValidators: true, new: true }
        ) 
        .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
    },
    // DELETE to remove a friend from a user's friend list
    deleteFriend(req,res){
        User.findOneAndUpdate(
            {_id:req.params.userId},
            {$pull: {friends: req.params.friendId}},
            { runValidators: true, new: true }
        )
        .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: 'No user found with that ID :(' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));  
    }
}