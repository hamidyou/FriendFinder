// Dependencies
const express = require('express')
// const path = require('path')
const html = require('./app/routing/htmlRoutes')
const api = require('./app/routing/apiRoutes')

// Sets up the Express App
const app = express()
const PORT = process.env.PORT || 5000 // process.env.PORT allows Heroku to dynamically set a port

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('./'))

// Sets up the Express Router
app.use(html)
app.use(api)

app.listen(PORT, function () {
  console.log('App listening on PORT ' + PORT)
})
