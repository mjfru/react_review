// To read data from the Provider (in index.js), we use the useSelector hook provided by React-Redux.
import { useSelector } from "react-redux";

function Customer() {
  // These names are exactly what we have in our store.js, creates a 'subscription' to the store.
  const customer = useSelector((store) => store.customer.fullName);
  console.log(customer);
  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
