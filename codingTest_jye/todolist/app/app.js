import express from "express";
import dotenv from "dotenv";
import home from "./src/routes/home/index.js";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import cors from "cors";
const __dirname = fileURLToPath(new URL(".", import.meta.url));

const app = express();

dotenv.config();

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.use("/", home);

export default app;
