"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './BookAppointment.module.css';
import { BOOKING_TIERS, AVAILABLE_SLOTS } from '@/data/booking';

export default function BookAppointmentPage() {
  const [selectedTier, setSelectedTier] = useState<string | null>("tier-digital");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  return (
    <main className={styles.bookingCanvas}>
      {/* 🌌 High-End Dynamic Mesh Background Effects */}
      <div className={styles.ambientGlowOrb1} />
      <div className={styles.ambientGlowOrb2} />
      <div className={styles.fineGrainTexture} />
      
      {/* Top Header Return Button */}
      <div className={styles.navBar}>
        <Link href="/" className={styles.directoryLink}>
          <span className={styles.arrowBack}>←</span> Back to Main Directory
        </Link>
      </div>

      <div className={styles.contentLayout}>
        {/* Left Column: Clear Introduction */}
        <div className={styles.editorialHeader}>
          <span className={styles.goldBadge}>Personal Stylist Desk</span>
          <h1 className={styles.mainHeading}>Book Your Private Appointment</h1>
          <p className={styles.narrativeParagraph}>
            Every piece tells a unique story. Choose how you would like to explore our collection below, and lock in a dedicated time window for one-on-one help.
          </p>
          
          {selectedTier && (
            <div className={styles.statusDisplayCard}>
              <span className={styles.statusLabel}>Your Choice:</span>
              <p className={styles.statusValue}>
                {BOOKING_TIERS.find(t => t.id === selectedTier)?.title}
              </p>
            </div>
          )}
        </div>

        {/* Right Column: Cards and Slots Panel */}
        <div className={styles.interactiveColumn}>
          
          {/* Tiers Option Deck */}
          <div className={styles.tierDeck}>
            {BOOKING_TIERS.map((tier) => {
              const isActive = selectedTier === tier.id;
              return (
                <div
                  key={tier.id}
                  className={`${styles.tierCard} ${isActive ? styles.tierActive : ''}`}
                  onClick={() => {
                    setSelectedTier(tier.id);
                    setSelectedSlot(null);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedTier(tier.id)}
                >
                  <div className={styles.cardRibbonTracer} />
                  <div className={styles.tierHeaderRow}>
                    <span className={styles.tierAccent}>
                      <span className={styles.iconMargin}>{tier.icon}</span> {tier.accentTitle}
                    </span>
                    <span className={styles.tierDuration}>{tier.duration}</span>
                  </div>
                  <h3 className={styles.tierTitle}>{tier.title}</h3>
                  <p className={styles.tierDescription}>{tier.description}</p>
                </div>
              );
            })}
          </div>

          {/* Time Picker Matrix Panel */}
          <div className={`${styles.calendarCurtain} ${selectedTier ? styles.curtainRevealed : ''}`}>
            <div className={styles.curtainInnerContent}>
              <div className={styles.slotsHeaderRow}>
                <h4 className={styles.slotsHeading}>Select Your Time Slot</h4>
                <div className={styles.fineDottedDivider} />
              </div>

              <div className={styles.slotsGridMatrix}>
                {AVAILABLE_SLOTS.map((slot, idx) => {
                  const isSlotActive = selectedSlot === slot.time;
                  return (
                    <button
                      key={idx}
                      className={`${styles.slotButton} ${isSlotActive ? styles.slotButtonActive : ''}`}
                      onClick={() => setSelectedSlot(slot.time)}
                    >
                      <span className={styles.slotTime}>{slot.time}</span>
                      <span className={`${styles.slotStatus} ${slot.status === 'Last Slot' ? styles.limitedAlert : ''}`}>
                        {slot.status}
                      </span>
                      <div className={styles.slotBorderFrame} />
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Bottom Slide Confirmation Action Trigger */}
              <div className={`${styles.executionWrapper} ${selectedSlot ? styles.executionVisible : ''}`}>
                <button 
                  className={styles.finalSubmitBtn}
                  onClick={() => alert(`Your styling slot at ${selectedSlot} has been requested!`)}
                >
                  Confirm Appointment Time <span className={styles.btnArrow}>→</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}