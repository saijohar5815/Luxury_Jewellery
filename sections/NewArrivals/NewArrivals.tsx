"use client";

import React, { useState } from 'react';
import styles from './NewArrivals.module.css';

// Clean data layer integrations
import { NEW_ARRIVALS, NewArrivalItem } from '@/data/newarrivals'; 

export const NewArrivals: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedPiece, setSelectedPiece] = useState<NewArrivalItem | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left - 80, 
      y: e.clientY - rect.top - 40
    });
  };

  return (
    <>
      <section className={`${styles.wrapper} ${selectedPiece ? styles.backgroundBlurred : ''}`}>
        <div className={styles.container}>
          
          <div className={styles.header}>
            <div className={styles.pulseBadge}>
              <span className={styles.pulseRing} />
              <span className={styles.badgeText}>Live From The Atelier</span>
            </div>
            <h2 className={styles.title}>The New Horizons</h2>
            <p className={styles.subtitle}>
              Explore our latest rare, newly polished masterpiece arrivals fresh from design conceptualization.
            </p>
          </div>

          <div className={styles.asymmetricGrid}>
            {NEW_ARRIVALS.map((item, index) => (
              <div 
                key={item.id} 
                className={`${styles.cardFrame} ${styles[`position_${index}`]}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onMouseMove={handleMouseMove}
              >
                <div className={styles.imageCanvas}>
                  <span className={styles.tagLabel}>{item.tag}</span>
                  
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className={`${styles.baseImage} ${hoveredIndex === index ? styles.imageOut : ''}`}
                  />
                  <img 
                    src={item.hoverImage} 
                    alt={`${item.name} detailed view`} 
                    className={`${styles.revealImage} ${hoveredIndex === index ? styles.imageIn : ''}`}
                  />

                  {hoveredIndex === index && (
                    <div 
                      className={styles.fluidPointerRibbon}
                      style={{ transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)` }}
                    >
                      <span className={styles.ribbonSku}>{item.id}</span>
                      <span className={styles.ribbonNote}>{item.atelierNote}</span>
                    </div>
                  )}
                </div>

                <div className={styles.cardDetails}>
                  <span className={styles.seriesLine}>{item.series}</span>
                  <h3 className={styles.pieceName}>{item.name}</h3>
                  <div className={styles.metaRow}>
                    <span className={styles.piecePrice}>{item.price}</span>
                    <button 
                      className={styles.acquireBtn}
                      onClick={() => setSelectedPiece(item)}
                    >
                      Acquire Piece 
                      <svg className={styles.arrowIcon} width="16" height="12" viewBox="0 0 16 12" fill="none">
                        <path d="M10 1L15 6M15 6L10 11M15 6H1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- Interactive Acquisition Overlay Box --- */}
      {selectedPiece && (
        <div className={styles.modalOverlay} onClick={() => setSelectedPiece(null)}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalSplit}>
              <div className={styles.modalImageFrame}>
                <img src={selectedPiece.image} alt={selectedPiece.name} className={styles.modalImg} />
              </div>

              <div className={styles.modalContentFrame}>
                <span className={styles.modalTag}>{selectedPiece.series}</span>
                <h2 className={styles.modalTitle}>{selectedPiece.name}</h2>
                <div className={styles.modalPrice}>{selectedPiece.price}</div>
                
                <div className={styles.dividerLine} />

                <div className={styles.specLedger}>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Reference Index</span>
                    <span className={styles.specValue}>{selectedPiece.id}</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Gemstone Carats</span>
                    <span className={styles.specValue}>{selectedPiece.caratWeight}</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Matrix Composition</span>
                    <span className={styles.specValue}>{selectedPiece.metalPurity}</span>
                  </div>
                  <div className={styles.specItem}>
                    <span className={styles.specLabel}>Provenancé Origin</span>
                    <span className={styles.specValue}>{selectedPiece.origin}</span>
                  </div>
                </div>

                <p className={styles.modalNarrative}>{selectedPiece.atelierNote}</p>

                <div className={styles.actionRow}>
                  <button className={styles.contactConciergeBtn}>
                    Initiate Private Acquisition
                  </button>
                  <button 
                    className={styles.closeModalBtn}
                    onClick={() => setSelectedPiece(null)}
                  >
                    ← Return to New Arrivals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewArrivals;