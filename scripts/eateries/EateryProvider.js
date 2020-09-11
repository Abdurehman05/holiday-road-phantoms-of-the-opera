let eatery = [];

export const sortedEatery = () => eatery.sort();

export const useEatery = () => eatery.slice();

export const getEatery = () => {
    return fetch("http://holidayroad.nss.team/eateries")
        .then(response => response.json())
        .then(parsedResponse => {
            eatery = parsedResponse
        })
};