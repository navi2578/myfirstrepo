const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

// Song titles
const songs = ['hey', 'summer', 'ukulele']

// keep Treack of songs
let songIndex = 0

//initially load song in to DOM
loadSong(songs[songIndex])

//update song details
function loadSong(song) {
    title.innerText = song
    audio.src = `music/music-player_music_${song}.mp3`
    cover.src = `images/${song}.jpg`
}

function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong() {
    songIndex--

    if (songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
}

function nextSong() {
    songIndex++

    if (songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()
}

function updateProgress(e) {
    console.log(e.srcElement.currentTime)
}

// Event Listeners 
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

//chamge Song Event 
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

//audio.addEventListener('timeupdate', updateProgress)