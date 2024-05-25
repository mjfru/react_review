function Stats({ items }) {

  if(!items.length) return (
    <p className="stats">
      <em>Start adding items to your packing list.</em>
    </p>
  )

  //! Derived State - Use-case!
  // * Derived State will be used for determines how many items and what percentage has been packed.
  const numItems = items.length;
  const numPacked = items.filter(item => item.packed).length;
  const numPercent = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {numPercent === 100 
        ? "Everything's packed! Enjoy your trip! ✈" 
        : `You have ${numItems} items on your list and you already packed ${numPacked} (${numPercent}%).`}
        
      </em>
    </footer>
  )
}

export default Stats;