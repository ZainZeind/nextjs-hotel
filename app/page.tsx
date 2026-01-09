import Hero from "@/app/components/hero";
import Main from "@/app/components/main";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="py-24 bg-stone-50">
        <div className="text-center mb-16 px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Rooms & Rates
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Discover our collection of elegantly designed rooms, each offering a unique blend of comfort and style to ensure a restful stay.
          </p>
        </div>
        <Main />
      </div>
    </div>
  );
}
