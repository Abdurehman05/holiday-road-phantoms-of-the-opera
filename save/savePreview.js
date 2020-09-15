const eventHub = document.querySelector(".container")
let save = []
const dispatchStateChangeEvent = () => {
    const savedPreviewStateChangedEvent = new CustomEvent("savedPreview")

    eventHub.dispatchEvent(savedPreviewStateChangedEvent)
}

eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "mattsSave") {
        console.log("eventHub works")
        const newSave = {
            park: document.getElementById("parkSelect").value,
            attraction: document.getElementById("attractionSelect").value,
            eatery: document.getElementById("eaterySelect").value, 
        }
        savePreview(newSave)
    }
})

const getPreviews = () => {
    return fetch('http://localhost:8088/savedPreview')
    .then(response => response.json())
    .then(parsedSavedPreview => {
        save = parsedSavedPreview
    })
}

const savePreview = (save) => {
    console.log("savePreview works")
    return fetch('http://localhost:8088/savedPreview', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(save)
    })
    .then(getPreviews)
    .then(dispatchStateChangeEvent)
}

eventHub.addEventListener("savedPreview", event => {
    console.log("save", save)
    const contentTarget = document.querySelector(".aside")
    contentTarget.innerHTML = `
        ${save.map(previewObj => {
            return  `<div>${previewObj.park}</div><div>${previewObj.attraction}</div><div>${previewObj.eatery}</div><p>`
        }
        ).join("")}
    `
})