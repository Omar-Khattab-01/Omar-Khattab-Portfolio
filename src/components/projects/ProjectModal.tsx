import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import { ExternalLink, Github, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface Project {
  id: string;
  title: string;
  date: string;
  summary: string;
  description: string;
  bullets: string[];
  tech: string[];
  imageSrc: string;
  detailsImageSrc?: string;
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectModalImage({ src, title }: { src: string; title: string }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl mb-6">
      {hasError ? (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-muted to-muted/60 text-sm font-medium text-muted-foreground">
          {title}
        </div>
      ) : (
        <img
          src={src}
          alt={`${title} preview`}
          className="h-full w-full object-cover"
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!project) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    dialogRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project || typeof document === "undefined") {
    return null;
  }

  const modal = (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`project-${project.id}-title`}
          tabIndex={-1}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(event) => event.stopPropagation()}
          className="glass rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative focus:outline-none"
        >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4"
              onClick={onClose}
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </Button>

            <ProjectModalImage
              src={project.detailsImageSrc ?? project.imageSrc}
              title={project.title}
            />

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Calendar className="h-4 w-4" />
              {project.date}
            </div>

            <h2
              id={`project-${project.id}-title`}
              className="text-2xl font-display font-bold gradient-text mb-4"
            >
              {project.title}
            </h2>

            <h3 className="text-sm font-semibold text-foreground mb-2">
              Overview
            </h3>
            <p className="text-muted-foreground mb-6">{project.description}</p>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-semibold text-foreground mb-2">
                Key Features
              </h3>
              <ul className="space-y-2">
                {project.bullets.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {(project.githubUrl || project.liveUrl) && (
              <div className="flex flex-wrap gap-2">
                {project.githubUrl && (
                  <Button asChild className="gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      View on GitHub
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild variant="outline" className="gap-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return createPortal(modal, document.body);
}
