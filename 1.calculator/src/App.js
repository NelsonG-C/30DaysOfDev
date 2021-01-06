import { useState } from "react";
import "./styles.css";
import "./App.css";

import Button from "./components/displayButton";
import OperandButton from "./components/operands";

const App = () => {
  const [currentVal, setCurrentVal] = useState("0");
  const [operand, setOperand] = useState("");
  const [nextVal, setNextVal] = useState(0);

  const evaluateDisplay = (e) => {
    const newVal = e.target.innerHTML;
    if (currentVal === 0 || operand === "=") {
      setCurrentVal(newVal);
      setOperand("");
    } else if (operand === "") {
      setCurrentVal(currentVal + newVal);
    } else if (nextVal === 0) {
      setNextVal(newVal);
    } else {
      setNextVal(nextVal + newVal);
    }
  };

  const operandSetting = (e) => {
    const newOperand = e.target.innerHTML;
    console.log(e);
    if (operand === "" || operand === "=") {
      setOperand(newOperand);
    } else {
      console.log("Already chosen an operand");
    }
  };

  const determineResult = (e) => {
    let result = 0;
    const percent = e.target.innerHTML;
    const one = parseFloat(currentVal);
    const two = parseFloat(nextVal);
    if (nextVal === 0 && percent !== "%") {
      return;
    } else if (operand === "+") {
      result = one + two;
    } else if (operand === "-") {
      result = one - two;
    } else if (operand === "÷") {
      result = one / two;
    } else if (operand === "x") {
      result = one * two;
    } else if (percent === "%") {
      result = one / 100;
    }
    setCurrentVal(result);
    setOperand("=");
    setNextVal(0);
  };

  const refreshButton = () => {
    setCurrentVal(0);
    setOperand("");
    setNextVal(0);
  };

  return (
    <div className="App">
      <div className="display">
        <h4>{nextVal !== 0 ? nextVal : currentVal}</h4>
      </div>
      <div className="panel">
        <div className="row">
          <div className="calc-button">
            <button onClick={refreshButton}>AC</button>
          </div>
          <div className="calc-button">
            <button onClick={() => setCurrentVal(-1 * currentVal)}>+/-</button>
          </div>
          <div className="calc-button">
            <button id="%" onClick={determineResult}>
              %
            </button>
          </div>
          <OperandButton name="÷" operandSetting={operandSetting} />
        </div>
        <div className="row">
          <Button numVal={7} onClickFunction={evaluateDisplay} />
          <Button numVal={8} onClickFunction={evaluateDisplay} />
          <Button numVal={9} onClickFunction={evaluateDisplay} />
          <OperandButton name="x" operandSetting={operandSetting} />
        </div>
        <div className="row">
          <Button numVal={4} onClickFunction={evaluateDisplay} />
          <Button numVal={5} onClickFunction={evaluateDisplay} />
          <Button numVal={6} onClickFunction={evaluateDisplay} />
          <OperandButton name="-" operandSetting={operandSetting} />
        </div>
        <div className="row">
          <Button numVal={1} onClickFunction={evaluateDisplay} />
          <Button numVal={2} onClickFunction={evaluateDisplay} />
          <Button numVal={3} onClickFunction={evaluateDisplay} />
          <OperandButton name="+" operandSetting={operandSetting} />
        </div>
        <div className="row">
          <div className="calc-button long">
            <button id="numVal" onClick={evaluateDisplay}>
              0
            </button>
          </div>
          <Button numVal={"."} onClickFunction={evaluateDisplay} />
          <div className="calc-button">
            <button className="operand" onClick={determineResult}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
