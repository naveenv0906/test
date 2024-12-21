import React, { useEffect, useState } from 'react'

function Todo() {
    const [tododata,setTodoData]=useState([]);

    const getAllToDo= async ()=>{
        const response =await fetch('https://dummyjson.com/todos');
        const data=await response.json();
        setTodoData(data)
    }
    console.log("state data : ",tododata);
    

    useEffect(()=>{
        getAllToDo();
    },[])
    
  return (
    <>
    <p></p>
    </>
  )
}

export default Todo