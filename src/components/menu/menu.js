import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Prueba from './pruebas';

const Menu = () => {
   const [ colorTheme, setColorTheme ] = useState('light');

   useEffect(() => {
      const currentTheme = localStorage.getItem('theme-color')
      if(currentTheme){
         setColorTheme(currentTheme);
      }
   }, []);

   const handleClick = (theme) => {
      setColorTheme(theme)
      localStorage.setItem('theme-color', theme)
   }

   return(
      <header className='header'>
         <nav className='nav'>
            <ul className='nav__list'>
               <li className='nav__item'>
                  <Link to="/" className='nav__link'>Home</Link>
                  <Prueba muestraColorTema={colorTheme}/>
               </li>
               <li>
                  <div className="theme-options">
                     <div className={`${colorTheme === 'light' ? 'active' : ''}`} onClick={() => handleClick('light')}>Light</div>
                     <div className={`${colorTheme === 'dark' ? 'active' : ''}`} onClick={() => handleClick('dark')}>Dark</div>
                  </div>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Menu;