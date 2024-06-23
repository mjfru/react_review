/*
! What is React & What Problem Does It Solve?
* React is a JS library for building user interfaces!
It's popular and a widely-sought after skill...but why??

* React is able to only change the small, changed pieces of the DOM instead of re-rendering the entire page.
* We only worry about the data in our app and 'reacts' to user input and changes in our UI.

! Props
* Props can be thought of a custom element type that we'd use in HTML.
<div id="app"></div>
<a href="www...">Google</a>
* They are passed down in the component's declaration and used / manipulated in the component itself.
*/

const { useState, useEffect } = require("react");

// Parent Component...
<Pet name={Gracie} species={dog} age={9} />;

function Pet(props) {
  function handleDelete() {
    props.setPets((prev) => prev.filter((pet) => pet.id !== props.id));
  }

  return (
    <li>
      {props.name} is a {props.age} year old {props.species}.
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

//! Looping Through an Array w/ JSX
//* Map function to the rescue!

function OurApp() {
  const [pets, setPets] = useState([
    // { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
    // { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
    // { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
    // { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
    // { name: "Paws", species: "dog", age: "6", id: 789789789 },
  ]);
  // Only run once the first time this component is rendered
  useEffect(() => {
    if(localStorage.getItem("examplePetData")) {
      setPets(JSON.parse(localStorage.getItem("examplePetData")))
    }
  }, []);

  // Run every time our pet state changes
  useEffect(() => {
    localStorage.setItem("examplePetData", JSON.stringify(pets))
  }, [pets]);
  
  return (
    <>
      <LikeArea />
      <AddPetForm setPets={setPets} />
      <ul>
        {pets.map((pet) => (
          <Pet
            setPets={setPets}
            id={pet.id}
            name={pet.name}
            species={pet.species}
            age={pet.age}
            key={pet.id}
          />
        ))}
      </ul>
    </>
  );
}

function AddPetForm({ setPets }) {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setPets((prev) => prev.concat({ name, species, age, id: Date.now() }));
    setName("");
    setSpecies("");
    setAge("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add New Pet</legend>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          placeholder="species"
        />
        <input
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="age in years"
        />
        <button>Add Pet</button>
      </fieldset>
    </form>
  );
}

function LikeArea() {
  const [likeCount, setLikeCount] = useState(0);
  function increaseLikes() {
    setLikeCount(function (prev) {
      return prev + 1;
    });
  }

  function decreaseLikes() {
    if (likeCount === 0) return;
    setLikeCount(function (prev) {
      return prev - 1;
    });
  }

  return (
    <>
      <button onClick={increaseLikes}>Increase Likes</button>
      <button onClick={decreaseLikes}>Decrease Likes</button>
      <h2>This has page been liked {likeCount} times.</h2>
    </>
  );
}