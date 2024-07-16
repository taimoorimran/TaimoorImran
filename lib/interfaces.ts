import React from "react";
export interface ProjectItemProps {
  imgSrc?: string;
  url?: string;
  name: string;
  category: string;
  description?: string[];
}

export interface SocialItemProps {
  children: React.ReactNode;
  link: string;
}

export interface ContactItemProps {
  children: React.ReactNode;
  title: string;
  link?: string;
  text: string;
}

export interface ClientItemProps {
  imgSrc?: string;
  link?: string;
}

export interface WorkItemProps {
  imgSrc?: string;
  title: string;
  description: string;
}

export interface EducationItemProps {
  institute: string;
  education: string;
  startDate: string | number;
  endDate: string | number;
  description?: string[];
}

export interface ExperienceItemProps {
  company: string;
  designation: string;
  startDate: string | number;
  endDate: string | number;
  description?: string[];
  skills?: string[];
}

export interface SkillItemProps {
  name: string;
  score: number;
}
