'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '@/styles/Footer.module.css';
import type { DeviceState, FooterLinkProps, NavItem } from '@/types';

const FooterLink = ({ section, icon, text, isActive, onClick }: FooterLinkProps) => (
  <li>
    <Link
      href={`#${section}`}
      onClick={(e) => {
        e.preventDefault();
        onClick(section);
      }}
      className={`${styles.footerNavLink} ${isActive ? styles.active : ''}`}
      aria-current={isActive ? 'page' : undefined}
    >
      <i className={icon} aria-hidden="true" />
      <span>{text}</span>
    </Link>
  </li>
);

const FOOTER_NAV_ITEMS: NavItem[] = [
  { section: 'home', icon: 'fa-solid fa-house-chimney', text: 'Home' },
  { section: 'about', icon: 'fa-solid fa-address-card', text: 'About' },
  { section: 'project', icon: 'fa-solid fa-file', text: 'Projects' },
  { section: 'contact', icon: 'fa-solid fa-envelope', text: 'Contact' },
];

export default function Footer() {
  const [deviceState, setDeviceState] = useState<DeviceState>({
    isMobile: false,
    isTablet: false,
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth;
      setDeviceState({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
      });
    };

    checkDeviceType();
    window.addEventListener('resize', checkDeviceType);
    return () => window.removeEventListener('resize', checkDeviceType);
  }, []);

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20 && currentScrollY > lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hash change listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1) || 'home';
      setActiveSection(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavClick = (section: string) => {
    window.location.hash = section;
    setActiveSection(section);
  };

  // Only render footer on mobile/tablet devices
  if (!deviceState.isMobile && !deviceState.isTablet) {
    return null;
  }

  return (
    <footer
      className={`${styles.footer} ${styles.mobileFooter} ${
        isScrolled ? styles.hidden : ''
      }`}
    >
      <div className={styles.container}>
        <nav className={styles.footerNav} aria-label="Mobile navigation">
          <ul>
            {FOOTER_NAV_ITEMS.map((item) => (
              <FooterLink
                key={item.section}
                section={item.section}
                icon={item.icon}
                text={item.text}
                isActive={activeSection === item.section}
                onClick={handleNavClick}
              />
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}