"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './BoutiqueLocations.module.css';
import { BOUTIQUE_STORES } from '@/data/boutique';

export default function BoutiqueLocationsPage() {
  const [activeStoreIdx, setActiveStoreIdx] = useState<number>(0);
  const currentStore = BOUTIQUE_STORES[activeStoreIdx];

  return (
    <main className={styles.canvasRoom}>
      
      {/* Editorial Navigation Backdoor Link */}
      <div className={styles.navigationHeader}>
        <Link href="/" className={styles.backToAtelierLink}>
          <span className={styles.backArrow}>←</span> Return to Collective Directory
        </Link>
      </div>

      <div className={styles.horizonSplitLayout}>
        
        {/* LEFT COMPONENT COLUMN: Dynamic Flagship Showcase Filmframe */}
        <div className={styles.visualShowcaseColumn}>
          <div className={styles.imageFilmstripContainer}>
            {BOUTIQUE_STORES.map((store, idx) => (
              <div 
                key={store.id} 
                className={`${styles.imageSlideNode} ${activeStoreIdx === idx ? styles.slideNodeActive : ''}`}
              >
                <img 
                  src={store.imageSrc} 
                  alt={store.quarter} 
                  className={styles.flagshipImage}
                />
                <div className={styles.lightMistOverlay} />
              </div>
            ))}
          </div>

          {/* Technical Luxury Coordinate HUD Info Banner */}
          <div className={styles.hudCoordinateBanner}>
            <div className={styles.blinkingBeaconNode} />
            <span className={styles.hudCoordinates}>{currentStore.coordinates}</span>
          </div>
        </div>

        {/* RIGHT COMPONENT COLUMN: Elegant Selection Interface Card Deck */}
        <div className={styles.directoryControlColumn}>
          <div className={styles.textHeaderBlock}>
            <span className={styles.editorialBadge}>Global Flagships</span>
            <h1 className={styles.mainTitle}>Physical Sanctuaries</h1>
            <p className={styles.introParagraph}>
              Immersive, quiet spaces designed by architectural masters to frame light, structure, and high luxury.
            </p>
          </div>

          <div className={styles.storeCardDeck}>
            {BOUTIQUE_STORES.map((store, idx) => {
              const isSelected = activeStoreIdx === idx;

              return (
                <div
                  key={store.id}
                  className={`${styles.storeDeckCard} ${isSelected ? styles.cardActiveState : ''}`}
                  onClick={() => setActiveStoreIdx(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveStoreIdx(idx)}
                >
                  {/* Line Draw Asset Animation Traced on Active State */}
                  <div className={styles.fineGoldUnderlineTracer} />

                  <div className={styles.cardHeaderRow}>
                    <span className={styles.cityIdentity}>{store.city}</span>
                    <span className={styles.serialIndex}>// 0{idx + 1}</span>
                  </div>

                  <div className={styles.collapsibleDetailsDrawer}>
                    <h3 className={styles.quarterSubtitle}>{store.quarter}</h3>
                    <p className={styles.detailLine}>{store.address}</p>
                    <p className={styles.detailLine}>{store.hours}</p>
                    <p className={styles.detailLinePhone}>{store.phone}</p>

                    <button 
                      className={styles.appointmentActionBtn}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents layout pop interference
                        alert(`Opening booking panel for the ${store.quarter}...`);
                      }}
                    >
                      Secure Private Showroom View <span className={styles.btnArrow}>→</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </main>
  );
}