import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Hero Section */}
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              PreDeploy
            </h1>
            <a
              href="#contact"
              className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Forward-Deployed
              </span>
              <br />
              Engineer Recruitment
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">
              Connecting elite technical talent with companies that need engineers who can deploy, implement, and ship at client sites from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#roles"
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all text-lg"
              >
                View Open Roles
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-slate-700 text-white font-semibold rounded-lg hover:bg-slate-800 transition-all text-lg"
              >
                Submit Your CV
              </a>
            </div>
          </div>
        </section>

        {/* What is FDE */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">What is a Forward-Deployed Engineer?</h3>
            <p className="text-lg text-slate-400 max-w-4xl mx-auto text-center mb-16">
              Forward-Deployed Engineers (FDEs) are elite technical professionals who work directly with customers to implement, customize, and deploy complex software solutions. They combine deep technical expertise with client-facing skills.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Customer-Facing Technical Work",
                  description: "Work directly with enterprise clients to understand requirements, architect solutions, and deliver implementations.",
                  icon: "🎯",
                },
                {
                  title: "Rapid Problem Solving",
                  description: "Debug production issues in real-time, build custom integrations, and ship solutions under pressure.",
                  icon: "⚡",
                },
                {
                  title: "Bridge Technical & Business",
                  description: "Translate complex technical concepts for stakeholders while diving deep into code when needed.",
                  icon: "🌉",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-all"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-semibold mb-3">{item.title}</h4>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Companies */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-16">Companies Hiring FDEs</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              {[
                "Palantir",
                "Scale AI",
                "Stripe",
                "Databricks",
                "Snowflake",
                "Anduril",
                "OpenAI",
                "Anthropic",
              ].map((company) => (
                <div
                  key={company}
                  className="p-6 rounded-xl bg-slate-800/30 border border-slate-700"
                >
                  <span className="text-lg font-medium text-slate-300">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles */}
        <section id="roles" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-16">Featured FDE Roles</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Forward-Deployed Engineer", company: "Series C AI Platform", location: "San Francisco", salary: "$180k - $280k" },
                { title: "Solutions Engineer", company: "Enterprise Data Company", location: "New York / Remote", salary: "$160k - $240k" },
                { title: "Implementation Engineer", company: "FinTech Unicorn", location: "London", salary: "£120k - £180k" },
                { title: "Customer Engineer", company: "Cloud Infrastructure", location: "Remote (US)", salary: "$170k - $250k" },
              ].map((role) => (
                <div
                  key={role.title}
                  className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-all cursor-pointer"
                >
                  <h4 className="text-lg font-semibold mb-2">{role.title}</h4>
                  <p className="text-slate-400 mb-3">{role.company}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="text-slate-500">{role.location}</span>
                    <span className="text-emerald-400">{role.salary}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-6">Ready to Deploy?</h3>
            <p className="text-slate-400 mb-8">
              Whether you&apos;re hiring FDEs or looking for your next forward-deployed role, we specialize in this unique talent category.
            </p>
            <a
              href="mailto:fde@predeploy.ai"
              className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white font-semibold rounded-lg hover:opacity-90 transition-all text-lg"
            >
              fde@predeploy.ai
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
