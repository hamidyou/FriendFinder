const express = require('express')

// Create router variable
const router = express.Router()

let friends = [
  {
    name: 'Ahmed',
    photo: '',
    scores: [1, 2, 3, 4, 5, 6, 1, 2, 3, 4]
  },
  {
    name: 'Youssef',
    photo: '',
    scores: [5, 6, 1, 2, 3, 4, 5, 6, 1, 2]
  },
  {
    name: 'Becky',
    photo: '',
    scores: [3, 4, 5, 6, 5, 4, 3, 2, 1, 2]
  },
  {
    name: 'Ameer',
    photo: '',
    scores: [3, 4, 5, 6, 1, 2, 3, 4, 5, 6]
  },
  {
    name: 'Zayne',
    photo: '',
    scores: [6, 5, 4, 3, 2, 1, 5, 4, 3, 2]
  }
]

// Displays all friends in JSON format
router.get('/api/friends', function (req, res) {
  return res.json(friends)
})

module.exports = friends
