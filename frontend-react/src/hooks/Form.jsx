import React from 'react'
import { useState } from 'react'

const Form = () => {
    const[name,setName]=useState("");
    const handleForm=(e)=>{
        e.preventDefault();
        console.log(name);
    }
  return (
    <div>
        <form onSubmit={handleForm}>
            <label>Name:</label>
            <input type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder='Enter the name' />
            <button type="submit">Submit</button>

        </form>
        <h1>Name: {name}</h1>
    </div>
  )
}

export default Form