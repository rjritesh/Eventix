const Loader = () => {
  return (
    <div className="flex min-h-[60vh] w-full flex-col items-center justify-center bg-[var(--background)] px-4">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-violet-500/20" />

        <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-violet-500 border-r-violet-400" />

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 shadow-lg shadow-violet-500/10">
          <svg
            className="h-6 w-6 text-violet-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3.5" y="5" width="17" height="16" rx="3" />
            <path d="M16 3v4M8 3v4M3.5 10h17" />
            <path d="m9 15 2 2 4-4" />
          </svg>
        </div>
      </div>

      <h2 className="mt-7 text-lg font-semibold tracking-tight text-[var(--text-primary)] sm:text-xl">
        Getting things ready
      </h2>

      <p className="mt-2 max-w-xs text-center text-sm leading-6 text-[var(--text-secondary)]">
        Hang tight while we prepare your experience.
      </p>

      <div className="mt-6 h-1 w-32 overflow-hidden rounded-full bg-violet-500/10">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-400" />
      </div>
    </div>
  );
};

export default Loader;