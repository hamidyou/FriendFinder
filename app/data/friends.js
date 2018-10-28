
const express = require('express')
const router = express.Router()
const friendsJson = require('./friends.json')

let friends = friendsJson

router.get('/api/friends', function (req, res) {
  return res.json(friends)
})

module.exports = friends
