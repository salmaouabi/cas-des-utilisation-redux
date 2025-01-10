// store.jsx
import { createStore } from 'redux';
import counterReducer from './reducer.jsx'; // Le reducer qui gère l'état du compteur

const store = createStore(counterReducer); // Création du store avec le reducer

export default store;
