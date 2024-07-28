import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import './private.css';
import { useState } from "react";
import axios from 'axios';

export const Private = () => {

    const [input, setInput] = useState("");
    const[patients,setPatients] = useState([])

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:7080/getPatients?input=${input}`);
            console.log(response.data);
            setInput("");
        } catch (error) {
            console.error('Error fetching the patient data', error);
        }
    };


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