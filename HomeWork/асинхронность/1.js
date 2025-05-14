async function getUserData(Id) {
  try {
    const response = await fetch(`https://api.example.com/users/${Id}`);
    if (!response.ok) {
      throw new Error("Пользователь не найден");
    }
    const Data = await response.json();
    return Data;
  } catch (error) {
    return Promise.reject(error.message);
  }
}

getUserData(1)
.then(user => console.log(user))
.catch(error => console.error(error));
