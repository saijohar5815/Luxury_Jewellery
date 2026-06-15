"use client";

import React, { useState, useRef, useEffect } from 'react';
import styles from './GoldExperience.module.css';
import {CATEGORIES, TRENDING, OCCASIONS,PURITIES, FEATURED_PRODUCTS,TIMELINE, FAQS } from '@/data/gold';

export default function GoldExperience() {
  const productSliderRef = useRef<HTMLDivElement>(null);
  const testimonialSliderRef = useRef<HTMLDivElement>(null);
  const [activePurity, setActivePurity] = useState<number>(1);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [particles, setParticles] = useState<{ id: number; top: number; left: number; delay: number; duration: number }[]>([]);

  useEffect(() => {
    // Generate randomized particles for luxury ambient background shimmer
    const items = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 6 + Math.random() * 8
    }));
    setParticles(items);
  }, []);

  const handleScrollProducts = (dir: 'l' | 'r') => {
    if (productSliderRef.current) {
      const distance = dir === 'l' ? -380 : 380;
      productSliderRef.current.scrollBy({ left: distance, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.experienceWrapper}>
      {/* --- FLOATING DECORATIVE PARTICLES CONTAINER --- */}
      <div className={styles.particleCanvas} aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className={styles.glimmerParticle}
            style={{
              top: `${p.top}%`,
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`
            }}
          />
        ))}
      </div>

      {/* --- CINEMATIC HERO SECTION --- */}
      <section className={styles.heroSection}>
        <div className={styles.heroParallaxContainer}>
          <div className={styles.blackVignetteOverlay} />
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury Gold Editorial Frame"
            className={styles.heroParallaxMedia}
          />
        </div>
        <div className={styles.heroContentGrid}>
          <span className={styles.heroContextTag}>THE GOLD EDITION</span>
          <h1 className={styles.heroPrimaryTitle}>Crafted in Pure Elegance</h1>
          <div className={styles.goldGeometricDivider} />
          <p className={styles.heroBriefText}>Timeless Gold for Every Generation</p>
          <button className={styles.primaryGoldBtn}>
            <span className={styles.btnTextContent}>Explore Collection</span>
          </button>
        </div>
      </section>

      {/* --- SECTION 1: EDITORIAL CATEGORY TILES --- */}
      <section className={styles.sectionPadding}>
        <div className={styles.sectionHeaderCentered}>
          <h2 className={styles.serifSectionTitle}>Gold Collections</h2>
          <div className={styles.accentGoldLine} />
        </div>
        <div className={`${styles.contentContainer} ${styles.categoryGridSystem}`}>
          {CATEGORIES.map((cat, idx) => (
            <div key={idx} className={styles.editorialCategoryCard}>
              <div className={styles.categoryImageViewport}>
                <img src={cat.img} alt={cat.name} className={styles.categoryMediaObject} />
              </div>
              <div className={styles.categoryCardMetaDetails}>
                <h3 className={styles.categoryCardTitle}>{cat.name}</h3>
                <p className={styles.categoryCardBrief}>{cat.desc}</p>
                <span className={styles.categoryCardActionLink}>Explore <span>→</span></span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 2: MAGAZINE-STYLE COUTURE TRENDS --- */}
      <section className={`${styles.sectionPadding} ${styles.bgCreamAccent}`}>
        <div className={styles.contentContainer}>
          <div className={styles.sectionHeaderLeft}>
            <span className={styles.sectionLabelCaps}>SEASONAL EDITS</span>
            <h2 className={styles.serifSectionTitle}>Trending Gold Frameworks</h2>
          </div>
          <div className={styles.magazineLayoutTrack}>
            {TRENDING.map((trend, idx) => (
              <div key={idx} className={`${styles.magazineRowLayout} ${idx % 2 !== 0 ? styles.magazineRowReversed : ''}`}>
                <div className={styles.magazineMediaWrapper}>
                  <img src={trend.img} alt={trend.title} className={styles.magazineImageObject} />
                </div>
                <div className={styles.magazineTypographyBlock}>
                  <span className={styles.editorialContextBadge}>{trend.label}</span>
                  <h3 className={styles.magazineItemTitle}>{trend.title}</h3>
                  <p className={styles.magazineItemDesc}>{trend.desc}</p>
                  <button className={styles.editorialTextLinkAction}>Discover Masterworks →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: SHOP BY LUXURY OCCASION --- */}
      <section className={styles.sectionPadding}>
        <div className={styles.sectionHeaderCentered}>
          <h2 className={styles.serifSectionTitle}>Shop by Occasion</h2>
          <div className={styles.accentGoldLine} />
        </div>
        <div className={`${styles.contentContainer} ${styles.occasionGridSystem}`}>
          {OCCASIONS.map((occ, idx) => (
            <div key={idx} className={styles.occasionInteractionNode}>
              <div className={styles.occasionImageScaleViewport}>
                <img src={occ.img} alt={occ.name} className={styles.occasionMediaSource} />
                <div className={styles.occasionSubtleGlowOverlay} />
              </div>
              <div className={styles.occasionTextOverlayContainer}>
                <h3 className={styles.occasionTitleText}>{occ.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 4: INTERACTIVE PURITY SEPARATOR --- */}
      <section className={`${styles.sectionPadding} ${styles.bgDarkTheme}`}>
        <div className={styles.contentContainer}>
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.labelGoldAccentCaps}>HOUSE SPECIFICATIONS</span>
            <h2 className={`${styles.serifSectionTitle} ${styles.colorWhite}`}>Gold Purity Guide</h2>
          </div>
          <div className={styles.purityModuleSplitLayout}>
            <div className={styles.purityControlRail}>
              {PURITIES.map((p, i) => (
                <button
                  key={i}
                  className={`${styles.puritySelectionTab} ${activePurity === i ? styles.purityTabActiveState : ''}`}
                  onClick={() => setActivePurity(i)}
                >
                  <span className={styles.purityTabGradeText}>{p.grade}</span>
                  <span className={styles.purityTabMetricText}>{p.metric}</span>
                </button>
              ))}
            </div>
            <div className={styles.purityViewportDisplayWindow}>
              <div className={styles.purityDisplayCardInterior}>
                <h3 className={styles.purityDisplayActiveTitle}>{PURITIES[activePurity].grade} Overview</h3>
                <span className={styles.purityDisplayMetricBadge}>{PURITIES[activePurity].metric} Certified Purity</span>
                <p className={styles.purityDisplayParagraphText}>{PURITIES[activePurity].desc}</p>
                <div className={styles.purityCardDetailDrawer}>
                  <p>{PURITIES[activePurity].detail}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 5: SLIDER PRODUCT DISPLAY --- */}
      <section className={styles.sectionPadding}>
        <div className={styles.contentContainer}>
          <div className={styles.sliderHeaderFlexRow}>
            <div>
              <span className={styles.sectionLabelCaps}>THE INVENTORY</span>
              <h2 className={styles.serifSectionTitle}>Featured Masterpieces</h2>
            </div>
            <div className={styles.sliderControlsTrack}>
              <button onClick={() => handleScrollProducts('l')} className={styles.sliderNavigationArrowBtn} aria-label="Scroll Left">←</button>
              <button onClick={() => handleScrollProducts('r')} className={styles.sliderNavigationArrowBtn} aria-label="Scroll Right">→</button>
            </div>
          </div>
          <div className={styles.horizontalProductSliderViewport} ref={productSliderRef}>
            {FEATURED_PRODUCTS.map((prod) => (
              <div key={prod.id} className={styles.premiumCommercialProductCard}>
                <div className={styles.productCardMediaContext}>
                  <img src={prod.img} alt={prod.name} className={styles.productCardImageObject} />
                  <div className={styles.productCommercialHoverOverlay}>
                    <button className={styles.utilityActionCircularBtn} title="Save to Wishlist">♡</button>
                    <button className={styles.primaryQuickViewActionBtn}>Quick View</button>
                  </div>
                </div>
                <div className={styles.productCardMetaSection}>
                  <span className={styles.productCategoryLabelSlug}>{prod.type}</span>
                  <h4 className={styles.productHeadingTextTitle}>{prod.name}</h4>
                  <p className={styles.productPriceTextTag}>{prod.price}</p>
                  <button className={styles.productImmediateAddToCartBtn}>
                    Acquire Piece <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 6: GOLD INVESTMENT TIMELINE --- */}
      <section className={`${styles.sectionPadding} ${styles.bgCreamAccent}`}>
        <div className={styles.contentContainer}>
          <div className={styles.sectionHeaderCentered}>
            <h2 className={styles.serifSectionTitle}>Gold Investment Guide</h2>
            <div className={styles.accentGoldLine} />
          </div>
          <div className={styles.timelineHorizontalTrackGrid}>
            {TIMELINE.map((t, i) => (
              <div key={i} className={styles.timelineNodeComponent}>
                <div className={styles.timelinePhaseBadgeUnit}>
                  <span className={styles.timelinePhaseString}>{t.phase}</span>
                  {i < TIMELINE.length - 1 && <div className={styles.timelineConnectingVectorLine} />}
                </div>
                <h3 className={styles.timelineNodeHeadlineTitle}>{t.title}</h3>
                <p className={styles.timelineNodeParagraphBody}>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 7: REALTIME VALUATION RATE WIDGET --- */}
      <section className={styles.sectionPadding}>
        <div className={`${styles.contentContainer} ${styles.maxWidthMediumContainer}`}>
          <div className={styles.goldRateBoxContainerFrame}>
            <div className={styles.goldRateFrameHeader}>
              <span className={styles.liveIndicatorIconVisual} />
              <h3>Live Bureau Valuation Indices</h3>
            </div>
            <div className={styles.goldRateMetricsDualRow}>
              <div className={styles.goldRateMetricDisplayCell}>
                <span className={styles.goldRateCaratHeaderLabel}>22K Sovereign Gold rate</span>
                <p className={styles.goldRateValueDisplayBig}>₹7,410 <span className={styles.goldRateUnitTextSlug}>/ per gram</span></p>
              </div>
              <div className={styles.goldRateMetricDisplayCell}>
                <span className={styles.goldRateCaratHeaderLabel}>24K Bullion Investment rate</span>
                <p className={styles.goldRateValueDisplayBig}>₹8,084 <span className={styles.goldRateUnitTextSlug}>/ per gram</span></p>
              </div>
            </div>
            <div className={styles.goldRateWidgetFooterBox}>
              <button className={styles.historicalDataActionTextLink}>View Historical Analytical Chart →</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 8: COUTURE STYLING LOOKBOOK EDITORIAL --- */}
      <section className={`${styles.sectionPadding} ${styles.bgCreamAccent}`}>
        <div className={`${styles.contentContainer} ${styles.lookbookSplitGridStructure}`}>
          <div className={styles.lookbookMediaLayoutFrame}>
            <img src="https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=900&q=80" alt="Couture Ensemble Framework" className={styles.lookbookImageSourceElement} />
          </div>
          <div className={styles.lookbookExplanatoryStoryTextColumn}>
            <span className={styles.sectionLabelCaps}>STYLING ARTISTRY</span>
            <h2 className={styles.serifSectionTitle}>Style Your Gold Jewellery</h2>
            <p className={styles.lookbookDescriptionParagraph}>Instead of selecting single isolated items, our house design consultants curate holistic ensembles tailored across modern settings.</p>
            <ul className={styles.lookbookBulletUnorderedList}>
              <li><span className={styles.goldBulletMarker}>•</span> Traditional Heritage Formals</li>
              <li><span className={styles.goldBulletMarker}>•</span> Progressive High-Contrast Daily Layering</li>
              <li><span className={styles.goldBulletMarker}>•</span> Executive Office Architectural Profiles</li>
              <li><span className={styles.goldBulletMarker}>•</span> Gala Avant-Garde Evening Radiance</li>
            </ul>
            <button className={styles.primaryGoldBtn}>
              <span className={styles.btnTextContent}>Shop The Curated Suite</span>
            </button>
          </div>
        </div>
      </section>

      {/* --- SECTION 9: TRUST, COMPLIANCE & AUTHORITATIVE CORE CREDENTIALS --- */}
      <section className={`${styles.sectionPadding} ${styles.bgDarkTheme}`}>
        <div className={styles.contentContainer}>
          <div className={styles.trustGridMatrixLayout}>
            {[
              { label: "BIS Hallmarked Purity", text: "100% government laboratory fire assay authenticated precious metals." },
              { label: "Certified Gemological Valuations", text: "GIA-graded diamonds and ethically sourced natural stone declarations." },
              { label: "Generational Mastercrafting", text: "Individually bench-forged in restricted runs with no repetitive casting." },
              { label: "Lifetime Restorative Care", text: "Complimentary structural cleaning, sizing checks, and high-gloss restoration polishing." },
              { label: "Insured Secure Escrow Logistics", text: "Sovereign-insured armored courier dispatch protocols directly to your private doorstep." }
            ].map((card, i) => (
              <div key={i} className={styles.complianceLuxuryIconCard}>
                <div className={styles.complianceCardIconWrapperSlot}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A96A" strokeWidth="1.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className={styles.complianceCardHeaderTitleText}>{card.label}</h3>
                <p className={styles.complianceCardDescriptionBodyText}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 10: ELITE ACCOUNTS CLIENT REVIEWS --- */}
      <section className={styles.sectionPadding}>
        <div className={`${styles.contentContainer} ${styles.maxWidthMediumContainer}`}>
          <div className={styles.sectionHeaderCentered}>
            <span className={styles.sectionLabelCaps}>CLIENT TESTIMONIALS</span>
            <h2 className={styles.serifSectionTitle}>Customer Stories</h2>
          </div>
          <div className={styles.editorialTestimonialViewportTrack} ref={testimonialSliderRef}>
            <div className={styles.editorialTestimonialCardSlideBlock}>
              <div className={styles.testimonialStarsRow}>★★★★★</div>
              <blockquote className={styles.testimonialBlockquoteTextContent}>
                "The structural finishing on the Imperial Choker is remarkable. The golden luster carries an exceptional depth that speaks volumes of the artisanal studio legacy. An undeniable hallmark centerpiece."
              </blockquote>
              <cite className={styles.testimonialAuthorCitationSignature}>— Aditi Sharma K.</cite>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 11: INTERACTIVE STRUCTURAL FAQ ACCORDION --- */}
      <section className={`${styles.sectionPadding} ${styles.bgCreamAccent}`}>
        <div className={`${styles.contentContainer} ${styles.maxWidthMediumContainer}`}>
          <div className={styles.sectionHeaderCentered}>
            <h2 className={styles.serifSectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.accentGoldLine} />
          </div>
          <div className={styles.accordionContainerStackTrack}>
            {FAQS.map((faq, index) => (
              <div key={index} className={`${styles.accordionInteractiveNodeItem} ${activeFaq === index ? styles.accordionNodeActiveState : ''}`}>
                <button className={styles.accordionInteractiveHeaderTriggerRow} onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                  <span className={styles.accordionHeaderTitleQueryText}>{faq.q}</span>
                  <span className={styles.accordionVisualCaretIndicatorIcon} />
                </button>
                <div className={styles.accordionDynamicContentBodyDrawer}>
                  <div className={styles.accordionInteriorBodyPaddingBox}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER REGION --- */}
      <footer className={styles.editorialFooterBaseRegion}>
        <div className={styles.contentContainer}>
          <p className={styles.footerBrandTypographyTitle}>HAUTE JEWELLERY HOUSE</p>
          <p className={styles.footerCopyrightTypographyBody}>© 2026 Forged for Discerning Experiences. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}