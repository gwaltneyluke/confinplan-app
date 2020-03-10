import React from 'react';
import Planner from './components/Planner';
import Title from './components/Title';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Title/>
      <Planner/>
    </div>
  );
}

export default App;
