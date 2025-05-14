async function saveUserData(user) {
  try {
    const response = await fetch("https://api.example.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Ошибка записи");
    }
  } catch (error) {
    return Promise.reject(error.message);
  }
}

const user = {
  name: "Dudin Igor",
  age: 38,
  email: "dudinio@mail.ru",
};
saveUserData(user)
  .then(() => {
    console.log("Данные добавлены");
  })
  .catch((error) => {
    console.error(error);
  });
