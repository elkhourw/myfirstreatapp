import React, { useState } from 'react';
import "./styles.css";

function Form(props){

  const [content, setContent] = useState("")

const handleSubmit = (ev) => {
  ev.preventDefault();
  props.addTodo(content)
  setContent("")
}

  const handleChange = (ev) => {
      setContent(ev.target.value)
  }

  return(
    <form onSubmit={handleSubmit}>
      <label>Name :</label>
      <input type="text" value={content} onChange={handleChange}></input>
    </form>
  );
}




export default function App(props) {


  const [todos, setTodo] = useState(
    [{
      id: 1,
      content: "acheter du lait"
    }]
  );

  const displayTodos = () => {
    return todos.map((t) => {
      return(
        <div style={{display:'flex'}}>
          <div>{t.content}</div>
          <div><button>X</button></div>
        </div>
      )
    })
  }

  const addTodo = (content) => {

    const todosCopy = [...todos]

    todosCopy.push({
      id : Math.random,
      content : content
    })

    setTodo(
      todosCopy
    )
  }

  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <div>Bonjour, voici ta liste de tâches :</div>

      {displayTodos()}
    </div>
  );

}
