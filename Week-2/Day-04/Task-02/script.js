
const usersContainer = document.getElementById('users');
const status = document.getElementById('status');

fetch('https://randomuser.me/api/?results=5')
    .then((response) => {
        if (!response.ok) throw new Error('Request failed');
        return response.json();
    })
    .then(({ results }) => {
        status.remove();
        results.forEach((user) => {
            const card = document.createElement('article');
            card.className = 'user-card';

            const photo = document.createElement('img');
            photo.src = user.picture.large;
            photo.alt = `Portrait of ${user.name.first} ${user.name.last}`;

            const name = document.createElement('h2');
            name.textContent = `${user.name.first} ${user.name.last}`;

            const email = document.createElement('p');
            email.textContent = user.email;

            const location = document.createElement('p');
            location.textContent = `${user.location.city}, ${user.location.country}`;

            card.append(photo, name, email, location);
            usersContainer.appendChild(card);
        });
    })
    .catch(() => {
        status.textContent = 'Unable to load users. Please try again later.';
    });
