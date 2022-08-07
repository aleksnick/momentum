const quote = document.querySelector('.quote')
const author = document.querySelector('.author')
const changeQuote = document.querySelector('.change-quote')


const showQuote = async () => {

    const link = await fetch('https://www.breakingbadapi.com/api/quotes')
    const res = await link.json()
    const randomNum = Math.floor(Math.random() * (70 + 1))
    quote.textContent = res[randomNum].quote
    author.textContent = res[randomNum].author

}


showQuote()


changeQuote.addEventListener('click', showQuote)