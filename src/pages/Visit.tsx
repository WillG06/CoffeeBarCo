import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Phone, Globe, MapPin, Coffee, Wifi, Train, Car } from "lucide-react";
import doorway from "@/assets/visit-doorway.jpg";
import interiorWide from "@/assets/visit-interior-wide.jpg";
import storefront from "@/assets/storefront.jpg";
import barista from "@/assets/barista.jpg";

const HOURS = [
  ["Monday", "7:30 — 17:30"],
  ["Tuesday", "7:30 — 17:30"],
  ["Wednesday", "7:30 — 17:30"],
  ["Thursday", "7:30 — 17:30"],
  ["Friday", "7:30 — 17:30"],
  ["Saturday", "9:00 — 18:00"],
  ["Sunday", "10:00 — 16:00"],
] as const;

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-[85svh] min-h-[560px] w-full overflow-hidden bg-ink">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={interiorWide}
          alt="Interior of The Coffee Bar Collective at golden hour"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="absolute inset-0 bg-gradient-veil" />
      </motion.div>

      <div className="relative z-10 container-editorial h-full flex flex-col justify-end pb-20 md:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono-label text-cream/70 mb-6"
        >
          Visit — 12 Temple Row · Birmingham
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-cream text-[clamp(3rem,9vw,9rem)] leading-[0.95] max-w-[14ch]"
        >
          Come on <span className="italic text-butterscotch">in.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-md text-lg text-cream/85 leading-relaxed"
        >
          Tucked between the cathedral and the morning rush.
          Look for the black-fronted bar — we're warmer inside.
        </motion.p>
      </div>
    </section>
  );
};

const InfoColumn = () => (
  <div className="space-y-10">
    {[
      {
        icon: <MapPin size={18} />,
        label: "Address",
        primary: <>12 Temple Row<br />Birmingham B2 5HG</>,
        cta: { text: "Open in Maps", href: "https://www.google.com/maps/place/The+Coffee+Bar+Collective" },
      },
      {
        icon: <Phone size={18} />,
        label: "Phone",
        primary: <>07510 924313</>,
        cta: { text: "Ring the bar", href: "tel:07510924313" },
      },
      {
        icon: <Globe size={18} />,
        label: "Online",
        primary: <>thecoffeebarcollective.co.uk</>,
        cta: { text: "Visit website", href: "https://thecoffeebarcollective.co.uk" },
      },
    ].map((item, i) => (
      <Reveal key={i} delay={i * 0.08}>
        <div className="border-t border-cream/15 pt-6">
          <div className="flex items-center gap-3 text-cream/55 mb-3">
            {item.icon}
            <p className="font-mono-label">{item.label}</p>
          </div>
          <p className="font-display text-2xl md:text-3xl leading-tight text-cream">{item.primary}</p>
          <a
            href={item.cta.href}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 font-mono-label text-butterscotch border-b border-butterscotch/40 hover:border-butterscotch pb-1 transition-colors"
          >
            {item.cta.text} →
          </a>
        </div>
      </Reveal>
    ))}
  </div>
);

const MapBlock = () => (
  <div className="relative aspect-[4/5] md:aspect-auto md:h-full overflow-hidden border border-cream/10 group">
    <iframe
      title="Map to The Coffee Bar Collective"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.8673923844117!2d-1.899181323321216!3d52.48153667205118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bda9dbdb06c9%3A0xd47750eb070fd68!2sThe%20Coffee%20Bar%20Collective!5e0!3m2!1sen!2suk!4v1776877761524!5m2!1sen!2suk"
      className="h-full w-full grayscale-[40%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-1000"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
    {/* Floating address pill */}
    <div className="pointer-events-none absolute top-4 left-4 bg-cream/95 backdrop-blur px-4 py-3 max-w-[220px] shadow-soft">
      <p className="font-mono-label text-foreground/50 mb-1">You'll find us</p>
      <p className="font-display text-base leading-tight">12 Temple Row, B2 5HG</p>
    </div>
  </div>
);

const Visit = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: parallaxRef, offset: ["start end", "end start"] });
  const doorY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const storeY = useTransform(scrollYProgress, [0, 1], [-40, 60]);
  const doorScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <SiteLayout>
      <Hero />

      {/* Map + contact — split editorial layout */}
      <section className="bg-espresso text-cream py-24 md:py-32">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-end mb-14">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <p className="font-mono-label text-cream/50 mb-6">Find us</p>
                <h2 className="font-display text-[clamp(2.25rem,5vw,5rem)] leading-[1.02]">
                  Temple Row,<br />
                  <span className="italic text-butterscotch">central Birmingham.</span>
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <Reveal delay={0.1}>
                <p className="text-cream/75 leading-relaxed">
                  Two minutes from Snow Hill, four from Grand Central. Walk past the cathedral —
                  we're the small black bar with the warm glow inside.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <Reveal className="col-span-12 md:col-span-7 min-h-[460px] md:min-h-[560px]">
              <MapBlock />
            </Reveal>
            <div className="col-span-12 md:col-span-4 md:col-start-9">
              <InfoColumn />
            </div>
          </div>
        </div>
      </section>

      {/* Parallax editorial — doorway + storefront */}
      <section ref={parallaxRef} className="relative bg-cream py-32 md:py-44 overflow-hidden">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 items-start mb-16">
            <div className="col-span-12 md:col-span-6">
              <Reveal>
                <p className="font-mono-label text-foreground/50 mb-6">Step inside</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display text-[clamp(2.25rem,5.5vw,5.5rem)] leading-[1.02] max-w-[14ch]">
                  Small room, <span className="italic text-irish">huge welcome.</span>
                </h2>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
              <Reveal delay={0.1}>
                <p className="text-foreground/75 leading-relaxed">
                  Edison bulbs, exposed brick, a counter built for conversation. The kind of room
                  where the barista remembers your order — and asks how your morning's going.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 relative">
            <motion.div
              style={{ y: doorY }}
              className="col-span-7 md:col-span-5 aspect-[3/4] overflow-hidden relative z-10"
            >
              <motion.img
                style={{ scale: doorScale }}
                src={doorway}
                alt="The black-fronted doorway of The Coffee Bar Collective"
                className="h-full w-full object-cover will-change-transform"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              style={{ y: storeY }}
              className="col-span-5 md:col-span-6 md:col-start-7 aspect-[4/5] overflow-hidden mt-20 md:mt-32"
            >
              <img
                src={storefront}
                alt="Storefront on Temple Row"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hours — editorial split */}
      <section className="bg-cream pb-24">
        <div className="container-editorial">
          <div className="grid grid-cols-12 gap-6 items-start">
            <div className="col-span-12 md:col-span-5">
              <Reveal>
                <p className="font-mono-label text-foreground/50 mb-6">Hours</p>
                <h2 className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.02]">
                  Open <span className="italic text-irish">daily.</span>
                </h2>
                <p className="mt-6 text-foreground/70 max-w-sm leading-relaxed">
                  Pull up early for the breakfast rush, or late for an afternoon
                  affogato. We're here either way.
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7">
              <Reveal>
                <ul className="divide-y divide-foreground/15 border-y border-foreground/15">
                  {HOURS.map(([d, t]) => (
                    <li key={d} className="flex justify-between items-baseline py-5 text-lg">
                      <span className="text-foreground/65">{d}</span>
                      <span className="font-display text-xl">{t}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What to expect — small editorial chips */}
      <section className="bg-cream pb-32">
        <div className="container-editorial">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-foreground/15 border border-foreground/15">
            {[
              { icon: <Coffee size={20} />, label: "Speciality coffee", note: "Hand-dialled, daily" },
              { icon: <Wifi size={20} />, label: "Free Wi-Fi", note: "Strong, reliable" },
              { icon: <Train size={20} />, label: "Snow Hill 2 min", note: "Grand Central 4 min" },
              { icon: <Car size={20} />, label: "NCP Snow Hill", note: "60s walk away" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-cream p-6 md:p-8 h-full">
                  <div className="text-irish mb-5">{item.icon}</div>
                  <p className="font-display text-xl leading-tight">{item.label}</p>
                  <p className="mt-2 font-mono-label text-foreground/45">{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative bg-espresso text-cream py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <img src={barista} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/80 to-transparent" />
        <div className="container-editorial relative">
          <Reveal>
            <p className="font-mono-label text-cream/60 mb-6">See you soon</p>
            <h2 className="font-display text-[clamp(2.25rem,6vw,6rem)] leading-[0.98] max-w-[16ch]">
              The kettle's on.<br />
              <span className="italic text-butterscotch">Pull up a stool.</span>
            </h2>
            <div className="mt-10 flex flex-col md:flex-row gap-4">
              <a
                href="https://www.google.com/maps/place/The+Coffee+Bar+Collective"
                target="_blank"
                rel="noreferrer"
                className="font-mono-label px-6 py-4 bg-cream text-ink hover:bg-butterscotch hover:text-cream transition-all duration-500 ease-out-expo inline-flex items-center justify-center"
              >
                Get directions →
              </a>
              <a
                href="tel:07510924313"
                className="font-mono-label px-6 py-4 border border-cream/40 text-cream hover:bg-cream hover:text-ink transition-all duration-500 ease-out-expo inline-flex items-center justify-center"
              >
                Call 07510 924313
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Visit;
