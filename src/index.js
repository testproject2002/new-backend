import express from "express"
const app = express();
import connecttoDB from "./db/dbconnection.js";
import dotenv from "dotenv"
dotenv.config()

connecttoDB()


app.listen(process.env.PORT,()=>{
    try {
        console.log(`connected to server: ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
})