// Dependencies
const express = require('express')
const friends = require('../data/friends')
const { concat, pipe, sub, reduce, min, findIndex, map, curry, compose, max } = require('kyanite/dist/kyanite')

// Create router variable
const router = express.Router()

// Displays all friends in JSON format
router.get('/api/friends', function (req, res) {
  return res.json(friends)
})

const reducer = x => reduce((acc, num) => Number(acc) + Number(num), 0, x)

const mapper = curry((x, y) => map(a => Math.abs(y - reducer(a.scores)), x))

const getIndex = curry((arr, num) => findIndex(x => x === num, arr))

const getName = curry((arr, idx) => friends[idx].name)

const differenceArray = (x, arr) => compose(mapper(arr), reducer, x)

//   pipe([
//   reducer, // sum of scores
//   mapper(arr), // [difference of scores compared to all friends]
//   min // return the lowest difference
// ], x)

// Create New Characters - takes in JSON input
router.post('/api/friends', function (req, res) {
  const newFriend = req.body

  const diffArray = differenceArray(newFriend.scores, friends)
  const low = min(diffArray)
  const findMatch = (num, arr) => compose(getName(arr), getIndex(arr), num)

  console.log(findMatch(low, diffArray))

  res.json(newFriend)
})

module.exports = router
