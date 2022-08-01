//connect module
import  showGreeting  from "./greeting"
//
const time = document.querySelector('.time')
const date = document.querySelector('.date')

// const x = () => console.log('Kate')
//  time.addEventListener('DOMNodeInserted',x)


const options = {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
}

// add function show time 

const showTime = () => {
    const getDate = new Date()
    const currentTime = getDate.toLocaleTimeString()

    time.textContent = currentTime

    showDate()  // launch show date to update

    showGreeting() // launch show greeting to update

    setTimeout(showTime, 1000)

}

//add function show date

const showDate = () => {
    const getDate = new Date()
    const currentDate = getDate.toLocaleDateString('en-US', options)

    date.textContent = currentDate
}

export default showTime()

showTime()













