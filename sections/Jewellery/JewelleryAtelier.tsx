"use client";

import React, { useState } from 'react';
import styles from './JewelleryAtelier.module.css';

// Type Framework Definitions
type MetalType = 'gold' | 'diamond' | 'platinum' | 'silver';
type StyleOccasion = 'office' | 'party' | 'wedding' | 'festival' | 'datenight';

interface MetalContent {
  grade: string;
  verdict: string;
  trend: string;
  accentColor: string;
}

export default function JewelleryAtelier() {
  // Section State Management
  const [activeMetal, setActiveMetal] = useState<MetalType>('gold');
  const [activeOccasion, setActiveOccasion] = useState<StyleOccasion>('wedding');
  const [activeCareTab, setActiveCareTab] = useState<number>(0);
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});

  // Interactive Jewellery Advisor State Engine
  const [advisorGender, setAdvisorGender] = useState<string>('female');
  const [advisorOccasion, setAdvisorOccasion] = useState<string>('wedding');
  const [advisorBudget, setAdvisorBudget] = useState<string>('1l');
  const [advisorStyle, setAdvisorStyle] = useState<string>('luxury');
  const [showAdvisorResult, setShowAdvisorResult] = useState<boolean>(false);

  // Virtual Dress AI Uplink Mock State
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [aiRecommendation, setAiRecommendation] = useState<string | null>(null);

  // Static Data Configurations
  const metalData: Record<MetalType, MetalContent> = {
    gold: { grade: '22K & 18K Pure Alloy', verdict: 'Best for Custom Fine Heritage Jewellery & Generational Wealth.', trend: 'Layered Chokers & Geometric Statement Cuffs', accentColor: '#C7A15A' },
    diamond: { grade: 'VVS1, D-Flawless Brilliant Cut', verdict: 'Ultimate High-Dispersive Luxury. Certified Conflict-Free Natural Formations.', trend: 'Asymmetrical Drop Necklaces & Illusion Studs', accentColor: '#E2E8F0' },
    platinum: { grade: '950 Highly Rare Structural Element', verdict: 'Elite Minimal Aesthetic. Naturally White, Dense, and Resilient to Everyday Wearing.', trend: 'Seamless Tensile Bands & Tension Ring Mounts', accentColor: '#A1A1AA' },
    silver: { grade: '925 Sterling Integrity Component', verdict: 'Contemporary Layering Fluidity. Premium Anti-Tarnish Formulations.', trend: 'Bold Textured Collars & Stackable Heavy Rings', accentColor: '#D4D4D8' }
  };

  const currentMetal = metalData[activeMetal];

  const toggleFaq = (index: number) => {
    setFaqOpen(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const triggerAiAnalysis = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setAiRecommendation('Emerald Cut Diamond Pendant paired with Clean-Line Platinum Drops to balance your neckline composition.');
    }, 1200);
  };

  return (
    <div className={styles.atelierMasterContainer}>
      
      {/* SECTION 1: HERO (THE ATELIER OVERLAY) */}
      <section className={styles.heroSectionViewport}>
        <div className={styles.heroGlintAtmosphere}>
          <div className={styles.ambientShiftingBeam} />
          <div className={styles.driftingDustParticleCanvas} />
        </div>
        <div className={styles.heroLayoutShield}>
          <span className={styles.editorialSubLabel}>LEARN • EXPLORE • DISCOVER</span>
          <h1 className={styles.heroMainTypography}>THE JEWELLERY ATELIER</h1>
          <p className={styles.heroConceptParagraph}>Everything You Need to Master Before Securing Your Next Masterpiece.</p>
          <button 
            className={styles.luxuryButtonChased}
            onClick={() => document.getElementById('learning-hub')?.scrollIntoView({ behavior: 'smooth' })}
          >
            START EXPLORING
          </button>
        </div>
        <div className={styles.downwardScrollAnchor}>↓</div>
      </section>

      {/* SECTION 2: INTENT PATHWAYS */}
      <section className={styles.intentMatrixSection}>
        <div className={styles.centeredAtelierHeader}>
          <span className={styles.goldPrefix}>PREFERENCE CONFIGURATION</span>
          <h2>What are you looking for?</h2>
        </div>
        <div className={styles.intentCardLayoutGrid}>
          {[
            { title: 'Buying Fine Jewellery', desc: 'Mastering specifications, structural weights, and hallmark tracking frameworks.', tag: '💍 Foundational' },
            { title: 'The Diamond Dossier', desc: 'Unveiling the mathematics of light: Clarity, Carat metrics, and Cut execution paths.', tag: '💎 Precision' },
            { title: 'The Gold Standardization', desc: 'Understanding purity dynamics, alloy compositions, and market melt metrics.', tag: '✨ Patrimony' },
            { title: 'Artisanal Curated Gifting', desc: 'The elite manual to matching configurations based on legacy relationship indices.', tag: '🎁 Commemoration' },
            { title: 'The High Wedding Suite', desc: 'Synchronizing grand structural silhouettes with high-ceremony custom sets.', tag: '👰 Heritage' }
          ].map((item, i) => (
            <div key={i} className={styles.intentPerspectiveCard}>
              <div className={styles.cardInternalMeta}>
                <span className={styles.cardBadgeFloating}>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span className={styles.cardActionInlineTrigger}>Initialize Pathway →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE LEARNING HUB */}
      <section id="learning-hub" className={styles.learningHubSectionViewport}>
        <div className={styles.centeredAtelierHeader}>
          <span className={styles.goldPrefix}>DYNAMIC ANALYSIS SYSTEM</span>
          <h2>Interactive Learning Hub</h2>
        </div>
        <div className={styles.hubSplitControlMatrix}>
          <div className={styles.hubSelectorControlPane}>
            {(Object.keys(metalData) as MetalType[]).map((metal) => (
              <button
                key={metal}
                onClick={() => setActiveMetal(metal)}
                className={`${styles.hubSelectTabOption} ${activeMetal === metal ? styles.hubSelectTabActive : ''}`}
              >
                {metal.toUpperCase()}
              </button>
            ))}
          </div>
          <div className={styles.hubDynamicDisplayCard} style={{ '--local-accent': currentMetal.accentColor } as React.CSSProperties}>
            <span className={styles.displayPurityPill}>{currentMetal.grade}</span>
            <h3>Structural Core Behavior</h3>
            <p className={styles.hubCoreVerdict}>{currentMetal.verdict}</p>
            <div className={styles.trendSpotlightFrame}>
              <strong>Current Design Alignment Matrix:</strong>
              <p>{currentMetal.trend}</p>
            </div>
            <button className={styles.hubAcquisitionCtaLink}>LAUNCH ARCHIVE FRAMEWORK →</button>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPARATIVE ARCHITECTURE (APPLE STYLE) */}
      <section className={styles.appleComparativeSection}>
        <div className={styles.centeredAtelierHeader}>
          <span className={styles.goldPrefix}>METALLURGICAL COMPARISON</span>
          <h2>A Structural Matrix of Elite Metals</h2>
        </div>
        <div className={styles.appleStyleTripleGrid}>
          <div className={styles.appleCompareColumn}>
            <h3>Gold</h3>
            <div className={styles.metricRowEntry}><span className={styles.metricTag}>Aesthetic</span><strong>✨ Traditional</strong></div>
            <div className={styles.metricRowEntry}><span className={styles.metricTag}>Liquidity Route</span><strong>Wealth Pillar</strong></div>
            <div className={styles.metricRowEntry}><span className={styles.metricTag}>Core Match</span><strong>High Ceremony</strong></div>
          </div>
          <div className={styles.appleCompareColumn}>
            <h3>Diamond</h3>
            <div className={styles.metricRowEntry}><span className={styles.metricTag}>Aesthetic</span><strong>💎 Radiance Focus</strong></div>
            <div className={styles.metricRowEntry}><span className={styles.metricTag}>Liquidity Route</span><strong>Premium Prestige</strong></div>
            <div className={styles.metricRowEntry}><span className={styles.metricTag}>Core Match</span><strong>Modern Sovereign</strong></div>
          </div>
          <div className={styles.appleCompareColumn}>
            <h3>Platinum</h3>
            <div className={styles.metricRowEntry}><span className={styles.metricTag}>Aesthetic</span><strong>🤍 Architectural Minimal</strong></div>
            <div className={styles.metricRowEntry}><span className={styles.metricTag}>Liquidity Route</span><strong>Exclusive Asset</strong></div>
            <div className={styles.metricRowEntry}><span className={styles.metricTag}>Core Match</span><strong>Contemporary Elite</strong></div>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE FEATURE: INTELLIGENT JEWELLERY ADVISOR */}
      <section className={styles.intelligentAdvisorSection}>
        <div className={styles.advisorModuleGlassFrame}>
          <div className={styles.centeredAtelierHeader} style={{ marginBottom: '3rem' }}>
            <span className={styles.goldPrefix}>AUTOMATED GEMOLOGICAL INSIGHT</span>
            <h2>The Intelligent Jewellery Advisor</h2>
            <p>Bypassing complex filtered search queries to parse and output customized recommendation paths instantly.</p>
          </div>

          <div className={styles.advisorInputGridRows}>
            <div className={styles.advisorInputBlock}>
              <label>Target Demography Matrix</label>
              <div className={styles.advisorToggleRow}>
                {['female', 'male'].map(g => (
                  <button key={g} onClick={() => setAdvisorGender(g)} className={advisorGender === g ? styles.toggleActiveBtn : ''}>{g.toUpperCase()}</button>
                ))}
              </div>
            </div>

            <div className={styles.advisorInputBlock}>
              <label>Ceremonial Context Index</label>
              <div className={styles.advisorToggleRow}>
                {['wedding', 'party', 'office'].map(o => (
                  <button key={o} onClick={() => setAdvisorOccasion(o)} className={advisorOccasion === o ? styles.toggleActiveBtn : ''}>{o.toUpperCase()}</button>
                ))}
              </div>
            </div>

            <div className={styles.advisorInputBlock}>
              <label>Capital Allocation Vector</label>
              <div className={styles.advisorToggleRow}>
                {['25k', '50k', '1l+'].map(b => (
                  <button key={b} onClick={() => setAdvisorBudget(b)} className={advisorBudget === b ? styles.toggleActiveBtn : ''}>₹{b.toUpperCase()}</button>
                ))}
              </div>
            </div>

            <div className={styles.advisorInputBlock}>
              <label>Aesthetic DNA Vector</label>
              <div className={styles.advisorToggleRow}>
                {['traditional', 'modern', 'luxury'].map(s => (
                  <button key={s} onClick={() => setAdvisorStyle(s)} className={advisorStyle === s ? styles.toggleActiveBtn : ''}>{s.toUpperCase()}</button>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.advisorExecutionCenter}>
            <button className={styles.advisorSubmitActionExecute} onClick={() => setShowAdvisorResult(true)}>
              COMPILE PERSONALIZED MATCH INDEX
            </button>
            {showAdvisorResult && (
              <div className={styles.advisorDynamicOutputResultFrame}>
                <h4>Your Tailored Composition Matrix:</h4>
                <p>Based on parameters [{advisorGender} • {advisorOccasion} • {advisorBudget} • {advisorStyle}], we recommend an optimized <strong>18K Modular Diamond Choker String</strong> with an integrated central brilliant rosette cluster layout path.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 6: STYLE ATELIER STUDIO */}
      <section className={styles.styleStudioSection}>
        <div className={styles.centeredAtelierHeader}>
          <span className={styles.goldPrefix}>VIRTUAL DESIGN OVERLAYS</span>
          <h2>The Style Studio</h2>
        </div>
        <div className={styles.styleStudioWorkspace}>
          <div className={styles.styleStudioSelectorStrip}>
            {(['office', 'party', 'wedding', 'festival', 'datenight'] as StyleOccasion[]).map((occ) => (
              <button
                key={occ}
                onClick={() => setActiveOccasion(occ)}
                className={`${styles.styleStudioTab} ${activeOccasion === occ ? styles.styleStudioTabActive : ''}`}
              >
                {occ.toUpperCase()}
              </button>
            ))}
          </div>
          <div className={styles.styleStudioActiveCouturePlate}>
            <div className={styles.coutureModelSilhouette}>
              <div className={styles.dynamicJewelleryOverlayShadow} key={activeOccasion}>
                <span className={styles.overlayItemMarkerText}>ACTIVE SELECTION: {activeOccasion.toUpperCase()} ENSEMBLE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: LUXURY MAINTENANCE STUDIO */}
      <section className={styles.careStudioSection}>
        <div className={styles.centeredAtelierHeader}>
          <span className={styles.goldPrefix}>PRESERVATION PARADIGMS</span>
          <h2>Jewellery Care Studio</h2>
        </div>
        <div className={styles.careQuadLayoutGrid}>
          {[
            { label: 'Clean', details: 'Utilize specialized micro-bristle applicators and non-ionic surfactant baths to clear particulate shadow films.' },
            { label: 'Store', details: 'Isolate individual pieces inside custom sulfur-free suede anti-tarnish storage containment chambers.' },
            { label: 'Polish', details: 'Schedule bi-annual mechanical ultrasonic surface restoration processing to clear superficial abrasions.' },
            { label: 'Protect', details: 'Isolate high-purity mounts from chemical exposure, surface impact vectors, and heavy direct thermal loads.' }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={`${styles.careLuxuryActionCard} ${activeCareTab === idx ? styles.careCardSelectedActive : ''}`}
              onMouseEnter={() => setActiveCareTab(idx)}
            >
              <span className={styles.careIndexMarker}>0{idx + 1}</span>
              <h3>{item.label}</h3>
              <p>{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: CHRONOLOGICAL ARCHITECTURE TIMELINE */}
      <section className={styles.chronologicalTimelineSection}>
        <div className={styles.centeredAtelierHeader}>
          <span className={styles.goldPrefix}>CRAFT MANIFEST LIFECYCLE</span>
          <h2>The Journey of Jewellery</h2>
        </div>
        <div className={styles.horizontalScrollingTimelineTrack}>
          {[
            { stage: 'Design Conceptualization', data: 'Bespoke hand-drawn matrix ideation mapped onto advanced structural 3D CAD renders.' },
            { stage: 'Metallurgical Crafting', data: 'Master goldsmiths cast, assemble, and verify structural tension balance tolerances.' },
            { stage: 'High-Dispersive Polishing', data: 'Multi-stage abrasive finishing sequences to bring internal surface reflections to clear metrics.' },
            { stage: 'Gemological Certification', data: 'Independent third-party laboratory analysis verifying all source-provenance ledgers.' },
            { stage: 'Atelier Packaging Securement', data: 'Custom timber cases wrapped inside oxygen-purged presentation shielding layouts.' },
            { stage: 'High-Value Vault Delivery', desc: 'Secure armor transport handoff directly executed into client private premises.' }
          ].map((node, i) => (
            <div key={i} className={styles.timelineChronologyNode}>
              <div className={styles.nodePointMarkerRow}><div className={styles.nodePointCoreDot} /></div>
              <h4>{node.stage}</h4>
              <p>{node.data || node.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 9: COUTURE AI MATCH LAB */}
      <section className={styles.aiMatchSection}>
        <div className={styles.aiMatchInternalSplitFrame}>
          <div className={styles.aiMatchPromoPanel}>
            <span className={styles.goldPrefix}>VISION RECOGNITION</span>
            <h3>Match Your Outfit Composition</h3>
            <p>Upload a photograph of your designer apparel layout matrix. Our custom neural configuration engine parses color spectrum values, neckline structures, and weave geometry to deliver optimal complementary pairings.</p>
          </div>
          <div className={styles.aiMatchUplinkInteractionPanel}>
            <div className={styles.virtualDropZoneTargetFrame}>
              <div className={styles.dropZoneInternalGraphics}>✦</div>
              <p>Position Image File Profile or Click to Target Archive</p>
              <button className={styles.uploadTriggerActionButton} onClick={triggerAiAnalysis} disabled={isUploading}>
                {isUploading ? 'PARSING APPRAISAL MATRICES...' : 'INITIALIZE VIRTUAL UPLINK'}
              </button>
            </div>
            {aiRecommendation && (
              <div className={styles.aiResponseDisplayPlaque}>
                <h5>AI Structural Recommendation Alignment:</h5>
                <p>{aiRecommendation}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 10: INSIDER SECRETS METRIC CARDS */}
      <section className={styles.insiderSecretsSection}>
        <div className={styles.centeredAtelierHeader}>
          <span className={styles.goldPrefix}>GEMOLOGICAL INSIDER FILES</span>
          <h2>Atelier Expert Secrets</h2>
        </div>
        <div className={styles.secretsTripleCardLayout}>
          {[
            { metric: 'The Diamond Quality Delta', context: 'Prioritize cut geometry metrics above absolute carat mass rankings. A perfectly proportioned shallow diamond maximizes light return far superior to deep, unpolished mass metrics.' },
            { metric: 'Ceremonial Setting Configurations', context: 'For structural sets intended for heavy usage, confirm that claw mounts feature integrated inner-rim double prongs. This secures central emerald steps far safer than micro-wires.' },
            { metric: 'Capital Wealth Storage Paradigms', context: 'When targeting structural pieces as wealth hedges, isolate your acquisitions to 22K certified gold bars or D-color loose diamonds. Avoid heavy modern polymer inclusions.' }
          ].map((secret, idx) => (
            <div key={idx} className={styles.secretLuxuryFilingCard}>
              <div className={styles.secretCardStarCluster}>✦ ✦ ✦</div>
              <h4>{secret.metric}</h4>
              <p>{secret.context}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 11: ATELIER COMPREHENSIVE ACCORDION FAQ */}
      <section className={styles.atelierFaqAccordionSection}>
        <div className={styles.centeredAtelierHeader}>
          <span className={styles.goldPrefix}>COMPLIANCE INFRASTRUCTURE</span>
          <h2>Luxury Architecture FAQ</h2>
        </div>
        <div className={styles.faqStructuralStackLayout}>
          {[
            { q: 'Which gold alloy selection yields optimal structural durability limits?', a: 'For heavy fine stone integration, 18K gold presents the ideal hardness profile due to its 25% structural alloy enrichment. For pure gold heirlooms without micro-pave parameters, 22K gold remains the traditional global standard.' },
            { q: 'How are house source diamond certifications permanently mapped to individual stones?', a: 'Every natural diamond above 0.3 carats carries a permanent, microscopic laser inscription on its outer girdle. This identifier maps directly back to its GIA or IGI digital ledger system profile.' },
            { q: 'What protocols should be maintained for daily wear fine jewelry cleaning regimens?', a: 'Use a solution of mild, phosphate-free cleaning fluid combined with purified lukewarm water. Submerge pieces for ten minutes, then clear remaining film layers using a microfiber applicator brush before drying.' },
            { q: 'Can custom commission structures be refabricated or traded at a future milestone date?', a: 'Yes. Our house framework includes a guaranteed lifetime value alignment system, providing full gold weight trade value mapping when upgrading historical pieces into contemporary configurations.' }
          ].map((item, idx) => (
            <div key={idx} className={styles.faqAccordionComponentItem}>
              <button className={styles.faqInteractiveHeaderTrigger} onClick={() => toggleFaq(idx)}>
                <span>{item.q}</span>
                <span className={styles.faqInteractiveStatusIndicator}>{faqOpen[idx] ? '−' : '+'}</span>
              </button>
              <div className={`${styles.faqAccordionContentSliderPane} ${faqOpen[idx] ? styles.faqPaneExpandedActive : ''}`}>
                <div className={styles.faqContentInnerPaddingLayout}><p>{item.a}</p></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 12: FINAL CLOSING CTA BRAND CONSOLE */}
      <section className={styles.finalClosingCtaSection}>
        <div className={styles.finalClosingPolishedInnerShield}>
          <span className={styles.goldPrefix}>UNRESOLVED CONFIGURATION CONCERNS</span>
          <h2>Still Navigating Paths?</h2>
          <p>Connect with a senior gemological consultant for an uninterrupted, private evaluation session within our physical viewing vaults.</p>
          <button className={styles.ultimateConsoleActionExecuteButton}>BOOK PRIVATE ATELIER CONSULTATION</button>
        </div>
      </section>

    </div>
  );
}