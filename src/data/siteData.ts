export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface FeatureBlock {
  title: string;
  description: string;
  icon: string;
}

export interface IndustrySolution {
  title: string;
  subtitle: string;
  icon: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  website: string;
  highlights: string[];
  badge: string;
  category: string;
}

export interface PricingPlan {
  id: string;
  title: string;
  startingPrice: string;
  features: string[];
  popular?: boolean;
  idealFor: string;
}

export interface WorkStep {
  step: string;
  title: string;
  description: string;
}

export const SITE_CONFIG = {
  brandName: "NADHEE",
  brandSubtitle: "TECH SOLUTIONS",
  fullName: "NADHEE TECH SOLUTIONS",
  tagline: "Technology. Built for Business.",
  consultant: {
    name: "Ramamoorthy K",
    title: "Technology Solutions Consultant",
    phone: "9384390750",
    phoneFormatted: "+91 93843 90750",
    email: "info@nadheedigital.com",
    website: "www.nadheedigital.com",
    location: "Madurai, Tamil Nadu, India",
    whatsappUrl: "https://wa.me/919384390750?text=Hello%20NADHEE%20Tech%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20technology%20solution%20for%20my%20business."
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "custom-software",
    title: "Custom Software",
    description: "Business-specific software designed around your workflow, processes and requirements.",
    features: ["Tailored Business Logic", "Role-Based Access", "Secure Database Design", "Scalable Architecture"],
    icon: "Cpu"
  },
  {
    id: "web-applications",
    title: "Web Applications",
    description: "Modern, responsive web applications that simplify operations and improve customer experiences.",
    features: ["Fast & Responsive UI", "Cloud-Ready Infrastructure", "API Integrations", "Client Portals"],
    icon: "Globe"
  },
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    description: "Mobile applications designed for customers, employees and business operations.",
    features: ["iOS & Android Support", "Offline Capabilities", "Push Notifications", "Smooth Touch Experience"],
    icon: "Smartphone"
  },
  {
    id: "business-automation",
    title: "Business Automation",
    description: "Automate repetitive tasks, reduce manual work and improve operational efficiency.",
    features: ["Workflow Optimization", "Automated Alerts & WhatsApp", "Paperless Processing", "Error Reduction"],
    icon: "Zap"
  },
  {
    id: "dashboards-reports",
    title: "Dashboards & Reports",
    description: "Turn business data into clear dashboards, reports and actionable insights.",
    features: ["Real-Time Visualizations", "Exportable PDF/Excel", "KPI Tracking", "Executive Analytics"],
    icon: "BarChart3"
  },
  {
    id: "ai-solutions",
    title: "AI Solutions",
    description: "Use AI to automate processes, improve productivity and create smarter digital experiences.",
    features: ["Intelligent Process Automation", "Smart Search & Assistance", "Automated Evaluations", "Productivity Enhancements"],
    icon: "Sparkles"
  }
];

export const WHY_CHOOSE_NADHEE: FeatureBlock[] = [
  {
    title: "Built Around Your Business",
    description: "We don't force rigid off-the-shelf software. Every solution is customized to match your real workflow.",
    icon: "Layers"
  },
  {
    title: "Affordable & Transparent",
    description: "Clear, upfront starting pricing with zero hidden charges. High engineering standards without enterprise bloat.",
    icon: "ShieldCheck"
  },
  {
    title: "Mobile-First Development",
    description: "Engineered specifically for optimal touch interfaces and responsive performance on all screen sizes.",
    icon: "Smartphone"
  },
  {
    title: "Modern Technology",
    description: "Clean codebases, modern frameworks, cloud security, and robust databases built to last and grow.",
    icon: "Code2"
  },
  {
    title: "Direct Communication",
    description: "Work directly with your technology consultant. No middlemen, no confusing jargon, quick responses.",
    icon: "MessageSquare"
  },
  {
    title: "Ongoing Support",
    description: "Dependable deployment assistance, continuous improvements, and reliable technical guidance after launch.",
    icon: "Headphones"
  }
];

export const BUSINESS_SOLUTIONS: IndustrySolution[] = [
  {
    title: "Retail & Shops",
    subtitle: "Streamline counter sales and inventory tracking",
    icon: "Store",
    items: [
      "Fast Billing & Invoicing",
      "Inventory & Stock Management",
      "Customer Management & Loyalty",
      "Daily Sales & Profit Reports"
    ]
  },
  {
    title: "Education",
    subtitle: "Empower institutions, tutors, and learning platforms",
    icon: "GraduationCap",
    items: [
      "Student & Batch Management",
      "Online Tests & Timed Assessments",
      "Fee Tracking & Receipt Generation",
      "Student & Parent Portals"
    ]
  },
  {
    title: "Service Businesses",
    subtitle: "Automate appointments, field work, and billing",
    icon: "Briefcase",
    items: [
      "Online Booking & Scheduling",
      "Customer Contact History",
      "Job & Task Tracking",
      "Instant Quotations & Invoicing"
    ]
  },
  {
    title: "Small & Medium Businesses",
    subtitle: "Centralize operations and automate manual workflows",
    icon: "Building2",
    items: [
      "Custom Business CRM",
      "Workflow & Approval Automation",
      "Operational Dashboards",
      "Custom Business Applications"
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "anjalkaran",
    name: "ANJALKARAN",
    tagline: "AI-Powered Examination & Learning Platform",
    description: "An AI-powered examination preparation platform with practice questions, mock tests, performance analysis and learning tools.",
    website: "https://anjalkaran.in",
    badge: "AI & EdTech Platform",
    category: "Web Application & AI",
    highlights: [
      "Adaptive Practice Questions & Mock Test Engine",
      "Deep Analytics & Performance Scoring",
      "AI-Assisted Learning & Evaluation",
      "Mobile-Optimized Fast Assessment UI"
    ]
  },
  {
    id: "tnpsc99",
    name: "TNPSC99",
    tagline: "Online Examination & Preparation Platform",
    description: "An online examination and practice platform designed for competitive examination preparation.",
    website: "https://tnpsc99.com",
    badge: "Competitive Exam Portal",
    category: "EdTech & Web Portal",
    highlights: [
      "Comprehensive Question Bank & Subject Modules",
      "Timed Real-Exam Simulator with Instant Results",
      "Detailed Subject-wise Progress Tracking",
      "Optimized for High Concurrent Student Access"
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "business-website",
    title: "BUSINESS WEBSITE",
    startingPrice: "₹5,000",
    idealFor: "Local businesses, consultants, and professionals",
    features: [
      "Responsive modern website",
      "Mobile-first design architecture",
      "Functional contact form & WhatsApp link",
      "Basic on-page SEO optimization",
      "Fast deployment & setup support"
    ]
  },
  {
    id: "ecommerce-website",
    title: "E-COMMERCE WEBSITE",
    startingPrice: "₹15,000",
    idealFor: "Shops and brands selling products online",
    features: [
      "Product catalogue & category filters",
      "Shopping cart & checkout experience",
      "Order management system",
      "Online payment gateway integration",
      "Intuitive admin management panel"
    ]
  },
  {
    id: "custom-web-app",
    title: "CUSTOM WEB APPLICATION",
    startingPrice: "₹25,000",
    popular: true,
    idealFor: "Businesses needing tailored operations & portals",
    features: [
      "Comprehensive requirement analysis",
      "Tailored workflows & business logic",
      "Multi-role user management",
      "Custom reports & data export",
      "Full administrative dashboard"
    ]
  },
  {
    id: "business-automation",
    title: "BUSINESS AUTOMATION",
    startingPrice: "₹15,000",
    idealFor: "Teams looking to eliminate repetitive manual tasks",
    features: [
      "End-to-end workflow analysis",
      "Automated task pipelines & triggers",
      "Instant WhatsApp / Email notifications",
      "Activity logs & summary reports",
      "Ongoing technical support"
    ]
  },
  {
    id: "mobile-application",
    title: "MOBILE APPLICATION",
    startingPrice: "₹25,000",
    idealFor: "Customer-facing or internal staff field apps",
    features: [
      "Custom mobile UI/UX design",
      "Targeted business functionality",
      "Seamless API backend integration",
      "Push notification capability",
      "Complete deployment support"
    ]
  }
];

export const HOW_WE_WORK: WorkStep[] = [
  {
    step: "01",
    title: "Understand",
    description: "We understand your business, processes, goals, and exact requirements before writing a single line of code."
  },
  {
    step: "02",
    title: "Plan",
    description: "We design the solution architecture, intuitive user workflow, technology stack, and project roadmap."
  },
  {
    step: "03",
    title: "Build",
    description: "We develop the application using modern clean code, verify responsiveness, and test functionality thoroughly."
  },
  {
    step: "04",
    title: "Launch",
    description: "We deploy your solution to reliable hosting, verify domain setup, and guide your team on getting started."
  },
  {
    step: "05",
    title: "Support",
    description: "We provide ongoing improvements, technical guidance, and reliable support as your business evolves."
  }
];

export const BUDGET_OPTIONS = [
  "Under ₹10,000",
  "₹10,000 - ₹25,000",
  "₹25,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000+"
];

export const SERVICE_OPTIONS = [
  "Custom Software",
  "Web Application",
  "Business Website",
  "E-Commerce Website",
  "Mobile Application",
  "Business Automation",
  "Dashboards & Reports",
  "AI Solution",
  "Other / Not Sure"
];
