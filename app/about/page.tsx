const AboutPage = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-slate-900 mb-6">
            Our Story
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-600 max-w-2xl mx-auto">
            A legacy of hospitality, where every detail is curated for your comfort.
          </p>
        </div>
        <div className="mt-12 text-left max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-sm border border-stone-100">
          <p className="mb-6 text-stone-700 leading-relaxed text-lg first-letter:text-5xl first-letter:font-serif first-letter:text-amber-600 first-letter:float-left first-letter:mr-3">
            Welcome to our hotel, a sanctuary of peace and elegance nestled in
            the heart of the city. Since our establishment in 2010, we have been
            dedicated to providing our guests with an unparalleled experience of
            hospitality. Our mission is to offer a perfect blend of modern
            amenities and classic charm, ensuring every stay is memorable.
          </p>
          <p className="mb-6 text-stone-700 leading-relaxed text-lg">
            Our team is composed of passionate professionals who are committed
            to making your visit as comfortable and enjoyable as possible. From
            the moment you step through our doors, you will be greeted with a
            warm smile and a welcoming atmosphere. We believe in the power of
            details, and every aspect of our hotel has been carefully curated to
            meet the needs of the discerning traveler.
          </p>
          <p className="mb-6 text-stone-700 leading-relaxed text-lg">
            Whether you are here for business or leisure, our state-of-the-art
            facilities and personalized services are designed to cater to your
            every need. We invite you to explore our luxurious rooms, dine in
            our exquisite restaurants, and relax in our serene spa. Thank you
            for choosing us, and we look forward to creating lasting memories
            with you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
