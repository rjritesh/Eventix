
const events = [
  {
    title: "Live Music Festival",
    description: "A night of live music, great artists and unforgettable energy.",
    date: "OCT 24 · 2026",
    location: "Mumbai",
    category: "Music",
    totalSeats: 500,
    availableSeats: 124,
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80",
    ticketPrice: 1299,
  },
  {
    title: "Tech & Innovation Conference",
    description: "Explore emerging technology, ideas and the future of innovation.",
    date: "NOV 02 · 2026",
    location: "Bengaluru",
    category: "Technology",
    totalSeats: 300,
    availableSeats: 86,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
    ticketPrice: 999,
  },
  {
    title: "Art & Culture Experience",
    description: "A celebration of art, creativity and local culture.",
    date: "NOV 15 · 2026",
    location: "Kolkata",
    category: "Arts & Culture",
    totalSeats: 200,
    availableSeats: 42,
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=80",
    ticketPrice: 799,
  },
  {
    title: "Championship Night",
    description: "Experience the excitement of live competitive sports.",
    date: "NOV 21 · 2026",
    location: "Delhi",
    category: "Sports",
    totalSeats: 1000,
    availableSeats: 318,
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80",
    ticketPrice: 1499,
  },
  {
    title: "Business Leaders Summit",
    description: "Connect with ambitious minds, founders and industry leaders.",
    date: "DEC 05 · 2026",
    location: "Hyderabad",
    category: "Business",
    totalSeats: 250,
    availableSeats: 67,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    ticketPrice: 1199,
  },
  {
    title: "Creative Design Workshop",
    description: "Learn, create and explore new ways of thinking.",
    date: "DEC 12 · 2026",
    location: "Pune",
    category: "Workshops",
    totalSeats: 100,
    availableSeats: 23,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80",
    ticketPrice: 699,
  },
];

const categories = [
  "All",
  "Music",
  "Technology",
  "Sports",
  "Arts & Culture",
  "Business",
  "Workshops",
];

const Events = () => {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Events
          </p>

          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
              Discover something worth experiencing.
            </h1>

            <p className="max-w-md text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
              Explore concerts, conferences, sports, workshops and more.
              Find your next experience.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            {/* Search */}
            <div className="relative w-full lg:max-w-sm">
              <input
                type="text"
                placeholder="Search events..."
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none placeholder:text-[var(--text-secondary)] focus:border-[var(--primary)]"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-1">
              {categories.map((category, index) => (
                <button
                  key={category}
                  type="button"
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                    index === 0
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                      : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">

          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-[var(--text-secondary)]">
              Showing {events.length} events
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.title}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-950/20"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Category */}
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    {event.category}
                  </span>

                  {/* Date */}
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    {event.date}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                    {event.title}
                  </h2>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--text-secondary)]">
                    {event.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--primary)]">●</span>
                    {event.location}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                        Starting from
                      </p>

                      <p className="mt-1 text-base font-semibold text-[var(--text-primary)]">
                        ₹{event.ticketPrice}
                      </p>
                    </div>

                    <p className="text-xs text-[var(--text-secondary)]">
                      {event.availableSeats} seats left
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Events;

