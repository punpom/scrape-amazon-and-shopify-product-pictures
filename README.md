# Simple product pictures scraper for Amazon and Shopify (soon)

Simple product pictures scraper for Amazon and Shopify (soon) written in typescript

## Installation

```bash
npm install
```

## Usage

```bash
npm run dev
```

## API

### Scrape Amazon

#### Example request

```json
{
  "url": "https://www.amazon.fr/sp%C3%A9ciales-petits-appareils-%C3%A9lectroniques-performances/dp/B000EGSGVA?pd_rd_w=705Dp&content-id=amzn1.sym.2d94ec53-de1a-4aa7-ba48-9f6fd5d686d3&pf_rd_p=2d94ec53-de1a-4aa7-ba48-9f6fd5d686d3&pf_rd_r=3N8WP6QZZ3GGJNNX8JY4&pd_rd_wg=E9CES&pd_rd_r=8081e886-a21c-4fc4-ae37-a849d5c44ecb&pd_rd_i=B000EGSGVA&psc=1&ref_=pd_bap_d_grid_rp_0_1_ec_pd_hp_d_atf_rp_1_i",
  "size": 600
}
```

#### Example response

```json
[
  "https://m.media-amazon.com/images/I/41rVWO2nMHL._AC_SX600_.jpg",
  "https://m.media-amazon.com/images/I/41l7wgXZmwL._AC_SX600_.jpg",
  "https://m.media-amazon.com/images/I/418FpI6hGjL._AC_SX600_.jpg",
  "https://m.media-amazon.com/images/I/41Aq5fYQeXL._AC_SX600_.jpg",
  "https://m.media-amazon.com/images/I/41iwWDckqpL._AC_SX600_.jpg",
  "https://m.media-amazon.com/images/I/41IdnkZWb-L._AC_SX600_.jpg",
  "https://m.media-amazon.com/images/I/41954KZUFpL._AC_SX600_.jpg",
  "https://m.media-amazon.com/images/I/61YibReYa5L.__AC_SX600_.jpg"
]
```
