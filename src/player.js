import songOne from './assets/sounds/Aqua Caelestis.mp3'
import songTwo from './assets/sounds/River Flows In You.mp3'
import songThree from './assets/sounds/Summer Wind.mp3'
import songFour from './assets/sounds/Ennio Morricone.mp3'


const player = document.querySelector('.player-controls')
const play = document.querySelector('.play')
const audio = document.querySelector('audio')
const playNext = document.querySelector('.play-next')
const playPrev = document.querySelector('.play-prev')
const icon = document.querySelectorAll('.play-item')

const arrSongs = [songOne, songTwo, songThree, songFour]
let idx = 0


const playSong = async (e) => {

    audio.src = arrSongs[idx]
    console.log(idx)

    if (e.target.closest('.play')) {

        await new Promise((resolve, reject) => resolve(audio.play()))
            .catch(() => audio.pause())

        play.classList.toggle('pause')
        icon[idx].classList.add('item-active')

    }

    if (!e.target.closest('.pause')) {

        audio.pause()

    }

    if (e.target.closest('.play-next') || e.target.closest('.play-prev')) {

        await new Promise((resolve, reject) => resolve(audio.play()))
            .catch(() => audio.play())
    }

}


const changeNextIdx = () => {

    idx++
    play.classList.add('pause')

    switch (true) {

        case (idx === arrSongs.length):
            idx -= arrSongs.length

            break

    }

    switch (true) {
        case (idx - 1 < 0):
            icon[icon.length - 1].classList.remove('item-active')
            break
    }

    icon[idx].classList.add('item-active')
    icon[idx - 1].classList.remove('item-active')

}


const changePrevIdx = () => {

    idx--

    switch (true) {

        case (idx < 0):
            idx += arrSongs.length
            break
    }

    switch (true) {
        case (idx === icon.length - 1):
            icon[0].classList.remove('item-active')
            break
    }

    icon[idx].classList.add('item-active')
    icon[idx + 1].classList.remove('item-active')

}


player.addEventListener('click', playSong)
playNext.addEventListener('click', changeNextIdx)
playPrev.addEventListener('click', changePrevIdx)

