import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './assets/main.scss'
import Home from "./components/Home/Home"

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;