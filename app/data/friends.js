const friends = [
  {
    name: 'Ahmed',
    photo: '',
    scores: []
  }
]

$(document).on('click', '#submit', function (event) {
  event.preventDefault()
  const newFriend = $('#question1options').val()
  console.log(newFriend)
  // var newCharacter = {
  //   name: $("#name").val().trim(),
  //   role: $("#role").val().trim(),
  //   age: $("#age").val().trim(),
  //   forcePoints: $("#force-points").val().trim()
  // };

  // Question: What does this code do??
  $.post('/api/friends', newFriend)
    .then(function (data) {
      console.log('newFriend', data)
    })
})

module.exports = friends
