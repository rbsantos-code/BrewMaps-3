import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import auth from '../../utils/auth';

function Login(props) {
    const [formState, setFormState] = useState({ username: '', password: '' });

    const [login, { error }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const  mutationResponse  = await login({
                variables: { username: formState.username,
                password: formState.password },
            });
            const token = mutationResponse.data.login.token
            Auth.login(token);
        } catch (e) {
            console.error(e);
        }

    
    };


    

    return (
        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form action="" class="box" onSubmit={handleFormSubmit}>
                                <div class="field">
                                    <label for="" class="label">Username</label>
                                    <div class="control has-icons-left">
                                        <input type="username" 
                                        placeholder="e.g. johndoe" className="input" name="username" value={formState.username} onChange={handleChange} required></input>
                                        <span class="icon is-small is-left">
                                            <i class="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="field">
                                    <label for="" class="label">Password</label>
                                    <div class="control has-icons-left">
                                        <input type="password" placeholder="*******" class="input" name="password" value={formState.password} onChange={handleChange} required></input>
                                        <span class="icon is-small is-left">
                                            <i class="fa fa-lock"></i>
                                        </span>
                                    </div>
                                </div>
                                <div class="field">
                                    <label for="" class="checkbox">
                                        <input type="checkbox"></input>
                                        Remember me
                                    </label>
                                </div>
                                <div class="field">
                                    <button class="button is-warning" type="submit">
                                        Login
                                    </button>
                                </div>
                            </form>
                            {error && <div>Login Failed</div>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;