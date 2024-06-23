import { Request, Response } from "express";
import scrapeService from "../services/scrapeService";

const amazon = async (req: Request, res: Response) => {
  const { url, size } = req.body;
  if (!url) {
    res.send("Please provide a valid URL");
    return;
  }
  const scrapeAmazon = await scrapeService.scrapeAmazon(url, size);
  res.send(scrapeAmazon);
};

const shopify = (req: Request, res: Response) => {
  const { url } = req.body;
  if (!url) {
    res.send("Please provide a valid URL");
    return;
  }
  const scrapeShopify = scrapeService.scrapeShopify(url);
  res.send("Scraping Shopify images");
};

export default { amazon, shopify };
