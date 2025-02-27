// Axios

import Axios from "axios";

const URL = "http://localhost:3001";

const responseArtist = await Axios.get(`${URL}/artists`);
const responseSong = await Axios.get(`${URL}/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSong.data;

