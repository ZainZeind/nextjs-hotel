import Image from "next/image";
import { IoPeopleOutline, IoBedOutline } from "react-icons/io5";
import Link from "next/link";

const Card = () => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <Image
          src="/hotel-luxury.jpg"
          width={384}
          height={256}
          alt="room image"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wider shadow-sm">
          Featured
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-2xl font-serif font-bold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
          <Link href="#">
            Luxury Suite
          </Link>
        </h4>
        <div className="flex items-end gap-1 mb-6">
          <span className="text-xl font-bold text-amber-600">Rp 2.100.000</span>
          <span className="text-slate-400 text-sm mb-1">/ Night</span>
        </div>
        
        <div className="flex items-center gap-6 text-slate-500 text-sm mb-8">
          <div className="flex items-center gap-2">
            <IoPeopleOutline className="size-5 text-amber-600" />
            <span>2 Guests</span>
          </div>
          <div className="flex items-center gap-2">
            <IoBedOutline className="size-5 text-amber-600" />
            <span>1 King Bed</span>
          </div>
        </div>

        <div className="mt-auto">
           <Link
            href="#"
            className="block w-full text-center py-3 px-6 text-sm font-bold text-white bg-slate-900 hover:bg-amber-600 transition-colors duration-300 uppercase tracking-widest rounded-lg"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
