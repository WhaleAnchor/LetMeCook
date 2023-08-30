import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Login from './components/Login'
import Register from './components/Register';
import Reset from './components/Reset';
import Navbar from './components/Navbar';

function App() {


  return (
    <Router>
    <Routes>
      <>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/reset" element={<Reset />} />
        <Route exact path="/navbar" element={<Navbar />} />
      </>
      </Routes>
    </Router>
  );
}

export default App;
