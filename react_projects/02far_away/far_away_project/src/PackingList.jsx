import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function PackingList() {
  return (
    <div className="list">
      <ul>
        {/* Using our initial items list, map over it and create a new Item component for every element in the array.
        nameOfArray.map(individualThing => returning a Component, the name of the prop, and what the prop contains)
        */}
        {initialItems.map((item)  => (
          <Item item={item} key={item.id}/>
        ))}
      </ul>
    </div>
  );
}

export default PackingList;