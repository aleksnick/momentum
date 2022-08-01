import { arr, img } from './background'

const next = document.querySelector('.slide-next')
const prev = document.querySelector('.slide-prev')
let idxNext = 1


const slideNext = () => {

    arr[0] = `${+arr[0] + idxNext}`

    switch (true) {
        case (+arr[0] < 10 && +arr[0] >= 1):
            arr[0] = `0${arr[0]}`
            break

        case (+arr[0] > 20):
            arr[0] = '01'

    }

    img.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${arr[0]}.jpg)`

}


next.addEventListener('click', slideNext)


const slidePrev = () => {

    arr[0] = `${+arr[0] - idxNext}`
    img.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${arr[0]}.jpg)`

    switch (true) {
        case (+arr[0] < 1):
            arr[0] = 20

            break
        case (+arr[0] < 10 && +arr[0] > 0):
            arr[0] = `0${arr[0]}`
            break

    }

    img.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${arr[0]}.jpg)`

}

prev.addEventListener('click', slidePrev)