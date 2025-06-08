async function main() {
  try {
    const blockEl = document.querySelector(".container-fluid");
    const response = await fetch("/api/data");
    let jsonData = await response.json();

    jsonData.map((el) => {
      const cardEl = document.createElement("div");
      cardEl.classList.add("card");
      cardEl.style.boxShadow = "2px 2px 20px rgba(255, 255, 16, 0.4)";
      cardEl.style.width = "18rem";

      const cardBodyEl = document.createElement("div");
      cardBodyEl.classList.add("card-body");
      cardEl.appendChild(cardBodyEl);

      blockEl.appendChild(cardEl);

      const nameEl = document.createElement("p");
      nameEl.classList.add("card-text");
      nameEl.classList.add("fs-6");
      nameEl.classList.add("fw-bold");
      nameEl.textContent = "Наименование предмета:" + "\n" + el.name;
      cardBodyEl.appendChild(nameEl);

      const timeEl = document.createElement("p");
      timeEl.classList.add("card-text");
      timeEl.textContent = `Время: ${el.time}`;
      cardBodyEl.appendChild(timeEl);

      const maxEl = document.createElement("p");
      maxEl.classList.add("card-text");
      maxEl.classList.add("max");
      maxEl.textContent = `Максимальное кол-во мест для записи: ${el.max}`;
      cardBodyEl.appendChild(maxEl);

      const numEl = document.createElement("p");
      numEl.classList.add("card-text");
      numEl.classList.add("record");
      numEl.textContent = `Кол-во записанных: ${el.numberRecorded}`;
      cardBodyEl.appendChild(numEl);

      const divButton = document.createElement("div");
      divButton.classList.add("container");
      divButton.classList.add("row");
      divButton.classList.add("gap-2");
      cardBodyEl.appendChild(divButton);

      const addButton = document.createElement("button");
      addButton.classList.add("btn");
      addButton.classList.add("btn-outline-success");
      addButton.type = "button";
      addButton.textContent = "Записаться";
      divButton.appendChild(addButton);

      const remButton = document.createElement("button");
      remButton.classList.add("btn");
      remButton.classList.add("btn-outline-danger");
      remButton.type = "button";
      remButton.textContent = "Отменить запись";
      divButton.appendChild(remButton);

      // fetch('/save-data', { // Замените '/save-data' на ваш серверный endpoint
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(jsonData)
      // })
      // .then(response => {
      //   if (!response.ok) {
      //     throw new Error(`HTTP error! status: ${response.status}`);
      //   }
      //   return response.text(); // или response.json() если сервер возвращает JSON
      // })
      // .then(data => {
      //   console.log('Данные успешно сохранены:', data);
      // })
      // .catch(error => {
      //   console.error('Ошибка при сохранении данных:', error);
      // });
    });
  } catch (error) {
    console.error(error);
  }
}

main();
