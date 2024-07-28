import express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express();
dotenv.config();


mongoose.connect("mongodb://localhost:27017/Dotplotproject").then(() => {
    console.log("Database connection successfull")
    app.listen(8000, () => {
        console.log('Server is running')
    });
})

const userSchema = new mongoose.Schema({
    Diagnosis: String,
    Coordinates: String,
});

const UserModel = mongoose.model("patients", userSchema)

app.get("/getPatients", async(req, res) =>{
    const userData = await UserModel.find();
    res.json(userData)
});

//(app.get('/', (req, res) => {
   // res.sendFile(path.join(__dirname, 'index.html'))
//})

//app.get('/api/users', (req, res) =>{
 //   const users= [{
      //  id: '123',
  ///      name: 'Shaun'
 //   }, {
  //      id: '234',
  //      name:'Bob'
  //  }, {
   //     id:'345',
   ///     name: 'Sue',
  //  }];

   // res.json(users)
//});

//app.listen(8080, () =>{
 //   console.log('Server listening on port 8080')
//});)