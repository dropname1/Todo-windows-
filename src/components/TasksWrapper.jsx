import React from 'react'
import TaskItem from './TaskItem'

export default function TasksWrapper({tasks, removeTodo, todoCompleted, activeWindow}) {

  return (
    <div className='TasksWrapper'>
        {tasks.map(task => {
          if (task.windowId === activeWindow) {
             return ( <TaskItem
                 task={task}
                 key={task.id}
                 removeTodo={removeTodo}
                 todoCompleted={todoCompleted}
               /> )
          }
        })}
    </div>
  )
}
