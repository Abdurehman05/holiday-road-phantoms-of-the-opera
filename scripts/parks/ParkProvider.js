import Settings from '../Settings.js'

let nationalParks = [];

export const useParks = () => {
    return nationalParks.slice();
};

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=TN&stateCode=&api_key=${Settings.npsKey}`)
        .then(response => response.json())
        .then(parsedResponse => {
            nationalParks = parsedResponse.data
        })
};