import React, { Component } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import styled from "styled-components";

const Wrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
`;

class Map extends Component {

    componentDidMount() {

        this.map = L.map("map", {
          center: [11.254234, 124.90694],
          zoom: 9,
          zoomControl: false
        });
    
        L.tileLayer(
          "http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png",
          {
            detectRetina: true,
            attribution:
              "http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png",
            maxZoom: 18,
            maxNativeZoom: 17,
            id: "mapbox.light",
            accessToken:
              "pk.eyJ1Ijoid21jZmFsbDIiLCJhIjoiNjk4NGY3YjdiOGVhYWZhYzI1YjA5ZGJmMTc0ZDMwNTYifQ.0tJmXauSlx_qjiJLTscB8g"
          }
        ).addTo(this.map);
    
        L.circle([11.629791, 124.343358], {
          color: "#f34342",
          fillColor: "#f34342",
          fillOpacity: 0.5,
          radius: 2000
        })
        .bindPopup("<h3>Dalutan Island</h3><br/><img src='https://tourism.biliranisland.com/wp-content/uploads/2015/08/Dalutan-Island-1-1-800x450.jpg' style='width:1000px;height:auto'></img>", {maxWidth: 1000})
        .addTo(this.map);
    
        L.circle([11.567499, 124.266671], {
          color: "#f34342",
          fillColor: "#f34342",
          fillOpacity: 0.5,
          radius: 2000
        })
          .bindPopup("<h3>Higatangan Island</h3><br/><img src='https://www.biliranisland.com/blogs/wp-content/uploads/2017/03/Higatangan-Island-photo-by-BiliranIsland.com_.jpg' style='width:1000px;height:auto'></img>", {maxWidth: 1000})
          .addTo(this.map);
    
        L.circle([11.114418, 124.2494521], {
          color: "#f34342",
          fillColor: "#f34342",
          fillOpacity: 0.5,
          radius: 2000
        })
          .bindPopup("Kalangaman Island")
          .addTo(this.map);
      }
    
      render() {
        return (
          <div>
            <div className="Map_Container">
              <Wrapper width="1400px" height="1400px" id="map" />
            </div>
          </div>
        );
      }
    }
    

export default Map;
