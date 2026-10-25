
const userList = document.querySelector("#user-list");
const status = document.querySelector("#status");
const refreshButton = document.querySelector("#refresh-button");

async function loadUsers() {
    refreshButton.disabled = true;
    status.textContent = "Loading users…";
    try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        if (!response.ok) throw new Error("Could not load users.");
        const data = await response.json();
        userList.replaceChildren();

        data.results.forEach((user) => {
            const card = document.createElement("article");
            card.className = "user-card";
            const photo = document.createElement("img");
            photo.src = user.picture.large;
            photo.alt = `Photo of ${user.name.first} ${user.name.last}`;
            photo.loading = "lazy";
            const info = document.createElement("div");
            info.className = "user-info";
            const name = document.createElement("h2");
            name.textContent = `${user.name.first} ${user.name.last}`;
            const email = document.createElement("a");
            email.href = `mailto:${user.email}`;
            email.textContent = user.email;
            info.append(name, email);
            card.append(photo, info);
            userList.append(card);
        });
        status.textContent = `Showing ${data.results.length} users.`;
    } catch (error) {
        status.textContent = "Unable to load users. Please try again.";
    } finally {
        refreshButton.disabled = false;
    }
}

refreshButton.addEventListener("click", loadUsers);
loadUsers();
