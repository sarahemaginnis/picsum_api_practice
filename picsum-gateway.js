import { transient } from "./state.js"

const PICSUM_URL = "https://picsum.photos/"

export const getRandomPicture = () => {
    return fetch(PICSUM_URL + "200")
}

export const getPictureBlackWhite = () => {
    return fetch(PICSUM_URL + "id/" + transient.photoId + "/200/200?grayscale")
}