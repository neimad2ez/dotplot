import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'



const app = express();
dotenv.config();

app.use(cors())
//use of mongoose to connect to the local mongodb database and starts an express.js server on local port 7080
mongoose.connect("mongodb://localhost:27017/Dotplotproject").then(() => {
    console.log("Database connection successfull")
    app.listen(7080, () => {
        console.log('Server is running')
    });
})
//Schema for the patient data
const patientSchema = new mongoose.Schema({
    "Patient ID": Number,
    "Patient Name": String,
    Age: Number,
    "Height (cm)": Number,
    "Weight (kg)": Number,
    History: String,
    "US scan ID": Number,
});
//Schema for the scan data
const scanSchema = new mongoose.Schema({
    "US scan ID": Number,
    Coordinates: String,
    "Scan Date": String,
    Diagnosis: String,
});
//Assigning the relative schema to their relative models
const ScansModel = mongoose.model("scans", scanSchema)
const PatientModel = mongoose.model("patients", patientSchema)
//end point for querying scan information
app.get("/getScans", async(req, res) =>{
    const input = req.query.input;
    const scanData = await ScansModel.find({"US scan ID": input});
    res.json(scanData)
});
//end point for querying patient information
app.get("/getPatients", async(req, res) =>{
    const input = req.query.input;
    const patientData = await PatientModel.find({"Patient ID": input});
    res.json(patientData)
});
