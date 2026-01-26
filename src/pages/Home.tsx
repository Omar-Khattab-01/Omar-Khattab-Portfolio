import { motion } from "framer-motion";
import { MapPin, Mail, Github, ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { scrollToSection } from "@/lib/scroll";
import { Linkedin } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <PageWrapper>
      <section
        id="home"
        className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden scroll-mt-20"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
                <Sparkles className="h-4 w-4 text-primary" />
                Available for Opportunities
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text">Computer Science</span>
              <br />
              <span className="text-foreground">New Grad</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-primary font-medium mb-4">
              Machine Learning, Data Systems & Automation
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Experience building Python automation, scalable data pipelines, and ML-powered systems using TensorFlow and Elasticsearch.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="gap-2 bg-gradient-to-r from-primary to-accent hover:opacity-90 glow"
                onClick={() => scrollToSection("projects")}
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass-hover"
                onClick={() => scrollToSection("contact")}
              >
                Contact Me
              </Button>
              <Button asChild variant="secondary" size="lg" className="gap-2">
                <a href="/Omar_Khattab_Resume.pdf" download><Download className="h-4 w-4" />Resume</a>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
              <a href="https://maps.google.com/?q=Ottawa,ON" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass glass-hover text-sm">
                <MapPin className="h-4 w-4 text-primary" />Ottawa, ON
              </a>
              <a href="mailto:omar.hosam2000@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass glass-hover text-sm">
                <Mail className="h-4 w-4 text-primary" />omar.hosam2000@gmail.com
              </a>
              <a href="https://github.com/Omar-Khattab-01" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass glass-hover text-sm">
                <Github className="h-4 w-4 text-primary" />Omar-Khattab-01
              </a>
              <a href="https://www.linkedin.com/in/omar-khattab-4b10581b9/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass glass-hover text-sm">
                <Linkedin className="h-4 w-4 text-primary" />omar khattab
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  );
}
