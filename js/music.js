document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audio-player');
    const trackItems = document.querySelectorAll('.track-item');
    const nowPlaying = document.querySelector('.now-playing');
    
    let currentTrack = null;
    
    trackItems.forEach(item => {
        item.addEventListener('click', function() {
            const src = this.getAttribute('data-src');
            const trackName = this.textContent;
            
            // Remove playing class from all tracks
            trackItems.forEach(t => t.classList.remove('playing'));
            
            // If clicking the same track, pause it
            if (currentTrack === src && !audioPlayer.paused) {
                audioPlayer.pause();
                nowPlaying.textContent = 'Paused';
                return;
            }
            
            // Play new track
            audioPlayer.src = src;
            audioPlayer.play();
            this.classList.add('playing');
            currentTrack = src;
            nowPlaying.textContent = 'Now playing: ' + trackName;
        });
    });
    
    // Update when track ends
    audioPlayer.addEventListener('ended', function() {
        trackItems.forEach(t => t.classList.remove('playing'));
        nowPlaying.textContent = 'Track ended';
    });
});