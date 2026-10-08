const GetInTouch = () => {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--primary)]">
            Get in touch
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Let&apos;s start a
            <br />
            <span className="text-[var(--text-secondary)]">
              conversation.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
            Have a question, need help with an event, or want to know more?
            Fill out the form below and we&apos;ll get back to you.
          </p>
        </div>

        {/* Contact Form */}
        <form className="max-w-4xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8 lg:p-10">
          <div className="mb-8">
            <h3 className="text-lg font-medium text-[var(--text-primary)]">
              Contact Form
            </h3>

            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              We&apos;d love to hear from you.
            </p>
          </div>

          {/* Name + Email */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-slate-600 focus:border-[var(--primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-slate-600 focus:border-[var(--primary)]"
              />
            </div>
          </div>

          {/* Subject */}
          <div className="mt-6">
            <label
              htmlFor="subject"
              className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
            >
              Subject
            </label>

            <input
              id="subject"
              type="text"
              placeholder="What can we help you with?"
              className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-slate-600 focus:border-[var(--primary)]"
            />
          </div>

          {/* Message */}
          <div className="mt-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
            >
              Message
            </label>

            <textarea
              id="message"
              rows="5"
              placeholder="Tell us how we can help..."
              className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-slate-600 focus:border-[var(--primary)]"
            />
          </div>

          {/* Submit */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="rounded-lg bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--primary-hover)]"
            >
              Send Message →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;