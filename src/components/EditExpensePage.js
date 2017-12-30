import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense,removeExpense } from '../actions/expenses';

const EditExpensePage = (props)=> {
    console.log(props);
    return(
        <div>
            <ExpenseForm
                onSubmit={(expense)=>{
                    props.dispatch(editExpense(props.match.params.id,expense));
                    props.history.push('/');
                }}
                expense={props.expense}
            />
            <button onClick={()=>{
                props.dispatch(removeExpense({id:props.match.params.id}));
                props.history.push('/');
            }}>remove</button>
        </div>
    )
};

const mapStateToProps = (state,props)=>{
    return {
        expense: state.expenses.find((expense)=> expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);