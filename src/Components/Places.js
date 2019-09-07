import React from "react";
import Iframe from "react-iframe";

const Places = ({ places }) => {
  return (
    <div>
      <center>
        <h1>Places List</h1>
      </center>
      {places.map(place => (
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
                style="border:0"
                allowfullscreen=""
              />

            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Places;
