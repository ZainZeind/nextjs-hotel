import { createClient } from "@/utils/supabase/server";
import { bookRoom } from "./actions";
import { notFound } from "next/navigation";

export default async function RoomDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: room, error } = await supabase
    .from("rooms")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !room) {
    notFound();
  }

  return (
    <div className="bg-stone-50 min-h-screen py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100 flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-1/2 relative h-64 lg:h-auto bg-slate-200">
             {room.image_url ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img 
                    src={room.image_url} 
                    alt={room.name} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-500">
                    No Image Available
                  </div>
                )}
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
              {room.name}
            </h1>
            <p className="text-xl font-bold text-amber-600 mb-6">
              ${room.price_per_night} <span className="text-sm text-stone-400 font-normal">/ night</span>
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              {room.description}
            </p>
            
            <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider">Book Your Stay</h3>
              <form action={bookRoom} className="space-y-4">
                <input type="hidden" name="roomId" value={room.id} />
                <input type="hidden" name="pricePerNight" value={room.price_per_night} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-medium text-slate-700 mb-1">Check-In</label>
                    <input 
                      type="date" 
                      id="checkIn"
                      name="checkIn" 
                      required
                      className="w-full rounded-md border-stone-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-2 px-3 border"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-medium text-slate-700 mb-1">Check-Out</label>
                    <input 
                      type="date" 
                      id="checkOut" 
                      name="checkOut" 
                      required
                      className="w-full rounded-md border-stone-300 shadow-sm focus:border-amber-500 focus:ring-amber-500 py-2 px-3 border"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-slate-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors duration-300 uppercase tracking-widest shadow-lg"
                >
                  Confirm Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
