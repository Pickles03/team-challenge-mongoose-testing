require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const {dbConnection} = require('./config/config');
const postRoutes = require('./routes/posts');

dbConnection();
app.use(express.json());
app.use('/', postRoutes);

module.exports = app;


if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
  });
}