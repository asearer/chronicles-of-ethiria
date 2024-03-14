import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <main>
          {/* No Routes here */}
        </main>
        <footer>
          <p>&copy; 2024 Chronicles of Ethiria</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
