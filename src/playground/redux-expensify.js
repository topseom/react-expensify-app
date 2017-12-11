import { createStore,combineReducers } from 'redux';
import uuid from 'uuid';

// Spread Operator [...Array] like concat
// 1. return new array
// 2. can control index position in new array ['new',...Array,'new2'] = ['naw',Array,'new2']

const addExpense = (
        {
            description = '',
            note='',
            amount=0,
            createAt=0
        } ={ }
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id:uuid(),
        description,
        note,
        amount,
        createAt
    }
});

const removeExpense = ({id}={})=> (
    {
        type: 'REMOVE_EXPENSE',
        id:id
    }
);

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState,action)=>{
    switch(action.type){
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];
        case "REMOVE_EXPENSE":
            return state.filter(({id})=>id !== action.id);
        default:
            return state;
    }
};

const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};

const filtersReducer = (state = filtersReducerDefaultState,action)=>{
    switch(action.type){
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
);

const unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({description:"Rent", amount:100}));
const expenseTwo = store.dispatch(addExpense({description:"Coffee", amount:300}));

store.dispatch(removeExpense({id:expenseOne.expense.id}));

console.log(expenseOne);

const demoState = {
    expenses:[{
        id: 'asasdgoiasdj',
        description: 'January Rent',
        note: 'This was the final payment for this address...',
        amount: 54500,
        createAt:0
    }],
    filters:{
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

//console.log(demoState);