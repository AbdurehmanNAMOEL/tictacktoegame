import React from 'react'
import Button from './Button'
import './styles/board.css'

const Board = () => {

     let arrayList = Array.of(0,1,2,3,4,5,6,7,8)
     let array =[]
     let boardIndex=[]
   
  return (
    <div className='board-container'>
    { arrayList.map((item,index)=>
    <Button 
    key={item}
    boardIndex={boardIndex} 
    list ={item} 
    index={index} 
    array={array} 
    />)}

    </div>
  )
}

export default Board