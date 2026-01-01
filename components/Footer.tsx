export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { href: "/forward-deployed-engineer", label: "Forward-Deployed Engineers" },
    { href: "/solutions-engineer", label: "Solutions Engineers" },
    { href: "/implementation-engineer", label: "Implementation Engineers" },
    { href: "/customer-engineer", label: "Customer Engineers" },
  ];

  const partnerSites = [
    { href: "https://esportsjobs.quest", label: "Esports Recruiters" },
    { href: "https://esportsjobs.quest", label: "Esports Recruitment" },
    { href: "https://esportsjobs.quest", label: "Recruitment Agencies" },
    { href: "https://esportsjobs.quest", label: "Esports Recruitment Agency" },
    { href: "https://fractional.quest/fractional-jobs-london", label: "Fractional Jobs" },
    { href: "https://fractional.quest/fractional-jobs-london", label: "Fractional Jobs London" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              PreDeploy
            </span>
            <p className="mt-4 text-slate-400 text-sm">
              Specialist recruitment agency for forward-deployed engineers, solutions engineers, and customer-facing technical roles.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Roles We Fill</h3>
            <ul className="space-y-2">
              {services.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/fde-salary-guide" className="text-slate-400 hover:text-white text-sm transition-colors">
                  FDE Salary Guide
                </a>
              </li>
              <li>
                <a href="/interview-prep" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Interview Prep
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Partner Sites */}
          <div>
            <h3 className="text-white font-semibold mb-4">Recruitment Agencies</h3>
            <ul className="space-y-2">
              {partnerSites.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors" target="_blank" rel="noopener noreferrer">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} PreDeploy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
