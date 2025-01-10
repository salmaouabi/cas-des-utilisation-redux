import React from 'react';
import ReactDOM from 'react-dom/client'; // Importe `createRoot` à la place
import { Provider } from 'react-redux'; 
import store from './store.js'; 
import App from './App.jsx';  
import counterReducer from './reducer.jsx';
import './index.css';
import './App.css';
// Crée une racine avec React 18
const root = ReactDOM.createRoot(document.getElementById('root')); 

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Provider pour passer le store à toute l'application */}
      <App />
    </Provider>
  </React.StrictMode>
);
