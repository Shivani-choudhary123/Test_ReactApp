
//import { createStore } from 'redux';
import quoteReducer from './reducers'; 
import { configureStore } from '@reduxjs/toolkit';

//const store = createStore(quoteReducer);
const store = configureStore({
    reducer: {
      quotes: quoteReducer, 
    },
  });
export default store;
