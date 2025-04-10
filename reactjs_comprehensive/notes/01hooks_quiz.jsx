/*
! useState Quiz
? What happens when you directly modify a state without using setState in React?
* The component doesn't re-render, and the UI doesn't update.

? What’s the primary reason for React batching multiple setState calls?
* To optimize rendering and minimize DOM updates.

? Which is a correct example of using useState to manage state?
* const [ value, setValue ] = useState(0);

! useEffect Quiz
? What will happen if you call a state setter function (setValue) directly within a function outside of useEffect?
* It can cause an infinite render loop if the function is invoked during render.

? What is the role of the cleanup function returned by useEffect?
* It performs necessary cleanup tasks like removing event listeners or clearing intervals when the component unmounts or updates.

? What happens when the dependency array of a useEffect is left empty ([])?
* The effect runs only once during the component's initial render.

! Conditional Rendering & Data Fetching Quiz
? What is the primary purpose of using multiple returns in a React component?
* To handle conditional rendering for scenarios like loading, error, or success states

? What happens if you destructure a property from a null object in a React component?
* JS throws an error, breaking the application

? When using the fetch API, why is it necessary to check the resp.ok property after making a request?
* To ensure the response status is successful (e.g. 200 OK)

! Conditional Rendering & Short-Circuit Logic Quiz
? What is the output of the following JavaScript code snippet?
  const x = '';
  console.log(x || 'Default');
  console.log(x && 'Default');
* "Default" and ""

? In the following React code, what happens if isEditing is false?
  const [isEditing, setIsEditing] = useState(false);
  return (
    <button className='btn'>{isEditing ? 'edit' : 'add'}</button>
  );
* The button displays 'add'.

? What will the following React component render when text is an empty string?
  const [text, setText] = useState('');
  return <h4>{text || 'Fallback Value'}</h4>;
* 'Fallback Value' is displayed.

! Project Structure (Imports & Exports) Quiz
? Why might renaming Navbar.jsx to index.jsx be avoided in larger projects?
* It can cause navigation difficulties when multiple index files are open.

? How can you reduce import redundancy when importing multiple components from a directory?
* By using an index.jsx file to group exports from the directory.

? What is the purpose of using a Navbar.css file in the Navbar folder?
* To store component-specific styles for the Navbar component.

! Leveraging JavaScript Quiz
? What is the purpose of the optional chaining operator (?.) in JavaScript?
const person = {
  name: { first: 'John', last: 'Doe' },
};

Without optional chaining
console.log(person.name.first); // Output: 'John'

With optional chaining
console.log(person?.name?.first); // Output: 'John'
console.log(person?.address?.city); // Output: undefined (no error)
* The optional chaning operator (?.) checks if the object or property exists before trying to access it. If the property is null or undefined, it safely returns undefined without throwing an error. This is the main purpose of the operator.

? In the Person component, what is the fallback value for the nickName prop?
const Person = ({ name, nickName = 'shakeAndBake', images }) => {
  return (
    <div>
      <h4>{name}</h4>
      <p>Nickname: {nickName}</p>
    </div>
  );
};

Usage
<Person name="John Doe" />;
* In the component, the nickName prop has a default value of 'shakeAndBake' defined as a fallback when no value is provided.

? In the Person component, what happens if the images array is undefined?
JavaScript
Copy codeimport avatar from './default-avatar.png';

const Person = ({ name, images }) => {
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} />
      <h4>{name}</h4>
    </div>
  );
};

Usage
<Person name="John Doe" images={undefined} />;

* If the images array is undefined, the optional chaining operator (?.) ensures that the fallback avatar is used for the img variable.

! Controlled Inputs & Forms in React
? In the ControlledInputs component, what happens if you do not call e.preventDefault() in the handleSubmit function?
* Without e.preventDefault(), the default browser behavior is triggered, which reloads the page upon form submission.

? In the MultipleInputs component, what ensures that each input updates the correct property in the user state object?
* The name attribute on each input allows the handleChange function to dynamically update the corresponding property in the state object using [e.target.name].

? In the UncontrolledInputs component, how is the FormData API used to retrieve form data after submission?
const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const newUser = Object.fromEntries(formData);
  console.log(newUser);
};

* The FormData API reads input fields with a name attribute and generates key-value pairs, which are then converted to an object using Object.fromEntries.

! useRef Quiz
? What is the primary characteristic of the useRef hook?
const refContainer = useRef(null);
console.log(refContainer);
{current: null}
* It preserves values between renders without causing a re-render.

? How does the useRef hook assist in accessing DOM nodes in the example below?
const refContainer = useRef(null);

useEffect(() => {
  refContainer.current.focus();
});

* It stores a reference to the DOM node in its current property.

? In the example below, what role does the isMounted reference serve?
const isMounted = useRef(false);

useEffect(() => {
  if (!isMounted.current) {
    isMounted.current = true;
    return;
  }
  console.log('re-render');
}, [value]);
* It prevents certain actions from running during the initial render.

! Custom Hooks Quiz
? What is the primary purpose of custom hooks in React?
const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);
  const toggle = () => {
    setShow(!show);
  };
  return { show, toggle };
};

* To extract reusable logic, reducing duplication and simplifying component code.

? In the example below, what does the useFetchPerson custom hook return?
const useFetchPerson = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await resp.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchUser();
  }, [url]);
  
  return { isLoading, isError, user };
};

* It returns an object containing the loading state, error state, and fetched user data.

? How does the useFetch hook differ from useFetchPerson (above)?
const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const response = await resp.json();
        setData(response);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { isLoading, isError, data };
};

* Unlike useFetchPerson, which is tailored for fetching user data, useFetch can handle any data structure and is more versatile.
*/
