import React from "react";

const Button = (props) => {
  const { numVal, onClickFunction } = props;
  return (
    <div className="calc-button">
      <button key={numVal} id="numVal" onClick={(e) => onClickFunction(e)}>
        {numVal}
      </button>
    </div>
  );
};

export default Button;
