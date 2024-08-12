import React from 'react'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom';

function DashHeader() {
  const navigate = useNavigate()
  const handleClick = () => {
    localStorage.removeItem('jwtToken'); // Clear the token
    localStorage.removeItem('role'); // Clear the role
    navigate('/');
  }

  return (
  <div className="bg-slate-600 text-white font-bold p-3 flex justify-between items-center">
    <div className='text-3xl'>Classroom App</div>
    <button className='' onClick={handleClick} >Logout</button>
  </div> 

  )
}

export default DashHeader