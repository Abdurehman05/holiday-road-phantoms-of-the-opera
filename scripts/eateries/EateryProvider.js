let eatery = [];
let newEats = []
let sortedEats = []

export const useEatery = () => eatery.slice();

export const getEatery = () => {
    return fetch("http://holidayroad.nss.team/eateries")
        .then(response => response.json())
        .then(parsedResponse => {
            eatery = parsedResponse

        })
}

