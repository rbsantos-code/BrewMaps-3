import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../../utils/queries";

import Auth from "../../utils/auth";
import flights from "../../public/images/catchFlights.png";
import cheers from "../../public/images/cheers.png";
import { useStoreContext } from "../../utils/GlobalState";

export default function Nav() {
  const [state, dispatch] = useStoreContext();
  console.log(state);

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  console.log(user);

  const [brewery, setBrewery] = useState([]);

  useEffect(() => {
    console.log("USE EFFECT RUNNING");
    if (user.favorites) {
// making multiple calls inside any loop would return 'pending' to make it so that everything is ready before being set, we need to utlilize promises 
      Promise.all(
        user.favorites.map((favorite) =>
          fetch(`https://api.openbrewerydb.org/breweries/${favorite.id}`)
            .then((res) => res.json())
            .then((data) => data)
        )
      ).then((array) => setBrewery(array))
    }
  }, [user]);

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/user" />;
  }

  if (loading) {
    return <div>Something is brewing...</div>;
  }

  if (!user.username) {
    return <h4>Please login or Sign up to see this page!</h4>;
  }

  return (
    <div className="columns">
      <div className="container profile">
        <div className="section profile-heading">
          <div className="columns is-mobile is-multiline">
            <div className="column is-2">
              <span className="header-icon user-profile-image">
                <img alt="" src={cheers}></img>
              </span>
            </div>
            <div className="column is-4-tablet is-10-mobile name">
              <p>
                <span className="title is-bold">{user.username}</span>
                <hr />
                <a
                  className="button is-primary is-outlined"
                  href="#"
                  id="edit-preferences"
                >
                  Edit Preferences
                </a>
              </p>
              <br />
              <p className="tagline">
                The users profile bio (need to make box that can be edited)
              </p>
            </div>
            <div className="column is-2-tablet is-4-mobile has-text-centered">
              <p className="stat-val">30</p>
              <p className="stat-key">searches</p>
            </div>
            <div className="column is-2-tablet is-4-mobile has-text-centered">
              <p className="stat-val">10</p>
              <p className="stat-key">likes</p>
            </div>
            <div className="column is-2-tablet is-4-mobile has-text-centered">
              <p className="stat-val">3</p>
              <p className="stat-key">favorites</p>
            </div>
          </div>
        </div>
        <div className="hero is-link  is-small profile-options is-fullwidth">
          <div className="tabs is-fullwidth is-medium hero-body">
            <ul>
              <li className="link is-active">
                <a>
                  <span className="icon">
                    <i className="fa fa-list"></i>
                  </span>
                  <span>My Favorite Breweries</span>
                </a>
              </li>
              <li className="link">
                <a>
                  <span className="icon">
                    <i className="fa fa-thumbs-up"></i>
                  </span>
                  <span>Blog Posts</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="box">
          <div className="columns">
            <div className="column is-2-tablet user-property-count has-text-centered">
              <p className="subtitle is-5">
                <strong></strong>
                My Breweries
              </p>
            </div>
            <div className="column is-8">
              <p className="control has-addons">
                <input
                  className="input"
                  placeholder="Search your favorited breweries"
                  type="text"
                ></input>
                <br />
                <br />
                <button className="button is-link is-fullwidth">Search</button>
                <br />
                {brewery.map((favorite) => (
                  <li
                    className="has-text-centered has-text-weight-bold"
                    key={favorite.id}
                  >
                    {favorite.name}
                  </li>
                ))}
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <img src={flights}></img>
          <h3 className="has-text-centered has-text-weight-bold">
            (Beer flights of course!)
          </h3>
        </div>
      </div>
    </div>
  );
}
