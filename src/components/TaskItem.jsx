import React from 'react'

export default function TaskItem({task, removeTodo, todoCompleted}) {

  let checked = false
  let classes = []
  classes.push('task')

  if (task.completed === true) {
    classes.push('taskDone')
    checked = true
  } else {
    checked = false
  }


  return (
    <div className="taskWrapper">
      <div className="inputChecWrapper">
        <input
          checked={checked}
          type="checkbox"
          className="check"
          onChange={() => todoCompleted(task.id)}
        />
        <label htmlFor="check" className="label"></label>
      </div>
      <span
        contentEditable="true"
        spellcheck="false"
        className={classes.join(" ")}
      >
        {task.title}
      </span>
      <span className="removeTask" onClick={() => removeTodo(task.id)}>
        &times;
      </span>
    </div>
  );
}
