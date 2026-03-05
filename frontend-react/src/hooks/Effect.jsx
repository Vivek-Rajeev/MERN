import React, { useState ,useEffect}from 'react'

const Effect = () => {
  const[count,setCount] = useState(0);
  const[value,setValue] =useState(0);
  // Syntax
  // useEffect(callback Function,[dependence array]);

  // useEffect(()=>{
    // statement
    // },[dependence]);
    // useEffect(()=>{
    //   console.log("useEffect called");
    // })
    //  useEffect(()=>{
    //   console.log("useEffect called");
    // },[])
     useEffect(()=>{
      console.log("useEffect called");
    },[count])

    const handleIncrement= ()=>{
      setCount((count)=>count+1);
      setCount((count)=>count+1);
      setCount((count)=>count+1);
    }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <h1>Value: {value}</h1>
      <button onClick={()=>setValue(value+1)}>++</button>
    </div>
  )
}

export default Effect