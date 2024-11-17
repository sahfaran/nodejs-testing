const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

async function connectToMongoDB(url) {
  try{
    mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDb successfully")
  } catch(error) {
    console.log("Error connecting to MongoDb", error.message)
    process.exit(1)
  }
    
}

module.exports = {
  connectToMongoDB
};