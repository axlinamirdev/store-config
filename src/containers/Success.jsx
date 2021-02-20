import React, { useContext } from 'react';
import '../styles/components/Success.css';
import AppContext from "../context/AppContext"
import MapaContainer from "../components/MapaContainer"
//import useAddress from "../hooks/useAddress"

const Success = () => {
  const { state: { buyer } } = useContext(AppContext)
  //const { latitude, longitude } = useAddress(buyer[0].address)
  console.log(buyer)
  return (
    <div className="Succes">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <div className="Success-map">
        	<MapaContainer />
        </div>
      </div>
    </div>
  );
};

export default Success;