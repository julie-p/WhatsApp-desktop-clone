import React from 'react';
import '../styles/Login.css';
import { auth, provider } from '../firebase';
import { Button } from '@material-ui/core';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Login() {

    const [ {}, dispatch ] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
        })
        .catch(error => alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__container">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/7/75/Whatsapp_logo_svg.png"
                alt=""
                />
                <div className="login__text">
                    <h1>Se connecter à WhatsApp</h1>
                </div>

                <Button 
                onClick={signIn}
                type="submit">
                    Se connecter avec Google
                </Button>
            </div>      
        </div>
    )
};

export default Login;
