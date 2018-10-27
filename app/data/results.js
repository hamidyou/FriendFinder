// Dependencies
const express = require('express')
const path = require('path')
const fs = require('fs')

// Create router variable
const router = express.Router()

// Route to display results
router.get('/results', function (req, res) {
  res.sendFile(path.resolve('app', 'public', 'results.html'))
})

module.exports = router

const display = fs.readFile('./results.txt', err => {
  if (err) {
    throw err
  }
  console.log('File read successfully')
})

const el = document.getElementById('#resultsDisplay')

el.write(display)
