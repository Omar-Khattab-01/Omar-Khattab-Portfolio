import { motion } from "framer-motion";
import { useState } from "react";
import { Target, Zap, Code, BarChart } from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const values = [
  {
    icon: Target,
    title: "Reliability",
    description: "Building systems that work consistently and predictably.",
  },
  {
    icon: Zap,
    title: "Reproducibility",
    description: "Creating workflows that can be replicated and validated.",
  },
  {
    icon: Code,
    title: "Clean Engineering",
    description: "Writing maintainable, well-documented code.",
  },
  {
    icon: BarChart,
    title: "Measurable Results",
    description: "Focusing on outcomes that can be quantified and improved.",
  },
];

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <PageWrapper>
      <section id="about" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="About Me"
            subtitle="Computer Science New Grad with a focus on machine learning systems, data pipelines, and automation."
          />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr_1fr] gap-10 lg:gap-12 items-center">
              {/* Middle: Photo */}
              <motion.div
                variants={itemVariants}
                className="order-1 lg:order-2 flex flex-col items-center"
              >
                <div className="about-photo-frame">
                  <div className="about-photo-inner">
                    <img
                      src="/omarkhattab.png"
                      alt="Omar Khattab portrait"
                      className={`about-photo-img${imageError ? " is-hidden" : ""}`}
                      onError={() => setImageError(true)}
                    />
                    <div
                      className={`about-photo-fallback${imageError ? " is-visible" : ""}`}
                      aria-hidden={!imageError}
                    >
                      <span>OK</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Left: About Text */}
              <motion.div
                variants={itemVariants}
                className="glass rounded-2xl p-8 order-2 lg:order-1 self-center"
              >
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                    I’m Omar Khattab, a Computer Science student at the University of Ottawa graduating in April 2026, building practical software systems with emphasis on automation, testing, performance evaluation, and reliability.                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                    My experience includes developing backend services, Python automation, data pipelines, and engineering tooling that improve system quality and developer workflows. I work in Linux-based environments and design workflows for automated testing and system evaluation.                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-5">
                    I write clean, maintainable code and build scalable systems that support dependable, efficient software.
                  </p>
          
                </div>
              </motion.div>

              {/* Right: Values */}
              <motion.div
                variants={containerVariants}
                className="order-3 lg:order-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 self-center"
              >
                {values.map((value) => (
                  <motion.div
                    key={value.title}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass glass-hover rounded-xl p-6 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {value.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
