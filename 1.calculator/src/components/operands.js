import React from "react";

const OperandButton = (props) => {
  const { name, operandSetting } = props;
  return (
    <div className="calc-button">
      <button
        className="operand"
        id="operand"
        onClick={(e) => operandSetting(e)}
      >
        {name}
      </button>
    </div>
  );
};

export default OperandButton;
