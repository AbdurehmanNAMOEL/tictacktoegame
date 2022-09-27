import React from 'react'
import './styles/winner.css'
import Refresh from '../images/refresh.svg'
const WinnerDisplay = ({image,setWinner}) => {
  const handleReload=()=>{
     setWinner(false)
  }
  return (
    <div className='winner-container'>
      <h1>The Winner is</h1>
      <img src={image} alt="" />
      <div onClick={handleReload} className='refresh-container'>
      <img src={Refresh} alt=""  className='refresh-icon'/>
    </div>
    </div>
  )
}

export default WinnerDisplay