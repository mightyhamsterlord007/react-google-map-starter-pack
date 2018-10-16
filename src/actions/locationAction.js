import {ADD_ADDRESS, NEW_ADDRESS, GET_CURRENT_USER_LOCATION} from '../constants';

import axios from 'axios';
import { getCurrentLocation } from '../utils';

export const getAddress = (address) => dispatch => {

    
    const { address1, address2, city, state, zip,  } = address

    axios
        .get(`https://maps.googleapis.com/maps/api/geocode/json?address=+${address1},+${city},+${state},+${zip}&key=PUT YOU OWN KEY`)
        .then(address => {
            
            dispatch({
                type: ADD_ADDRESS,
                payload: address.data.results[0]
            })


        })
        .catch(error => {
            console.log(error)
        })


}

export const getUserCurrentLocation = () => dispatch => {

    getCurrentLocation()
        .then( location => {
            
            dispatch({
                type: GET_CURRENT_USER_LOCATION,
                payload: location
            })

        })
        .catch(err => {
            console.log(err);
        })

}