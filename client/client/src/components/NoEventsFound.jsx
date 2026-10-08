import React from "react";

const NoEventsFound = () => {
  return (
    <div>
      {/* No Events Found */}
      <div className="flex min-h-[320px] flex-col items-center justify-center border-t border-[var(--border)] text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]">
          <span className="text-2xl text-[var(--text-secondary)]">⌕</span>
        </div>

        <h3 className="text-xl font-semibold text-[var(--text-primary)]">
          No events found
        </h3>

        <p className="mt-2 max-w-md text-sm leading-6 text-[var(--text-secondary)]">
          We couldn’t find any events matching your search. Try changing your
          search or selecting a different category.
        </p>

        <button
          type="button"
          className="mt-6 border-b border-[var(--primary)] pb-1 text-sm font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--primary)]"
        >
          Clear filters →
        </button>
      </div>
    </div>
  );
};

export default NoEventsFound;
