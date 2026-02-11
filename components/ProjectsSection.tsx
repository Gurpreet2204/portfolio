import { motion } from "framer-motion";
import { ArrowUpRight, Dumbbell, BarChart3, Music, Home, ShoppingCart } from "lucide-react";

const projects = [
  {
    title: "Motus AI",
    description:
      "A cross-platform fitness mobile app with user-centric design, real-time data syncing, and smooth navigation to enhance user engagement.",
    tags: ["React Native", "Node.js", "Appwrite"],
    icon: Dumbbell,
    link: "https://apps.apple.com/us/app/motus-ai-workout-planner/id6448385157",
    color: {
     
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      border: "hover:border-emerald-500/60",
      glow: "hover:shadow-[0_0_24px_rgba(16,185,129,0.2)]",
      iconBg: "bg-emerald-500/15",
      iconText: "text-emerald-400",
      tagBg: "bg-emerald-500/10",
      tagText: "text-emerald-300",
      accent: "text-emerald-400",
    },
  },
  {
    title: "PaveInsight",
    description:
      "A data-driven analytics platform for pavement infrastructure, providing actionable insights through rich D3.js visualizations.",
    tags: ["React", "D3.js", "Next.js", "Supabase"],
    icon: BarChart3,
    link: "https://paveinsight.com/",
    color: {
      gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
      border: "hover:border-cyan-500/60",
      glow: "hover:shadow-[0_0_24px_rgba(6,182,212,0.2)]",
      iconBg: "bg-cyan-500/15",
      iconText: "text-cyan-400",
      tagBg: "bg-cyan-500/10",
      tagText: "text-cyan-300",
      accent: "text-cyan-400",
    },
  },
  {
    title: "Loudowls",
    description:
      "A scalable Next.js project integrated with Appwrite for backend services and RPC to streamline client-server communication.",
    tags: ["Next.js", "Appwrite", "Tailwind CSS"],
    icon: Music,
    link: "https://loudowls.com/",
    color: {
      gradient: "from-violet-500/20 via-purple-500/10 to-transparent",
      border: "hover:border-violet-500/60",
      glow: "hover:shadow-[0_0_24px_rgba(139,92,246,0.2)]",
      iconBg: "bg-violet-500/15",
      iconText: "text-violet-400",
      tagBg: "bg-violet-500/10",
      tagText: "text-violet-300",
      accent: "text-violet-400",
    },
  },
  {
    title: "Real Estate Platform",
    description:
      "Full-stack real estate platform with user authentication, Razorpay payment integration, and MongoDB for efficient data management.",
    tags: ["React", "Redux", "Node.js", "MongoDB", "Razorpay"],
    icon: Home,
    link: "https://github.com/Gurpreet2204/Property_hub",
    color: {
      gradient: "from-orange-500/20 via-red-500/10 to-transparent",
      border: "hover:border-orange-500/60",
      glow: "hover:shadow-[0_0_24px_rgba(249,115,22,0.2)]",
      iconBg: "bg-orange-500/15",
      iconText: "text-orange-400",
      tagBg: "bg-orange-500/10",
      tagText: "text-orange-300",
      accent: "text-orange-400",
    },
  },
  {
    title: "E-Commerce App",
    description:
      "Interactive e-commerce platform with Redux state management enabling seamless browsing and purchasing experiences with a sleek responsive UI.",
    tags: ["React", "Redux", "Tailwind CSS"],
    icon: ShoppingCart,
    link: "",
    color: {
      gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
      border: "hover:border-pink-500/60",
      glow: "hover:shadow-[0_0_24px_rgba(236,72,153,0.2)]",
      iconBg: "bg-pink-500/15",
      iconText: "text-pink-400",
      tagBg: "bg-pink-500/10",
      tagText: "text-pink-300",
      accent: "text-pink-400",
    },
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
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
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-5"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            const c = project.color;
            return (
              <motion.a
                key={project.title}
                variants={item}
                href={project.link || "#"}
                className={`group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 overflow-hidden ${c.border} ${c.glow}`}
              >
                {/* Colored gradient wash in top-left corner */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                />

                {/* Subtle always-visible tint at top */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.gradient} opacity-60`}
                />

                <div className="relative mb-4 flex items-center justify-between">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${c.iconBg}`}>
                    <Icon className={`w-5 h-5 ${c.iconText}`} />
                  </div>
                  <ArrowUpRight
                    className={`w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ${c.accent}`}
                  />
                </div>

                <h3 className="relative text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="relative flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-1 text-[11px] font-mono rounded-full ${c.tagBg} ${c.tagText}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;