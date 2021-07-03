import React, { useState, useEffect } from 'react';
import cheers from '../../public/images/cheers.png';
import BingMapsReact from 'bingmaps-react';
import BrewFont from '../../public/images/brewFont.png';

export default function Home() {

    const [activeModal, SetActiveModal] = useState(false);

    const [brewery, setBrewery] = useState([]);

    const [pins, setPins] = useState([]);

    const [city, setCity] = useState('');

    const [longitude, setlongitude] = useState('');
    const [latitude, setlatitude] = useState('');



    const toggleActive = () => {
        SetActiveModal(!activeModal);
    };

    const clickHandler = (event) => {
        const mapData = event.target.getAttribute("data");
        console.log(JSON.parse(mapData));
        setPins([...pins, JSON.parse(mapData)])
    }

    console.log('pins', pins);

    const submitHandler = () => {
        fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
        .then(response => response.json())
        .then(data => setBrewery(data))
        .then(() => toggleActive())
    };

    const refreshPage = () => {
        window.location.reload();
    }


    

    // const latitude = brewery.map(data => data.latitude);
    // const longitude = brewery.map(data => data.longitude);

    // console.log(latitude);




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
                                <input 
                                className="input is-medium" type="text"
                                placeholder="Enter your city"
                                onChange={(e) => setCity(e.target.value)}
                                ></input>
                            </p>
                            <p className="control">
                                <a className="button is-warning is-round is-medium" id="searchBtn" onClick={submitHandler}>
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
                        <header className="modal-card-head has-background-primary">
                            <p className="modal-card-title">BrewMap</p>
                            <button className="delete" aria-label="close" onClick={toggleActive}></button>
                        </header>
                        <section className="modal-card-body">
                            <div className="columns">
                                <div className="column is-half brew-data">
                                    <img src={BrewFont}/>
                                    <hr />
                                    <ul className="has-text-weight-bold is-family-monospace has-text-link">
                                        {brewery.map(brew => <li onClick={clickHandler}
                                        data={JSON.stringify({center: {
                                            latitude: brew.latitude,
                                            longitude: brew.longitude
                                        }})}
                                        
                                        > - {brew.name}</li>)}
                                    </ul>
                                </div>
                                <div className="column auto">
                                    {/* <div class="map"></div> */}
                                    <BingMapsReact
                                    bingMapsKey="Ava6c7xEN-FISpqll60LNKEhdYNkr0RGC2jZoFb2l02vg2lTmQ3aLT8BFWivGKEO"
                                    height="auto"
                                    mapOptions={{
                                        navigationBarMode: "square"
                                    }}
                                    width="300px"
                                    viewOptions={{
                                
                                        mapTypeId: "canvasLight"
                                    }}
                                    pushPins={
                                        pins                      
                                    }
                                    />

                                </div>
                            </div>
                        </section>
                        <footer className="modal-card-foot has-background-info">
                        <button className="button is-info is-light is-fullwidth" id="refresh" onClick={refreshPage}>Clear</button>
                            <button className="button is-info is-light is-fullwidth" id="close" onClick={toggleActive}>Close</button>
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