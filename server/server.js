import "./config/instrument.js";
import express from "express";
import cors from "cors";

import "dotenv/config";
import { connect } from "mongoose";
import connectDB from "./config/db.js";
import "dotenv/config";
import * as Sentry from "@sentry/node";
import { clerkWebhooks } from "./controllers/Webhooks.js";

//Initilize the express app
const app = express();

//Database connection
// console.log("MONGO_URI:", process.env.MONGO_URI);

await connectDB();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("API is working!");
});


app.get("/debug-sentry", function mainHandler(req, res) {
  throw new Error("My first Sentry error!");
});


app.post("/webhooks", clerkWebhooks);

//Port
const PORT = process.env.PORT || 5000;
Sentry.setupExpressErrorHandler(app);

//Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
