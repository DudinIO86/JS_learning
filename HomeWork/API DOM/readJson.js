const fs = require("node:fs"); // Используем promises для более удобной работы с async/await

async function readJsonFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (parseError) {
          reject(new Error(`Ошибка парсинга JSON: ${parseError.message}`));
        }
      }
    });
  });
}

export default readJsonFile;

// const fs = require('node:fs');

// function writeJsonFile(filePath, jsonData) {
//   return new Promise((resolve, reject) => {
//     const jsonString = JSON.stringify(jsonData, null, 2); // 2 - для красивого форматирования

//     fs.writeFile(filePath, jsonString, 'utf8', err => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve();
//       }
//     });
//   });
// }

// // Пример использования:
// const dataToWrite = {
//   name: "Пример данных",
//   version: 1.0,
//   items: [1, 2, 3]
// };

// writeJsonFile('./output.json', dataToWrite)
//   .then(() => console.log('Данные записаны в файл'))
//   .catch(err => console.error('Ошибка записи файла:', err));




