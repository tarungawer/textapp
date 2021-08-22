import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextFrom from './Components/TextFrom';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#27224a';
      showAlert("Dark Mode has been enabled!", "success");
      document.title = 'TextApp - DarkMode';
      setInterval(() => {
        document.title = 'TextApp is Amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'Install TextApp Now';
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#cfd8ff';
      showAlert("Dark Mode has been Disabled!", "success");
      document.getElementById('btn11').style.backgroundColor = '#0d6efd';
      document.getElementById('btn12').style.backgroundColor = '#0d6efd';
      document.getElementById('btn13').style.backgroundColor = '#0d6efd';
      document.getElementById('btn14').style.backgroundColor = '#0d6efd';
      document.getElementById('btn15').style.backgroundColor = '#0d6efd';
      document.getElementById('btn16').style.backgroundColor = '#0d6efd';
      document.title = 'TextApp - LightMode';
    }
  }
  return (
<>
    <Router>
    <Navbar title="TextApp" aboutTextApp="About TextApp" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextFrom showAlert={showAlert} heading="Enter Your Text" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
</>
  );
}

export default App;
