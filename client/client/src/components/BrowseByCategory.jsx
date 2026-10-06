
const categories = [
  {
    number: "01",
    name: "Music",
    description: "Live shows & festivals",
  },
  {
    number: "02",
    name: "Technology",
    description: "Conferences & innovation",
  },
  {
    number: "03",
    name: "Sports",
    description: "Matches & live experiences",
  },
  {
    number: "04",
    name: "Arts & Culture",
    description: "Art, theatre & culture",
  },
  {
    number: "05",
    name: "Business",
    description: "Networking & ideas",
  },
  {
    number: "06",
    name: "Workshops",
    description: "Learn something new",
  },
];

const BrowseByCategory = () => {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

        {/* Section Header */}
        <div className="mb-14 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              Explore by interest
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[var(--text-primary)] sm:text-5xl">
              Experiences built around what you enjoy.
            </h2>
          </div>

          <div className="flex items-end lg:justify-end">
            <p className="max-w-sm text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
              From live music to technology, discover events that match your
              interests and make your next experience worth remembering.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="border-t border-[var(--border)]">
          {categories.map((category) => (
            <a
              key={category.number}
              href={`/events?category=${encodeURIComponent(category.name)}`}
              className="group grid grid-cols-[48px_1fr_auto] items-center gap-5 border-b border-[var(--border)] py-6 transition-all duration-300 hover:px-3 sm:grid-cols-[64px_1fr_1fr_auto] sm:gap-6"
            >
              {/* Number */}
              <span className="text-xs font-medium tracking-widest text-[var(--text-secondary)]">
                {category.number}
              </span>

              {/* Category */}
              <h3 className="text-lg font-medium tracking-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--primary)] sm:text-xl">
                {category.name}
              </h3>

              {/* Description */}
              <p className="hidden text-sm text-[var(--text-secondary)] sm:block">
                {category.description}
              </p>

              {/* Arrow */}
              <span className="text-xl text-[var(--text-secondary)] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[var(--primary)]">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
