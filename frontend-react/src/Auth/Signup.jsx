import React, { useState } from 'react'

const Signup = () => {
  const [ user, setUser]=useState({
    name:'',
    email:'',
    password:''
    
  })
  const handleChange =(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(user);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text"
        placeholder='Enter the name '
        name="name"
        onChange={handleChange}/>
         <label>Email:</label>
         <input type="email" 
         placeholder='enter the email'
         name='email'
         onChange={handleChange}
          />
         <label>Password:</label>
         <input type="password"
         onChange={handleChange} 
         name='password'/>
         <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Signup