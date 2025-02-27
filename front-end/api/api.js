// Axios
import Axios from "axios";

const URL = "https://spotify-smz0.onrender.com/api";

const responseArtist = await Axios.get(`${URL}/artists`);
const responseSong = await Axios.get(`${URL}/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSong.data;
