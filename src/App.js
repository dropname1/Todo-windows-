import React, { useState } from 'react'
import TodoWindow from './components/TodoWindow.jsx'
import TaskInput from "./components/TaskInput.jsx";
import TasksWrapper from "./components/TasksWrapper";

export default function App() {
  const [tasks, setTasks] = useState([
    {id:1, title: 'Leran React router 1', completed: false, windowId: 1},
    {id:2, title: 'Leran React router 2', completed: true, windowId: 2},
    {id:3, title: 'Leran React router 3', completed: false, windowId: 3},
  ])

  const [windows, setWindows] = useState([
    {id: 1, title: 'Todo Windows 1', selected: true, closed: false},
    {id: 2, title: 'Todo Windows 2', selected: true, closed: false},
    {id: 3, title: 'Todo Windows 3', selected: true, closed: false},
  ])

  const [windowCount, setWindowCount] = useState(1)
  const [activeWindow, setActiveWindow] = useState(1)

  function removeWindow (id,e) {
    e.stopPropagation();
    setWindows(windows.filter(win => {
      return win.id !== id
    }))
    
  }
  

  function addWindow () {
    if (windows.length >= 7) {
      alert('Your used all windows')
    } else {
    setWindowCount(prev => ++prev)
    console.log(windowCount)
    setWindows(
      windows.concat([
        {
          id: Date.now(),
          title: "Todo Window " + windowCount,
          num: windowCount,
          selected: false,  
          closed: false,
        },
      ])
    )
  }
  }

  function selectWindow (id) {
    setWindows(windows.filter(win => {
      win.selected = false
      if (win.id === id) {
        win.selected = true 
      }
      return win
    }))
    setActiveWindow(id)
    
  }

  function addTodo(inputValue,e) {
        setTasks(tasks.concat([
            {
              id: Date.now(),
              title: inputValue,
              completed: false,
              windowId: activeWindow,
            }
          ])
        )
  }

  function removeTodo (id) {
    setTasks(tasks.filter(task => {
      return task.id !== id
    }))
  }

  function todoCompleted (id) {
    setTasks(tasks.filter(task => {
      if (task.id === id) {
        task.completed = !task.completed
      } 
      return task
    }))
  }

  return (
    <div>
      <div className="mainWrapper">
        <div className="windows">
          {windows.map(win => {
            return (
              <TodoWindow
                win={win}
                key={win.id}
                activeWindow={activeWindow}
                removeWindow={removeWindow}
                selectWindow={() => selectWindow(win.id)}
              />
            );
          })}
          <div className="addTodoWindow" onClick={addWindow}>+</div>
        </div>
        <h1>Todo App</h1>
        <TaskInput addTodo={addTodo} ></TaskInput>
        <TasksWrapper activeWindow={activeWindow} tasks={tasks} removeTodo={removeTodo} todoCompleted={todoCompleted}></TasksWrapper>
      </div>
    </div>
  )
}
