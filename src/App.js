 import React from "react";
import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
 import "./App.scss";
 import Home from "./components/Home";
 import Header from "./components/Header"
function App() {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
