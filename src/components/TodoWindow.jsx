import React from 'react'

export default function TodoWindow({ win, activeWindow, removeWindow, selectWindow }) {
  const classes = []

  if(win.id === activeWindow) {
    classes.push("activeWindow");
  }

  classes.push("todoWindow");

  return (
    <div className={classes.join(" ")} onClick={() => selectWindow(win.id)}>
      <div>
        {win.title}
      </div>
      <span contentEditable="false" onClick={(e) => removeWindow(win.id, e)}>
        &times;
      </span>
    </div>
  );
}
