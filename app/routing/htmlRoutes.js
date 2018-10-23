// Dependencies
const server = require('../../server')

// Setting vars from dependencies
const app = server.app
const path = server.path

// Default route to display homepage
app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'app', 'public', 'home.html'))
})

// Route to display survey
app.get('/survey', function (req, res) {
  res.sendFile(path.resolve(__dirname, 'app', 'public', 'survey.html'))
})
