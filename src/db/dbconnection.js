import mongoose from 'mongoose'


const connecttoDB = async ()=>{
    try {
        const connect = mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`connected to mongDB`)
    } catch (error) {
        console.log("MongoDb Connection failed",error)
    }
}

export default connecttoDB;