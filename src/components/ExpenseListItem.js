import React from 'react';

const ExpenseListItem = ({description,amount=100,createdAt=100})=>(
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;