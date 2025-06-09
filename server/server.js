import "./config/instrument.js";
import express from "express";
import cors from "cors";

import "dotenv/config";
import { connect } from "mongoose";
import connectDB from "./config/db.js";
import "dotenv/config";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from "./controllers/Webhooks.js";
import companyRoutes from "./routes/companyRoutes.js";
import connectCloudinary from "./config/cloudinary.js";
import jobRoutes from "./routes/jobRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { clerkMiddleware } from "@clerk/express";

//Initilize the express app
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());
app.use("/api/jobs", jobRoutes);
app.use("/api/users", userRoutes);

//Database connection
// console.log("MONGO_URI:", process.env.MONGO_URI);

await connectDB();
await connectCloudinary();

//Routes
app.get("/", (req, res) => {
  res.send("API is working!");
});

app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});

app.post("/webhooks", clerkWebhooks);
app.use("/api/company", companyRoutes);

//Port
const PORT = process.env.PORT || 5000;
Sentry.setupExpressErrorHandler(app);

//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
