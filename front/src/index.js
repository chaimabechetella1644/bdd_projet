import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, createStoreHook } from 'react-redux';
import { legacy_createStore } from 'redux';
import CategorieReducer from './reduce/categorie_reduce';
import ProductReducer from './reduce/product_reduce';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = legacy_createStore(CategorieReducer) ;
root.render(
  <React.StrictMode>
    <Provider store={store}>
   
    <App />
    </Provider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
