import Image from "next/image";
import Link from "next/link";
import Navlink from "@/app/components/navbar/navlink";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 border-b border-stone-100 transition-all duration-300">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4 py-5">
        <Link href="/" className="relative transition-transform hover:scale-105 duration-300">
          <Image
            src="/logo-hotel.png"
            width={140}
            height={54}
            alt="logo"
            priority
            className="w-auto h-12"
          />
        </Link>
        <Navlink />
      </div>
    </div>
  );
};

export default Navbar;
