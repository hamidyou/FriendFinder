// Dependencies
const express = require('express')
const path = require('path')

// Create router variable
const router = express.Router()

// Default route to display homepage
router.get('/', function (req, res) {
  res.sendFile(path.resolve('app', 'public', 'home.html'))
})

// Route to display survey
router.get('/survey', function (req, res) {
  res.sendFile(path.resolve('app', 'public', 'survey.html'))
})

module.exports = router
