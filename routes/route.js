import express from "express";
import path, { dirname } from "path";

const router = express.Router();
const __dirname = path.resolve();
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "views", "home.html"));
});

router.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "views", "services.html"));
});

router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "views", "contact.html"));
});
export default router;
