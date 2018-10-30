$(document).on('click', '#submit', function (event) {
  // event.preventDefault()
  const newFriend = {
    name: $('#name').val().trim(),
    photo: $('#photo').val().trim(),
    scores: [
      $('#q1options').val().trim(),
      $('#q2options').val().trim(),
      $('#q3options').val().trim(),
      $('#q4options').val().trim(),
      $('#q5options').val().trim(),
      $('#q6options').val().trim(),
      $('#q7options').val().trim(),
      $('#q8options').val().trim(),
      $('#q9options').val().trim(),
      $('#q10options').val().trim()
    ]
  }

  // Question: What does this code do??
  $.post('/api/friends', newFriend)
    .then(function (data) {
      return data
    })
})
