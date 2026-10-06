const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-73px)] overflow-hidden bg-[var(--background)]">

      {/* Ambient gradient */}
      <div className="pointer-events-none absolute left-1/2 top-[-25%] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[130px]" />

      {/* Background typography */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="whitespace-nowrap text-[18vw] font-black uppercase tracking-[-0.08em] text-white/[0.025]">
          EVENTIX
        </span>
      </div>

      {/* Grid */}
      <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl flex-col justify-between px-4 py-10 sm:px-6 lg:px-8">

    

        {/* Main content */}
    <div className="relative flex flex-1 items-center py-16 sm:py-20 lg:py-24">
  <div className="max-w-5xl">

    <p className="mb-7 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
      Your world. Your experiences.
    </p>

    <h1 className="max-w-5xl text-[clamp(4rem,9vw,9rem)] font-semibold leading-[0.86] tracking-[-0.065em] text-[var(--text-primary)]">
      Find
      <br />

      <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
        something
      </span>

      <br />

      worth living.
    </h1>
<div className="mt-10 flex flex-col gap-7">
  <p className="max-w-md text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
    Discover concerts, workshops, conferences, sports and
    experiences happening around you.
  </p>

  <a
    href="/events"
    className="group flex w-fit items-center gap-4 border-b border-[var(--primary)] pb-2 text-sm font-medium text-[var(--text-primary)]"
  >
    Explore events
    <span className="transition-transform duration-300 group-hover:translate-x-2">
      →
    </span>
  </a>
</div>
  </div>
</div>
        {/* Bottom information */}
        <div className="flex items-end justify-between border-t border-[var(--border)] pt-5">

          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            <span>01 / Discover</span>
            <span className="hidden sm:block">02 / Experience</span>
            <span className="hidden sm:block">03 / Remember</span>
          </div>

          <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
            Scroll
            <span className="text-[var(--primary)]">↓</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
