const express =require("express");
const fs =require("node:fs/promises");
 const cors =require("cors"); // Import the cors middleware
 const path = require('path');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.static(path.join(__dirname, ''), {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));
app.use(express.json());

app.get("/", (req, res) => {
 
  res.sendFile(path.join(__dirname, 'index.html'));
  
  res.sendFile(path.join(__dirname,'script.js'));
});

app.get("/1", (req, res) => {
  res.send(`hello`);
});

app.get("/api/data", async (req, res) => {
  try {
    const data = await fs.readFile('./data.json', "utf8");
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (error) {
    console.error("Ошибка на сервере:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.post('/save-data', async (req, res) => {
  try {
    const jsonData = req.body;
    const filePath = 'data.json'; // Путь к файлу на сервере

    await fs.writeFile(filePath, JSON.stringify(jsonData, null, 2)); // Запись в файл с отступом

    res.send('Данные успешно сохранены');
  } catch (error) {
    console.error('Ошибка при сохранении данных:', error);
    res.status(500).send('Ошибка сервера');
  }
});


app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
