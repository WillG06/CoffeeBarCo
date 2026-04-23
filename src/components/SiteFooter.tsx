import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer className="bg-espresso text-cream relative overflow-hidden">
      <div className="container-editorial pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="font-mono-label text-cream/50 mb-6">Visit</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              12 Temple Row,<br />Birmingham B2 5HG
            </h2>
            <a
              href="tel:07510924313"
              className="mt-8 inline-block font-mono-label text-cream/70 hover:text-cream transition-colors"
            >
              07510 924313
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono-label text-cream/50 mb-6">Hours</p>
            <ul className="space-y-2 text-cream/85">
              <li className="flex justify-between"><span>Mon — Fri</span><span>7:30 — 17:30</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>9:00 — 18:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>10:00 — 16:00</span></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono-label text-cream/50 mb-6">Browse</p>
            <ul className="space-y-2">
              <li><Link to="/menu" className="hover:text-cream text-cream/85 transition-colors">Menu</Link></li>
              <li><Link to="/gallery" className="hover:text-cream text-cream/85 transition-colors">Gallery</Link></li>
              <li><Link to="/story" className="hover:text-cream text-cream/85 transition-colors">Story</Link></li>
              <li><Link to="/visit" className="hover:text-cream text-cream/85 transition-colors">Visit</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono-label text-cream/50 mb-6">Follow</p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-cream/85 hover:text-cream transition-colors"
            >
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-cream/15 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="font-mono-label text-cream/40">
            © {new Date().getFullYear()} The Coffee Bar Collective
          </p>
          <p className="font-mono-label text-cream/40">
            Hard-to-find speciality coffee — Birmingham
          </p>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 font-display text-cream/[0.04] text-[18rem] leading-none select-none"
      >
        Collective
      </div>
    </footer>
  );
};
