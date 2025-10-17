import type { Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const googleSignIn = async (req: Request, res: Response) => {
    const { tokenId } = req.body;
    try {
        const ticket = await client.verifyIdToken({
            idToken: tokenId,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const payload = ticket.getPayload();
        if (!payload) return res.status(400).json({ message: "Invalid token" });
        const { sub, email, name } = payload;

        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ name, email, googleId: sub });
        }
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET as string, {
            expiresIn: "7d",
        });

        res.json({ user, token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Google sign-in failed" });
    }
};