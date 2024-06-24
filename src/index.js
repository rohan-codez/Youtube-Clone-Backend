import dotenv from "dotenv"
import express from "express";
import connectDB from "./db/index.js";

dotenv.config({ path: "./env" })

connectDB()

















/*
import mongoose from "mongoose";
import { DB_Name } from "./constants";

const app = express()

    // last statement must have semicolon before IIFE so we can add ; seperately here
    //;
    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
            app.on("error", (error) => {
                console.log("ERROR:", error)
                throw error
            })

            app.listen(process.env.port, () => {
                console.log(`App is listening on PORT: ${process.env.port}`)
            })

        } catch (error) {
            console.error("ERROR: ", error)
            throw error
        }
    })()

*/