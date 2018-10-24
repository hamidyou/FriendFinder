// Dependencies
const express = require('express')
// const path = require('path')
const html = require('./app/routing/htmlRoutes')
const api = require('./app/routing/apiRoutes')

// Sets up the Express App
const app = express()
const PORT = process.env.PORT || 5000

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(html)
app.use(api)

// app.get('/', function (req, res) {
//   res.sendFile(path.resolve(__dirname, 'app', 'public', 'home.html'))
// })

// // Route to display survey
// app.get('/survey', function (req, res) {
//   res.sendFile(path.resolve(__dirname, 'app', 'public', 'survey.html'))
// })

// // Displays all friends in JSON format
// app.get('/api/friends', function (req, res) {
//   return res.json(friends)
// })

// // Create New Characters - takes in JSON input
// app.post('/api/friends', function (req, res) {
//   // console.log(req)
//   // console.log(res)
//   console.log(req.body)
//   // const newFriend = req.body
//   // newFriend.routeName = newFriend.name.replace(/\s+/g, '').toLowerCase()

//   // console.log(newFriend)
//   // // friends = concat([newFriend, friends])

//   // res.json(newFriend)
// })

app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT)
})
