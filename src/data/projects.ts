import type { Project } from "@/components/projects/ProjectModal";

export const projectCategories = ["All", "Transit", "Business Apps", "AI & Data", "Web & Mobile", "Coursework & Tools"] as const;

export const projects: Project[] = [
  {
    "id": "gtfs-release-validator",
    "title": "GTFS Release Validator",
    "date": "2026",
    "category": "Transit",
    "summary": "Inspect and compare transit feed exports, trace differences to source records, and review a final feed before publication.",
    "description": "A workstation-based GTFS review tool covering individual feeds, CleverCAD and HASTUS bus comparisons, HASTUS rail review, and final-feed validation. It keeps original archives unchanged and provides evidence behind each finding. The experimental merge builder produces a draft feed for review.",
    "bullets": [
      "Inspect routes, trips, stops, calendars, shapes, and raw feed tables",
      "Compare source exports and final feeds using stop mappings and ordered stop patterns",
      "Trace missing stops, changed sequences, timing differences, and diagnostics to their records",
      "Export findings as JSON, CSV, Excel, and printable reports"
    ],
    "tech": [
      "Python",
      "GTFS",
      "Data Validation",
      "CSV / JSON"
    ],
    "imageSrc": "/projects/gtfs-release-validator.svg",
    "githubUrl": "https://github.com/Omar-Khattab-01/gtfs-release-validator"
  },
  {
    "id": "gtfs-viewer",
    "title": "GTFS Viewer",
    "date": "2026",
    "category": "Transit",
    "summary": "Open zipped transit feeds in the browser with pinned headings, coloured columns, virtual scrolling, and linked data checks.",
    "description": "A browser-based workspace for reading static GTFS feeds without extracting the ZIP. It combines large-table browsing with focused feed checks and issue navigation. Feed contents stay local to the browser.",
    "bullets": [
      "Keep up to three feeds open and switch between them",
      "Browse large stop-times and shapes tables with virtual scrolling",
      "Check required fields, duplicate keys, coordinates, dates, times, and sequences",
      "Follow issue descriptions to highlighted rows and fields"
    ],
    "tech": [
      "React",
      "TypeScript",
      "JSZip",
      "Papa Parse",
      "GTFS"
    ],
    "imageSrc": "/projects/gtfs-viewer.svg",
    "githubUrl": "https://github.com/Omar-Khattab-01/gtfs-viewer",
    "liveUrl": "https://omar-khattab-01.github.io/gtfs-viewer/"
  },
  {
    "id": "ero-operator-tools",
    "title": "ERO Operator Tools",
    "date": "2026",
    "category": "Transit",
    "summary": "An operator reference companion for paddle lookup, shift details, saved work, and a scheduled Line 1 view.",
    "description": "A web reference tool for OC Transpo Electric Rail Operators, built from my own operations experience. It brings paddle details, current and upcoming work, breaks, and clear times into a layout designed for use during a shift. It complements official operating documents and instructions.",
    "bullets": [
      "Look up full or shorthand paddle numbers",
      "Review trips, blocks, reporting times, breaks, and pay information",
      "Save regular work and retain a same-day paddle view",
      "Provide a scheduled Line 1 reference and approved-access LRV defect reporting"
    ],
    "tech": [
      "JavaScript",
      "Node.js",
      "Express",
      "Supabase"
    ],
    "imageSrc": "/projects/ero-operator-tools.svg",
    "githubUrl": "https://github.com/Omar-Khattab-01/ERO-Operator-Tools",
    "liveUrl": "https://ero-operator-tools.vercel.app"
  },
  {
    "id": "project-tracker",
    "title": "Project Tracker",
    "date": "2026",
    "category": "Business Apps",
    "summary": "Track projects, tasks, milestones, deadlines, and delivery health in a personal account workspace.",
    "description": "A desktop-first project tracker that combines a portfolio dashboard, expandable project lists, and week or month timelines. Each account has an individual workspace with archived work and exportable backups.",
    "bullets": [
      "Create and edit projects, tasks, milestones, priorities, and notes",
      "Review overdue work, upcoming deadlines, and calculated project health",
      "Search and filter across projects, tasks, and notes",
      "Plan dependencies and schedules, archive work, and export a backup"
    ],
    "tech": [
      "React",
      "TypeScript",
      "Firebase",
      "Tailwind CSS"
    ],
    "imageSrc": "/projects/project-tracker.svg",
    "githubUrl": "https://github.com/Omar-Khattab-01/project-tracker-app",
    "liveUrl": "https://project-tracker-online.web.app"
  },
  {
    "id": "milanos-cashout",
    "title": "Milano’s Cash Out",
    "date": "2026",
    "category": "Business Apps",
    "summary": "Bring employee shifts, driver earnings, store cash reconciliation, receipts, and staff schedules into one workflow.",
    "description": "A business web app for driver, cook, and cashier shifts with separate employee and management views. It distinguishes employee earnings from cash owed to the store and retains the source entries behind each total.",
    "bullets": [
      "Record shifts, hourly rates, deliveries, tips, and cash movements",
      "Keep money calculations in integer cents and preserve historical shift rates",
      "Save and print receipts, review corrections, and record payment review status",
      "Manage employees, operating costs, sales, and weekly schedules"
    ],
    "tech": [
      "TypeScript",
      "JavaScript",
      "Firebase",
      "HTML / CSS"
    ],
    "imageSrc": "/projects/milanos-cashout.svg"
  },
  {
    "id": "prime-physio-plus",
    "title": "Prime Physio Plus",
    "date": "2026",
    "category": "Business Apps",
    "summary": "Coordinate clinic visits, treatment plans, cubicle assignments, live task tracking, and staff workflows.",
    "description": "A clinic operations application built for Prime Physio Plus that coordinates visits from treatment plan to completion. Administrators assign cubicles and manage active visits, while dedicated staff screens track tasks, timing, and progress across the clinic floor.",
    "bullets": [
      "Start visits from saved treatment plans and assign a primary cubicle",
      "Show task checklists, visit status, and time remaining on live cubicle screens",
      "Record staff acknowledgements and task completions with timestamps",
      "Manage the daily staff roster, edit live task lists, and reassign cubicles",
      "Track cleaning resets and retain action history for completed or cancelled visits"
    ],
    "tech": [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS"
    ],
    "imageSrc": "/projects/prime-physio-plus.svg"
  },
  {
    "id": "oc-bus-tracker-chat",
    "title": "OC Bus Tracker Chat",
    "date": "2026",
    "summary": "Live OC Transpo helper that takes a block number and returns the active bus number(s) plus latest location text.",
    "description": "A live OC Transpo helper tool that accepts a block number such as 44-07 and returns the active bus number(s) with the latest location text in a simple chat-style interface.",
    "bullets": [
      "Accepts standard block-number input in formats like 44-07",
      "Automatically normalizes entries like 44-7 to 44-07",
      "Returns active bus numbers and the latest location line",
      "Exposes a POST /api/chat endpoint for programmatic tracking requests"
    ],
    "tech": [
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Vercel"
    ],
    "imageSrc": "/Bus_Tracker.png",
    "detailsImageSrc": "/Bus_Tracker_details.png",
    "githubUrl": "https://github.com/Omar-Khattab-01/OC-Bus-Tracker",
    "liveUrl": "https://oc-bus-tracker.vercel.app/",
    "category": "Transit"
  },
  {
    "id": "brightsmile-dental-clinic",
    "title": "BrightSmile Dental Clinic",
    "date": "2025",
    "summary": "Multi-page marketing website with a responsive design and an interactive booking flow for a dental practice.",
    "description": "A static dental clinic website prototype with a service catalogue, patient information, and a multi-step booking form. The form demonstrates the booking interaction in the browser; it does not submit appointments to a clinic. Both public versions are linked below.",
    "bullets": [
      "Multi-step booking form with progress indicators and inline validation",
      "Service catalogue with pricing highlights and animated reveal effects",
      "Embedded Google Map and contact form validation",
      "Responsive layout with shared UI components"
    ],
    "tech": [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "jQuery",
      "AOS"
    ],
    "imageSrc": "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGVudGlzdHxlbnwwfHwwfHx8MA%3D%3D",
    "githubUrl": "https://github.com/Omar-Khattab-01/brightsmile-dental-site",
    "category": "Web & Mobile",
    "relatedRepositories": [
      {
        "label": "Original BrightSmile project",
        "url": "https://github.com/Omar-Khattab-01/BrightSmile"
      }
    ]
  },
  {
    "id": "omar-khattab-portfolio",
    "title": "Omar Khattab Portfolio",
    "date": "2025",
    "summary": "My React and TypeScript portfolio, bringing together public projects, professional experience, and contact information.",
    "description": "The very site you're viewing: a React + TypeScript portfolio built with Vite, Tailwind, shadcn/ui, and Framer Motion, featuring smooth section navigation, modal project details, and accessible theming.",
    "bullets": [
      "Section-based layout with hash navigation, sticky navbar, and back-to-top control",
      "Framer Motion animations tuned for mobile and desktop performance",
      "shadcn/ui component system with Tailwind tokens for consistent styling",
      "Resume access, professional profiles, and contact links"
    ],
    "tech": [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion"
    ],
    "imageSrc": "/portfolio.png",
    "githubUrl": "https://github.com/Omar-Khattab-01/Omar-Khattab-Portfolio",
    "category": "Web & Mobile",
    "liveUrl": "https://www.omarkhattab.ca/"
  },
  {
    "id": "byblos-car-rental",
    "title": "Byblos Car Rental Platform",
    "date": "2024",
    "summary": "Native Android app for managing car rentals with real-time Firebase-backed bookings.",
    "description": "A mobile application that streamlines customer onboarding, vehicle browsing, and booking creation using Firebase services for real-time data persistence.",
    "bullets": [
      "Vehicle catalogue browsing with filtered search",
      "Real-time booking persistence via Firebase Realtime Database",
      "Customer onboarding with mobile-friendly input validation",
      "Analytics hooks using Firebase Analytics"
    ],
    "tech": [
      "Android",
      "Kotlin",
      "Java",
      "Firebase",
      "ViewBinding"
    ],
    "imageSrc": "https://plus.unsplash.com/premium_photo-1661290470322-a313098e7c2a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyJTIwcmVudGFsfGVufDB8fDB8fHww",
    "githubUrl": "https://github.com/Omar-Khattab-01/Byblos-Car-Rental-Platform-Android-",
    "category": "Web & Mobile"
  },
  {
    "id": "huffman-code-compressor",
    "title": "Huffman Code Compressor",
    "date": "2023",
    "summary": "Java CLI tool for compressing and decompressing files using Huffman coding.",
    "description": "A command-line utility that implements Huffman encoding and decoding for both text and binary files using custom priority queues and bit-level I/O.",
    "bullets": [
      "Huffman encoding/decoding for text and binary files",
      "Stream-based bit packing and unpacking",
      "Batch-mode CLI testing workflow",
      "Compression ratio reporting"
    ],
    "tech": [
      "Java"
    ],
    "imageSrc": "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww",
    "githubUrl": "https://github.com/Omar-Khattab-01/huffman-codec-java",
    "category": "Coursework & Tools"
  },
  {
    "id": "alien-pet-health",
    "title": "Alien Pet Health Deep Learning Classifier",
    "date": "2025",
    "summary": "Deep learning model for predicting pet health outcomes with production-ready metrics.",
    "description": "A Jupyter-driven machine learning workflow that builds and evaluates dense neural networks with regularization strategies and reproducible preprocessing.",
    "bullets": [
      "Train/validation/test split with scikit-learn pipelines",
      "Early stopping, dropout, and L2 regularization",
      "F1, precision, recall, and ROC-AUC reporting",
      "Saved learning-curve and ROC plots"
    ],
    "tech": [
      "Python",
      "TensorFlow",
      "Keras",
      "NumPy",
      "scikit-learn",
      "Matplotlib"
    ],
    "imageSrc": "https://plus.unsplash.com/premium_photo-1682124651258-410b25fa9dc0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww",
    "githubUrl": "https://github.com/Omar-Khattab-01/alien-pet-health-dl",
    "category": "AI & Data"
  },
  {
    "id": "gymbro-chatbot",
    "title": "GymBro ChatBot",
    "date": "2024",
    "summary": "AI-powered chatbot for generating personalized fitness and nutrition plans.",
    "description": "An interactive AI chatbot built with Gradio that assists users in creating workout routines, meal plans, and answering fitness-related questions.",
    "bullets": [
      "Interactive chat UI using Gradio",
      "Adjustable response creativity (temperature control)",
      "Predefined fitness prompts",
      "Deployment-ready structure for Hugging Face Spaces"
    ],
    "tech": [
      "Python",
      "Gradio",
      "LLM API"
    ],
    "imageSrc": "https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhdGJvdHxlbnwwfHwwfHx8MA%3D%3D",
    "githubUrl": "https://github.com/Omar-Khattab-01/GymBroChatbot",
    "category": "AI & Data"
  },
  {
    "id": "dcms",
    "title": "Dental Clinic Management System (DCMS)",
    "date": "2023",
    "summary": "Full-stack Spring Boot web app for managing patients, appointments, staff, and treatments with SQL-backed CRUD.",
    "description": "A clinic operations management system built with Spring Boot following an MVC structure. Supports appointment scheduling, patient management, and treatment tracking with a relational database backend.",
    "bullets": [
      "Patient registration and profile management",
      "Appointment scheduling and viewing",
      "Staff/branch management and treatment tracking",
      "SQL-backed CRUD using JDBC / RowMappers",
      "Server-side rendered UI using Thymeleaf"
    ],
    "tech": [
      "Java",
      "Spring Boot",
      "SQL",
      "Thymeleaf",
      "Maven"
    ],
    "imageSrc": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuYWdlbWVudCUyMHNvZnR3YXJlfGVufDB8fDB8fHww",
    "githubUrl": "https://github.com/Omar-Khattab-01/Dental-Clinic-Management-System",
    "category": "Business Apps"
  },
  {
    "id": "schedule-prompt",
    "title": "Schedule Prompt (Excel Builder)",
    "date": "2022",
    "summary": "Python script that builds a color-coded course schedule in Excel using interactive prompts and openpyxl.",
    "description": "A productivity script that prompts the user to add courses and automatically writes them into an Excel sheet with consistent formatting and color codes for readability.",
    "bullets": [
      "Interactive CLI prompts for course name, time, and color category",
      "Writes structured entries directly into Excel",
      "Color-coded blocks for quick visual scanning",
      "Designed to be easy to extend (more rules, templates, etc.)"
    ],
    "tech": [
      "Python",
      "openpyxl"
    ],
    "imageSrc": "https://images.unsplash.com/photo-1676276375900-dd41f828c985?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NoZWR1bGUlMjBzb2Z0d2FyZXxlbnwwfHwwfHx8MA%3D%3D",
    "githubUrl": "https://github.com/Omar-Khattab-01/Schedule-Prompt",
    "category": "Coursework & Tools"
  },
  {
    "id": "discord-linker",
    "title": "Discord Bot – Linker",
    "date": "2022",
    "summary": "Discord bot that saves and organizes lecture links for quick access inside a server.",
    "description": "A lightweight Discord bot created to reduce friction during online classes by saving frequently used lecture links and retrieving them quickly via commands.",
    "bullets": [
      "Commands to save, list, and retrieve lecture links",
      "Organized structure for fast access (by course/topic)",
      "Simple, practical bot designed for daily use"
    ],
    "tech": [
      "Python",
      "Discord API"
    ],
    "imageSrc": "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY29yZHxlbnwwfHwwfHx8MA%3D%3D",
    "githubUrl": "https://github.com/Omar-Khattab-01/Discord-Bot---Linker",
    "category": "Coursework & Tools"
  },
  {
    "id": "crypto-fetch",
    "title": "Discord Bot – CryptoFetch",
    "date": "2022",
    "summary": "Discord bot that tracks cryptocurrency prices and sends alerts when major price drops occur.",
    "description": "A Discord bot built to monitor crypto prices and notify users when prices cross thresholds, making it easier to track market movement without constantly checking apps.",
    "bullets": [
      "Pulls live crypto prices from an external API",
      "Configurable alerts for price drops / thresholds",
      "Posts updates and notifications into Discord channels"
    ],
    "tech": [
      "Python",
      "Discord API",
      "REST APIs"
    ],
    "imageSrc": "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "githubUrl": "https://github.com/Omar-Khattab-01/Discord-Bot---CryptoFetch",
    "category": "Coursework & Tools"
  },
  {
    "id": "scifact-vector-space",
    "title": "SciFact Vector-Space Retrieval",
    "date": "2026",
    "category": "AI & Data",
    "summary": "A team-built scientific document retriever using TF–IDF weighting, cosine similarity, and reproducible evaluation.",
    "description": "A CSI4107 group project ranking scientific documents against claims in the SciFact dataset. My contribution focused on data preparation, preprocessing caches, and consistent dataset paths. The notebook and report document the retrieval pipeline and recorded evaluation results.",
    "bullets": [
      "Normalize documents and claims before indexing",
      "Build term frequencies, document frequencies, and document norms",
      "Rank documents with TF–IDF and cosine similarity",
      "Cache preprocessing and export TREC-format rankings for evaluation"
    ],
    "tech": [
      "Python",
      "TF–IDF",
      "Information Retrieval",
      "Jupyter"
    ],
    "imageSrc": "/projects/scifact-vector-space.svg",
    "githubUrl": "https://github.com/Omar-Khattab-01/Vector_Space_Model_Based_Information_Retrieval_System_for_the_SciFact_Dataset"
  },
  {
    "id": "scifact-retrieval-experiments",
    "title": "SciFact Retrieval Experiments",
    "date": "2026",
    "category": "AI & Data",
    "summary": "Explore BM25, Sentence-BERT retrieval, and optional reranking against scientific claims.",
    "description": "A separate coursework repository exploring lexical and model-based retrieval on SciFact. It shares preprocessing and cached indexing across experiments. The current main script selects a Sentence-BERT model; alternative retrieval and reranking paths remain experimental.",
    "bullets": [
      "Parse the SciFact corpus and queries into a shared representation",
      "Implement a BM25 baseline and reuse cached preprocessing",
      "Integrate BEIR retrieval adapters and a Sentence-BERT path",
      "Save query-to-document rankings and explore cross-encoder reranking"
    ],
    "tech": [
      "Python",
      "BM25",
      "Sentence-BERT",
      "BEIR"
    ],
    "imageSrc": "/projects/scifact-retrieval-experiments.svg",
    "githubUrl": "https://github.com/Omar-Khattab-01/Vector-Space-Model-Based-Information-Retrieval-System-for-the-SciFact-Dataset"
  },
  {
    "id": "discord-gymbro",
    "title": "GymBro Discord Bot",
    "date": "2022",
    "category": "Coursework & Tools",
    "summary": "Track daily calories and macronutrients in Discord and reuse saved meal information.",
    "description": "My earlier Python nutrition-tracking bot, distinct from the conversational GymBro Chatbot. It keeps user-specific daily totals and stores nutrition records locally.",
    "bullets": [
      "Record calories, fat, carbohydrates, and protein",
      "Keep daily totals for each Discord user",
      "Save named meals and reuse their nutrition values",
      "Store entries in local text records"
    ],
    "tech": [
      "Python",
      "Discord API",
      "File Storage"
    ],
    "imageSrc": "/projects/discord-gymbro.svg",
    "githubUrl": "https://github.com/Omar-Khattab-01/Discord-Bot---GymBro"
  },
  {
    "id": "university-projects",
    "title": "University Projects",
    "date": "2021–2026",
    "category": "Coursework & Tools",
    "summary": "An archive of programming, algorithms, databases, software engineering, and programming-paradigm coursework.",
    "description": "Coursework, assignments, and labs grouped by academic year and course. The archive includes collaborative and instructor-provided material with the original credits and course context retained.",
    "bullets": [
      "Python foundations, Java data structures, and C++ exercises",
      "Taxi-data clustering in Java, Go, Prolog, and Scheme",
      "Database and software engineering project material",
      "Original contributor credits and course context retained"
    ],
    "tech": [
      "Java",
      "Python",
      "C++",
      "SQL",
      "Go",
      "Prolog",
      "Scheme"
    ],
    "imageSrc": "/projects/university-projects.svg",
    "githubUrl": "https://github.com/Omar-Khattab-01/University-Projects"
  },
  {
    "id": "seg3125",
    "title": "SEG3125 UI Coursework",
    "date": "2025",
    "category": "Coursework & Tools",
    "summary": "User-interface coursework and reference examples covering web design, prototypes, and conversational interfaces.",
    "description": "A course collection of web-design exercises, a website prototype, and retained conversational-interface references. It also links to my BrightSmile and GymBro projects, while keeping course examples distinct from my own work.",
    "bullets": [
      "HTML, CSS, JavaScript, and Bootstrap exercises",
      "Website prototype and interface-design coursework",
      "Conversational-interface reference examples",
      "Links to related BrightSmile and GymBro projects"
    ],
    "tech": [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap"
    ],
    "imageSrc": "/projects/seg3125.svg",
    "githubUrl": "https://github.com/Omar-Khattab-01/SEG3125"
  }
];
