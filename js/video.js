function openVideo(event) {
  event.preventDefault();
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('localVideo');

  document.body.classList.add('hidden-site');
  modal.classList.add('show');

  try {
    video.currentTime = 0;
  } catch (_) {}

  video.play().catch(() => {});
}

function closeVideo() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('localVideo');

  video.pause();
  modal.classList.remove('show');
  document.body.classList.remove('hidden-site');
}

// Fecha com ESC
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && document.getElementById('videoModal').classList.contains('show')) {
    closeVideo();
  }
});
