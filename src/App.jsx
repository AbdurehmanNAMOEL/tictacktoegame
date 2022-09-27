import React, { useState } from 'react'
import './app.css'
import Board from './components/Board'

const App = () => {
   const [isThereWinner,setWinner]=useState(false)
   
  return (
    <div className='app'>
        <Board isThereWinner={isThereWinner} setWinner={setWinner}/>
     
    </div>
  )
}

export default App