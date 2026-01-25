import { motion } from "framer-motion";
import {
  Code,
  Database,
  Terminal,
  Wrench,
  Brain,
  Smartphone,
} from "lucide-react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface SkillCategory {
  id: string;
  title: string;
  descriptor: string;
  icon: typeof Code;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    title: "Languages",
    descriptor:
      "Programming and scripting languages I use across production and academic projects",
    icon: Code,
    skills: [
      "Python",
      "Java",
      "C++",
      "SQL",
      "JavaScript",
      "Bash",
      "HTML",
      "CSS",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    descriptor: "Server-side development, databases, and service integration",
    icon: Database,
    skills: [
      "Spring Boot",
      "REST APIs",
      "Firebase",
      "MySQL",
      "PostgreSQL",
      "JDBC",
      "JSON",
    ],
  },
  {
    id: "automation",
    title: "Automation & Testing",
    descriptor: "Testing, scripting, and workflow automation",
    icon: Terminal,
    skills: [
      "PyTest",
      "Selenium",
      "Requests",
      "CI Scripting",
      "GitHub Actions",
    ],
  },
  {
    id: "data-ml",
    title: "Data & ML",
    descriptor: "Data processing, modeling, and analytics tooling",
    icon: Brain,
    skills: [
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "NumPy",
      "pandas",
      "Matplotlib",
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    descriptor: "Android development and mobile architecture",
    icon: Smartphone,
    skills: [
      "Android",
      "Kotlin",
      "ViewBinding",
      "AndroidX Navigation",
      "Firebase Analytics",
    ],
  },
  {
    id: "tools",
    title: "Tools",
    descriptor: "Dev tooling, build systems, and collaboration platforms",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Gradle",
      "Maven",
      "Docker",
      "Jupyter Notebook",
      "Postman",
    ],
  },
];

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

const tooltips: Record<string, string> = {
  "Spring Boot": "Java framework for building RESTful services and MVC apps.",
  Firebase: "Backend services for auth, data, and analytics.",
  "GitHub Actions": "CI/CD automation for builds, tests, and deployments.",
};

function SkillPill({ label }: { label: string }) {
  const tooltip = tooltips[label];

  const pill = (
    <motion.span
      whileHover={{ scale: 1.04 }}
      className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground/90 transition-colors hover:border-primary/40 hover:text-foreground"
    >
      {label}
    </motion.span>
  );

  if (!tooltip) {
    return pill;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{pill}</TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
}

export default function Skills() {
  return (
    <PageWrapper>
      <section id="skills" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Skills"
            subtitle="Technical expertise across languages, frameworks, and tools"
          />
          <p className="text-center text-sm text-muted-foreground mb-10 max-w-3xl mx-auto">
            Technologies I've used across production projects, academic work, and personal builds.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="glass glass-hover rounded-2xl p-6 group"
              >
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.descriptor}
                    </p>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillPill key={skill} label={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
