// App.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Hooks de react-redux
import { increment, decrement, reset } from './actions'; // Actions pour modifier l'état

const App = () => {
  const count = useSelector(state => state.count); // Sélectionne la valeur du compteur dans le store
  const dispatch = useDispatch(); // Permet d'envoyer des actions au store

  return (
    <div>
      <h1>Compteur: {count}</h1>
      <button onClick={() => dispatch(increment())}>Incrémenter</button>
      <button onClick={() => dispatch(decrement())}>Décrémenter</button>
      <button onClick={() => dispatch(reset())}>Réinitialiser</button>
    </div>
  );
};

export default App;
