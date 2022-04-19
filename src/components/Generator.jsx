import React, { useEffect, useState } from 'react'
import desktop from '../images/pattern-divider-desktop.svg'
// import mobile from '../images/pattern-divider-mobile.svg'
import icondice from '../images/icon-dice.svg'
import axios from 'axios';


export const Generator = () => {
  const [text, setText] = useState([]);
  //funcion para traer los datos de la API

  const URL = 'https://api.adviceslip.com/advice';

  const fetchAd = async () => {
    const res = await axios.get(URL);
    
    setText(res.data.slip)
    console.log(res.data.slip)
    
  }

useEffect(()=>{
  fetchAd();

},[]);

// const handleClick = () =>{
//   fetchAd();

// }


  return (
      <div className='container'>
        <h1 className='title'>Advice # {text.id}</h1>
        <p className='paragraph'>{ text.advice}</p>

        <div className='image'>
          <img src={ desktop } alt="" />
        </div>

        <button className='icon-dice' onClick={fetchAd}>
          <img src={ icondice } alt="" />
        </button>

    </div>
  )
}
