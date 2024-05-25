import { useState } from "react";
import Item from "./Item";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
// ];

//! After lifting up state from the Form, we are finally receiving the items in this component.
function PackingList( { items, onDeleteItem, onToggleItem, onClearItems } ) {
  // State will start with the 'sort by input order' option automatically
  const [sortBy, setSortBy] = useState("input");

  // Derived state time again!
  let sortedItems;
  if(sortBy === 'input') sortedItems = items;
  if(sortBy === 'alphabetically') sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if(sortBy === 'packed') sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {/* Using our initial items list, map over it and create a new Item component for every element in the array.
        nameOfArray.map(individualThing => returning a Component, the name of the prop, and what the prop contains)
        */}
        {sortedItems.map((item)  => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}/>
        ))}
      </ul>

      <div className="actions">
        {/* Using a controlled element: */}
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="alphabetically">Sort alphabetically</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearItems}>Clear List</button>
      </div>

    </div>
  );
}

export default PackingList;