import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import NoteState from "./context/notes/NoteState"
import Alert from './components/Alert';
import { useState } from 'react';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {

  const [alert, setalert] = useState(null)

  const showAlert = (message,type)=>{
    setalert({
      message: message,
      type:type
    })
    setTimeout(()=>{
      setalert(null)
    },2000);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar title=" Notebook" />
          <Alert alert ={alert}/>
          <div className='container'>
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert}/>}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
              <Route exact path="/signup" element={<SignUp showAlert={showAlert}/>}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}


export default App;
