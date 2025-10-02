const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors'); // Убедитесь, что пакет установлен

const app = express();
const port = process.env.PORT || 5000;

// Middleware для парсинга JSON и CORS
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000' // Разрешаем только этот источник
}));

// Подключение к локальному MongoDB
const mongoURI = 'mongodb://localhost:27017/newsDB';
mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('Connected to local MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Определение схемы для акций
const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  publishDate: { type: Date, required: true },
  imageUrl: String
});

const News = mongoose.model('News', newsSchema);

// Статические файлы для фронтенда
app.use(express.static(path.join(__dirname, '../dist')));

// API для получения всех акций
app.get('/api/akcii', async (req, res) => {
  try {
    const news = await News.find().sort({ publishDate: -1 });
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// API для добавления акции
app.post('/api/akcii', async (req, res) => {
  try {
    console.log('Received POST request with data:', req.body); // Лог для отладки
    const { title, text, publishDate, imageUrl } = req.body;
    const newNews = new News({ title, text, publishDate, imageUrl });
    const savedNews = await newNews.save();
    res.json(savedNews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});