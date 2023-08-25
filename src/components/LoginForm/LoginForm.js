import { React, useState } from 'react';
import './LoginForm.css';

// import SignIn from './SignIn';
// import SignUp from './SignUp';

function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function emailChangeHandler(event) {
        setEmail(event.target.value);
    }

    function passwordChangeHandler(event) {
        setPassword(event.target.value);
    }

    function handleSignIn() {
        console.log("Sign In Clicked");
    }

    function handleSignUp() {
        console.log("Sign Up clicked");
    }
    
    return (
        <div className='form'>
            <input type="text" placeholder="Enter Email" className="text-input" onChange={emailChangeHandler} />
            <input type="password" placeholder="Enter Password" className="text-input" onChange={passwordChangeHandler} />
            <div className='button-container'>
                <button className='button' onClick={handleSignIn} >Sign In</button>
                <button className='button' onClick={handleSignUp} >Sign Up</button>
            </div>
        </div>
    );
}

export default LoginForm;