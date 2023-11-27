import React, { useRef } from "react";

const Todoitem = (props) => {
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <br/>
      <div className="btns ">
        <button className="btn btn-outline-secondary"
          onClick={() => changeFocus()}
        >
          {" "}
          Edits{" "}
        </button>
        {item.completed === false && (
          <button className="btn btn-outline-success"
            onClick={() => completeTodo(item.id)}
          >
            Complete
          </button>
        )}
        <button className="btn btn-outline-danger"
          onClick={() => removeTodo(item.id)}
        >
          {" "}
          Delete
        </button>{" "}
      </div>
      {item.completed && <span className="completed">done</span>}
    </li>
  );
};

export default Todoitem;