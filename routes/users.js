const express = require('express');
const router =  express.Router();
let User = require("../models/user.model");
// landing route get: retrieved all users
router.route('/').get((req, res) => {
	User.find()
	.then((users) => res.json(users))
	  .catch(err => res.status(400).json('Error: ' + err));
});
// add route post: add a new user
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
	 const newUser = new User({username,email});
 	 newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
//id route get: retrieved specified user
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});
//id route delete: delete specified user
router.route('/:id').delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json('User deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
// update route: update an user data
router.route('/update/:id').post((req, res) => {
	User.findById(req.params.id)
    .then(user => {
      user.username = req.body.username;
      user.email = req.body.email;
      user.save()
        .then(() => res.json('User updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;