import { useParams, Link } from "react-router-dom";
import { data } from "../data/Events";

const EventDetails = () => {
  const {id} = useParams()

const event = data.find((event)=> event.id === Number(id))
  return (
    <main className="min-h-screen bg-[var(--background)]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--border)]">
        <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[150px]" />

        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-16">
          {/* Back */}
          <Link
            to="/events"
            className="group mb-8 inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            <span className="text-lg transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>
            Back to events
          </Link>

          {/* Image */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <img
              src={event.image}
              alt={event.title}
              className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
              <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                {event.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Event information */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8 lg:py-20">
          {/* Main content */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
              {event.date}
            </p>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.045em] text-[var(--text-primary)] sm:text-5xl lg:text-7xl">
              {event.title}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
              {event.description}
            </p>

            {/* Event information */}
            <div className="mt-12 grid gap-6 border-y border-[var(--border)] py-8 sm:grid-cols-2">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Date
                </p>

                <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                  {event.date}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Time
                </p>

                <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                  {event.time}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Location
                </p>

                <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                  {event.location}
                </p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  Category
                </p>

                <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">
                  {event.category}
                </p>
              </div>
            </div>

            {/* About */}
            <div className="mt-12">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
                About this event
              </p>

              <h2 className="text-2xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                An experience worth showing up for.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
                Join us for an exciting evening filled with music, energy and
                unforgettable moments. Whether you're coming with friends or
                discovering something new, this experience is designed to make
                your night memorable.
              </p>
            </div>
          </div>

          {/* Booking card */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-white/10 bg-[var(--surface)] p-6 shadow-2xl shadow-black/20 sm:p-7">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                    Ticket price
                  </p>

                  <p className="mt-2 text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
                    ₹{event.ticketPrice}
                  </p>
                </div>

                <span className="text-xs text-[var(--text-secondary)]">
                  per person
                </span>
              </div>

              <div className="my-6 h-px bg-[var(--border)]" />

              {/* Availability */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-[var(--text-secondary)]">
                  Available seats
                </span>

                <span className="text-sm font-semibold text-[var(--text-primary)]">
                  {event.availableSeats}
                </span>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[var(--primary)]"
                  style={{
                    width: `${
                      (event.availableSeats / event.totalSeats) * 100
                    }%`,
                  }}
                />
              </div>

              <p className="mt-2 text-xs text-[var(--text-secondary)]">
                {event.totalSeats} total seats
              </p>

              {/* Booking button */}
              <button
                type="button"
                className="mt-7 w-full rounded-lg bg-[var(--primary)] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--primary-hover)]"
              >
                Book this event
              </button>

              <p className="mt-4 text-center text-xs leading-5 text-[var(--text-secondary)]">
                Secure booking · Instant confirmation
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default EventDetails;