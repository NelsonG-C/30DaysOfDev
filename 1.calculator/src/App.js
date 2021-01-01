import "./styles.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="display">
        <h4>0</h4>
      </div>
      <div className="panel">
        <div className="row">
          <div className="calc-button">
            <button>AC</button>
          </div>
          <div className="calc-button">
            <button>+/-</button>
          </div>
          <div className="calc-button">
            <button>%</button>
          </div>
          <div className="calc-button">
            <button>Divide</button>
          </div>
        </div>
        <div className="row">
          <div className="calc-button">
            <button>7</button>
          </div>
          <div className="calc-button">
            <button>8</button>
          </div>
          <div className="calc-button">
            <button>9</button>
          </div>
          <div className="calc-button">
            <button>X</button>
          </div>
        </div>
        <div className="row">
          <div className="calc-button">
            <button>4</button>
          </div>
          <div className="calc-button">
            <button>5</button>
          </div>
          <div className="calc-button">
            <button>6</button>
          </div>
          <div className="calc-button">
            <button>-</button>
          </div>
        </div>
        <div className="row">
          <div className="calc-button">
            <button>1</button>
          </div>
          <div className="calc-button">
            <button>2</button>
          </div>
          <div className="calc-button">
            <button>3</button>
          </div>
          <div className="calc-button">
            <button>+</button>
          </div>
        </div>
        <div className="row">
          <div className="calc-button long">
            <button>0</button>
          </div>
          <div className="calc-button">
            <button>.</button>
          </div>
          <div className="calc-button">
            <button>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
