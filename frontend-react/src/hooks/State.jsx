import React, { useState } from 'react'

const State = () => {
    // const[count,setCount]=useState(initialValue);
    const [count, setCount] = useState(0); 
    const handleDecrement = () => {
        setCount(count - 1);
    }
    const handleReset = () => {
        setCount(0);
    }
    const handleIncrement=() =>{
        setCount(count + 1);
    }
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handleIncrement}>Increment</button><br />
        <button onClick={handleDecrement}>Decrement</button><br />
        <button onClick={handleReset}>Reset</button>

        {/* <button onClick={()=>setCount(count+1)}>Increment</button><br />
        <button onClick={()=>setCount(count-1)}>Decrement</button><br />
        <button onClick={()=>setCount(0)}>Reset</button> */}

    </div>
  )
}

export default State