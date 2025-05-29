const mongoose = require('mongoose');
require('dotenv').config({ path: '../env/.env' });

const dbConnection = async () => {
  const uri = process.env.MONGO_URI;

  try {
    console.log('Connecting to the database...', uri);
    await mongoose.connect(uri);
    console.log('Database connected successfully');
  } catch (error) {
    console.log(error);
    throw new Error('Error connecting to the database');
  }
};

module.exports = {
  dbConnection
};
