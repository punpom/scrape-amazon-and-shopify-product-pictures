// /src/index.ts
import express from "express";
import axios from "axios";
import cheerio from "cheerio";
import scrapeRoutes from "./routes/scrapeRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/scrape", scrapeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
