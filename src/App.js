import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Characters from './components/Characters';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path='/'element={<Home />}/>
      <Route path='/characters'element={<Characters />}/>
    </Routes>
    {/* <Footer /> */}
  </Router>
  
  );
}

export default App;

