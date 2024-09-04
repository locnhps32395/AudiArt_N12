
const video = document.querySelector('video');
const currentTimeDisplay = document.getElementById('current-time');
const durationDisplay = document.getElementById('duration');
const seekBar = document.getElementById('seek-bar');
const playPauseButton = document.getElementById('play-pause-button');
const volumeSlider = document.getElementById('volumeSlider');
let lastVolume = 100; // Giá trị âm lượng cuối cùng trước khi tắt tiếng

video.addEventListener('loadedmetadata', () => {
    durationDisplay.textContent = formatTime(video.duration);
    seekBar.max = video.duration;
});

video.addEventListener('timeupdate', () => {
    currentTimeDisplay.textContent = formatTime(video.currentTime);
    seekBar.value = video.currentTime;
});

seekBar.addEventListener('input', () => {
    video.currentTime = seekBar.value;
});

volumeSlider.addEventListener('input', (event) => {
    updateVolume(event.target.value);
});

function playPause() {
    if (video.paused) {
        video.play();
        playPauseButton.innerHTML = '<i class="bi bi-pause-fill icon-clickable fs-2 "></i>';
    } else {
        video.pause();
        playPauseButton.innerHTML = '<i class="bi bi-play-fill icon-clickable fs-2 "></i>';
    }
}

function stopVideo() {
    video.pause();
    if (video.currentTime) {
        video.currentTime = 0;
    }
}

function replayVideo() {
    video.currentTime = 0;
    video.play();
}

function updateVolume(value) {
    video.volume = value / 100;
    video.muted = value == 0;
    updateVolumeIcons(value);
}

function updateVolumeIcons(value) {
    const volumeUpIcon = document.querySelector('.bi-volume-up-fill');
    const volumeDownIcon = document.querySelector('.bi-volume-down-fill');
    const volumeMuteIcon = document.querySelector('.bi-volume-mute-fill');

    volumeUpIcon.style.display = 'none';
    volumeDownIcon.style.display = 'none';
    volumeMuteIcon.style.display = 'none';

    if (value == 0) {
        volumeMuteIcon.style.display = 'inline-block';
    } else if (value > 0 && value <= 66) {
        volumeDownIcon.style.display = 'inline-block';
    } else {
        volumeUpIcon.style.display = 'inline-block';
    }
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function changeMix(icon) {
    const shuffleIcon = document.querySelector('.bi-shuffle');
    const repeatIcon = document.querySelector('.bi-repeat');
    const repeat1Icon = document.querySelector('.bi-repeat-1');

if (icon === shuffleIcon) {
shuffleIcon.style.display = 'none';
repeatIcon.style.display = 'inline-block';
} else if (icon === repeatIcon) {
repeatIcon.style.display = 'none';
repeat1Icon.style.display = 'inline-block';
} else if (icon === repeat1Icon) {
repeat1Icon.style.display = 'none';
shuffleIcon.style.display = 'inline-block';
}
}

function changeHeart(icon) {
const heartIcon = document.querySelector('.bi-heart');
const heartFillIcon = document.querySelector('.bi-heart-fill');

if (icon === heartIcon) {
heartIcon.style.display = 'none';
heartFillIcon.style.display = 'inline-block';
} else {
heartIcon.style.display = 'inline-block';
heartFillIcon.style.display = 'none';
}
}

function toggleMute() {
if (video.muted) {
video.muted = false;
updateVolume(lastVolume);
volumeSlider.value = lastVolume;
} else {
lastVolume = volumeSlider.value;
video.muted = true;
updateVolume(0);
volumeSlider.value = 0;
}
}
