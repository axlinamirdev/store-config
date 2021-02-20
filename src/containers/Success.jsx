import React, { useContext } from 'react';
import '../styles/components/Success.css';
import AppContext from "../context/AppContext"
import MapaContainer from "../components/MapaContainer"
//import useGoogleAddress from "../hooks/useGoogleAddress"

const Success = () => {
  const { state: { buyer } } = useContext(AppContext)
  const { latitude, longitude } = useGoogleAddress(buyer[0].address)
  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
        	<MapaContainer longitude={longitude} latitude={latitude} />
        </div>
      </div>
    </div>
  );
};

export default Success;