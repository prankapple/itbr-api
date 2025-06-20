const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const BASE_URL = "https://prankapple.github.io/itbr-api/src/";
const TOTAL_IMAGES = 30;

app.get('/gimme', (req, res) => {
  const randomIndex = Math.floor(Math.random() * TOTAL_IMAGES) + 1; // 1 to 30
  const imageUrl = `${BASE_URL}sticker_${randomIndex}.png`;
  res.redirect(imageUrl);
});

app.get('/', (req, res) => {
  res.send('Use /gimme to get a random sticker!');
});

app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
