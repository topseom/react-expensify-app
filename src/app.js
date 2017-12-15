import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { BrowserRouter, Route,Switch,Link,NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpense from './selectors/expenses';
const store = configureStore();

// store.subscribe(()=>{
//     const state = store.getState();
//     console.log(getVisibleExpense(state.expenses,state.filters));
// });

// setTimeout(()=>{
//     store.dispatch(setTextFilter("bill"));
// },3000);

store.dispatch(addExpense({description:'Water bill',amount:4500}));
store.dispatch(addExpense({description:'Gas bill',createdAt:1000}));
store.dispatch(addExpense({description:'Rent',amount:109500}));
//store.dispatch(setTextFilter("water"));

const state = store.getState();
console.log(getVisibleExpense(state.expenses,state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx,document.getElementById('app'));