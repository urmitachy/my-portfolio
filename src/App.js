import React from 'react';

import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <Home/>
      </Router>
    </div>
  );
}


export default App;