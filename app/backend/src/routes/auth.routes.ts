import { Router } from "express";
import { googleSignIn } from "../controllers/auth.controller";

const router = Router();

router.get("/test", (req, res) => {
    res.json({ message: "Auth route is working!" });
});

router.post("/google", googleSignIn);

export default router;