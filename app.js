const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bugRoutes = require('./routes/bugs');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/bugvault', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/bugs', bugRoutes);

app.listen(5000, () => {
  console.log('✅ Server running on http://localhost:5000');
});