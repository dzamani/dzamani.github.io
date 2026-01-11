document.getElementById('play-video').addEventListener('click', function(event) {
    event.preventDefault();
    var playButton = this;
    var videoIframe = document.getElementById('video-iframe');
    
    // Fade out play button
    playButton.style.transition = 'opacity 0.6s';
    playButton.style.opacity = '0';
    
    setTimeout(function() {
        playButton.style.display = 'none';
        // Fade in video iframe
        videoIframe.style.display = 'block';
        videoIframe.style.opacity = '0';
        videoIframe.style.transition = 'opacity 1.5s';
        
        setTimeout(function() {
            videoIframe.style.opacity = '1';
        }, 50);
    }, 600);
});