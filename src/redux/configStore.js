import { combineReducers } from "redux";
import { createStore } from "redux";
import bookingReducer from "./BookingReducer";

const rootReducers = combineReducers({
  bookingReducer: bookingReducer,
});

export const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
