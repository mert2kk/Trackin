import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
    email: string;
    name: string;
    googleId?: string;
}

const userSchema = new Schema<IUser>(
    {
        email: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        googleId: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);