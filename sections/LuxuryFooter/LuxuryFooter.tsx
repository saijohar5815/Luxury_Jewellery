"use client";

import React, { FormEvent } from 'react';
import styles from './LuxuryFooter.module.css';

export default function LuxuryFooter() {
  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    alert(`Thank you for subscribing, your allocation pipeline is configured to: ${email}`);
    e.currentTarget.reset();
  };

  return (
    <footer className={styles.footerContainer} aria-label="Brand Footer">
      <div className={styles.ambientGlow} />

      {/* ⭐ SECTION 1: Newsletter Block Container */}
      <section className={styles.newsletterBlock}>
        <h2>Stay Inspired</h2>
        <p>Join the world of timeless luxury and receive exclusive collections & offers.</p>
        <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
          <input 
            type="email" 
            name="email"
            placeholder="Email Address" 
            className={styles.emailInput} 
            required 
            aria-label="Email address for luxury updates"
          />
          <button type="submit" className={styles.subscribeBtn}>
            Subscribe
          </button>
        </form>
      </section>

      {/* ⭐ SECTION 2: Large Logo Identity Hub */}
      <section className={styles.brandMasthead}>
        <h2 className={styles.bigLogo}>LUXORA</h2>
        <span className={styles.brandSubtitle}>Timeless Elegance Since 1965</span>
      </section>

      {/* ⭐ SECTION 7: Beautiful Interactive Category Chips */}
      <section className={styles.categoriesChipsWrapper} aria-label="Featured Categories Quick access">
        {["Diamond", "Gold", "Bridal", "Earrings", "Rings", "Bangles"].map((chip) => (
          <a key={chip} href={`#collections/${chip.toLowerCase()}`} className={styles.chipLink}>
            {chip}
          </a>
        ))}
      </section>

      {/* NAVIGATION INTERFACE MATRIX ENGINE (SECTIONS 3, 4, 5, 6, 8) */}
      <div className={styles.navigationGridEngine}>
        
        {/* ⭐ SECTION 3: Collections Navigation Hub */}
        <nav className={styles.colColumnBlock} aria-label="Collections Foot Link Grid">
          <h3>Collections</h3>
          <ul>
            <li><a href="#diamond">Diamond</a></li>
            <li><a href="#gold">Gold</a></li>
            <li><a href="#bridal">Bridal</a></li>
            <li><a href="#daily-wear">Daily Wear</a></li>
            <li><a href="#men">Men</a></li>
            <li><a href="#kids">Kids</a></li>
          </ul>
        </nav>

        {/* ⭐ SECTION 4: Customer Care Link Systems */}
        <nav className={styles.colColumnBlock} aria-label="Customer Assistance Track Matrix">
          <h3>Customer Care</h3>
          <ul>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#shipping">Shipping</a></li>
            <li><a href="#returns">Returns</a></li>
            <li><a href="#warranty">Warranty</a></li>
            <li><a href="#track-order">Track Order</a></li>
          </ul>
        </nav>

        {/* ⭐ SECTION 5: Brand Corporate History Navigation */}
        <nav className={styles.colColumnBlock} aria-label="Corporate Brand Heritage Track">
          <h3>About Us</h3>
          <ul>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#craftsmanship">Craftsmanship</a></li>
            <li><a href="#blogs">Blogs</a></li>
            <li><a href="#stores">Stores</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </nav>

        {/* ⭐ SECTION 6: Specialized Digital Luxury Assets */}
        <nav className={styles.colColumnBlock} aria-label="Specialized Digital Client Solutions">
          <h3>Services</h3>
          <ul>
            <li><a href="#try-on">Virtual Try-On</a></li>
            <li><a href="#gift-cards">Gift Cards</a></li>
            <li><a href="#guide">Jewellery Guide</a></li>
            <li><a href="#gold-rate">Gold Rate</a></li>
            <li><a href="#appointment">Book Appointment</a></li>
          </ul>
        </nav>

        {/* ⭐ SECTION 8: Store Locator Location Deck Block */}
        <section className={styles.colColumnBlock} aria-label="Physical Store Network Distribution">
          <h3>Store Locator</h3>
          <div className={styles.storeCardList}>
            <div className={styles.storeNodeMiniCard}>
              <span className={styles.trustIcon}>📍</span> Hyderabad
            </div>
            <div className={styles.storeNodeMiniCard}>
              <span className={styles.trustIcon}>📍</span> Bangalore
            </div>
            <div className={styles.storeNodeMiniCard}>
              <span className={styles.trustIcon}>📍</span> Chennai
            </div>
            <div className={styles.storeNodeMiniCard}>
              <span className={styles.trustIcon}>📍</span> Mumbai
            </div>
            <div className={styles.storeNodeMiniCard}>
              <span className={styles.trustIcon}>📍</span> Delhi
            </div>
          </div>
        </section>

      </div>

      {/* ⭐ SECTION 9: Social Media Interactions Ribbon */}
      <section className={styles.socialMediaIconDeckRow} aria-label="Global Community Channels">
        <a href="#instagram" className={styles.socialCircularBadgeAnchor} aria-label="Follow Luxora on Instagram">○</a>
        <a href="#facebook" className={styles.socialCircularBadgeAnchor} aria-label="Follow Luxora on Facebook">○</a>
        <a href="#youtube" className={styles.socialCircularBadgeAnchor} aria-label="Subscribe to Luxora YouTube Channel">○</a>
        <a href="#pinterest" className={styles.socialCircularBadgeAnchor} aria-label="Follow Luxora on Pinterest">○</a>
        <a href="#linkedin" className={styles.socialCircularBadgeAnchor} aria-label="Connect with Luxora on LinkedIn">○</a>
      </section>

      {/* ⭐ SECTION 10: Authenticated Assurance Trust Indicators */}
      <section className={styles.trustIndicatorsRibbonDeck} aria-label="Brand Quality Authentication Elements">
        <div className={styles.trustItemBlockNode}>
          <span className={styles.trustIcon}>🛡️</span>
          <span>BIS Hallmarked</span>
        </div>
        <div className={styles.trustItemBlockNode}>
          <span className={styles.trustIcon}>💎</span>
          <span>Certified Diamonds</span>
        </div>
        <div className={styles.trustItemBlockNode}>
          <span className={styles.trustIcon}>🚚</span>
          <span>Free Shipping</span>
        </div>
        <div className={styles.trustItemBlockNode}>
          <span className={styles.trustIcon}>🔒</span>
          <span>100% Secure Payment</span>
        </div>
        <div className={styles.trustItemBlockNode}>
          <span className={styles.trustIcon}>↩️</span>
          <span>Easy Returns</span>
        </div>
      </section>

      {/* ⭐ SECTION 11: Transaction Processing Infrastructure */}
      <section className={styles.paymentMethodsFlexBadgeContainer} aria-label="Accepted Transaction Processing Channels">
        <div className={styles.paymentAssetBadgeBox}>VISA</div>
        <div className={styles.paymentAssetBadgeBox}>Mastercard</div>
        <div className={styles.paymentAssetBadgeBox}>RuPay</div>
        <div className={styles.paymentAssetBadgeBox}>UPI</div>
        <div className={styles.paymentAssetBadgeBox}>PayPal</div>
        <div className={styles.paymentAssetBadgeBox}>Apple Pay</div>
      </section>

      {/* ⭐ SECTION 12: Minimalist Copyright Base System Layer */}
      <section className={styles.copyrightBottomStripDeck} aria-label="Legal Rights Base">
        <div className={styles.copyrightInnerRowWrapper}>
          <div className={styles.copyrightLeftGroup}>
            <span>© 2026 LUXORA</span>
            <span className={styles.craftedSignature}>Crafted With Elegance</span>
          </div>
          <nav className={styles.legalLinkDeckGroup} aria-label="Legal and Cookie Configuration Policies">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms</a>
            <a href="#cookies">Cookies</a>
          </nav>
        </div>
      </section>

    </footer>
  );
}