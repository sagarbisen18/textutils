// import { useState } from 'react';
import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  
  // const[darkMode , setDarkMode] = useState(false);
  const[alert, setAlert] = useState({
    msg : "Alert message",
    type: "success"
  });
  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type: type
    })
    setTimeout( ()=>{
      setAlert(null);
    }, 3000 );

  }
  return (
    <>
    <Router>
    <Navbar title = "New Title" aboutText = "about the app" />
    <Alert alert={alert}/>
    <div className="container my-3">
    
    <Routes>
      <Route exact path="/about" element={<About />}>
      </Route>
      <Route exact path="/" element={<TextForm heading="Enter text to analyze"  showAlert={showAlert} />}>
      </Route>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
