export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
      <div className="bg-slate-800 p-8 rounded-xl w-96 shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">
          🔮 Astro Prediction
        </h1>

        <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded mb-3">
          Login
        </button>

        <button className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded mb-3">
          Sign Up
        </button>

        <button className="w-full border border-purple-400 py-2 rounded">
          Continue as Guest
        </button>
      </div>
    </div>
  )
}
