'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Github, ExternalLink } from 'lucide-react';
import styles from '@/styles/Project.module.css';
import { projects } from '@/contents/project';

export default function ProjectSection() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = useMemo(
    () => ['all', ...Array.from(new Set(projects.map((project) => project.category)))],
    []
  );

  const filteredProjects = useMemo(
    () =>
      activeFilter === 'all'
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  return (
    <section id="project" className={styles.projectsContainer}>
      <div className={styles.gridOverlay} aria-hidden="true" />

      <div className={styles.contentWrapper}>
        <h1 className={styles.heading}>My Projects</h1>

        {/* Filter Buttons */}
        <div className={styles.filterContainer} role="tablist">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeFilter === category}
              tabIndex={activeFilter === category ? 0 : -1}
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
          {filteredProjects.map((project) => {
            const IconComponent = project.icon as React.ComponentType<{ className?: string }>;

            return (
              <article key={project.id} className={styles.projectCard}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconContainer}>
                    <IconComponent className={styles.projectIcon} />
                  </div>
                  <span className={styles.categoryTag}>{project.category}</span>
                </div>

                <h2 className={styles.projectTitle}>{project.title}</h2>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.techStack}>
                  {project.technologies.map((tech, index) => (
                    <span key={`${project.id}-tech-${index}`} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

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
            );
          })}
        </div>

        {filteredProjects.length === 0 && (
          <div className={styles.noProjects}>
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
}
