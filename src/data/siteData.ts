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
  positioning: "Nadhee Tech Solutions provides cloud-based business software, ERP, WhatsApp Business integrations and digital solutions that help businesses manage operations, customer communication and commerce.",
  consultant: {
    name: "Ramamoorthy K",
    title: "Technology Solutions Consultant",
    phone: "9384390750",
    phoneFormatted: "+91 93843 90750",
    email: "info@nadheetechsolutions.com",
    website: "https://nadheetechsolutions.com",
    websiteDisplay: "www.nadheetechsolutions.com",
    location: "Madurai, Tamil Nadu, India",
    whatsappUrl: "https://wa.me/919384390750?text=Hello%20NADHEE%20Tech%20Solutions%2C%20I%20would%20like%20to%20discuss%20a%20technology%20solution%20for%20my%20business."
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "cloud-erp",
    title: "Cloud ERP & Operations",
    description: "Cloud-based business management software covering billing, inventory, customer ledgers, and operational workflows.",
    features: ["Multi-Counter Point of Sale", "Real-Time Stock Tracking", "Customer Outstanding Ledgers", "Role-Based Staff Access"],
    icon: "Layers"
  },
  {
    id: "whatsapp-integration",
    title: "WhatsApp Business Integration",
    description: "Technology solutions connecting client-authorized WhatsApp Business Platform assets with operational systems.",
    features: ["Order & Booking Confirmations", "Automated Invoice Delivery", "Dispatch & Tracking Alerts", "Isolated Client Data Handling"],
    icon: "MessageSquare"
  },
  {
    id: "whatsapp-commerce",
    title: "WhatsApp Commerce Solutions",
    description: "Enable customers to browse catalogues, place orders, and receive payment links directly inside WhatsApp.",
    features: ["Catalogue Discovery", "Cart & Order Capture", "Payment Link Dispatches", "Customer Enquiry Routing"],
    icon: "ShoppingBag"
  },
  {
    id: "custom-software",
    title: "Custom Software Solutions",
    description: "Business-specific software designed around your workflow, processes, operational rules and requirements.",
    features: ["Tailored Business Logic", "Secure Cloud Database", "Scalable Modular Architecture", "Direct Consultant Support"],
    icon: "Cpu"
  },
  {
    id: "web-applications",
    title: "Web Applications & Portals",
    description: "Modern, responsive cloud web applications that simplify business operations and improve customer experiences.",
    features: ["Fast & Responsive UI", "Cloud Infrastructure", "REST API Integrations", "Client & Staff Portals"],
    icon: "Globe"
  },
  {
    id: "business-automation",
    title: "Business Process Automation",
    description: "Automate repetitive data entry, alerts, and transaction reconciliation to reduce manual human overhead.",
    features: ["Workflow Pipeline Triggers", "Automated Customer Notifications", "Paperless Invoicing", "Error Reduction"],
    icon: "Zap"
  },
  {
    id: "dashboards-reports",
    title: "Dashboards & Analytics",
    description: "Turn transactional business data into clear dashboards, operational reports and actionable insights.",
    features: ["Real-Time Visualizations", "Exportable PDF/Excel Reports", "Daily Sales & Profit Metrics", "Executive Summaries"],
    icon: "BarChart3"
  },
  {
    id: "api-integration",
    title: "API & Systems Integration",
    description: "Connect payment gateways, SMS/messaging providers, logistics partners, and third-party cloud services.",
    features: ["Payment Gateway Connectors", "Logistics & Courier APIs", "Webhook Architecture", "Secure Auth Protocols"],
    icon: "Code2"
  },
  {
    id: "mobile-applications",
    title: "Mobile Business Applications",
    description: "Lightweight mobile applications designed for counter staff, field executives, and on-the-go business monitoring.",
    features: ["Mobile-First Design", "Responsive Touch Performance", "Push Alerts & Notifications", "Cloud Data Sync"],
    icon: "Smartphone"
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
    title: "Strict Data Isolation",
    description: "Each client's business records, customer numbers, and messages are partitioned with zero cross-tenant data sharing.",
    icon: "ShieldCheck"
  },
  {
    title: "Modern Technology Stack",
    description: "Clean codebases, modern frameworks, cloud security, and robust databases built to last and scale.",
    icon: "Code2"
  },
  {
    title: "Direct Communication",
    description: "Work directly with your technology consultant. No middlemen, no confusing jargon, fast responses.",
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
      "Fast Counter Billing & Invoicing",
      "Inventory & Low-Stock Alerts",
      "WhatsApp Invoice Receipts",
      "Daily Sales & Profit Reports"
    ]
  },
  {
    title: "Education & Academies",
    subtitle: "Empower institutions, tutors, and learning platforms",
    icon: "GraduationCap",
    items: [
      "Student & Batch Management",
      "Online Tests & Timed Assessments",
      "Fee Tracking & WhatsApp Receipts",
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
    title: "Small & Medium Enterprises",
    subtitle: "Centralize operations and automate manual workflows",
    icon: "Building2",
    items: [
      "Cloud ERP & Operations CRM",
      "Workflow & Approval Automation",
      "WhatsApp Business Notification Pipelines",
      "Operational Executive Dashboards"
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
    id: "whatsapp-starter",
    title: "WHATSAPP WORKFLOW STARTER",
    startingPrice: "₹12,000",
    idealFor: "Shops & service businesses seeking WhatsApp integration",
    features: [
      "WhatsApp Business Platform setup guidance",
      "Automated order & invoice notification webhook",
      "Branded notification templates",
      "Direct integration with billing/orders",
      "Technical setup & verification support"
    ]
  },
  {
    id: "custom-web-app",
    title: "CUSTOM CLOUD ERP / APP",
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
    id: "ecommerce-website",
    title: "E-COMMERCE & COMMERCE SUITE",
    startingPrice: "₹18,000",
    idealFor: "Shops and brands selling products online",
    features: [
      "Product catalogue & category filters",
      "Shopping cart & checkout experience",
      "WhatsApp order notifications",
      "Online payment gateway integration",
      "Intuitive admin management panel"
    ]
  },
  {
    id: "business-automation",
    title: "BUSINESS PROCESS AUTOMATION",
    startingPrice: "₹15,000",
    idealFor: "Teams looking to eliminate repetitive manual tasks",
    features: [
      "End-to-end workflow analysis",
      "Automated task pipelines & triggers",
      "Instant WhatsApp / Email notifications",
      "Activity logs & summary reports",
      "Ongoing technical support"
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
  "Cloud ERP Solutions",
  "WhatsApp Business Integration",
  "WhatsApp Commerce",
  "Custom Software",
  "Web Application",
  "Business Process Automation",
  "Billing & Inventory System",
  "API & Systems Integration",
  "Other / Not Sure"
];
