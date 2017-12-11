import { createStore } from 'redux';

// Action generators - functions that return action objects


const incrementCount = ({ incrementBy=1 } = {}) =>({
    type:'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy=1 } = {}) =>({
    type:'DECREMENT',
    decrementBy
});

const setCount = ({count=0} ={})=>({
    type:'SET',
    count
});

const resetCount = () =>({
    type:'RESET'
});

// Reducer
// 1. reducer is pure function
// 2. never change state or action

const countReducer = (state = { count:0 }, action)=>{
    //console.log("running..");
    switch(action.type){
        case "INCREMENT":
            return {
                count:state.count+action.incrementBy
            };
        case "DECREMENT":
            return {
                count:state.count-action.decrementBy
            };
        case "SET":
            const count = typeof action.count === "number" ? action.count : 0;
            return {
                count
            };
        case "RESET":
            return {
                count:0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);// this function it call 'reducers' 

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy:5}));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy:10}));

store.dispatch(decrementCount());

store.dispatch(setCount({count:101}));





