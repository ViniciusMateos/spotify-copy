// Axios
import "dotenv/config";
import Axios from "axios";

const { NODE_ENV } = process.env;
const URL = NODE_ENV === 'development' ? "http://localhost:3001/api" : '/api';

const responseArtist = await Axios.get(`${URL}/artists`);
const responseSong = await Axios.get(`${URL}/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSong.data;
