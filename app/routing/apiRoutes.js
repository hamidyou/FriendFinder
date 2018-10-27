// Dependencies
const express = require('express')
const friends = require('../data/friends')
const { reduce, min, findIndex, map, curry, compose } = require('kyanite/dist/kyanite')
const fs = require('fs')
// Create router variable
const router = express.Router()

// Displays all friends in JSON format
router.get('/api/friends', function (req, res) {
  return res.json(friends)
})

const reducer = x => reduce((acc, num) => Number(acc) + Number(num), 0, x)
const mapper = curry((x, y) => map(a => Math.abs(y - reducer(a.scores)), x))
const getIndex = curry((arr, num) => findIndex(x => x === num, arr))
const getInfo = curry((arr, idx) => [friends[idx].name, friends[idx].photo])
const differenceArray = (x, arr) => compose(mapper(arr), reducer, x)
const findMatch = (num, arr) => compose(getInfo(arr), getIndex(arr), num)

const addFriend = (x, y) => {
  const path = 'app/data/friends.js'
  const newFriendJson = JSON.stringify(x)
  const friendsJson = map(a => JSON.stringify(a), y).join(',')
  const content =
    `
    const express = require('express') 
    const router = express.Router()
    let friends = [
      ${newFriendJson},
      ${friendsJson}
    ]
    router.get('/api/friends', function (req, res) {
      return res.json(friends)
    })

    module.exports = friends
    `

  fs.writeFile(path, content, (err) => {
    if (err) {
      throw err
    }
    console.log('File updated successfully.')
  })
}

// Create New Characters - takes in JSON input
router.post('/api/friends', function (req, res) {
  const newFriend = req.body
  addFriend(newFriend, friends)

  const diffArray = differenceArray(newFriend.scores, friends)
  const low = min(diffArray)

  const results =
    `
    Your most compatible friend is: ${findMatch(low, diffArray)[0]}.
  `

  fs.writeFile('app/data/results.txt', results, err => {
    if (err) {
      throw err
    }
    console.log('Results updated successfully.')
  }
  )

  res.json(newFriend)
})

module.exports = router
