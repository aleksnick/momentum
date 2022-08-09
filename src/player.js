import songOne from './assets/sounds/Aqua Caelestis.mp3'
import songTwo from './assets/sounds/River Flows In You.mp3'
import songThree from './assets/sounds/Summer Wind.mp3'
import songFour from './assets/sounds/Ennio Morricone.mp3'


const player = document.querySelector('.player-controls')
const play = document.querySelector('.play')
const audio = document.querySelector('audio')
const playNext = document.querySelector('.play-next')
const playPrev = document.querySelector('.play-prev')


const arrSongs = [songOne, songTwo, songThree, songFour]
let idx = 0


const playSong = async (e) => {

    audio.src = arrSongs[idx]
    console.log(idx)

    if (e.target.closest('.play')) {

        await new Promise((resolve, reject) => {
            resolve(audio.play())

        })
            .catch(() => audio.pause())
        play.classList.toggle('pause')

    }

    if (!e.target.closest('.pause')) {

        audio.pause()

    }

    if (e.target.closest('.play-next') || e.target.closest('.play-prev')) {

        await new Promise((resolve, reject) => {
            resolve(audio.play())
        })
            .catch(() => audio.play())

    }

}


const changeNextIdx = () => {

    idx++

    switch (true) {

        case (idx === arrSongs.length):
            idx -= arrSongs.length
            break
    }

}


const changePrevIdx = () => {

    idx--

    switch (true) {

        case (idx < 0):
            idx += arrSongs.length
            break
    }

}


player.addEventListener('click', playSong)
playNext.addEventListener('click', changeNextIdx)
playPrev.addEventListener('click', changePrevIdx)

