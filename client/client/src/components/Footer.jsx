
const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="/"
              className="text-2xl font-bold tracking-tight text-[var(--text-primary)]"
            >
              Event<span className="text-[var(--primary)]">ix</span>
            </a>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--text-secondary)]">
              Discover concerts, workshops, conferences, sports and
              experiences worth remembering.
            </p>
          </div>

          {/* Explore */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--text-secondary)]">
              Explore
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="/events"
                className="w-fit text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                Events
              </a>

              <a
                href="/events?category=Music"
                className="w-fit text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                Music
              </a>

              <a
                href="/events?category=Technology"
                className="w-fit text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                Technology
              </a>

              <a
                href="/events?category=Sports"
                className="w-fit text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                Sports
              </a>
            </div>
          </div>

          {/* Account */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--text-secondary)]">
              Account
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <a
                href="/login"
                className="w-fit text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                Login
              </a>

              <a
                href="/signup"
                className="w-fit text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                Create account
              </a>

              <a
                href="/bookings"
                className="w-fit text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                My Bookings
              </a>

              <a
                href="/profile"
                className="w-fit text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
              >
                Profile
              </a>
            </div>
          </div>
        </div>

  
{/* Bottom */}
<div className="mt-16 flex flex-col gap-4 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
  <p className="text-xs text-[var(--text-secondary)]">
    © 2026 Eventix · Built by Ritesh Jha
  </p>

  <div className="flex gap-6">
    <a
      href="/privacy"
      className="text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
    >
      Privacy
    </a>

    <a
      href="/terms"
      className="text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
    >
      Terms
    </a>

    <a
      href="/contact"
      className="text-xs text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
    >
      Contact
    </a>
  </div>
</div>


      </div>
    </footer>
  );
};

export default Footer;
