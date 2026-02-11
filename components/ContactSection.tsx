import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight, MessageSquare, Send } from "lucide-react";

const links = [
  {
    href: "mailto:gurs2806@gmail.com",
    icon: Mail,
    label: "Email",
    handle: "gurs2806@gmail.com",
    cta: "Send a message",
    color: {
      bg: "bg-violet-500/10",
      border: "border-violet-500/25",
      glow: "hover:shadow-[0_0_28px_rgba(139,92,246,0.2)]",
      hoverBorder: "hover:border-violet-500/60",
      iconBg: "bg-violet-500/15",
      icon: "text-violet-400",
      handle: "text-violet-300",
      gradient: "from-violet-500/10 to-transparent",
      bar: "bg-violet-400",
    },
  },
  {
    href: "https://github.com/Gurpreet2204",
    icon: Github,
    label: "GitHub",
    handle: "@Gurpreet2204",
    cta: "View my repos",
    external: true,
    color: {
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/25",
      glow: "hover:shadow-[0_0_28px_rgba(6,182,212,0.2)]",
      hoverBorder: "hover:border-cyan-500/60",
      iconBg: "bg-cyan-500/15",
      icon: "text-cyan-400",
      handle: "text-cyan-300",
      gradient: "from-cyan-500/10 to-transparent",
      bar: "bg-cyan-400",
    },
  },
  {
    href: "https://linkedin.com/in/04gurpreet",
    icon: Linkedin,
    label: "LinkedIn",
    handle: "in/04gurpreet",
    cta: "Let's connect",
    external: true,
    color: {
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/25",
      glow: "hover:shadow-[0_0_28px_rgba(16,185,129,0.2)]",
      hoverBorder: "hover:border-emerald-500/60",
      iconBg: "bg-emerald-500/15",
      icon: "text-emerald-400",
      handle: "text-emerald-300",
      gradient: "from-emerald-500/10 to-transparent",
      bar: "bg-emerald-400",
    },
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-500/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[200px] bg-cyan-500/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
         
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl border border-violet-500/25 bg-card overflow-hidden mb-8 p-8 md:p-12 text-center group hover:border-violet-500/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-500"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/8 via-transparent to-cyan-500/5 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500/0 via-violet-500/80 to-cyan-500/60" />

          <div className="relative">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-500/15 border border-violet-500/25 mb-5 mx-auto">
              <MessageSquare className="w-6 h-6 text-violet-400" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Start a Conversation</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-sm mx-auto">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
            <motion.a
              href="mailto:gurs2806@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="group/btn relative inline-flex items-center gap-2 px-8 py-3 rounded-xl overflow-hidden font-semibold text-white"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600" />
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
              />
              <span className="relative flex items-center gap-2">
                <Send className="w-4 h-4" />
                gurs2806@gmail.com
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
        >
          {links.map((link) => {
            const Icon = link.icon;
            const c = link.color;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -3 }}
                className={`group relative flex flex-col rounded-xl border ${c.border} ${c.hoverBorder} bg-card p-5 transition-all duration-300 ${c.glow} overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${c.bar} opacity-0 group-hover:opacity-80 transition-opacity duration-300`} />

                <div className="relative flex items-start justify-between mb-4">
                  <div className={`flex items-center justify-center w-9 h-9 rounded-lg ${c.iconBg}`}>
                    <Icon className={`w-4 h-4 ${c.icon}`} />
                  </div>
                  <ArrowUpRight className={`w-4 h-4 ${c.icon} opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all`} />
                </div>

                <p className="relative text-xs font-mono text-muted-foreground uppercase tracking-wider mb-0.5">{link.label}</p>
                <p className={`relative text-sm font-semibold ${c.handle} mb-3`}>{link.handle}</p>
                <p className="relative text-xs text-muted-foreground mt-auto">{link.cta} →</p>
              </motion.a>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;