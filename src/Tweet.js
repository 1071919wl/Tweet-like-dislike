import React from 'react'
import App from './App.css';
import Button from './Button'

const Tweet =(props)=>{
  return (
    <div className="tweet">
      <h1>{props.name}</h1>
      <p>{props.message}</p>
      <Button />
    </div>
  )
}

export default Tweet;
