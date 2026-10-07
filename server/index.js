import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 4406;
app.listen(PORT, () => {
  console.log(`React X-Ray server listening on port ${PORT}`);
});
