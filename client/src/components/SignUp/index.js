import React from 'react';

export default function SignUp() {
    return (
        <section class="hero is-fullheight">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered">
                        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form>
                                <div class="field bg-dark text-light p-3">
                                    <h3 class="text-center is-size-3 has-text-centered">Join the Brew Crew!</h3>
                                    <form class="box">
                                        <div>
                                            <label for="username-signup" >Username:</label>
                                            <br />
                                            <input class="portfolio-languages text-dark input is-info" type="text" id="username-signup" />
                                        </div>
                                        <div>
                                            <label for="password-signup">Password:</label>
                                            <br />
                                            <input class="portfolio-languages text-dark input is-info" type="text" id="password-signup" />
                                        </div>
                                        <br />
                                        <div class="field">
                                            <p class="control">
                                                <button class="button is-primary" type="submit">Signup</button>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


