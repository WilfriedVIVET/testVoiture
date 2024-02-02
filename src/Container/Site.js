import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { getCars } from "../Redux/actions/car.action";
import { isEmpty } from "../Utils/Utils";
import store from "../Redux/store/store";
store.dispatch(getCars());
const LoadingMessage = () => <p>Chargement en cours...</p>;

const Site = () => {
  const dispatch = useDispatch();
  const carsData = useSelector((state) => state.carsReducer);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <div>
      <h1>Test Voiture</h1>
      {!isEmpty(carsData) ? (
        carsData.map((cars, index) => <Card props={cars} key={index} />)
      ) : (
        <LoadingMessage />
      )}
    </div>
  );
};

export default Site;
