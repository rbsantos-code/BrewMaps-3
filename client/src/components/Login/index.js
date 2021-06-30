import React from 'react';

export default function Login() {
    return (
        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form action="" class="box">
                                    <div class="field">
                                        <label for="" class="label">Email</label>
                                        <div class="control has-icons-left">
                                            <input type="email" placeholder="e.g. bobsmith@gmail.com" class="input" required></input>
                                            <span class="icon is-small is-left">
                                                <i class="fa fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                        <div class="field">
                                        <label for="" class="label">Password</label>
                                        <div class="control has-icons-left">
                                            <input type="password" placeholder="*******" class="input" required></input>
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
                                    <button class="button is-success">
                                    Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>       
    )
}


