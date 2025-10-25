'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Header.module.css';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const lastScrollY = useRef(0);

  // Device detection
  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  // Mobile header scroll behavior
  useEffect(() => {
    if (!isMobile && !isTablet) return;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY <= 0) {
        setIsHeaderVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsHeaderVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile, isTablet]);

  // Hash change listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || 'home';
      setActiveSection(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavClick = (section: string) => {
    window.location.hash = section;
    setActiveSection(section);
  };

  return (
    <>
      {/* Desktop Header */}
      {!isMobile && !isTablet ? (
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <div className={styles.profile}>
              <div className={styles.profileBackground}></div>
              <div className={styles.profileContent}>
                <Image
                  src="/assets/img/profile.jpg"
                  alt="Profile"
                  width={120}
                  height={120}
                  className={styles.profileImg}
                  priority
                />
                <h1 className={styles.name}>
                  <Link href="/">Sohan Kr. Shah</Link>
                </h1>
              </div>
            </div>

            <nav className={styles.desktopNav}>
              <ul>
                <li>
                  <Link
                    href="#home"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('home');
                    }}
                    className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
                  >
                    <i className="fa-solid fa-house-chimney"></i>
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('about');
                    }}
                    className={`${styles.navLink} ${activeSection === 'about' ? styles.active : ''}`}
                  >
                    <i className="fa-solid fa-user"></i>
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#project"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('project');
                    }}
                    className={`${styles.navLink} ${activeSection === 'project' ? styles.active : ''}`}
                  >
                    <i className="fa-solid fa-code"></i>
                    <span>Projects</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('contact');
                    }}
                    className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
                  >
                    <i className="fa-solid fa-envelope"></i>
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      ) : (
        
        <header className={`${styles.mobileHeader} ${isHeaderVisible ? styles.headerVisible : styles.headerHidden}`}>
          <div className={styles.mobileLogo}>
            <Image
              src="/assets/img/profile.jpg"
              alt="Profile"
              width={46}
              height={46}
              className={styles.mobileLogoImg}
              priority
            />
            <h1 className={styles.mobileTitle}>
              <Link href="/">Sohan Kr. Shah</Link>
            </h1>
          </div>
        </header>
      )}
    </>
  );
}