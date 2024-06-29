//! Deprecated because of the rise of RTK, using for learning purposes
import { applyMiddleware, combineReducers, createStore } from "redux";

//* Importing Middleware
import { thunk } from "redux-thunk";
//* Breaking our code into slices of state for each main component
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

//! A Root Reducer contains all the reducers together to be passed into the store.
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

//! Redux Feature, creating a store, implementing thunk!
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
