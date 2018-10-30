$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: 'app/data/results.json',
    success: function (response) {
      $('#surveyor').text(response.newFriend.name)
      $('#match').text(response.compatibleFriend[0])
      $('img').attr('src', response.compatibleFriend[1])
    }
  })
})
