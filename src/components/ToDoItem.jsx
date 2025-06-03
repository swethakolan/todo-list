import React, { useState } from "react";

function ToDoItem(props) {
  const [isMarked, setMarked] = useState(false);
  function handleChange() {
    setMarked((prev) => {
      return !prev;
    });
  }
  return (
    <div onClick={handleChange}>
      <li style={{ textDecoration: isMarked ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
