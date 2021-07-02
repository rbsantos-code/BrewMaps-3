import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import Auth from "../../utils/auth";
import { ADD_USER } from "../../utils/mutations";

export default function SignUp(props) {
  const [formState, setFormState] = useState({ username: "", password: "" });

  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const mutationResponse = await addUser({
        variables: {
          username: formState.username,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <div class="field bg-dark text-light p-3">
                <h3 class="text-center is-size-3 has-text-centered">
                  Join the Brew Crew!
                </h3>
                <form class="box" onSubmit={handleFormSubmit}>
                  <div className="field">
                    <label for="username-signup">Username:</label>
                    <br />
                    <input
                      class="portfolio-languages text-dark input is-info"
                      type="text"
                      id="username-signup"
                      name="username"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="field">
                    <label for="password-signup">Password:</label>
                    <br />
                    <input
                      class="portfolio-languages text-dark input is-info"
                      type="password"
                      id="password-signup"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>
                  <br />
                  <div class="field">
                    <p class="control">
                      <button class="button is-primary" type="submit">
                        Signup
                      </button>
                    </p>
                  </div>
                </form>
                {error && <div>Sign Up failed</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
