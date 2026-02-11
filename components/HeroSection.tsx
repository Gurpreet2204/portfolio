import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const roles = [
  "Full Stack Developer",
  "Frontend Specialist",
  "React Native Engineer",
  "UI/UX Enthusiast",
];

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIdx + 1));
          if (charIdx + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIdx((c) => c + 1);
          }
        } else {
          setDisplay(current.slice(0, charIdx - 1));
          if (charIdx - 1 === 0) {
            setDeleting(false);
            setWordIdx((w) => (w + 1) % words.length);
            setCharIdx(0);
          } else {
            setCharIdx((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

function FloatingOrb({
  color,
  size,
  x,
  y,
  duration,
  delay,
}: {
  color: string;
  size: number;
  x: string;
  y: string;
  duration: number;
  delay: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left: x,
        top: y,
        background: color,
        filter: `blur(${size * 0.55}px)`,
      }}
      animate={{
        y: [0, -30, 0, 20, 0],
        x: [0, 15, -10, 5, 0],
        scale: [1, 1.08, 0.95, 1.04, 1],
        opacity: [0.35, 0.55, 0.38, 0.5, 0.35],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}


const streakRepeatDelays = [0, 1.5, 3.2, 0.8, 2.1, 4.5].map(
  () => Math.random() * 6 + 3
);

function Streak({
  delay,
  left,
  repeatDelay,
}: {
  delay: number;
  left: string;
  repeatDelay: number;
}) {
  return (
    <motion.div
      className="absolute top-0 w-[1px] pointer-events-none"
      style={{
        left,
        background:
          "linear-gradient(to bottom, transparent, rgba(139,92,246,0.6), transparent)",
        height: 120,
      }}
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: "110vh", opacity: [0, 1, 1, 0] }}
      transition={{
        duration: 2.8,
        delay,
        repeat: Infinity,
        repeatDelay,
        ease: "linear",
      }}
    />
  );
}

function GridDots() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(139,92,246,0.18) 1px, transparent 1px)",
        backgroundSize: "48px 48px",
        maskImage:
          "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)",
      }}
    />
  );
}

function AnimatedCounter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [val, setVal] = useState(0);

  useEffect(() => {
    const controls = animate(count, to, {
      duration: 2,
      delay: 1.4,
      ease: "easeOut",
    });
    const unsub = rounded.on("change", setVal);
    return () => {
      controls.stop();
      unsub();
    };
  }, [to, count, rounded]);

  return (
    <span>
      {val}
      {suffix}
    </span>
  );
}

const HeroSection = () => {
  const role = useTypewriter(roles);
  const containerRef = useRef<HTMLDivElement>(null);

  const streaks = [
    { delay: 0, left: "10%" },
    { delay: 1.5, left: "25%" },
    { delay: 3.2, left: "45%" },
    { delay: 0.8, left: "63%" },
    { delay: 2.1, left: "78%" },
    { delay: 4.5, left: "88%" },
  ];

  const stats = [
    { value: 2, suffix: "+", label: "Years Exp." },
    { value: 5, suffix: "+", label: "Projects" },
    { value: 5, suffix: "", label: "Tech Stacks" },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-background" />
      <GridDots />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      <FloatingOrb
        color="rgba(139,92,246,0.4)"
        size={500}
        x="60%"
        y="-10%"
        duration={9}
        delay={0}
      />
      <FloatingOrb
        color="rgba(6,182,212,0.25)"
        size={380}
        x="-5%"
        y="40%"
        duration={11}
        delay={2}
      />
      <FloatingOrb
        color="rgba(236,72,153,0.18)"
        size={280}
        x="75%"
        y="65%"
        duration={13}
        delay={1}
      />
      <FloatingOrb
        color="rgba(245,158,11,0.12)"
        size={200}
        x="20%"
        y="75%"
        duration={8}
        delay={3}
      />

      {streaks.map((s, i) => (
        <Streak
          key={i}
          delay={s.delay}
          left={s.left}
          repeatDelay={streakRepeatDelays[i]}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-mono tracking-widest uppercase mb-8"
        >
          <Sparkles className="w-3 h-3" />
          Available for opportunities
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        </motion.div>

        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-4">
          {["Hi,", "I'm"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
          <br />
          {["Gurpreet", "Singh"].map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.3 + 0.15 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block mr-4 ${i === 0 ? "text-gradient" : ""}`}
            >
              {word}
            </motion.span>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="h-8 mb-6 flex items-center justify-center"
        >
          <span className="font-mono text-lg text-violet-400">
            {role}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="inline-block w-0.5 h-5 bg-violet-400 ml-0.5 align-middle"
            />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Full Stack Developer skilled in building responsive and dynamic web
          applications with JavaScript, MERN stack & modern technologies.
          Turning complex ideas into elegant digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative px-8 py-3 rounded-lg overflow-hidden font-semibold text-white"
          >
            <motion.span
              className="absolute inset-0 rounded-lg"
              style={{
                background:
                  "linear-gradient(135deg, #7c3aed, #6366f1, #8b5cf6)",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <span className="relative flex items-center gap-2">
              Explore My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, borderColor: "rgba(139,92,246,0.6)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 rounded-lg border border-border text-foreground backdrop-blur-sm hover:bg-violet-500/5 transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.7 }}
          className="flex justify-center gap-10"
        >
          {stats.map(({ value, suffix, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gradient">
                <AnimatedCounter to={value} suffix={suffix} />
              </p>
              <p className="text-xs text-muted-foreground font-mono mt-1">
                {label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <motion.div
          className="w-[1px] h-8 bg-gradient-to-b from-violet-500/60 to-transparent"
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;