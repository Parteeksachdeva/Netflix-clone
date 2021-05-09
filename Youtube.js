import axios from "axios"

const youtube = axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
});

export default youtube;