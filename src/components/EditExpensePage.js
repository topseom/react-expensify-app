import React from 'react';

const EditExpensePage = (props)=> (
    <div>
        {props.match.params.id}This is from my edit expense component 
    </div>
);

export default EditExpensePage;