import React, {useState, useEffect} from 'react';

const LoginForm = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');

    const validateEmail = () => {
        const regexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexp.test(email);
    };

    const validatePassword = () => {
        const regex_d = /[0-9]/g;
        const regex_a = /[a-z]/g;
        const regex_A = /[A-Z]/g;
        const regex_s = /[^0-9a-zA-Z]/g;
	    return regex_d.test(password) && regex_a.test(password) && regex_A.test(password) && regex_s.test(password);
    };

    useEffect(() => {

    },
    [email]);

    return(
        <div className="col-4 card mt-5 ml-5">
            <div className='card-body'>
                <form>
                    <div className="form-group" id='emailField'>
                        <label>Email</label>
                        <input id='email' type='email' autoComplete='email' className='form-control' value={email} onChange={(e) => {setEmail(e.target.value);}}></input>
                    </div>
                    {validateEmail()? <div className="form-group" id='passwordField'>
                        <label>Password</label>
                        <input id='password' className='form-control' autoComplete='new-password' type='password' value={password} onChange={(e) => {setPassword(e.target.value);}}></input>
                    </div>:null}
                    {validateEmail()&&validatePassword()?<div className="form-group" id='cPasswordField'>
                        <label>Confirm Password</label>
                        <input id='cPassword' className='form-control' autoComplete='new-password' type='password' value={cPassword} onChange={(e) => {setCPassword(e.target.value);}}></input>
                    </div>:null}
                    <button id='submit' className='btn-primary btn' type="submit" disabled={!(validateEmail()&&validatePassword()&&(cPassword===password))}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;