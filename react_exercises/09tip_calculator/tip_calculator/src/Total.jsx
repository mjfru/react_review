function Total({ bill, tip }) {
  return (
    <h3 className="total">Your new total with tip is ${bill + tip}  (${bill} Bill + ${tip} Tip)</h3>
  )
}

export default Total;