import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import heroPoster from "@/assets/hero-poster.jpg";
import cupOverlap from "@/assets/cup-overlap.jpg";
import storefront from "@/assets/storefront.jpg";
import barista from "@/assets/barista.jpg";
import beans from "@/assets/beans.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g6 from "@/assets/gallery-6.jpg";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        {/* Background video with poster fallback */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={heroPoster}
          className="h-full w-full object-cover"
        >
          {/* Replace with your hosted video file. Poster shows in the meantime. */}
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-ink/45" />
        <div className="absolute inset-0 bg-gradient-veil" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 container-editorial h-full flex flex-col justify-end pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono-label text-cream/70 mb-6"
        >
          Birmingham — Est. on Temple Row
        </motion.p>

        <h1 className="font-display text-cream text-[clamp(2.75rem,8vw,8.5rem)] leading-[0.95] max-w-[14ch]">
          {"Welcome to your".split(" ").map((w, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.5 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-[0.25em]"
            >
              {w}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="inline-block italic text-butterscotch"
          >
            happy place.
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <p className="text-cream/85 max-w-md text-lg leading-relaxed">
            Hard-to-find speciality coffee, fantastic food and the warmest welcome —
            served daily on Temple Row.
          </p>

          <div className="flex items-center gap-4">
            <Link
              to="/menu"
              className="font-mono-label px-6 py-3.5 bg-cream text-ink hover:bg-cocoa transition-all duration-500 ease-out-expo"
            >
              See the menu
            </Link>
            <Link
              to="/visit"
              className="font-mono-label px-6 py-3.5 border border-cream/40 text-cream hover:bg-cream hover:text-ink transition-all duration-500 ease-out-expo"
            >
              Visit us
            </Link>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 font-mono-label text-cream/60"
      >
        Scroll
      </motion.div>
    </section>
  );
};

const Marquee = () => (
  <div className="bg-espresso text-cream py-6 overflow-hidden marquee-mask">
    <div className="flex gap-16 animate-marquee w-max font-display text-3xl whitespace-nowrap">
      {Array.from({ length: 2 }).map((_, k) => (
        <div key={k} className="flex gap-16 pr-16">
          {["Speciality coffee", "·", "Birmingham", "·", "1,261 five-star reviews", "·", "Hand brewed", "·", "Open daily"].map((w, i) => (
            <span key={i} className={i % 2 ? "text-butterscotch" : ""}>{w}</span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const OverlapStory = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const cupY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const beanY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  // Scroll-driven zoom on the cup image
  const cupRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cupProgress } = useScroll({ target: cupRef, offset: ["start end", "end start"] });
  const cupScale = useTransform(cupProgress, [0, 0.5, 1], [1, 1.18, 1.32]);
  const beanRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: beanProgress } = useScroll({ target: beanRef, offset: ["start end", "end start"] });
  const beanScale = useTransform(beanProgress, [0, 0.5, 1], [1, 1.12, 1.24]);

  return (
    <section ref={ref} className="relative bg-cream py-32 md:py-44 overflow-hidden">
      <div className="container-editorial relative">
        <div className="grid grid-cols-12 gap-6 items-start relative">
          {/* Editorial copy */}
          <div className="col-span-12 md:col-span-7 relative z-10">
            <Reveal>
              <p className="font-mono-label text-foreground/50 mb-8">Our craft — 01</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-[clamp(2.25rem,5.5vw,5.5rem)] leading-[1.02] max-w-[14ch]">
                A cup that takes its <span className="italic text-irish">time.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-10 max-w-md text-lg leading-relaxed text-foreground/75">
                We don't rush. Every shot is dialled, every milk steamed by hand, every conversation
                worth having. The Coffee Bar is a small, slow ritual on a busy Birmingham street —
                and it's the warmest welcome you'll have all day.
              </p>
            </Reveal>
          </div>

          {/* Floating overlapped cup image — scroll-zoom */}
          <motion.div
            ref={cupRef}
            style={{ y: cupY }}
            className="hidden md:block absolute right-0 -top-32 w-[42%] aspect-[3/4] z-20 shadow-soft overflow-hidden"
          >
            <motion.img
              src={cupOverlap}
              alt="Cappuccino with rosetta latte art on a dark walnut table"
              style={{ scale: cupScale }}
              className="h-full w-full object-cover will-change-transform"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Lower band — overlaps the upper section */}
        <div className="relative mt-24 md:mt-40 grid grid-cols-12 gap-6">
          <motion.div
            ref={beanRef}
            style={{ y: beanY }}
            className="col-span-12 md:col-span-5 md:col-start-2 aspect-[4/5] relative z-10 overflow-hidden"
          >
            <motion.img
              src={beans}
              alt="Roasted coffee beans cascading"
              style={{ scale: beanScale }}
              className="h-full w-full object-cover will-change-transform"
              loading="lazy"
            />
          </motion.div>

          <div className="col-span-12 md:col-span-5 md:col-start-8 self-end pb-6 z-20 md:-translate-x-12 md:-translate-y-12">
            <Reveal>
              <p className="font-mono-label text-foreground/50 mb-6">02 — The bean</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="font-display text-3xl md:text-4xl leading-tight">
                Hard-to-find roasts, rotated weekly.
              </h3>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-foreground/75 max-w-sm">
                We work with the most curious roasters in Britain and beyond — single-origin lots
                that push flavour into new territory.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

const PlaceSection = () => (
  <section className="relative bg-espresso text-cream py-32 md:py-44 overflow-hidden">
    <div className="container-editorial">
      <div className="grid grid-cols-12 gap-6 items-end mb-16">
        <div className="col-span-12 md:col-span-6">
          <Reveal>
            <p className="font-mono-label text-cream/50 mb-6">03 — The place</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-[clamp(2.25rem,5vw,5rem)] leading-[1.02]">
              Twelve, Temple Row.
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-5 md:col-start-8">
          <Reveal>
            <p className="text-cream/75 leading-relaxed">
              A small black-fronted bar tucked between the cathedral and the city's morning rush.
              Edison bulbs, exposed brick, a counter built for conversation.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal>
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden">
          <img src={storefront} alt="The Coffee Bar Collective storefront on Temple Row, Birmingham" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </Reveal>

      <div className="grid grid-cols-12 gap-6 mt-12">
        <Reveal className="col-span-12 md:col-span-6 aspect-[4/5] md:aspect-[3/4] overflow-hidden">
          <img src={barista} alt="Barista preparing coffee at the bar" className="h-full w-full object-cover" loading="lazy" />
        </Reveal>
        <div className="col-span-12 md:col-span-5 md:col-start-8 self-center">
          <Reveal delay={0.1}>
            <p className="font-display text-3xl md:text-4xl leading-tight">
              "If every cafe welcomed you like this place, we'd have one of the best industries in the world."
            </p>
            <p className="font-mono-label text-cream/50 mt-6">— Martin Hand, Local Guide</p>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

const GalleryTeaser = () => (
  <section className="bg-cream py-32 md:py-44">
    <div className="container-editorial">
      <div className="flex items-end justify-between mb-12">
        <Reveal>
          <div>
            <p className="font-mono-label text-foreground/50 mb-4">04 — Field notes</p>
            <h2 className="font-display text-4xl md:text-6xl">From the bar.</h2>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Link to="/gallery" className="font-mono-label inline-flex items-center gap-2 group">
            See the full gallery
            <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </Reveal>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <Reveal className="col-span-7 md:col-span-5 aspect-[4/5] overflow-hidden">
          <img src={g1} alt="Latte rosetta macro" className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000 ease-out-expo" loading="lazy" />
        </Reveal>
        <Reveal delay={0.1} className="col-span-5 md:col-span-4 aspect-[4/5] overflow-hidden mt-12">
          <img src={g6} alt="Crema swirl" className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000 ease-out-expo" loading="lazy" />
        </Reveal>
        <Reveal delay={0.2} className="col-span-12 md:col-span-3 aspect-[4/5] overflow-hidden md:mt-32">
          <img src={g2} alt="Pour over" className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000 ease-out-expo" loading="lazy" />
        </Reveal>
      </div>
    </div>
  </section>
);

const HoursStrip = () => (
  <section className="bg-cream pb-32">
    <div className="container-editorial">
      <div className="rule mb-16" />
      <div className="grid grid-cols-12 gap-6 items-start">
        <div className="col-span-12 md:col-span-5">
          <Reveal>
            <p className="font-mono-label text-foreground/50 mb-6">Come on in</p>
            <h3 className="font-display text-3xl md:text-5xl leading-tight">Open every day.</h3>
          </Reveal>
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <Reveal>
            <ul className="divide-y divide-foreground/15">
              {[
                ["Monday – Friday", "7:30 — 17:30"],
                ["Saturday", "9:00 — 18:00"],
                ["Sunday", "10:00 — 16:00"],
              ].map(([d, t]) => (
                <li key={d} className="flex justify-between py-5 text-lg">
                  <span className="text-foreground/70">{d}</span>
                  <span className="font-display">{t}</span>
                </li>
              ))}
            </ul>
            <Link to="/visit" className="mt-10 inline-flex items-center gap-2 font-mono-label group">
              Get directions
              <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

const Index = () => (
  <SiteLayout>
    <Hero />
    <Marquee />
    <OverlapStory />
    <PlaceSection />
    <GalleryTeaser />
    <HoursStrip />
  </SiteLayout>
);

export default Index;
