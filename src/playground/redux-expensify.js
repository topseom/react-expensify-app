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
const sortByDate = ()=>({
    type:"SORT_BY_DATE"
});
const sortByAmount = ()=>({
    type:"SORT_BY_AMOUNT"
});
const setStartDate = (startDate)=>({
    type:"SET_START_DATE",
    startDate
});
const setEndDate = (endDate)=>({
    type:"SET_END_DATE",
    endDate
});
const filtersReducer = (state = filtersReducerDefaultState,action)=>{
    switch(action.type){
        case "EDIT_TEXT_FILTER":
            return {
                ...state,
                text:action.text
            }
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy:'date'
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy:'amount'
            }
        case "SET_START_DATE":
            return {
                ...state,
                startDate:action.startDate
            }
        case "SET_END_DATE":
            return {
                ...state,
                startDate:action.endDate
            }
        default:
            return state;
    }
};

const getVisibleExpense = (expenses,{ text,sortBy,startDate,endDate })=>{
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = (expense.description.toLowerCase()).includes(text.toLowerCase());
    
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createAt < b.createAt ? 1 : -1;
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

const store = createStore(
    combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer
    })
);

const unsubscribe = store.subscribe(()=>{
    const state = store.getState();
    const visibleExpense = getVisibleExpense(state.expenses,state.filters);
    console.log(visibleExpense);
});

const expenseOne = store.dispatch(addExpense({description:"Rent", amount:500,createAt:-21000}));
const expenseTwo = store.dispatch(addExpense({description:"Coffee", amount:300,createAt:-1000}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount: 500,note:"edit note"}));

//store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

// store.dispatch(sortByDate());
store.dispatch(sortByAmount());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(1250));

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