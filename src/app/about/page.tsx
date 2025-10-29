'use client';

import { FaGraduationCap, FaLaptopCode, FaRegCalendar } from 'react-icons/fa';
import styles from '@/styles/AboutSection.module.css';
import type { TimelineItemProps, SkillCategoryProps, InterestCardProps } from '@/types';

// ==================== Sub-Components ====================

function TimelineItem({ title, period, institution, institutionalLocation, institutionDetail }: TimelineItemProps) {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineBadge} />
      <div className={styles.timelineContent}>
        <h4>{title}</h4>
        <div className={styles.timelinePeriod}>
          <FaRegCalendar className={styles.smallIcon} />
          <span>{period}</span>
        </div>
        <p className={styles.institution}>{institution}</p>
         {institutionalLocation && (
          <p className={styles.institutionLocation}>{institutionalLocation}</p>
        )}
        {institutionDetail && (
          <p className={styles.institutionDetail}>{institutionDetail}</p>
        )}
      </div>
    </div>
  );
}

function SkillCategory({ title, emoji, skills, categoryClass }: SkillCategoryProps) {
  return (
    <div className={`${styles.skillCategory} ${styles[categoryClass]}`}>
      <h4>
        <span className={styles.categoryEmoji}>{emoji}</span>
        {title}
      </h4>
      <div className={styles.skillTags}>
        {skills.map((skill, index) => (
          <span key={`skill-${index}`} className={`${styles.skillTag} ${styles.animatedTag}`}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function InterestCard({ icon, title, description }: InterestCardProps) {
  return (
    <div className={styles.interestCard}>
      <div className={styles.interestIcon}>{icon}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

// ==================== Main Component ====================

export default function AboutSection() {
  // Education timeline data
  const education: TimelineItemProps[] = [
    {
      title: 'Bachelor in Computer Science Engineering',
      period: '2022 - 2026',
      institution: 'Kalinga Institute of Industrial Technology',
      institutionalLocation: 'Bhubaneswar, Odish, India(751024)'
    },
    {
      title: '12th-PCM',
      period: '2020 - 2022',
      institution: ' DSDT DAV KEDIA VISHWABHARTI',
      institutionalLocation:'Biratnagar, Nepal',
      institutionDetail: 'CBSE Board',
    },
    {
      title: '10th Class',
      period: '2020 Pass-out',
      institution: 'Janak Memorial Secondary Boarding School',
      institutionalLocation: ' Gramthan-2 Jhorahat, Biratnagar, Nepal',
      institutionDetail: 'NEB Board',
    },
  ];

  // Technical skills data
  const skillCategories: SkillCategoryProps[] = [
    {
      title: 'Programming Languages',
      emoji: '💻',
      categoryClass: 'programmingCategory',
      skills: ['🐍 Python', '☕ Java', '📄 HTML', '🎨 CSS'],
    },
    {
      title: 'Data Science & Analytics',
      emoji: '📊',
      categoryClass: 'dataCategory',
      skills: [
        '🔍 EDA',
        '⚙️ Feature Engineering',
        '🧪 Hypothesis Testing',
        '📈 Visualization',
        '🧮 Classification/Regression',
      ],
    },
    {
      title: 'Frameworks & Libraries',
      emoji: '📚',
      categoryClass: 'frameworksCategory',
      skills: [
        '🐼 Pandas',
        '🔢 Numpy',
        '📉 Matplotlib',
        '🌊 Seaborn',
        '🚀 XGBoost',
        '🔥 PyTorch',
        '🧠 TensorFlow',
        '🧩 Keras',
        '🔬 Scikit-learn',
      ],
    },
    {
      title: 'Tools & Technologies',
      emoji: '🛠️',
      categoryClass: 'toolsCategory',
      skills: [
        '📄 Git',
        '🐙 GitHub',
        '👨‍💻 VS Code',
        '📓 Jupyter',
        '🧪 Colab',
        '🗄️ MySQL',
        '📊 Power BI',
        '📑 Ms Excel',
        '☁️ AWS',
        '🐧 Linux',
      ],
    },
  ];

  // Areas of interest data
  const interests: InterestCardProps[] = [
    {
      icon: '🧠',
      title: 'Artificial Intelligence',
      description: 'Exploring the potential of AI in various domains',
    },
    {
      icon: '📊',
      title: 'Data Science',
      description: 'Analyzing data to extract meaningful insights',
    },
    {
      icon: '🤖',
      title: 'Machine Learning',
      description: 'Building predictive models to solve complex problems',
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Creating interactive and user-friendly web applications',
    },
    {
      icon: '☁️',
      title: 'Cloud Computing',
      description: 'Utilizing cloud platforms for scalable solutions',
    },
    {
      icon: '📈',
      title: 'Data Visualization',
      description: 'Presenting data in a visually appealing manner',
    },
  ];

  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* Section Title */}
        <div className={styles.sectionTitle}>
          <h2>About Me</h2>
          <div className={styles.underline} />
        </div>

        {/* Profile Card */}
        <div className={styles.profileCard}>
          <div className={styles.profileInfo}>
            <h3 className={styles.name}>Sohan Kumar Shah</h3>
            <p className={styles.title}>Computer Science Engineering Student</p>
            <p className={styles.summary}>
              Computer Science student with a strong foundation in AI, Data Science, and Machine
              Learning. Experienced in developing solutions using generative AI, computer vision,
              and predictive analytics. Eager to apply skills in a professional environment to
              solve real-world problems through data-driven insights.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className={styles.educationSection}>
          <div className={styles.sectionHeading}>
            <FaGraduationCap className={styles.headingIcon} />
            <h3>Education</h3>
          </div>
          <div className={styles.timelineContainer}>
            {education.map((item, index) => (
              <TimelineItem key={`education-${index}`} {...item} />
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className={styles.skillsSection}>
          <div className={styles.sectionHeading}>
            <FaLaptopCode className={styles.headingIcon} />
            <h3>Technical Skills</h3>
          </div>
          <div className={styles.skillsGrid}>
            {skillCategories.map((category, index) => (
              <SkillCategory key={`category-${index}`} {...category} />
            ))}
          </div>
        </div>

        {/* Interests Section */}
        <div className={styles.interestsSection}>
          <div className={styles.sectionHeading}>
            <h3>Areas of Interest</h3>
          </div>
          <div className={styles.interestsGrid}>
            {interests.map((interest, index) => (
              <InterestCard key={`interest-${index}`} {...interest} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}