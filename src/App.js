import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from './components/menu/menu'
import WeatherList from './components/weatherList'
import './assets/main.scss'
import Search from "./components/search";

function App() {
  return (
    <Router>
      <Menu />
      <div className='container'>
        <Search />
        <br />
        <WeatherList />
      </div>
    </Router>
  );
}

export default App;