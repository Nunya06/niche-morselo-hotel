import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
// Clerk middleare
import { clerkMiddleware } from '@clerk/express'
import clerkWebHooks from "./controllers/clerkWebhooks.js";

// Connection function 
connectDB()

const app = express()
app.use(cors()) //Enable cross-origin sharing

// Middleware
app.use(express.json())
app.use(clerkMiddleware())



// API to listen to clerkWebhooks
app.use("/api/clerk", clerkWebHooks)

app.get('/', (req, res)=> res.send("API is working"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));