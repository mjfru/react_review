import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [whoPays, setWhoPays] = useState("user");

  //! Derived State Situation
  const paidByFriend = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoPays === 'user' ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💰 Bill Value</label>
      <input 
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
        />

      <label>🙋‍♂️ Your Expense: </label>
      <input 
        type="text"
        value={paidByUser}
        onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : (Number(e.target.value)))}
      />

      <label>👩🏼‍🤝‍🧑🏼 {selectedFriend.name}'s Expense: </label>
      <input type="text" disabled value={paidByFriend} />

      <label htmlFor="">Who is paying the bill?</label>
      <select
        value={whoPays}
        onChange={(e) => setWhoPays(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  )
}

export default FormSplitBill;