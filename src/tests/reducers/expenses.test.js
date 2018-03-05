import expensesReducer from '../../reducers/expenses';
import expenses from '../fixture/expenses';

test('should set default state',()=>{
    const state = expensesReducer(undefined,{type:"@@INIT"});
    expect(state).toEqual([]);
});

test('should remove expense by id',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense if id not found',()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should add an expense',() =>{
    const expense = {
        id: '109',
        description: 'Laptop',
        note:'',
        createAt: 20000,
        amount:29500
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense ]);
});

test('should edit an expense',() =>{
    const amount = 122000;
    
    const action = {
        type: 'EDITE_EXPENSE',
        id: expenses[1].id,
        update:{
            amount
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state[1].amount).toEqual(amount);
});

test('should not edit an expense if id not found',() =>{
    const amount = 122000;
    
    const action = {
        type: 'EDITE_EXPENSE',
        id: '-1',
        update:{
            amount
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

