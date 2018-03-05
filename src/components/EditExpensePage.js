import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense,removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component{
    onSubmit = ()=>{
        this.props.dispatch(editExpense(props.match.params.id,expense));
        this.props.history.push('/');
    }
    onClick = ()=>{
        this.props.dispatch(removeExpense({id:props.match.params.id}));
        this.props.history.push('/');
    }
    render(){
        return(
            <div>
                <ExpenseForm
                    onSubmit={this.onSubmit}
                    expense={props.expense}
                />
                <button onClick={this.onClick}>remove</button>
            </div>
        )
    }
};

const mapStateToProps = (state,props)=>{
    return {
        expense: state.expenses.find((expense)=> expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);