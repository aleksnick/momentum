import { greeting } from "./greeting"


export const img = document.body
export const arr = []

const numToArr = () => {

    const randomNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1
    let bgImg = randomNum.toString()

    if (bgImg.length > 1) {

        arr.push(bgImg)
    } else {
        bgImg = `0${bgImg}`
        arr.push(bgImg)
    }

}


const loadImgToBg = () => {

    numToArr()
    img.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${arr[0]}.jpg)`
}


window.addEventListener('load', loadImgToBg)



const randomImgToBackground = () => {

    arr.shift()
    numToArr()
    img.style.backgroundImage = `url(https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/evening/${arr[0]}.jpg)`
}

greeting.addEventListener('DOMNodeInserted', randomImgToBackground)






