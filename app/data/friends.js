
const express = require('express')
const router = express.Router()
let friends = [
  { 'name': 'Zayne', 'photo': '', 'scores': [6, 5, 4, 3, 2, 1, 5, 4, 3, 2] }
]
router.get('/api/friends', function (req, res) {
  return res.json(friends)
})

module.exports = friends
