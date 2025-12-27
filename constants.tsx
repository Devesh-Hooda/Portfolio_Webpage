import { Github, Linkedin, Mail } from 'lucide-react';
import { Project, Experience, SkillCategory, SocialLink, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Identity', href: '#about' },
  { label: 'History', href: '#experience' },
  { label: 'Artifacts', href: '#projects' },
  { label: 'Resources', href: '#skills' },
  { label: 'Gateway', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/devesh-hooda-b46083260', icon: Linkedin },
  { platform: 'GitHub', url: 'https://github.com/Devesh-Hooda', icon: Github },
  { platform: 'Email', url: 'mailto:Gvhooda@gmail.com', icon: Mail },
];

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "Skillfied Mentor",
    role: "Data Analyst Intern",
    period: "May 2025",
    githubLink: "https://github.com/Devesh-Hooda/Data-Analyst-Internship",
    description: [
      "Developed a Python based ML pipeline (Pandas, Scikit-learn) to predict client term deposit subscriptions from demographic and campaign data.",
      "Automated data validation, cleaning (handling NaN/duplicates), and preprocessing (scaling, one-hot encoding) for 40K records.",
      "Implemented hyperparameter tuning GridSearchCV for KNN and optimizing Random Forest, achieving 91.1% accuracy."
    ]
  }
];

export const PROJECT_DATA: Project[] = [
  {
    title: "Bank Term Deposit Predictor",
    description: "A machine learning pipeline built to predict the success of telemarketing campaigns. It includes comprehensive EDA, feature engineering, and a tuned Random Forest classifier.",
    techStack: ["Python", "Scikit-Learn", "Pandas", "Matplotlib"],
    githubLink: "https://github.com/Devesh-Hooda/Data-Analyst-Internship",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "SQL Sales Insights Dashboard",
    description: "End-to-end data analysis project using SQL to extract business metrics from raw relational databases and Tableau to visualize sales performance and customer segmentation.",
    techStack: ["SQL", "Tableau", "SQLite", "Excel"],
    githubLink: "https://github.com/Devesh-Hooda",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Predictive Analytics Engine",
    description: "Automated data cleaning and preprocessing script that handles missing values, outliers, and encoding, preparing datasets for advanced statistical modeling.",
    techStack: ["Python", "Pandas", "NumPy", "Seaborn"],
    githubLink: "https://github.com/Devesh-Hooda",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1000&auto=format&fit=crop"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: "Languages & Frameworks",
    skills: ["Python", "SQL", "HTML5", "CSS3", "JavaScript"]
  },
  {
    name: "Data Science & Analysis",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-Learn"]
  },
  {
    name: "Tools & BI Platforms",
    skills: ["VS Code", "Git / GitHub", "Tableau", "SQLite", "Docker"]
  }
];