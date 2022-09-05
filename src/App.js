
import { useState } from 'react';
import * as React from 'react';
import './App.css';

import About from './components/About';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import Alert from './components/Alert'




import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [TextMode, setTextMode] = useState("Enable dark mode")
  const [AlertMsg, setAlert] = useState(null);

  const ShowAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert();
    }, 2000);
  }

  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      setTextMode("Disable Dark mode");
      document.body.style.backgroundColor = '#042743';
      ShowAlert("Dark mode has been enable", "success");
      // document.title = "TextUtils - Dark Mode"


    }
    else {
      setMode('light');
      setTextMode("Enable dark mode");
      document.body.style.backgroundColor = 'white';
      ShowAlert("Light mode has been enable", "success");
      // document.title = "TextUtils - Light Mode"

    }
  };

  return (

    <>
      {/* <Navbar/> */}
      {/* <Navbar title="TextUtils2" AboutText="About TextUtils2" /> */}
      <Router>
      <Navbar title="TextUtils2" mode={Mode} toggleMode={toggleMode} TextMode={TextMode} />
      <Alert alert={AlertMsg} />
      <div className="container my-3">

        <Routes>
            <Route path={"/about"} element={<About />} />
            <Route exact path={"/"} element={<TextForm heading="Enter the text to analyze Below " mode={Mode} ShowAlert={ShowAlert} />} />
            
          </Routes>
        {/* <TextForm heading="Enter the text to analyze Below " mode={Mode} ShowAlert={ShowAlert}/> */}


        </div>
      </Router>

    </>
  );
}

export default App;
