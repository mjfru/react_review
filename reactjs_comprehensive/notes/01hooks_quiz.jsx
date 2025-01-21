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
*/
