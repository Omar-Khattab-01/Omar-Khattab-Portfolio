import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectModal, type Project } from "@/components/projects/ProjectModal";
import { projects, projectCategories } from "@/data/projects";


function ProjectThumbnail({
  src,
  title,
  fit = "cover",
}: {
  src: string;
  title: string;
  fit?: "cover" | "contain";
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl mb-4">
      {hasError ? (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted/60 text-sm font-medium text-muted-foreground">
          {title}
        </div>
      ) : (
        <img
          src={src}
          alt={`${title} thumbnail`}
          className={`h-full w-full ${fit === "contain" ? "object-contain bg-muted/30 p-1" : "object-cover"}`}
          onError={() => setHasError(true)}
          loading="lazy"
        />
      )}
    </div>
  );
}


export default function Projects() {
  const [category, setCategory] = useState<(typeof projectCategories)[number]>("All");
  const visibleProjects = category === "All" ? projects : projects.filter((project) => project.category === category);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const lastFocusedButtonRef = useRef<HTMLButtonElement | null>(null);
  const wasModalOpenRef = useRef(false);

  useEffect(() => {
    if (wasModalOpenRef.current && !selectedProject) {
      lastFocusedButtonRef.current?.focus();
    }
    wasModalOpenRef.current = Boolean(selectedProject);
  }, [selectedProject]);

  return (
    <PageWrapper>
      <section id="projects" className="py-20 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Projects"
            subtitle="Public work in transit technology, business applications, AI, and software development"
          />

          <div className="mb-8 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects by category">
            {projectCategories.map((item) => (
              <Button
                key={item}
                variant={category === item ? "default" : "outline"}
                size="sm"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
              >
                {item} ({item === "All" ? projects.length : projects.filter((project) => project.category === item).length})
              </Button>
            ))}
          </div>
          <p className="mb-6 text-center text-sm text-muted-foreground" role="status">
            Showing {visibleProjects.length} of {projects.length} projects
          </p>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:[&>*:last-child:nth-child(3n+1)]:lg:col-start-2">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={false}
                transition={{ delay: index * 0.05, duration: 0.25 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="glass glass-hover rounded-2xl p-6 h-full flex flex-col relative overflow-hidden">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex h-full flex-col">
                    <ProjectThumbnail
                      src={project.imageSrc}
                      title={project.title}
                      fit={project.id === "oc-bus-tracker-chat" ? "contain" : "cover"}
                    />
                    {/* Title */}
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Date Badge */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4" />
                      {project.date}
                    </div>

                    {/* Summary */}
                    <p className="text-muted-foreground text-sm mb-4 flex-1">
                      {project.summary}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 4).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 4}
                        </Badge>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="mt-auto flex">
                      <Button
                        size="sm"
                        aria-label={`View details for ${project.title}`}
                        onClick={(event) => {
                          lastFocusedButtonRef.current = event.currentTarget;
                          setSelectedProject(project);
                        }}
                        className="w-full"
                      >
                        Details
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="gap-2">
              <a href="https://github.com/Omar-Khattab-01?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" /> Browse all public repositories
              </a>
            </Button>
          </div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </PageWrapper>
  );
}
