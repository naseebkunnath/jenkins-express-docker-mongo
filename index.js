const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json()); // For parsing JSON in requests

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/expresscrud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a simple schema and model
const ItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number
});
const Item = mongoose.model('Item', ItemSchema);

// 🧪 Create
app.post('/items', async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.status(201).send(item);
});

// 📚 Read All
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

// ✏️ Update by ID
app.put('/items/:id', async (req, res) => {
  const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
});

// 🗑️ Delete by ID
app.delete('/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.send({ message: 'Item deleted' });
});

// Home route
app.get('/', (req, res) => res.send('CRUD app is alive 🧠'));

// Start server
app.listen(3000, () => console.log('Server running on port 3000'));
