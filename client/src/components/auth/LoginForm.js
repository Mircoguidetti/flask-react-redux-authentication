import React, { useState } from 'react';
import { connect } from 'react-redux';

import { alertFailure } from '../../actions/alert.actions';

const LoginForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (!email || !password) {
            props.alertFailure('Username and password are required');
        }else{
            props.handleLogin(email, password);
        }
    };
    
    return (
        <form onSubmit={handleLogin}>
            <input
                onChange={(e) => setEmail(e.target.value)}
                type='text'
                value={email} 
                placeholder='email'
            />
            <input
                onChange = {(e) => setPassword(e.target.value)}
                type='password'
                value={password}
                placeholder='password'
            />
            <button 
                type='submit'
            >
                Login
            </button>
        </form>
    );
};


const mapDispatchToProps = (dispatch) => ({
    alertFailure: (message) => { dispatch(alertFailure(message)) }
});

export default connect(undefined, mapDispatchToProps)(LoginForm);