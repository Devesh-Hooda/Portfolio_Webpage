import React from 'react';

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink?: string;
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ElementType;
}

export interface NavItem {
  label: string;
  href: string;
}