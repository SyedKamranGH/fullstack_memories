import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from './routes/posts.js'

const app = express();

app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://syedkamahmed:uAkzJT3LD18xAWDt@backenddb.gdelu.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on prot: ${PORT} `))
  )
  .catch((error) => console.log(error.message));
