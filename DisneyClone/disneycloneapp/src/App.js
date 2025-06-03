import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from "./components/Login";
import Home from "./components/Home";
import './App.css';
import Details from "./components/Detaill";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
         <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Details />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
