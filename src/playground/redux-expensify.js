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
        id
    }
);

const editExpense = (id,update)=> (
    {
        type: 'EDITE_EXPENSE',
        id,
        update
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
        case "EDITE_EXPENSE":
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.update
                    };
                }else{
                    return expense;
                }
            })
        default:
            return state;
    }
};


const setTextFilter = (text='')=>({
    type:"EDIT_TEXT_FILTER",
    text
});
const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};

const filtersReducer = (state = filtersReducerDefaultState,action)=>{
    switch(action.type){
        case "EDIT_TEXT_FILTER":
            return {
                ...state,
                text:action.text
            }
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
store.dispatch(editExpense(expenseTwo.expense.id,{amount: 500,note:"edit note"}));

store.dispatch(setTextFilter('rent'));
store.dispatch(setTextFilter(''));

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

// array spread operator = [...array]

// object spread operator
// const user = {
//     name: 'Jen',
//     age: 24
// };

// console.log({
//     ...user,
//     location: 'Philadelphia',
//     age:27
// })

// console.log(user);