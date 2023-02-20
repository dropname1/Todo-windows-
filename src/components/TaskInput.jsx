import React, {useState} from 'react'

export default function TaskInput({addTodo}) {
  const [input, setInput] = useState('')
  
  function addTodoVerification (input,e) {
    if (input.trim()) {
      if (e.code === "Enter" || e.code === "EnterNumpad") { 
        addTodo(input, e);
        setInput('')
      }
    }
  }
  return (
    <div>
      <input
        className="taskInput"
        placeholder="Enter Task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUpCapture={(e) => addTodoVerification(input, e)}
      />
    </div>
  );
}
