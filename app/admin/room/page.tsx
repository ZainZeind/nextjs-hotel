const AdminRoomPage = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-3xl font-serif font-bold tracking-tight text-slate-900 sm:text-4xl">
            Manage Rooms
          </h1>
          <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-md text-sm font-bold text-white bg-slate-900 hover:bg-amber-600 transition-colors uppercase tracking-wider">
            Add Room
          </button>
        </div>
        <div className="bg-white shadow-sm rounded-xl border border-stone-100 overflow-hidden">
          <table className="min-w-full divide-y divide-stone-100">
            <thead className="bg-stone-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-wider"
                >
                  Room Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-left text-xs font-bold text-stone-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th scope="col" className="relative px-6 py-4">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-stone-100">
              {/* Room 1 */}
              <tr className="hover:bg-stone-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                  Deluxe Room
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
                  $150
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Available
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-amber-600 hover:text-amber-800 font-bold">
                    Edit
                  </a>
                </td>
              </tr>
              {/* Room 2 */}
              <tr className="hover:bg-stone-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                  Suite
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-600">
                  $250
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                   <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Booked
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-amber-600 hover:text-amber-800 font-bold">
                    Edit
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminRoomPage;
