import React from "react";
import { Link } from "react-router-dom";

function Menu(){
   return(
      <header className='header'>
         <nav className='nav'>
            <ul className='nav__list'>
               <li className='nav__item'>
                  <Link to="/" className='nav__link'>Home</Link>
               </li>
               <li>
                  <p className='nav__link'>Select theme</p>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Menu;