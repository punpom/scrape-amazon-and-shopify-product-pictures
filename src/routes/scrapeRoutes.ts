import { Router } from "express";
import scrapeController from "../controllers/scrapeController";

const router = Router();

router.post("/amazon", scrapeController.amazon);
router.post("/shopify", scrapeController.shopify);

export default router;
