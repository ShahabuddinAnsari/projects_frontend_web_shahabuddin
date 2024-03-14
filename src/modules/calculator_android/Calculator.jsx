import "./calculator.css";

function Calculator() {
  return (
    <div className="android__calc__app__containter">
      <div className="result"></div>
      <div className="keypads">
        <div className="operator grid-plus key">+</div>
        <div className="operator grid-minus key">-</div>
        <div className="operator grid-multiply key">&times;</div>
        <div className="operator grid-division key">÷</div>
        <div className="grid-one key">1</div>
        <div className="grid-two key">2</div>
        <div className="grid-three key">3</div>
        <div className="grid-four key">4</div>
        <div className="grid-five key">5</div>
        <div className="grid-six key">6</div>
        <div className="grid-seven key">7</div>
        <div className="grid-eight key">8</div>
        <div className="grid-nine key">9</div>
        <div className="grid-zero key">0</div>
        <div className="grid-dot key">.</div>
        <div className="grid-clear key">C</div>
        <div className="grid-equal key">=</div>
      </div>
    </div>
  );
}

export default Calculator;
