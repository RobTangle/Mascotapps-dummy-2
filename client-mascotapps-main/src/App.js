import React from 'react';
import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchPets } from './store/actions';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  let pets = useSelector((state) => state.pets);
  console.log(pets)
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPets());
  }, [dispatch]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        {pets.map((pet, i) => {
          <div>
            <p key={i}>{pet.name}</p>
            </div>
        })}
        </div>
      </header>
    </div>
  );
}

export default App;
