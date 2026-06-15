"use client";

import React, { useState } from 'react';
import styles from './OccasionCurator.module.css';
import { OCCASIONS, OccasionCapsule } from '@/data/occasion';

export const OccasionCurator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<OccasionCapsule>(OCCASIONS[0]);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const handleTabSwitch = (capsule: OccasionCapsule) => {
    if (capsule.id === activeTab.id) return;
    setIsTransitioning(true);
    // Smooth cinematic clip-path synchronization delay timing
    setTimeout(() => {
      setActiveTab(capsule);
      setIsTransitioning(false);
    }, 350);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Balanced Architectural Grid Split */}
        <div className={styles.curatorGrid}>
          
          {/* LEFT PANEL: Typographic Narrative Timeline */}
          <div className={styles.editorialColumn}>
            <div className={styles.stickyHeader}>
              <span className={styles.preTitle}>The Styling Atelier</span>
              <h2 className={styles.mainTitle}>Curated For The Occasion</h2>
              <p className={styles.sectionDesc}>
                Select an elite social atmosphere to view custom high-jewelry wardrobe pairings curated by our master showroom stylists.
              </p>
            </div>

            {/* Occasion Option Buttons Stack */}
            <div className={styles.tabsStack}>
              {OCCASIONS.map((occ, idx) => (
                <button
                  key={occ.id}
                  className={`${styles.tabItem} ${activeTab.id === occ.id ? styles.tabActive : ''}`}
                  onMouseEnter={() => handleTabSwitch(occ)}
                  onClick={() => handleTabSwitch(occ)}
                >
                  <span className={styles.tabIndex}>0{idx + 1}</span>
                  <div className={styles.tabHeadingBlock}>
                    <h3 className={styles.tabTitle}>{occ.title}</h3>
                    <span className={styles.tabTagline}>{occ.tagline}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL: Fluid Image Viewport & Floating Product projections */}
          <div className={styles.canvasColumn}>
            <div className={`${styles.viewportFrame} ${isTransitioning ? styles.viewportFadeOut : ''}`}>
              
              {/* Contextual Asymmetric Background Scene Mask */}
              <div className={styles.sceneryMask}>
                <img 
                  src={activeTab.bgImage} 
                  alt={activeTab.title} 
                  className={styles.sceneryImage} 
                />
                <div className={styles.sceneryOverlay} />
              </div>

              {/* Floating Haute Jewelry Presentation Display Box */}
              <div className={styles.floatingShowcaseCard}>
                <div className={styles.productCanvas}>
                  <img 
                    src={activeTab.featuredPieceImage} 
                    alt={activeTab.pieceName} 
                    className={styles.productImg} 
                  />
                  <div className={styles.productOverlayEffect} />
                </div>

                <div className={styles.productDetailsDrawer}>
                  <span className={styles.productTag}>Recommended Ensemble Piece</span>
                  <h4 className={styles.productName}>{activeTab.pieceName}</h4>
                  <div className={styles.productPriceRow}>
                    <span className={styles.priceTag}>{activeTab.piecePrice}</span>
                    <span className={styles.bulletGap}>•</span>
                    <span className={styles.noteText}>{activeTab.curatorNote}</span>
                  </div>
                </div>
              </div>

              {/* Underlying Narrative Typography Sheet */}
              <div className={styles.floatingTextPanel}>
                <span className={styles.subTitleLine}>{activeTab.subtitle}</span>
                <p className={styles.longDescLine}>{activeTab.description}</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default OccasionCurator;