import React, { useState } from 'react'

function UseState() {
    const [num,setNum]=useState(0);
    const handleAdd = () =>{
        setNum(num+1)
    }

  return (
    <>
    <p>{num}</p>
    <button onClick={handleAdd}>increase</button>
    </>
  )
}

export default UseState