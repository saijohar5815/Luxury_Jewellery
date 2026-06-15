"use client";

import React, { useState } from 'react';
import styles from './JewelryGuide.module.css';

// Importing external data structure and Interface
import { MAIN_GUIDE_CARDS, GuideCard } from '../../../data/guide'; 

const CERTIFICATIONS = [
  { name: "BIS Hallmark", authority: "Bureau of Indian Standards", desc: "Legal verification of precious metal fineness and alloy trace integrity.", icon: "⚜️" },
  { name: "GIA Certificate", authority: "Gemological Institute of America", desc: "The ultimate global standard in scientific diamond validation and grading precision.", icon: "💎" },
  { name: "IGI Diamond Report", authority: "International Gemological Institute", desc: "Independent multi-faceted criteria charting for luxury stone identification.", icon: "📜" },
  { name: "SGL Laboratory Verification", authority: "Solitaire Gemological Laboratories", desc: "Advanced laser spectroscopic scanning protecting precious stone history.", icon: "🔬" }
];

export default function LuxuryJewelleryGuide() {
  // --- UI States ---
  const [activeGoldKarats, setActiveGoldKarats] = useState<string>("24K");
  const [activeDiamondFact, setActiveDiamondFact] = useState<string>("Cut");
  const [activeStyleTab, setActiveStyleTab] = useState<string>("Wedding");
  
  // --- Modal State ---

  // --- Ring Sizer States ---
  const [fingerDiameter, setFingerDiameter] = useState<number>(16.5);
  const [sizerRegion, setSizerRegion] = useState<string>("US");

  // --- Quiz States ---
  const [quizGender, setQuizGender] = useState<string>("Feminine");
  const [quizOccasion, setQuizOccasion] = useState<string>("Wedding");
  const [quizBudget, setQuizBudget] = useState<string>("High-End");
    const [activeModal, setActiveModal] = useState<GuideCard | null>(null);
  const calculatedSize = ((fingerDiameter * 3.14159) - (sizerRegion === "US" ? 30 : 20)).toFixed(1);

  return (
    <main className={styles.editorialContainer}>
      <div className={styles.shimmerAmbientLens} />
      <div className={styles.editorialLinenTexture} />

      <header className={styles.magazineHeader}>
        <div className={styles.headerMetaRow}>
          <span>ATELIER VAULT // ISSUE NO. IV</span>
          <span>ESTABLISHED 2026</span>
        </div>
        <div className={styles.mastheadDivider} />
        <span className={styles.editorialCategorySub}>THE ARCHIVAL MASTERY EDITION</span>
        <h1 className={styles.magazineMainTitle}>Jewellery Guide</h1>
        <p className={styles.magazineIntroParagraph}>
          Discover the Art of Choosing Timeless Pieces. An interactive, asymmetrical manual mapping precision gemology, metallurgical science, and structural composition curation.
        </p>
      </header>

      {/* 1. Asymmetrical Cards System Layout */}
      <section className={styles.editorialGridSection}>
        {MAIN_GUIDE_CARDS.map((card, idx) => (
          <div 
            key={card.id} 
            className={`${styles.magazineEditorialCard} ${idx % 3 === 0 ? styles.asymWideCard : ''}`}
          >
            <div className={styles.cardImageCanvas}>
              <img 
                src={card.image} 
                alt={card.title} 
                className={styles.editorialCardImage} 
                loading="lazy"
              />
              <div className={styles.goldShimmerOverlayTrack} />
            </div>
            
            <div className={styles.cardContentBody}>
              <span className={styles.cardSuperTag}>{card.tag}</span>
              <h3 className={styles.cardHeadingTitle}>{card.title}</h3>
              <p className={styles.cardParagraphDesc}>{card.description}</p>
              
              {card.bullets && (
                <ul className={styles.cardCustomBulletList}>
                  {card.bullets.map(b => <li key={b}>✔ {b}</li>)}
                </ul>
              )}
              
              {/* TRIGGER: Opens Modal with Card Data */}
              <button 
                className={styles.magazineReadMoreLink}
                onClick={() => setActiveModal(card)}
              >
                Read More <span className={styles.animArrow}>→</span>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* 2. Interactive Section: Diamond Wheel */}
      <section className={styles.interactiveWheelSection}>
        <div className={styles.splitLayoutEngine}>
          <div className={styles.wheelVisualColumn}>
            <div className={styles.kineticWheelTrack}>
              {["Cut", "Clarity", "Carat", "Color"].map((facet) => (
                <button
                  key={facet}
                  type="button"
                  className={`${styles.wheelQuadrantPill} ${styles[`pill-${facet}`]} ${activeDiamondFact === facet ? styles.wheelPillActive : ''}`}
                  onClick={() => setActiveDiamondFact(facet)}
                >
                  {facet}
                </button>
              ))}
              <div className={styles.centerCoreStoneBadge}>
                <span>DIAMOND</span>
              </div>
            </div>
          </div>
          
          <div className={styles.wheelContentTextColumn}>
            <span className={styles.sectionMiniLabel}>Gemological Wheel Core</span>
            <h2 className={styles.sectionMiddleTitle}>Diamond Technical Properties</h2>
            
            <div className={styles.dynamicWheelArticleBox}>
              {activeDiamondFact === "Cut" && (
                <div>
                  <h4>Proportional Symmetry Metrics</h4>
                  <p>The cut dictates an asset's mathematical light return. Precise alignment across crown facets prevents parallel leak patterns, preserving optimal inner structural fire and refraction stability.</p>
                </div>
              )}
              {activeDiamondFact === "Clarity" && (
                <div>
                  <h4>The Inclusion Matrix Structure</h4>
                  <p>Evaluating crystal crystallization history. Identifies localized microscopic internal feathering or carbon clouding fields from volcanic crystallization phases.</p>
                </div>
              )}
              {activeDiamondFact === "Color" && (
                <div>
                  <h4>Refractive Color Dispersion Ratios</h4>
                  <p>Tracing absence of light refraction traces. Ranging from perfectly color-neutral chemical structures down to saturated warm hues utilized in unique setting designs.</p>
                </div>
              )}
              {activeDiamondFact === "Carat" && (
                <div>
                  <h4>Mass Volumetric Density Calibration</h4>
                  <p>The standard index measuring pure physical mineral weight. Larger masses scale progressively higher due to deep extraction sourcing rarity matrices.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Metallurgy Matrix: Gold Guide */}
      <section className={styles.metallurgyComparativeSection}>
        <span className={styles.sectionMiniLabel}>Atomic Micro-Alloys</span>
        <h2 className={styles.sectionMiddleTitle}>The Gold Purity Index</h2>
        <p className={styles.sectionParagraphCenter}>Which premium variant should your portfolio accumulate?</p>

        <div className={styles.puritySelectionTrackRow}>
          {["24K", "22K", "18K", "14K"].map(karat => (
            <button
              key={karat}
              type="button"
              className={`${styles.karatToggleSelectorPill} ${activeGoldKarats === karat ? styles.karatPillActive : ''}`}
              onClick={() => setActiveGoldKarats(karat)}
            >
              {karat} Composition
            </button>
          ))}
        </div>

        <div className={styles.goldComparisonGlassDashboard}>
          <div className={styles.dashboardSplitHalf}>
            <div className={styles.alloyScaleVisualization}>
              <div 
                className={styles.purityGoldAlloyFill} 
                style={{ 
                  width: activeGoldKarats === "24K" ? "100%" : activeGoldKarats === "22K" ? "91.6%" : activeGoldKarats === "18K" ? "75%" : "58.3%" 
                }} 
              />
            </div>
            <span className={styles.visualBarCaptionLabel}>Gold Ingot Volume Content Density</span>
          </div>
          
          <div className={styles.dashboardSplitHalfText}>
            {activeGoldKarats === "24K" && (
              <div>
                <h3>99.9% Absolute Fine Gold</h3>
                <p>Pure liquid gold format untouched by base metal blends. Highly lustrous with rich deep golden tones, optimal for institutional asset vault preservation, though inherently soft for intricate prong claw architecture settings.</p>
              </div>
            )}
            {activeGoldKarats === "22K" && (
              <div>
                <h3>91.6% Fine Luxury Bullion Blend</h3>
                <p>The elite traditional setting standard. Blends premium structural gold volume with trace copper/silver additives to achieve perfect structural durability while locking in rich warmth values.</p>
              </div>
            )}
            {activeGoldKarats === "18K" && (
              <div>
                <h3>75.0% Fine Curation Composition</h3>
                <p>Optimal structural balanced standard engineered for premium fine jewelry lines. Possesses exceptional durability benchmarks protecting high-carat stone mountings, showing magnificent resistance profiles.</p>
              </div>
            )}
            {activeGoldKarats === "14K" && (
              <div>
                <h3>58.3% High Durable Technical Setting</h3>
                <p>Highly structurally resilient matrix profiles engineered specifically against continuous mechanical abrasion vector stresses. Ideal for delicate custom micro-pave wedding bands.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Anatomy Calibration Module: Ring Size Guide */}
      <section className={styles.ringSizerCalibrationSection}>
        <div className={styles.splitLayoutEngine}>
          <div className={styles.sizerCalculatorCard}>
            <span className={styles.sectionMiniLabel}>Precision Sizing Matrix</span>
            <h3>Calibration Engine</h3>
            
            <div className={styles.calculatorInterfaceFormStack}>
              <div className={styles.inputFormGroupLabel}>
                <label>Adjust Finger Outer Diameter ({fingerDiameter}mm)</label>
                <input 
                  type="range" 
                  min="14" 
                  max="22" 
                  step="0.1"
                  value={fingerDiameter}
                  onChange={(e) => setFingerDiameter(parseFloat(e.target.value))}
                  className={styles.premiumRangeSliderBar}
                />
              </div>

              <div className={styles.inputFormGroupLabel}>
                <label>Target Calibration Scaling Region</label>
                <div className={styles.inlineRegionSelectorToggleDeck}>
                  {["US", "EU", "UK", "ASIA"].map(reg => (
                    <button
                      key={reg}
                      type="button"
                      className={`${styles.regionMiniPillBtn} ${sizerRegion === reg ? styles.regionPillActive : ''}`}
                      onClick={() => setSizerRegion(reg)}
                    >
                      {reg} Region
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.calculatedResultDisplayDashboard}>
              <span className={styles.calcSubLabelTitle}>Recommended Scale Target</span>
              <div className={styles.giantCalculatedSizeNumber}>
                {calculatedSize} <span className={styles.sizeRegionSubLabel}>({sizerRegion})</span>
              </div>
            </div>
          </div>

          <div className={styles.sizerVisualRepresentationAperture}>
            <div 
              className={styles.dynamicSizerCalibratedCircleVector}
              style={{ width: `${fingerDiameter * 12}px`, height: `${fingerDiameter * 12}px` }}
            >
              <div className={styles.internalDiameterLineMeasure}>
                <span>{fingerDiameter} mm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Linear Maintenance Protocols Roadmap */}
      <section className={styles.careAssetRoadmapSection}>
        <span className={styles.sectionMiniLabel}>Asset Care Procedures</span>
        <h2 className={styles.sectionMiddleTitle}>Maintenance Protocols</h2>
        
        <div className={styles.horizontalRoadmapTimelineTrack}>
          {[
            { step: "01", title: "Store Properly", desc: "Isolate individual items inside silk lining cases to halt micro-abrasion friction contact loops." },
            { step: "02", title: "Clean Regularly", desc: "Bathe settings gently utilizing neutral solutions mixed into pure micro-filtered warm water grids." },
            { step: "03", title: "Avoid Chemicals", desc: "Eradicate direct interface exposures hitting organic compositions via fragrances and styling compounds." },
            { step: "04", title: "Professional Cleaning", desc: "Execute annual ultrasonic acoustic wave diagnostics and structural claw evaluation matrices." }
          ].map((item, index) => (
            <div key={item.step} className={styles.timelineHorizontalStepCard}>
              <div className={styles.stepCounterBadgeHeader}>{item.step}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
              {index < 3 && <div className={styles.connectingLineVectorWire} />}
            </div>
          ))}
        </div>
      </section>

      {/* 6. Curated Ensemble Vignettes: Styling Guide */}
      <section className={styles.editorialStylingCurationSection}>
        <span className={styles.sectionMiniLabel}>Ensemble Vignettes</span>
        <h2 className={styles.sectionMiddleTitle}>The Curation Styling Guide</h2>
        
        <div className={styles.styleSelectorToggleTrackPills}>
          {["Office Wear", "Party Wear", "Wedding", "Festive", "Daily Wear"].map(styleTab => (
            <button
              key={styleTab}
              type="button"
              className={`${styles.stylingTabLinkBtn} ${activeStyleTab === styleTab ? styles.stylingTabActive : ''}`}
              onClick={() => setActiveStyleTab(styleTab)}
            >
              {styleTab} Architecture
            </button>
          ))}
        </div>

        <div className={styles.stylingDisplayPremiumShowcaseCanvas}>
          <div className={styles.abstractGraphicAestheticCanvasBg}>
            <img 
              src={
                activeStyleTab === "Office Wear" ? "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=800&auto=format&fit=crop" :
                activeStyleTab === "Party Wear"  ? "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop" :
                activeStyleTab === "Wedding"     ? "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800&auto=format&fit=crop" :
                activeStyleTab === "Festive"     ? "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800&auto=format&fit=crop" :
                /* Default Daily Wear Asset */     "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop"
              } 
              alt={`${activeStyleTab} Curation View`}
              className={styles.stylingVignetteImage}
            />
            <div className={styles.vignetteOverlayTint} />
          </div>
          
          <div className={styles.stylingNarrativeContextPanelBox}>
            <h3>Curating for {activeStyleTab} Contexts</h3>
            <div className={styles.stylingDecorativeDottedLineDivider} />
            
            {activeStyleTab === "Office Wear" && <p>Incorporate structural lines. Focus on ultra-clean geometric studs alongside minimalist structural cable necklaces that slide flush underneath traditional collar tailoring without conflicting with wrist movements.</p>}
            {activeStyleTab === "Party Wear" && <p>Introduce sculptural dimension profiles. Elevate drop-line shoulder chains with modern multi-faceted chandelier elements that amplify dynamic ambient room light shifts beautifully on movement paths.</p>}
            {activeStyleTab === "Wedding" && <p>The absolute pinnacle configuration matrix. Layer high-density heritage setting work with graduated collar strings that anchor balance fields seamlessly across traditional necklines.</p>}
            {activeStyleTab === "Festive" && <p>Vibrant color refraction integration setups. Interlock classic structural gold chokers backed with custom channel-set colored stones to generate deep festive cultural aesthetic resonance.</p>}
            {activeStyleTab === "Daily Wear" && <p>Ergonomic low-profile seamless designs. Emphasize light, comfort-fit comfort bands and low-set claw stud variations built explicitly to withstand standard friction points without compromising setting stability.</p>}
          </div>
        </div>
      </section>

      {/* 7. Strategic Acquisitions Chrono: Buying Guide */}
      <section className={styles.buyingGuideChronologySection}>
        <span className={styles.sectionMiniLabel}>Strategic Acquisitions Chronology</span>
        <h2 className={styles.sectionMiddleTitle}>The Acquisition Process</h2>
        
        <div className={styles.verticalChronoTimelineTrackContainer}>
          {[
            { phase: "Budget Formulation", content: "Isolate asset capital boundaries prior to market engagement calculations." },
            { phase: "Metallurgy Profiling", content: "Fix base structural metals matching skin tone tones and wear resistance profiles." },
            { phase: "Gemstone Selection Analysis", content: "Isolate central crystal varieties using certified carat and facet mapping records." },
            { phase: "Occasion Adaptive Sculpting", content: "Conform silhouette sizing layouts precisely to matching occasion environments." },
            { phase: "Laboratory Certification Verification", content: "Demand independent validation data sheets matching structural serial codes perfectly." },
            { phase: "Final Secured Purchase Locked", content: "Final allocation transfer safely recorded with lifetime title insurance backing structures." }
          ].map((chrono, idx) => (
            <div key={chrono.phase} className={styles.chronoVerticalRowNodeElement}>
              <div className={styles.chronoLeftCounterColumnField}>
                <span className={styles.chronoIndexNumber}>PHASE_0{idx + 1}</span>
              </div>
              <div className={styles.chronoCenterNodeBeadDotTrack}>
                <div className={styles.beadCircleCoreDot} />
                {idx < 5 && <div className={styles.beadConnectingLineDownwardWire} />}
              </div>
              <div className={styles.chronoRightContentDetailTextBox}>
                <h4>{chrono.phase}</h4>
                <p>{chrono.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Elite Credentials Board: Certification Guide */}
      <section className={styles.authorityCredentialsCertificatesSection}>
        <span className={styles.sectionMiniLabel}>Elite Credentials Board</span>
        <h2 className={styles.sectionMiddleTitle}>Global Verification Standards</h2>
        
        <div className={styles.certificationAuthorityFlexGridDeck}>
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className={styles.authorityVerificationGlassCard}>
              <div className={styles.authorityIconBadgeEmblem}>{cert.icon}</div>
              <h3>{cert.name}</h3>
              <span className={styles.issuingAuthoritySubTextLabel}>{cert.authority}</span>
              <div className={styles.certCardDividerLine} />
              <p>{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Interactive Recommendation Matrix Engine */}
      <section className={styles.recommendationEngineInteractiveSection}>
        <div className={styles.glassmorphicInteractiveQuizControlPanelDeck}>
          <div className={styles.quizPanelHeaderMetaText}>
            <span className={styles.panelTitleCapsLabel}>Atelier Smart Recommendation Filter Matrix</span>
            <h2>Find Your Perfect Jewellery Pieces</h2>
          </div>

          <div className={styles.quizConfigurationOptionsWrapperStack}>
            <div className={styles.quizStepBlockControlRow}>
              <span>1. Curated Silhouette Gender Structure</span>
              <div className={styles.quizPillSelectionToggleRowTrack}>
                {["Feminine", "Masculine", "Gender-Neutral"].map(g => (
                  <button 
                    key={g} type="button" 
                    className={`${styles.quizSelectionOptionPillButton} ${quizGender === g ? styles.quizPillActiveState : ''}`}
                    onClick={() => setQuizGender(g)}
                  >
                    {g} Style Lines
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.quizStepBlockControlRow}>
              <span>2. Intended Occasion Environment</span>
              <div className={styles.quizPillSelectionToggleRowTrack}>
                {["Wedding", "Gala/Festive", "Daily Curation"].map(o => (
                  <button 
                    key={o} type="button" 
                    className={`${styles.quizSelectionOptionPillButton} ${quizOccasion === o ? styles.quizPillActiveState : ''}`}
                    onClick={() => setQuizOccasion(o)}
                  >
                    {o} Layouts
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.quizStepBlockControlRow}>
              <span>3. Portfolio Allocation Budget Tier</span>
              <div className={styles.quizPillSelectionToggleRowTrack}>
                {["Pragmatic Luxury", "High-End", "Bespoke Archive"].map(b => (
                  <button 
                    key={b} type="button" 
                    className={`${styles.quizSelectionOptionPillButton} ${quizBudget === b ? styles.quizPillActiveState : ''}`}
                    onClick={() => setQuizBudget(b)}
                  >
                    {b} Tier
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.quizAutomatedOutputRecommendationBoxResult}>
            <span className={styles.outputSystemTagLabel}>SYSTEM MATCHED ENGINE RESPONSE</span>
            <h3>The Atelier Signature Recommendation</h3>
            <div className={styles.outputMatchingAttributesRowTags}>
              <span>{quizGender} Profile</span>
              <span>{quizOccasion} Setting</span>
              <span>{quizBudget} Segment</span>
            </div>
            
            <p className={styles.outputGeneratedNarrativeParagraph}>
              Based on your selection parameters, we suggest prioritizing a specialized **18K yellow gold setting mounting holding a precision round brilliant stone certified by the GIA**. This particular structural balance achieves optimal visual asset preservation while perfectly matching your configured lifestyle goals.
            </p>
            
            <button 
              type="button" 
              className={styles.lockAcquisitionConsultationBtnTrigger}
              onClick={() => alert(`Sourcing consultation route locked for: ${quizGender} / ${quizOccasion} / ${quizBudget}`)}
            >
              Initialize Procurement Strategy <span className={styles.btnArrowIconVector}>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* 10. MODAL: Information Message Box */}
            {activeModal && (
        <div className={styles.modalOverlay} onClick={() => setActiveModal(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* Close button inside the card, top right */}
            <button className={styles.closeBtn} onClick={() => setActiveModal(null)}>×</button>
            
            <span className={styles.modalSuperTag}>{activeModal.tag}</span>
            <h2 className={styles.modalTitle}>{activeModal.title}</h2>
            <div className={styles.modalDivider} />
            <p className={styles.modalText}>{activeModal.modalContent}</p>
            
            <button 
              className={styles.modalActionBtn} 
              onClick={() => setActiveModal(null)}
            >
              Close Consultation
            </button>
          </div>
        </div> 
    )}
    
    </main>
  );
}