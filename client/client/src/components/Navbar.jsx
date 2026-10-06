
const Navbar = () => {
  return (
    <header className="border-b border-(--border) bg-(--background)">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-tight text-(--text-primary)"
        >
          Event<span className="text-(--primary)">ix</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-medium text-(--text-primary) transition hover:text-(--primary)"
          >
            Home 
          </a>

          <a
            href="/events"
            className="text-sm font-medium text-(--text-secondary) transition hover:text-(--primary)"
          >
            Events
          </a>

          <a
            href="/bookings"
            className="text-sm font-medium text-(--text-secondary) transition hover:text-(--primary)"
          >
            My Bookings
          </a>
        </div>

        {/* Desktop Auth */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-(--text-secondary) transition hover:text-(--text-primary)"
          >
            Login
          </a>

          <a
            href="/signup"
            className="rounded-lg bg-(--primary) px-4 py-2 text-sm font-semibold text-white transition hover:bg-(--primary-hover)"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Open menu"
          className="rounded-lg p-2 text-(--text-secondary) transition hover:bg-(--surface) hover:text-(--text-primary) md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

