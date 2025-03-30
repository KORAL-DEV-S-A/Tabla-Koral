import { Router } from "express";
import { getProfileOfToken, loginUser, logoutUser, registerUserAsync } from "../controllers/user/user.controlle.js";


// Router
const router_user = Router();



// Routes
router_user.post('/login', loginUser);

router_user.post('/logout', logoutUser);

router_user.post("/register", registerUserAsync);

router_user.get("/profile", getProfileOfToken );


export default router_user;