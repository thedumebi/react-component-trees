import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={(event) => props.handleChange(event)} type="text" value={props.inputText} />
      <button onClick={() => props.addItem(props.inputText)}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
