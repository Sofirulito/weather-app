import React from 'react';

const WeatherCard = () => {
   return(
      <div className='card card--color'>
         <h3 className='card__title'>Ciudad</h3>
         <div className='column'>
            <div className='column__content'>
               <h2 className=''>0°C</h2>
               <p>Moderate rain. Calm</p>
               <span>The high will be 20C, the low will be 10°C</span>
            </div>
            <div className='column__icon'>
               <img alt='weather_ico' />
            </div>
         </div>
         <div className='card__more'>
            <p>Text</p>
         </div>
      </div>
   )
}

export default WeatherCard
