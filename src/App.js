import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";



// react-router

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

//toast

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase

import firebase from "firebase/app";
import "firebase/auth";

//components

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import PageNotFound from "./pages/pageNotFound"
import { UserContext } from "./context/UserContext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import firebaseConfig from "./config/firebaseConfig";

// init firebase 

firebase.initializeApp(firebaseConfig);

const App = () => {

 const [user,setUser] = useState(null);

  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user,setUser}}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
