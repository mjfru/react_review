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

// Parent Component...
<Pet name={Gracie} species={dog} age={9} />;

function Pet(props) {
  return (
    <p>
      {props.name} is a {props.age} year old {props.species}.
    </p>
  );
}

//! Looping Through an Array w/ JSX
//* Map function to the rescue!

const pets = [
  { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
  { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
  { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
  { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
  { name: "Paws", species: "dog", age: "6", id: 789789789 },
];

function OurApp() {
  return (
    <>
      <ul>
        {pets.map((pet) => (
          <Pet
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

/*

*/