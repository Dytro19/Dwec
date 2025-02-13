document.getElementById('loadPostsBtn').addEventListener('click', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error de red');
            }
            return response.json();
        })
        .then(data => {
            // Limpiar contenido anterior
            const postsContainer = document.getElementById('posts');
            postsContainer.innerHTML = '';

            // Crear y mostrar los posts
            data.forEach(post => {
                const postElement = document.createElement('div');

                const title = document.createElement('h3');
                title.textContent = post.title;

                const cuerpo_post = document.createElement('p');
                cuerpo_post.textContent = post.body;

                postElement.appendChild(title);
                postElement.appendChild(cuerpo_post);

                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('Hubo un problema con la solicitud:', error);
        });
});