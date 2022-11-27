import './App.css';


import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Admin from './pages/Admin';
import User from './pages/User';



function App() {
  const [login, setLogin] = useState(false);
  return (
      <BrowserRouter>
        <Routes>
          {//root 
          }
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;