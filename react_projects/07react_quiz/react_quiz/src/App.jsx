import Header from "./components/Header";
import Body from "./components/Body";
import Loader from "./components/Loader";
import Error from "./components/Error";
import Questions from "./components/Questions";
import "./App.css";
import { useEffect, useReducer } from "react";
import StartScreen from "./components/StartScreen";

//* Initial state for useReducer to use
const initialState = {
  questions: [],
  // Status will change between: 'loading', 'error', 'ready', 'active', 'finished' instead of just a setStatus / status state.
  status: "loading",
  // Keeping track of which question is the current one, starts at 0, the first one.
  index: 0,
};

//* Reducer function for useReducer, taking in the state and the action that was dispatched
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return { ...state, status: "active" };
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  //* We're going to want to display our fetched data on the UI and need state, a perfect chance to use useReducer to create it.
  const [{ questions, status, index }, dispatch] = useReducer(reducer, initialState);

  //* Derived state:
  const numQuestions = questions.length;

  //* We want to use our questions data (set up on a JSON server, also located in the data folder here), so let's use useEffect when fetching it.
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      //* Creating an event which our reducer will respond to and the information (payload) it's providing:
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="app">
      <Header />
      <Body>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {/* Passing around 'dispatch' like we pass around event handler / setState functions. */}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && <Questions question={questions[index]}/>}
      </Body>
    </div>
  );
}

export default App;

//! npm run server - Port 8000
