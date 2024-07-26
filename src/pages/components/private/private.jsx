import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";
import './private.css';
import { useState } from "react";

export const Private = () => {

    const [input, setInput] = useState("");

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
                <input type="text" placeholder="Search..." value={input} onChange={handleInputChange} />
            

                <button id="search">Search</button>
            </div>

            <div id="btn">
                <button id="sign-out" onClick={handleSignOut}>Sign Out</button>
            </div>
            
        </section>
    );
};