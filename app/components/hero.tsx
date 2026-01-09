import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-[90vh] text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hotel-luxury.jpg"
          alt="hero image"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/60"></div>
      </div>
      <div className="relative flex flex-col justify-center items-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 capitalize tracking-tight drop-shadow-lg">
          Experience <span className="text-amber-500 italic">Luxury</span> Like Never Before
        </h1>
        <p className="text-lg md:text-2xl text-stone-200 mb-10 max-w-2xl font-light tracking-wide">
          Indulge in an unforgettable escape where elegance meets comfort.
        </p>
        <div className="flex flex-col md:flex-row gap-5">
          <Link
            href="/room"
            className="bg-amber-600 text-white border border-amber-600 hover:bg-amber-700 hover:border-amber-700 py-3 px-8 text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-amber-500/20 uppercase tracking-widest"
          >
            Book Now
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border border-white text-white hover:bg-white hover:text-slate-900 py-3 px-8 text-lg font-medium transition-all duration-300 shadow-lg uppercase tracking-widest"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
