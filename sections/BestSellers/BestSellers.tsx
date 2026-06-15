"use client";

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import styles from './BestSellers.module.css';

// Clean data layer integrations
import { BEST_SELLERS } from '@/data/bestSellers';

export const BestSellers: React.FC = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scrolling to dynamically adjust the minimalist tracking bar position
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    
    const maxScroll = track.scrollWidth - track.clientWidth;
    if (maxScroll <= 0) return;
    
    const progress = (track.scrollLeft / maxScroll) * 100;
    setScrollProgress(progress);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Section Header */}
        <div className={styles.header}>
          <div>
            <span className={styles.preTitle}>The House Standards</span>
            <h2 className={styles.title}>Most Coveted Creations</h2>
          </div>
          <span className={styles.swipeHint}>Drag or Swipe to View</span>
        </div>

        {/* Horizontal Scroll Track Container */}
        <div 
          ref={trackRef} 
          className={styles.scrollTrack} 
          onScroll={handleScroll}
        >
          {BEST_SELLERS.map((product) => (
            <div key={product.id} className={styles.card}>
              <Link href={product.link} className={styles.clickableArea}>
                
                {/* Dual-Image Interactive Container */}
                <div className={styles.mediaContainer}>
                  <span className={styles.tagLabel}>{product.tag}</span>
                  <img 
                    src={product.imageMain} 
                    alt={product.title} 
                    className={styles.imageMain}
                    loading="lazy"
                  />
                  <img 
                    src={product.imageHover} 
                    alt={`${product.title} Alternate`} 
                    className={styles.imageHover}
                    loading="lazy"
                  />
                  <div className={styles.bagOverlay}>
                    <span>Quick View</span>
                  </div>
                </div>

                {/* Meta details block */}
                <div className={styles.details}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <p className={styles.productPrice}>{product.price}</p>
                </div>

              </Link>
            </div>
          ))}
        </div>

        {/* Minimalist Progress Timeline Element */}
        <div className={styles.timelineTrack}>
          <div 
            className={styles.timelineBar} 
            style={{ 
              width: `${Math.max(15, scrollProgress)}%`, 
              left: `${scrollProgress - (scrollProgress * 0.15)}%` 
            }} 
          />
        </div>

      </div>
    </section>
  );
};

export default BestSellers;