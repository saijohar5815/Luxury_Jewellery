"use client";

import React, { useState } from 'react';
import styles from './BridalStudioPage.module.css';
import {BRIDAL_STYLES, PACKAGES_BY_STYLE,TIMELINE_DATA} from '@/data/bridal';

export default function BridalStudioPage() {
  const [activeStyle, setActiveStyle] = useState('royal');
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);
  const [selectedBudget, setSelectedBudget] = useState('5l');
  const [activeDressingItem, setActiveDressingItem] = useState<string | null>(null);

  // Dynamic Content Generators based on Client Inputs
  const currentPackage = PACKAGES_BY_STYLE[activeStyle] || PACKAGES_BY_STYLE.royal;

  return (
    <div className={styles.bridalStudioCanvas} style={{ '--studio-accent': BRIDAL_STYLES.find(s => s.id === activeStyle)?.colorTheme } as React.CSSProperties}>
      
      {/* SCREEN 1: CINEMATIC HERO */}
      <section className={styles.heroSection}>
        <div className={styles.videoBackgroundSimulation}>
          <div className={styles.driftingFlowerPetalsOverlay} />
          <div className={styles.darkAestheticMutingShield} />
        </div>
        <div className={styles.heroContentFrame}>
          <span className={styles.heroSubText}>FROM YES TO FOREVER</span>
          <h1 className={styles.heroMainTitle}>THE BRIDAL HOUSE</h1>
          <p className={styles.heroEditorialLine}>Every grand love story deserves extraordinary high jewelry craftsmanship.</p>
          <button className={styles.heroCtaGoldButton} onClick={() => document.getElementById('personalityStyle')?.scrollIntoView({ behavior: 'smooth' })}>
            BEGIN YOUR EXPERIENCE
          </button>
        </div>
        <div className={styles.scrollIndicatorPulse}>↓</div>
      </section>

      {/* SCREEN 2: CHOOSE YOUR WEDDING STYLE (DYNAMIC THEME SWITCHER) */}
      <section id="personalityStyle" className={styles.styleSwitcherSection}>
        <div className={styles.sectionHeaderCentered}>
          <span className={styles.goldLabel}>PERSONALITY MATRICES</span>
          <h2>Which Bride Are You?</h2>
          <p>Select your aesthetic identity to recalibrate the digital studio's presentation metrics.</p>
        </div>

        <div className={styles.styleSelectorGrid}>
          {BRIDAL_STYLES.map((style) => (
            <button
              key={style.id}
              className={`${styles.styleSelectorCard} ${activeStyle === style.id ? styles.styleCardActive : ''}`}
              onClick={() => setActiveStyle(style.id)}
            >
              <h3>{style.label}</h3>
              <p>{style.subtitle}</p>
              <div className={styles.activeBorderAccentLine} />
            </button>
          ))}
        </div>
      </section>

      {/* SCREEN 3: BRIDAL MOOD BOARD (EDITORIAL MASONRY CANVAS) */}
      <section className={styles.moodBoardSection}>
        <div className={styles.sectionHeaderCentered}>
          <span className={styles.goldLabel}>VISUAL INSPIRATION</span>
          <h2>The {activeStyle.toUpperCase()} Aesthetic Mood Board</h2>
        </div>

        <div className={styles.moodMasonryLayout}>
          <div className={`${styles.masonryBlock} ${styles.blockLarge}`}>
            <div className={styles.moodPlaceholderImage}>
              <span className={styles.moodInternalTag}>THE BRIDE CLOSE-UP</span>
            </div>
          </div>
          <div className={`${styles.masonryBlock} ${styles.blockTall}`}>
            <div className={styles.moodPlaceholderImage}>
              <span className={styles.moodInternalTag}>THE HEIRLOOM NECKPIECE</span>
            </div>
          </div>
          <div className={`${styles.masonryBlock} ${styles.blockSquare}`}>
            <div className={styles.moodPlaceholderImage}>
              <span className={styles.moodInternalTag}>SACRED CEREMONY DETAILS</span>
            </div>
          </div>
          <div className={`${styles.masonryBlock} ${styles.blockWide}`}>
            <div className={styles.moodPlaceholderImage}>
              <span className={styles.moodInternalTag}>THE COUTURE STYLING SHOT</span>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 4: COMPLETE WEDDING LOOKS */}
      <section className={styles.completeLookSection}>
        <div className={styles.completeLookGridContainer}>
          <div className={styles.lookVisualShowcaseSide}>
            <div className={styles.lookCouturePlateBackground}>
              <div className={styles.goldGlintSparkleOne}>✦</div>
              <div className={styles.goldGlintSparkleTwo}>✦</div>
            </div>
          </div>
          <div className={styles.lookManifestDetailsSide}>
            <span className={styles.goldLabel}>INTEGRATED CURATION</span>
            <h2 className={styles.lookTitleHeading}>The Complete {activeStyle.charAt(0).toUpperCase() + activeStyle.slice(1)} Ensemble Suite</h2>
            <div className={styles.packageCardBody}>
              <p className={styles.packageSubtitleText}>Eliminate disconnected individual pieces. Invest in a harmonized layout framework:</p>
              <ul className={styles.packageElementsChecklist}>
                {currentPackage.elements.map((el, i) => (
                  <li key={i}><span>✨</span> {el}</li>
                ))}
              </ul>
              <div className={styles.packagePriceRow}>
                <div>
                  <span className={styles.priceLabel}>TOTAL VALUATION</span>
                  <p className={styles.priceValueString}>{currentPackage.price}</p>
                </div>
                <button className={styles.packageAcquireButton}>ACQUIRE ENTIRE PACKAGE</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 5: WEDDING TIMELINE INTERACTIVE MODULE */}
      <section className={styles.timelineSection}>
        <div className={styles.sectionHeaderCentered}>
          <span className={styles.goldLabel}>CHRONOLOGICAL CURATION</span>
          <h2>The Ceremonial Jewelry Timeline</h2>
        </div>

        <div className={styles.timelineNavigationTrack}>
          {TIMELINE_DATA.map((item, idx) => (
            <button
              key={idx}
              className={`${styles.timelineNodeButton} ${activeTimelineIdx === idx ? styles.activeTimelineNode : ''}`}
              onClick={() => setActiveTimelineIdx(idx)}
            >
              <span className={styles.nodeStepIndicator}>STAGE 0{idx + 1}</span>
              <span className={styles.nodeStageLabel}>{item.stage}</span>
            </button>
          ))}
        </div>

        <div className={styles.timelineDynamicDisplayCard}>
          <div className={styles.timelineDisplayVisualStage}>
            <div className={styles.technicalBlueprintBlueprintGrid} />
          </div>
          <div className={styles.timelineDisplayContentStage}>
            <span className={styles.goldLabel}>DESIGN ORIENTATION</span>
            <h3>{TIMELINE_DATA[activeTimelineIdx].tone}</h3>
            <div className={styles.specificationsTable}>
              <div className={styles.specRow}><strong>Recommended Configuration:</strong> <span>{TIMELINE_DATA[activeTimelineIdx].recommendation}</span></div>
              <div className={styles.specRow} style={{ borderBottom: 'none' }}><strong>Alloy & Palette Baseline:</strong> <span>{TIMELINE_DATA[activeTimelineIdx].aesthetic}</span></div>
            </div>
            <button className={styles.timelineActionLinkButton}>EXPLORE STAGE SELECTIONS →</button>
          </div>
        </div>
      </section>

      {/* SCREEN 6: EDITORIAL BRIDAL COLLECTIONS */}
      <section className={styles.editorialCollectionsSection}>
        <div className={styles.sectionHeaderCentered}>
          <span className={styles.goldLabel}>CURATED DESIGN FILING</span>
          <h2>The Editorial Lineage Portfolios</h2>
        </div>

        <div className={styles.editorialCollectionsColumnStack}>
          {[
            { title: 'The Royal Heritage Vault', details: 'Uncut pure polki diamonds set in deep-mold heavy 22 Karat traditional gold matrices.' },
            { title: 'The Modern Luminary Line', details: 'Micro-pave diamonds wrapping clean asymmetrical platinum architectural frameworks.' },
            { title: 'The Sacred Temple Collection', details: 'Intricately chased divine motifs populated with exceptional high-clarity rubies and brilliant diamonds.' }
          ].map((item, i) => (
            <div key={i} className={styles.editorialRowCard}>
              <div className={styles.editorialRowMiniStage} />
              <div className={styles.editorialRowContentSide}>
                <h3>{item.title}</h3>
                <p>{item.details}</p>
                <button className={styles.editorialRowInlineButton}>ACCESS PORTFOLIO AXIS</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCREEN 7: BRIDE'S DRESSING TABLE INTERACTIVE CANVAS */}
      <section className={styles.dressingTableSection}>
        <div className={styles.sectionHeaderCentered}>
          <span className={styles.goldLabel}>VIRTUAL STAGING</span>
          <h2>The Bride's Dressing Table</h2>
          <p>Interact with the curated elements laid on the table to unveil hidden styling dimensions.</p>
        </div>

        <div className={styles.dressingTableInteractiveCanvas}>
          <div className={styles.dressingTableLayoutPlate}>
            <button className={`${styles.tableInteractiveHotspot} ${styles.hsMirror}`} onClick={() => setActiveDressingItem('mirror')}>🪞 Mirror</button>
            <button className={`${styles.tableInteractiveHotspot} ${styles.hsNecklace}`} onClick={() => setActiveDressingItem('necklace')}>💎 Choker</button>
            <button className={`${styles.tableInteractiveHotspot} ${styles.hsRing}`} onClick={() => setActiveDressingItem('ring')}>💍 Solitaire</button>
            <button className={`${styles.tableInteractiveHotspot} ${styles.hsPerfume}`} onClick={() => setActiveDressingItem('perfume')}>🧪 Elixir</button>
          </div>

          <div className={styles.dressingTableDrawerOverlayDetailPanel}>
            {activeDressingItem === 'mirror' && <p><strong>The Bridal Radiance Look:</strong> A mirror view calibrated to assess how your neckpiece reflects lighting values upward to illuminate facial expressions.</p>}
            {activeDressingItem === 'necklace' && <p><strong>The Heirloom Collar:</strong> Featuring 42 carats of natural conflict-free internal brilliant cuts, sitting perfectly flush against the collarbone.</p>}
            {activeDressingItem === 'ring' && <p><strong>The Central Diamond:</strong> A certified D-Flawless ideal cut diamond fixed inside a multi-point micro-claw crown setting.</p>}
            {activeDressingItem === 'perfume' && <p><strong>The Olfactory Pair:</strong> Our house jasmine formulation designed to complete the sensory memory profile of your grand entry corridor walk.</p>}
            {!activeDressingItem && <p className={styles.neutralPromptText}>Select an object from the table layout to begin analysis...</p>}
          </div>
        </div>
      </section>

      {/* SCREEN 8: BRIDAL ASSISTANT DESIGN PLANNER */}
      <section className={styles.plannerSection}>
        <div className={styles.plannerCardInnerFrame}>
          <div className={styles.sectionHeaderCentered} style={{ marginBottom: '3rem' }}>
            <span className={styles.goldLabel}>AI ALIGNMENT PLANNING</span>
            <h2>The Bridal Strategic Planner</h2>
            <p>Define your core initialization metrics to generate personalized recommendations.</p>
          </div>

          <div className={styles.plannerInteractiveControls}>
            <div className={styles.plannerBudgetSelectorBlock}>
              <span className={styles.plannerControlLabel}>TARGET ASSIGNMENT BUDGET MATRIX:</span>
              <div className={styles.budgetTabsTrack}>
                {[
                  { id: '2l', label: '₹2,00,000+' },
                  { id: '5l', label: '₹5,00,000+' },
                  { id: '10l', label: '₹10,00,000+' },
                  { id: 'custom', label: 'Couture Commission' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`${styles.budgetTabButton} ${selectedBudget === tab.id ? styles.activeBudgetTab : ''}`}
                    onClick={() => setSelectedBudget(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.plannerDynamicOutputShield}>
              <h4>Curated Path Recommendation Profile</h4>
              <p> Based on your selection parameters, we suggest prioritizing an optimized **Central Statement Choker** with detachable layout elements, allowing transition scalability from primary wedding ceremonies to reception spaces.</p>
              <div className={styles.plannerDynamicActionRow}>
                <span>Estimated Matrix Matching: <strong>94% Confidence</strong></span>
                <button className={styles.plannerInternalCta}>LOCK CONFIGURATION PATH</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREEN 9: PRIVATE BRIDAL BOOK A STYLIST FORM */}
      <section className={styles.bookingSection}>
        <div className={styles.bookingCardLayoutContainer}>
          <div className={styles.bookingLeftPromoPanel}>
            <h3>Schedule a Private Bridal Vault Session</h3>
            <p>Gain uninterrupted entry into our physical premium high-jewelry vault chambers accompanied by a dedicated senior gemological styling advisor.</p>
          </div>
          <div className={styles.bookingRightFormPanel}>
            <form onSubmit={(e) => e.preventDefault()} className={styles.bookingFormElement}>
              <div className={styles.formFieldGroup}>
                <label>PREFERRED CALENDAR DATE</label>
                <input type="date" className={styles.luxuryFormInput} defaultValue="2026-06-15" />
              </div>
              <div className={styles.formFieldGroup}>
                <label>PREFERRED INTERVIEW TIME WINDOW</label>
                <select className={styles.luxuryFormInput}>
                  <option>Morning Session (11:00 AM — 01:30 PM)</option>
                  <option>Afternoon Vault (02:00 PM — 04:30 PM)</option>
                  <option>Sunset Confidential (05:00 PM — 07:30 PM)</option>
                </select>
              </div>
              <div className={styles.formFieldGroup}>
                <label>DESIGNATION STORE SALON RESIDENCY</label>
                <select className={styles.luxuryFormInput}>
                  <option>Mumbai Flagship Mansion (Colaba)</option>
                  <option>Delhi Luxury Atelier (Chanakyapuri)</option>
                  <option>Bangalore Heritage Studio (Lavelle Road)</option>
                </select>
              </div>
              <button type="submit" className={styles.submitReservationLuxuryButton}>RESERVE ATELIER APPOINTMENT</button>
            </form>
          </div>
        </div>
      </section>

      {/* SCREEN 10: REAL BRIDES MAGAZINE GALLERY */}
      <section className={styles.realBridesSection}>
        <div className={styles.sectionHeaderCentered}>
          <span className={styles.goldLabel}>THE JOURNAL VENUE</span>
          <h2>Real House Brides Journal</h2>
        </div>

        <div className={styles.realBridesMagazineGrid}>
          {[
            { name: 'Priya & Arjun', venue: 'The Udaipur Palace Nuptials', quote: 'The heavy uncut Polki suite anchored my entire style narrative. It felt like stepping directly into historic legend.' },
            { name: 'Sneha & Rahul', venue: 'The Taj Mahal Palace Gala', quote: 'Our dedicated stylist matched the diamond reflections perfectly against my reception outfit tone. Unforgettable care.' },
            { name: 'Ananya & Kabir', venue: 'The Alila Fort Legacy Event', quote: 'From the initial structural planning stages down to final handoff, the entire execution lifecycle was immaculate.' }
          ].map((bride, idx) => (
            <div key={idx} className={styles.magazineBrideCard}>
              <div className={styles.magazineBrideImageStage}>
                <span className={styles.magazinePhotoCreditIndicator}>PORTRAIT ARCHIVE // 0{idx+1}</span>
              </div>
              <div className={styles.magazineBrideContentMeta}>
                <h4>{bride.name}</h4>
                <span className={styles.brideVenueSublabel}>{bride.venue}</span>
                <p>"{bride.quote}"</p>
                <button className={styles.readStoryMagazineButton}>READ JOURNAL PROFILE →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCREEN 11: BRIDAL CORE SERVICES MATRICES */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeaderCentered}>
          <span className={styles.goldLabel}>THE HOUSE GUARANTEES</span>
          <h2>Dedicated Bridal Support Services</h2>
        </div>

        <div className={styles.servicesQuadMatrixGrid}>
          {[
            { label: 'Complimentary Wedding Day Fitting', description: 'Our senior master setting team visits your preparation venue to assist in checking lock securities.' },
            { label: 'Lifetime Value Transition Guarantee', description: 'Trade or rescale your pieces inside a guaranteed value tracking system as your family heritage progresses.' },
            { label: 'Laser Inscribed GIA Provenance Certifications', description: 'Every primary diamond carries permanent micro-inscriptions mapping its gemological ledger lineage.' },
            { label: 'On-Call Concierge Registry Tracking', description: 'Enlist automated support workflows to manage your bridal gift registries and bespoke styling parameters.' }
          ].map((svc, i) => (
            <div key={i} className={styles.serviceLuxuryFeatureCard}>
              <div className={styles.serviceFeatureIndicatorStar}>✦</div>
              <h3>{svc.label}</h3>
              <p>{svc.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCREEN 12: LOVE STORIES CONFIDENTIAL ACCOUNTABILITY MODULE */}
      <section className={styles.loveStoriesMinimalSection}>
        <div className={styles.minimalStoriesTrack}>
          <div className={styles.minimalTestimonialCard}>
            <div className={styles.starCluster}>★★★★★</div>
            <p>"The continuous alignment advice shifted my outlook from standard jewelry purchasing to authentic heritage collection building. We are eternally grateful."</p>
            <cite>— Divya & Vikram (Amantya Registry)</cite>
          </div>
        </div>
      </section>

      {/* SCREEN 13: FINAL LUXURY CALL TO ACTION EXECUTOR */}
      <section className={styles.finalCtaSectionSection}>
        <div className={styles.finalCtaPolishedShieldBacking}>
          <span className={styles.goldLabel}>YOUR ETERNAL CHAPTER ARRESTED</span>
          <h2>Begin Your Forever</h2>
          <p>Let us align your vision with timeless high jewelry statements. Connect with our atelier artisans today.</p>
          <button className={styles.ultimateStudioCtaActionExecuteButton}>INITIATE BRIDAL ENGAGEMENT</button>
        </div>
      </section>

    </div>
  );
}