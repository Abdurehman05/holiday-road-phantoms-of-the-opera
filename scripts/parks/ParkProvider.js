import Settings from '../Settings.js'

let nationalParks = [];

export const useParks = () => {
    return nationalParks.slice();
};

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=CO&stateCode=NM&stateCode=&api_key=F46doarbJ2YIbax1oEVtxx6YEx05v6l8XYFauMex`)
        .then(response => response.json())
        .then(parsedResponse => {
            nationalParks = parsedResponse.data
            console.log("test data", nationalParks)
        })
};
