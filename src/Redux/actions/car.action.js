import axios from "axios";

export const GET_CARS = "GET_CARS";

export const getCars = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost/API_VOITURE/voiture");
      console.log("ok");
      dispatch({ type: GET_CARS, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
