import { configureStore } from "@reduxjs/toolkit";

//* Breaking our code into slices of state for each main component
import accountReducer from "./features/accounts/accountSlice";
import customerReducer from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
