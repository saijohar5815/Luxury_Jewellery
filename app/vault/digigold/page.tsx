"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './DigiGold.module.css';
import { GOLD_TIERS } from '@/data/digigold';

export default function DigiGoldPage() {
  const [selectedTier, setSelectedTier] = useState<string>("tier-24k");
  const [weight, setWeight] = useState<number>(10); // grams
  const [livePricePerGram, setLivePricePerGram] = useState<number>(74.25);
  const [isFluctuating, setIsFluctuating] = useState<boolean>(false);

  // High-End Animation Simulation: Live ticker price pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFluctuating(true);
      setLivePricePerGram(prev => {
        const microShift = (Math.random() - 0.5) * 0.12;
        return parseFloat((prev + microShift).toFixed(2));
      });
      setTimeout(() => setIsFluctuating(false), 800);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const activeTierObj = GOLD_TIERS.find(t => t.id === selectedTier);
  const premiumAdjustment = activeTierObj ? (livePricePerGram * (activeTierObj.premiumPct / 100)) : 0;
  const finalPricePerGram = livePricePerGram + premiumAdjustment;
  const totalInvestment = parseFloat((weight * finalPricePerGram).toFixed(2));

  return (
    <main className={styles.goldCanvas}>
      {/* Liquid Iridescent Ambient Background Layering */}
      <div className={styles.liquidGoldOrb} />
      <div className={styles.metallicDustOverlay} />

      {/* Directory Back-Step Header */}
      <div className={styles.navBar}>
        <Link href="/" className={styles.directoryLink}>
          <span className={styles.arrowBack}>←</span> Portfolio Dashboard
        </Link>
        <div className={styles.liveTickerContainer}>
          <span className={styles.tickerPulseDot} />
          <span className={styles.tickerLabel}>Live Zurich Feed: </span>
          <span className={`${styles.tickerValue} ${isFluctuating ? styles.pulsePriceText : ''}`}>
            ${livePricePerGram.toFixed(2)}/g
          </span>
        </div>
      </div>

      <div className={styles.masterContentLayout}>
        {/* Left Interactive Panel: The Kinetic Weight Scaler */}
        <div className={styles.controlModule}>
          <span className={styles.goldSubcap}>Fractional Vaulting Engine</span>
          <h1 className={styles.mainTitle}>Accumulate Digital Gold</h1>
          <p className={styles.narrativeIntro}>
            Instantly acquire certified, liquid physically backed institutional gold bars. Allocate weight parameters below in real-time.
          </p>

          {/* Interactive Slide Control Mechanism */}
          <div className={styles.rangeScaleContainer}>
            <div className={styles.rangeHeaderRow}>
              <span className={styles.scaleMinMax}>1g</span>
              <div className={styles.centralDisplayBadge}>
                <span className={styles.weightNumber}>{weight}</span>
                <span className={styles.weightUnit}>Grams Selected</span>
              </div>
              <span className={styles.scaleMinMax}>250g</span>
            </div>
            
            <input 
              type="range" 
              min="1" 
              max="250" 
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
              className={styles.fluidKineticSlider}
            />
            
            {/* Rapid Preset Selector Pills */}
            <div className={styles.presetRow}>
              {[5, 10, 50, 100].map((presetAmt) => (
                <button
                  key={presetAmt}
                  type="button"
                  className={`${styles.presetPill} ${weight === presetAmt ? styles.activePresetPill : ''}`}
                  onClick={() => setWeight(presetAmt)}
                >
                  +{presetAmt}g
                </button>
              ))}
            </div>
          </div>

          {/* Tier Architecture Selector Grid */}
          <div className={styles.tierGridContainer}>
            <h4 className={styles.sectionLabel}>Select Minting Standard</h4>
            <div className={styles.tierSelectorGrid}>
              {GOLD_TIERS.map((tier) => {
                const isSelected = selectedTier === tier.id;
                return (
                  <div
                    key={tier.id}
                    className={`${styles.tierCard} ${isSelected ? styles.tierCardActive : ''}`}
                    onClick={() => setSelectedTier(tier.id)}
                  >
                    <span className={styles.tierPurityBadge}>{tier.purity}</span>
                    <h5 className={styles.tierTitle}>{tier.title}</h5>
                    <p className={styles.tierDesc}>{tier.description}</p>
                    <div className={styles.tierActiveIndicatorBorder} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Panel: Stunning Prism Receipt Mirror Display */}
        <div className={styles.receiptMirrorSection}>
          <div className={styles.prismMirrorGlass}>
            <div className={styles.glassReflectionGlare} />
            
            <div className={styles.mirrorHeader}>
              <span className={styles.mirrorLabel}>Secure Purchase Matrix</span>
              <div className={styles.vaultIdBadge}>VAULT-SECURE // 256</div>
            </div>

            {/* Dynamic Visual Scale Display Area */}
            <div className={styles.weightVisualizationBox}>
              <div className={styles.geometricGoldBarStack}>
                {Array.from({ length: Math.min(Math.ceil(weight / 20), 5) }).map((_, idx) => (
                  <div 
                    key={idx} 
                    className={styles.renderedGoldInvenBar} 
                    style={{ 
                      transform: `scale(${1 - idx * 0.05}) translateY(${idx * -6}px)`,
                      opacity: 1 - idx * 0.15,
                      animationDelay: `${idx * 0.1}s`
                    }} 
                  />
                ))}
              </div>
              <span className={styles.visWeightSub}>Physical Cuboid Volume Representation</span>
            </div>

            {/* Itemized Calculation Ledger */}
            <div className={styles.calculationLedgerStack}>
              <div className={styles.ledgerRow}>
                <span className={styles.ledgerLabel}>Base Valuation ({weight}g)</span>
                <span className={styles.ledgerValue}>${(weight * livePricePerGram).toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
              </div>
              <div className={styles.ledgerRow}>
                <span className={styles.ledgerLabel}>Atelier Premium Mark</span>
                <span className={styles.ledgerValue}>
                  {premiumAdjustment > 0 ? `+$${(weight * premiumAdjustment).toFixed(2)}` : '0.00 (Waived)'}
                </span>
              </div>
              <div className={styles.ledgerRow}>
                <span className={styles.ledgerLabel}>Insurance & Auditing Fee</span>
                <span className={styles.ledgerValueGold}>Complimentary</span>
              </div>
              
              <div className={styles.ledgerDottedDivider} />
              
              <div className={styles.totalValuationRow}>
                <span className={styles.totalLabel}>Estimated Total Cost</span>
                <div className={styles.totalPriceWrapper}>
                  <span className={styles.totalCurrency}>USD</span>
                  <h2 className={styles.totalPriceAmount}>
                    ${totalInvestment.toLocaleString(undefined, {minimumFractionDigits: 2})}
                  </h2>
                </div>
              </div>
            </div>

            {/* Transaction Button Engine */}
            <button 
              type="button" 
              className={styles.executeTransactionBtn}
              onClick={() => alert(`Allocation strategy verified! Locked at $${finalPricePerGram.toFixed(2)}/g.`)}
            >
              Authorize Vault Allocation <span className={styles.btnArrow}>→</span>
            </button>
            
            <p className={styles.legalDisclaimerHint}>
              Prices lock instantly upon clicking. Bullion purchases are backed directly by audited bars holding physical liquidity certificates.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}