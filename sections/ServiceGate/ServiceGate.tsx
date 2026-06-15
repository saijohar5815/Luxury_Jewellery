"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './ServiceGate.module.css';
import { SERVICES_DATA } from '@/data/services';

export const ServiceGate: React.FC = () => {
  const router = useRouter();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos({ x, y });
  };

  // 🌟 HARD-CODED ROUTE GUARD INTERCEPTOR
  const handleNavigation = (path: string, itemId: string) => {
    // If the path coming from data is an empty string, missing, or still a hash sign (#)
    if (!path || path === '#') {
      switch (itemId) {
        case 'srv-01':
          router.push('/boutique/locations');
          break;
        case 'srv-02':
          router.push('/concierge/reserve');
          break;
        case 'srv-03':
          router.push('/concierge/consult');
          break;
        case 'srv-04':
          router.push('/vault/digigold');
          break;
        case 'srv-05':
          router.push('/journal/t-shirts-and-cuts');
          break;
        case 'srv-06':
          router.push('/education/guide');
          break;
        default:
          router.push('/');
      }
      return;
    }

    // Default behavior if data paths are loading normally
    router.push(path);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Brand Editorial Top Header Area */}
        <div className={styles.headerBlock}>
          <span className={styles.accentBadge}>Strategic Portals</span>
          <h2 className={styles.sectionTitle}>The Collective Directory</h2>
        </div>

        {/* Asymmetric Interlocking Structural Layout */}
        <div className={styles.louvreGrid}>
          {SERVICES_DATA.map((item, index) => {
            const isAnyHovered = hoveredId !== null;
            const isThisHovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                className={`${styles.gateCard} ${styles[`positionIndex${index}`]} ${
                  isAnyHovered ? (isThisHovered ? styles.activeCard : styles.dimmedCard) : ''
                }`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseMove={isThisHovered ? handleMouseMove : undefined}
                onMouseLeave={() => {
                  setHoveredId(null);
                  setMousePos({ x: 0, y: 0 });
                }}
                /* 🌟 PASSING BOTH routePath AND id TO THE INTERCEPTOR GUARD */
                onClick={() => handleNavigation(item.routePath, item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleNavigation(item.routePath, item.id)}
              >
                {/* Image Lens Frame Box */}
                <div className={styles.mediaFrame}>
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className={styles.cardImage}
                    style={{
                      transform: isThisHovered 
                        ? `scale(1.10) translate3d(${-mousePos.x}px, ${-mousePos.y}px, 0)` 
                        : 'scale(1.02) translate3d(0, 0, 0)'
                    }}
                  />
                  {/* Subtle editorial film haze grade */}
                  <div className={styles.matteOvercast} />
                  
                  {/* Liquid Shutter Frame Animation Effect */}
                  <div className={styles.shutterBoxBorder} />
                </div>

                {/* Typography Descriptive Module */}
                <div className={styles.textStack}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <div className={styles.arrowContainer}>
                      <span className={styles.arrowIcon}>→</span>
                    </div>
                  </div>
                  <p className={styles.cardSubtitle}>{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServiceGate;