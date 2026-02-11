import { motion } from "framer-motion";
import { Calendar, Briefcase } from "lucide-react";

const experiences = [
  {
    period: "May 2024 — Present",
    title: "Front End Developer",
    company: "Loud Owls",
    description:
      "Developed scalable Next.js applications integrated with Appwrite and RPC for streamlined client-server communication. Built a cross-platform fitness app using React Native with real-time data syncing. Designed responsive UIs and optimized RESTful APIs for high performance and seamless backend integration.",
    tags: ["React", "Next.js", "React Native", "Appwrite", "Tailwind CSS", "Node.js"],
    color: {
      dot: "bg-violet-400",
      dotRing: "ring-violet-500/30",
      line: "bg-gradient-to-b from-violet-500/60 to-cyan-500/40",
      period: "text-violet-400",
      periodBg: "bg-violet-500/10 border border-violet-500/20",
      company: "text-violet-400/80",
      cardBorder: "border-violet-500/20 hover:border-violet-500/50",
      cardGlow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.12)]",
      gradient: "from-violet-500/8 to-transparent",
      tagBg: "bg-violet-500/10",
      tagText: "text-violet-300",
      badge: "bg-violet-500/15 text-violet-300 border-violet-500/25",
    },
    status: "Current",
  },
  {
    period: "Jul 2023 — Jan 2024",
    title: "Full Stack Developer Trainee",
    company: "CS Soft Solutions",
    description:
      "Completed intensive full-stack development training mastering HTML, CSS, JavaScript, ASP.NET and the MERN stack. Developed multiple projects independently and collaboratively, aligning with industry standards. Strengthened skills in Git for version control and efficient coding practices.",
    tags: ["JavaScript", "MERN Stack", "ASP.NET", "MongoDB", "Git"],
    color: {
      dot: "bg-cyan-400",
      dotRing: "ring-cyan-500/30",
      line: "bg-gradient-to-b from-cyan-500/60 to-transparent",
      period: "text-cyan-400",
      periodBg: "bg-cyan-500/10 border border-cyan-500/20",
      company: "text-cyan-400/80",
      cardBorder: "border-cyan-500/20 hover:border-cyan-500/50",
      cardGlow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.12)]",
      gradient: "from-cyan-500/8 to-transparent",
      tagBg: "bg-cyan-500/10",
      tagText: "text-cyan-300",
      badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
    },
    status: null,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-card/50">
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
            Work <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        <div className="relative ml-4 space-y-8">
          <div className="absolute left-0 top-2 bottom-2 w-[2px] bg-gradient-to-b from-violet-500/50 via-cyan-500/40 to-transparent" />

          {experiences.map((exp, index) => {
            const c = exp.color;
            return (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-10"
              >
                <div className={`absolute left-[-7px] top-5 w-[14px] h-[14px] rounded-full ${c.dot} ring-4 ${c.dotRing} ring-offset-0`} />

                <div className={`group relative rounded-xl border bg-card p-6 transition-all duration-300 overflow-hidden ${c.cardBorder} ${c.cardGlow}`}>

                  <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} pointer-events-none`} />

                  <div className={`absolute left-0 top-0 bottom-0 w-[3px] ${c.dot} opacity-60`} />

                  <div className="relative">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <div className={`flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full ${c.periodBg} ${c.period}`}>
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                      {exp.status && (
                        <span className={`flex items-center gap-1.5 text-[10px] font-mono px-2.5 py-1 rounded-full border ${c.badge}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} />
                          {exp.status}
                        </span>
                      )}
                    </div>

                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <div className={`flex items-center gap-1.5 text-sm font-mono ${c.company}`}>
                          <Briefcase className="w-3.5 h-3.5" />
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed max-w-2xl text-sm mb-5">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-2.5 py-1 text-[11px] font-mono rounded-full ${c.tagBg} ${c.tagText}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;