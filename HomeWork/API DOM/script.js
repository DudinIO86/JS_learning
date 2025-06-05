// import fs from "node:fs/promises";

// async function readJsonFile(filePath) {
//   try {
//     const data = await fs.readFile(filePath, "utf8");
//     const jsonData = JSON.parse(data);
//     return jsonData;
//   } catch (error) {
//     console.error("Ошибка при чтении файла:", error);
//     throw error;
//   }
// }

// async function main(){
//   const jsonData = await readJsonFile("./data.json");
//   console.log(jsonData);

// const blockEl = document.querySelector(".content");

// jsonData.foreach((el) => {
//   const nameEl = document.createElement("p");
//   nameEl.classList("text");
//   nameEl.textContent = `Наименование: ${el.name}`;
//   blockEl.appendChild(nameEl);

//   const timeEl = document.createElement("p");
//   timeEl.classList("text");
//   timeEl.textContent = `Наименование: ${el.time}`;
//   blockEl.appendChild(timeEl);
//   console.log(el.time);
// });
// }

// main();


const loadDataButton = document.getElementById("loadData");
const outputDiv = document.getElementById("output");

loadDataButton.addEventListener("click", async () => {
  try {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
      "Access-Control-Max-Age": "86400",
    };
    const response = await fetch("/api/data"); // Запрос к серверу
    const jsonData = await response.json();

    outputDiv.textContent = JSON.stringify(jsonData, null, 2);

    // const response = await fetch("/1"); // Запрос к серверу
    // const jsonData = await response.text();
    // outputDiv.textContent = jsonData;
  } catch (error) {
    outputDiv.textContent = "Ошибка при загрузке данных: " + error;
    console.error(error);
  }
});
