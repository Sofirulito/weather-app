import React, { useEffect, useState } from 'react';

const ThemeSelector = () => {

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
      <div className="theme-options">
         <div className={`${colorTheme === 'light' ? 'active' : ''}`} onClick={() => handleClick('light')}>Light</div>
         <div className={`${colorTheme === 'dark' ? 'active' : ''}`} onClick={() => handleClick('dark')}>Dark</div>
      </div>
   )

}

export default ThemeSelector