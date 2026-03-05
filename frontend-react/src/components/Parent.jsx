import React from 'react'
import Child from './Child'

const Parent = ({message}) => {
  return (
    <div> 
      <button onClick={()=>message("Message from Parent")}>send message</button>
      <Child name="Vampire" age={21} isActive={true} Food={["Pasta","Lollipop","Pongali"]}
      contact={{
        mobile:8790559350,
        email:"vivekvikki10020@gmail.com"
      }}
      sendMessage = {message}
      />
      <Child name="ella" age={20} isActive={true} Food={["Pasta","Lollipop","Pongali"]}
      contact={{
        mobile:8757847850,
        email:"ella@gmail.com"
      }}
      sendMessage = {message}/>
    </div>
  )
}

export default Parent