import React from "react";
import { useEffect } from "react";
// import logo from "./logo.svg";
// import "./App.css";
import { fetchPets } from "../store/actions/index";
import { useSelector, useDispatch } from "react-redux";

function Names() {
  let pets = useSelector((state) => state.pets);

  console.log(pets);

  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPets());
  }, []);

  return (
    <div className="nombres">
      <p>Nombres!: </p>
      <div>
        {pets.map((pet, i) => (
          <div key={i}>
            <p>{pet.id}</p>
            <p>{pet.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Names;
