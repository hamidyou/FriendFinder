// Dependencies
const server = require('../../server')
const friends = require('../data/friends')
const { concat } = require('kyanite/dist/kyanite')

// Setting vars from dependencies
const app = server.app

// Displays all friends in JSON format
app.get('/api/friends', function (req, res) {
  return res.json(friends)
})

// Create New Characters - takes in JSON input
app.post('/api/friends', function (req, res) {
  console.log(req)
  const newFriend = req.body
  newFriend.routeName = newFriend.name.replace(/\s+/g, '').toLowerCase()

  console.log(newFriend)

  res.json(newFriend)
})
