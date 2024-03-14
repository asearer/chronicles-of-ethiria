import React from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad, FaCode, FaCog } from 'react-icons/fa';

function About() {
  return (
    <div className="about-container">
      <h2>About</h2>
      <p>This is the About page for Chronicles of Ethiria.</p>
      <p>Chronicles of Ethiria is an ambitious fantasy game that is being developed in several stages:</p>
      <Link to="/game-concept" className="stage-link">
        <div className="stage">
          <FaGamepad className="icon" />
          <div>
            <h3>Game Concept</h3>
            <p>Initial idea and concept for the game.</p>
          </div>
        </div>
      </Link>
      <Link to="/development" className="stage-link">
        <div className="stage">
          <FaCode className="icon" />
          <div>
            <h3>Development</h3>
            <p>Building the game mechanics, storyline, and graphics.</p>
          </div>
        </div>
      </Link>
      <Link to="/testing-and-refinement" className="stage-link">
        <div className="stage">
          <FaCog className="icon" />
          <div>
            <h3>Testing and Refinement</h3>
            <p>Testing the game for bugs and refining gameplay.</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default About;
