"use client";

import React from 'react';
import { motion } from 'framer-motion';
import HeroOverlay from './HeroOverlay';
import styles from './Hero.module.css';

const Hero = () => {
  const headline = "Where Timeless Luxury Meets Modern Grace";
  
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className={styles.heroWrapper}>
      <HeroOverlay />
      <div className={styles.heroContainer}>
        
        {/* Left Content */}
        <div className={styles.leftContent}>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={styles.tagline}>
            CRAFTED FOR ETERNAL ELEGANCE
          </motion.p>
          
          <motion.h1 variants={container} initial="hidden" animate="visible" className={styles.mainHeading}>
            {headline.split("").map((char, index) => (
              <motion.span key={index} variants={child}>{char}</motion.span>
            ))}
          </motion.h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className={styles.description}>
            Discover handcrafted diamond and gold jewellery designed to celebrate life's most precious moments with unmatched brilliance and sophistication.
          </motion.p>

          <div className={styles.buttonGroup}>
            <button className={styles.primaryBtn}>SHOP COLLECTION →</button>
            <button className={styles.secondaryBtn}>EXPLORE NEW ARRIVALS</button>
          </div>

          <div className={styles.trustPoints}>
            {['Certified Diamonds', 'Hallmarked Gold', 'Free Insured Shipping', 'Lifetime Craftsmanship'].map((point) => (
              <span key={point}>✓ {point}</span>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className={styles.rightImageContainer}>
          <img src="https://www.behindwoods.com/telugu-actress/nayanthara/nayanthara-stills-photos-pictures-735.jpg" className={styles.squareImage} alt="Luxury Jewellery" />
        </motion.div>
      </div>

      {/* Bottom Glassmorphism Category Navigation */}
      <div className={styles.categoryNav}>
        {['RINGS', 'NECKLACES', 'EARRINGS', 'BRACELETS', 'WEDDING COLLECTION'].map((item) => (
          <div key={item} className={styles.catItem}>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;