import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectModal, type Project } from "@/components/projects/ProjectModal";


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


const projects: Project[] = [
  {
    id: "oc-bus-tracker-chat",
    title: "OC Bus Tracker Chat",
    date: "2026",
    summary:
      "Live OC Transpo helper that maps a block number to active bus IDs and latest location text through a chat-style interface.",
    description:
      "A live OC Transpo tracking tool that accepts block numbers such as 44-07, normalizes input like 44-7 to 44-07, and returns the active bus number(s) plus latest location text in a simple chat-style interface.",
    bullets: [
      "Block input normalization to reduce formatting mistakes",
      "Chat-style interface for quick dispatch-like lookups",
      "API endpoint for programmatic block tracking requests",
      "Deployed live on Vercel for quick operator access",
    ],
    tech: ["Node.js", "Express", "Playwright", "JavaScript", "Vercel"],
    imageSrc: "/Bus_Tracker.png",
    detailsImageSrc: "/Bus_Tracker_details.png",
    githubUrl: "https://github.com/Omar-Khattab-01/OC-Bus-Tracker",
    liveUrl: "https://oc-bus-tracker.vercel.app/",
  },
  {
    id: "brightsmile-dental-clinic",
    title: "BrightSmile Dental Clinic",
    date: "2025",
    summary:
      "Multi-page marketing website with a responsive design and an interactive booking flow for a dental practice.",
    description:
      "A polished static website built for a dental clinic featuring a service catalogue, multi-step booking form, and consistent branding across multiple pages.",
    bullets: [
      "Multi-step booking form with progress indicators and inline validation",
      "Service catalogue with pricing highlights and animated reveal effects",
      "Embedded Google Map and contact form validation",
      "Responsive layout with shared UI components",
    ],
    tech: ["HTML5", "CSS3", "JavaScript (ES6)", "jQuery", "AOS"],
    imageSrc: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D",
    githubUrl: "https://github.com/Omar-Khattab-01/brightsmile-dental-site",
  },
  {
    id: "omar-khattab-portfolio",
    title: "Omar Khattab Portfolio",
    date: "2025",
    summary:
      "Single-page portfolio showcasing projects and experience with motion, responsive layout, and recruiter-ready CTAs.",
    description:
      "The very site you're viewing: a React + TypeScript portfolio built with Vite, Tailwind, shadcn/ui, and Framer Motion, featuring smooth section navigation, modal project details, and accessible theming.",
    bullets: [
      "Section-based layout with hash navigation, sticky navbar, and back-to-top control",
      "Framer Motion animations tuned for mobile and desktop performance",
      "shadcn/ui component system with Tailwind tokens for consistent styling",
      "Resume download, social links, and recruiter-focused calls-to-action",
    ],
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    imageSrc: "/portfolio.png",
    githubUrl: "https://github.com/Omar-Khattab-01/Omar-Khattab-Portfolio",
  },
  {
    id: "byblos-car-rental",
    title: "Byblos Car Rental Platform",
    date: "2024",
    summary:
      "Native Android app for managing car rentals with real-time Firebase-backed bookings.",
    description:
      "A mobile application that streamlines customer onboarding, vehicle browsing, and booking creation using Firebase services for real-time data persistence.",
    bullets: [
      "Vehicle catalogue browsing with filtered search",
      "Real-time booking persistence via Firebase Realtime Database",
      "Customer onboarding with mobile-friendly input validation",
      "Analytics hooks using Firebase Analytics",
    ],
    tech: ["Android", "Kotlin", "Java", "Firebase", "ViewBinding"],
    imageSrc: "https://plus.unsplash.com/premium_photo-1661290470322-a313098e7c2a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcmVudGFsfGVufDB8fDB8fHww",
    githubUrl: "https://github.com/Omar-Khattab-01/Byblos-Car-Rental-Platform-Android-",
  },
  {
    id: "huffman-code-compressor",
    title: "Huffman Code Compressor",
    date: "2023",
    summary:
      "Java CLI tool for compressing and decompressing files using Huffman coding.",
    description:
      "A command-line utility that implements Huffman encoding and decoding for both text and binary files using custom priority queues and bit-level I/O.",
    bullets: [
      "Huffman encoding/decoding for text and binary files",
      "Stream-based bit packing and unpacking",
      "Batch-mode CLI testing workflow",
      "Compression ratio reporting",
    ],
    tech: ["Java"],
    imageSrc: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww",
    githubUrl: "https://github.com/Omar-Khattab-01/huffman-codec-java",
  },
  {
    id: "alien-pet-health",
    title: "Alien Pet Health Deep Learning Classifier",
    date: "2025",
    summary:
      "Deep learning model for predicting pet health outcomes with production-ready metrics.",
    description:
      "A Jupyter-driven machine learning workflow that builds and evaluates dense neural networks with regularization strategies and reproducible preprocessing.",
    bullets: [
      "Train/validation/test split with scikit-learn pipelines",
      "Early stopping, dropout, and L2 regularization",
      "F1, precision, recall, and ROC-AUC reporting",
      "Saved learning-curve and ROC plots",
    ],
    tech: [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "scikit-learn",
      "Matplotlib",
    ],
    imageSrc: "https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww",
    githubUrl: "https://github.com/Omar-Khattab-01/alien-pet-health-dl",
  },
  {
    id: "gymbro-chatbot",
    title: "GymBro ChatBot",
    date: "2024",
    summary:
      "AI-powered chatbot for generating personalized fitness and nutrition plans.",
    description:
      "An interactive AI chatbot built with Gradio that assists users in creating workout routines, meal plans, and answering fitness-related questions.",
    bullets: [
      "Interactive chat UI using Gradio",
      "Adjustable response creativity (temperature control)",
      "Predefined fitness prompts",
      "Deployment-ready structure for Hugging Face Spaces",
    ],
    tech: ["Python", "Gradio", "LLM API"],
    imageSrc: "https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhdGJvdHxlbnwwfHwwfHx8MA%3D%3D",
    githubUrl: "https://github.com/Omar-Khattab-01/GymBroChatbot",
  },
  {
    id: "dcms",
    title: "Dental Clinic Management System (DCMS)",
    date: "2023",
    summary:
      "Full-stack Spring Boot web app for managing patients, appointments, staff, and treatments with SQL-backed CRUD.",
    description:
      "A clinic operations management system built with Spring Boot following an MVC structure. Supports appointment scheduling, patient management, and treatment tracking with a relational database backend.",
    bullets: [
      "Patient registration and profile management",
      "Appointment scheduling and viewing",
      "Staff/branch management and treatment tracking",
      "SQL-backed CRUD using JDBC / RowMappers",
      "Server-side rendered UI using Thymeleaf",
    ],
    tech: ["Java", "Spring Boot", "SQL", "Thymeleaf", "Maven"],
    imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuYWdlbWVudCUyMHNvZnR3YXJlfGVufDB8fDB8fHww",
    githubUrl: "https://github.com/Omar-Khattab-01/Dental-Clinic-Management-System",
  },
  {
    id: "schedule-prompt",
    title: "Schedule Prompt (Excel Builder)",
    date: "2022",
    summary:
      "Python script that builds a color-coded course schedule in Excel using interactive prompts and openpyxl.",
    description:
      "A productivity script that prompts the user to add courses and automatically writes them into an Excel sheet with consistent formatting and color codes for readability.",
    bullets: [
      "Interactive CLI prompts for course name, time, and color category",
      "Writes structured entries directly into Excel",
      "Color-coded blocks for quick visual scanning",
      "Designed to be easy to extend (more rules, templates, etc.)",
    ],
    tech: ["Python", "openpyxl"],
    imageSrc: "https://images.unsplash.com/photo-1676276375900-dd41f828c985?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NoZWR1bGUlMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    githubUrl: "https://github.com/Omar-Khattab-01/Schedule-Prompt",
  },
  {
    id: "discord-linker",
    title: "Discord Bot – Linker",
    date: "2022",
    summary:
      "Discord bot that saves and organizes lecture links for quick access inside a server.",
    description:
      "A lightweight Discord bot created to reduce friction during online classes by saving frequently used lecture links and retrieving them quickly via commands.",
    bullets: [
      "Commands to save, list, and retrieve lecture links",
      "Organized structure for fast access (by course/topic)",
      "Simple, practical bot designed for daily use",
    ],
    tech: ["Python", "Discord API"],
    imageSrc: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY29yZHxlbnwwfHwwfHx8MA%3D%3D",
    githubUrl: "https://github.com/Omar-Khattab-01/Discord-Bot---Linker",
  },
  {
    id: "crypto-fetch",
    title: "Discord Bot – CryptoFetch",
    date: "2022",
    summary:
      "Discord bot that tracks cryptocurrency prices and sends alerts when major price drops occur.",
    description:
      "A Discord bot built to monitor crypto prices and notify users when prices cross thresholds, making it easier to track market movement without constantly checking apps.",
    bullets: [
      "Pulls live crypto prices from an external API",
      "Configurable alerts for price drops / thresholds",
      "Posts updates and notifications into Discord channels",
    ],
    tech: ["Python", "Discord API", "REST APIs"],
    imageSrc: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/Omar-Khattab-01/Discord-Bot---CryptoFetch",
  },
];

export default function Projects() {
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
            subtitle="A selection of my recent work in machine learning, full-stack development, and mobile applications"
          />

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:[&>*:last-child:nth-child(3n+1)]:lg:col-start-2">
            {projects.map((project, index) => (
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
                    <p className="text-muted-foreground text-sm mb-4 flex-1 truncate">
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
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </PageWrapper>
  );
}
