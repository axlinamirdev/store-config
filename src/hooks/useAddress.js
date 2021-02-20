import { useState, useEffect } from 'react';
import axios from 'axios';

const KEY = "1de372f8c0633c30d5690dac8bbaede7"

const useGoogleAddress = address => {
  const [map, setMap] = useState({});
  const API = `http://api.positionstack.com/v1/forward?access_key=${KEY}&query=${address}`;

  useEffect(async () => {
    const response = await axios(API);
    setMap(response.data);
  }, []);
  return map;
};

export default useGoogleAddress;