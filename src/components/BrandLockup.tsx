type Variant = "light" | "dark";

/**
 * BrandLockup — a crafted monogram + wordmark for The Coffee Bar Collective.
 * Replaces the squashed PNG logo with a vector lockup that feels like an
 * editorial masthead. Two tonal variants for use on cream and ink backgrounds.
 */
export const BrandLockup = ({ variant = "dark" }: { variant?: Variant }) => {
  const isLight = variant === "light";
  const ink = isLight ? "hsl(var(--cream))" : "hsl(var(--ink))";
  const accent = isLight ? "hsl(var(--butterscotch))" : "hsl(var(--irish))";
  const muted = isLight ? "hsl(var(--cream) / 0.55)" : "hsl(var(--ink) / 0.45)";

  return (
    <div className="flex items-center gap-3.5 transition-opacity duration-500 group-hover:opacity-90">
      {/* Monogram — circular wax-seal style, sits next to the wordmark */}
      <div
        className="relative h-11 w-11 shrink-0 rounded-full flex items-center justify-center overflow-hidden"
        style={{
          backgroundColor: ink,
          boxShadow: isLight
            ? "0 0 0 1px hsl(var(--cream) / 0.3)"
            : "0 0 0 1px hsl(var(--ink) / 0.06), 0 6px 18px -10px hsl(var(--ink) / 0.4)",
        }}
      >
        {/* Inner ring */}
        <div
          aria-hidden
          className="absolute inset-[3px] rounded-full border"
          style={{ borderColor: isLight ? "hsl(var(--ink) / 0.55)" : "hsl(var(--cream) / 0.35)" }}
        />
        {/* CBC monogram in serif */}
        <span
          className="relative font-display text-[15px] leading-none tracking-[-0.02em] translate-y-[0.5px]"
          style={{ color: isLight ? "hsl(var(--ink))" : "hsl(var(--cream))" }}
        >
          C<span style={{ color: accent }}>·</span>C
        </span>
      </div>

      {/* Wordmark — two-tier editorial lockup */}
      <div className="hidden sm:flex flex-col leading-none">
        <span
          className="font-display text-[1.05rem] md:text-[1.15rem] tracking-[-0.015em]"
          style={{ color: ink }}
        >
          The Coffee Bar
        </span>
        <span
          className="font-mono-label mt-1.5 text-[0.58rem] flex items-center gap-1.5"
          style={{ color: muted }}
        >
          <span>Collective</span>
          <span aria-hidden style={{ color: accent }}>·</span>
          <span>BHX</span>
        </span>
      </div>
    </div>
  );
};
