import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
    try {
       mongoose.connect(`mongodb://localhost:${process.env.PORT}`)
        console.log(`\n MongoDB connected !! DB HOST: ${process.env.PORT}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB