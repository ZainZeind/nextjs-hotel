import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function RoomPage() {
  const supabase = await createClient();
  const { data: rooms, error } = await supabase.from("rooms").select("*").order('id');

  if (error) {
    console.error("Error fetching rooms:", error);
  }

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
          {rooms?.map((room) => (
            <div key={room.id} className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 overflow-hidden group flex flex-col">
              <div className="h-64 bg-slate-200 relative overflow-hidden">
                {room.image_url ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img 
                    src={room.image_url} 
                    alt={room.name} 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  /* Placeholder for image */
                  <div className="absolute inset-0 bg-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
                )}
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {room.name}
                </h3>
                <p className="text-stone-600 mb-6 flex-grow leading-relaxed">
                  {room.description}
                </p>
                <div className="mt-auto">
                  <p className="text-xl font-bold text-amber-600 mb-6">
                    ${room.price_per_night} <span className="text-sm text-stone-400 font-normal">/ night</span>
                  </p>
                  <Link
                    href={`/room/${room.id}`}
                    className="block w-full text-center py-3 px-6 text-sm font-bold text-white bg-slate-900 hover:bg-amber-600 transition-colors duration-300 uppercase tracking-widest rounded-lg"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}