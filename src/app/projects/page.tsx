'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Github,
  ExternalLink,
  Code,
  Activity,
  Database,
  MessageSquare,
  ShoppingBag,
  UserX,
  LineChart,
  BarChart2,
  Users,
} from 'lucide-react';
import styles from '@/styles/Project.module.css';
import type { Project } from '@/types';

// ==================== Project Data ====================

const projectsData: Project[] = [
  {
    id: 1,
    title: 'AI Coding Assistant with Integrated Compiler',
    description:
      'Developed an AI coding assistant using LLaMA via Groq API with memory and context persistence. Integrated a multi-language compiler with real-time syntax highlighting and error detection.',
    technologies: ['Python', 'React', 'LLaMA', 'Groq API', 'TensorFlow'],
    githubUrl: 'https://github.com/yourusername/ai-coding-assistant',
    icon: <Code className={styles.projectIcon} />,
    category: 'AI',
    slug: 'ai-coding-assistant',
  },
  {
    id: 2,
    title: 'Computer Vision-Based Safety Compliance System',
    description:
      'Built a real-time helmet detection system using CNNs to improve workplace safety monitoring. Optimized the model for edge deployment using TensorFlow Lite for low-latency inference.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'CNNs', 'Edge Computing'],
    githubUrl: 'https://github.com/yourusername/cv-safety-system',
    icon: <Activity className={styles.projectIcon} />,
    category: 'Computer Vision',
    slug: 'cv-safety-system',
  },
  {
    id: 3,
    title: 'Social Media Sentiment Analysis',
    description:
      'Developed NLP models to analyze sentiment patterns across social media platforms. Implemented text preprocessing, feature extraction, and machine learning classifiers to identify customer sentiment trends.',
    technologies: ['Python', 'NLTK', 'spaCy', 'Scikit-learn', 'Pandas'],
    githubUrl: 'https://github.com/yourusername/social-media-sentiment',
    icon: <MessageSquare className={styles.projectIcon} />,
    category: 'Data Science',
    slug: 'social-media-sentiment',
  },
  {
    id: 4,
    title: 'E-commerce Product Performance Analytics',
    description:
      'Created an interactive dashboard analyzing product performance metrics across different categories and time periods. Visualized KPIs including conversion rates, revenue trends, and inventory turnover.',
    technologies: ['Power BI', 'SQL', 'DAX', 'Excel', 'Data Modeling'],
    githubUrl: 'https://github.com/yourusername/ecommerce-analytics',
    icon: <ShoppingBag className={styles.projectIcon} />,
    category: 'Data Analytics',
    slug: 'ecommerce-analytics',
  },
  {
    id: 5,
    title: 'NEPSE Stock Market Analytics Dashboard',
    description:
      'Built an interactive dashboard for Nepal Stock Exchange data with technical indicators, historical trends, and sector-based comparisons. Implemented automated data scraping and cleaning pipelines.',
    technologies: ['Tableau', 'Python', 'Web Scraping', 'Time Series Analysis', 'Technical Indicators'],
    githubUrl: 'https://github.com/yourusername/nepse-dashboard',
    icon: <LineChart className={styles.projectIcon} />,
    category: 'Data Analytics',
    slug: 'nepse-dashboard',
  },
  {
    id: 6,
    title: 'Sales Performance Dashboard for a Retail Chain',
    description:
      'Designed a comprehensive retail sales dashboard with filterable KPIs by region, product category, and time period. Visualized sales trends, inventory levels, and customer segments for strategic decision-making.',
    technologies: ['Power BI', 'DAX', 'SQL', 'Data Modeling', 'Azure'],
    githubUrl: 'https://github.com/yourusername/retail-sales-dashboard',
    icon: <BarChart2 className={styles.projectIcon} />,
    category: 'Data Analytics',
    slug: 'retail-sales-dashboard',
  },
  {
    id: 7,
    title: 'Customer Churn Prediction',
    description:
      'Implemented machine learning models to predict customer churn probability based on behavioral and demographic features. Achieved 87% accuracy with ensemble techniques and provided actionable insights for retention strategies.',
    technologies: ['Python', 'Scikit-learn', 'XGBoost', 'Feature Engineering', 'Model Evaluation'],
    githubUrl: 'https://github.com/yourusername/churn-prediction',
    icon: <UserX className={styles.projectIcon} />,
    category: 'Data Analytics',
    slug: 'customer-churn-prediction',
  },
  {
    id: 8,
    title: 'HR Analytics Dashboard',
    description:
      'Created descriptive analytics dashboard for HR metrics including employee turnover, satisfaction, and performance indicators. Implemented drill-down capabilities for department and role-based analysis.',
    technologies: ['Tableau', 'Excel', 'SQL', 'Data Visualization', 'Statistical Analysis'],
    githubUrl: 'https://github.com/yourusername/hr-analytics',
    icon: <Users className={styles.projectIcon} />,
    category: 'Data Analytics',
    slug: 'hr-analytics',
  },
];

// ==================== Main Component ====================

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Get unique categories
  const categories = useMemo(
    () => ['all', ...Array.from(new Set(projectsData.map((project) => project.category)))],
    []
  );

  // Filter projects based on active filter
  const filteredProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? projectsData
        : projectsData.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="project" className={styles.projectsContainer}>
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.contentWrapper}>
        {/* Section Header */}
        <h1 className={styles.heading}>My Projects</h1>

        {/* Filter Buttons */}
        <div className={styles.filterContainer} role="tablist">
          {categories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeFilter === category}
              className={`${styles.filterButton} ${
                activeFilter === category ? styles.activeFilter : ''
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsGrid}>
          {filteredProjects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>{project.icon}</div>
                <span className={styles.categoryTag}>{project.category}</span>
              </div>

              {/* Project Title */}
              <h2 className={styles.projectTitle}>{project.title}</h2>

              {/* Project Description */}
              <p className={styles.projectDescription}>{project.description}</p>

              {/* Technology Stack */}
              <div className={styles.techStack}>
                {project.technologies.map((tech, index) => (
                  <span key={`${project.id}-tech-${index}`} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className={styles.projectLinks}>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={18} />
                  <span>GitHub</span>
                </a>

                {project.slug && (
                  <Link
                    href={`/projects/${project.slug}`}
                    className={styles.projectLink}
                    aria-label={`View detailed post for ${project.title}`}
                  >
                    <ExternalLink size={18} />
                    <span>View Post</span>
                  </Link>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.projectLink}
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* No projects message */}
        {filteredProjects.length === 0 && (
          <div className={styles.noProjects}>
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}