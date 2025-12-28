export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      
      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        🔮 Your Astro Prediction
      </h1>

      {/* USER PROFILE */}
      <div className="bg-slate-800 p-5 rounded-xl mb-6 shadow">
        <h2 className="text-xl font-semibold mb-2">User Profile</h2>
        <p><b>Name:</b> Guest User</p>
        <p><b>DOB:</b> 02-11-2004</p>
        <p><b>Time:</b> 04:00 PM</p>
        <p><b>Place:</b> Aurangabad</p>
        <p><b>Rashi:</b> Gemini</p>
        <p><b>Nakshatra:</b> Ardra</p>
      </div>

      {/* SECTIONS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Career */}
        <Section
          title="Career & Education"
          content="Your career shows strong growth after mid-20s with success in analytical and technical fields."
        />

        {/* Marriage */}
        <Section
          title="Marriage & Relationships"
          content="Marriage may be slightly delayed but will be stable and emotionally supportive."
        />

        {/* Finance */}
        <Section
          title="Financial Growth"
          content="Financial stability improves steadily with good opportunities after consistent effort."
        />

        {/* Health */}
        <Section
          title="Health Trends"
          content="Overall health remains normal. Stress management and routine discipline are important."
        />

        {/* Timeline */}
        <Section
          title="2026–2030 Timeline"
          content="2026–27 brings career learning. 2028 shows stability. 2029–30 indicates major growth."
        />
      </div>

      {/* OTHER QUESTIONS */}
      <div className="bg-slate-800 p-5 rounded-xl mt-6 shadow">
        <h2 className="text-xl font-semibold mb-2">Other Questions</h2>
        <p className="text-gray-300">
          Ask short questions like “Is 2027 good for my career?” (AI coming soon)
        </p>
      </div>

      {/* CONCLUSION */}
      <div className="bg-purple-700 p-5 rounded-xl mt-6 shadow">
        <h2 className="text-xl font-semibold mb-2">Life Summary</h2>
        <p>
          Your life path indicates steady progress, delayed but meaningful success,
          and long-term stability through disciplined effort.
        </p>
      </div>

    </div>
  )
}

/* Reusable Section Component */
function Section({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-slate-800 p-5 rounded-xl shadow">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{content}</p>
    </div>
  )
}
