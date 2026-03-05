import React, { use, useEffect, useRef, useState } from 'react'

const Ref = () => {
    const [count,setCount] = useState(0);
    const like = useRef(0);
    const inputRef = useRef();
    // ex 1
    // useEffect(()=>{
    //     console.log("Component Rendered");
    // })
    // const handleLike = () =>{
    //     like.current = like.current + 1;
    // ex 2
    // useEffect(()=>{
    //     like.current = like.current + 1;
    //     console.log("Component Re-Rendered");
    // })
    // ex 3
    const handleClick = () => {
        inputRef.current.focus();
        inputRef.current.style.color = "red";
    }
  return (
    <div>
        {/* ex 1 */}
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>Focus</button>
        {/* ex 2
        <h1>Count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Inc</button>
        <h1>Like : {like.current}</h1> */}
        {/* ex 1 */}
        {/* <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Inc</button>
        <h1>Like : {like.current}</h1>
        <button onClick={handleLike}>❤</button> */}
    </div>
  )
}

export default Ref