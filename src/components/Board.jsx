import React, { useState } from 'react'
import Button from './Button'
import './styles/board.css'
import WinnerDisplay from './WinnerDisplay'

const Board = ({isThereWinner,setWinner}) => {

     let arrayList = Array.of(0,1,2,3,4,5,6,7,8)
     let array =[]   
  return (
    <div className='board-container'>
    { arrayList.map((item,index)=>
    
    <Button 
    key={item} 
    list ={item} 
    index={index} 
    array={array} 
    setWinner={setWinner}
    isThereWinner={isThereWinner}
    />)}

    { isThereWinner&&<WinnerDisplay  setWinner={setWinner}/>}

    </div>
  )
}

export default Board