import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // Instead of this, let's implement state.
  // const step = 1;
  //* const [stateVariable,setFunction] = useState(defaultValue)
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);

  // Event handler for onClicks:
  function handlePrevious() {
    if (step > 1) setStep((step) => step - 1);
  }

  function handleNext() {
    if (step < 3) setStep((step) => step + 1);
  }

  function handleClose() {
    isOpen ? setOpen(false) : setOpen(true);
  }

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      { isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
  
          {/* <p className="message">Step {step}: {messages[step - 1]}</p> */}

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          
          <div className="buttons">
            <Button 
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}><span>⏪</span>Previous</Button>
            
            <Button 
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handleNext}>Next <span>⏩</span> </Button>
          </div>
        </div>
        )
      }
    </>
  )
}

//* Children props are pre-defined inside React and refer to anything coming inbetween the <StepMessage></StepMessage> component tags.
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
        {children}
    </div>
  )
}

//* Children props are pre-defined inside React and refer to anything coming inbetween the <Button></Button> component tags.
function Button({ textColor, bgColor, onClick, children }) {
  return (
  <button 
    style={{backgroundColor: bgColor, color: textColor}} 
    onClick={onClick}>{children}</button>
  )
}

export default App
