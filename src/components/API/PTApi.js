
import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';

const BASEURL = 'http://192.168.1.12:8080';

function getPT() {
    const [pt, setPT] = useState([]);
    useEffect( () => {
      axios.get(BASEURL+'/binuss/pt/all')
      .then(res => setPT(res.data))
      .catch(err => console.log(err));
    }, [])
  
    return(
        pt
    );
}

export {getPT}