import React from "react";

const Button = (props) => {
  const { numVal, evaluateDisplay } = props;
  return (
    <div className="calc-button">
      <button key={numVal} id="numVal" onClick={(e) => evaluateDisplay(e)}>
        {numVal}
      </button>
    </div>
  );
};

export default Button;
