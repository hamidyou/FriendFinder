// Dependencies
const express = require('express')
let friends = require('../data/friends.json')
const { reduce, min, findIndex, map, curry, compose, concat } = require('kyanite/dist/kyanite')
const fs = require('fs')
// Create router variable
const router = express.Router()

// const getFriends = () => {
//   return new Promise((resolve, reject) => {
//     fs.readFile('app/data/friends.json', (err, data) => {
//       if (err) {
//         return reject(err)
//       }
//       resolve(data)
//     })
//   })
// }

// Displays all friends in JSON format
router.get('/api/friends', function (req, res) {
  return res.json(friends)
})

const reducer = x => reduce((acc, num) => Number(acc) + Number(num), 0, x)
const mapper = curry((x, y) => map(a => Math.abs(y - reducer(a.scores)), x))
const getIndex = curry((arr, num) => findIndex(x => x === num, arr))
const differenceArray = (x, arr) => compose(mapper(arr), reducer, x)
const getInfo = curry((arr, idx) => [friends[idx].name, friends[idx].photo])
const findMatch = (num, arr) => compose(getInfo(arr), getIndex(arr), num)

const addFriend = y => {
  const path = 'app/data/friends.json'

  fs.writeFile(path, JSON.stringify(y), (err) => {
    if (err) {
      throw err
    }
    console.log('File updated successfully.')
  })
}

// const match = x => {
//   fs.writeFile('app/data/results.json', JSON.stringify(x), err => {
//     if (err) {
//       throw err
//     }
//   })
// }

router.post('/api/friends', function (req, res) {
  const newFriend = req.body

  const diffArray = differenceArray(newFriend.scores, friends)
  const low = min(diffArray)
  const compatibleFriend = findMatch(low, diffArray)

  newFriend.match = compatibleFriend

  friends = concat(newFriend, friends)

  addFriend(friends)
  // match(newFriend)

  console.log('Results updated successfully.')
  res.json(compatibleFriend)
})

module.exports = router
