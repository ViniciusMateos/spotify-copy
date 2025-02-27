import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://visoma:1234567890@cluster0.ue0jh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("spotify");



