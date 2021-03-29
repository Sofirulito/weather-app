import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../Context/globalContext";
import { NavBar, SwitchButton } from "./StylesHome"
import Layout from "../Layout/Layout";
import WeatherList from '../WeatherList'
import Search from "../Search";

const Home = () => {
  const { theme, themeSwitchHandler } = useContext(GlobalContext);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Layout>
      <header className='header'>
        <NavBar>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link to="/" className='nav__link'>Home</Link>
            </li>
            <li>
            <SwitchButton>
              <input
                type='checkbox'
                onChange={() =>
                  themeSwitchHandler(theme === "dark" ? "light" : "dark")
                }
              />
              <span></span>
            </SwitchButton>
            </li>
          </ul>
        </NavBar>
      </header>
      <div className='content'>
        <Search />
        <br />
        <WeatherList />
      </div>
    </Layout>
  )
}

export default Home;