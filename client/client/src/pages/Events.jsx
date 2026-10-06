
const Events = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Upcoming Events
        </h1>

        <p className="mb-8 text-gray-600">
          Discover and book your favorite events.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Event cards will come here */}
        </div>
      </div>
    </div>
  );
};

export default Events;
