import { useState } from "react";
import Message from "./Message";

function Counter() {
  //! State:
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  //! Event Handlers:
  const handleStepUp = () => {
    setStep((step) => step + 1);
  };
  const handleStepDown = () => {
    if (step > 0) setStep((step) => step - 1);
  };

  const handleCountUp = () => {
    setCount((count) => count + step);
  };
  const handleCountDown = () => {
    setCount((count) => count - step);
  };

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="container">
        <div className="steps">
          <button className="decrease" onClick={handleStepDown}>
            -
          </button>
          <p>Steps: {step}</p>
          <button className="increase" onClick={handleStepUp}>
            +
          </button>
        </div>

        <div className="count">
          <button className="decrease" onClick={handleCountDown}>
            -
          </button>
          <p>Count: {count}</p>
          <button className="increase" onClick={handleCountUp}>
            +
          </button>
        </div>
      </div>
      <Message date={date} count={count} />
      {/* <div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} day(s) from today will be: `
              : count < 0
              ? `${Math.abs(count)} day(s) ago was `
              : ""}
          </span>
          <span>{date.toDateString()}.</span>
        </p>
      </div> */}
    </>
  );
}

export default Counter;
