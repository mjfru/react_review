/*
! Component Composition
* Component composition is the act of combining different components using the children prop (or explicitly defined props).
? This allows us to:
  - Create highly reusable and flexible components
  - Fix prop drilling (Great for layouts!)


* When we're 'using' a component (like normal), it might look like this:
function Modal() {
  return (
    <div> className="modal">
      <Success />
    </div>
  )
}

function Success() {
  return <p>Well done!</p>
}
* We use components inside of others, deeply linking them together.
* As it stands right now, it might as well be called the 'SuccessModal' because it cannot be used for anything else.

? Component composition is fundamentally different, it does not defined a pre-defined component but instead the children prop.
function Model({ children }) {
  return (
    <div className="modal">
      {children}  <--- it accepts children when we use it like: <Modal></Modal>
    </div>
  )
}

function Success() {
  return <p>Well done!</p>
}

<Modal>
  <Success />
</Modal>

* Success here is passed -into- Modal. We can reuse it now.
*/