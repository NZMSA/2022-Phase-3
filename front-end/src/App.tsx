import React from 'react';
import './App.css';
import LogicGameGrid from './components/LogicGameGrid';

function App() {
  return <div>
    <h1>2048 Clone</h1>
    <LogicGameGrid width={4} height={4}/>
  </div>
}

export default App;
