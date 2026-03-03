import React from 'react'
import Parent from '../components/Parent';

const About = () => {
    const element = <div>Hello 21!</div>;
  return (
    <div>
        <p>{element}{/*You can write any javascript code inside "{}"*/}</p>
        <Parent />
    </div>
  )
}

export default About