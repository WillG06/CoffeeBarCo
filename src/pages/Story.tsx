import { SiteLayout } from "@/components/SiteLayout";
import { Reveal } from "@/components/Reveal";
import interior from "@/assets/interior.jpg";
import barista from "@/assets/barista.jpg";
import beans from "@/assets/beans.jpg";

const Story = () => (
  <SiteLayout>
    <section className="bg-cream pt-40 pb-20 md:pt-52">
      <div className="container-editorial">
        <Reveal>
          <p className="font-mono-label text-foreground/50 mb-6">The story</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-[clamp(2.75rem,8vw,8rem)] leading-[0.95] max-w-[14ch]">
            Good coffee. Good people. <span className="italic text-irish">Good vibes.</span>
          </h1>
        </Reveal>
      </div>
    </section>

    <section className="bg-cream pb-32">
      <div className="container-editorial grid grid-cols-12 gap-6 items-start">
        <Reveal className="col-span-12 md:col-span-7 aspect-[4/3] overflow-hidden">
          <img src={interior} alt="Coffee Bar interior at golden hour" className="h-full w-full object-cover" loading="lazy" />
        </Reveal>
        <div className="col-span-12 md:col-span-4 md:col-start-9 md:mt-24">
          <Reveal>
            <p className="font-mono-label text-foreground/50 mb-4">01</p>
            <p className="text-lg leading-relaxed text-foreground/80">
              The Coffee Bar Collective opened on Temple Row with a simple idea: make speciality
              coffee feel like home. No pretence, no jargon — just hand-dialled espresso, hard-to-find
              beans, and a welcome that lasts longer than the cup.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    <section className="bg-espresso text-cream py-32">
      <div className="container-editorial grid grid-cols-12 gap-6 items-start">
        <div className="col-span-12 md:col-span-5">
          <Reveal>
            <p className="font-mono-label text-cream/50 mb-4">02</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight">
              A Birmingham<br />ritual.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 max-w-md text-cream/80 leading-relaxed text-lg">
              Mornings on Temple Row begin the same way: the grinder humming, the cathedral bells
              keeping time, the regulars filing in for the cup that sets the day in motion. We've
              built our whole place around that small, generous moment — the one between order and
              first sip.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-md text-cream/65 leading-relaxed">
              No queues that feel like queues. No drinks that feel made in a hurry. Just the same
              quiet care, every cup, every day — whether it's your first visit or your five-hundredth.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-14 grid grid-cols-3 gap-4 max-w-md border-t border-cream/15 pt-8">
              <div>
                <p className="font-display text-3xl md:text-4xl text-butterscotch">7:30</p>
                <p className="font-mono-label text-cream/55 mt-2">First pour, daily</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-butterscotch">1.2k</p>
                <p className="font-mono-label text-cream/55 mt-2">Five-star reviews</p>
              </div>
              <div>
                <p className="font-display text-3xl md:text-4xl text-butterscotch">12</p>
                <p className="font-mono-label text-cream/55 mt-2">Temple Row</p>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal className="col-span-12 md:col-span-6 md:col-start-7 aspect-[3/4] overflow-hidden">
          <img src={barista} alt="Barista at the bar" className="h-full w-full object-cover" loading="lazy" />
        </Reveal>
      </div>
    </section>

    <section className="bg-cream py-32">
      <div className="container-editorial grid grid-cols-12 gap-6 items-center">
        <Reveal className="col-span-12 md:col-span-5 aspect-[3/4] overflow-hidden">
          <img src={beans} alt="Roasted beans" className="h-full w-full object-cover" loading="lazy" />
        </Reveal>
        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <Reveal>
            <p className="font-mono-label text-foreground/50 mb-4">03 — The bean</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-8">
              Curious about flavour, always.
            </h2>
            <p className="text-foreground/75 leading-relaxed">
              Our guest roasters change every few weeks. Expect single-origin lots from
              East Africa, Central America and beyond — chosen for the moments they create,
              not the names on the bag.
            </p>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Reviews */}
    <section className="bg-espresso text-cream py-32">
      <div className="container-editorial">
        <Reveal>
          <p className="font-mono-label text-cream/50 mb-6 text-center">Said about us</p>
          <p className="font-display text-center text-7xl md:text-9xl text-butterscotch">4.9</p>
          <p className="font-mono-label text-center text-cream/60 mt-2">1,261 reviews · Google</p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { q: "Superb customer experience backed up by care, attention and precision.", a: "Mark Hetherington" },
            { q: "Great experience from start to finish — they even asked the temperature of our coffee.", a: "Danni & Alec" },
            { q: "If every cafe welcomed you like this place, we'd have one of the best industries in the world.", a: "Martin Hand" },
          ].map((r, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="font-display text-2xl leading-snug">"{r.q}"</p>
              <p className="font-mono-label text-cream/50 mt-6">— {r.a}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default Story;
