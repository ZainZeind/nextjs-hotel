import Link from "next/link";

const RoomPage = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-slate-900 mb-6">
            Our Accommodations
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-stone-600 max-w-2xl mx-auto">
             Immerse yourself in unparalleled comfort. Choose from our selection of luxurious rooms and suites, designed for your ultimate relaxation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Room Card 1 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 overflow-hidden group flex flex-col">
            <div className="h-64 bg-slate-200 relative overflow-hidden">
                 {/* Placeholder for image */}
                 <div className="absolute inset-0 bg-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                Deluxe Room
              </h3>
              <p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                A spacious sanctuary featuring a plush king-size bed and modern amenities, perfect for a rejuvenating escape.
              </p>
              <div className="mt-auto">
                  <p className="text-xl font-bold text-amber-600 mb-6">$150 <span className="text-sm text-stone-400 font-normal">/ night</span></p>
                  <Link href="#" className="block w-full text-center py-3 px-6 text-sm font-bold text-white bg-slate-900 hover:bg-amber-600 transition-colors duration-300 uppercase tracking-widest rounded-lg">
                      Book Now
                  </Link>
              </div>
            </div>
          </div>
          {/* Room Card 2 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 overflow-hidden group flex flex-col">
            <div className="h-64 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                Executive Suite
              </h3>
              <p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                An elegant suite offering distinct living and sleeping areas, coupled with breathtaking panoramic city views.
              </p>
              <div className="mt-auto">
                  <p className="text-xl font-bold text-amber-600 mb-6">$250 <span className="text-sm text-stone-400 font-normal">/ night</span></p>
                   <Link href="#" className="block w-full text-center py-3 px-6 text-sm font-bold text-white bg-slate-900 hover:bg-amber-600 transition-colors duration-300 uppercase tracking-widest rounded-lg">
                      Book Now
                  </Link>
              </div>
            </div>
          </div>
          {/* Room Card 3 */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 overflow-hidden group flex flex-col">
            <div className="h-64 bg-slate-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                Family Suite
              </h3>
              <p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                Expansive accommodation designed for families, featuring multiple beds and generous space for everyone to relax.
              </p>
              <div className="mt-auto">
                  <p className="text-xl font-bold text-amber-600 mb-6">$200 <span className="text-sm text-stone-400 font-normal">/ night</span></p>
                   <Link href="#" className="block w-full text-center py-3 px-6 text-sm font-bold text-white bg-slate-900 hover:bg-amber-600 transition-colors duration-300 uppercase tracking-widest rounded-lg">
                      Book Now
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
