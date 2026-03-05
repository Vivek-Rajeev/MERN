import React from 'react'

const Child = ({name,age,isActive,Food,contact}) => {
  return (
    <div>
        <h1>Name : {name}</h1>
        <h2>Age:{age}</h2>
        <h3>Active Status:{isActive ? "Live" : "Expire"}</h3>
        <h1>Istamaina Bhojanam</h1>
        <ul>
          {Food.map((value,index)=>(
            <li key={index}>{value}</li>
          ))}
        </ul>
        <h1>Communicate With</h1>
        <p>Mobile No:{contact.mobile}</p>
        <p>Email:{contact.email}</p>
    </div>

  )
}

export default Child 