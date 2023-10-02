const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
require('express-async-errors');

const app = express();


//import router from routes file
const mainRouter = require('./routes/main')

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(bodyParser.json())
app.use(express.json());

//router middleware
app.use('/api/v1', mainRouter)





//before port & db
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);


//env process - 1
dotenv.config()
const PORT = process.env.PORT || 4000
const MONGO_URI = process.env.MONGO_URI

//port & mongoDB process - 2
const connect = async()=>{
  try {
    await mongoose.connect(MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
  });

      console.log("DB connected succesfully!");
      app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
  })

  } catch (error) {
    console.error(error);
  }
}


connect()


