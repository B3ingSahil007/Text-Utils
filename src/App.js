import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Forms';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const removeBodyClasses = () => {
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-light');
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-' + cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="B3ing_Sahil_007" mode={mode} toggleMode={toggleMode} key={new Date()} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            {/* /users --> Component 1
        /users/home --> Component 2 */}
            <Route exact path="/About" element={<About mode={mode} aboutText="About-Us" />}></Route>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Text Form :" mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
/* 
? Explaining
! Main Heading
^ Topics of Heading
~ Uncomment the Line
*/