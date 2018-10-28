$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: 'app/data/results.txt',
    success: function (response) {
      $('#resultsDisplay').html(response)
    }
  })
})
