const nameUser = document.querySelector('.name')

// add name to local storage
export const setLocalStorage = () => localStorage.setItem('name', nameUser.value)

window.addEventListener('beforeunload', setLocalStorage)

export const getLocalStorage = () => localStorage.getItem('name') ? nameUser.value = localStorage.getItem('name') : ''

window.addEventListener('load', getLocalStorage)

