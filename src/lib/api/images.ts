// Mock backend skeleton — image catalogue
// Returns the curated photographs used across the gallery.

export type GeneratedImage = {
  id: string;
  prompt: string;
  url: string;
  width: number;
  height: number;
  createdAt: number;
};

import heroPoster from "@/assets/hero-poster.jpg";
import cupOverlap from "@/assets/cup-overlap.jpg";
import barista from "@/assets/barista.jpg";
import beans from "@/assets/beans.jpg";
import interior from "@/assets/interior.jpg";
import storefront from "@/assets/storefront.jpg";
import visitDoorway from "@/assets/visit-doorway.jpg";
import visitInterior from "@/assets/visit-interior-wide.jpg";
import foodAffogato from "@/assets/food-affogato.jpg";
import foodBanana from "@/assets/food-banana-bread.jpg";
import foodCinnamon from "@/assets/food-cinnamon-bun.jpg";
import foodHotChoc from "@/assets/food-hot-choc.jpg";
import foodLemon from "@/assets/food-lemon-coffee.jpg";
import foodMochaCake from "@/assets/food-mocha-cake.jpg";
import foodToastie from "@/assets/food-toastie.jpg";

const POOL = [
  { url: heroPoster, w: 1920, h: 1080, prompt: "The bar at golden hour" },
  { url: cupOverlap, w: 1280, h: 1600, prompt: "Cappuccino, walnut counter" },
  { url: foodMochaCake, w: 1600, h: 1200, prompt: "Mocha cake, slow afternoon" },
  { url: visitInterior, w: 1920, h: 1080, prompt: "Twelve, Temple Row — interior" },
  { url: foodCinnamon, w: 1280, h: 1600, prompt: "Cinnamon sticky bun, house-made" },
  { url: barista, w: 1280, h: 1600, prompt: "On the bar, mid-pour" },
  { url: foodAffogato, w: 1600, h: 1200, prompt: "Pistachio baklava affogato" },
  { url: beans, w: 1280, h: 1600, prompt: "Roasted beans, single origin" },
  { url: foodToastie, w: 1600, h: 1200, prompt: "Toastie, lunchtime ritual" },
  { url: interior, w: 1920, h: 1080, prompt: "Edison bulbs and exposed brick" },
  { url: foodLemon, w: 1280, h: 1600, prompt: "Lemon and a long black" },
  { url: visitDoorway, w: 1280, h: 1600, prompt: "Black-fronted doorway" },
  { url: foodBanana, w: 1600, h: 1200, prompt: "Toasted banana bread" },
  { url: foodHotChoc, w: 1280, h: 1600, prompt: "Hot chocolate, Saturday morning" },
  { url: storefront, w: 1920, h: 1080, prompt: "Storefront, Temple Row" },
];

export async function listGeneratedImages(): Promise<GeneratedImage[]> {
  await new Promise((r) => setTimeout(r, 200));
  return POOL.map((p, i) => ({
    id: `img_${i}`,
    prompt: p.prompt,
    url: p.url,
    width: p.w,
    height: p.h,
    createdAt: Date.now() - i * 86400000,
  }));
}
