import { getLocalStorage } from "./enter_name"

const weatherIcon = document.querySelector('.weather-icon')
const temperature = document.querySelector('.temperature')
const weatherDescription = document.querySelector('.weather-description')
const wind = document.querySelector('.wind')
const humidity = document.querySelector('.humidity')
const city = document.querySelector('.city')
const error = document.querySelector('.weather-error')



let data;


const getWeather = async () => {

    const link = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=9c95e81032e52b8d95815bf059802113&units=metric`
    const rest = await fetch(link)
    data = await rest.json()

    switch (true) {

        case (data.weather !== undefined):

            error.textContent = ''
            weatherIcon.style.display = 'block'
            weatherIcon.classList.add(`owf-${data.weather[0].id}`)
            const idSize = document.querySelector('.owf')
            idSize.style.fontSize = '44px'

            temperature.style.display = 'block'
            temperature.textContent = `${Math.ceil(data.main.temp)}C`

            weatherDescription.style.display = 'block'
            weatherDescription.textContent = data.weather[0].description

            wind.style.display = 'block'
            wind.textContent = `Wind speed: ${Math.ceil(data.wind.speed)} m/s`

            humidity.style.display = 'block'
            humidity.textContent = `Humidity: ${data.main.humidity}%`

            break

        case (data.weather === undefined):
            error.textContent = `Error: ${data.message} for "${city.value}"!`
            weatherIcon.style.display = 'none'
            temperature.style.display = 'none'
            weatherDescription.style.display = 'none'
            wind.style.display = 'none'
            humidity.style.display = 'none'


            break

    }

}



window.addEventListener('DOMContentLoaded', () => {

    getLocalStorage()
    getWeather()

})


city.addEventListener('change', getWeather)


export default city















