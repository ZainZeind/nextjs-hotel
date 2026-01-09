const SignInPage = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold tracking-tight text-slate-900 mb-6">
            Welcome Back
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            Please sign in to access your account.
          </p>
        </div>
        <div className="mt-12 max-w-md mx-auto bg-white p-8 rounded-xl shadow-lg border border-stone-100">
          <form className="grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full shadow-sm py-3 px-4 bg-stone-50 border-stone-200 text-slate-900 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-colors"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full shadow-sm py-3 px-4 bg-stone-50 border-stone-200 text-slate-900 rounded-lg focus:ring-amber-500 focus:border-amber-500 transition-colors"
                placeholder="Password"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-lg shadow-lg text-sm font-bold text-white bg-slate-900 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-all uppercase tracking-widest"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
