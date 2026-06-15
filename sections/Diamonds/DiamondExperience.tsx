"use client";

import React, { useState, useRef } from 'react';
import styles from './DiamondExperience.module.css';
import {CATEGORIES,BEST_SELLERS,SHAPES,SHAPE_PRODUCTS} from '@/data/diamond';
export default function DiscoverCollection() {
  const [activeShape, setActiveShape] = useState('round');
  const [guideStep, setGuideStep] = useState(1);
  const [wishlisted, setWishlisted] = useState<Record<string, boolean>>({});

  const toggleWishlist = (id: string) => {
    setWishlisted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className={styles.luxuryCanvas}>
      
      {/* SECTION 1: DISCOVER DIAMOND COLLECTIONS (IMMEDIATE CLARITY) */}
      <section className={styles.categorySection}>
        <div className={styles.centeredHeader}>
          <span className={styles.goldPreTitle}>THE AUTUMN PORTFOLIO</span>
          <h1 className={styles.mainTitle}>DISCOVER DIAMOND COLLECTIONS</h1>
          <p className={styles.subTitle}>Crafted for every milestone, calibrated for every unique story.</p>
        </div>

        <div className={styles.categoryGrid}>
          {CATEGORIES.map((cat, i) => (
            <div key={i} className={styles.categoryCard}>
              <div className={styles.categoryVisualStage}>
                <div className={styles.categoryIconGraphic}>{cat.icon}</div>
                <div className={styles.abstractFineGridOverlay} />
              </div>
              <div className={styles.categoryContentBlock}>
                <h3>{cat.title}</h3>
                <p>{cat.subtitle}</p>
                <span className={styles.editorialActionLink}>Explore Structural Lineage →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 2: MOST LOVED DIAMONDS (BEST SELLERS WITH HIGH-END HOVERS) */}
      <section className={styles.bestSellersSection}>
        <div className={styles.centeredHeader}>
          <span className={styles.goldPreTitle}>HOUSE FAVORITES</span>
          <h2 className={styles.sectionTitle}>Most Loved Diamonds</h2>
        </div>

        <div className={styles.bestSellersGrid}>
          {BEST_SELLERS.map((product) => (
            <div key={product.id} className={styles.productPremiumCard}>
              <div className={styles.productVisualStage}>
                <button 
                  className={`${styles.wishlistAnchor} ${wishlisted[product.id] ? styles.wishlistActive : ''}`}
                  onClick={() => toggleWishlist(product.id)}
                  aria-label="Toggle structural wishlist allocation"
                >
                  {wishlisted[product.id] ? '♥' : '♡'}
                </button>
                <div className={styles.simulatedProductReflection} />
                <div className={styles.quickViewActionBanner}>REQUEST MICROSCOPIC VIEW</div>
              </div>
              <div className={styles.productMetaInfo}>
                <div className={styles.starRatingRow}>{'★'.repeat(product.rating)}</div>
                <h4 className={styles.productNameHeading}>{product.name}</h4>
                <div className={styles.goldHorizontalRule} />
                <p className={styles.productPriceString}>{product.price}</p>
                <button className={styles.viewDetailsLuxuryButton}>VIEW DESIGN DETAILS</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: SHOP BY SHAPE (DYNAMIC ACTIVE DATA FILTERING) */}
      <section className={styles.shapeSection}>
        <div className={styles.centeredHeader}>
          <span className={styles.goldPreTitle}>GEOMETRIC CALIBRATION</span>
          <h2 className={styles.sectionTitle}>Shop By Shape Architecture</h2>
        </div>

        <div className={styles.shapeSelectorStrip}>
          {SHAPES.map((shape) => (
            <button
              key={shape.id}
              className={`${styles.shapeSelectionTab} ${activeShape === shape.id ? styles.activeShapeTab : ''}`}
              onClick={() => setActiveShape(shape.id)}
            >
              <span className={styles.shapeGlyphBox}>{shape.glyph}</span>
              <span className={styles.shapeTabTextLabel}>{shape.id}</span>
            </button>
          ))}
        </div>

        <div className={styles.shapeDynamicOutputArea}>
          {SHAPE_PRODUCTS[activeShape]?.map((prod) => (
            <div key={prod.id} className={styles.shapeShowcaseContainer}>
              <div className={styles.shapeBlueprintLeft}>
                <div className={styles.geometricBlueprintMatrixLine} />
                <span className={styles.blueprintTechnicalTag}>FACET DESIGN MODEL // {prod.shape.toUpperCase()}</span>
              </div>
              <div className={styles.shapeDetailsRight}>
                <span className={styles.goldPreTitle}>SELECTED MATRIX CONFIGURATION</span>
                <h3>{prod.name}</h3>
                <p className={styles.shapeEditorialParagraph}>
                  Meticulously optimized to amplify internal fire metrics. Our signature {prod.shape} geometry re-calculates refractive indexing values to guarantee structural visibility even under low ambient candlelight atmospheres.
                </p>
                <div className={styles.shapePricingRow}>
                  <span className={styles.shapePrice}>{prod.price}</span>
                  <button className={styles.acquireAllocationButton}>SECURE THIS GEM CUT</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE OUR DIAMONDS (LUXURY HOVER VALUE PROPS) */}
      <section className={styles.valueSection}>
        <div className={styles.centeredHeader}>
          <span className={styles.goldPreTitle}>THE HOUSE SAFEGUARDS</span>
          <h2 className={styles.sectionTitle}>Why Discerning Collectors Choose Us</h2>
        </div>

        <div className={styles.valuePropMatrixGrid}>
          {[
            { title: 'Ethically Certified GIA', desc: 'Every single stone undergoes direct screening via the strict Kimberley non-conflict compliance processes.', icon: '🛡️' },
            { title: 'Lifetime Exchange Guard', desc: 'Secure asset growth over time. Lock in guaranteed raw material conversion validation variables.', icon: '🔄' },
            { title: 'Insured Armored Shipping', desc: 'Direct, hand-to-hand transit deployment managed completely via high-security partner courier networks.', icon: '📦' },
            { title: 'BIS Hallmarked Purity', desc: 'Micro-engraved structural asset validation codes verifying precisely calibrated precious metal alloys.', icon: '🏆' },
            { title: 'Micro-Magnified Handcrafting', desc: 'Stones mounted manually under 40x micro-magnification by third-generation house master setters.', icon: '✍️' },
            { title: 'Encrypted Private Settlement', desc: 'Your operational data stays confidential via banking grade transaction safeguards.', icon: '🔒' },
          ].map((item, i) => (
            <div key={i} className={styles.valueLuxuryCard}>
              <div className={styles.valueIconCircle}>{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: COMPLETE YOUR LOOK (INTEGRATED CURATION) */}
      <section className={styles.lookSection}>
        <div className={styles.centeredHeader}>
          <span className={styles.goldPreTitle}>SARTORIAL HARMONY</span>
          <h2 className={styles.sectionTitle}>Complete Your Presence</h2>
        </div>

        <div className={styles.lookLayoutDashboard}>
          <div className={styles.lookStagingCanvas}>
            <div className={styles.simulatedModelSilhouette}>
              <div className={`${styles.canvasHotspotPointer} ${styles.posNecklace}`}>✦</div>
              <div className={`${styles.canvasHotspotPointer} ${styles.posEarrings}`}>✦</div>
              <div className={`${styles.canvasHotspotPointer} ${styles.posRing}`}>✦</div>
            </div>
          </div>
          <div className={styles.lookManifestListingSide}>
            <div className={styles.lookManifestHeader}>
              <h3>The Imperial Suite Curation</h3>
              <p>Harmonized structural components assembled to protect aesthetic calibration.</p>
            </div>
            <div className={styles.lookComponentItemRow}>
              <span className={styles.lookItemIndexNumber}>01</span>
              <div>
                <h4>Imperial Cushion Drop Necklace</h4>
                <p className={styles.goldPriceText}>₹3,40,000</p>
              </div>
            </div>
            <div className={styles.lookComponentItemRow}>
              <span className={styles.lookItemIndexNumber}>02</span>
              <div>
                <h4>Sovereign Diamond Accented Studs</h4>
                <p className={styles.goldPriceText}>₹1,20,000</p>
              </div>
            </div>
            <div className={styles.lookComponentItemRow}>
              <span className={styles.lookItemIndexNumber}>03</span>
              <div>
                <h4>Matching Micro-Pave Interlocking Ring</h4>
                <p className={styles.goldPriceText}>₹95,000</p>
              </div>
            </div>
            <button className={styles.acquireFullLookSatinButton}>ACQUIRE ENTIRE ENSEMBLE SUITE</button>
          </div>
        </div>
      </section>

      {/* SECTION 6: TRENDING COLLECTIONS (MASSIVE HIGH-CONTRAST CHANNELS) */}
      <section className={styles.trendingSection}>
        <div className={styles.centeredHeader}>
          <span className={styles.goldPreTitle}>CURATED MOOD BOARDS</span>
          <h2 className={styles.sectionTitle}>Trending Collections Lineage</h2>
        </div>

        <div className={styles.trendingMassiveGrid}>
          {[
            { title: 'The Pure Solitaire Tier', label: 'Unrivaled Singular Architecture' },
            { title: 'The Royal Halo Array', label: 'Concentric Light Amplification' },
            { title: 'The Modernist Minimalist Line', label: 'Clean Asymmetrical Contours' },
          ].map((trend, idx) => (
            <div key={idx} className={styles.massiveTrendBillboardCard}>
              <div className={styles.massiveTrendVisualCanvas}>
                <div className={styles.trendCanvasGraphicAbstractLine} />
                <div className={styles.trendCanvasCardIndexIndicator}>PORTFOLIO AXIS // 0{idx + 1}</div>
              </div>
              <div className={styles.massiveTrendFooterDetails}>
                <h3>{trend.title}</h3>
                <p>{trend.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: REAL TIME CUSTOMER HOUSE REVIEWS */}
      <section className={styles.reviewsSection}>
        <div className={styles.centeredHeader}>
          <span className={styles.goldPreTitle}>VERIFIED HOUSE LEDGER</span>
          <h2 className={styles.sectionTitle}>Collector Testimonials</h2>
        </div>

        <div className={styles.reviewsCarouselTrack}>
          {[
            { text: "The physical refractive performance exceeded all gemological projections. An immaculate transaction lifecycle.", author: "Ananya K. — Mumbai Registry" },
            { text: "Finding an engagement asset with such perfectly symmetric internal pavilion execution parameters is rare.", author: "Rahul M. — Delhi Commission" },
            { text: "Elegant, timeless, and packaged within a highly secure verification logistics workflow. Absolute class.", author: "Meera R. — Bangalore Lineage" },
          ].map((rev, i) => (
            <div key={i} className={styles.testimonialLuxuryCard}>
              <div className={styles.starRatingRow}>★★★★★</div>
              <blockquote className={styles.testimonialQuoteText}>"{rev.text}"</blockquote>
              <cite className={styles.testimonialAuthorString}>{rev.author}</cite>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: DIAMOND BUYING STRUCTURAL GUIDE ENGINE */}
      <section className={styles.guideSection}>
        <div className={styles.centeredHeader}>
          <span className={styles.goldPreTitle}>EDUCATIONAL SYSTEM</span>
          <h2 className={styles.sectionTitle}>The Diamond Selection Methodology</h2>
          <p className={styles.subTitle}>Demystifying high-end asset acquisition via four geometric checkpoints.</p>
        </div>

        <div className={styles.guideInteractiveFrameworkDashboard}>
          <div className={styles.guideNavigationSidebarTabs}>
            {[
              { step: 1, title: '01 // Select Base Geometry' },
              { step: 2, title: '02 // Evaluate Carat Volume' },
              { step: 3, title: '03 // Calibrate Precious Metal' },
              { step: 4, title: '04 // Cryptographic Finalization' },
            ].map((s) => (
              <button
                key={s.step}
                className={`${styles.guideSidebarTabButton} ${guideStep === s.step ? styles.activeGuideStepTab : ''}`}
                onClick={() => setGuideStep(s.step)}
              >
                {s.title}
              </button>
            ))}
          </div>

          <div className={styles.guideInformationalBodyContentWindow}>
            {guideStep === 1 && (
              <div className={styles.guideStepSlideAnimationWrapper}>
                <h3>Isolate Your Visual Contour Profile</h3>
                <p>Your choice of silhouette forms the foundation of light dispersion vectors. Round cuts yield maximum raw light reflection frequency metrics, while clean square Emerald steps favor crisp geometric internal depth visibility parameters.</p>
              </div>
            )}
            {guideStep === 2 && (
              <div className={styles.guideStepSlideAnimationWrapper}>
                <h3>Calibrate Carat Scale Metrics</h3>
                <p>Carat values dictate absolute material presence. Ensure weight projections are balanced alongside internal color grades (D-F color tiers are highly recommended to preserve unclouded value retention profiles over generations).</p>
              </div>
            )}
            {guideStep === 3 && (
              <div className={styles.guideStepSlideAnimationWrapper}>
                <h3>Select Precious Metal Architecture</h3>
                <p>Choose between 18 Karat Sovereign Yellow Gold or high-density Platinum. Platinum preservation preserves zero color bleeding onto colorless stones, while traditional yellow alloys introduce warmth.</p>
              </div>
            )}
            {guideStep === 4 && (
              <div className={styles.guideStepSlideAnimationWrapper}>
                <h3>Finalize Allocation Ledgers</h3>
                <p>Your gemstone configuration receives certified GIA laser microscopic inscriptions and is formally assigned into our permanent secure house provenance index files.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 9: ULTRA-PREMIUM PRIVATE CALL TO ACTION CONCIERGE */}
      <section className={styles.callToActionFinalSection}>
        <div className={styles.ctaGlassShieldBlunderBoundary}>
          <span className={styles.goldPreTitle}>EXPERIENCE THE VAULT</span>
          <h2>Ready to Secure Your Masterwork?</h2>
          <p>Arrange an end-to-end encrypted private video configuration analysis or secure physical verification inside our secure high-jewelry salon chambers.</p>
          <button className={styles.ctaMasterworkExecutionCallButton}>INITIATE CONCIERGE ASSIGNMENT</button>
        </div>
      </section>

    </div>
  );
}