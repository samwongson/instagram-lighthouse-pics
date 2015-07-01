$(document).ready(function() {
  var client_id = "2739f95177f54d8693f302333d799b50";
  $.ajax({
      url: "https://api.instagram.com/v1/tags/lighthouse/media/recent?client_id=" + client_id,
      dataType: "jsonp",
      success: function(response) {
        var waitTimeout = 0
        response.data.forEach( function(data) {

          setTimeout(function() {
            $('#instafeed').append($("<div id='instapic'><img class='instapic' src='" + data.images.standard_resolution.url + "'></div>").hide().fadeIn());
            $('.instapic').fadeOut(5000, function() {
              $(this).parent().remove();
            })
          }, waitTimeout);
          waitTimeout += 5000;
        });

      }
    
  });

});