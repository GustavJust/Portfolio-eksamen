window.addEventListener("load", init);

function init(){

const audio = new Audio('./assets/sounds/intro_musik.mp3'); // Replace with your audio file path


function toggleAudio() {
    const button = document.getElementById('player1');
    
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

const playPauseButton = document.getElementById('player1');

playPauseButton.addEventListener('click', toggleAudio);
}