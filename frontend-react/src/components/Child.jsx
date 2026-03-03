import React from 'react'

const Child = ({name,age,isActive}) => {
  return (
    <div>
        <h1>Name : {name}</h1>
        <h2>Age:{age}</h2>
        <h3>Active Status:{isActive ? "Live" : "Expire"}</h3>
    </div>
  )
}

export default Child