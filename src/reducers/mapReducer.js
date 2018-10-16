import { ADD_ADDRESS, GET_CURRENT_USER_LOCATION } from '../constants';

var initialState = {
    currentLocation: {
        lat: 40.7224017,
        lng: -73.9896719
    },
    allLocations: []
}

export default (state = initialState, action) => {

    let updated = Object.assign({}, state);
    let position = {}
    let newPosition = {}
    switch (action.type) {

        case ADD_ADDRESS:

            const lat = action.payload.geometry.location.lat;
            const lng = action.payload.geometry.location.lng;
            position.lat = lat;
            position.lng = lng;
            newPosition.position = position;
            updated.allLocations.push(newPosition);
            console.log(updated)
            return updated;

        case GET_CURRENT_USER_LOCATION:
            updated.currentLocation.lat = action.payload.latitude;
            updated.currentLocation.lng = action.payload.longitude;
            position.lat = action.payload.latitude;
            position.lng = action.payload.longitude;
            newPosition.position = position;
            updated.allLocations.push(newPosition);
            console.log(updated)
            return updated;
        default: 
            return updated;
    }

}

