import Logo from './Logo'
import Form from './Form'
import PackingList from './PackingList'
import Stats from './Stats'
import { useState } from 'react'

function App() {

  //! This was lifted up from the Form so it could be passed down to the PackingList.
  const [items, setItems] = useState([]);


  //! All the logic about updating the above state should also live in the same component...so here it is.
  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id) {
    // When the id IS equal to the item.id, we'll remove that one and that one only.
    setItems((items) => items.filter(item => item.id !== id))
  }

  function handleToggleItem(id) {
    setItems((items) => 
      items.map((item) => 
        item.id === id ? {...item, packed: !item.packed} : item
      )
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm('Are you sure you want to clear this list?');
    if(confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearItems={handleClearItems}/>
      <Stats items={items}/>
    </div>
  )
}

export default App
