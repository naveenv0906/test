import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [num,setNum]=useState(0);

    useEffect(()=>{
        setNum(1)
        console.log('from useEffect');
        
    },[])
    
    console.log("num",num);
    
  return (
    <>
    <p>{num}</p>
    <button onClick={()=>setNum((num)=>num+1)}>click</button>
    </>
  )
}

export default UseEffect