import city from "./Weather"

const nameUser = document.querySelector('.name')

// add name to local storage
const setLocalStorage = () => {

    localStorage.setItem('name',JSON.stringify(nameUser.value))
    localStorage.setItem('city', JSON.stringify(city.value))

}

window.addEventListener('beforeunload', setLocalStorage)

export const getLocalStorage = () => {

    localStorage.getItem('name') ? nameUser.value = JSON.parse( localStorage.getItem('name')) : ''
    localStorage.getItem('city') ? city.value = JSON.parse( localStorage.getItem('city')) : ''

}


