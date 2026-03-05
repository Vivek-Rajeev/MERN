import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div> 
      <Child name="Vampire" age={21} isActive={true} Food={["Pasta","Lollipop","Pongali"]}
      contact={{
        mobile:8790559350,
        email:"vivekvikki10020@gmail.com"
      }}/>
      <Child name="ella" age={20} isActive={true} Food={["Pasta","Lollipop","Pongali"]}
      contact={{
        mobile:8757847850,
        email:"ella@gmail.com"
      }}/>
    </div>
  )
}

export default Parent