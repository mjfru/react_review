function Bill({ bill, onSetBill  }) {

  const onChangeHandler = (e) => {
    onSetBill(Number(e.target.value));
  }

  return (
    <div>
      <label>How much was the bill?</label>
      <input type="text" placeholder="Your Bill: $" value={bill} onChange={onChangeHandler}/>
    </div>
  )
}

export default Bill;