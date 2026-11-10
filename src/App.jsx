
function App() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
          Tailwind Connected!
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
          Hello, Panji!
        </h1>

        <p className="mt-3 text-slate-600">
          React and Tailwind CSS are working together.
        </p>

        <button className="mt-6 w-full rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-95">
          Test Button
        </button>

        <div className="mt-6 rounded-xl border border-slate-200 p-4">
          <p className="text-sm font-medium text-slate-500">
            Current Stack
          </p>
          <p className="mt-2 font-bold text-slate-800">
            React + Vite + Tailwind CSS v4
          </p>
        </div>

      </div>
    </main>
  );
}

export default App;
