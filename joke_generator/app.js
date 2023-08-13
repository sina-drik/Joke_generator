// DOM selector
const getJokesButton = document.querySelector('.get_jokes');
const jokesContainer = document.querySelector('.jokes');

// Event listener
getJokesButton.addEventListener('click', getJokes)

// Functions 
function getJokes(event) {
    event.preventDefault();
    const Xhr = new XMLHttpRequest();
    Xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    Xhr.onload = function () {
        if (this.status === 200) {
            let parsedJoke = JSON.parse(this.responseText)
            jokesContainer.innerHTML = `<li>${parsedJoke.value}</li>`
        }
    }
    Xhr.send();
}








