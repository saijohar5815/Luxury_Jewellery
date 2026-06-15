"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './FeaturedCategories.module.css';

// 🔄 Fixed Path: Swapped out '@/data/collections' for '@/data/categories'
import { CATEGORIES } from '@/data/featureCollections';

export const FeaturedCategories: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; 
  }

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Editorial Section Header */}
        <div className={styles.header}>
          <span className={styles.preTitle}>Curated Curation</span>
          <h2 className={styles.title}>Shop By Category</h2>
          <div className={styles.divider} />
        </div>

        {/* Interactive Category Grid Architecture */}
        <div className={styles.grid}>
          {CATEGORIES.map((category) => (
            <Link 
              href={category.link} 
              key={category.id} 
              className={styles.card}
            >
              {/* Image Canvas Container */}
              <div className={styles.imageWrapper}>
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.imageOverlay} />
              </div>

              {/* Elegant Content Frame */}
              <div className={styles.content}>
                <span className={styles.itemCount}>{category.count}</span>
                <h3 className={styles.cardTitle}>{category.title}</h3>
                <span className={styles.ctaText}>
                  Explore Collection <span className={styles.arrow}>→</span>
                </span>
              </div>
              
              <div className={styles.borderAccent} />
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCategories;