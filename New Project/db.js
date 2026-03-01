import { MongoClient } from "mongodb";

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

export async function connectDB() {
    await client.connect();
    console.log("MongoDB Connected");
    return client.db("companyDB");
}