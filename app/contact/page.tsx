const ContactPage = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-slate-900 mb-6">
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            We are here to assist you with any inquiries or special requests.
          </p>
        </div>
        <div className="mt-12 max-w-xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-stone-100">
          <form className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="block w-full shadow-sm py-3 px-4 bg-stone-50 border-stone-200 text-slate-900 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-colors"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full shadow-sm py-3 px-4 bg-stone-50 border-stone-200 text-slate-900 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full shadow-sm py-3 px-4 bg-stone-50 border-stone-200 text-slate-900 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-colors"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-lg shadow-lg text-sm font-bold text-white bg-slate-900 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all uppercase tracking-widest"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
