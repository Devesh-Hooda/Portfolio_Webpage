import { Github, Linkedin, Mail } from 'lucide-react';
import { Project, Experience, SkillCategory, SocialLink, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/Devesh-Hooda', icon: Github },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/devesh-hooda-b46083260', icon: Linkedin },
  { platform: 'Email', url: 'mailto:Gvhooda@gmail.com', icon: Mail },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "Skillfied Mentor",
    role: "Data Analyst Intern",
    period: "May 2025",
    description: [
      "Developed a Python based ML pipeline (Pandas, Scikit-learn) to predict client term deposit subscriptions from demographic and campaign data.",
      "Automated data validation, cleaning (handling NaN/duplicates), and preprocessing (scaling, one-hot encoding) for 40K records.",
      "Implemented hyperparameter tuning GridSearchCV for KNN and optimizing Random Forest, achieving 91.1% accuracy."
    ]
  }
];

export const PROJECT_DATA: Project[] = [
  {
    title: "Retail Analytics & Customer Insights",
    description: "Analyzed 399K+ valid transactions generating £8.64M+ revenue using Python. Performed cohort analysis and RFM-based segmentation, uncovering retention drops across a 12-month lifecycle. Currently building a Tableau dashboard for high-value SKU and customer segment visualization.",
    techStack: ["Python", "Pandas", "Tableau", "RFM Analysis", "Cohort Analysis"],
    githubLink: "https://github.com/Devesh-Hooda/UCI_Cohort_Analytics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "IBM Customer Churn EDA and ML",
    description: "Python-driven analytics pipeline combining EDA, statistical analysis, and machine learning to transform raw customer data into actionable business intelligence. Revealed 28% churn in high-value segments.",
    techStack: ["Python", "LightGBM", "Pandas", "Scikit-learn", "EDA"],
    githubLink: "https://github.com/Devesh-Hooda",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Automated Recipe Data Pipeline",
    description: "Engineered a high-performance, multithreaded data scraping and ingestion pipeline, reducing processing time by 40% and enabling extraction of 40K+ recipe records with 99% reliability.",
    techStack: ["Python", "ThreadPool", "lxml", "Pandas", "Regex"],
    githubLink: "https://github.com/Devesh-Hooda",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Secure Backend API",
    description: "Engineered a Node.js/Express backend with JWT authentication and Prisma ORM, eliminating SQL injection risks and implementing Redis rate limiting (100 reqs/min).",
    techStack: ["Node.js", "Express", "Redis", "Prisma", "MySQL"],
    githubLink: "https://github.com/Devesh-Hooda",
    image: "https://images.unsplash.com/photo-1558494949-ef526b004297?auto=format&fit=crop&q=80&w=1000"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: "Languages & Databases",
    skills: ["Python", "SQL (MySQL, PostgreSQL)", "VBA", "HTML/CSS", "JavaScript"]
  },
  {
    name: "Data Science & ML",
    skills: ["Pandas", "Matplotlib", "SciKit-learn", "Numpy", "BeautifulSoup4", "Tableau"]
  },
  {
    name: "Tools & Platforms",
    skills: ["Docker", "Git", "VSCode", "Google Colab", "Node.js", "Express", "Redis"]
  }
];