import React from "react";
// import { useEffect } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { fetchPets } from "./store/actions";
// import { useSelector, useDispatch } from "react-redux";
import Names from "./components/Names";

function App() {
  // let pets = useSelector((state) => state.pets);
  // console.log(pets);
  // let dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchPets());
  // }, [dispatch]);

  return (
    <div>
      <Names />
    </div>
  );
}

export default App;
