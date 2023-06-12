import "./styles.css";
import { useState } from "react";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [equal, setEqual] = useState("");

  // Handles values coming in from buttons
  const clickHandler = (value) => {
    if (!isNaN(value) && !operator) {
      setNum1(num1 + value)
    }
    if (!isNaN(value) && operator) {
      setNum2(num2 + value)
    }
    if (isNaN(value) && value !== "=") {
      setOperator(value)
    }
    if (value === "=") {
      equals();
    }
  }

  // Equates num1 and num2 together
  const equals = () => {
    if (operator === "+") {
      setEqual(parseInt(num1) + parseInt(num2))
    }
    if (operator === "-") {
      setEqual(parseInt(num1) - parseInt(num2))
    }
    if (operator === "x") {
      setEqual(parseInt(num1) * parseInt(num2))
    }
    if (operator === "/") {
      setEqual(parseInt(num1) / parseInt(num2))
    }
  }

  // Clear all four state
  const clear = () => {
    setNum1("");
    setNum2("");
    setOperator("");
    setEqual("");
  }

  return (
    <div className="calc">
      <div className="display">
        <input readOnly value={num1 + " " + operator + " " + num2} className="input" />
        <input readOnly value={equal} className="answer" />
      </div>
      <div className="btn-grid">
        <button className="btn" onClick={() => clickHandler(9)}>9</button>
        <button className="btn" onClick={() => clickHandler(8)}>8</button>
        <button className="btn" onClick={() => clickHandler(7)}>7</button>
        <button className="btn" onClick={() => clickHandler("+")}>+</button>
        <button className="btn" onClick={() => clickHandler(6)}>6</button>
        <button className="btn" onClick={() => clickHandler(5)}>5</button>
        <button className="btn" onClick={() => clickHandler(4)}>4</button>
        <button className="btn" onClick={() => clickHandler("-")}>-</button>
        <button className="btn" onClick={() => clickHandler(3)}>3</button>
        <button className="btn" onClick={() => clickHandler(2)}>2</button>
        <button className="btn" onClick={() => clickHandler(1)}>1</button>
        <button className="btn" onClick={() => clickHandler("x")}>x</button>
        <button className="btn" onClick={() => clickHandler(0)}>0</button>
        <button className="btn" onClick={clear}>C</button>
        <button className="btn" onClick={() => clickHandler("=")}>=</button>
        <button className="btn" onClick={() => clickHandler("/")}>/</button>
      </div>
    </div>
  );
}
