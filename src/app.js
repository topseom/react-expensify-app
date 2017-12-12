import React from 'react';
import ReactDOM from 'react-dom';
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

store.dispatch(addExpense({description:'Water bill'}));
store.dispatch(addExpense({description:'Gas bill'}));
store.dispatch(setTextFilter("bill"));

const state = store.getState();
console.log(getVisibleExpense(state.expenses,state.filters));

ReactDOM.render(<AppRouter />,document.getElementById('app'));