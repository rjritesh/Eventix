import { useEffect, useState } from "react";

const FeaturedEvents = () => {
  const [featuredEvents, setFeaturedEvenet] = useState([]);

useEffect(() => {
  const fetchFeaturedEvents = async () => {
    try {
      const res = await fetch("http://localhost:2000/api/events/featured");

      if (!res.ok) {
        throw new Error("Failed to fetch featured events");
      }
      const events = await res.json();
      setFeaturedEvenet(events);
    } catch (error) {
      console.error(error);
    }
  };

  fetchFeaturedEvents();
}, []);


  return (
    <section className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* Section Header */}
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              Featured Events
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Discover what's happening.
            </h2>
          </div>

          <a
            href="/events"
            className="group flex w-fit items-center gap-3 border-b border-[var(--primary)] pb-2 text-sm font-medium text-[var(--text-primary)]"
          >
            View all events
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>

        {/* Event Grid */}
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {featuredEvents.map((event) => (
            <article
              key={event.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-950/20"
            >
              {/* Event Image */}
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Image Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Category */}
                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    {event.category}
                  </span>
                </div>

                {/* Date */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    {event.date}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                  {event.title}
                </h3>

                {/* Location */}
                <p className="mt-2 flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--primary)]">●</span>
                  {event.location}
                </p>

                {/* Available Seats */}
                <p className="mt-3 text-xs text-[var(--text-secondary)]">
                  {event.availableSeats} seats available
                </p>

                {/* Price + Arrow */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                      Starting from
                    </p>

                    <p className="mt-1 text-base font-semibold text-[var(--text-primary)]">
                      ₹{event.ticketPrice}
                    </p>
                  </div>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[var(--text-primary)] transition-all duration-300 group-hover:border-[var(--primary)] group-hover:bg-[var(--primary)]">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
