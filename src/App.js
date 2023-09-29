import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Login from './components/Login'
import Register from './components/Register';
import Reset from './components/Reset';
import Navbar from './components/Navbar';
import WebWrapper from './pages/WebWrapper';
import Recipes from './pages/Recipes';

function App() {
  

  return (
      <WebWrapper className="App">
        <Routes>
          <>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/reset" element={<Reset />} />
            <Route exact path="/navbar" element={<Navbar />} />
            <Route exact path="/recipe" element={<Recipes />} />
          </>
        </Routes>
      </WebWrapper>
    
  );
}

export default App;
