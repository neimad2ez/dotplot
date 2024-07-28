import {BrowserRouter, Routes, Route} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import './App.css'

import { auth } from "./firebase";
import { ProtectedRoute } from "./pages/components/protectedRoute";
import { Home } from "./pages/home";
import { Private } from "./pages/components/private/private";
import { useEffect, useState } from "react";
import Notification from "./pages/components/notification/Notification";
import { Patient } from "./pages/patient/Patient";

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }

      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    return <h2>Loading...</h2>
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route index path ='/' element ={<Home user={user}></Home>}></Route>
      <Route path="/private" element={
        <ProtectedRoute user={user}>
          <Private></Private>
        </ProtectedRoute>}>
      </Route>
      <Route index path='/patient' element = {<Patient></Patient>}></Route>
    </Routes>
    <Notification />
    </BrowserRouter>
  )
}

export default App
