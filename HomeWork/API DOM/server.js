const express = require('express');
const fs = require('node:fs/promises');
const cors = require('cors');  // Import the cors middleware

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for all routes  (VERY IMPORTANT)

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
  });

  app.get('/1', (req, res) => {
    res.send(`hello`);
  });


app.get('/api/data', async (req, res) => {
  try {
   
    const data = await fs.readFile('./data.json', 'utf8');
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (error) {
    console.error('Ошибка на сервере:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

