'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import Typed from 'typed.js';
import styles from '@/styles/HomeSection.module.css';
import type { TypedOptions } from '@/types';

export default function HomeSection() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<Typed | null>(null);
  const [animateIn, setAnimateIn] = useState<boolean>(false);
  // Memoize configuration for Typed.js to prevent recreation
  const typedConfig: TypedOptions = useMemo(() => ({
    strings: ['Data Analytics', 'Web Developer', 'AI Enthusiast'],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
    smartBackspace: true,
  }), []);
  useEffect(() => {
    // Trigger fade-in animation
    const animationTimer = setTimeout(() => {
      setAnimateIn(true);
    }, 500);
    // Initialize Typed.js
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, typedConfig);
    }
    // Cleanup function
    return () => {
      clearTimeout(animationTimer);
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [typedConfig]);

  return (
    <section id="home" className={styles.home}>
      <div className={`${styles.homeContainer} ${animateIn ? styles.fadeInUp : ''}`}>
        <div className={styles.nameWrapper}>
          <h1 className={styles.gradientText}>Sohan Kumar Shah</h1>
        </div>
        <p className={styles.roleIntro}>
          I&apos;m <span ref={typedRef} className={styles.typedText} />
        </p>
      </div>
      <div className={styles.particles} aria-hidden="true" />
    </section>
  );
}