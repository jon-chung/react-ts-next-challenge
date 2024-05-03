import express from "express";
import cors from "cors";
import payload from "./requests-data.json";

const app = express();
const port = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get("/requests", (_, res) => {
  res.send(payload);
});

// App start
app.listen(port, () => {
  console.log(`API is listening on port ${port}`);
});