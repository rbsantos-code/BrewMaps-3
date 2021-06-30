import React from 'react';
import cheers from '../../public/images/cheers.png';

export default function Home() {
    return (
        <div className="hero-body">
            <div className="container has-text-centered">
                <div className="column is-full is-centered">
                    <img src={cheers} alt="Logo" className="images image is-128x128 is-inline-block"></img>
                    <h1 className="title text-light">BrewMap</h1>
                    <h2 className="subtitle text-light">Finding the brews so you can cruise.</h2>
                    <div className="box">
                        <div className="field is-grouped">
                            <p className="control is-expanded">
                                <input className="input is-medium" type="text"
                                placeholder="Enter your city"></input>
                            </p>
                            <p className="control">
                                <a className="button is-warning is-round is-medium" id="searchBtn">
                                    Search
                                </a>
                            </p>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}
