const k = kyanite

$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: 'api/friends',
    success: function (response) {
      const data = k.last(response)
      $('#surveyor').text(data.name)
      $('#match').text(data.match[0])
      $('img').attr('src', data.match[1])
      return response
    }
  })
})
