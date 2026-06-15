import React from 'react';
import styles from './Hero.module.css';

export const ScrollIndicator: React.FC = () => {
  return (
    <div className={styles.scrollIndicator}>
      <div className={styles.mouse}>
        <div className={styles.wheel}></div>
      </div>
      <span className={styles.scrollText}>Discover More</span>
    </div>
  );
};

export default ScrollIndicator;