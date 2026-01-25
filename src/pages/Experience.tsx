import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: "tech" | "other";
}

const experiences: Experience[] = [
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    company: "University of Ottawa",
    location: "Ottawa, ON",
    period: "Jan 2026 – Present",
    description: [
      "Python automation pipelines for preprocessing/validation/transforming news corpora → structured JSON",
      "ETL workflows integrating Elasticsearch indexing, relevance judgment, automated scoring with IR metrics",
      "Evaluation scripts for diagnostics (hallucinations/coverage gaps)",
      "Dense retrieval models in TensorFlow for QA matching; monitor trends, tune thresholds",
      "Reproducible data collection + citation-ready benchmarking outputs",
    ],
    type: "tech",
  },
  {
    id: "ero",
    title: "Electric Rail Operator (ERO)",
    company: "OC Transpo",
    location: "Ottawa, ON",
    period: "Apr 2025 – Present",
    description: [
      "Operate/monitor LRT under TOCC direction using CBTC",
      "Radio comms with repeat-backs, movement authority",
      "Incident logging and escalation, alarm response",
    ],
    type: "other",
  },
  {
    id: "bus-operator",
    title: "Bus Operator",
    company: "OC Transpo",
    location: "Ottawa, ON",
    period: "Mar 2024 – Apr 2025",
    description: [
      "Operate high-density routes safely",
      "Coordinate with Control Centre during detours/emergencies",
      "Conflict resolution under time pressure",
    ],
    type: "other",
  },
];

export default function Experience() {
  return (
    <PageWrapper>
      <section id="experience" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Experience"
            subtitle="My professional journey and work experience"
          />

          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-start gap-8 mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary glow transform -translate-x-1/2 md:-translate-x-1/2 mt-6 z-10">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass glass-hover rounded-2xl p-6"
                    >
                      {/* Header */}
                      <div className={`flex items-start gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium">{exp.company}</p>
                        </div>
                      </div>

                      {/* Meta */}
                      <div className={`flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Type Badge */}
                      <div className={`mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        <Badge variant={exp.type === "tech" ? "default" : "secondary"}>
                          {exp.type === "tech" ? "Technical" : "Operations"}
                        </Badge>
                      </div>

                      {/* Description */}
                      <ul className={`space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                        {exp.description.map((item, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-2 text-sm text-muted-foreground ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                          >
                            <span className="text-primary mt-1 flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
