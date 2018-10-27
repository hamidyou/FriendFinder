$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: 'app/data/results.txt',
    success: function (response) {
      $('#resultsDisplay').text(response)
    }
  })
  $.ajax({
    type: 'GET',
    url: 'app/data/image.txt',
    success: function (response) {
      $('#resultsDisplay').append(response)
    }
  })
})
