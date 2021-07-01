import React, { useState } from 'react';
import cheers from '../../public/images/cheers.png';
import BingMaps from 'bingmaps-react';

export default function Home() {

    const [activeModal, SetActiveModal] = useState(false);

    const toggleActive = () => {
        SetActiveModal(!activeModal);
    };



    var inputEl = document.querySelector(".input");
    var searchButton = document.querySelector("#searchBtn");
    var modalEl = document.querySelector(".modal");
    var modalBg = document.querySelector(".modal-background");
    var closeBtn = document.querySelector(".delete");
    var closeBtnBottom = document.querySelector("#close");
    var favoritePlaces = []

    const findSearch = () => {
        var enterCity = inputEl.value.split("").join("");
        findBrewery(enterCity);
    }


    function findBrewery(city) {

        let breweryAPI = "https://api.openbrewerydb.org/breweries?by_city=" + city;

        fetch(breweryAPI).then(response => response.json()).then(data => console.log("brewery", data));
        // console.log to get API info

        // OpenBrewery API Section ------
        fetch(breweryAPI).then(response => response.json()).then(function (data) {
            var labelsEl = document.querySelectorAll("#brewery");
            for (var i = 0; i < labelsEl.length; i++) {
                labelsEl[i].innerHTML = "";

                // get Brew Name
                var nameData = data[i].name;
                var names = document.createElement("h4");

                names.innerHTML = nameData;
                labelsEl[i].append(names);

                // get Brew Type
                var type = data[i].brewery_type;
                var brewType = document.createElement("p");

                brewType.innerHTML = "Type: " + type;
                labelsEl[i].append(brewType);

                //get Address
                var address = data[i].street;
                var brewAddy = document.createElement("p");

                brewAddy.innerHTML = "address: " + address;
                labelsEl[i].append(brewAddy);

                // Create Add Button to add to Local Storage

                var localAdd = document.createElement("a");
                localAdd.setAttribute("class", "button is-info");
                localAdd.setAttribute("id", "localAddBtn");

                // localAdd.addEventListener("click", favarito)
                // commenting out Ian's code for time being

                localAdd.innerHTML = "Add";
                labelsEl[i].append(localAdd);

                //get Website
                var website = data[i].website_url;
                console.log(data[i].website_url);
                var webAddress = document.createElement("a");
                webAddress.classList.add("button", "is-info");
                webAddress.setAttribute("id", "websiteBtn");
                webAddress.setAttribute("href", website);

                webAddress.innerHTML = "Website";
                labelsEl[i].append(webAddress);

                // Dynamic Click Event Section
                var lat = data[i].latitude;
                var lon = data[i].longitude;
                var barName = data[i].name;
                var street = data[i].street;
                names.dataset.lat = lat;
                names.dataset.lon = lon;
                names.dataset.barName = barName;
                names.dataset.street = street;

                // names.addEventListener('click', function () {
                //     GetMap(this.dataset.lat, this.dataset.lon, this.dataset.barName, this.dataset.street)

                // });

                // Adding Add Button Even and Local Storage

                localAdd.dataset.barName = barName;
                localAdd.dataset.href = website;

                localAdd.addEventListener("click", function () {

                    var namesValue = { name: this.dataset.barName, "href": this.dataset.href };
                    console.log("namesValue", namesValue);

                    var namesArray = JSON.parse(localStorage.getItem("brew-name")) || [];
                    console.log("namesArray", namesArray);
                    // console logging to see data

                    namesArray.push(namesValue);

                    // set to Local Storage
                    localStorage.setItem("brew-name", JSON.stringify(namesArray));
                });

            }


            // Bing Maps API Section ------

            // variables 
            var lat = data[i].latitude;
            var lon = data[i].longitude;
            var postalCode = data[i].postal_code;
            var barName = data[i].name;
            var street = data[i].street;

            var mapKey = "Ava6c7xEN-FISpqll60LNKEhdYNkr0RGC2jZoFb2l02vg2lTmQ3aLT8BFWivGKEO";

            // API link
            let mapAPI = `https://dev.virtualearth.net/REST/v1/Locations?countryRegion=us&postalCode=${postalCode}&addressLine=${street}&maxResults=5&key=${mapKey}`;


            fetch(mapAPI).then(response => response.json()).then(map => console.log("map", map));
            // console log to see data from API 

            // Bing Maps function ----
            // function GetMap(latitude, longitude, barTitle, address) {

            //     // Code below is acquired from Bing Maps website
            //     var map = new window.Microsoft.Maps.Map('.map', {
            //         credentials: mapKey,
            //         center: new window.Microsoft.Maps.Location(latitude, longitude)
            //     });
            //     console.log("map", map);

            //     var center = map.getCenter();

            //     //Create custom Pushpin
            //     var pin = new window.Microsoft.Maps.Pushpin(center, {
            //         title: barTitle,
            //         subTitle: address,
            //         text: '!'
            //     });

            //     //Add the pushpin to the map
            //     map.entities.push(pin);
            // }

            // GetMap(lat, lon, barName, street);
        });


    }


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
                                    <input className="input is-large" type="text"
                                        placeholder="Enter your city"></input>
                                </p>
                                <p className="control">
                                    <a className="button is-warning is-round is-large" id="searchBtn" onClick={toggleActive}>
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
                            <button className="delete" aria-label="close" onClick={toggleActive}></button>
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
                                    {/* <BingMaps 
                                    bingMapsKey="Ava6c7xEN-FISpqll60LNKEhdYNkr0RGC2jZoFb2l02vg2lTmQ3aLT8BFWivGKEO"
                                    height="400px"
                                    mapOptions={{
                                      navigationBarMode: "square",
                                    }}
                                    width="300px"
                                    viewOptions={{
                                      center: { latitude: 42.360081, longitude: -71.058884 },
                                      mapTypeId: "canvasLight",
                                    }}
                              
                                    /> */}
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
            <script src="/public/javascript/api.js"></script>
        </>
    )
}
