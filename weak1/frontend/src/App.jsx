import React from 'react';
import './App.css'; // This imports the CSS file
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup'; // Update the path based on your project structure
import Signin from './components/Signin';

function App() {
  return (
      <Router>
          <div>
              <Routes>
                  <Route path="/" element={<Signup />} />
                  <Route path="/signup" element={<Signup />} />
                  {/* Signin Route */}
                  <Route path="/signin" element={<Signin />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
