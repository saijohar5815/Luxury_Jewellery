"use client";

import React, { useState } from 'react';
import styles from './InstagramGallery.module.css';
import { INSTAGRAM_POSTS } from '@/data/instagram';

export const InstagramGallery: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Editorial Top Section Header */}
        <div className={styles.headerBlock}>
          <div className={styles.titleMeta}>
            <span className={styles.accentBadge}>Live Curation</span>
            <h2 className={styles.sectionTitle}>The Digital Salon</h2>
          </div>
          <p className={styles.editorialDesc}>
            A real-time visual journal documenting the intersection of raw gemstone architecture and refined lifestyle narratives.
          </p>
        </div>

        {/* Asymmetric Interactive Grid Deck */}
        <div className={styles.kineticDeck}>
          {INSTAGRAM_POSTS.map((post) => {
            const isAnyHovered = hoveredId !== null;
            const isThisHovered = hoveredId === post.id;

            return (
              <a 
                href={post.permalink}
                key={post.id}
                className={`${styles.deckCard} ${
                  isAnyHovered ? (isThisHovered ? styles.cardExpanded : styles.cardCompressed) : ''
                }`}
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                
                {/* Visual Window Canvas */}
                <div className={styles.mediaWindow}>
                  <img 
                    src={post.imageSrc} 
                    alt={post.captionExcerpt} 
                    className={styles.postImage} 
                  />
                  
                  {/* Luxury Diamond-Facet Prism Reflective Overlay */}
                  <div className={styles.prismOverlay} />
                  
                  {/* Premium Hover Card Content */}
                  <div className={styles.hoverMetaSlate}>
                    <div className={styles.metaTop}>
                      <span className={styles.categoryLabel}>{post.category}</span>
                      <div className={styles.likeMetric}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        <span>{post.likes}</span>
                      </div>
                    </div>
                    
                    <p className={styles.captionSnippet}>{post.captionExcerpt}</p>
                    
                    <span className={styles.viewAction}>
                      View Original Masterpiece 
                      <span className={styles.arrowIcon}> →</span>
                    </span>
                  </div>
                </div>

                {/* Always-visible minimalist base labels matching image layouts */}
                <div className={styles.cardBaseLabel}>
                  <span className={styles.serialNo}>// {post.id.toUpperCase()}</span>
                  <span className={styles.baseCategory}>{post.category}</span>
                </div>

              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default InstagramGallery;