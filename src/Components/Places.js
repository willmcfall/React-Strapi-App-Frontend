import React from "react";
import Iframe from "react-iframe";
import Map from "./Map";

const Places = ({ places }) => {
  return (
    <div>
      <center>
        <h1>Places List</h1>
        <div>
        <Map/>
        </div>
      </center>
      {places.map(place => (
        <div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{place.Name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {place.Barangay} , {place.Municipality}{" "}
              </h6>
              <p className="card-text">
                {place.Description}
                <Iframe
                  url={place["Photo-360-URL"]}
                  width="600px"
                  height="450px"
                  frameborder="0px"
                  allowfullscreen=""
                />
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Places;
