import express from "express";
import dotenv from "dotenv";
import route from "./routes/route.js";
import path from "path";
import workingTime from "./middlewares/workingTime.js";

const __dirname = path.resolve();
const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(workingTime);
app.use(route);
app.get("/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "styles.css"));
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
