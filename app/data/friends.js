
const express = require('express')
const router = express.Router()
let friends = [
  { 'name': 'Youssef Hamid', 'photo': '', 'scores': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'] },
  { 'name': 'Inspector Gadget', 'photo': '', 'scores': ['6', '1', '5', '1', '6', '4', '6', '3', '1', '4'] },
  { 'name': 'Inspector Gadget', 'photo': '', 'scores': ['6', '1', '5', '1', '6', '4', '6', '3', '1', '4'] },
  { 'name': 'Dr. Pepper', 'photo': '', 'scores': ['3', '1', '6', '6', '6', '3', '6', '6', '3', '3'] },
  { 'name': 'Suzy', 'photo': '', 'scores': ['5', '1', '5', '2', '4', '4', '4', '1', '1', '1'] },
  { 'name': 'Jacob', 'photo': '', 'scores': ['3', '4', '2', '5', '1', '6', '3', '4', '2', '5'] }, { 'name': 'Seif', 'photo': '', 'scores': ['1', '6', '2', '5', '3', '4', '1', '6', '2', '5'] }, { 'name': 'Doogie', 'photo': '', 'scores': ['5', '5', '5', '5', '5', '5', '5', '5', '5', '5'] }, { 'name': 'Oscar', 'photo': '', 'scores': ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6'] }, { 'name': 'Oscar', 'photo': '', 'scores': ['6', '6', '6', '6', '6', '6', '6', '6', '6', '6'] }, { 'name': 'Ali', 'photo': '', 'scores': ['1', '5', '2', '6', '3', '4', '1', '6', '5', '3'] }, { 'name': 'Dustin', 'photo': '', 'scores': ['5', '5', '4', '4', '3', '3', '2', '2', '1', '6'] }, { 'name': 'Colin', 'photo': '', 'scores': ['4', '4', '4', '4', '4', '4', '4', '4', '4', '4'] }, { 'name': 'Katie', 'photo': '', 'scores': ['3', '3', '3', '3', '3', '3', '3', '3', '3', '3'] }, { 'name': 'Bandar', 'photo': '', 'scores': ['2', '2', '2', '2', '2', '2', '2', '2', '2', '2'] }, { 'name': 'Khaidar', 'photo': '', 'scores': ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1'] }, { 'name': 'Test2', 'photo': '', 'scores': ['6', '5', '4', '3', '2', '1', '2', '4', '6', '5'] }, { 'name': 'Testing', 'photo': '', 'scores': ['1', '6', '2', '5', '3', '4', '3', '4', '5', '2'] }, { 'name': 'Testing', 'photo': '', 'scores': ['1', '6', '2', '5', '3', '4', '3', '4', '5', '2'] }, { 'name': 'Testing', 'photo': '', 'scores': ['1', '6', '2', '5', '3', '4', '3', '4', '5', '2'] }, { 'name': 'Testing', 'photo': '', 'scores': ['1', '6', '2', '5', '3', '4', '3', '4', '5', '2'] }, { 'name': 'Testing', 'photo': '', 'scores': ['1', '6', '2', '5', '3', '4', '3', '4', '5', '2'] }, { 'name': 'HELLO', 'photo': '', 'scores': ['2', '4', '6', '3', '5', '1', '6', '4', '2', '3'] }, { 'name': 'HELLO', 'photo': '', 'scores': ['2', '4', '6', '3', '5', '1', '6', '4', '2', '3'] }, { 'name': 'HELLO', 'photo': '', 'scores': ['1', '3', '5', '2', '4', '6', '5', '3', '1', '2'] }, { 'name': 'Ahmed', 'photo': '', 'scores': [1, 2, 3, 4, 5, 6, 1, 2, 3, 4] }, { 'name': 'Youssef', 'photo': '', 'scores': [5, 6, 1, 2, 3, 4, 5, 6, 1, 2] }, { 'name': 'Becky', 'photo': '', 'scores': [3, 4, 5, 6, 5, 4, 3, 2, 1, 2] }, { 'name': 'Ameer', 'photo': '', 'scores': [3, 4, 5, 6, 1, 2, 3, 4, 5, 6] }, { 'name': 'Zayne', 'photo': '', 'scores': [6, 5, 4, 3, 2, 1, 5, 4, 3, 2] }
]
router.get('/api/friends', function (req, res) {
  return res.json(friends)
})

module.exports = friends
