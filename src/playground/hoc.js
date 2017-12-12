// Higher Order Component (HOC) - A component (HOC) that renders another compoent
// Reuse code
// render hijacking
// prop
 
import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

// HOC
const WithAdminWarning = (WrappedComponent) =>{
    return (props) => (
        <div>
            {props.isAdmin &&  <p>this is private infomation. plase don't shared!</p> }
            <WrappedComponent {...props} />
        </div>
    );
};
const requireAuthentication = (WrappedComponent) =>{
    return (props) =>(
        <div>
            {props.isAuthenricated ? <WrappedComponent {...props} /> :<p>plase authentication!</p>}
        </div>
    )
};

const AdminInfo = WithAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />,document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenricated={true} info="There are the details" />,document.getElementById('app'));