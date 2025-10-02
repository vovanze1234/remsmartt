const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000' 
}));

const mongoURI = 'mongodb://localhost:27017/newsDB';
mongoose.connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('Connected to local MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  publishDate: { type: Date, required: true },
  imageUrl: String
});

const News = mongoose.model('News', newsSchema);

const deviceSchema = new mongoose.Schema({
  manufacturer: { type: String, required: true },
  model: { type: String, required: true },
  priceScreen: { type: Number, required: true },
  priceBattery: { type: Number, required: true },
  priceBackCover: { type: Number, required: true },
  priceOther: { type: Number }
}, { timestamps: true });

const Device = mongoose.model('Device', deviceSchema);

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/api/akcii', async (req, res) => {
  try {
    const news = await News.find().sort({ publishDate: -1 });
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/akcii', async (req, res) => {
  try {
    console.log('Received POST request with data:', req.body);
    const { title, text, publishDate, imageUrl } = req.body;
    const newNews = new News({ title, text, publishDate, imageUrl });
    const savedNews = await newNews.save();
    res.json(savedNews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/devices', async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});