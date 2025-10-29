import { Code, LucideIcon } from "lucide-react";

// Project interface
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  icon: React.ComponentType | React.ReactNode;
  category: string;
  slug?: string;
}

// Contact Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

export type ContactType = 'email' | 'phone' | 'location';

export interface ContactInfo {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  type: ContactType;
}

export interface SocialLink {
  icon: LucideIcon;
  title: string;
  href: string;
  className?: string;
}


export interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export interface ContactFormProps {
  onSubmitSuccess?: () => void;
  onSubmitError?: (error: Error) => void;
}

// ==================== Navigation Types  ====================
export interface DeviceState {
  isMobile: boolean;
  isTablet: boolean;
}

export interface SidebarLinkProps {
  section: string;
  icon: string;
  text: string;
  isActive: boolean;
  onClick: (section: string) => void;
}

export interface NavItem {
  section: string;
  icon: string;
  text: string;
}

export interface FooterLinkProps {
  section: string;
  icon: string;
  text: string;
  isActive: boolean;
  onClick: (section: string) => void;
 
}


// ==================== About Section Types ====================
export interface TimelineItemProps {
  title: string;
  period: string;
  institution: string;
  institutionalLocation?: string;
  institutionDetail?: string;
}

export interface SkillCategoryProps {
  title: string;
  emoji: string;
  skills: string[];
  categoryClass: string;
}

export interface InterestCardProps {
  icon: string;
  title: string;
  description: string;
}

// ==================== Home Section Types ====================
export interface TypedOptions {
  strings: string[];
  typeSpeed: number;
  backSpeed: number;
  backDelay: number;
  loop: boolean;
  smartBackspace: boolean;
}