import React from "react";

const NoMatch = () => {
  return (
    <>
      <section className="hero is-full height">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                <div className="field">
                  <h1 className="title text-light" style= {{ fontheight: 560, clear: "both", paddingTop: 120, textAlign: "center" }}> 404 Error: No Brews Here! <span role="img" aria-label="Beers">
                    🚫🍻
                    </span></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NoMatch;
