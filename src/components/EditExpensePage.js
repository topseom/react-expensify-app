import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense,removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component{
    onSubmit = ()=>{
        this.props.editExpense(props.match.params.id,expense);
        this.props.history.push('/');
    }
    onClick = ()=>{
        this.props.removeExpense({id:props.match.params.id});
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

const mapStateToProps = (state,props)=>({
    expense: state.expenses.find((expense)=> expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch)=> ({
    editExpense: (id,expense)=>dispatch(editExpense(id,expense)),
    removeExpense: (data)=>dispatch(removeExpense(data))
});

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);