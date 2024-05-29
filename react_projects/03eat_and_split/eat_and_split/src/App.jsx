import FormAddFriend from "./FormAddFriend";
import FriendsList from "./FriendsList";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";

import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Austin",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Kelsey",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Scott",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  }
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  //! App is the parent of both the Friend (technically FriendList) and FormSplitBill, therefore, to get these two to interact with each other, they need to be lifted here.
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  function handleSelection(friend) {
    setSelectedFriend(current => current?.id === friend.id ? null : friend);
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    // console.log(value);
    setFriends((friends) => 
        friends.map((friend) =>
          friend.id === selectedFriend.id 
          ? {...friend, balance: friend.balance + value}
          : friend
    )
  );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList 
          friends={friends}
          selectedFriend={selectedFriend}
          onSelection={handleSelection}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
        {/* Since this is NOT an HTML button, we need to send onClick as a prop to the actual button in the component. */}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? 'Close' : 'Add Friend'}</Button>
      </div>


      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
    </div>
  )
}

export default App
