
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-stone-400 border-t border-slate-900">
      <div className="max-w-screen-xl mx-auto px-4 w-full py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          <div className="space-y-6">
            <Link href="/" className="block">
               {/* Ideally use a white version of the logo here, or apply a brightness filter */}
              <Image
                src="/logo-hotel.png"
                width={140}
                height={54}
                alt="logo"
                priority
                className="brightness-0 invert opacity-90"
              />
            </Link>
            <p className="text-stone-500 leading-relaxed text-sm">
              Experience the pinnacle of luxury and comfort. Our hotel offers an unforgettable stay with world-class amenities and exceptional service.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="mb-6 text-lg font-serif font-bold text-white tracking-wide">Quick Links</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <Link href="/" className="hover:text-amber-500 transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-amber-500 transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="/room" className="hover:text-amber-500 transition-colors">Our Rooms</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-amber-500 transition-colors">Contact</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-lg font-serif font-bold text-white tracking-wide">Legal</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>
                  <Link href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-amber-500 transition-colors">Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="mb-6 text-lg font-serif font-bold text-white tracking-wide">
              Newsletter
            </h4>
            <p className="text-stone-500 text-sm mb-6 leading-relaxed">
              Subscribe to our newsletter for the latest updates and exclusive offers.
            </p>
            <form action="" className="flex flex-col gap-3">
              <input
                type="email"
                name="email"
                className="w-full p-4 rounded-lg bg-slate-900 border border-slate-800 text-white placeholder-stone-600 focus:outline-none focus:border-amber-600 transition-colors"
                placeholder="Your email address"
              />
              <button className="bg-amber-600 py-4 font-bold text-white w-full rounded-lg hover:bg-amber-700 transition-all shadow-lg uppercase text-sm tracking-wider">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 border-t border-slate-900 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-stone-600">
        <p>&copy; {new Date().getFullYear()} Luxury Hotel. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
            {/* Social Icons could go here */}
             <span className="hover:text-stone-400 cursor-pointer">Instagram</span>
             <span className="hover:text-stone-400 cursor-pointer">Facebook</span>
             <span className="hover:text-stone-400 cursor-pointer">Twitter</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
