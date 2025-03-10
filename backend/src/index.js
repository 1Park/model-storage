const express = require('express');
const mongoose = require('mongoose');

const path = require('path');
const app = express();
const PORT = 3000;

// MongoDB 연결
mongoose.connect('mongodb://mongodb:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/login/teacher',(req, res)=>{
  res.send('Hello World!');
  console.log("!!! Received.");
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

