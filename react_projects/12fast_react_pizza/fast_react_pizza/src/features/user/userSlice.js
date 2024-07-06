import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// Redux is totally synchornous, so we need to use Thunks again (middleware between dispatching and function itself)
// async function fetchAddress() {}

// Receives two things: action name and an async function that returns a payload for the reducer later
export const fetchAddress = createAsyncThunk(
  "user / fetchAddress",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    // Payload of the fulfilled state:
    return { position, address };
  }
);

// Creating slice with Redux tools
const initialState = {
  username: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
};

// Slice of Global UI State:
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Responsible for updating the state object
    updateName(state, action) {
      // Redux allows us to directly mutate objects
      state.username = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAddress.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.position = action.payload.position;
        state.address = action.payload.address;
        state.status = "idle";
      })
      .addCase(fetchAddress.rejected, (state, action) => {
        state.status = "error";
        state.error = 'There was a problem getting your address. Please fill out this field.'
      }),
});

export const { updateName } = userSlice.actions;

export default userSlice.reducer;
