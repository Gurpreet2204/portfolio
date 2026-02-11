import { motion } from "framer-motion";
import { Code2, Layers, Smartphone, BarChart2, Server, GraduationCap, MapPin, Coffee } from "lucide-react";

const skills = [
  { label: "React & Next.js",          value: 90, color: "from-cyan-500 to-blue-500",     bg: "bg-cyan-500/10",    text: "text-cyan-400",    border: "border-cyan-500/20" },
  { label: "React Native",             value: 80, color: "from-violet-500 to-purple-500", bg: "bg-violet-500/10",  text: "text-violet-400",  border: "border-violet-500/20" },
  { label: "D3.js & Data Viz",         value: 75, color: "from-pink-500 to-rose-500",     bg: "bg-pink-500/10",    text: "text-pink-400",    border: "border-pink-500/20" },
  { label: "Backend (Node, Hono)",     value: 78, color: "from-emerald-500 to-teal-500",  bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20" },
  { label: "BaaS (Supabase, Appwrite)",value: 82, color: "from-amber-500 to-orange-500",  bg: "bg-amber-500/10",   text: "text-amber-400",   border: "border-amber-500/20" },
];

const cards = [
  { icon: GraduationCap, label: "Education",  value: "B.Tech IT",       sub: "IKG PTU · 2020–2024",  color: "text-cyan-400",    bg: "bg-cyan-500/10",    border: "border-cyan-500/20",    glow: "hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]"    },
  { icon: MapPin,        label: "Based in",   value: "Punjab, India",   sub: "Open to Remote & re-location",       color: "text-violet-400",  bg: "bg-violet-500/10",  border: "border-violet-500/20",  glow: "hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]"  },
  { icon: Coffee,        label: "Fueled by",  value: "Chai & Code and 100x devs",     sub: "Late-night builder",   color: "text-amber-400",   bg: "bg-amber-500/10",   border: "border-amber-500/20",   glow: "hover:shadow-[0_0_20px_rgba(245,158,11,0.15)]"  },
  { icon: Layers,        label: "Focus",      value: "Full Stack",      sub: "Web + Mobile",         color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-card/50 overflow-hidden">
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
            Building the <span className="text-gradient">Future</span> of Web
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12"
        >
          {cards.map(({ icon: Icon, label, value, sub, color, bg, border, glow }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`group relative rounded-xl border ${border} bg-card p-4 transition-all duration-300 ${glow} hover:border-opacity-60`}
            >
              <div className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${bg} mb-3`}>
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-0.5">{label}</p>
              <p className={`font-bold text-sm ${color}`}>{value}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5">{sub}</p>
            </motion.div>
          ))}
        </motion.div>

      <div className="grid md:grid-cols-2 gap-12">

      <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="flex gap-4">
              <div className="w-[3px] rounded-full bg-gradient-to-b from-violet-500 via-cyan-500 to-emerald-500 shrink-0" />
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                <p>
                  Full Stack Web Developer skilled in building responsive and dynamic
                  web applications with a strong foundation in JavaScript and MERN
                  stack technologies. B.Tech in Information Technology from IKG Punjab
                  Technical University (2020–2024).
                </p>
                <p>
                  My expertise spans the React ecosystem — from SPAs with React, to
                  server-rendered apps with Next.js, to cross-platform mobile apps
                  with React Native. I craft data visualizations with D3.js,
                  pixel-perfect UIs with Tailwind CSS, and robust backends with
                  Node.js and modern BaaS platforms.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { icon: Code2,    label: "JavaScript",   c: "text-amber-400",   bg: "bg-amber-500/10",   b: "border-amber-500/20"   },
                { icon: Layers,   label: "React",        c: "text-cyan-400",    bg: "bg-cyan-500/10",    b: "border-cyan-500/20"    },
                { icon: Smartphone, label: "React Native", c: "text-violet-400", bg: "bg-violet-500/10", b: "border-violet-500/20"  },
                { icon: BarChart2, label: "D3.js",       c: "text-pink-400",    bg: "bg-pink-500/10",    b: "border-pink-500/20"    },
                { icon: Server,   label: "Node.js",      c: "text-emerald-400", bg: "bg-emerald-500/10", b: "border-emerald-500/20" },
              ].map(({ icon: Icon, label, c, bg, b }) => (
                <span key={label} className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border ${b} ${bg} text-xs font-mono ${c}`}>
                  <Icon className="w-3 h-3" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">{skill.label}</span>
                  <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${skill.bg} ${skill.text}`}>
                    {skill.value}%
                  </span>
                </div>

                <div className={`h-1.5 rounded-full ${skill.bg} border ${skill.border} overflow-hidden`}>
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;