import { useState } from "react";

// The prop it receives here is handleAddItems from the App.jsx, which is where the appropriate piece of state is.
function Form({ onAddItems }) {

  const [description, setDescription] = useState("");
  const [quantity, setquantity] = useState(1);
  
  //! We need to lift the state below up to the nearest parent component.
  //! PackingList needs to use this but it's only a sibling component of this Form.
  // const [items, setItems] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    
    if(!description) return;

    const newItem = {description, quantity, packed: false, id: Date.now()}
    console.log(newItem);

    onAddItems(newItem);

    setDescription("");
    setquantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      
      {/* Unless specified, e.target.value will be a string, so let's ensure we get a number instead. */}
      <select value={quantity} onChange={(e) => setquantity(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1)
        .map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      
      <input 
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;