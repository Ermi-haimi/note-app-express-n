import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./configurations/db.js";

dotenv.config();

const app = express()

const port = process.env.PORT || 4000;

connectDB();
app.get('/', (req,res) => {
    res.send("this is from the root page");
})



app.listen(3000, () => {
    console.log('the app is running on port 3000')
})