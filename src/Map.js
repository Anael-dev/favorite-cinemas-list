import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

import places from "../data/places_data";
import mapStyles from "./mapStyles";
import "../css/Map.css";

function Map(props) {
  const { handleClick } = props;
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [animation, setAnimation] = useState(2);

  return (
    <GoogleMap
      defaultZoom={9}
      defaultCenter={{
        lat: 31.798576,
        lng: 34.860572
      }}
      defaultOptions={{ styles: mapStyles }}
    >
      {places.map(place => (
        <Marker
          key={place.id}
          position={{
            lat: place.lat,
            lng: place.lng
          }}
          icon={{
            url: "../data/icons/iconfinder_movie.svg",
            scaledSize: new window.google.maps.Size(30, 30)
          }}
          title={place.name}
          animation={animation}
          onClick={() => {
            setSelectedPlace(place);
            handleClick(place.name);
          }}
        />
      ))}
      {selectedPlace && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPlace(null);
          }}
          position={{
            lat: selectedPlace.lat,
            lng: selectedPlace.lng
          }}
        >
          <div className="info">
            <h3>{selectedPlace.name}</h3>
            <p>{selectedPlace.address}</p>
            <img src={selectedPlace.image} width="200" height="100" />
            <div className="iw-bottom-gradient" style={{ content: "" }}></div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function MapContiner(props) {
  const { handleClick } = props;
  return (
    <div style={{ minWidth: "400px", height: "600px" }}>
      <MapWrapped
        handleClick={handleClick}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GOOGLE_KEY}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        scrollwheel={false}
        fullscreenControl={false}
      />
    </div>
  );
}

// const SimpleMap = props => {
//   const { places, handleClick } = props;
//   const [center, setCenter] = useState({ lat: 32.298883, lng: 35.091303 });
//   const [zoom, setZoom] = useState(8);
//   return (
//     <div style={{ height: "100vh", width: "500px" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyAYROPpgPZEKwwkGXRL6bGSqkJrI0vF0Rk" }}
//         defaultCenter={center}
//         defaultZoom={zoom}
//       >
//         {places.map(place => {
//           return (
//             <Marker
//               key={place.id}
//               lat={place.lat}
//               lng={place.lng}
//               name={place.name}
//               color={place.color}
//               handleClick={handleClick}
//             />
//           );
//         })}
//       </GoogleMapReact>
//     </div>
//   );
// };

// export default SimpleMap;
