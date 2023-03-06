import mongoose from 'mongoose';
import express from 'express';



const app = express();
const PORT = 5000;

const uri = "mongodb+srv://nahm1529:0415@cluster0.uaud6cv.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(
  uri,
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  },(err) => {
    if (err) {
      console.log("error in connection");
    } else {
      console.log("mongodb is connected");}
});


app.listen(PORT, () => {
  console.log(`NodeJS server is running on ${PORT}`);
}); 
