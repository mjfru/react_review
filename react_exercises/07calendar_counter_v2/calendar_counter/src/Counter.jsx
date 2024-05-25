import { useState } from "react";
import Message from "./Message";

function Counter() {
  //! State:
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  //! Event Handlers:
  const handleSlider = (e) => {
    setStep(Number(e.target.value))
  }

  const handleCountUp = () => {
    setCount((count) => count + step);
  };
  const handleCountDown = () => {
    setCount((count) => count - step);
  };

  const handleReset = () => {
    setStep(1);
    setCount(0);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="container">
        <div className="steps">
          <p>Step: {step}</p>
          <input type="range" min='0' max='10' value={step} onChange={handleSlider}/>
        </div>

        <div className="count">
          <button className="decrease" onClick={handleCountDown}>
            -
          </button>
          <input type="text" value={count} onChange={e=>setCount(Number(e.target.value))}/>
          <p>Count: {count}</p>
          <button className="increase" onClick={handleCountUp}>
            +
          </button>
        </div>
      </div>
      <Message date={date} count={count} />
      
      {count !== 0 || step !== 1 ?
        <div>
        <button onClick={handleReset}>Reset</button>
      </div> : null}
    </>
  );
}

export default Counter;
