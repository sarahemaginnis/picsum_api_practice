import { getPictureBlackWhite, getRandomPicture } from "./picsum-gateway.js"
import { transient } from "./state.js"

let imageHtml 

document.getElementById("image_update_button")
.addEventListener("click", () => {
    const imagePromise = getRandomPicture()
    imagePromise.then(data => {
        imageHtml = `<img id="image" src=${data.url}></img>`
        const urlId = data.url.split("/")[4] //what does [4] do?
        transient.photoId = urlId
        document.getElementById("image_div").innerHTML = imageHtml
    })
})

document.getElementById("image_grayscale_button")
.addEventListener("click", () => {
    const imagePromise = getPictureBlackWhite()
    imagePromise.then(data => {
        imageHtml = `<img id="image" src=${data.url}></img>`
        document.getElementById("image_div").innerHTML = imageHtml
    })
})