// script.js
function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
function playVideo(videoId) {
    const videoContainer = document.querySelector(`.video[onclick="playVideo('${videoId}')"] .thumbnail`);
    videoContainer.innerHTML = `
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1" 
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
    `;
  }
  document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('videoModal');
    var span = document.getElementsByClassName('close')[0];
    var videoPlayer = document.getElementById('videoPlayer');
  
    document.querySelectorAll('.video').forEach(function(videoElement) {
      videoElement.addEventListener('click', function() {
        var videoId = this.getAttribute('data-video-id');
        videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        modal.style.display = 'block';
      });
    });
  
    span.onclick = function() {
      modal.style.display = 'none';
      videoPlayer.src = '';
    };
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
        videoPlayer.src = '';
      }
    };
  });
  