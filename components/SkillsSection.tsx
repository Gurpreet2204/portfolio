import { motion } from "framer-motion";
import { Code2, Smartphone, Database, GitBranch } from "lucide-react";

const categoryColors: Record<string, {
  border: string;
  glow: string;
  iconBg: string;
  dot: string;
  tagBg: string;
  tagText: string;
  hover: string;
}> = {
  Language:   { border: "hover:border-amber-500/60",   glow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]",   iconBg: "bg-amber-500/10",   dot: "bg-amber-400",   tagBg: "bg-amber-500/10",   tagText: "text-amber-400",   hover: "group-hover:text-amber-400" },
  Frontend:   { border: "hover:border-cyan-500/60",    glow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]",    iconBg: "bg-cyan-500/10",    dot: "bg-cyan-400",    tagBg: "bg-cyan-500/10",    tagText: "text-cyan-400",    hover: "group-hover:text-cyan-400" },
  Mobile:     { border: "hover:border-violet-500/60",  glow: "hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]",   iconBg: "bg-violet-500/10",  dot: "bg-violet-400",  tagBg: "bg-violet-500/10",  tagText: "text-violet-400",  hover: "group-hover:text-violet-400" },
  "Data Viz": { border: "hover:border-pink-500/60",    glow: "hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]",   iconBg: "bg-pink-500/10",    dot: "bg-pink-400",    tagBg: "bg-pink-500/10",    tagText: "text-pink-400",    hover: "group-hover:text-pink-400" },
  Styling:    { border: "hover:border-sky-500/60",     glow: "hover:shadow-[0_0_20px_rgba(14,165,233,0.2)]",   iconBg: "bg-sky-500/10",     dot: "bg-sky-400",     tagBg: "bg-sky-500/10",     tagText: "text-sky-400",     hover: "group-hover:text-sky-400" },
  "State Mgmt": { border: "hover:border-orange-500/60", glow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]", iconBg: "bg-orange-500/10", dot: "bg-orange-400", tagBg: "bg-orange-500/10", tagText: "text-orange-400", hover: "group-hover:text-orange-400" },
  Backend:    { border: "hover:border-emerald-500/60", glow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",  iconBg: "bg-emerald-500/10", dot: "bg-emerald-400", tagBg: "bg-emerald-500/10", tagText: "text-emerald-400", hover: "group-hover:text-emerald-400" },
  Database:   { border: "hover:border-teal-500/60",    glow: "hover:shadow-[0_0_20px_rgba(20,184,166,0.2)]",  iconBg: "bg-teal-500/10",    dot: "bg-teal-400",    tagBg: "bg-teal-500/10",    tagText: "text-teal-400",    hover: "group-hover:text-teal-400" },
  BaaS:       { border: "hover:border-indigo-500/60",  glow: "hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]",  iconBg: "bg-indigo-500/10",  dot: "bg-indigo-400",  tagBg: "bg-indigo-500/10",  tagText: "text-indigo-400",  hover: "group-hover:text-indigo-400" },
  Tools:      { border: "hover:border-rose-500/60",    glow: "hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]",   iconBg: "bg-rose-500/10",    dot: "bg-rose-400",    tagBg: "bg-rose-500/10",    tagText: "text-rose-400",    hover: "group-hover:text-rose-400" },
};

const capabilityColors = [
  { icon: Code2,     label: "Web Apps",        color: "text-cyan-400",    bg: "bg-cyan-500/10",    border: "border-cyan-500/30"    },
  { icon: Smartphone,label: "Mobile Apps",     color: "text-violet-400",  bg: "bg-violet-500/10",  border: "border-violet-500/30"  },
  { icon: Database,  label: "Backend & APIs",  color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  { icon: GitBranch, label: "Version Control", color: "text-rose-400",    bg: "bg-rose-500/10",    border: "border-rose-500/30"    },
];

const skills = [
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "React Native", category: "Mobile" },
  { name: "Next.js", category: "Frontend" },
  { name: "D3.js", category: "Data Viz" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Bootstrap", category: "Styling" },
  { name: "Redux", category: "State Mgmt" },
  { name: "Zustand", category: "State Mgmt" },
  { name: "Node.js", category: "Backend" },
  { name: "Hono", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Appwrite", category: "BaaS" },
  { name: "Supabase", category: "BaaS" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Postman", category: "Tools" },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-sm text-primary tracking-widest uppercase mb-2">
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
        >
          {skills.map((skill) => {
            const c = categoryColors[skill.category] ?? categoryColors["Tools"];
            return (
              <motion.div
                key={skill.name}
                variants={item}
                className={`group relative rounded-lg border border-border bg-card p-4 transition-all duration-300 overflow-hidden ${c.border} ${c.glow}`}
              >
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${c.dot} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="flex items-start gap-2">
                  <span className={`mt-[6px] w-1.5 h-1.5 rounded-full shrink-0 ${c.dot}`} />
                  <div>
                    <p className={`font-semibold text-foreground transition-colors ${c.hover}`}>
                      {skill.name}
                    </p>
                    <span className={`inline-block text-[10px] font-mono mt-1 px-2 py-0.5 rounded-full ${c.tagBg} ${c.tagText}`}>
                      {skill.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {capabilityColors.map(({ icon: Icon, label, color, bg, border }) => (
            <div
              key={label}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${border} ${bg}`}
            >
              <Icon className={`w-5 h-5 shrink-0 ${color}`} />
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;