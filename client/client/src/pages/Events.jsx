import { useState } from "react";
import { Link } from "react-router-dom";
import NoEventsFound from "../components/NoEventsFound";
import { useEffect } from "react";
import Loader from "../components/Loader";

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
  const [searchEvents, setSearchEvents] = useState("");
  const [selectCategory, setSelectCategory] = useState("All");
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchEvents.toLocaleLowerCase()) &&
      (selectCategory === "All" || event.category === selectCategory),
  );


useEffect(() => {
  const fetchEvents = async () => {
    try {
      const res = await fetch("http://localhost:2000/api/events");

      if (!res.ok) {
        throw new Error("Failed to fetch events");
      }

      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  fetchEvents();
}, []);


  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-[-300px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-20 lg:pt-28">
          {/* <Link
          to="/"
          className="group mb-8 inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
        >
          <span className="text-lg transition-transform duration-200 group-hover:-translate-x-1">
            ←
          </span>
          <span>Back</span>
        </Link> */}
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            {/* Heading */}
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[var(--primary)]" />

                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
                  Discover
                </p>
              </div>

              <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] text-[var(--text-primary)] sm:text-6xl lg:text-8xl">
                Find your
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                  next experience.
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className="max-w-sm lg:pb-2">
              <p className="text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                Explore experiences worth showing up for - from live music and
                sports to technology, culture and ideas.
              </p>
            </div>
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
                value={searchEvents}
                onChange={(e) => setSearchEvents(e.target.value)}
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
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs font-medium transition-colors cursor-pointer  ${
                    selectCategory === category
                      ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                      : "border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--primary)] hover:text-[var(--text-primary)]"
                  }`}
                  onClick={() => setSelectCategory(category)}
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
          {isLoading ? (
            <Loader />
          ) : filteredEvents.length === 0 ? (
            <NoEventsFound />
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <Link
                  to={`/events/${event._id}`}
                  key={event._id}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-2xl hover:shadow-violet-950/20"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image || null}
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
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Events;
