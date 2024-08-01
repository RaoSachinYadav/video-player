import mongoose from 'mongoose';
import {DB_NAME} from '../constants.js'

const connectDB= async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        console.log(`\n MONGO DB CONNECTED!! , DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Error in MONGODB connection: ",error);
        throw error;
    }
}

export default connectDB;