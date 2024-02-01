import { GET_CARS } from "../actions/car.action";

const initialState = {};

export default function carsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CARS:
      return action.payload;
    default:
      return state;
  }
}
