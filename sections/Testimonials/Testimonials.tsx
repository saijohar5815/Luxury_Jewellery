"use client";

import React, { useState } from 'react';
import styles from './Testimonials.module.css';
import { TESTIMONIALS } from '@/data/testimonials';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Editorial Section Header matching layout image_797454.jpg */}
        <div className={styles.sectionHeader}>
          <span className={styles.goldSubtitle}>Verified Provénance</span>
          <h2 className={styles.mainTitle}>The Collector Chronicles</h2>
        </div>

        <div className={styles.ledgerGrid}>
          
          {/* LEFT COLUMN: The Cinematic Macro Reel Canvas */}
          <div className={styles.galleryViewport}>
            
            {/* Fine Geometric Border Corner Accents */}
            <div className={`${styles.cornerMark} ${styles.topLeft}`} />
            <div className={`${styles.cornerMark} ${styles.bottomRight}`} />
            
            {/* Smooth sliding window frame for high-end photography */}
            <div className={styles.imageFilmstripWindow}>
              <div 
                className={styles.imageFilmstripContainer}
                style={{ transform: `translate3d(-${activeIndex * 100}%, 0, 0)` }}
              >
                {TESTIMONIALS.map((item) => (
                  <div key={item.id} className={styles.imageSlide}>
                    <img 
                      src={item.displayImage} 
                      alt={item.commissionedPiece} 
                      className={styles.macroPhoto}
                    />
                    {/* Soft, luxury ambient vignette over the photo */}
                    <div className={styles.photoVignette} />
                  </div>
                ))}
              </div>
            </div>

            {/* Clean Archival Metadata Footer */}
            <div className={styles.canvasFootnote}>
              <span className={styles.pulsingDot} />
              <p className={styles.footnoteText}>
                Visual Record // {TESTIMONIALS[activeIndex].archiveId}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Typography Stack */}
          <div className={styles.narrativeColumn}>
            <div className={styles.textMaskSlot}>
              <div 
                className={styles.slidingTextFilmstrip}
                style={{ transform: `translate3d(0, -${activeIndex * 100}%, 0)` }}
              >
                {TESTIMONIALS.map((item) => (
                  <div key={item.id} className={styles.narrativeSlide}>
                    <p className={styles.quoteParagraph}>“{item.quoteCapsule}”</p>
                    
                    <div className={styles.provenanceTag}>
                      <span className={styles.label}>Commission Masterpiece</span>
                      <span className={styles.value}>
                        {item.commissionedPiece} — <span className={styles.goldHighlight}>{item.caratIndex}</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Asymmetric Selector Deck matching your image reference perfectly */}
            <div className={styles.controlsFooter}>
              <div className={styles.collectorIndexStack}>
                {TESTIMONIALS.map((item, idx) => (
                  <button
                    key={item.id}
                    className={`${styles.collectorSelectorBtn} ${activeIndex === idx ? styles.btnActive : ''}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <span className={styles.selectorIndicatorLine} />
                    <div className={styles.collectorMetaText}>
                      <h4 className={styles.btnName}>{item.collector}</h4>
                      <span className={styles.btnSub}>{item.status} • {item.location}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;