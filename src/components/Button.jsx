import React from 'react'
import { useState } from 'react'
import './styles/button.css'
import { useEffect } from 'react'

let count = 0
let vertical=[]
let horizontal1=[]
let horizontal2=[]
let horizontal3=[]

let vertical1=[]
let vertical2=[]
let vertical3=[]

let diagonal1=[]
let diagonal2=[]

let horizontalT1=[]
let horizontalT2=[]
let horizontalT3=[]

let verticalV1=[]
let verticalV2=[]
let verticalV3=[]

let diagonalD1=[]
let diagonalD2=[]

let initialValue='0'


const Button = ({list,array,setWinner,isThereWinner}) => {
    let imageContainer =["X","o"]
    const [Image,setImage]= useState('')
    
    const setImageToBlock=()=>{
    
    if(count>0) setTheNextMove()
    else setFirstMove()
    
  boardCreator()
}


const handleWinner=()=>{

   setImageToBlock()
 
}

const setFirstMove=()=>{

    setImage(imageContainer[parseInt(Math.random()*2)])
    if(imageContainer[parseInt(Math.random()*2)]===imageContainer[0]) count=1
    else count=2
    initialValue=imageContainer[parseInt(Math.random()*2)]
            
    
}

const setTheNextMove=()=>{

    if(count%2===0){  
      
        setImage(imageContainer[0])
        initialValue=imageContainer[0] 
    }else{
           
        setImage(imageContainer[1])
        initialValue=imageContainer[1]
        
    }
    count++
}



const boardCreator=()=>{
 array.push({ "index":`${list} ${initialValue}`})
 vertical = array.map(item=>item.index).sort()
 setUserInput() 
   console.log(array);
}



const setUserInput=()=>{
 
 
   for(let i =0; i<vertical.length;i++){
          
        if(parseInt(vertical[i].split(' ')[0])<=2){
            blockOne(horizontal1,i)  
        }else if(parseInt(vertical[i].split(' ')[0])>=3 && parseInt(vertical[i].split(' ')[0])<=5){
            blockTwo(horizontal2,i)    
        }else if(parseInt(vertical[i].split(' ')[0])>=6 && parseInt(vertical[i].split(' ')[0])<=8){
           blockThree(horizontal3,i)   
        }
      
        blockFour(i)
      
    }

    winnerChecker(horizontal1,horizontalT1)
  
}

const setBoardValue=(blockArray,newArray,index)=>{
    
    if(!blockArray.includes(vertical[index])){               
        blockArray.push(vertical[index])
        winnerChecker(blockArray,newArray)
                            
    }

}


const blockFour=(index)=>{
    if(vertical[index].split(' ')[0]%3===0){
      if(!vertical1.includes(vertical[index])){
          vertical1.push(vertical[index])
       }
    }
    winnerChecker(vertical1,verticalV1)
}


const blockOne = (horizontalArray,index)=>{
    
      if(!horizontalArray.includes(vertical[index])){
          horizontalArray.push(vertical[index])
          
          if(parseInt(vertical[index].split(' ')[0]) === 0){
                       
                setBoardValue(diagonal1,diagonalD1,index)
                
            }else if (parseInt(vertical[index].split(' ')[0]) === 1){
                   
                setBoardValue(vertical2,verticalV2,index)
        
            }else if (parseInt(vertical[index].split(' ')[0]) === 2){
                   
                setBoardValue(diagonal2,diagonalD1,index)
                setBoardValue(vertical3,verticalV3,index)
            }

       
     winnerChecker(horizontal1,horizontalT1)
        
    }   
}


const blockTwo=(horizontalArray,index)=>{
    
  
         if(!horizontalArray.includes(vertical[index])){
            horizontalArray.push(vertical[index])
          
                 
            if (parseInt(vertical[index].split(' ')[0]) === 4){
                  
                setBoardValue(diagonal1,diagonalD1,index)
                setBoardValue(vertical2,verticalV2,index) 
                setBoardValue(diagonal2,diagonalD2,index)

            }else if (parseInt(vertical[index].split(' ')[0]) === 5){

                setBoardValue(vertical3,verticalV3,index)
            }

      winnerChecker(horizontal2,horizontalT2)
   }    
  
}
        


const blockThree=(horizontalArray,index)=>{
  
    
       if(!horizontalArray.includes(vertical[index])){
             horizontalArray.push(vertical[index])
                     
            if(parseInt(vertical[index].split(' ')[0]) === 6){
                    
                setBoardValue(diagonal2,diagonalD2,index)
                
            }else if (parseInt(vertical[index].split(' ')[0]) === 7){
                    
                setBoardValue(vertical2,verticalV2,index)
            
            }else if (parseInt(vertical[index].split(' ')[0]) === 8){
                
                 setBoardValue(diagonal1,diagonalD1,index)
                   
                 setBoardValue(vertical3,verticalV3,index)

            }
   
       winnerChecker(horizontal3,horizontalT3)       
    
    }
        
}


useEffect(()=>{
  
 
    if(isThereWinner){
     
       setImage('')
       horizontal1=[]
       horizontalT1=[]
       horizontal2=[]
       horizontalT2=[]
       horizontal3=[]
       horizontalT3=[]
       vertical1=[]
       verticalV1=[]
       vertical2=[]
       verticalV2=[]
       vertical3=[]
       verticalV3=[]
       diagonal1=[]
       diagonal2=[]
       diagonalD1=[]
       diagonalD2=[]
       
    }
    if(!isThereWinner && array.length===9){
        alert('there is no winner')
    }

},[isThereWinner,array])




const winnerChecker = (blockArray,testArray)=>{
       
        if(blockArray.length === 3){
          
            for(let i=0;i<blockArray.length;i++){
            
                testArray.push(blockArray[i].split(' ')[1])
                
            } 
            
        if(testArray[0] === testArray[1] && testArray[1] === testArray[2]){    
            setWinner(true)
            testArray=[]
          }
        }                 
}


  return (
    
    <button onClick={handleWinner} className='btn-container' list={list} disabled={Image} value={Image}>
        {Image?<h1 style={{color:`${Image==="X"?'red':'white'}`}}>{Image}</h1>:''}
    </button>
  )
}

export default Button