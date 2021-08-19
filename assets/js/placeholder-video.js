$("#play-video" ).click(function(event) {
  event.preventDefault();
  $(this).fadeOut(600, function() {
    $("#video-iframe").fadeIn(1500);
  });
});