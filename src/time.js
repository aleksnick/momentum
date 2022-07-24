const time = document.querySelector('.time')
export const showTime = () => {
    const date = new Date()
    const currentTime = date.toLocaleTimeString()

    time.innerHTML = currentTime

    setTimeout(showTime, 1000)

}









showTime()












