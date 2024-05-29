import Friend from "./Friend";

function FriendsList({ friends, onSelection, selectedFriend }) {
  
  //! Moved to App.jsx to lift state up and provide a way to make new friends via the form.
  // const initialFriends;

  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  )
}

export default FriendsList;