"use client";

import React from 'react';
import styles from './Craftsmanship.module.css';

export const Craftsmanship: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* Left Side: Overlapping Heritage Imagery Layers */}
          <div className={styles.visualColumn}>
            <div className={styles.mainImageFrame}>
              <img 
                src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800" 
                alt="Master Artisan Crafting Jewellery" 
                className={styles.image}
              />
            </div>
            <div className={styles.secondaryImageFrame}>
              <img 
                src="https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=600" 
                alt="Raw Diamond Selection Process" 
                className={styles.image}
              />
            </div>
            {/* Elegant Background Grid Accent */}
            <div className={styles.geometryBackdrop} />
          </div>

          {/* Right Side: Editorial Narrative & Values */}
          <div className={styles.contentColumn}>
            <div className={styles.narrativeBox}>
              <span className={styles.goldSubtitle}>The Maison Legacy</span>
              <h2 className={styles.mainTitle}>Crafted To Last Generations</h2>
              <div className={styles.lineDivider} />
              
              <p className={styles.leadText}>
                Since our founding, the House has operated under a single, uncompromising mandate: to transmute the Earth’s rarest geological treasures into wearable fine art.
              </p>
              
              <p className={styles.bodyText}>
                Every piece that leaves our private atelier is the culmination of hundreds of hours of micro-precision handiwork. Our master smiths combine generational setting techniques with avant-garde architectural structuralism, ensuring each gem catches light in its absolute purist form.
              </p>

              {/* Luxury Brand Metrics */}
              <div className={styles.metricsGrid}>
                <div className={styles.metricItem}>
                  <span className={styles.metricNumber}>100%</span>
                  <span className={styles.metricLabel}>Conflict-Free Sourcing</span>
                </div>
                <div className={styles.metricItem}>
                  <span className={styles.metricNumber}>25+</span>
                  <span className={styles.metricLabel}>Years of Master Artistry</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;