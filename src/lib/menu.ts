import espresso from "@/assets/cup-espresso.png";
import cappuccino from "@/assets/cup-cappuccino.png";
import flatwhite from "@/assets/cup-flatwhite.png";
import latte from "@/assets/cup-latte.png";
import cortado from "@/assets/cup-cortado.png";
import mocha from "@/assets/cup-mocha.png";
import iced from "@/assets/cup-iced.png";
import chai from "@/assets/cup-chai.png";

import bananaBread from "@/assets/food-banana-bread.jpg";
import bananaBreadVegan from "@/assets/food-banana-bread-vegan.jpg";
import bananaBreadHoney from "@/assets/food-banana-bread-honey.jpg";
import cinnamonBun from "@/assets/food-cinnamon-bun.jpg";
import toastie from "@/assets/food-toastie.jpg";
import affogato from "@/assets/food-affogato.jpg";
import mochaCake from "@/assets/food-mocha-cake.jpg";
import lemonCoffee from "@/assets/food-lemon-coffee.jpg";
import hotChoc from "@/assets/food-hot-choc.jpg";
import valencianChoc from "@/assets/food-valencian-choc.jpg";

export type Coffee = {
  id: string;
  name: string;
  category: "Espresso" | "Milk" | "Cold" | "Not Coffee";
  image: string;
  description: string;
  notes: string[];
  price: string;
};

export const COFFEES: Coffee[] = [
  {
    id: "espresso",
    name: "Espresso",
    category: "Espresso",
    image: espresso,
    description: "A short, intense pour. Our house blend at its purest — pulled with care, served without ceremony.",
    notes: ["Cocoa", "Stone fruit", "Caramel"],
    price: "£2.80",
  },
  {
    id: "cortado",
    name: "Cortado",
    category: "Espresso",
    image: cortado,
    description: "Equal parts espresso and warm milk. Quiet, balanced, and quietly addictive.",
    notes: ["Soft", "Smooth", "Milky"],
    price: "£3.40",
  },
  {
    id: "flat-white",
    name: "Flat White",
    category: "Milk",
    image: flatwhite,
    description: "A double ristretto under silken micro-foam. The connoisseur's pour.",
    notes: ["Velvet", "Caramel", "Dense"],
    price: "£3.80",
  },
  {
    id: "cappuccino",
    name: "Cappuccino",
    category: "Milk",
    image: cappuccino,
    description: "Espresso, steamed milk, and a generous cap of foam dusted with intention.",
    notes: ["Airy", "Sweet", "Classic"],
    price: "£3.80",
  },
  {
    id: "latte",
    name: "Latte",
    category: "Milk",
    image: latte,
    description: "Long, mellow, milk-forward. The everyday cup, done properly.",
    notes: ["Mellow", "Creamy", "Long"],
    price: "£4.00",
  },
  {
    id: "mocha",
    name: "Belgian Flaked Mocha",
    category: "Milk",
    image: mocha,
    description: "Real Belgian chocolate flakes, melted into espresso and steamed milk. Indulgence with depth.",
    notes: ["Cocoa", "Rich", "Dessert-like"],
    price: "£4.70",
  },
  {
    id: "iced",
    name: "Iced Latte",
    category: "Cold",
    image: iced,
    description: "Espresso poured over ice and cold milk. A long, refreshing study in contrast.",
    notes: ["Crisp", "Cool", "Bright"],
    price: "£4.20",
  },
  {
    id: "chai",
    name: "Chai Latte",
    category: "Not Coffee",
    image: chai,
    description: "Spiced black tea, steamed milk, a whisper of cinnamon on top.",
    notes: ["Spiced", "Warming", "Aromatic"],
    price: "£3.60",
  },
];

// ─── Food & Plates ──────────────────────────────────────────────────────────

export type FoodCategory = "Toasties" | "Sweet" | "Signature" | "Drinks";

export type Food = {
  id: string;
  name: string;
  category: FoodCategory;
  image: string;
  description: string;
  tags?: string[];
  price: string;
};

export const FOOD: Food[] = [
  {
    id: "banana-bread",
    name: "Toasted Banana Bread",
    category: "Sweet",
    image: bananaBread,
    description: "Warm-toasted, topped with greek yogurt and a mango & passion fruit compote.",
    tags: ["Vegetarian"],
    price: "£3.95",
  },
  {
    id: "banana-bread-vegan",
    name: "Banana Bread, Vegan",
    category: "Sweet",
    image: bananaBreadVegan,
    description: "Dairy-free yogurt, agave nectar, almond, fruit & seed topper.",
    tags: ["Vegan"],
    price: "£3.95",
  },
  {
    id: "banana-bread-honey",
    name: "Banana Bread & Honey",
    category: "Sweet",
    image: bananaBreadHoney,
    description: "Topped with British blackberries and a generous lashing of honey.",
    tags: ["Vegetarian"],
    price: "£3.95",
  },
  {
    id: "cinnamon-bun",
    name: "Cinnamon Sticky Bun",
    category: "Sweet",
    image: cinnamonBun,
    description: "Sweet, spiced, hand-rolled sourdough cinnamon bun. Served warm.",
    tags: ["Vegan"],
    price: "£3.20",
  },
  {
    id: "mocha-cake",
    name: "Belgian Mocha Slice",
    category: "Sweet",
    image: mochaCake,
    description: "Dense chocolate sponge layered with mocha cream, finished with gilded coffee beans.",
    tags: ["House-made"],
    price: "£4.50",
  },
  {
    id: "toastie",
    name: "House Toastie",
    category: "Toasties",
    image: toastie,
    description: "Rotating cheese & cure, melted into sourdough, pressed until golden. Ask the bar.",
    tags: ["Hot"],
    price: "£6.50",
  },
  {
    id: "affogato",
    name: "Pistachio Baklava Affogato",
    category: "Signature",
    image: affogato,
    description: "Vanilla gelato, drowned in a fresh espresso, crowned with pistachio baklava.",
    tags: ["Signature"],
    price: "£5.80",
  },
  {
    id: "lemon-coffee",
    name: "Lemon Espresso Tonic",
    category: "Drinks",
    image: lemonCoffee,
    description: "House espresso, sparkling tonic, ice and a fresh squeeze of Sicilian lemon.",
    tags: ["Cold", "Bright"],
    price: "£4.40",
  },
  {
    id: "hot-choc",
    name: "CBD Hot Chocolate",
    category: "Drinks",
    image: hotChoc,
    description: "Belgian flaked chocolate, topped with orange and a dust of turmeric.",
    tags: ["Warming"],
    price: "£4.90",
  },
  {
    id: "valencian-choc",
    name: "Valencian Orange Hot Chocolate",
    category: "Drinks",
    image: valencianChoc,
    description: "Valencian orange extract folded through Belgian flaked chocolate.",
    tags: ["Citrus"],
    price: "£3.55",
  },
];
