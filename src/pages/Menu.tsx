import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { COFFEES, Coffee, FOOD, Food } from "@/lib/menu";

const CATS = ["All", "Espresso", "Milk", "Cold", "Not Coffee"] as const;
const FOOD_CATS = ["All", "Sweet", "Toasties", "Signature", "Drinks"] as const;

const FloatingCup = ({ coffee, index }: { coffee: Coffee; index: number }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.9, delay: (index % 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
    className="group relative pt-16 pb-12 px-6 text-center"
    style={{ perspective: "1200px" }}
  >
    <div
      aria-hidden
      className="absolute inset-x-12 bottom-10 h-10 rounded-[50%] bg-ink/15 blur-xl group-hover:bg-ink/25 group-hover:inset-x-16 transition-all duration-700"
    />
    {/* Drift wrapper owns the floating animation; inner img owns the hover tilt */}
    <div
      className="relative mx-auto h-56 md:h-64 w-fit"
      style={{ animation: `drift 6s ease-in-out ${index * 0.3}s infinite` }}
    >
      <motion.img
        src={coffee.image}
        alt={coffee.name}
        loading="lazy"
        initial={{ rotateX: 0, rotateY: 0, rotateZ: 0, y: 0, scale: 1 }}
        whileHover={{
          rotateX: 8,
          rotateY: index % 2 === 0 ? -12 : 12,
          rotateZ: index % 2 === 0 ? -2 : 2,
          y: -16,
          scale: 1.04,
        }}
        transition={{ type: "spring", stiffness: 220, damping: 18 }}
        className="h-full w-auto object-contain drop-shadow-[0_30px_40px_rgba(40,25,15,0.25)] group-hover:drop-shadow-[0_50px_60px_rgba(40,25,15,0.35)]"
        style={{ transformStyle: "preserve-3d", transformOrigin: "50% 80%" }}
      />
    </div>
    <div className="mt-10">
      <p className="font-mono-label text-foreground/40 mb-2">{coffee.category}</p>
      <h3 className="font-display text-2xl md:text-3xl">{coffee.name}</h3>
      <p className="mt-3 text-sm text-foreground/65 max-w-[28ch] mx-auto leading-relaxed">{coffee.description}</p>
      <div className="mt-5 flex items-center justify-center gap-2 flex-wrap">
        {coffee.notes.map((n) => (
          <span key={n} className="font-mono-label text-foreground/55 px-2 py-1 border border-foreground/15">
            {n}
          </span>
        ))}
      </div>
      <p className="mt-6 font-display text-irish text-xl">{coffee.price}</p>
    </div>
  </motion.article>
);

const FoodCard = ({ food, index }: { food: Food; index: number }) => (
  <motion.article
    layout
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.9, delay: (index % 8) * 0.05, ease: [0.16, 1, 0.3, 1] }}
    className="group relative"
  >
    <div className="relative aspect-[4/5] overflow-hidden bg-ink">
      <img
        src={food.image}
        alt={food.name}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-[1.06]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-90" />
      <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
        {food.tags?.map((t) => (
          <span key={t} className="font-mono-label text-cream/90 px-2 py-1 bg-cream/10 backdrop-blur-md border border-cream/20">
            {t}
          </span>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
        <p className="font-mono-label text-cream/60 mb-2">{food.category}</p>
        <div className="flex items-end justify-between gap-4">
          <h3 className="font-display text-2xl md:text-3xl leading-tight">{food.name}</h3>
          <p className="font-display text-xl text-butterscotch shrink-0">{food.price}</p>
        </div>
        <p className="mt-3 text-cream/80 text-sm leading-relaxed max-w-[40ch]">{food.description}</p>
      </div>
    </div>
  </motion.article>
);

const Menu = () => {
  const [cat, setCat] = useState<(typeof CATS)[number]>("All");
  const [foodCat, setFoodCat] = useState<(typeof FOOD_CATS)[number]>("All");

  const filtered = useMemo(
    () => (cat === "All" ? COFFEES : COFFEES.filter((c) => c.category === cat)),
    [cat]
  );
  const filteredFood = useMemo(
    () => (foodCat === "All" ? FOOD : FOOD.filter((f) => f.category === foodCat)),
    [foodCat]
  );

  return (
    <SiteLayout>
      {/* Header */}
      <section className="bg-cream pt-40 pb-20 md:pt-52 md:pb-28">
        <div className="container-editorial">
          <Reveal>
            <p className="font-mono-label text-foreground/50 mb-6">The menu</p>
          </Reveal>
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <Reveal delay={0.05}>
                <h1 className="font-display text-[clamp(2.75rem,7vw,7.5rem)] leading-[0.98]">
                  Eight pours.<br />
                  <span className="italic text-irish">Each one considered.</span>
                </h1>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-4">
              <Reveal delay={0.15}>
                <p className="text-foreground/75 leading-relaxed max-w-sm">
                  We keep the menu small and the standard high. Every drink is built on the same
                  hand-dialled house espresso — then made your way.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-cream sticky top-[76px] z-30 backdrop-blur-md bg-cream/85 border-y border-foreground/10">
        <div className="container-editorial flex gap-1 overflow-x-auto py-4">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`font-mono-label px-4 py-2 transition-all duration-500 whitespace-nowrap ${
                cat === c ? "bg-ink text-cream" : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Floating cups grid */}
      <section className="bg-gradient-warm pt-12 pb-32">
        <div className="container-editorial">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((c, i) => (
                <FloatingCup key={c.id} coffee={c} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Food header */}
      <section className="bg-espresso text-cream pt-32 md:pt-40 pb-12">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <p className="font-mono-label text-cream/50 mb-6">The kitchen</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display text-[clamp(2.5rem,6vw,6rem)] leading-[0.98]">
                  Plates &<br />
                  <span className="italic text-butterscotch">small things.</span>
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <Reveal delay={0.15}>
                <p className="text-cream/75 leading-relaxed max-w-sm">
                  Sourdough, slow bakes, pistachio, Belgian chocolate. Made by hand,
                  served warm — and best paired with whichever cup we just pulled.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Food filter */}
      <section className="bg-espresso sticky top-[76px] z-20 backdrop-blur-md bg-espresso/90 border-y border-cream/10">
        <div className="container-editorial flex gap-1 overflow-x-auto py-4">
          {FOOD_CATS.map((c) => (
            <button
              key={c}
              onClick={() => setFoodCat(c)}
              className={`font-mono-label px-4 py-2 transition-all duration-500 whitespace-nowrap ${
                foodCat === c ? "bg-cream text-ink" : "text-cream/55 hover:text-cream"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Food grid */}
      <section className="bg-espresso pt-10 pb-32">
        <div className="container-editorial">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredFood.map((f, i) => (
                <FoodCard key={f.id} food={f} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Footer note */}
      <section className="bg-cream py-24">
        <div className="container-editorial text-center">
          <Reveal>
            <p className="font-mono-label text-foreground/50 mb-6">Every cup, made better with</p>
            <p className="font-display text-3xl md:text-5xl max-w-3xl mx-auto leading-tight">
              Oat milk · CBD · Honey & cinnamon · Belgian flake ·
              <span className="italic text-irish"> a smile.</span>
            </p>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Menu;
