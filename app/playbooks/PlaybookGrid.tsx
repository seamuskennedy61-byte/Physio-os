type Playbook = {
  icon: string;
  category: string;
  body: string;
  systems: string;
  deploy: string;
};

const playbooks: Playbook[] = [
  {
    icon: "🩺",
    category: "Health and Allied Health",
    body: "Practices that run on recall, reputation, and team. We pre-build the infrastructure that keeps chairs full and performance visible.",
    systems:
      "Recall and reactivation, new patient acquisition, staff hiring and retention, practice benchmarking, performance dashboards",
    deploy: "Weeks not months",
  },
  {
    icon: "🔧",
    category: "Trades and Construction",
    body: "Businesses won and lost on follow up and margin. We pre-build the systems that convert quotes and protect the bottom line.",
    systems:
      "Quote follow up, job scheduling communication, review generation, hiring pipelines, margin and financial dashboards",
    deploy: "Weeks not months",
  },
  {
    icon: "⚖️",
    category: "Professional Services",
    body: "Firms that scale on utilisation and referral. We pre-build the infrastructure that turns delivery and relationships into a system.",
    systems:
      "Client onboarding, billing automation, referral systems, team utilisation and capacity dashboards",
    deploy: "Weeks not months",
  },
  {
    icon: "💪",
    category: "Fitness and Wellness",
    body: "Operators that live or die on retention. We pre-build the systems that keep members engaged and revenue compounding.",
    systems:
      "Member retention, reactivation campaigns, booking systems, revenue per member tracking, accountability infrastructure",
    deploy: "Weeks not months",
  },
  {
    icon: "📈",
    category: "Business Coaching",
    body: "Cross-industry enterprises coaching the operators above. We pre-build the operating layer that scales delivery without scaling headcount.",
    systems:
      "Implementation systems, accountability automation, benchmarking, and the AI methodology layer that scales delivery",
    deploy: "Weeks not months",
  },
];

export default function PlaybookGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {playbooks.map((p) => (
        <div key={p.category} className="card flex flex-col">
          <span className="text-3xl">{p.icon}</span>
          <h3 className="mt-4 text-lg font-semibold leading-snug">
            {p.category}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/60">{p.body}</p>
          <div className="mt-5 flex-1 border-t border-white/10 pt-4">
            <p className="text-xs font-medium uppercase tracking-wider text-white/40">
              Systems we pre-build
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {p.systems}
            </p>
          </div>
          <div className="mt-5 flex justify-between border-t border-white/10 pt-4 text-sm">
            <span className="text-white/40">Deploy</span>
            <span className="font-medium text-amber-accent">{p.deploy}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
