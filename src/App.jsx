import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import SearchPage from './component/Searchpage';

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<SearchPage />} />  
        <Route path="/Listpage" element={<Save />} />  
        <Route path="/login" element={<LogIn/>} />  
      </Routes>
    </Router>
  );
}

export default App;