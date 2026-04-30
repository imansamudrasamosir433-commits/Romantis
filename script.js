const audio = document.getElementById("myAudio");
const playBtn = document.getElementById("playBtn");

function togglePlay() {
    if (audio.paused) {
        audio.play();
        playBtn.innerText = "Pause";
        playBtn.style.backgroundColor = "#6d6875";
    } else {
        audio.pause();
        playBtn.innerText = "Play Music";
        playBtn.style.backgroundColor = "#b5838d";
    }
}

// Tambahan: Pesan selamat datang saat pertama buka
window.onload = () => {
    console.log("Website Romantis Siap!");
};
