import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mapbox from './components/Mapbox';
const mySecret = process.env['REACT_APP_MAPBOX_ACCESS_TOKEN']


function App() {
  return (
    <div className="App">
    <Mapbox />
    </div>
  );
}

export default App;
