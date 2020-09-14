let eatery = [];
let newEats = []


export const useEatery = () => eatery.slice();

export const getEatery = () => {
    return fetch("http://holidayroad.nss.team/eateries")
        .then(response => response.json())
        .then(parsedResponse => {
            eatery = parsedResponse
            eatery.map(itemObj => {
                newEats = itemObj.businessName
                console.log(newEats)
                return newEats
            })
        })
}

