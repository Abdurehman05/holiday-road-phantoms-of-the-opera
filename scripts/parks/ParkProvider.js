import Settings from '../Settings.js'

let nationalParks = [];

export const useParks = () => {
    return nationalParks.slice();
};

export const getParks = () => {
    return fetch(``)
        .then(response => response.json())
        .then(parsedResponse => {
            nationalParks = parsedResponse.data
            console.log("test data", nationalParks)
        })
};
