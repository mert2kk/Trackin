import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.modal";

// Google'dan gelen token'ı FE'den alıp doğrulama kısmını burada yapacağız
export const googleSignIn = async (req: Request, res: Response) => {
    try {
        const { email, name, googleId } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email, name, googleId });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET as string,
            { expiresIn: "7d" }
        );

        return res.json({ user, token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};