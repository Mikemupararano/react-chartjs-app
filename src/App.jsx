import React from 'react';
import './App.css';
import BarChart from './components/BarChart'; // Correctly import the BarChart component

function App() {
  return (
    <>
      <h1>Data Visualisation: React and Chart Js</h1>
      <div className="card">
        <BarChart /> {/* Use the BarChart component here */}
      </div>
    </>
  );
}

export default App;


