// import React, { Component } from "react";
// import L from "leaflet";

// class Map extends Component {
//   componentDidMount() {
//     this.map = L.map("map", {
//       center: [11.254234, 124.90694],
//       zoom: 9,
//       zoomControl: false
//     });

//     L.tileLayer(
//       "http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png",
//       {
//         detectRetina: true,
//         attribution:
//           "http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png",
//         maxZoom: 18,
//         maxNativeZoom: 17,
//         id: "mapbox.light",
//         accessToken:
//           "pk.eyJ1Ijoid21jZmFsbDIiLCJhIjoiNjk4NGY3YjdiOGVhYWZhYzI1YjA5ZGJmMTc0ZDMwNTYifQ.0tJmXauSlx_qjiJLTscB8g"
//       }
//     ).addTo(this.map);

//     L.circle([this.latitude, this.longitude], {
//       color: "#f34342",
//       fillColor: "#f34342",
//       fillOpacity: 0.5,
//       radius: 2000
//     })
//       .bindPopup("<h3>" + this.props.name + "</h3>")
//       .addTo(this.map);
//   }

//   render() {
//     return (
//       <div>
//         <div className="Map_Container">
//           <Wrapper width="1400px" height="1400px" id="map"></Wrapper>
//         </div>
//       </div>
//     );
//   }
// }

// export default Map;

import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

function Map({ markersData }) {
  console.log(markersData);
  // create map
  const mapRef = useRef(null);
  useEffect(() => {
    mapRef.current = L.map("map", {
      center: [11.254234, 124.90694],
      zoom: 9,
      zoomControl: false,
      layers: [
        L.tileLayer(
          "http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png",
          {
            detectRetina: true,
            maxZoom: 18,
            maxNativeZoom: 17,
            id: "mapbox.light",
            accessToken:
              "pk.eyJ1Ijoid21jZmFsbDIiLCJhIjoiNjk4NGY3YjdiOGVhYWZhYzI1YjA5ZGJmMTc0ZDMwNTYifQ.0tJmXauSlx_qjiJLTscB8g"
          }
        )
      ]
    });
  }, []);

  // add layer
  const layerRef = useRef(null);
  useEffect(() => {
    layerRef.current = L.layerGroup().addTo(mapRef.current);
  }, []);

  // update markers
  useEffect(() => {
    layerRef.current.clearLayers();
    markersData.forEach(marker => {
      L.marker([marker.Latitude, marker.Longitude], {
        title: marker.Name
      }).addTo(layerRef.current);
    });
  }, [markersData]);
  return (
    <div>
      <div className="Map_Container">
        <Wrapper width="1400px" height="1400px" id="map"></Wrapper>
      </div>
    </div>
  );
}

export default Map;
