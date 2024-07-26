import { useState } from "react"

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Home = ({user}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    const handleMethodChange = () => {
        setIsSignUpActive(!isSignUpActive);
    };

    const handleSignUp = () => {
        if (!email || !password) return;
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                toast.success("Successfully created account!")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    };

    const handleSignIn = () => {
        if (!email || !password) return;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                toast.success("Successfully logged in!")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                toast.error("Wrong email or password!")
            })
    }

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    if (user) {
        return <Navigate to='/private'></Navigate>
    }

    return (
        <section>
            <form action="">
                <img src="src\pictures\dotplot.jpeg" />
                <fieldset>
                    <ul>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" onChange={(handleEmailChange)}/>
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={(handlePasswordChange)}/>
                        </li>
                    </ul>
                    {isSignUpActive && <button type="button" onClick={handleSignUp}>Sign Up</button>}
                    {!isSignUpActive && <button type="button" onClick={handleSignIn}>Sign In</button>}
                </fieldset>
                {isSignUpActive && <a onClick={handleMethodChange}>Login</a>}
                {!isSignUpActive && <a onClick={handleMethodChange}>Create Account</a>}
            </form>
        </section>
    )
}