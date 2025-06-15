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
      numEl.id = el.id;
      numEl.dataset.id = el.id;
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
      addButton.classList.add("button-submit");
      addButton.id = el.id;
      addButton.type = "button";
      addButton.textContent = "Записаться";
      divButton.appendChild(addButton);

      const remButton = document.createElement("button");
      remButton.classList.add("btn");
      remButton.classList.add("btn-outline-danger");
      remButton.classList.add("button-reject");
      remButton.id = el.id;
      remButton.type = "button";
      remButton.textContent = "Отменить запись";
      divButton.appendChild(remButton);

      if (Number(el.max) < Number(el.numberRecorded)+1) {
        addButton.classList.add("disabled");
      }
       if (Number(el.numberRecorded) < 1) {
        remButton.classList.add("disabled");
      }
    });

    const bodyEl = document.querySelector(".container-fluid");

    bodyEl.addEventListener("click", (e) => {
      console.log(e.target.id);
      
      if (e.target.classList.contains("button-submit")) {
        console.log(e.target.id);
        jsonData[e.target.id - 1].numberRecorded =
          Number(jsonData[e.target.id - 1].numberRecorded) + 1;

        const pEl = document.querySelector(`[data-id="${e.target.id}"]`);

        pEl.textContent = `Кол-во записанных: ${
          jsonData[e.target.id - 1].numberRecorded
        }`
        
      } else if (e.target.classList.contains("button-reject")) {
        console.log(e.target.id);
        
        jsonData[e.target.id - 1].numberRecorded =
          Number(jsonData[e.target.id - 1].numberRecorded) -1;

        const pEl = document.querySelector(`[data-id="${e.target.id}"]`);

        pEl.textContent = `Кол-во записанных: ${
          jsonData[e.target.id - 1].numberRecorded
        }`;
      }
      fetch("/save-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text(); // или response.json() если сервер возвращает JSON
        })
        .then((data) => {
          console.log("Данные успешно сохранены:", data);
        })
        .catch((error) => {
          console.error("Ошибка при сохранении данных:", error);
        });
        location.reload();
    });
  } catch (error) {
    console.error(error);
  }
}

main();

// const bodyEl = document.querySelector(".button-submit");

//     bodyEl.addEventListener("click", (e) => {
//       console.log(e.target.classList);
// if (e.target.classList.contains(".button-submit")) {
//   jsonData[e.target.id - 1].numberRecorded =
//     Number(jsonData[e.target.id - 1].numberRecorded) + 1;
//   const currentNumberRecoded = document.querySelector(
//     `[data-id="${e.target.id}"]`
//   );
//   const span = currentNumberRecoded.querySelector(".record");
//   span.textContent =jsonData[e.target.id - 1].numberRecorded;
//   console.log(jsonData[e.target.id - 1].numberRecorded);

// const currentSubmitButton = document.getElementById(`${e.target.id}`);
// currentSubmitButton.classList.add("disabled");
// currentSubmitButton.nextElementSibling.classList.remove("disabled");
// }
// if (e.target.classList.contains("button-reject")) {
//   console.log(jsonData);
//   let currentWorkoutsInfoItem = jsonData.filter(
//     (item) => item.name_of_workout === e.target.dataset.id
//   );
//   let index = Number(currentWorkoutsInfoItem[0].id) - 1;
//   jsonData[index].numberRecorded =
//     jsonData[index].numberRecorded - 1;

//   const currentNumberOfParticipants = document.querySelector(
//     `[data-id="${index + 1}"]`
//   );
//   const span = currentNumberOfParticipants.querySelector("span");
//   span.textContent = workoutsInfo[index].numberRecorded;

//   const currentRejectButton = document.querySelector(
//     `[data-id="${e.target.dataset.id}"]`
//   );
//   currentRejectButton.classList.add("disabled");
//   currentRejectButton.previousElementSibling.classList.remove("disabled");
// }
// });
