const userGrid = document.querySelector('#users');
		const status = document.querySelector('#status');

		fetch('https://randomuser.me/api/?results=5')
			.then((response) => {
				if (!response.ok) throw new Error('Unable to fetch users.');
				return response.json();
			})
			.then(({ results }) => {
				status.remove();
				userGrid.innerHTML = results.map((user) => `
					<article class="user-card">
						<img src="${user.picture.large}" alt="Photo of ${user.name.first} ${user.name.last}">
						<h2>${user.name.first} ${user.name.last}</h2>
						<p>${user.email}</p>
						<p>${user.location.city}, ${user.location.country}</p>
					</article>
				`).join('');
			})
			.catch(() => {
				status.textContent = 'Could not load users. Please try again later.';
			});