import React from 'react'
import triste from '../assets/triste.png';
import { useNavigate, Link } from 'react-router-dom';

function NotFound() {

  const navigate = useNavigate();

  return (
    <div className='text-white block'>
      <h1 className='text-4xl text-center py-10'>Lo Sentimos, no hemos encontrado la página solicitada :(</h1>
      <img src={triste} className="w-60 mx-auto py-10" />
      <button className='block mx-auto text-xl bg-green-500 px-5 py-2 my-4 rounded' onClick={() => navigate('/')}>Volver al inicio</button>
    </div>
  )
}

export default NotFound
