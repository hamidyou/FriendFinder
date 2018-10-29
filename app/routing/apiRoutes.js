// Dependencies
const express = require('express')
const friends = require('../data/friends.json')
const { reduce, min, findIndex, map, curry, compose, concat } = require('kyanite/dist/kyanite')
const fs = require('fs')
// Create router variable
const router = express.Router()

// Displays all friends in JSON format
router.get('/api/friends', function (req, res) {
  console.log(friends)
  return res.json(friends)
})

const reducer = x => reduce((acc, num) => Number(acc) + Number(num), 0, x)
const mapper = curry((x, y) => map(a => Math.abs(y - reducer(a.scores)), x))
const getIndex = curry((arr, num) => findIndex(x => x === num, arr))
const getInfo = curry((arr, idx) => [friends[idx].name, friends[idx].photo])
const differenceArray = (x, arr) => compose(mapper(arr), reducer, x)
const findMatch = (num, arr) => compose(getInfo(arr), getIndex(arr), num)

const addFriend = (x, y) => {
  const path = 'app/data/friends.json'
  y = concat(x, y)

  fs.writeFile(path, JSON.stringify(y), (err) => {
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

  const compatibleFriend = findMatch(low, diffArray)

  const results =
    `
  ${newFriend.name}, thank you very much for participating.
  Your most compatible friend is: ${compatibleFriend[0]}.
  <img src="${compatibleFriend[1]}" class="img-fluid mt-5 img-thumbnail">
  `

  fs.writeFile('app/data/results.txt', results, err => {
    if (err) {
      throw err
    }
    console.log('Results updated successfully.')
  })

  res.json(newFriend)
})

module.exports = router
