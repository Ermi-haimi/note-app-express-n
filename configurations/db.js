import mongoose from 'mongoose';

export const connectDB = async ()=>{
    try {
        console.log("connecting to mongodb");
        const connectionSt = await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB is connected:", connectionSt.connection.host);
        
    } catch (err) {
        console.log("Error conecting MongoDB:", err);
        
    }
} 