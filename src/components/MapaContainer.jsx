import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapaContainer = ({ longitude, latitude}) => {
    
const position = [latitude, longitude]
  return (

       <MapContainer center={position} zoom={5} scrollWheelZoom={false} className="mapid">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

  );
}

export default MapaContainer;