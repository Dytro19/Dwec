// filepath: /chuck-norris-api-project/chuck-norris-api-project/src/app.js

document.addEventListener('DOMContentLoaded', () => {
    const jokeContainer = document.getElementById('joke');
    const newJokeButton = document.getElementById('new-joke-button');

    async function fetchJoke() {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            const data = await response.json();
            jokeContainer.textContent = data.value;
        } catch (error) {
            jokeContainer.textContent = 'No se pudo obtener un chiste. Inténtalo de nuevo más tarde.';
            console.error('Error fetching joke:', error);
        }
    }

    newJokeButton.addEventListener('click', fetchJoke);

    // Fetch a joke when the page loads
    fetchJoke();
});