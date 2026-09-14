//file for connection with the database
const mongoose = require('mongoose')

const  mongoURI = "mongodb://localhost:27017/"


// const connectToMongo = ()=> {
//
//  mongoose.connect(mongoURI, ()=>{
//
//   console.log("Connected to Mongo Successfully")
//  })
// }


const connectToMongo = async () => {
  try{
   await mongoose.connect(mongoURI)
   console.log("Connected to mongo Successfully")
  }catch (e) {
   console.log("Could not connect to MongoDB", e)
  }
};


module.exports = connectToMongo;