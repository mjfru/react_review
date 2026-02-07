/*
TODO
Your task is to work on a "User Login" component that has already been prepared by a colleague.

The goal is to update the data stored in the already existing user object with some dummy data once the "Login" button in the App component is pressed.

The email and password properties in the user object should be set to any non-empty string values of your choice. The loggedIn field should be set to true.

Important: You don't have to fetch the values entered into the <input> fields - you can simply ignore those fields for now. You'll learn how to listen to keystrokes and get user input later in the course.
*/

export const user = {
  email: '',
  password: '',
  loggedIn: false,
};

function App() {
    
  const setValues = () => {
      user.email = "challenge@gmail.com";
      user.password = "testPass";
      user.loggedIn = true;
  }
    
  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        <input type="password" />
      </p>

      <p id="actions">
        <button onClick={setValues}>Login</button>
      </p>
    </div>
  );
}

export default App;
