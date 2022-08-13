export const greeting = document.querySelector('.greeting')
export const timesOfDay = ['morning', 'day', 'evening', 'night']

const showGreeting = () => {
    const date = new Date()
    const hours = date.getHours() / 6
    const wholeHours = Math.round(hours / 6)

    switch (true) {
        case (hours < 1):
            greeting.textContent = `Good ${timesOfDay[3]}`

            break

        case (hours < 2 && hours >= 1):
            greeting.textContent = `Good ${timesOfDay[Math.floor(hours) - 1]}`

            break

        case (hours < 3 && hours >= 2):
            greeting.textContent = `Good ${timesOfDay[Math.floor(hours) - 1]}`

        case (hours < 4 && hours >= 3):
            greeting.textContent = `Good ${timesOfDay[Math.floor(hours) - 1]}`

            break

    }

}

export default showGreeting




