
import Settings from "../Settings.js"

let nationalParks = [];

export const useParks = () => {
    return nationalParks.slice();
}

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=KS&stateCode=AZ&stateCode=CA&stateCode=TN&stateCode=NV&stateCode=OR&stateCode=WA&stateCode=CO&stateCode=NM&stateCode=&api_key=${Settings.npsKey}`)
    .then(response => response.json()) 
    .then(parsedResponse => {
        console.log("test", parsedResponse)
        nationalParks = parsedResponse.data
    })
};

