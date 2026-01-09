const AdminDashboardPage = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h1 className="text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
            Dashboard Overview
          </h1>
          <p className="text-lg text-stone-600">
            Welcome back, Admin. Here's what's happening today.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Total Bookings */}
          <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-2">
              Total Bookings
            </h3>
            <p className="text-3xl font-serif font-bold text-slate-900">150</p>
          </div>
          {/* Card 2: Revenue */}
          <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-2">
              Revenue
            </h3>
            <p className="text-3xl font-serif font-bold text-amber-600">$45,000</p>
          </div>
          {/* Card 3: New Guests */}
          <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-2">
              New Guests
            </h3>
            <p className="text-3xl font-serif font-bold text-slate-900">32</p>
          </div>
          {/* Card 4: Rooms Available */}
          <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-6 hover:shadow-md transition-shadow">
            <h3 className="text-sm font-medium text-stone-500 uppercase tracking-wider mb-2">
              Rooms Available
            </h3>
            <p className="text-3xl font-serif font-bold text-slate-900">12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
