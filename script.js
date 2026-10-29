/**
 * @license
 * AI CareerPath — Smart Career Guidance System
 * Introduction to Prompt Engineering (IPE) College Project
 * Pure Vanilla JavaScript (ES6+), Zero Dependencies, Deterministic Rule-Based Architecture
 */

// ============================================================================
// 1. Career Database (Curated Industry Competency Models)
// ============================================================================
const CareerDatabase = [
  {
    id: "prompt-engineer",
    title: "Prompt Engineer & Generative AI Specialist",
    domain: "Artificial Intelligence & LLMs",
    description: "Designs, evaluates, and optimizes structured prompts, context pipelines, and RAG architectures to guide Foundation Models toward reliable, high-performance reasoning.",
    typicalRole: "Build system prompt frameworks, implement few-shot templates, minimize model hallucinations, and integrate LLM APIs into production applications.",
    salaryBenchmark: "$85,000 – $145,000 / ₹8 – 22 LPA",
    growthIndex: "+42% Growth (IPE High Focus)",
    requiredCoreSkills: [
      "Prompt Engineering",
      "Python",
      "RAG & Vector Databases",
      "LLM Evaluation",
      "REST APIs",
      "Git & GitHub"
    ],
    secondarySkills: [
      "Data Analysis (Pandas)",
      "TypeScript",
      "Docker",
      "System Design"
    ],
    matchingInterests: [
      "Natural Language Processing & Generative AI",
      "Automation, CI/CD & Developer Tooling",
      "Algorithm Optimization & Problem Solving"
    ],
    roadmap: [
      {
        phase: "Phase 1: Foundations",
        title: "LLM Mechanics & Foundational Prompting",
        desc: "Master tokenizer mechanics, temperature, top-p parameters, and core prompt heuristics (RTF, TAG, CREATE).",
        milestones: [
          { id: "pe_m1", title: "Study attention mechanisms & transformer tokenization limits", detail: "Understand sub-word tokens, context windows, and latency vs cost trade-offs." },
          { id: "pe_m2", title: "Practice Role-Task-Format (RTF) and delimiter engineering", detail: "Use XML tags (<context>, <input>) and markdown blocks to separate system instructions." },
          { id: "pe_m3", title: "Learn Python basics & API interaction", detail: "Work with requests, JSON parsing, environment variables, and asynchronous execution." }
        ],
        capstone: "Prompt Engineering Benchmark Suite: Evaluate 10 variations of complex prompts across reasoning, constraint adherence, and token efficiency."
      },
      {
        phase: "Phase 2: Advanced Reasoning",
        title: "Few-Shot In-Context & Chain-of-Thought (CoT)",
        desc: "Implement guided reasoning methods to solve complex multi-step reasoning tasks reliably.",
        milestones: [
          { id: "pe_m4", title: "Construct Few-Shot exemplar libraries", detail: "Learn positive and negative few-shot example curation to anchor model behaviors." },
          { id: "pe_m5", title: "Implement Chain-of-Thought & Tree-of-Thought prompts", detail: "Instruct models to articulate intermediate scratchpad thoughts before rendering conclusions." },
          { id: "pe_m6", title: "Explore structured JSON schema extraction", detail: "Enforce deterministic JSON outputs with schema validation and fallback repair logic." }
        ],
        capstone: "Autonomous Agent Reasoning Loop: Build a multi-step prompt pipeline that plans, critiques, and executes technical tasks with self-correction."
      },
      {
        phase: "Phase 3: RAG & Context Architectures",
        title: "Retrieval-Augmented Generation & Vector Retrieval",
        desc: "Ground generative models in dynamic external enterprise documents and structured data.",
        milestones: [
          { id: "pe_m7", title: "Master document chunking strategies & embedding generation", detail: "Evaluate fixed, sliding-window, and semantic markdown chunking." },
          { id: "pe_m8", title: "Implement vector retrieval with hybrid search", detail: "Integrate cosine similarity search with keyword BM25 filtering." },
          { id: "pe_m9", title: "Design context re-ranking & synthesis prompts", detail: "Prevent 'lost in the middle' degradation by positioning highest-relevance passages at prompt boundaries." }
        ],
        capstone: "Academic Research Assistant RAG: Search over 50 technical papers, extract citations, and generate synthesized answers."
      },
      {
        phase: "Phase 4: Production & Safety",
        title: "Evaluation Metrics, Guardrails & Deployment",
        desc: "Validate production safety, defend against prompt injection attacks, and benchmark accuracy at scale.",
        milestones: [
          { id: "pe_m10", title: "Implement Red-Teaming & Prompt Injection defense", detail: "Test jailbreak susceptibility, indirect prompt injection, and input sanitization layers." },
          { id: "pe_m11", title: "Build quantitative evaluation harnesses (Ragas / G-Eval)", detail: "Measure faithfulness, answer relevancy, and context precision objectively." },
          { id: "pe_m12", title: "Deploy containerized FastAPI service with rate limiting", detail: "Package the pipeline into Docker and monitor token consumption metrics." }
        ],
        capstone: "Enterprise-Grade Production AI Assistant with security filters, observability, and reproducible evaluation."
      }
    ]
  },
  {
    id: "full-stack-dev",
    title: "Full-Stack Web Software Engineer",
    domain: "Web & Mobile Application Development",
    description: "Architects client-facing user experiences, server-side APIs, database systems, and integration pipelines across the complete software delivery lifecycle.",
    typicalRole: "Design responsive frontends, implement robust REST/GraphQL APIs, manage relational/NoSQL databases, and deploy web applications to cloud runtimes.",
    salaryBenchmark: "$75,000 – $135,000 / ₹7 – 20 LPA",
    growthIndex: "+28% Sustained Industry Demand",
    requiredCoreSkills: [
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "React",
      "Node.js / Express",
      "SQL",
      "Git & GitHub"
    ],
    secondarySkills: [
      "Docker",
      "REST APIs",
      "System Design",
      "CI/CD Pipelines"
    ],
    matchingInterests: [
      "Web & Mobile Application Development",
      "Visual Aesthetics & User Experience",
      "Algorithm Optimization & Problem Solving"
    ],
    roadmap: [
      {
        phase: "Phase 1: Foundations",
        title: "Core Web Standards & Modern JavaScript",
        desc: "Master semantic HTML, responsive CSS layouts, DOM manipulation, asynchronous JavaScript, and ES6+ features.",
        milestones: [
          { id: "fs_m1", title: "Semantic HTML5, CSS Grid & Flexbox mastery", detail: "Build mobile-first, responsive layouts with WCAG AA accessibility compliance." },
          { id: "fs_m2", title: "JavaScript asynchronous programming & Event Loop", detail: "Master Promises, async/await, closures, prototypes, and fetch API." },
          { id: "fs_m3", title: "Git version control & collaborative workflow", detail: "Branching strategies, pull requests, resolving merge conflicts, and GitHub Actions." }
        ],
        capstone: "Interactive Collaborative Kanban Board: Pure vanilla JavaScript with local storage and drag-and-drop mechanics."
      },
      {
        phase: "Phase 2: Modern Frontend & Backend",
        title: "React, Node.js & Relational Databases",
        desc: "Develop full-stack web applications with component architectures and database-backed REST endpoints.",
        milestones: [
          { id: "fs_m4", title: "React state management & custom hooks", detail: "Component lifecycles, context API, state optimization, and client routing." },
          { id: "fs_m5", title: "Node.js & Express RESTful API design", detail: "Middleware architecture, JWT authentication, request validation, and error handling." },
          { id: "fs_m6", title: "PostgreSQL schema design & SQL optimization", detail: "Relational modeling, indexing, foreign keys, transactions, and ORM usage." }
        ],
        capstone: "Full-Stack SaaS Management Platform: Multi-tenant application with JWT authentication, role access control, and PostgreSQL."
      },
      {
        phase: "Phase 3: Architecture & Scalability",
        title: "TypeScript, State Machines & Containerization",
        desc: "Ensure type safety across the entire stack and package microservices for cloud deployment.",
        milestones: [
          { id: "fs_m7", title: "End-to-End TypeScript architecture", detail: "Shared types across frontend and backend, generics, and strict compiler enforcement." },
          { id: "fs_m8", title: "Docker containerization & multi-stage builds", detail: "Containerize frontend and backend with lightweight Alpine images and compose networks." },
          { id: "fs_m9", title: "API security hardening & OWASP Top 10 mitigation", detail: "CORS configuration, rate limiting, SQL injection defense, and CSRF protection." }
        ],
        capstone: "Containerized Microservices E-Commerce Store with real-time inventory updates and payment gateway webhooks."
      },
      {
        phase: "Phase 4: Production & Systems",
        title: "CI/CD, Monitoring & Distributed Systems",
        desc: "Deploy automated pipelines, monitor latency, and implement caching layers.",
        milestones: [
          { id: "fs_m10", title: "Automated CI/CD pipelines with GitHub Actions", detail: "Automated linting, unit testing, Docker image building, and automated deployment." },
          { id: "fs_m11", title: "Redis caching layer & message queues", detail: "In-memory caching for expensive queries and background job workers." },
          { id: "fs_m12", title: "Production observability with logging & tracing", detail: "Structured JSON logging, Prometheus metrics, and error tracking." }
        ],
        capstone: "Production-ready distributed platform deployed to AWS or GCP with automated horizontal scaling."
      }
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist & Machine Learning Analyst",
    domain: "Data Exploration & Statistical Analysis",
    description: "Extracts actionable predictive patterns from structured and unstructured datasets using statistical modeling, regression, and machine learning pipelines.",
    typicalRole: "Clean real-world datasets, build exploratory dashboards, train regression/classification models, and translate findings into business decisions.",
    salaryBenchmark: "$80,000 – $140,000 / ₹8 – 22 LPA",
    growthIndex: "+32% Industry Expansion",
    requiredCoreSkills: [
      "Python",
      "Data Analysis (Pandas)",
      "SQL",
      "Machine Learning Concepts",
      "Git & GitHub"
    ],
    secondarySkills: [
      "Prompt Engineering",
      "REST APIs",
      "Docker",
      "System Design"
    ],
    matchingInterests: [
      "Data Exploration & Statistical Analysis",
      "Natural Language Processing & Generative AI",
      "Algorithm Optimization & Problem Solving"
    ],
    roadmap: [
      {
        phase: "Phase 1: Foundations",
        title: "Mathematics, Statistics & Exploratory Data Analysis",
        desc: "Master linear algebra, inferential statistics, probability distributions, and Python data manipulation.",
        milestones: [
          { id: "ds_m1", title: "Applied statistics & probability fundamentals", detail: "Hypothesis testing, p-values, confidence intervals, and standard deviations." },
          { id: "ds_m2", title: "Pandas & NumPy data wrangling", detail: "Data cleaning, aggregation, grouping, missing value imputation, and vectorization." },
          { id: "ds_m3", title: "SQL advanced querying for analytical aggregation", detail: "Window functions, common table expressions (CTEs), and query optimization." }
        ],
        capstone: "Comprehensive EDA on Global Health Datasets with statistical correlation analysis and interactive visual charts."
      },
      {
        phase: "Phase 2: Classical Machine Learning",
        title: "Supervised & Unsupervised Modeling",
        desc: "Build, evaluate, and fine-tune predictive models using Scikit-Learn.",
        milestones: [
          { id: "ds_m4", title: "Supervised classification & regression models", detail: "Linear regression, logistic regression, decision trees, and random forests." },
          { id: "ds_m5", title: "Model validation & hyperparameter optimization", detail: "Cross-validation, ROC-AUC, Precision-Recall curves, and GridSearchCV." },
          { id: "ds_m6", title: "Unsupervised clustering & dimensionality reduction", detail: "K-Means, hierarchical clustering, PCA, and t-SNE visualizations." }
        ],
        capstone: "Customer Churn Prediction Engine with feature importance explainability (SHAP values)."
      },
      {
        phase: "Phase 3: Deep Learning & NLP",
        title: "Neural Networks & Modern Language Models",
        desc: "Explore neural architectures, embedding spaces, and fine-tuning open-weights models.",
        milestones: [
          { id: "ds_m7", title: "Neural network fundamentals with PyTorch", detail: "Backpropagation, activation functions, loss optimizers, and tensors." },
          { id: "ds_m8", title: "Natural Language Processing & word embeddings", detail: "Tokenization, Word2Vec, TF-IDF, and modern sentence transformers." },
          { id: "ds_m9", title: "Fine-tuning open-source LLMs (LoRA/QLoRA)", detail: "Parameter-efficient fine-tuning on custom instruction datasets." }
        ],
        capstone: "Domain-Specific Sentiment & Intent Analyzer built on transformer architectures."
      },
      {
        phase: "Phase 4: MLOps & Production",
        title: "Model Deployment, Monitoring & Drift Detection",
        desc: "Package machine learning models into reliable REST APIs with automated model versioning.",
        milestones: [
          { id: "ds_m10", title: "Model serialization & FastAPI endpoints", detail: "Export models with ONNX/pickle and serve low-latency inference endpoints." },
          { id: "ds_m11", title: "MLflow experiment tracking & model registry", detail: "Version control for model weights, training parameters, and metrics." },
          { id: "ds_m12", title: "Data drift detection & automated re-training", detail: "Monitor real-time distribution shifts and trigger automated pipeline updates." }
        ],
        capstone: "End-to-End Predictive Analytics Pipeline with automated testing, deployment, and drift monitoring."
      }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud Solutions & DevOps Platform Architect",
    domain: "Cloud Infrastructure & Scalability",
    description: "Constructs highly available, resilient cloud environments, automated deployment pipelines, and infrastructure-as-code foundations.",
    typicalRole: "Automate server provisioning, maintain Kubernetes clusters, configure continuous delivery, and guarantee 99.99% system uptime.",
    salaryBenchmark: "$85,000 – $150,000 / ₹9 – 25 LPA",
    growthIndex: "+35% Cloud Transition Rate",
    requiredCoreSkills: [
      "Docker",
      "AWS / Cloud Basics",
      "Linux & Terminal",
      "CI/CD Pipelines",
      "Git & GitHub",
      "Shell / Bash"
    ],
    secondarySkills: [
      "Python",
      "System Design",
      "Network Security",
      "SQL"
    ],
    matchingInterests: [
      "Cloud Infrastructure & Scalability",
      "Automation, CI/CD & Developer Tooling",
      "Cybersecurity & Threat Analysis"
    ],
    roadmap: [
      {
        phase: "Phase 1: Foundations",
        title: "Linux Systems, Networking & Scripting",
        desc: "Master Linux system administration, bash shell scripting, DNS, and IP networking.",
        milestones: [
          { id: "cd_m1", title: "Linux internals & command line mastery", detail: "File permissions, processes, systemd services, SSH, and resource monitoring." },
          { id: "cd_m2", title: "TCP/IP networking, subnets & DNS", detail: "Routing, firewalls, load balancers, TLS/SSL certificates, and HTTP/HTTPS headers." },
          { id: "cd_m3", title: "Bash & Python infrastructure automation", detail: "Automate repetitive server maintenance, log parsing, and scheduled cron jobs." }
        ],
        capstone: "Automated Linux Server Provisioning Script with security hardening and firewall configuration."
      },
      {
        phase: "Phase 2: Containers & Orchestration",
        title: "Docker & Kubernetes Operations",
        desc: "Containerize microservices and orchestrate clustered deployments with declarative manifests.",
        milestones: [
          { id: "cd_m4", title: "Advanced Docker containerization", detail: "Multi-stage builds, non-root users, volume persistence, and layer caching." },
          { id: "cd_m5", title: "Kubernetes core objects & manifests", detail: "Pods, Deployments, Services, ConfigMaps, Secrets, and Ingress controllers." },
          { id: "cd_m6", title: "Helm packaging & release management", detail: "Templating Kubernetes applications for multi-environment deployments." }
        ],
        capstone: "Self-Healing Multi-Service Microservices Cluster deployed on local Kubernetes with ingress routing."
      },
      {
        phase: "Phase 3: Infrastructure as Code (IaC)",
        title: "Terraform & Cloud Architecture",
        desc: "Define reproducible cloud infrastructure using declarative code on AWS or GCP.",
        milestones: [
          { id: "cd_m7", title: "Terraform infrastructure provisioning", detail: "State management, modules, input variables, and resource destruction safeguards." },
          { id: "cd_m8", title: "AWS core services (VPC, EC2, S3, RDS, IAM)", detail: "Least-privilege security roles, private subnets, NAT gateways, and auto-scaling." },
          { id: "cd_m9", title: "GitOps workflows with ArgoCD", detail: "Declarative cluster reconciliation synchronizing code directly from Git." }
        ],
        capstone: "Full Cloud VPC & Kubernetes Cluster provisioned 100% via Terraform code."
      },
      {
        phase: "Phase 4: Site Reliability & Observability",
        title: "Monitoring, Zero-Downtime Releases & SRE",
        desc: "Implement Prometheus monitoring, Grafana dashboards, and canary deployment strategies.",
        milestones: [
          { id: "cd_m10", title: "Prometheus metrics collection & Grafana dashboards", detail: "Service-level indicators (SLIs), error budgets, and alerting rules." },
          { id: "cd_m11", title: "Blue-Green & Canary deployment pipelines", detail: "Zero-downtime rolling updates with automatic rollbacks upon health check failures." },
          { id: "cd_m12", title: "Disaster recovery & backup automation", detail: "Cross-region snapshot replication and automated recovery drill playbooks." }
        ],
        capstone: "Enterprise SRE Observability Suite with live alerting, log tracing, and simulated incident remediation."
      }
    ]
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity & Information Defense Analyst",
    domain: "Cybersecurity & Threat Analysis",
    description: "Safeguards digital infrastructure, networks, and software applications by detecting vulnerabilities, monitoring intrusion vectors, and enforcing compliance.",
    typicalRole: "Perform security audits, investigate threat intelligence, simulate attack vectors (red teaming), and configure protective firewalls and SIEM systems.",
    salaryBenchmark: "$82,000 – $142,000 / ₹8 – 21 LPA",
    growthIndex: "+34% Critical Shortage",
    requiredCoreSkills: [
      "Network Security",
      "Linux & Terminal",
      "Cryptography Basics",
      "Vulnerability Assessment",
      "OWASP Top 10",
      "Git & GitHub"
    ],
    secondarySkills: [
      "Python",
      "Shell / Bash",
      "Docker",
      "System Design"
    ],
    matchingInterests: [
      "Cybersecurity & Threat Analysis",
      "Cloud Infrastructure & Scalability",
      "Algorithm Optimization & Problem Solving"
    ],
    roadmap: [
      {
        phase: "Phase 1: Foundations",
        title: "Networking Protocols & Systems Security",
        desc: "Understand packet structure, Wireshark packet capture, Linux file permissions, and cryptographic algorithms.",
        milestones: [
          { id: "sec_m1", title: "Deep OSI model & packet inspection", detail: "Analyze TCP handshakes, ARP spoofing, DNS cache poisoning, and ICMP packets." },
          { id: "sec_m2", title: "Applied cryptography & PKI infrastructure", detail: "Symmetric (AES) vs Asymmetric (RSA/ECC), hashing (SHA-256), and digital signatures." },
          { id: "sec_m3", title: "Security information basics & reconnaissance", detail: "OSINT collection, Nmap port scanning, and banner grabbing techniques." }
        ],
        capstone: "Comprehensive Network Vulnerability Assessment Report on a mock corporate subnet."
      },
      {
        phase: "Phase 2: Web & Application Security",
        title: "OWASP Top 10 & Penetration Testing",
        desc: "Identify, exploit, and remediate web application vulnerabilities.",
        milestones: [
          { id: "sec_m4", title: "SQL Injection & XSS exploitation and mitigation", detail: "Parameterized queries, sanitization libraries, and CSP headers." },
          { id: "sec_m5", title: "Broken authentication & authorization flaws", detail: "JWT tampering, IDOR vulnerabilities, and session hijacking prevention." },
          { id: "sec_m6", title: "Burp Suite proxy analysis", detail: "Intercept HTTP requests, fuzz parameter inputs, and automate vulnerability scanning." }
        ],
        capstone: "Full Penetration Test of a deliberately vulnerable web application (DVWA/Juice Shop) with detailed remediation guide."
      },
      {
        phase: "Phase 3: Defensive Operations (Blue Team)",
        title: "SIEM, Threat Hunting & Incident Response",
        desc: "Configure intrusion detection systems, analyze security logs, and formulate incident playbooks.",
        milestones: [
          { id: "sec_m7", title: "SIEM log monitoring with Splunk / Elastic", detail: "Querying syslog, Windows event logs, and constructing automated alert rules." },
          { id: "sec_m8", title: "Snort / Suricata IDS configuration", detail: "Writing custom signature rules to intercept malicious payloads in real-time." },
          { id: "sec_m9", title: "Incident response framework (NIST / SANS)", detail: "Containment strategies, evidence preservation, eradication, and post-mortem analysis." }
        ],
        capstone: "Blue Team Security Operations Center (SOC) Lab with live threat detection and automated alert triage."
      },
      {
        phase: "Phase 4: Cloud & AI Security",
        title: "Cloud IAM Hardening & LLM Threat Defense",
        desc: "Defend modern cloud environments and generative AI systems against emerging threats.",
        milestones: [
          { id: "sec_m10", title: "AWS Cloud security & IAM policy auditing", detail: "S3 bucket misconfigurations, IAM privilege escalation, and CloudTrail audit logs." },
          { id: "sec_m11", title: "LLM Security & Prompt Injection defense", detail: "Defend against OWASP Top 10 for LLMs, training data poisoning, and model extraction." },
          { id: "sec_m12", title: "Compliance standards & SOC 2 audit readiness", detail: "Data privacy regulations (GDPR/HIPAA), access matrices, and encryption at rest." }
        ],
        capstone: "Enterprise Cloud Security Posture Review with automated compliance auditing scripts."
      }
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX & Design Systems Engineer",
    domain: "Visual Aesthetics & User Experience",
    description: "Bridges the gap between human visual psychology and production code by constructing scalable design systems, micro-interactions, and accessible interfaces.",
    typicalRole: "Create high-fidelity Figma components, maintain cross-platform component libraries, conduct usability tests, and build frontends with flawless design fidelity.",
    salaryBenchmark: "$72,000 – $130,000 / ₹6 – 18 LPA",
    growthIndex: "+24% Steady Demand",
    requiredCoreSkills: [
      "Figma",
      "HTML/CSS",
      "JavaScript",
      "Design Systems",
      "UX Research",
      "Git & GitHub"
    ],
    secondarySkills: [
      "TypeScript",
      "React",
      "Wireframing",
      "Prompt Engineering"
    ],
    matchingInterests: [
      "Visual Aesthetics & User Experience",
      "Web & Mobile Application Development",
      "Product Management & System Design"
    ],
    roadmap: [
      {
        phase: "Phase 1: Foundations",
        title: "Visual Design Foundations & Figma Mastery",
        desc: "Master layout grids, 8pt spatial math, typographic hierarchy, WCAG contrast, and Figma auto-layout.",
        milestones: [
          { id: "ux_m1", title: "Figma component architecture & auto-layout 5.0", detail: "Nested variants, component properties, responsive constraints, and token variables." },
          { id: "ux_m2", title: "Typographic scale & 60-30-10 color math", detail: "Font pairings, line-height scaling, neutral palette tinting, and dark mode contrast." },
          { id: "ux_m3", title: "Wireframing & user journey mapping", detail: "Information architecture, site maps, and low-fidelity prototype testing." }
        ],
        capstone: "Complete Design Specification for a Complex Mobile Banking Experience in Figma."
      },
      {
        phase: "Phase 2: Interaction & Research",
        title: "Usability Testing & Micro-Interactions",
        desc: "Validate design hypotheses through structured user interviews and design animated micro-interactions.",
        milestones: [
          { id: "ux_m4", title: "Qualitative & quantitative user research methods", detail: "Usability testing protocols, SUS scoring, card sorting, and heat-map analysis." },
          { id: "ux_m5", title: "Micro-interaction prototyping & transition curves", detail: "Cubic-bezier timing, state transitions, and tactile feedback patterns." },
          { id: "ux_m6", title: "WCAG 2.2 AA accessibility guidelines", detail: "Screen reader considerations, keyboard focus rings, and color-blind proofing." }
        ],
        capstone: "Usability Audit & Redesign of a Healthcare Portal with documented before-and-after conversion metrics."
      },
      {
        phase: "Phase 3: Code Implementation",
        title: "Living Component Libraries (HTML, CSS, React)",
        desc: "Translate design tokens directly into production frontend code with zero design debt.",
        milestones: [
          { id: "ux_m7", title: "CSS architecture with custom design tokens", detail: "CSS variables, modular utility classes, and light/dark theme toggles." },
          { id: "ux_m8", title: "React accessible component engineering", detail: "Accessible headless primitives (Radix/Aria patterns), keyboard navigation, and focus management." },
          { id: "ux_m9", title: "Storybook documentation & visual regression testing", detail: "Component variant catalogs, interactive docs, and Chromatic regression checks." }
        ],
        capstone: "Open-Source Accessible Design System with 25+ components documented in Storybook."
      },
      {
        phase: "Phase 4: Design Leadership",
        title: "Design Governance & Product Strategy",
        desc: "Standardize design workflows across multi-disciplinary engineering organizations.",
        milestones: [
          { id: "ux_m10", title: "Design token synchronization pipelines", detail: "Automate token export from Figma to code repositories via GitHub actions." },
          { id: "ux_m11", title: "Product metrics & conversion rate optimization (CRO)", detail: "A/B testing methodologies, onboarding friction reduction, and churn analysis." },
          { id: "ux_m12", title: "AI-assisted design workflows & prompt styling", detail: "Using prompt engineering to generate consistent iconography, illustrations, and design copy." }
        ],
        capstone: "Enterprise Multi-Brand Design System supporting three distinct corporate product lines."
      }
    ]
  }
];

// ============================================================================
// 2. Skills Catalog by Category
// ============================================================================
const SkillsCatalog = [
  {
    category: "Languages & Core Programming",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "Shell / Bash"]
  },
  {
    category: "AI & Prompt Engineering (IPE Focus)",
    skills: ["Prompt Engineering", "RAG & Vector Databases", "LLM Evaluation", "Data Analysis (Pandas)", "Machine Learning Concepts"]
  },
  {
    category: "Web & Front-End Engineering",
    skills: ["HTML/CSS", "React", "Node.js / Express", "REST APIs", "Git & GitHub"]
  },
  {
    category: "Cloud, Infrastructure & DevOps",
    skills: ["Docker", "AWS / Cloud Basics", "Linux & Terminal", "CI/CD Pipelines", "System Design"]
  },
  {
    category: "Security & Systems Defense",
    skills: ["Network Security", "Cryptography Basics", "Vulnerability Assessment", "OWASP Top 10"]
  },
  {
    category: "Design, Product & UX",
    skills: ["Figma", "Design Systems", "UX Research", "Wireframing"]
  }
];

// ============================================================================
// 3. Student Interests Catalog
// ============================================================================
const InterestsList = [
  "Natural Language Processing & Generative AI",
  "Web & Mobile Application Development",
  "Cloud Infrastructure & Scalability",
  "Data Exploration & Statistical Analysis",
  "Cybersecurity & Threat Analysis",
  "Visual Aesthetics & User Experience",
  "Automation, CI/CD & Developer Tooling",
  "Algorithm Optimization & Problem Solving",
  "Product Management & System Design"
];

// ============================================================================
// 4. IPE Prompt Engineering Learning Lab Data
// ============================================================================
const PromptFrameworks = [
  {
    abbr: "RTF",
    name: "Role - Task - Format",
    desc: "Specify who the AI should embody, exactly what action it must execute, and the strict structural format of the returned output."
  },
  {
    abbr: "TAG",
    name: "Task - Action - Goal",
    desc: "Define the immediate assignment, the exact sequence of actions to undertake, and the ultimate objective or business outcome."
  },
  {
    abbr: "CREATE",
    name: "Character - Request - Examples - Adjustments - Type - Extras",
    desc: "A comprehensive framework providing rich persona detail, few-shot demonstration exemplars, negative constraints, and output type."
  },
  {
    abbr: "CoT",
    name: "Chain-of-Thought",
    desc: "Forces the model to think step-by-step in an explicit scratchpad prior to generating conclusions, cutting hallucinations by up to 60%."
  },
  {
    abbr: "Few-Shot",
    name: "In-Context Exemplars",
    desc: "Provides 2 to 3 pristine input/output pairs in the prompt to condition the model on style, brevity, and formatting requirements."
  },
  {
    abbr: "Delimiters",
    name: "Boundary Tags & Delimiters",
    desc: "Uses structured XML tags (<context>, <instructions>, <candidate_code>) to isolate prompt instructions from user inputs and prevent injection."
  }
];

const PromptComparisonScenarios = [
  {
    id: "resume-opt",
    title: "1. Resume Bullet Point Optimization",
    domain: "Career & Interview Preparation",
    basicPrompt: `Rewrite my resume bullet point:
"Worked on web app using React and made it faster."`,
    basicCritique: "Vague and unstructured. Lacks context on metrics, business impact, scale, technical details, or target format. The LLM will return generic corporate buzzwords.",
    advancedPrompt: `You are an elite Senior Technical Recruiter and Staff Software Engineer at a top technology company.

Optimize the following rough resume draft using the Google XYZ Formula: "Accomplished [X] as measured by [Y], by doing [Z]".

<context>
Role targeted: Full-Stack React Engineer
Audience: Engineering Hiring Managers & ATS parsers
Draft bullet: "Worked on web app using React and made it faster."
Available facts: Reduced page bundle size from 4.2MB to 850KB via dynamic code splitting and lazy loading images; decreased Lighthouse Time-to-Interactive (TTI) from 4.8s to 1.2s; supported 120,000 monthly active users.
</context>

<constraints>
- Provide exactly 3 bullet point variations: (1) High-Impact Leadership, (2) Deep Technical Specificity, (3) Balanced Metric-First.
- Start every bullet with a punchy, past-tense technical action verb (e.g. Engineered, Overhauled, Spearheaded).
- Never use filler adverbs like "successfully" or "actively".
- Keep each bullet strictly between 18 and 26 words.
</constraints>

<output_format>
Return the response in markdown with clear headings for each variation followed by a 1-sentence explanation of why the bullet resonates with recruiters.
</output_format>`,
    advancedHighlights: [
      "Role & Persona: Explicitly sets Staff Engineer + Recruiter mindset",
      "Context Isolation: Uses <context> tags to deliver concrete real-world data points",
      "XYZ Formula: Directs the exact professional framework to use",
      "Negative Constraints: Ban on empty adverbs and explicit word-count limits",
      "Structured Output: Requests 3 targeted variations with rationale"
    ]
  },
  {
    id: "mock-interview",
    title: "2. Technical Mock Interview Simulator",
    domain: "IPE Interactive Interviewer",
    basicPrompt: `Act as an interviewer and ask me questions about Python.`,
    basicCritique: "The LLM will either ask all questions at once in a giant list or assume answers itself. Zero interview pressure, grading criteria, or progressive difficulty.",
    advancedPrompt: `You are a Principal Software Engineer conducting a live 45-minute technical screen for a Junior Backend Developer role specializing in Python and REST APIs.

<protocol>
1. Ask ONE question at a time. Never ask multiple questions in a single response.
2. Wait for my response before evaluating.
3. When I reply, provide a 2-part critique:
   - Part A: Score (1-5) on correctness, efficiency, and Pythonic idioms.
   - Part B: Constructive feedback with the optimal Pythonic approach if needed.
4. Then immediately ask the NEXT question, progressively increasing difficulty from easy (Language quirks) to medium (Concurrency, Memory) to hard (System design).
</protocol>

<rules>
- Do not break character.
- If my answer is partially correct, press deeper with a follow-up probing question.
- Begin now with Question 1: Introduce yourself briefly and ask about Python's Global Interpreter Lock (GIL) and its practical implications for CPU-bound vs I/O-bound tasks.
</rules>`,
    advancedHighlights: [
      "Conversational Guardrails: Enforces 'ONE question at a time' execution rule",
      "Grading Rubric: Demands a 2-part score and constructive feedback loop",
      "Difficulty Curve: Specifies progressive escalation from syntax to architecture",
      "Character Retention: Strict instructions to avoid breaking simulation state"
    ]
  },
  {
    id: "feynman-algo",
    title: "3. Algorithm Explanation via Feynman Technique",
    domain: "Computer Science Learning",
    basicPrompt: `Explain how Dijkstra's algorithm works.`,
    basicCritique: "Produces generic Wikipedia-style pseudocode with mathematical jargon that overwhelms undergraduate students.",
    advancedPrompt: `You are an award-winning Computer Science educator known for using the Feynman Technique to demystify complex algorithms.

Explain Dijkstra's Shortest Path Algorithm to a 2nd-year CS student who understands arrays and graphs, but struggles with priority queues.

<structure>
1. Intuitive Real-World Analogy: Use an analogy of water flowing through pipes or traveling between subway stations.
2. Step-by-Step Mechanical Walkthrough: Trace a simple 4-node graph with labeled edge weights (A->B: 4, A->C: 2, etc.) showing the distance table at every step.
3. Why Greedy Works Here: Explain why finding the local minimum is guaranteed to be the global minimum when edge weights are positive.
4. Common Gotcha: Explain what catastrophically breaks when negative edge weights are introduced (and why Bellman-Ford is needed).
</structure>

<tone>
Supportive, engaging, visual, and mathematically sound without unnecessary academic pretension.
</tone>`,
    advancedHighlights: [
      "Feynman Pedagogy: Mandates intuitive analogy before diving into mechanics",
      "Concrete Trace: Requests an explicit 4-node walk-through table",
      "Core Invariant: Highlights greedy choice correctness",
      "Edge-case Gotcha: Bridges conceptual gap to negative cycle limitations"
    ]
  },
  {
    id: "code-refactor",
    title: "4. Code Refactoring & Security Audit",
    domain: "Software Engineering & Security",
    basicPrompt: `Check this Python code and fix bugs:
query = "SELECT * FROM users WHERE email = '" + user_input + "'"
cursor.execute(query)`,
    basicCritique: "The prompt gives no context on database engines, security standards, coding style guides, or error handling requirements.",
    advancedPrompt: `You are a Principal Application Security Architect and Python Core Reviewer.

Perform a security audit and production refactoring on the snippet below.

<untrusted_code>
def get_user_profile(user_input):
    query = "SELECT * FROM users WHERE email = '" + user_input + "'"
    cursor.execute(query)
    return cursor.fetchall()
</untrusted_code>

<requirements>
1. Threat Analysis: Explicitly name the vulnerability (CWE-89 SQL Injection), provide an example exploit payload that dumps the entire database, and explain how the injection bypasses authentication.
2. Production Refactoring: Provide the modernized, secure implementation using:
   - Parameterized queries (prepared statements).
   - Python context managers (with clause) for automatic connection and cursor cleanup.
   - Pydantic or re email validation before querying.
   - Explicit typed return signatures (list[dict]).
3. Accompanying Unit Test: Write a pytest test case verifying that malicious input with quotes is safely handled without raising SQL syntax errors.
</requirements>`,
    advancedHighlights: [
      "Explicit CWE Classification: Identifies vulnerability with standard security taxonomy",
      "Exploit Proof-of-Concept: Explains attack mechanism realistically",
      "Modern Idiomatic Python: Mandates typing, context managers, and validation",
      "Verification Test: Includes automated test case requirements"
    ]
  },
  {
    id: "rag-architecture",
    title: "5. RAG Architecture Planning Prompt",
    domain: "Generative AI Systems",
    basicPrompt: `How do I build a RAG system for my company documents?`,
    basicCritique: "Far too broad. Results in a generic high-level bulleted list with zero trade-off analysis, chunking strategies, or production considerations.",
    advancedPrompt: `You are a Staff AI Systems Architect designing an enterprise Retrieval-Augmented Generation (RAG) pipeline for 50,000 PDF engineering specifications.

<specifications>
- Document types: Complex PDFs with tables, formulas, and diagrams
- Latency target: Under 1,200ms end-to-end
- Query volume: 50 requests/minute
- Cost constraint: Moderate budget
</specifications>

<deliverables>
Provide a structured technical architecture design covering:
1. Ingestion & Chunking: Compare naive fixed-size chunking vs hierarchical Markdown chunking for tabular engineering data.
2. Embedding & Vector Store: Recommend an embedding model and vector database pairing with justification for hybrid search (dense + BM25).
3. Retrieval & Re-ranking: Explain why a Cross-Encoder Re-ranker (e.g. Cohere or BGE) is necessary and how many chunks to pass to the generator.
4. Hallucination Mitigation: Detail the exact system prompt template that forces the LLM to cite document passage IDs and explicitly decline to answer if confidence is low.
</deliverables>`,
    advancedHighlights: [
      "Rigid Operational Constraints: Defines document volume, latency SLA, and query throughput",
      "Trade-Off Analysis: Forces explicit architectural comparisons",
      "Hybrid Search & Re-ranking: Avoids shallow vector search oversimplification",
      "Strict Grounding Guardrails: Mandates explicit citation prompt engineering"
    ]
  }
];

// ============================================================================
// 5. Career-Interest Quiz Questions (Weighted Dimensional Heuristics)
// ============================================================================
const QuizQuestions = [
  {
    question: "When starting a fresh project from scratch, what part of the challenge excites you the most?",
    options: [
      { text: "Designing structured prompts, experimenting with LLM outputs, and building AI agent workflows.", dimension: "ai" },
      { text: "Building complete web applications with beautiful interfaces, REST APIs, and databases.", dimension: "fullstack" },
      { text: "Analyzing complex datasets, discovering statistical trends, and building predictive models.", dimension: "data" },
      { text: "Configuring cloud servers, automating CI/CD pipelines, and ensuring 99.99% system uptime.", dimension: "cloud_sec" },
      { text: "Crafting intuitive user interfaces, visual design systems, and conducting user interviews.", dimension: "design" }
    ]
  },
  {
    question: "How do you prefer to utilize artificial intelligence tools (like ChatGPT, Claude, or Gemini) in your daily work?",
    options: [
      { text: "I study how prompts work under the hood, craft prompt templates, and build applications powered by LLMs.", dimension: "ai" },
      { text: "I use AI as a high-speed coding assistant to ship web and mobile features faster.", dimension: "fullstack" },
      { text: "I use AI to write data transformation scripts, summarize datasets, and interpret statistical charts.", dimension: "data" },
      { text: "I evaluate AI models for security vulnerabilities, prompt injection attacks, and operational reliability.", dimension: "cloud_sec" },
      { text: "I use AI to brainstorm design concepts, generate mood boards, and write interface copy.", dimension: "design" }
    ]
  },
  {
    question: "If you entered a 48-hour student hackathon, which specific responsibility would you naturally claim?",
    options: [
      { text: "Prompt Engineer: Designing the system prompts, vector RAG retrieval, and AI reasoning loop.", dimension: "ai" },
      { text: "Full-Stack Lead: Developing the React frontend, Express API routes, and database models.", dimension: "fullstack" },
      { text: "Data Lead: Cleaning external CSV datasets, training baseline ML models, and building visual dashboards.", dimension: "data" },
      { text: "DevOps & Security: Setting up Docker containers, managing cloud hosting, and preventing vulnerabilities.", dimension: "cloud_sec" },
      { text: "UX Designer: Designing all Figma screens, design tokens, presentation pitch decks, and user flows.", dimension: "design" }
    ]
  },
  {
    question: "When software crashes, behaves unexpectedly, or gives inaccurate answers, what is your first instinct?",
    options: [
      { text: "Refine prompt constraints, add few-shot exemplars, or implement chain-of-thought to fix reasoning.", dimension: "ai" },
      { text: "Inspect browser dev tools console, set breakpoints in JavaScript, and trace API network responses.", dimension: "fullstack" },
      { text: "Check feature distributions, evaluate training outliers, and inspect data pipeline transformations.", dimension: "data" },
      { text: "Analyze server logs, check firewall rules, inspect Linux resource usage, and verify access permissions.", dimension: "cloud_sec" },
      { text: "Observe why users got confused by the interface layout and simplify the interaction workflow.", dimension: "design" }
    ]
  },
  {
    question: "Which layer of the technology stack gives you the highest sense of intellectual satisfaction?",
    options: [
      { text: "The Cognitive Layer: Guiding foundation models, prompt pipelines, and autonomous reasoning loops.", dimension: "ai" },
      { text: "The Application Layer: Connecting responsive web interfaces to reliable transactional backend databases.", dimension: "fullstack" },
      { text: "The Analytical Layer: Finding mathematical relationships and forecasting future trends from historical data.", dimension: "data" },
      { text: "The Infrastructure & Defense Layer: Hardening Linux kernels, Kubernetes clusters, and defending networks.", dimension: "cloud_sec" },
      { text: "The Human-Computer Interface Layer: Visual ergonomics, micro-interactions, and accessibility standards.", dimension: "design" }
    ]
  },
  {
    question: "How important is human psychology, visual aesthetics, and sensory design in your ideal career?",
    options: [
      { text: "Important in terms of how humans phrase natural language queries and converse with AI systems.", dimension: "ai" },
      { text: "Moderately important: I want my web apps to look clean, modern, and work smoothly on all devices.", dimension: "fullstack" },
      { text: "Secondary: I care much more about statistical validity, data accuracy, and mathematical rigor.", dimension: "data" },
      { text: "Minimal: I focus on system reliability, uptime, network defense, and infrastructure resilience.", dimension: "cloud_sec" },
      { text: "Central: Visual hierarchy, typography, user friction reduction, and delight are my primary passions.", dimension: "design" }
    ]
  },
  {
    question: "What kind of operational scale would you be proudest to tell a hiring manager you managed?",
    options: [
      { text: "Deploying high-efficiency prompt pipelines that reduced token costs by 45% while eliminating hallucinations.", dimension: "ai" },
      { text: "Shipping a web platform handling 50,000 daily active users with sub-200ms page load times.", dimension: "fullstack" },
      { text: "Building an analytics model processing 10 million transaction records to detect fraud with 96% precision.", dimension: "data" },
      { text: "Maintaining zero security incidents and 99.999% uptime across 12 distributed cloud servers.", dimension: "cloud_sec" },
      { text: "Creating a company-wide design system adopted by 40+ engineers that halved UI bug tickets.", dimension: "design" }
    ]
  },
  {
    question: "Looking forward 3 years, what type of capstone project would you want to present in your portfolio?",
    options: [
      { text: "An Autonomous Multi-Agent AI System with RAG, evaluation benchmarks, and self-correcting prompt workflows.", dimension: "ai" },
      { text: "A full-featured collaborative SaaS web product with authentication, billing, and real-time features.", dimension: "fullstack" },
      { text: "An end-to-end Machine Learning pipeline that forecasts energy demand or financial markets.", dimension: "data" },
      { text: "A fully automated, GitOps-driven Kubernetes cloud platform with automated threat detection.", dimension: "cloud_sec" },
      { text: "A comprehensive, accessible design system with published Figma libraries and component code.", dimension: "design" }
    ]
  }
];

// ============================================================================
// 6. Transparent Rule-Based Recommendation Engine
// ============================================================================
/**
 * Calculates deterministic career suggestions based on transparent heuristic scoring.
 * 
 * Formula:
 * - Core Skills Weight: 50%
 *   Score_core = (matched_core_skills / total_career_core_skills) * 50
 * - Secondary Skills Weight: 20%
 *   Score_secondary = (matched_secondary_skills / total_career_secondary_skills) * 20
 * - Interests Weight: 20%
 *   Score_interests = (matched_interests / total_career_interests) * 20
 * - Domain Alignment Weight: 10%
 *   Score_domain = (user_domain === career_domain ? 10 : 0)
 * 
 * Final Match % = round(Score_core + Score_secondary + Score_interests + Score_domain)
 */
function calculateCareerMatches(userProfile) {
  const { selectedSkills = [], selectedInterests = [], preferredDomain = "" } = userProfile;

  return CareerDatabase.map(career => {
    // 1. Core Skills Match
    const totalCore = career.requiredCoreSkills.length;
    const matchedCore = career.requiredCoreSkills.filter(skill => selectedSkills.includes(skill));
    const missingCore = career.requiredCoreSkills.filter(skill => !selectedSkills.includes(skill));
    const corePercentage = totalCore > 0 ? (matchedCore.length / totalCore) : 0;
    const corePoints = corePercentage * 50;

    // 2. Secondary Skills Match
    const totalSecondary = career.secondarySkills.length;
    const matchedSecondary = career.secondarySkills.filter(skill => selectedSkills.includes(skill));
    const missingSecondary = career.secondarySkills.filter(skill => !selectedSkills.includes(skill));
    const secondaryPercentage = totalSecondary > 0 ? (matchedSecondary.length / totalSecondary) : 0;
    const secondaryPoints = secondaryPercentage * 20;

    // 3. Interests Match
    const totalInterests = career.matchingInterests.length;
    const matchedInterests = career.matchingInterests.filter(int => selectedInterests.includes(int));
    const interestsPercentage = totalInterests > 0 ? (matchedInterests.length / totalInterests) : 0;
    const interestsPoints = interestsPercentage * 20;

    // 4. Domain Alignment Bonus
    const domainMatched = preferredDomain && (preferredDomain === career.domain || preferredDomain === "All Fields / Undecided");
    const domainPoints = domainMatched ? 10 : 0;

    // Total Score Calculation
    const totalScore = Math.min(100, Math.round(corePoints + secondaryPoints + interestsPoints + domainPoints));

    return {
      career,
      totalScore,
      breakdown: {
        corePoints: Math.round(corePoints),
        coreMax: 50,
        coreMatchedCount: matchedCore.length,
        coreTotalCount: totalCore,
        secondaryPoints: Math.round(secondaryPoints),
        secondaryMax: 20,
        secondaryMatchedCount: matchedSecondary.length,
        secondaryTotalCount: totalSecondary,
        interestsPoints: Math.round(interestsPoints),
        interestsMax: 20,
        interestsMatchedCount: matchedInterests.length,
        interestsTotalCount: totalInterests,
        domainPoints,
        domainMax: 10,
        domainMatched
      },
      matchedCore,
      missingCore,
      matchedSecondary,
      missingSecondary,
      matchedInterests
    };
  }).sort((a, b) => b.totalScore - a.totalScore);
}

// ============================================================================
// 7. Rule-Based Prompt Quality Evaluator
// ============================================================================
function evaluatePromptQuality(promptText) {
  if (!promptText || promptText.trim().length === 0) {
    return {
      score: 0,
      grade: "Empty",
      hasPersona: false,
      hasTask: false,
      hasContext: false,
      hasFormat: false,
      hasConstraints: false,
      wordCount: 0,
      feedback: ["Please enter a prompt to evaluate."]
    };
  }

  const clean = promptText.trim().toLowerCase();
  const wordCount = promptText.trim().split(/\s+/).length;
  const feedback = [];
  let score = 0;

  // 1. Role / Persona Check (+20 pts)
  const personaRegex = /(act as|you are a|role:|pretend you are|as an? (senior|staff|lead|expert|principal))/i;
  const hasPersona = personaRegex.test(clean);
  if (hasPersona) {
    score += 20;
  } else {
    feedback.push("Missing Persona: Add 'Act as a Senior [Role]' to set an expert context.");
  }

  // 2. Concrete Task (+20 pts)
  const taskRegex = /(optimize|rewrite|generate|explain|analyze|create|build|design|write|evaluate|refactor|compare)/i;
  const hasTask = taskRegex.test(clean);
  if (hasTask) {
    score += 20;
  } else {
    feedback.push("Weak Task Verb: Use decisive verbs like 'Optimize', 'Refactor', or 'Audit'.");
  }

  // 3. Context & Background Data (+20 pts)
  const contextRegex = /(<context>|context:|background:|given that|for example|here is the|my role is|target audience)/i;
  const hasContext = contextRegex.test(clean) || wordCount > 35;
  if (hasContext) {
    score += 20;
  } else {
    feedback.push("Lacks Context: Provide specific facts, audience details, or background parameters.");
  }

  // 4. Output Format Specification (+20 pts)
  const formatRegex = /(json|markdown|table|bullet points|numbered list|<output_format>|format:|step-by-step|schema)/i;
  const hasFormat = formatRegex.test(clean);
  if (hasFormat) {
    score += 20;
  } else {
    feedback.push("Missing Output Format: Specify formatting like 'Return in markdown table' or 'Use structured bullet points'.");
  }

  // 5. Negative Constraints & Guardrails (+20 pts)
  const constraintRegex = /(do not|avoid|never|without|<constraints>|limit to|strictly|must not|maximum)/i;
  const hasConstraints = constraintRegex.test(clean);
  if (hasConstraints) {
    score += 20;
  } else {
    feedback.push("No Guardrails: Add negative constraints like 'Do not use filler words' or 'Keep under 200 words'.");
  }

  let grade = "Novice";
  if (score >= 80) grade = "Production Ready";
  else if (score >= 60) grade = "Proficient";
  else if (score >= 40) grade = "Intermediate";

  if (feedback.length === 0) {
    feedback.push("Excellent structure! Your prompt clearly defines persona, task, context, formatting, and constraints.");
  }

  return {
    score,
    grade,
    hasPersona,
    hasTask,
    hasContext,
    hasFormat,
    hasConstraints,
    wordCount,
    feedback
  };
}

// ============================================================================
// 8. LocalStorage Persistence Manager
// ============================================================================
const StorageManager = {
  KEYS: {
    PROFILES: "ai_careerpath_saved_profiles_v1",
    ACTIVE_PROFILE: "ai_careerpath_active_state_v1",
    ROADMAP_PROGRESS: "ai_careerpath_roadmap_progress_v1"
  },

  getAllProfiles() {
    try {
      const data = localStorage.getItem(this.KEYS.PROFILES);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("Storage load error:", e);
      return [];
    }
  },

  saveProfile(profile) {
    try {
      const profiles = this.getAllProfiles();
      const newEntry = {
        id: "prof_" + Date.now(),
        createdAt: new Date().toISOString(),
        ...profile
      };
      profiles.unshift(newEntry);
      localStorage.setItem(this.KEYS.PROFILES, JSON.stringify(profiles));
      return newEntry;
    } catch (e) {
      console.error("Storage save error:", e);
      return null;
    }
  },

  deleteProfile(id) {
    try {
      const profiles = this.getAllProfiles().filter(p => p.id !== id);
      localStorage.setItem(this.KEYS.PROFILES, JSON.stringify(profiles));
      return true;
    } catch (e) {
      console.error("Storage delete error:", e);
      return false;
    }
  },

  clearAll() {
    try {
      localStorage.removeItem(this.KEYS.PROFILES);
      localStorage.removeItem(this.KEYS.ACTIVE_PROFILE);
      localStorage.removeItem(this.KEYS.ROADMAP_PROGRESS);
      return true;
    } catch (e) {
      return false;
    }
  },

  getRoadmapProgress() {
    try {
      const data = localStorage.getItem(this.KEYS.ROADMAP_PROGRESS);
      return data ? JSON.parse(data) : {};
    } catch (e) {
      return {};
    }
  },

  setMilestoneComplete(milestoneId, isComplete) {
    try {
      const progress = this.getRoadmapProgress();
      progress[milestoneId] = isComplete;
      localStorage.setItem(this.KEYS.ROADMAP_PROGRESS, JSON.stringify(progress));
    } catch (e) {
      console.error("Milestone save error:", e);
    }
  }
};

// ============================================================================
// 9. UI Controller & Application Orchestration
// ============================================================================
const App = {
  activeView: "dashboard",
  currentMatches: [],
  selectedTargetCareer: null,
  activeRoadmapTrackId: "prompt-engineer",
  quizState: {
    currentQuestionIndex: 0,
    answers: {},
    scores: { ai: 0, fullstack: 0, data: 0, cloud_sec: 0, design: 0 }
  },

  init() {
    this.renderSkillsCatalog();
    this.renderInterestsCatalog();
    this.renderPromptLab();
    this.renderDashboardCatalog();
    this.renderRoadmapTracks();
    this.bindEvents();
    this.handleRoute();
    this.updateSavedProfilesView();
    this.updateStatsCounters();

    // Listen to hash changes for deep linking
    window.addEventListener("hashchange", () => this.handleRoute());
  },

  bindEvents() {
    // Navigation Links (Desktop & Mobile)
    document.querySelectorAll("[data-nav-target]").forEach(btn => {
      btn.addEventListener("click", e => {
        e.preventDefault();
        const target = btn.getAttribute("data-nav-target");
        this.navigateTo(target);
        // Close mobile drawer if open
        const mobileDrawer = document.getElementById("mobile-nav-drawer");
        if (mobileDrawer) mobileDrawer.classList.remove("open");
      });
    });

    // Mobile nav hamburger toggle
    const mobileToggle = document.getElementById("mobile-nav-toggle");
    if (mobileToggle) {
      mobileToggle.addEventListener("click", () => {
        const drawer = document.getElementById("mobile-nav-drawer");
        drawer.classList.toggle("open");
      });
    }

    // Profile Generation Form Submit
    const profileForm = document.getElementById("profile-form");
    if (profileForm) {
      profileForm.addEventListener("submit", e => {
        e.preventDefault();
        this.handleGenerateRecommendations();
      });
    }

    // Reset Form Button
    const resetBtn = document.getElementById("btn-reset-profile");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        profileForm.reset();
        this.currentMatches = [];
        this.renderMatchingResults([]);
        this.showToast("Form selections reset.");
      });
    }

    // Sample Profile Loaders
    const loadSampleWebAi = document.getElementById("btn-load-sample-ai");
    if (loadSampleWebAi) {
      loadSampleWebAi.addEventListener("click", () => this.loadSampleProfile("ai"));
    }
    const loadSampleData = document.getElementById("btn-load-sample-data");
    if (loadSampleData) {
      loadSampleData.addEventListener("click", () => this.loadSampleProfile("data"));
    }

    // Save Profile Action
    const saveProfileBtn = document.getElementById("btn-save-current-profile");
    if (saveProfileBtn) {
      saveProfileBtn.addEventListener("click", () => this.handleSaveCurrentProfile());
    }

    // Skill Gap Target Selector
    const gapTargetSelect = document.getElementById("gap-target-select");
    if (gapTargetSelect) {
      gapTargetSelect.addEventListener("change", e => {
        this.updateSkillGapView(e.target.value);
      });
    }

    // Prompt Evaluator live input
    const promptInput = document.getElementById("prompt-test-input");
    const evalBtn = document.getElementById("btn-evaluate-prompt");
    if (evalBtn && promptInput) {
      evalBtn.addEventListener("click", () => {
        this.handlePromptEvaluation(promptInput.value);
      });
      promptInput.addEventListener("input", () => {
        // Live evaluate debounced
        clearTimeout(this._evalTimeout);
        this._evalTimeout = setTimeout(() => {
          this.handlePromptEvaluation(promptInput.value);
        }, 350);
      });
    }

    // Quiz Navigation Buttons
    const quizPrev = document.getElementById("btn-quiz-prev");
    const quizNext = document.getElementById("btn-quiz-next");
    if (quizPrev) {
      quizPrev.addEventListener("click", () => this.handleQuizPrev());
    }
    if (quizNext) {
      quizNext.addEventListener("click", () => this.handleQuizNext());
    }

    const quizRetake = document.getElementById("btn-retake-quiz");
    if (quizRetake) {
      quizRetake.addEventListener("click", () => this.restartQuiz());
    }

    const quizApply = document.getElementById("btn-apply-quiz-results");
    if (quizApply) {
      quizApply.addEventListener("click", () => this.applyQuizToProfile());
    }

    // Clear Storage Button
    const clearStorageBtn = document.getElementById("btn-clear-storage");
    if (clearStorageBtn) {
      clearStorageBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to delete all saved profiles and roadmap progress from this browser?")) {
          StorageManager.clearAll();
          this.updateSavedProfilesView();
          this.updateStatsCounters();
          this.showToast("All browser data cleared.");
        }
      });
    }

    // Export JSON Data Button
    const exportBtn = document.getElementById("btn-export-json");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => this.exportProfilesJSON());
    }
  },

  handleRoute() {
    const hash = window.location.hash.replace("#", "") || "dashboard";
    this.navigateTo(hash, false);
  },

  navigateTo(viewId, updateHash = true) {
    const validViews = ["dashboard", "matching", "gap-analyzer", "roadmaps", "prompt-lab", "quiz", "saved-profiles"];
    if (!validViews.includes(viewId)) viewId = "dashboard";

    this.activeView = viewId;

    // Update section visibility
    document.querySelectorAll(".content-section").forEach(sec => {
      sec.classList.remove("active");
    });
    const targetSection = document.getElementById(`section-${viewId}`);
    if (targetSection) {
      targetSection.classList.add("active");
    }

    // Update nav links active states
    document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
      if (link.getAttribute("data-nav-target") === viewId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    if (updateHash) {
      window.location.hash = viewId;
    }

    // View-specific trigger hooks
    if (viewId === "gap-analyzer") {
      this.populateGapSelector();
    } else if (viewId === "quiz") {
      if (this.quizState.currentQuestionIndex === 0 && Object.keys(this.quizState.answers).length === 0) {
        this.renderQuizQuestion(0);
      }
    } else if (viewId === "saved-profiles") {
      this.updateSavedProfilesView();
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  // --------------------------------------------------------------------------
  // Dynamic Markups: Catalogs & Checkboxes
  // --------------------------------------------------------------------------
  renderSkillsCatalog() {
    const container = document.getElementById("skills-catalog-container");
    if (!container) return;

    let html = "";
    SkillsCatalog.forEach(cat => {
      html += `
        <div class="skill-category-block">
          <div class="skill-category-title">${cat.category}</div>
          <div class="selectable-tags-wrap">
            ${cat.skills.map(skill => `
              <div class="tag-checkbox-item">
                <input type="checkbox" name="skills" value="${skill}" id="skill_${this.slugify(skill)}">
                <label for="skill_${this.slugify(skill)}" class="tag-label">
                  <span class="tag-check-icon">✓</span>
                  <span>${skill}</span>
                </label>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  },

  renderInterestsCatalog() {
    const container = document.getElementById("interests-catalog-container");
    if (!container) return;

    let html = `<div class="selectable-tags-wrap">`;
    InterestsList.forEach(interest => {
      html += `
        <div class="tag-checkbox-item">
          <input type="checkbox" name="interests" value="${interest}" id="int_${this.slugify(interest)}">
          <label for="int_${this.slugify(interest)}" class="tag-label">
            <span class="tag-check-icon">✓</span>
            <span>${interest}</span>
          </label>
        </div>
      `;
    });
    html += `</div>`;
    container.innerHTML = html;
  },

  renderDashboardCatalog() {
    const container = document.getElementById("dashboard-career-grid");
    if (!container) return;

    container.innerHTML = CareerDatabase.slice(0, 6).map(c => `
      <div class="career-tile-simple card-hover">
        <div class="career-tile-domain">${c.domain}</div>
        <div class="career-tile-name">${c.title}</div>
        <div class="career-tile-desc">${c.description}</div>
        <div class="career-tile-meta">
          <span>${c.salaryBenchmark}</span>
          <span>·</span>
          <span>${c.requiredCoreSkills.length} Core Skills</span>
        </div>
      </div>
    `).join("");
  },

  // --------------------------------------------------------------------------
  // Recommendation Engine Interaction
  // --------------------------------------------------------------------------
  handleGenerateRecommendations() {
    const name = document.getElementById("student-name")?.value.trim() || "Student";
    const year = document.getElementById("student-year")?.value || "3rd Year";
    const domain = document.getElementById("preferred-domain")?.value || "";

    const selectedSkills = Array.from(document.querySelectorAll("input[name='skills']:checked")).map(cb => cb.value);
    const selectedInterests = Array.from(document.querySelectorAll("input[name='interests']:checked")).map(cb => cb.value);

    if (selectedSkills.length === 0 && selectedInterests.length === 0) {
      alert("Please select at least 1 skill or interest to generate transparent career recommendations.");
      return;
    }

    const profile = {
      name,
      year,
      preferredDomain: domain,
      selectedSkills,
      selectedInterests
    };

    const matches = calculateCareerMatches(profile);
    this.currentMatches = matches;
    this.renderMatchingResults(matches);

    // Auto set target career in skill gap analyzer
    if (matches.length > 0) {
      this.selectedTargetCareer = matches[0].career.id;
    }

    // Scroll to results
    const resultsAnchor = document.getElementById("matching-results-area");
    if (resultsAnchor) {
      resultsAnchor.scrollIntoView({ behavior: "smooth" });
    }

    this.showToast(`Analyzed ${matches.length} career pathways with deterministic rule engine.`);
  },

  renderMatchingResults(matches) {
    const container = document.getElementById("matching-results-container");
    const countLabel = document.getElementById("results-count-label");
    if (!container) return;

    if (!matches || matches.length === 0) {
      container.innerHTML = `
        <div class="empty-state-card">
          <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4M12 8h.01"></path>
          </svg>
          <div class="empty-state-title">No Recommendations Generated Yet</div>
          <p class="empty-state-text">Select your current technical skills and professional interests above, then click 'Analyze & Generate Recommendations' to see transparent, rule-based matches.</p>
        </div>
      `;
      if (countLabel) countLabel.textContent = "Awaiting Profile Input";
      return;
    }

    if (countLabel) {
      countLabel.textContent = `Displaying ${matches.length} Career Matches (Ordered by Heuristic Score)`;
    }

    let html = "";
    matches.forEach((item, index) => {
      const c = item.career;
      const b = item.breakdown;
      const isTop = index === 0 && item.totalScore >= 60;

      let scoreClass = "score-fair";
      if (item.totalScore >= 75) scoreClass = "score-high";
      else if (item.totalScore >= 50) scoreClass = "score-mid";

      html += `
        <div class="career-match-card ${isTop ? 'high-match' : ''}">
          <div class="match-card-top">
            <div>
              <div class="match-meta-line" style="margin-bottom: 0.25rem;">
                <span>${c.domain}</span>
                <span>·</span>
                <span>${c.salaryBenchmark}</span>
                <span>·</span>
                <span>${c.growthIndex}</span>
              </div>
              <h3 class="match-role-title">${c.title}</h3>
              <p class="section-subtitle" style="font-size: 0.875rem;">${c.description}</p>
            </div>

            <div class="match-score-pill-box">
              <span class="match-score-big ${scoreClass} tabular-nums">${item.totalScore}%</span>
              <span class="match-score-label">Transparent Match</span>
            </div>
          </div>

          <!-- Deterministic Rule Breakdown -->
          <div class="rule-breakdown-box">
            <div class="rule-breakdown-title">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4M12 8h.01"></path>
              </svg>
              <span>Deterministic Rule Score Breakdown (Max 100 pts)</span>
            </div>
            <div class="rule-bars-grid">
              <div class="rule-bar-item">
                <div class="rule-bar-label">
                  <span>Core Skills (${b.coreMatchedCount}/${b.coreTotalCount})</span>
                  <span class="tabular-nums font-mono">${b.corePoints}/50 pts</span>
                </div>
                <div class="progress-track">
                  <div class="progress-fill fill-primary" style="width: ${(b.corePoints / 50) * 100}%"></div>
                </div>
              </div>

              <div class="rule-bar-item">
                <div class="rule-bar-label">
                  <span>Secondary Skills (${b.secondaryMatchedCount}/${b.secondaryTotalCount})</span>
                  <span class="tabular-nums font-mono">${b.secondaryPoints}/20 pts</span>
                </div>
                <div class="progress-track">
                  <div class="progress-fill fill-purple" style="width: ${(b.secondaryPoints / 20) * 100}%"></div>
                </div>
              </div>

              <div class="rule-bar-item">
                <div class="rule-bar-label">
                  <span>Interests (${b.interestsMatchedCount}/${b.interestsTotalCount})</span>
                  <span class="tabular-nums font-mono">${b.interestsPoints}/20 pts</span>
                </div>
                <div class="progress-track">
                  <div class="progress-fill fill-success" style="width: ${(b.interestsPoints / 20) * 100}%"></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Matched vs Gaps Preview -->
          <div class="skills-status-split">
            <div class="skills-status-column">
              <div class="skills-column-title mastered">
                <span>✓ Mastered Skills (${item.matchedCore.length + item.matchedSecondary.length})</span>
              </div>
              <div class="tag-list-unboxed">
                ${[...item.matchedCore, ...item.matchedSecondary].length > 0 ?
                  [...item.matchedCore, ...item.matchedSecondary].map(s => `<span class="skill-item-badge badge-green">${s}</span>`).join("")
                  : `<span style="font-size: 0.75rem; color: var(--text-muted);">No prerequisites matched yet</span>`}
              </div>
            </div>

            <div class="skills-status-column">
              <div class="skills-column-title missing">
                <span>▲ Skill Gaps to Bridge (${item.missingCore.length + item.missingSecondary.length})</span>
              </div>
              <div class="tag-list-unboxed">
                ${[...item.missingCore, ...item.missingSecondary].length > 0 ?
                  [...item.missingCore, ...item.missingSecondary].map(s => `<span class="skill-item-badge badge-amber">${s}</span>`).join("")
                  : `<span style="font-size: 0.75rem; color: var(--text-muted);">All core prerequisites met!</span>`}
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="match-card-actions">
            <button class="btn btn-secondary btn-sm" onclick="App.inspectSkillGap('${c.id}')">
              Analyze Skill Gaps →
            </button>
            <button class="btn btn-outline-primary btn-sm" onclick="App.viewRoadmapTrack('${c.id}')">
              View Learning Roadmap →
            </button>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  },

  loadSampleProfile(type) {
    const nameInput = document.getElementById("student-name");
    const domainInput = document.getElementById("preferred-domain");

    // Uncheck all
    document.querySelectorAll("input[name='skills'], input[name='interests']").forEach(cb => cb.checked = false);

    if (type === "ai") {
      if (nameInput) nameInput.value = "Aarav Sharma";
      if (domainInput) domainInput.value = "Artificial Intelligence & LLMs";

      const sampleSkills = ["Prompt Engineering", "Python", "REST APIs", "Git & GitHub", "HTML/CSS"];
      const sampleInterests = ["Natural Language Processing & Generative AI", "Automation, CI/CD & Developer Tooling"];

      sampleSkills.forEach(s => {
        const el = document.getElementById(`skill_${this.slugify(s)}`);
        if (el) el.checked = true;
      });
      sampleInterests.forEach(i => {
        const el = document.getElementById(`int_${this.slugify(i)}`);
        if (el) el.checked = true;
      });
      this.showToast("Loaded AI & Prompt Engineering sample profile.");
    } else {
      if (nameInput) nameInput.value = "Priya Patel";
      if (domainInput) domainInput.value = "Data Exploration & Statistical Analysis";

      const sampleSkills = ["Python", "SQL", "Data Analysis (Pandas)", "Git & GitHub"];
      const sampleInterests = ["Data Exploration & Statistical Analysis", "Algorithm Optimization & Problem Solving"];

      sampleSkills.forEach(s => {
        const el = document.getElementById(`skill_${this.slugify(s)}`);
        if (el) el.checked = true;
      });
      sampleInterests.forEach(i => {
        const el = document.getElementById(`int_${this.slugify(i)}`);
        if (el) el.checked = true;
      });
      this.showToast("Loaded Data Science sample profile.");
    }

    this.handleGenerateRecommendations();
  },

  handleSaveCurrentProfile() {
    const name = document.getElementById("student-name")?.value.trim() || "Student Profile";
    const year = document.getElementById("student-year")?.value || "3rd Year";
    const domain = document.getElementById("preferred-domain")?.value || "General";
    const selectedSkills = Array.from(document.querySelectorAll("input[name='skills']:checked")).map(cb => cb.value);
    const selectedInterests = Array.from(document.querySelectorAll("input[name='interests']:checked")).map(cb => cb.value);

    if (selectedSkills.length === 0 && selectedInterests.length === 0) {
      alert("Please select skills or interests before saving a profile.");
      return;
    }

    const topCareer = this.currentMatches.length > 0 ? this.currentMatches[0].career.title : "Not evaluated";
    const topScore = this.currentMatches.length > 0 ? this.currentMatches[0].totalScore : 0;

    const profileData = {
      name,
      year,
      domain,
      selectedSkills,
      selectedInterests,
      topCareer,
      topScore
    };

    const saved = StorageManager.saveProfile(profileData);
    if (saved) {
      this.showToast(`Saved profile for "${name}" to browser storage.`);
      this.updateSavedProfilesView();
      this.updateStatsCounters();
    }
  },

  // --------------------------------------------------------------------------
  // Skill Gap Analyzer View
  // --------------------------------------------------------------------------
  populateGapSelector() {
    const select = document.getElementById("gap-target-select");
    if (!select) return;

    select.innerHTML = CareerDatabase.map(c => `
      <option value="${c.id}" ${this.selectedTargetCareer === c.id ? "selected" : ""}>
        ${c.title} (${c.domain})
      </option>
    `).join("");

    const activeId = select.value || CareerDatabase[0].id;
    this.updateSkillGapView(activeId);
  },

  inspectSkillGap(careerId) {
    this.selectedTargetCareer = careerId;
    this.navigateTo("gap-analyzer");
  },

  updateSkillGapView(careerId) {
    const career = CareerDatabase.find(c => c.id === careerId) || CareerDatabase[0];
    const userSkills = Array.from(document.querySelectorAll("input[name='skills']:checked")).map(cb => cb.value);

    // Calculate gap
    const coreMissing = career.requiredCoreSkills.filter(s => !userSkills.includes(s));
    const coreHave = career.requiredCoreSkills.filter(s => userSkills.includes(s));
    const secondaryMissing = career.secondarySkills.filter(s => !userSkills.includes(s));
    const secondaryHave = career.secondarySkills.filter(s => userSkills.includes(s));

    const totalRequired = career.requiredCoreSkills.length;
    const readinessPct = totalRequired > 0 ? Math.round((coreHave.length / totalRequired) * 100) : 0;

    // Render Gauge
    const gaugeVal = document.getElementById("gap-readiness-val");
    const gaugeStatus = document.getElementById("gap-readiness-status");
    const targetTitle = document.getElementById("gap-target-career-name");
    const targetDomain = document.getElementById("gap-target-career-domain");

    if (gaugeVal) gaugeVal.textContent = `${readinessPct}%`;
    if (targetTitle) targetTitle.textContent = career.title;
    if (targetDomain) targetDomain.textContent = career.domain;

    if (gaugeStatus) {
      if (readinessPct >= 80) {
        gaugeStatus.textContent = "High Career Readiness";
        gaugeStatus.style.backgroundColor = "var(--accent-success-subtle)";
        gaugeStatus.style.color = "var(--accent-success)";
      } else if (readinessPct >= 50) {
        gaugeStatus.textContent = "Moderate Preparation Needed";
        gaugeStatus.style.backgroundColor = "var(--primary-subtle)";
        gaugeStatus.style.color = "var(--primary)";
      } else {
        gaugeStatus.textContent = "Early Foundation Stage";
        gaugeStatus.style.backgroundColor = "var(--accent-warning-subtle)";
        gaugeStatus.style.color = "var(--accent-warning)";
      }
    }

    // Render Missing Cards List
    const missingContainer = document.getElementById("gap-missing-skills-list");
    if (missingContainer) {
      if (coreMissing.length === 0 && secondaryMissing.length === 0) {
        missingContainer.innerHTML = `
          <div class="empty-state-card" style="padding: 2rem;">
            <div class="empty-state-title" style="color: var(--accent-success);">Outstanding! Zero Skill Gaps</div>
            <p class="empty-state-text">You have selected all core and secondary competencies required for this career path. You are well positioned to apply for entry-level roles or pursue the advanced roadmap phase.</p>
          </div>
        `;
      } else {
        let html = "";
        coreMissing.forEach(s => {
          html += `
            <div class="gap-skill-card">
              <span class="gap-priority-indicator high">Critical Gap</span>
              <div class="gap-skill-info">
                <div class="gap-skill-name">${s}</div>
                <div class="gap-skill-reason">Essential core prerequisite for ${career.title}. Hiring managers expect practical experience with this tool in portfolio projects.</div>
                <a href="#roadmaps" onclick="App.viewRoadmapTrack('${career.id}')" class="gap-resource-link">
                  View Roadmap Learning Step →
                </a>
              </div>
            </div>
          `;
        });

        secondaryMissing.forEach(s => {
          html += `
            <div class="gap-skill-card">
              <span class="gap-priority-indicator medium">Recommended</span>
              <div class="gap-skill-info">
                <div class="gap-skill-name">${s}</div>
                <div class="gap-skill-reason">Valuable secondary multiplier. Possessing this gives you an advantage over competing applicants during technical rounds.</div>
                <a href="#roadmaps" onclick="App.viewRoadmapTrack('${career.id}')" class="gap-resource-link">
                  View Roadmap Learning Step →
                </a>
              </div>
            </div>
          `;
        });

        missingContainer.innerHTML = html;
      }
    }

    // Render Mastered List
    const masteredContainer = document.getElementById("gap-mastered-skills-list");
    if (masteredContainer) {
      const allMastered = [...coreHave, ...secondaryHave];
      if (allMastered.length === 0) {
        masteredContainer.innerHTML = `<span style="font-size: 0.8125rem; color: var(--text-muted);">None of the skills required for this career are currently checked in your profile.</span>`;
      } else {
        masteredContainer.innerHTML = allMastered.map(s => `
          <span class="skill-item-badge badge-green" style="font-size: 0.8125rem; padding: 0.35rem 0.65rem;">
            ✓ ${s}
          </span>
        `).join("");
      }
    }
  },

  // --------------------------------------------------------------------------
  // Career Learning Roadmaps
  // --------------------------------------------------------------------------
  renderRoadmapTracks() {
    const container = document.getElementById("roadmap-track-selector");
    if (!container) return;

    container.innerHTML = CareerDatabase.map(c => `
      <button class="track-pill-btn ${this.activeRoadmapTrackId === c.id ? 'active' : ''}" onclick="App.viewRoadmapTrack('${c.id}')">
        ${c.title}
      </button>
    `).join("");

    this.renderActiveRoadmapTimeline();
  },

  viewRoadmapTrack(careerId) {
    this.activeRoadmapTrackId = careerId;
    this.navigateTo("roadmaps");
    this.renderRoadmapTracks();
  },

  renderActiveRoadmapTimeline() {
    const career = CareerDatabase.find(c => c.id === this.activeRoadmapTrackId) || CareerDatabase[0];
    const container = document.getElementById("roadmap-timeline-container");
    const titleEl = document.getElementById("roadmap-career-title");
    const descEl = document.getElementById("roadmap-career-desc");

    if (titleEl) titleEl.textContent = `${career.title} — 4-Phase Learning Roadmap`;
    if (descEl) descEl.textContent = career.typicalRole;

    if (!container) return;

    const savedProgress = StorageManager.getRoadmapProgress();

    container.innerHTML = career.roadmap.map(phase => `
      <div class="roadmap-phase-card">
        <div class="phase-number-tag">${phase.phase}</div>
        <h3 class="phase-heading">${phase.title}</h3>
        <p class="phase-desc">${phase.desc}</p>

        <div class="milestones-list">
          ${phase.milestones.map(m => {
            const isDone = !!savedProgress[m.id];
            return `
              <div class="milestone-item ${isDone ? 'completed' : ''}" id="milestone_row_${m.id}">
                <input type="checkbox" class="milestone-checkbox" id="${m.id}" ${isDone ? 'checked' : ''} onchange="App.handleMilestoneToggle('${m.id}')">
                <div class="milestone-content">
                  <label for="${m.id}" class="milestone-title" style="cursor: pointer;">${m.title}</label>
                  <div class="milestone-details">${m.detail}</div>
                </div>
              </div>
            `;
          }).join("")}
        </div>

        <div class="capstone-box">
          <div class="capstone-title">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>Phase Capstone Milestone</span>
          </div>
          <div class="capstone-desc">${phase.capstone}</div>
        </div>
      </div>
    `).join("");
  },

  handleMilestoneToggle(milestoneId) {
    const cb = document.getElementById(milestoneId);
    if (!cb) return;
    const isChecked = cb.checked;
    StorageManager.setMilestoneComplete(milestoneId, isChecked);

    const row = document.getElementById(`milestone_row_${milestoneId}`);
    if (row) {
      if (isChecked) row.classList.add("completed");
      else row.classList.remove("completed");
    }

    this.showToast(isChecked ? "Milestone marked completed!" : "Milestone progress updated.");
  },

  // --------------------------------------------------------------------------
  // IPE Prompt Engineering Learning Lab
  // --------------------------------------------------------------------------
  renderPromptLab() {
    // Render Framework Cards
    const frameworksContainer = document.getElementById("ipe-frameworks-grid");
    if (frameworksContainer) {
      frameworksContainer.innerHTML = PromptFrameworks.map(f => `
        <div class="framework-card">
          <div class="framework-abbr">${f.abbr}</div>
          <div class="framework-name">${f.name}</div>
          <div class="framework-desc">${f.desc}</div>
        </div>
      `).join("");
    }

    // Render Scenario Selector Dropdown
    const scenarioSelect = document.getElementById("prompt-scenario-select");
    if (scenarioSelect) {
      scenarioSelect.innerHTML = PromptComparisonScenarios.map(s => `
        <option value="${s.id}">${s.title} (${s.domain})</option>
      `).join("");

      scenarioSelect.addEventListener("change", e => {
        this.renderPromptComparison(e.target.value);
      });

      this.renderPromptComparison(PromptComparisonScenarios[0].id);
    }
  },

  renderPromptComparison(scenarioId) {
    const s = PromptComparisonScenarios.find(item => item.id === scenarioId) || PromptComparisonScenarios[0];
    const container = document.getElementById("prompt-comparison-body");
    if (!container) return;

    container.innerHTML = `
      <div class="comparison-split-grid">
        <!-- Basic / Naive Prompt -->
        <div class="prompt-column">
          <div class="prompt-column-header">
            <span class="prompt-label-badge badge-basic">Basic Unstructured Prompt</span>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Common Student Pitfall</span>
          </div>
          <pre class="prompt-text-pre">${this.escapeHtml(s.basicPrompt)}</pre>
          <div class="prompt-critique-box critique-weak">
            <strong>Critique:</strong> ${s.basicCritique}
          </div>
        </div>

        <!-- Optimized IPE Prompt -->
        <div class="prompt-column">
          <div class="prompt-column-header">
            <span class="prompt-label-badge badge-advanced">IPE Optimized Framework Prompt</span>
            <button class="btn btn-secondary btn-sm" onclick="App.copyPromptText('${s.id}')">
              Copy Prompt 📋
            </button>
          </div>
          <pre class="prompt-text-pre font-mono" id="advanced_prompt_code_${s.id}">${this.escapeHtml(s.advancedPrompt)}</pre>
          <div class="prompt-critique-box critique-strong">
            <strong>Key IPE Architectural Principles:</strong>
            <ul style="margin-top: 0.5rem; padding-left: 1.25rem;">
              ${s.advancedHighlights.map(h => `<li>${h}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    `;
  },

  copyPromptText(scenarioId) {
    const s = PromptComparisonScenarios.find(item => item.id === scenarioId);
    if (!s) return;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(s.advancedPrompt).then(() => {
        this.showToast("Prompt copied to clipboard!");
      }).catch(() => {
        this.showToast("Prompt copied!");
      });
    } else {
      this.showToast("Prompt text ready to copy.");
    }
  },

  handlePromptEvaluation(text) {
    const result = evaluatePromptQuality(text);

    const scoreNum = document.getElementById("eval-score-num");
    const gradeLabel = document.getElementById("eval-grade-label");
    const feedbackList = document.getElementById("eval-feedback-list");

    const checkPersona = document.getElementById("eval-check-persona");
    const checkTask = document.getElementById("eval-check-task");
    const checkContext = document.getElementById("eval-check-context");
    const checkFormat = document.getElementById("eval-check-format");

    if (scoreNum) {
      scoreNum.textContent = `${result.score}/100`;
      scoreNum.style.color = result.score >= 80 ? "var(--accent-success)" : result.score >= 60 ? "var(--primary)" : "var(--accent-warning)";
    }
    if (gradeLabel) gradeLabel.textContent = result.grade;

    if (checkPersona) checkPersona.textContent = result.hasPersona ? "✓ Passed (+20)" : "✗ Missing";
    if (checkTask) checkTask.textContent = result.hasTask ? "✓ Passed (+20)" : "✗ Weak";
    if (checkContext) checkContext.textContent = result.hasContext ? "✓ Passed (+20)" : "✗ Missing";
    if (checkFormat) checkFormat.textContent = result.hasFormat ? "✓ Passed (+20)" : "✗ Missing";

    if (feedbackList) {
      feedbackList.innerHTML = result.feedback.map(fb => `
        <li style="margin-bottom: 0.35rem; color: var(--text-body); font-size: 0.8125rem;">
          ${fb}
        </li>
      `).join("");
    }
  },

  // --------------------------------------------------------------------------
  // Interactive Career-Interest Quiz
  // --------------------------------------------------------------------------
  renderQuizQuestion(index) {
    const q = QuizQuestions[index];
    if (!q) return;

    const progressMeta = document.getElementById("quiz-progress-text");
    const progressFill = document.getElementById("quiz-progress-fill");
    const questionTitle = document.getElementById("quiz-question-title");
    const optionsContainer = document.getElementById("quiz-options-container");
    const btnPrev = document.getElementById("btn-quiz-prev");
    const btnNext = document.getElementById("btn-quiz-next");

    if (progressMeta) progressMeta.textContent = `Question ${index + 1} of ${QuizQuestions.length}`;
    if (progressFill) progressFill.style.width = `${((index + 1) / QuizQuestions.length) * 100}%`;
    if (questionTitle) questionTitle.textContent = q.question;

    if (btnPrev) {
      btnPrev.style.visibility = index === 0 ? "hidden" : "visible";
    }
    if (btnNext) {
      btnNext.textContent = index === QuizQuestions.length - 1 ? "Submit & View Results →" : "Next Question →";
    }

    const currentAnswer = this.quizState.answers[index];

    if (optionsContainer) {
      optionsContainer.innerHTML = q.options.map((opt, optIndex) => `
        <div class="quiz-option-btn ${currentAnswer === optIndex ? 'selected' : ''}" onclick="App.selectQuizOption(${index}, ${optIndex})">
          <div class="quiz-radio-indicator">
            <div class="quiz-radio-dot"></div>
          </div>
          <div class="quiz-option-text">${opt.text}</div>
        </div>
      `).join("");
    }
  },

  selectQuizOption(qIndex, optIndex) {
    this.quizState.answers[qIndex] = optIndex;
    this.renderQuizQuestion(qIndex);
  },

  handleQuizPrev() {
    if (this.quizState.currentQuestionIndex > 0) {
      this.quizState.currentQuestionIndex--;
      this.renderQuizQuestion(this.quizState.currentQuestionIndex);
    }
  },

  handleQuizNext() {
    if (this.quizState.answers[this.quizState.currentQuestionIndex] === undefined) {
      alert("Please select an answer to proceed.");
      return;
    }

    if (this.quizState.currentQuestionIndex < QuizQuestions.length - 1) {
      this.quizState.currentQuestionIndex++;
      this.renderQuizQuestion(this.quizState.currentQuestionIndex);
    } else {
      this.finishQuiz();
    }
  },

  finishQuiz() {
    // Tally dimensional scores
    const scores = { ai: 0, fullstack: 0, data: 0, cloud_sec: 0, design: 0 };

    Object.entries(this.quizState.answers).forEach(([qIdx, optIdx]) => {
      const question = QuizQuestions[parseInt(qIdx)];
      if (question && question.options[optIdx]) {
        const dim = question.options[optIdx].dimension;
        if (scores[dim] !== undefined) scores[dim]++;
      }
    });

    this.quizState.scores = scores;

    // Determine Archetype
    let topDim = "ai";
    let maxVal = -1;
    Object.entries(scores).forEach(([dim, val]) => {
      if (val > maxVal) {
        maxVal = val;
        topDim = dim;
      }
    });

    const archetypeMap = {
      ai: {
        title: "The AI Systems & Prompt Architect",
        domain: "Artificial Intelligence & LLMs",
        careerId: "prompt-engineer",
        desc: "You possess an intuitive fascination with language models, autonomous agent frameworks, and guiding generative AI outputs with disciplined constraints."
      },
      fullstack: {
        title: "The Full-Stack Product Builder",
        domain: "Web & Mobile Application Development",
        careerId: "full-stack-dev",
        desc: "You excel at building end-to-end software where users touch pixel-perfect interfaces backed by robust transactional databases."
      },
      data: {
        title: "The Empirical Data & ML Scientist",
        domain: "Data Exploration & Statistical Analysis",
        careerId: "data-scientist",
        desc: "You are driven by mathematical precision, exploratory data discovery, and extracting predictive signals from large datasets."
      },
      cloud_sec: {
        title: "The Cloud & Cyber Defense Guardian",
        domain: "Cloud Infrastructure & Scalability",
        careerId: "cloud-devops",
        desc: "You thrive on high-availability architecture, resilient Linux automation, and safeguarding critical infrastructure against intrusion."
      },
      design: {
        title: "The Human-Centered UX Engineer",
        domain: "Visual Aesthetics & User Experience",
        careerId: "ui-ux-design",
        desc: "You see software through the lens of human cognition, aesthetic hierarchy, frictionless workflows, and accessible design systems."
      }
    };

    const resultArchetype = archetypeMap[topDim];

    // Show results card, hide quiz wizard
    const wizardEl = document.getElementById("quiz-wizard-view");
    const resultsEl = document.getElementById("quiz-results-view");
    if (wizardEl) wizardEl.style.display = "none";
    if (resultsEl) resultsEl.style.display = "block";

    const titleEl = document.getElementById("quiz-archetype-title");
    const domainEl = document.getElementById("quiz-archetype-domain");
    const descEl = document.getElementById("quiz-archetype-desc");
    const breakdownList = document.getElementById("quiz-dimensions-breakdown");

    if (titleEl) titleEl.textContent = resultArchetype.title;
    if (domainEl) domainEl.textContent = resultArchetype.domain;
    if (descEl) descEl.textContent = resultArchetype.desc;

    this.quizState.topArchetype = resultArchetype;

    if (breakdownList) {
      breakdownList.innerHTML = Object.entries(scores).map(([k, count]) => {
        const labels = {
          ai: "AI & Prompt Engineering",
          fullstack: "Full-Stack Development",
          data: "Data Science & Analytics",
          cloud_sec: "Cloud & Cybersecurity",
          design: "UI/UX & Design Systems"
        };
        const pct = Math.round((count / QuizQuestions.length) * 100);
        return `
          <div style="margin-bottom: 0.75rem;">
            <div style="display: flex; justify-content: space-between; font-size: 0.8125rem; margin-bottom: 0.25rem;">
              <span>${labels[k]}</span>
              <span class="font-mono tabular-nums">${count}/${QuizQuestions.length} (${pct}%)</span>
            </div>
            <div class="progress-track">
              <div class="progress-fill fill-primary" style="width: ${pct}%;"></div>
            </div>
          </div>
        `;
      }).join("");
    }
  },

  restartQuiz() {
    this.quizState.currentQuestionIndex = 0;
    this.quizState.answers = {};
    const wizardEl = document.getElementById("quiz-wizard-view");
    const resultsEl = document.getElementById("quiz-results-view");
    if (wizardEl) wizardEl.style.display = "block";
    if (resultsEl) resultsEl.style.display = "none";
    this.renderQuizQuestion(0);
  },

  applyQuizToProfile() {
    if (!this.quizState.topArchetype) return;
    const arch = this.quizState.topArchetype;

    const domainSelect = document.getElementById("preferred-domain");
    if (domainSelect) domainSelect.value = arch.domain;

    // Pre-check related interests
    const targetCareer = CareerDatabase.find(c => c.id === arch.careerId);
    if (targetCareer) {
      targetCareer.matchingInterests.forEach(int => {
        const el = document.getElementById(`int_${this.slugify(int)}`);
        if (el) el.checked = true;
      });
    }

    this.navigateTo("matching");
    this.handleGenerateRecommendations();
    this.showToast(`Applied ${arch.title} to career profile.`);
  },

  // --------------------------------------------------------------------------
  // Saved Profiles & LocalStorage Views
  // --------------------------------------------------------------------------
  updateSavedProfilesView() {
    const container = document.getElementById("saved-profiles-container");
    if (!container) return;

    const profiles = StorageManager.getAllProfiles();
    if (profiles.length === 0) {
      container.innerHTML = `
        <div class="empty-state-card" style="grid-column: 1 / -1;">
          <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
            <polyline points="17 21 17 13 7 13 7 21"></polyline>
            <polyline points="7 3 7 8 15 8"></polyline>
          </svg>
          <div class="empty-state-title">No Profiles Saved in Browser</div>
          <p class="empty-state-text">After filling out your profile and matching careers, click "Save Profile" to store your progress offline in localStorage.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = profiles.map(p => `
      <div class="saved-profile-card">
        <div>
          <div class="saved-profile-date">${new Date(p.createdAt).toLocaleDateString()} · ${new Date(p.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
          <div class="saved-profile-name">${this.escapeHtml(p.name)}</div>
          <div class="saved-profile-field">${p.year} · ${p.domain || 'General Field'}</div>
          
          <div style="font-size: 0.8125rem; color: var(--text-muted); margin-bottom: 0.75rem;">
            <strong>Top Suggestion:</strong> ${p.topCareer || 'Pending Evaluation'} (${p.topScore || 0}% Match)
          </div>

          <div style="font-size: 0.75rem; color: var(--text-subtle); margin-bottom: 1rem;">
            ${(p.selectedSkills || []).length} Skills · ${(p.selectedInterests || []).length} Interests
          </div>
        </div>

        <div style="display: flex; gap: 0.5rem; justify-content: flex-end; border-top: 1px solid var(--border-subtle); padding-top: 0.75rem;">
          <button class="btn btn-secondary btn-sm" onclick="App.loadSavedProfile('${p.id}')">
            Load Profile
          </button>
          <button class="btn btn-secondary btn-sm" style="color: var(--accent-danger);" onclick="App.deleteSavedProfile('${p.id}')">
            Delete
          </button>
        </div>
      </div>
    `).join("");
  },

  loadSavedProfile(id) {
    const profile = StorageManager.getAllProfiles().find(p => p.id === id);
    if (!profile) return;

    const nameInput = document.getElementById("student-name");
    const yearSelect = document.getElementById("student-year");
    const domainSelect = document.getElementById("preferred-domain");

    if (nameInput) nameInput.value = profile.name;
    if (yearSelect) yearSelect.value = profile.year;
    if (domainSelect) domainSelect.value = profile.domain;

    // Reset checks
    document.querySelectorAll("input[name='skills'], input[name='interests']").forEach(cb => cb.checked = false);

    (profile.selectedSkills || []).forEach(s => {
      const el = document.getElementById(`skill_${this.slugify(s)}`);
      if (el) el.checked = true;
    });

    (profile.selectedInterests || []).forEach(i => {
      const el = document.getElementById(`int_${this.slugify(i)}`);
      if (el) el.checked = true;
    });

    this.navigateTo("matching");
    this.handleGenerateRecommendations();
    this.showToast(`Loaded saved profile for "${profile.name}".`);
  },

  deleteSavedProfile(id) {
    if (confirm("Are you sure you want to remove this profile?")) {
      StorageManager.deleteProfile(id);
      this.updateSavedProfilesView();
      this.updateStatsCounters();
      this.showToast("Profile removed.");
    }
  },

  exportProfilesJSON() {
    const profiles = StorageManager.getAllProfiles();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(profiles, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `ai_careerpath_profiles_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    this.showToast("Exported JSON file to downloads.");
  },

  updateStatsCounters() {
    const savedCount = StorageManager.getAllProfiles().length;
    const statSaved = document.getElementById("stat-saved-count");
    if (statSaved) statSaved.textContent = savedCount.toString();

    const statCareers = document.getElementById("stat-careers-count");
    if (statCareers) statCareers.textContent = CareerDatabase.length.toString();

    let totalSkills = 0;
    SkillsCatalog.forEach(c => totalSkills += c.skills.length);
    const statSkills = document.getElementById("stat-skills-count");
    if (statSkills) statSkills.textContent = totalSkills.toString();
  },

  // --------------------------------------------------------------------------
  // Helpers
  // --------------------------------------------------------------------------
  slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '_')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  },

  escapeHtml(str) {
    return str.replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  },

  showToast(message) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 6L9 17l-5-5"></path>
      </svg>
      <span>${this.escapeHtml(message)}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transition = "opacity 300ms ease";
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }
};

// Start application when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

// Expose globally for inline event handlers
window.App = App;
