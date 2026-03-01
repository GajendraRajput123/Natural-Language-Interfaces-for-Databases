import express from "express";
import cors from "cors";
import { connectDB } from "./db.js";
import { parseQuery } from "./queryParser.js";

const app = express();
app.use(cors());
app.use(express.json());

let db;

connectDB().then(database => {
    db = database;
});

app.post("/query", async(req, res) => {
    try {
        const { query } = req.body;

        const { collection, filter } = parseQuery(query);

        const result = await db.collection(collection).find(filter).toArray();

        res.json({ success: true, data: result });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));