import { useState, useEffect } from 'react';
import axios from 'axios';

const KEY = "1de372f8c0633c30d5690dac8bbaede7"

const useAddress = address => {
  const [map, setMap] = useState({});
  const API = `http://api.positionstack.com/v1/forward?access_key=${KEY}&query=${address}`;
console.log(API)
  useEffect(async () => {
    const response = await axios(API);
    console.log(response)
    setMap(response.data);
  }, []);
  return map;
};

export default useAddress;