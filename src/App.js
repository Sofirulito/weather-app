import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from './components/menu/Menu'
import WeatherList from './components/WeatherList'
import './assets/main.scss'
import Search from "./components/Search";
import Parent from "./components/Parent";

function App() {
  return (
    <Router>
      <Menu />
      <div className={`container `}>
        <Search />
        <br />
        <WeatherList />
        <Parent />
      </div>
    </Router>
  );
  
}

export default App;