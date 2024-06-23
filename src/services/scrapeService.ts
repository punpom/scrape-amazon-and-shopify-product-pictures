import axios from "axios";
import cheerio from "cheerio";

const scrapeAmazon = async (url: string, size?: number | undefined) => {
  const { data } = await axios.get(url);
  if (!data) {
    return null;
  }
  if (!size) {
    size = 600;
  }
  const $ = cheerio.load(data);
  const imageElements = $("#imageBlock img");
  const images = imageElements
    .map((i, img) => {
      const src = $(img).attr("src");
      if (src && src.startsWith("https://m.media-amazon.com/")) {
        return src.replace(/_AC_.*?\./, `_AC_SX${size}_.`);
      }
      return null;
    })
    .get()
    .filter((src) => src);
  return images;
};

const scrapeShopify = async (url: string) => {
  return "Hello World";
};

export default { scrapeAmazon, scrapeShopify };
