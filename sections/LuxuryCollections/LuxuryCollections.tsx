"use client";

import React, { useState } from 'react';
import Link from 'next/link'; // Replaced native anchors with Next.js optimized routing links
import styles from './LuxuryCollections.module.css';

// Clean data layer integrations
import { COLLECTIONS } from '@/data/luxuryCollections';

export const LuxuryCollections: React.FC = () => {

  const [activeFeature, setActiveFeature] = useState<string | null>(null);



  return (

    <section className={styles.wrapper}>

      {/* Structural Master Layout Container */}

      <div className={styles.container}>

       

        {/* Dynamic Section Header */}

        <div className={styles.sectionHeader}>

          <div className={styles.titleLead}>

            <span className={styles.goldSubtitle}>Signature Editions</span>

            <h2 className={styles.mainTitle}>The Flagship Collections</h2>

          </div>

          <div className={styles.headerLine} />

        </div>



        {/* Collections Stack */}

        <div className={styles.collectionStack}>

          {COLLECTIONS.map((col, index) => {

            const isEven = index % 2 === 0;



            return (

              <div

                key={col.id}

                className={`${styles.collectionRow} ${isEven ? '' : styles.reverseRow}`}

              >

                {/* Visual Imagery Canvas - Now expanded to cover 8 columns for zero empty dead space */}

                <div className={styles.visualColumn}>

                  <div className={styles.imageRevealContainer}>

                    <img

                      src={col.image}

                      alt={col.name}

                      className={styles.collectionImage}

                      loading="lazy"

                    />

                    <div className={styles.imageAmbientGlow} />

                  </div>

                  <span className={styles.floatingYear}>{col.year}</span>

                </div>



                {/* Editorial Details Column - Styled as an integrated asymmetric premium panel */}

                <div className={styles.infoColumn}>

                  <div className={styles.editorialPanelInside}>

                    <span className={styles.tagline}>{col.tagline}</span>

                    <h3 className={styles.collectionName}>{col.name}</h3>

                    <p className={styles.description}>{col.description}</p>

                   

                    {/* Interactive Highlights List to physically fill and bridge the space layout */}

                    <div className={styles.interactiveShowcase}>

                      <span className={styles.showcaseHeader}>Collection Features</span>

                      <ul className={styles.featureList}>

                        {col.highlights.map((item, idx) => (

                          <li

                            key={idx}

                            className={`${styles.featureItem} ${activeFeature === `${col.id}-${idx}` ? styles.featureActive : ''}`}

                            onMouseEnter={() => setActiveFeature(`${col.id}-${idx}`)}

                            onMouseLeave={() => setActiveFeature(null)}

                          >

                            <span className={styles.bulletDot}>✦</span>

                            {item}

                          </li>

                        ))}

                      </ul>

                    </div>



                    <a href={col.link} className={styles.editorialCta}>

                      <span className={styles.ctaTextLine}>Explore the Universe</span>

                      <span className={styles.ctaArrow}>⟶</span>

                    </a>

                  </div>

                </div>



              </div>

            );

          })}

        </div>



      </div>

    </section>

  );

};