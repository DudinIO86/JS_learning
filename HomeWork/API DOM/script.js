async function main() {
  try {
    const blockEl = document.querySelector(".content");
    const response = await fetch("/api/data"); 
    let jsonData = await response.json();

    jsonData.map((el) => {
      const nameEl = document.createElement("p");
      nameEl.classList.add("text");
      nameEl.textContent = `Наименование предмета: ${el.name}`;
      blockEl.appendChild(nameEl);

      const timeEl = document.createElement("p");
      timeEl.classList.add("text");
      timeEl.textContent = `Время: ${el.time}`;
      blockEl.appendChild(timeEl);
      
      const maxEl = document.createElement("p");
      maxEl.classList.add("text");
      maxEl.textContent = `Максимальное кол-во мест для записи: ${el.max}`;
      blockEl.appendChild(maxEl);

      const numEl = document.createElement("p");
      numEl.classList.add("text");
      numEl.textContent = `Кол-во записанных: ${el.numberRecorded}`;
      blockEl.appendChild(numEl);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
