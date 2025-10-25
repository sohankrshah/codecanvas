'use client';
import { useEffect, useState } from 'react';
import HomeContent from '@/app/home/page';
import AboutContent from '@/app/about/page';
import ProjectsContent from '@/app/projects/page';
import ContactContent from '@/app/contact/page';;


import styles from '@/styles/HomeSection.module.css';


export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    const validSections = ['home', 'about', 'project', 'contact'];
    
    if (hash && validSections.includes(hash)) {
      setActiveSection(hash);
    } else {
      window.location.hash = '';
      setActiveSection('home');
    }

    const handleHashChange = () => {
      const newHash = window.location.hash.substring(1);
      if (validSections.includes(newHash)) {
        setActiveSection(newHash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <main className={styles.main}>
      {activeSection === 'home' && < HomeContent />}
      
      <div className={styles.mainContent}>
        {activeSection === 'about' && <AboutContent />}
        {activeSection === 'project' && < ProjectsContent />}
        {activeSection === 'contact' && <ContactContent />}
      </div>
    </main>
  );
}