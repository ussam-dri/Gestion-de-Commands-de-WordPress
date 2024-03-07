import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import statement
import Header from './layouts/header/Header';
import Footer from './layouts/footer/Footer';
import { Clients } from './components/clients/Clients';
import { Commands } from './components/commands/Commands';

function App() {
  return (
    <div className="App">
      <Router> {/* Corrected BrowserRouter */}
        <Header />
        <Routes>
          <Route path="/" element={<Clients />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/commands" element={<Commands />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
