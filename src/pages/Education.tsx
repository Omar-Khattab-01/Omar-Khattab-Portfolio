import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";

const coursework = [
  "Operating Systems",
  "Software Engineering",
  "Database Design",
  "Machine Learning",
  "Data Science",
  "Algorithms",
  "Computer Architecture",
  "Information Retrieval",
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

export default function Education() {
  return (
    <PageWrapper>
      <section id="education" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Education"
            subtitle="Academic background and relevant coursework"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            {/* Main Education Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="glass glass-hover rounded-2xl p-8 mb-8 relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start gap-6 mb-6">
                  <div className="p-4 rounded-xl bg-primary/10">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                      University of Ottawa
                    </h3>
                    <p className="text-lg text-primary font-medium mb-4">
                      Honours Bachelor of Science in Computer Science
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Sep 2020 – Apr 2026
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Ottawa, ON
                      </span>
                      <span className="flex items-center gap-2">
                        <Award className="h-4 w-4" />
                        GPA: 7.5/10
                      </span>
                    </div>
                  </div>
                </div>

                {/* Coursework */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                    Relevant Coursework
                  </h4>
                  <motion.div
                    variants={containerVariants}
                    className="flex flex-wrap gap-2"
                  >
                    {coursework.map((course, index) => (
                      <motion.div
                        key={course}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="px-4 py-2 text-sm hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                        >
                          {course}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="glass rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">6+</div>
                <p className="text-muted-foreground">Years of Coding Experience</p>
              </div>
              <div className="glass rounded-xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">30</div>
                <p className="text-muted-foreground">Core CS Courses Completed</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
