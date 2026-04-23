import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { listGeneratedImages, GeneratedImage } from "@/lib/api/images";
import smallCrema from "@/assets/gallery-small-crema.jpg";

const ParallaxImage = ({
  src,
  alt,
  progress,
  range,
  className = "",
}: {
  src: string;
  alt: string;
  progress: MotionValue<number>;
  range: [number, number];
  className?: string;
}) => {
  const y = useTransform(progress, [0, 1], range);
  return (
    <motion.div style={{ y }} className={`overflow-hidden ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </motion.div>
  );
};

const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  const [images, setImages] = useState<GeneratedImage[]>([]);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});

  useEffect(() => {
    listGeneratedImages().then(setImages);
  }, []);

  const markLoaded = (id: string) => setLoaded((prev) => ({ ...prev, [id]: true }));

  return (
    <SiteLayout>
      {/* Statement header — small accent image lives in here, not over the parallax grid */}
      <section className="bg-cream pt-40 pb-12 md:pt-52">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-8">
              <Reveal>
                <p className="font-mono-label text-foreground/50 mb-6">Gallery</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="font-display text-[clamp(3rem,10vw,12rem)] leading-[0.92]">
                  Field<br />
                  <span className="italic text-irish">notes.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="mt-10 max-w-md text-foreground/75 text-lg leading-relaxed">
                  A living archive of our craft — pours, places, and small details from the bar.
                  Every frame shot in and around Twelve, Temple Row.
                </p>
              </Reveal>
            </div>

            <div className="hidden md:block col-span-4 col-start-9">
              <Reveal delay={0.2}>
                <div className="aspect-[4/5] overflow-hidden shadow-soft">
                  <img
                    src={smallCrema}
                    alt="Macro of espresso crema"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <p className="font-mono-label text-foreground/45 leading-relaxed">
                    01 — A daily archive<br />
                    <span className="text-foreground/30">Pours · Plates · Places</span>
                  </p>
                  <p className="font-mono-label text-foreground/35 shrink-0">
                    {String(images.length || 6).padStart(2, "0")} / frames
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax statement gallery */}
      <section ref={containerRef} className="relative bg-cream pb-40 pt-16">
        <div className="grid grid-cols-12 gap-3 md:gap-5 px-3 md:px-5">
          {images.slice(0, 6).map((img, i) => {
            const positions = [
              { col: "col-span-12 md:col-span-7", aspect: "aspect-[4/3]", range: [80, -120] as [number, number], offset: "" },
              { col: "col-span-12 md:col-span-4 md:col-start-9", aspect: "aspect-[3/4]", range: [-40, 80] as [number, number], offset: "md:mt-32" },
              { col: "col-span-7 md:col-span-5 md:col-start-2", aspect: "aspect-[4/5]", range: [60, -80] as [number, number], offset: "mt-12 md:mt-24" },
              { col: "col-span-5 md:col-span-4 md:col-start-8", aspect: "aspect-[1/1]", range: [-30, 60] as [number, number], offset: "mt-12 md:mt-48" },
              { col: "col-span-12 md:col-span-9 md:col-start-2", aspect: "aspect-[16/9]", range: [40, -60] as [number, number], offset: "mt-12 md:mt-32" },
              { col: "col-span-12 md:col-span-5 md:col-start-7", aspect: "aspect-[3/4]", range: [-50, 100] as [number, number], offset: "mt-12 md:mt-24" },
            ];
            const p = positions[i];
            return (
              <ParallaxImage
                key={img.id}
                src={img.url}
                alt={img.prompt}
                progress={scrollYProgress}
                range={p.range}
                className={`${p.col} ${p.aspect} ${p.offset}`}
              />
            );
          })}
        </div>
      </section>

      {/* Quiet editorial divider */}
      <section className="bg-espresso text-cream py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <p className="font-mono-label text-cream/50 mb-6">The archive</p>
                <h2 className="font-display text-4xl md:text-6xl leading-tight">
                  Quiet hours, loud<br /><span className="italic text-butterscotch">flavours.</span>
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <Reveal>
                <p className="text-cream/70 leading-relaxed">
                  A rolling collection of moments from the bar — the pours, the plates, the people,
                  and the slow choreography between them.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Archive grid — balanced editorial mosaic with predictable heights */}
      <section className="bg-cream py-32">
        <div className="container-editorial">
          <Reveal>
            <p className="font-mono-label text-foreground/50 mb-6">Recent</p>
            <h2 className="font-display text-4xl md:text-5xl mb-12">From the bar.</h2>
          </Reveal>

          {/* 3-col grid; each tile picks an aspect from a rotating palette so columns end roughly even.
              `grid-auto-flow: dense` packs any leftover gaps automatically. */}
          <div
            className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
            style={{ gridAutoFlow: "dense" }}
          >
            {images.map((img, i) => {
              // Cycle through aspects so columns balance visually
              const aspects = ["aspect-[4/5]", "aspect-[1/1]", "aspect-[3/4]", "aspect-[4/3]", "aspect-[1/1]", "aspect-[4/5]"];
              const aspect = aspects[i % aspects.length];
              return (
                <Reveal
                  key={img.id}
                  delay={(i % 6) * 0.04}
                  className={`overflow-hidden group ${aspect}`}
                >
                  <div className="relative w-full h-full overflow-hidden bg-foreground/5">
                    {!loaded[img.id] && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/10 to-transparent animate-shimmer" />
                    )}
                    <motion.img
                      src={img.url}
                      alt={img.prompt}
                      loading="lazy"
                      onLoad={() => markLoaded(img.id)}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={loaded[img.id] ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.04 }}
                      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full object-cover block group-hover:scale-[1.04] transition-transform duration-1000 ease-out-expo"
                    />
                    {/* Caption overlay — lives inside the tile so it doesn't break the column rhythm */}
                    <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="font-mono-label text-cream/90">{img.prompt}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Gallery;
