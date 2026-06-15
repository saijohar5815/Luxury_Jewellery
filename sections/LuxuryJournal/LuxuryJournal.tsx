"use client";

import React, { useState } from 'react';
import styles from './LuxuryJournal.module.css';

type StoryCategory = 'diamonds' | 'gold' | 'bridal' | 'gifting' | 'heritage';
type OccasionType = 'office' | 'party' | 'wedding' | 'vacation' | 'festival';
type InteractiveHotspot = 'necklace' | 'earrings' | 'ring' | 'none';

export default function LuxoraJournal() {
  // Editorial Category Controller
  const [activeCategory, setActiveCategory] = useState<StoryCategory>('diamonds');
  
  // Interactive Style Studio Matrix
  const [activeOccasion, setActiveOccasion] = useState<OccasionType>('wedding');
  
  // Interactive Lookbook Hotspot Selector
  const [selectedHotspot, setSelectedHotspot] = useState<InteractiveHotspot>('none');

  // Personal Style Match Engine State
  const [userAge, setUserAge] = useState<string>('30-40');
  const [userOccasion, setUserOccasion] = useState<string>('party');
  const [userPreference, setUserPreference] = useState<string>('minimal');
  const [compiledProfile, setCompiledProfile] = useState<boolean>(false);

  // Dynamic Content Database
  const categoryStories: Record<StoryCategory, Array<{ title: string; excerpt: string; readTime: string }>> = {
    diamonds: [
      { title: "The Sovereign Solitaire", excerpt: "Tracking the light dispersion metrics of un-cut clarity paradigms.", readTime: "4 min read" },
      { title: "Asymmetry in Brilliance", excerpt: "Modern styling patterns breaking traditional pavé boundaries.", readTime: "6 min read" }
    ],
    gold: [
      { title: "The 24K Liquid Weave", excerpt: "How master artisans behave when forging high-ductility statement bands.", readTime: "5 min read" },
      { title: "Chasing Shadows", excerpt: "Textured gold surfaces engineered to reflect candlelight parameters.", readTime: "3 min read" }
    ],
    bridal: [
      { title: "Chokers of the Royal Court", excerpt: "A deep dive into historical silhouettes modified for modern high necklines.", readTime: "8 min read" },
      { title: "The Veil Intersect", excerpt: "Balancing micro-earrings with diamond-encrusted traditional headwear.", readTime: "7 min read" }
    ],
    gifting: [
      { title: "The Etiquette of Legacies", excerpt: "Curated guide on transferring emotional asset items down generations.", readTime: "4 min read" }
    ],
    heritage: [
      { title: "Archival Restorations", excerpt: "Unveiling the reconstruction processes of 1920 crown-mount frameworks.", readTime: "11 min read" }
    ]
  };

  const occasionData: Record<OccasionType, { item: string; description: string }> = {
    office: { item: "The Baguette Line Studs", description: "Clean structural platinum geometry engineered for boardroom visibility." },
    party: { item: "The Cascade Drop Strings", description: "Highly articulate modern diamond arrays designed to move with kinetic grace." },
    wedding: { item: "The Heritage Grand Choker", description: "Bespoke high-karat gold masterpiece layered with natural emerald clusters." },
    vacation: { item: "The Minimalist Horizon Hoop", description: "Tarnish-resistant hammered gold components optimized for open skies." },
    festival: { item: "The Filigree Medallion Chain", description: "High-density micro-sculptures celebrating traditional symmetry rules." }
  };

  return (
    <div className={styles.magazineAppContainer}>
      
      {/* SECTION 1: LUXURY EDITORIAL COVER */}
      <section className={styles.editorialCoverViewport}>
        <div className={styles.cinematicBackgroundScale} />
        <div className={styles.coverTextWrapper}>
          <div className={styles.magazineMasthead}>LUXORA JOURNAL</div>
          <div className={styles.horizontalAccentRule} />
          <h1 className={styles.coverHeadline}>Stories Behind Every Sparkle</h1>
          <p className={styles.coverSubheading}>Fashion • Heritage • Craftsmanship</p>
          <button 
            className={styles.magazinePrimaryCta}
            onClick={() => document.getElementById('explore-grid')?.scrollIntoView({ behavior: 'smooth' })}
          >
            EXPLORE STORIES
          </button>
        </div>
      </section>

      {/* SECTION 2: EDITOR'S PICK */}
      <section className={styles.editorsPickSection}>
        <div className={styles.sectionHeaderLabel}>✦ THE EDITOR'S PICK</div>
        <div className={styles.largeScaleEditorialBlock}>
          <div className={styles.editorialImageContainer}>
            <div className={styles.placeholderLuxImage} style={{ background: 'linear-gradient(135deg, #2c2a27 0%, #111111 100%)' }}>
              <span className={styles.imageArtText}>VINTAGE ARCHIVE FRAME 094</span>
            </div>
          </div>
          <div className={styles.editorialContentMeta}>
            <span className={styles.issueDateMarker}>ISSUE NO. VIII // FOREVER MATRICES</span>
            <h2 className={styles.editorialTitle}>The Diamond That Took 600 Hours To Create</h2>
            <p className={styles.editorialParagraph}>
              An unvarnished analytical chronicle exploring the architectural constraints, tension failures, and master craftsmanship breakthroughs encountered during the configuration of the house’s newest structural rosette necklace.
            </p>
            <span className={styles.readStoryLink}>READ STORY ⟶</span>
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4: CATEGORY STORIES & MAGAZINE LAYOUT */}
      <section id="explore-grid" className={styles.exploreStoriesSection}>
        <div className={styles.sectionHeaderLabel}>THE WORLD OF JEWELLERY</div>
        
        <div className={styles.magazineCategoryNavigationStrip}>
          {(['diamonds', 'gold', 'bridal', 'gifting', 'heritage'] as StoryCategory[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`${styles.categorySelectorTab} ${activeCategory === cat ? styles.categoryTabActive : ''}`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className={styles.vogueAlternatingLayoutGrid}>
          {categoryStories[activeCategory].map((story, index) => (
            <div key={index} className={`${styles.vogueEditorialCard} ${index % 2 !== 0 ? styles.rowInvertedCard : ''}`}>
              <div className={styles.vogueCardImageFrame}>
                <div className={styles.editorialImageMock} />
              </div>
              <div className={styles.vogueCardTextFrame}>
                <span className={styles.vogueCardMeta}>{story.readTime}</span>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
                <span className={styles.vogueCardCta}>READ ESSAY</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: WEDDING DIARIES */}
      <section className={styles.weddingDiariesSection}>
        <div className={styles.sectionHeaderLabel}>WEDDING DIARIES</div>
        <div className={styles.tripleTriptychMagazineGrid}>
          {[
            { tag: "REAL BRIDE STORY", title: "The Silk Road Ensemble", desc: "A custom 22k gold choker integrated seamlessly with family antique lace threads." },
            { tag: "PROPOSAL STORY", title: "A Dawn Monologue", desc: "Selecting a raw, conflict-free emerald cut matrix to mirror industrial architectural aesthetics." },
            { tag: "RECEPTION STYLING", title: "The Midnight Transition", desc: "Ditching the traditional weights for layered platinum drop arrays configured for continuous illumination." }
          ].map((diary, idx) => (
            <div key={idx} className={styles.triptychEditorialPlaque}>
              <div className={styles.triptychVisualFrame} />
              <span className={styles.triptychBadge}>{diary.tag}</span>
              <h4>{diary.title}</h4>
              <p>{diary.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: STYLE STUDIO */}
      <section className={styles.styleStudioSection}>
        <div className={styles.sectionHeaderLabel}>STYLE STUDIO</div>
        <div className={styles.studioWorkspaceSplit}>
          <div className={styles.studioNavigationColumn}>
            {(['office', 'party', 'wedding', 'vacation', 'festival'] as OccasionType[]).map((occ) => (
              <button
                key={occ}
                onClick={() => setActiveOccasion(occ)}
                className={`${styles.studioOccasionRow} ${activeOccasion === occ ? styles.studioOccasionActive : ''}`}
              >
                {occ.toUpperCase()}
              </button>
            ))}
          </div>
          <div className={styles.studioDisplayLuxePlate}>
            <div className={styles.studioPurityPill}>RECOMMENDED COMPOSITION Matrix</div>
            <h3 className={styles.studioRecommendedItemName}>{occasionData[activeOccasion].item}</h3>
            <p className={styles.studioRecommendedDescription}>{occasionData[activeOccasion].description}</p>
            <div className={styles.studioMicroVisualFrame} />
          </div>
        </div>
      </section>

      {/* SECTION 7: CELEBRITY INSPIRED LOOKS */}
      <section className={styles.celebrityLooksSection}>
        <div className={styles.sectionHeaderLabel}>CELEBRITY INSPIRED LOOKS</div>
        <div className={styles.dualEditorialSpreadLayout}>
          <div className={styles.spreadHalfPanel}>
            <div className={styles.spreadVisualContainer} />
            <div className={styles.spreadMetaData}>
              <h4>Minimal Luxury Theme</h4>
              <p>How sparse setups containing single-element diamonds command immense red-carpet authority.</p>
              <span className={styles.spreadInlineAction}>EXPLORE DESIGN SCHEMATICS →</span>
            </div>
          </div>
          <div className={styles.spreadHalfPanel}>
            <div className={styles.spreadVisualContainer} />
            <div className={styles.spreadMetaData}>
              <h4>Royal Elegance Theme</h4>
              <p>Re-evaluating historical cluster alignments using high-purity modern white gold structures.</p>
              <span className={styles.spreadInlineAction}>EXPLORE DESIGN SCHEMATICS →</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE: STYLE MATCH STUDIO */}
      <section className={styles.styleMatchStudioFeature}>
        <div className={styles.matchStudioInternalShield}>
          <div className={styles.sectionHeaderLabel} style={{ color: 'var(--luxe-gold)' }}>HOUSE ADVANCED ENGINE</div>
          <h2 className={styles.matchStudioMainTitle}>Find Your Jewellery Style</h2>
          <p className={styles.matchStudioIntro}>Bypass arbitrary search indexes. Let the machine compile your current jewelry aesthetic blueprint based on architectural preferences.</p>
          
          <div className={styles.matchStudioInputGrid}>
            <div className={styles.matchBlockComponent}>
              <label>Target Age Vector</label>
              <div className={styles.matchSelectorRow}>
                {['20-30', '30-40', '40+'].map(age => (
                  <button key={age} onClick={() => setUserAge(age)} className={userAge === age ? styles.matchBtnActive : ''}>{age}</button>
                ))}
              </div>
            </div>

            <div className={styles.matchBlockComponent}>
              <label>Ceremonial Context</label>
              <div className={styles.matchSelectorRow}>
                {['wedding', 'office', 'party', 'daily'].map(occ => (
                  <button key={occ} onClick={() => setUserOccasion(occ)} className={userOccasion === occ ? styles.matchBtnActive : ''}>{occ.toUpperCase()}</button>
                ))}
              </div>
            </div>

            <div className={styles.matchBlockComponent}>
              <label>Structural Aspiration</label>
              <div className={styles.matchSelectorRow}>
                {['minimal', 'royal', 'contemporary', 'traditional'].map(pref => (
                  <button key={pref} onClick={() => setUserPreference(pref)} className={userPreference === pref ? styles.matchBtnActive : ''}>{pref.toUpperCase()}</button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.matchExecutionArea}>
            <button className={styles.matchCompileTriggerBtn} onClick={() => setCompiledProfile(true)}>
              COMPILE STYLE PROFILE
            </button>

            {compiledProfile && (
              <div className={styles.compiledProfileResultCard}>
                <h4>✨ Your House Blueprint: The {userPreference.toUpperCase()} ARCHON</h4>
                <p>Based on constraints, your look demands structural symmetry. We have updated your magazine recommendations to focus heavily on modern linear geometries matching your profile ecosystem.</p>
                <div className={styles.compiledResultActionsLinks}>
                  <span>Recommended Essays</span> • <span>View Lookbooks</span> • <span>Curated Vault Access</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 8: BEHIND THE CRAFT */}
      <section className={styles.behindCraftSection}>
        <div className={styles.sectionHeaderLabel}>BEHIND THE CRAFT</div>
        <div className={styles.chronologicalCraftTrack}>
          {[
            { phase: "01 / The Hand Sketch", desc: "Transferring absolute abstractions onto heavy structural fiber vellum sheets." },
            { phase: "02 / Wax Model Sculpting", desc: "Carving tactile three-dimensional counterweights to test spatial ergonomics." },
            { phase: "03 / Lost-Wax Metallurgical Casting", desc: "Injecting molten 18k alloys under unified structural pressure limits." },
            { phase: "04 / Micro-Pavé Stone Setting", desc: "Fixing stones under specialized high-magnification diamond lens setups." },
            { phase: "05 / Ultrasonic Mirror Polishing", desc: "Multilayered surface finishing tracks generating crystal clear face-reflections." },
            { phase: "06 / Final House Masterpiece", desc: "A separate validation run to confirm permanent weight balances." }
          ].map((craft, i) => (
            <div key={i} className={styles.craftChronologyCard}>
              <div className={styles.craftCardHeaderRow}><div className={styles.craftTimelineNodeRing} /></div>
              <h5>{craft.phase}</h5>
              <p>{craft.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: TREND FORECAST 2026 */}
      <section className={styles.trendForecastSection}>
        <div className={styles.sectionHeaderLabel}>LUXURY TRENDS 2026</div>
        <div className={styles.forecastSpreadContainer}>
          <div className={styles.forecastLeftBrandingColumn}>
            <h3>Top Trends<br />2026</h3>
            <p>An exhaustive house projection mapping raw-material limits against changing worldwide styling trends.</p>
          </div>
          <div className={styles.forecastRightDataRows}>
            {[
              { title: "Minimal Gold Lineatures", detail: "Single piece structures avoiding complex engravings in favor of high-polish plane surfaces." },
              { title: "Architectural Stack Rings", detail: "Engineered step-cuts allowing user-customized nesting profiles on the hands." },
              { title: "Kinetic Layered Chains", detail: "Asymmetric anchor links designed to flow seamlessly over silk clothing layouts." },
              { title: "Contemporary Bridal Sovereignty", detail: "Shifting traditional wedding weights into modular, split-component arrays." }
            ].map((trend, i) => (
              <div key={i} className={styles.forecastMetricRow}>
                <h4>{trend.title}</h4>
                <p>{trend.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: INTERACTIVE LOOKBOOK */}
      <section className={styles.interactiveLookbookSection}>
        <div className={styles.sectionHeaderLabel}>INTERACTIVE LOOKBOOK</div>
        <div className={styles.lookbookWorkspaceFrame}>
          <div className={styles.lookbookModelCanvas}>
            {/* HOTSPOT INTERACTION PARAMETERS */}
            <button 
              className={`${styles.hotspotAnchorIndicator} ${styles.hotspotEarrings}`}
              onClick={() => setSelectedHotspot('earrings')}
              aria-label="Select Earrings Hotspot"
            >
              ✦
            </button>
            <button 
              className={`${styles.hotspotAnchorIndicator} ${styles.hotspotNecklace}`}
              onClick={() => setSelectedHotspot('necklace')}
              aria-label="Select Necklace Hotspot"
            >
              ✦
            </button>
            <button 
              className={`${styles.hotspotAnchorIndicator} ${styles.hotspotRing}`}
              onClick={() => setSelectedHotspot('ring')}
              aria-label="Select Ring Hotspot"
            >
              ✦
            </button>
          </div>

          <div className={styles.lookbookControlConsolePanel}>
            <h4>Lookbook Manifest</h4>
            <p className={styles.consoleInstructionalText}>Click on the active visual markers across the model landscape to inspect component specifications directly.</p>
            
            <div className={styles.consoleDynamicContentWindow}>
              {selectedHotspot === 'none' && <p className={styles.emptyConsoleState}>No component focused. Initialize hotspot map selection.</p>}
              {selectedHotspot === 'earrings' && (
                <div>
                  <h5>The Orbital Diamond Drops</h5>
                  <p>Featuring matched pairs of D-flawless stones held in tension by architectural white gold claws.</p>
                  <span className={styles.consolePriceValue}>₹4,20,000</span>
                </div>
              )}
              {selectedHotspot === 'necklace' && (
                <div>
                  <h5>The Cascade Chevron Collar</h5>
                  <p>Multi-row micro-pavé sequence transitioning gracefully into a heavy emerald step cut focus stone.</p>
                  <span className={styles.consolePriceValue}>₹18,50,000</span>
                </div>
              )}
              {selectedHotspot === 'ring' && (
                <div>
                  <h5>The Infinite Loop Band</h5>
                  <p>Heavy platinum formulation featuring an uninterrupted loop of channel-set step cuts.</p>
                  <span className={styles.consolePriceValue}>₹2,80,000</span>
                </div>
              )}
            </div>
            
            {selectedHotspot !== 'none' && <button className={styles.lookbookAquisitionCta}>ACQUIRE ENTIRE LOOK ENSEMBLE</button>}
          </div>
        </div>
      </section>

      {/* SECTION 11: EDITORIAL TYPOGRAPHY QUOTE */}
      <section className={styles.editorialQuoteSection}>
        <div className={styles.quoteInternalShield}>
          <p className={styles.mainTypographyQuote}>“Jewellery is not worn. It is remembered.”</p>
          <span className={styles.quoteAttributionSignoff}>— HOUSE ANONYMOUS CHRONICLES</span>
        </div>
      </section>

      {/* SECTION 12: WEEKLY EDITORIAL SPREAD */}
      <section className={styles.weeklyEditorialSpreadSection}>
        <div className={styles.sectionHeaderLabel}>WEEKLY EDITORIAL</div>
        <div className={styles.weeklyLargeBlocksGrid}>
          {[
            { id: "STORY 01", title: "The Subterranean Extraction Ledgers", description: "Unveiling diamond provenance tracking from craton depths up to vault processing pipelines." },
            { id: "STORY 02", title: "Reframing Art Deco Proportions", description: "How modern spatial workflows reuse historical 1930 layout matrices without looking dated." },
            { id: "STORY 03", title: "The Chemistry of True Rose Alloys", description: "Analyzing copper degradation and color preservation tracks inside fine wedding setups." }
          ].map((story, i) => (
            <div key={i} className={styles.weeklyMagazineBlock}>
              <div className={styles.weeklyBlockImageFrame} />
              <div className={styles.weeklyBlockMetaText}>
                <span className={styles.weeklyBlockId}>{story.id}</span>
                <h4>{story.title}</h4>
                <p>{story.description}</p>
                <span className={styles.weeklyBlockActionInline}>ACCESS MANUSCRIPT →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 13: THE HOUSE NEWSLETTER INFRASTRUCTURE */}
      <section className={styles.houseNewsletterSection}>
        <div className={styles.newsletterPolishedEnclosure}>
          <h3>Become Part of the House</h3>
          <p>Receive our weekly luxury stories, unedited workshop journals, and priority access configurations directly within your private communication channel.</p>
          <form className={styles.newsletterInputFormLayout} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="ENTER YOUR EMAIL PATH" className={styles.luxeFormInputField} required />
            <button type="submit" className={styles.luxeFormSubmitActionBtn}>SUBSCRIBE TO CHRONICLES</button>
          </form>
        </div>
      </section>

    </div>
  );
}