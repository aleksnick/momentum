import city from "./Weather"

const nameUser = document.querySelector('.name')

// add name to local storage
const setLocalStorage = () => {

    localStorage.setItem('name', nameUser.value)
    localStorage.setItem('city', city.value)

}

window.addEventListener('beforeunload', setLocalStorage)

export const getLocalStorage = () => {

    localStorage.getItem('name') ? nameUser.value = localStorage.getItem('name') : ''
    localStorage.getItem('city') ? city.value = localStorage.getItem('city') : ''

}


