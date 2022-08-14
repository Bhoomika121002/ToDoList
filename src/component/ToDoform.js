import React, { useState } from "react";

export default function ToDoform(props) {
  //state
  const [ input, setInput ] = useState("");



  const handleChange = e  => {
    setInput(e.target.value) 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask({
        id: Math.floor(Math.random() *1000000),
        text: input,
        isComplete: false
    })
    setInput('')
  } 


  return (
    <form className="ToDo-form">
      <input type="text"
        placeholder="To-Do item"
        onChange= {handleChange} className= "ToDo-input"
        value={input}
        name="text"  />
        <button type = "submit" onClick={handleSubmit} className= "ToDo-btn" > ADD IN LIST </button>
    </form>
  );
}
