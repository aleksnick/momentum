const greeting = document.querySelector('.greeting')
const timesOfDay = ['morning', 'day', 'evening', 'night']

const showGreeting = () => {
    const date = new Date()
    const hours = date.getHours()
    const wholeHours = Math.round(hours / 6)

    switch (wholeHours) {
        case wholeHours:
            greeting.textContent = `Good ${timesOfDay[wholeHours - 1]}`

            break;
    }

}

export default showGreeting




