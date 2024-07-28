import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'



const app = express();
dotenv.config();

app.use(cors())
mongoose.connect("mongodb://localhost:27017/Dotplotproject").then(() => {
    console.log("Database connection successfull")
    app.listen(7080, () => {
        console.log('Server is running')
    });
})

const patientSchema = new mongoose.Schema({
    "Patient ID": Number,
    "Patient Name": String,
    Age: Number,
    "Height (cm)": Number,
    "Weight (kg)": Number,
    History: String,
    "US scan ID": Number,
});

const userSchema = new mongoose.Schema({
    "US scan ID": Number,
    Coordinates: String,
    "Scan Date": String,
    Diagnosis: String,
});

const UserModel = mongoose.model("patients", userSchema)

app.get("/getPatients", async(req, res) =>{
    const input = req.query.input;
    const userData = await UserModel.find({"Patient ID": input});
    res.json(userData)
});