import { useNavigate } from "react-router-dom"

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="bg-slate-800 p-10 rounded-xl w-full max-w-lg shadow-lg">
        
        <h1 className="text-3xl font-bold text-center mb-2">
          Welcome to 🔮 Astro Prediction
        </h1>

        <p className="text-center text-gray-300 mb-6">
          Enter your birth details to receive AI-powered life insights
        </p>

        {/* FORM */}
        <form className="space-y-4">
          
          {/* Name */}
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 rounded bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm mb-1">Date of Birth</label>
            <input
              type="date"
              className="w-full px-3 py-2 rounded bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Time of Birth */}
          <div>
            <label className="block text-sm mb-1">Time of Birth</label>
            <input
              type="time"
              className="w-full px-3 py-2 rounded bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm mb-1">Place of Birth</label>
            <input
              type="text"
              placeholder="City, State"
              className="w-full px-3 py-2 rounded bg-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className="w-full bg-purple-600 hover:bg-purple-700 py-2 rounded font-semibold"
          >
            Generate Prediction
          </button>

        </form>

      </div>
    </div>
  )
}
