import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) throw new Error("MONGO_URI is not defined in .env");
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("✅ MongoDB connected");
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err);
        process.exit(1);
    }
};