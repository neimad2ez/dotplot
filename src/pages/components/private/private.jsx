import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import './private.css';
import { useState } from "react";
import axios from 'axios';
import { Navigate } from "react-router-dom";

export const Private = () => {

    const [input, setInput] = useState("");
    const[patientInfo, setPatientInfo] = useState([])
    const[scanID, setScanID] = useState([])
    const[scanResult, setScanResult] = useState([])

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:7080/getPatients?input=${input}`);
            const patientInfo = response.data;
            console.log(patientInfo);
            const scanID = patientInfo[0]["US scan ID"];
            const scanResult = await axios.get(`http://localhost:7080/getScans?input=${scanID}`);
            const scanInfo = scanResult.data;
            console.log(scanInfo);
            setPatientInfo(patientInfo);
            setScanID(scanInfo);
        } catch (error) {
            console.error('Error fetching the patient data', error);
        }
    };

    if (!(patientInfo.length == 0)) {
        return <Navigate to='/patient'></Navigate>
    }

    function handleInputChange(event) {
        setInput(event.target.value);
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(() => console.log("Sign Out"))
        .catch((error) => console.log(error))
    }

    return (
        <section>
            <div id="image">
                <img src="src\pictures\dotplot.jpeg" />
            </div>

            <h2>Patient Name / Patient ID</h2>
            <div id="bottom">
                <input type="number" placeholder="Search..." value={input} onChange={handleInputChange} />
            

                <button id="search" onClick={handleSearch}>Search</button>
            </div>

            <div id="btn">
                <button id="sign-out" onClick={handleSignOut}>Sign Out</button>
            </div>
            
        </section>
    );
};