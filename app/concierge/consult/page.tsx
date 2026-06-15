"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './TalkToExpert.module.css';
import { EXPERT_PROFILES } from '@/data/experts';

export default function TalkToExpertPage() {
  const [hoveredProfile, setHoveredProfile] = useState<string | null>(null);
  const [selectedExpert, setSelectedExpert] = useState<string | null>("exp-marcus");
  const [sessionType, setSessionType] = useState<string | null>(null);

  return (
    <main className={styles.expertCanvas}>
      {/* Premium Background Ambience Layering */}
      <div className={styles.silkGlowOrb} />
      <div className={styles.fineLinenTexture} />

      {/* Navigation Return Hook */}
      <div className={styles.navBar}>
        <Link href="/" className={styles.directoryLink}>
          <span className={styles.arrowBack}>←</span> Return to Collective Directory
        </Link>
      </div>

      <div className={styles.contentLayout}>
        {/* Left Editorial Section Column */}
        <div className={styles.editorialHeader}>
          <span className={styles.goldBadge}>Bespoke Advisory Board</span>
          <h1 className={styles.mainHeading}>Consult with Our Advisors</h1>
          <p className={styles.narrativeParagraph}>
            Skip the guesswork. Connect directly with our certified diamond professionals and custom atelier layout creators to outline your design direction.
          </p>

          {/* Interactive Live Status Indicator */}
          <div className={styles.statusDisplayCard}>
            <span className={styles.statusLabel}>Currently Consulting With:</span>
            <p className={styles.statusValue}>
              {EXPERT_PROFILES.find(e => e.id === selectedExpert)?.name || "Select an Advisor"}
            </p>
          </div>
        </div>

        {/* Right Section Profile Deck Column */}
        <div className={styles.interactiveColumn}>
          
          {/* Grid Panel of Experts */}
          <div className={styles.expertGrid}>
            {EXPERT_PROFILES.map((expert) => {
              const isHovered = hoveredProfile === expert.id;
              const isAnyHovered = hoveredProfile !== null;
              const isActive = selectedExpert === expert.id;

              return (
                <div
                  key={expert.id}
                  className={`${styles.expertCard} ${isActive ? styles.cardActive : ''} ${
                    isAnyHovered && !isHovered ? styles.cardDimmedBlur : ''
                  }`}
                  onMouseEnter={() => setHoveredProfile(expert.id)}
                  onMouseLeave={() => setHoveredProfile(null)}
                  onClick={() => {
                    setSelectedExpert(expert.id);
                    setSessionType(null); // Reset session choice when expert flips
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedExpert(expert.id)}
                >
                  <div className={styles.avatarWindow}>
                    <img src={expert.avatar} alt={expert.name} className={styles.avatarImage} />
                    <span className={styles.availabilityTag}>{expert.availability}</span>
                  </div>

                  <div className={styles.profileTextStack}>
                    <span className={styles.expertRole}>{expert.role}</span>
                    <h3 className={styles.expertName}>{expert.name}</h3>
                    <p className={styles.expertSpecialty}>Focus: {expert.specialty}</p>
                    <p className={styles.expertBio}>{expert.bio}</p>
                  </div>
                  
                  <div className={styles.activeBorderFrame} />
                </div>
              );
            })}
          </div>

          {/* Connected Drawer Reveal Configuration Area */}
          <div className={`${styles.consultationCurtain} ${selectedExpert ? styles.curtainRevealed : ''}`}>
            <div className={styles.curtainInnerContent}>
              <div className={styles.slotsHeaderRow}>
                <h4 className={styles.slotsHeading}>Choose Session Strategy</h4>
                <div className={styles.fineDottedDivider} />
              </div>

              <div className={styles.sessionOptionGrid}>
                {[
                  { id: 'audio', title: '15-Min Quick Audio Call', description: 'Perfect for quick answers regarding collection sizes and simple gem metrics.' },
                  { id: 'video', title: '45-Min Video Deep Dive', description: 'Comprehensive design consultation, blueprint review, and stone selections.' }
                ].map((session) => {
                  const isSessionSelected = sessionType === session.id;
                  return (
                    <div
                      key={session.id}
                      className={`${styles.sessionSelectCard} ${isSessionSelected ? styles.sessionCardActive : ''}`}
                      onClick={() => setSessionType(session.id)}
                    >
                      <div className={styles.selectionIndicatorDot} />
                      <h5>{session.title}</h5>
                      <p>{session.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Action Submission Engine Button */}
              <div className={`${styles.executionWrapper} ${sessionType ? styles.executionVisible : ''}`}>
                <button 
                  className={styles.finalSubmitBtn}
                  onClick={() => alert(`Direct patch sequence initiated with ${EXPERT_PROFILES.find(e => e.id === selectedExpert)?.name}!`)}
                >
                  Initiate Secure Connection Loop <span className={styles.btnArrow}>→</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}