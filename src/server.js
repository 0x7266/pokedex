require('dotenv').config();
const cors = require('cors');
const connect = require('./config/database.js');
const express = require('express');
const index = require('./routes/index.route.js');
const PORT = process.env.PORT || 3334;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', index);

connect(() =>
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
);
