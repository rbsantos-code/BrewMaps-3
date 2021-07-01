import React, { useState } from 'react';
import cheers from '../../public/images/cheers.png';

export default function Home() {

    const [activeModal, SetActiveModal] = useState(false);

    const toggleActive = () => {
        SetActiveModal(!activeModal);
    };

    return (
        <>
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
            <div className={activeModal ? "is-active" : "modal"} id="modalBox">
                <div className="modal-background">
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">BrewMap</p>
                            <button className="delete" aria-label="close"></button>
                        </header>
                        <section className="modal-card-body">
                            <div className="columns">
                                <div className="column is-half brew-data">
                                    <label className="label" id="brewery"></label>
                                    <label className="label" id="brewery"></label>
                                    <label className="label" id="brewery"></label>
                                    <label className="label" id="brewery"></label>
                                    <label className="label" id="brewery"></label>
                                </div>
                                <div className="column auto">
                                    <div class="map"></div>
                                </div>
                            </div>
                        </section>
                        <footer className="modal-card-foot">
                            <button className="button is success" id="close" onClick={toggleActive}>Close</button>
                        </footer>
                    </div>
                </div>
            </div>

            <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous">
            </script>
            <script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol?callback=GetMap'></script>
            <script src="https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.5.0/build/ol.js"></script>
            <script src="/javascript/api.js"></script>
        </>
    )
}