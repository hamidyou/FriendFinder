// Dependencies
const express = require('express')
const friends = require('../data/friends')

// Create router variable
const router = express.Router()

// Displays all friends in JSON format
router.get('/api/friends', function (req, res) {
  return res.json(friends)
})

// Create New Characters - takes in JSON input
router.post('/api/friends', function (req, res) {
  console.log(req)
  const newFriend = req.body
  newFriend.routeName = newFriend.name.replace(/\s+/g, '').toLowerCase()

  console.log(newFriend)

  res.json(newFriend)
})

module.exports = router
