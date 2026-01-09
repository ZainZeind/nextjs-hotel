const MyReservationPage = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-slate-900 mb-6">
            My Reservations
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-600">
             Manage your upcoming stays and view booking details.
          </p>
        </div>
        <div className="mt-12 bg-white shadow-sm rounded-xl border border-stone-100 overflow-hidden max-w-4xl mx-auto">
          <ul className="divide-y divide-stone-100">
            {/* Reservation 1 */}
            <li className="px-6 py-6 hover:bg-stone-50 transition-colors">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xl font-serif font-bold text-slate-900 mb-1">
                    Deluxe Room
                  </p>
                  <p className="text-sm text-stone-500 font-medium">
                    Check-in: <span className="text-slate-700">Aug 15, 2024</span> | Check-out: <span className="text-slate-700">Aug 20, 2024</span>
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-2xl font-bold text-amber-600">$750</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                    Confirmed
                  </span>
                </div>
              </div>
            </li>
            {/* Reservation 2 */}
            <li className="px-6 py-6 hover:bg-stone-50 transition-colors">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xl font-serif font-bold text-slate-900 mb-1">
                    Suite
                  </p>
                  <p className="text-sm text-stone-500 font-medium">
                    Check-in: <span className="text-slate-700">Sep 10, 2024</span> | Check-out: <span className="text-slate-700">Sep 12, 2024</span>
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-2xl font-bold text-amber-600">$500</p>
                   <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mt-1">
                    Pending
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyReservationPage;
