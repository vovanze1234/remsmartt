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
  category: { type: String, required: true },
  manufacturer: { type: String, required: true }, 
  model: { type: String, required: true },
  repairs: [
    {
      type: { type: String, required: true },
      price: { type: Number, required: true }
    }
  ]
}, { timestamps: true });

const Device = mongoose.model('Device', deviceSchema);

app.get('/api/devices', async (req, res) => {
  try {
    const devices = await Device.find();
    res.json(devices);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/categories', async (req, res) => {
  try {
    const categories = await Device.distinct('category');
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
