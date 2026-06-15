"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './AuthPage.module.css';

export default function AuthPage() {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  return (
    <div className={styles.authPage}>
      {/* Back to Homepage Link */}
      <Link href="/" className={styles.backButton}>
        ← Back to Homepage
      </Link>

      <div className={styles.authContainer}>
        
        {/* LEFT SECTION */}
        <div className={styles.leftPanel}>
          <div className={styles.leftPanelBg} />
          <div className={styles.leftPanelContent}>
            <div>
              <h3>LUXORA</h3>
              <h1 className={styles.mainHeading}>
                Timeless Beauty.<br />Treasured <span className={styles.gold}>Forever</span>.
              </h1>
            </div>

            {/* Feature Icons */}
            <div className={styles.featureContainer}>
              <div className={styles.featureItem}><span className={styles.icon}>💎</span><br />Certified<br />Authenticity</div>
              <div className={styles.featureItem}><span className={styles.icon}>🛡</span><br />Secure<br />Payments</div>
              <div className={styles.featureItem}><span className={styles.icon}>🎁</span><br />Premium<br />Packaging</div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className={styles.rightPanel}>
          <div className={styles.tabContainer}>
            <button 
              className={authMode === 'login' ? styles.activeTab : styles.inactiveTab} 
              onClick={() => setAuthMode('login')}
            >Login</button>
            <button 
              className={authMode === 'register' ? styles.activeTab : styles.inactiveTab} 
              onClick={() => setAuthMode('register')}
            >Register</button>
          </div>

          <h2 className={styles.title}>{authMode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
          <p className={styles.subtitle}>
            {authMode === 'login' ? 'Please login to continue to your account' : 'Join us to start your collection'}
          </p>

          {/* DYNAMIC FIELDS */}
          {authMode === 'register' && (
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}>👤</span>
              <input type="text" placeholder="Full Name" className={styles.inputField} />
            </div>
          )}

          <div className={styles.inputWrapper}>
            <span className={styles.inputIcon}>📧</span>
            <input type="email" placeholder="Email Address" className={styles.inputField} />
          </div>

          <div className={styles.inputWrapper}>
            <span className={styles.inputIcon}>🔒</span>
            <input type="password" placeholder="Password" className={styles.inputField} />
            <span className={styles.eyeIcon}>👁</span>
          </div>

          {authMode === 'register' && (
            <div className={styles.inputWrapper}>
              <span className={styles.inputIcon}>🔒</span>
              <input type="password" placeholder="Confirm Password" className={styles.inputField} />
            </div>
          )}

          {authMode === 'login' && (
            <div className={styles.formRow}>
              <label><input type="checkbox" /> Remember Me</label>
              <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
            </div>
          )}

          <button className={styles.loginBtn}>
            {authMode === 'login' ? 'Login →' : 'Register →'}
          </button>

          <div className={styles.divider}>OR</div>

          

          <p className={styles.footerText}>
            {authMode === 'login' ? "Don't have an account? " : "Already have an account? "}
            <span 
              className={styles.gold} 
              style={{ cursor: 'pointer' }} 
              onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
            >
              {authMode === 'login' ? 'Create Account' : 'Login here'}
            </span>
          </p>
        </div>

      </div>
    </div>
  );
}