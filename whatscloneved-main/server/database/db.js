

import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async (USERNAME, PASSWORD) => {
  const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-s1nzpc2-shard-00-00.ypm40la.mongodb.net:27017,ac-s1nzpc2-shard-00-01.ypm40la.mongodb.net:27017,ac-s1nzpc2-shard-00-02.ypm40la.mongodb.net:27017/?ssl=true&replicaSet=atlas-548p83-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, { 
      useUnifiedTopology: true, 
      useNewUrlParser: true, 
      useFindAndModify: false 
    });
    console.log('Database Connected Successfully');
  } catch(error) {
    console.log('Error while connecting: ', error.message);
  }
};

export default Connection;
