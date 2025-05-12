const usersList = document.querySelector(".users-list");

const renderUsersList = (users) => {
  usersList.innerHTML = "";
  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    <div>
        <h2>${user.name}</h2>
        <p>${user.email}</p>
    </div>`;
    usersList.append(listItem);
  });
};

const sortUsersByName = (users) => {
  const sortedUsers = users.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }

    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
  renderUsersList(sortedUsers);
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then((result) => result.json())
  .then((data) => {
    renderUsersList(data);
    const sortEl = document.querySelector(".sort");
    sortEl.addEventListener("click", function (e) {
      sortUsersByName(data);
    });
  })
  .catch((err) => {
    console.error("Ошибка");
  });
