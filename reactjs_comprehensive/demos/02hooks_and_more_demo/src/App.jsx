import ErrorExample from "./tutorial/01-useState/starter/01-error-example";
import UseStateBasics from "./tutorial/01-useState/starter/02-useState-basics";
import UseStateArray from "./tutorial/01-useState/starter/03-useState-array";
import UseStateObject from "./tutorial/01-useState/starter/04-useState-object";
import UseStateGotcha from "./tutorial/01-useState/starter/05-useState-gotcha";

import UseEffectBasics from "./tutorial/02-useEffect/starter/02-useEffect-basics";
import MultipleEffects from "./tutorial/02-useEffect/starter/03-multiple-effects";
import FetchData from "./tutorial/02-useEffect/starter/04-fetch-data";
import MultipleReturnsBasics from "./tutorial/03-conditional-rendering/starter/01-multiple-returns-basics";
import MultipleReturnsFetchData from "./tutorial/03-conditional-rendering/starter/02-multiple-returns-fetch-data";

import ShortCircuitOverview from "./tutorial/03-conditional-rendering/starter/04-short-circuit-overview";
import ShortCircuitExamples from "./tutorial/03-conditional-rendering/starter/05-short-circuit-examples";
import ToggleChallenge from "./tutorial/03-conditional-rendering/starter/06-toggle-challenge";
// import UserChallenge from "./tutorial/03-conditional-rendering/starter/07-user-challenge";
import CleanupFunction from "./tutorial/02-useEffect/starter/05-cleanup-function";

//? Imagine if we had a full-scale application, there might be 10s to 100s of imports!
// import Navbar from "./tutorial/04-project-structure/starter/Navbar";
// import Home from "./tutorial/04-project-structure/starter/Navbar/pages/Home";
// import About from "./tutorial/04-project-structure/starter/Navbar/pages/About";
//? This is how (see pages --> index.js)
import { Home, About } from "./tutorial/04-project-structure/starter/Navbar/pages";
import { Example } from "./tutorial/04-project-structure/starter/Body";
import List from "./tutorial/05-leverage-javascript/starter/List";
import People from "./tutorial/05-leverage-javascript/starter/People";

import ControlledInputs from "./tutorial/06-forms/starter/01-controlled-inputs";
import UserChallenge from "./tutorial/06-forms/starter/02-user-challenge";


function App() {
	return (
		<div className="container">
			<h2>Advanced React</h2>
			{/* <ErrorExample /> */}
			{/* <UseStateBasics /> */}
			{/* <UseStateArray /> */}
			{/* <UseStateObject /> */}
			{/* <UseStateGotcha /> */}
			
      {/* <UseEffectBasics /> */}
			{/* <MultipleEffects /> */}
			{/* <FetchData /> */}
			{/* <MultipleReturnsBasics /> */}
			{/* <MultipleReturnsFetchData /> */}
			
      {/* <ShortCircuitOverview /> */}
			{/* <ShortCircuitExamples /> */}
			{/* <ToggleChallenge /> */}
			{/* <UserChallenge /> */}
			{/* <CleanupFunction /> */}

			{/* FILE STRUCTURE Examples: */}
			{/* <Navbar /> */}
			{/* <Home />
			<About /> */}

      {/* <Example /> */}
      {/* <List />
      <People /> */}

      {/* FORMS */}
      <ControlledInputs />
      <UserChallenge />
		</div>
	);
}

export default App;
