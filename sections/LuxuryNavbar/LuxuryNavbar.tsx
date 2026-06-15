"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation'; 
import Link from 'next/link';                 
import styles from './LuxuryNavbar.module.css';

export default function LuxuryNavbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeOverlay, setActiveOverlay] = useState<'search' | 'wishlist' | 'account' | 'cart' | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Track active sub-filter tab inside mega menu
  const [activeFilterTab, setActiveFilterTab] = useState<'category' | 'price' | 'occasion' | 'gender'>('category');

  // Handle scroll detection for glassmorphism transition
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close overlays when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (overlayRef.current && !overlayRef.current.contains(event.target as Node)) {
        setActiveOverlay(null);
      }
    };
    if (activeOverlay) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeOverlay]);

  const toggleOverlay = (type: 'search' | 'wishlist' | 'account' | 'cart') => {
    setActiveOverlay(activeOverlay === type ? null : type);
  };

  return (
    <>
      {/* --- ANNOUNCEMENT BAR --- */}
      <div className={styles.announcementBar}>
        <div className={styles.announcementTicker}>
          <span>Free Shipping</span>
          <span className={styles.bullet}>•</span>
          <span>BIS Hallmarked</span>
          <span className={styles.bullet}>•</span>
          <span>Certified Diamonds</span>
          <span className={styles.bullet}>•</span>
          <span>Secure Payment</span>
        </div>
      </div>

      {/* --- GLOBAL OVERLAYS DRAWER SYSTEM --- */}
      {activeOverlay && (
        <div className={styles.overlayModalContainer} ref={overlayRef}>
          <button className={styles.closeOverlayBtn} onClick={() => setActiveOverlay(null)}>✕</button>
          
          {activeOverlay === 'search' && (
            <div className={styles.overlayContent}>
              <h3 className={styles.overlayTitle}>Search Jewellery</h3>
              <input type="text" placeholder="Type diamonds, gold chains, rings..." className={styles.searchInputField} autoFocus />
              <div className={styles.trendingSearches}>
                <h4>Trending Now</h4>
                <ul>
                  <li><a href="/allrings">Diamond Ring</a></li>
                  <li><a href="/chains">Gold Chain</a></li>
                  <li><a href="/bridal">Bridal Set</a></li>
                  <li><a href="/mangalsutra">Mangalsutra</a></li>
                </ul>
              </div>
            </div>
          )}

          {activeOverlay === 'wishlist' && (
            <div className={styles.overlayContent}>
              <h3 className={styles.overlayTitle}>Your Wishlist (<span className={styles.goldText}>4</span>)</h3>
              <div className={styles.emptyStateContainer}>
                <p>No new items added recently.</p>
                <ul className={styles.overlayContent}>
  <li>
    <Link href="/alljewel/allj" className={styles.actionLinkText} onClick={() => setActiveOverlay(null)}>
      Browse Collections
    </Link>
  </li>
</ul>
              </div>
            </div>
          )}

          {activeOverlay === 'account' && (
            <div className={styles.overlayContent}>
              <h3 className={styles.overlayTitle}>Client Portal</h3>
              <ul className={styles.accountNavLinks}>
                <li><a href="/login">Login / Register</a></li>
                <li><a href="#orders">Track Orders</a></li>
                <li><a href="#wishlist">Saved Pieces</a></li>
                <li><a href="#appointments">Book Private Appointment</a></li>
              </ul>
            </div>
          )}

          {activeOverlay === 'cart' && (
            <div className={styles.overlayContent}>
              <h3 className={styles.overlayTitle}>Your Shopping Bag (<span className={styles.goldText}>2</span>)</h3>
              <div className={styles.cartItemsList}>
                <div className={styles.cartItem}>
                  <div>
                    <p className={styles.itemName}>Solitaire Diamond Ring</p>
                    <p className={styles.itemMeta}>Size: 12 | 18kt White Gold</p>
                  </div>
                  <span className={styles.itemPrice}>₹52,000</span>
                </div>
                <div className={styles.cartItem}>
                  <div>
                    <p className={styles.itemName}>Handcrafted Gold Chain</p>
                    <p className={styles.itemMeta}>Length: 18" | 22kt Yellow Gold</p>
                  </div>
                  <span className={styles.itemPrice}>₹38,000</span>
                </div>
              </div>
              <div className={styles.cartFooter}>
                <div className={styles.subtotalRow}>
                  <span>Subtotal</span>
                  <span className={styles.goldText}>₹90,000</span>
                </div>
                <button className={styles.checkoutBtn}>Proceed To Checkout</button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* --- MASTER NAVIGATION COMPONENT --- */}
      <nav className={`${styles.navbarWrapper} ${isScrolled ? styles.scrolledNavbar : ''}`} role="navigation">
        <div className={styles.navInnerGrid}>
          
          {/* Mobile Menu Toggle Switch */}
          <button 
            className={styles.mobileHamburgerBtn} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <span className={`${styles.burgerLine} ${mobileMenuOpen ? styles.lineTopRotate : ''}`} />
            <span className={`${styles.burgerLine} ${mobileMenuOpen ? styles.lineHide : ''}`} />
            <span className={`${styles.burgerLine} ${mobileMenuOpen ? styles.lineBottomRotate : ''}`} />
          </button>

          {/* Logo Identity Unit */}
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logoAnchor}>
              <h1>LUXORA</h1>
              <span className={styles.logoSubtitle}>Timeless Elegance</span>
            </Link>
          </div>

          {/* Desktop Navigation Link Track Layout */}
          <ul className={styles.desktopNavLinksTrack}>
            <li>
              <Link href="/new-arrivals" className={styles.dropdownTrigger}>
                New Arrivals
              </Link>
            </li>
            
            {/* Mega Menu Parent Node */}
            <li className={styles.hasMegaMenu}>
              <span className={styles.dropdownTrigger}>Collections <span className={styles.carat}>▼</span></span>
              
              {/* --- SIDEBAR FILTER + GRID MEGA MENU WINDOW --- */}
              <div className={styles.megaMenuDropdownWindow}>
                <div className={styles.splitMegaMenuLayout}>
                  
                  {/* Left Side Navigation Sidebar */}
                  <div className={styles.megaMenuSidebar}>
                    <div className={styles.sidebarTabTrack}>
                      <button 
                        className={`${styles.sidebarTabBtn} ${activeFilterTab === 'category' ? styles.activeTab : ''}`}
                        onClick={() => setActiveFilterTab('category')}
                      >
                        📂 Category
                      </button>
                      <button 
                        className={`${styles.sidebarTabBtn} ${activeFilterTab === 'price' ? styles.activeTab : ''}`}
                        onClick={() => setActiveFilterTab('price')}
                      >
                        💰 Price
                      </button>
                      <button 
                        className={`${styles.sidebarTabBtn} ${activeFilterTab === 'occasion' ? styles.activeTab : ''}`}
                        onClick={() => setActiveFilterTab('occasion')}
                      >
                        🎉 Occasion
                      </button>
                      <button 
                        className={`${styles.sidebarTabBtn} ${activeFilterTab === 'gender' ? styles.activeTab : ''}`}
                        onClick={() => setActiveFilterTab('gender')}
                      >
                        👨 Gender
                      </button>
                    </div>

                    {/* Left Promo Card Container */}
                    <div className={styles.sidebarPromoCard}>
                      <div className={styles.promoImageWrapper}>
                        <div className={styles.promoImgFallback} />
                      </div>
                      <div className={styles.sidebarPromoCardContent}>
                        <span className={styles.promoTag}>NEW COLLECTION</span>
                        <h4>Royal Heritage</h4>
                        <p>Timeless treasures</p>
                        <span className={styles.promoActionLink}>Explore →</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side Contents Panel */}
                  <div className={styles.megaMenuGridContent}>
                    
                    {/* --- CATEGORY TAB CONTENT --- */}
                    {activeFilterTab === 'category' && (
                      <div className={styles.categoryTabContainer}>
                        
                        {/* Left Section: Icons Matrix & Trust Ribbon */}
                        <div className={styles.categoryLeftSection}>
                          <div className={styles.categoryIconMatrix}>
                            {/* Column 1 */}
                            <div className={styles.matrixColumn}>
                              <Link href="/alljewel/allj" className={styles.matrixItemRow}>
                                <div className={styles.thumbnailCircle}><span className={styles.itemIconMini}>✨</span></div>
                                <span className={styles.matrixItemLabel}>All Jewellery</span>
                              </Link>
                              <Link href="/allrings" className={styles.matrixItemRow}>
                                <div className={styles.thumbnailCircle}><span className={styles.itemIconMini}>💍</span></div>
                                <span className={styles.matrixItemLabel}>Finger Rings</span>
                              </Link>
                              <Link href="/nosepins" className={styles.matrixItemRow}>
                                <div className={styles.thumbnailCircle}><span className={styles.itemIconMini}>💎</span></div>
                                <span className={styles.matrixItemLabel}>Nose Pin</span>
                              </Link>
                              <Link href="/bangles" className={styles.matrixItemRow}>
                                <div className={styles.thumbnailCircle}><span className={styles.itemIconMini}>⭕</span></div>
                                <span className={styles.matrixItemLabel}>Bangles</span>
                              </Link>
                            </div>

                            {/* Column 2 */}
                            <div className={styles.matrixColumn}>
                              <Link href="/earrings" className={styles.matrixItemRow}>
                                <div className={styles.thumbnailCircle}><span className={styles.itemIconMini}>👑</span></div>
                                <span className={styles.matrixItemLabel}>Earrings</span>
                              </Link>
                              <Link href="/mangalsutra" className={styles.matrixItemRow}>
                                <div className={styles.thumbnailCircle}><span className={styles.itemIconMini}>📿</span></div>
                                <span className={styles.matrixItemLabel}>Mangalsutra</span>
                              </Link>
                              <Link href="/necklaces" className={styles.matrixItemRow}>
                                <div className={styles.thumbnailCircle}><span className={styles.itemIconMini}>🌸</span></div>
                                <span className={styles.matrixItemLabel}>Necklaces</span>
                              </Link>
                              <Link href="/bracelets" className={styles.matrixItemRow}>
                                <div className={styles.thumbnailCircle}><span className={styles.itemIconMini}>⛓️</span></div>
                                <span className={styles.matrixItemLabel}>Bracelets</span>
                              </Link>
                            </div>

                            {/* Column 3 */}
                            <div className={styles.matrixColumn}>
                              <Link href="/pendants" className={styles.matrixItemRow}>
                                <div className={styles.thumbnailCircle}><span className={styles.itemIconMini}>🔮</span></div>
                                <span className={styles.matrixItemLabel}>Pendants</span>
                              </Link>
                              <Link href="/chains" className={styles.matrixItemRow}>
                                <div className={styles.thumbnailCircle}><span className={styles.itemIconMini}>🔗</span></div>
                                <span className={styles.matrixItemLabel}>Chains</span>
                              </Link>
                              <Link href="/necklace-set" className={styles.matrixItemRow}>
                                <div className={styles.thumbnailCircle}><span className={styles.itemIconMini}>🔱</span></div>
                                <span className={styles.matrixItemLabel}>Necklace Set</span>
                              </Link>
                              <Link href="pendant-earring-set" className={styles.matrixItemRow}>
                                <div className={styles.thumbnailCircle}><span className={styles.itemIconMini}>🎁</span></div>
                                <span className={styles.matrixItemLabel}>Pendant + Earrings Set</span>
                              </Link>
                            </div>
                          </div>

                          {/* Horizontal Trust Ribbon */}
                          <div className={styles.megaMenuTrustRibbon}>
                            <div className={styles.trustBadgeItem}>
                              <span className={styles.trustIcon}>💎</span>
                              <h5>Certified Jewellery</h5>
                            </div>
                            <div className={styles.trustBadgeItem}>
                              <span className={styles.trustIcon}>🏆</span>
                              <h5>BIS Hallmarked</h5>
                            </div>
                            <div className={styles.trustBadgeItem}>
                              <span className={styles.trustIcon}>🚚</span>
                              <h5>Free Shipping</h5>
                            </div>
                            <div className={styles.trustBadgeItem}>
                              <span className={styles.trustIcon}>🔄</span>
                              <h5>Easy Exchange</h5>
                            </div>
                          </div>
                        </div>

                        {/* Right Content Area: Self-contained Card with clean inline fallback image background */}
                        <div 
                          className={styles.categoryRightSquareBox} 
                          style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 100%), url('https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop')` }}
                        >
                          <div className={styles.squareCardOverlay}>
                            <span className={styles.squareCardTag}>EXCLUSIVE</span>
                            <h3>The Lustre Edit</h3>
                            <Link href="/collections/diamond" className={styles.squareCardBtn}>
                              Discover →
                            </Link>
                          </div>
                        </div>

                      </div>
                    )}

                    {/* --- PRICE TAB CONTENT --- */}
                    {activeFilterTab === 'price' && (
                      <div className={styles.tabContentWrapper}>
                        <div className={styles.fourColumnGrid}>
                          <Link href="/search?price=0-25000" className={styles.priceCard}>
                            <div className={styles.priceCardImgWrapper}>
                              <div className={`${styles.cardPlaceholderImg} ${styles.bgPrice1}`} />
                            </div>
                            <span className={styles.cardTextTitle}>Under 25K</span>
                          </Link>
                          <Link href="/search?price=25000-50000" className={styles.priceCard}>
                            <div className={styles.priceCardImgWrapper}>
                              <div className={`${styles.cardPlaceholderImg} ${styles.bgPrice2}`} />
                            </div>
                            <span className={styles.cardTextTitle}>25K-50K</span>
                          </Link>
                          <Link href="/search?price=50000-100000" className={styles.priceCard}>
                            <div className={styles.priceCardImgWrapper}>
                              <div className={`${styles.cardPlaceholderImg} ${styles.bgPrice3}`} />
                            </div>
                            <span className={styles.cardTextTitle}>50K-1L</span>
                          </Link>
                          <Link href="/search?price=100000-above" className={styles.priceCard}>
                            <div className={styles.priceCardImgWrapper}>
                              <div className={`${styles.cardPlaceholderImg} ${styles.bgPrice4}`} />
                            </div>
                            <span className={styles.cardTextTitle}>1L & Above</span>
                          </Link>
                        </div>

                        {/* Special Bottom Banner for Price */}
                        <div className={styles.bottomBanner}>
                          <div className={styles.bottomBannerLeft}>
                            <div className={styles.smallBannerCircleImg} />
                            <div>
                              <h4>Jewellery for Every Moment—See It All Here!</h4>
                              <p>14,000+ designs to choose from</p>
                            </div>
                          </div>
                          <Link href="/collections" className={styles.bannerViewAllBtn}>
                            View All →
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* --- OCCASION TAB CONTENT --- */}
                    {activeFilterTab === 'occasion' && (
                      <div className={styles.tabContentWrapper}>
                        <div className={styles.fourColumnGrid}>
                          <Link href="/collections/office-wear" className={styles.occasionCard}>
                            <div className={styles.occasionCardImgWrapper}>
                              <div className={`${styles.cardPlaceholderImg} ${styles.bgOccasion1}`} />
                            </div>
                            <span className={styles.cardTextTitleGold}>Office Wear</span>
                          </Link>
                          <Link href="/collections/modern-wear" className={styles.occasionCard}>
                            <div className={styles.occasionCardImgWrapper}>
                              <div className={`${styles.cardPlaceholderImg} ${styles.bgOccasion2}`} />
                            </div>
                            <span className={styles.cardTextTitleGold}>Modern Wear</span>
                          </Link>
                          <Link href="/collections/casual-wear" className={styles.occasionCard}>
                            <div className={styles.occasionCardImgWrapper}>
                              <div className={`${styles.cardPlaceholderImg} ${styles.bgOccasion3}`} />
                            </div>
                            <span className={styles.cardTextTitleGold}>Casual Wear</span>
                          </Link>
                          <Link href="/collections/traditional-wear" className={styles.occasionCard}>
                            <div className={styles.occasionCardImgWrapper}>
                              <div className={`${styles.cardPlaceholderImg} ${styles.bgOccasion4}`} />
                            </div>
                            <span className={styles.cardTextTitleGold}>Traditional Wear</span>
                          </Link>
                        </div>

                        {/* Special Bottom Banner for Occasion */}
                        <div className={styles.bottomBanner}>
                          <div className={styles.bottomBannerLeft}>
                            <div className={styles.smallBannerCircleImg} />
                            <div>
                              <h4>Jewellery for Every Moment</h4>
                              <p>14,000+ designs</p>
                            </div>
                          </div>
                          <Link href="/collections" className={styles.bannerViewAllBtn}>
                            View All
                          </Link>
                        </div>
                      </div>
                    )}

                    {/* --- GENDER TAB CONTENT --- */}
                    {activeFilterTab === 'gender' && (
                      <div className={styles.tabContentWrapper}>
                        <div className={styles.fourColumnGrid}>
                          <Link href="/collections/women" className={styles.genderCard}>
                            <div className={styles.genderCardImgWrapper}>
                              <div className={`${styles.cardPlaceholderImg} ${styles.bgGender1}`} />
                            </div>
                            <span className={styles.cardTextTitle}>Women</span>
                          </Link>
                          <Link href="/collections/men" className={styles.genderCard}>
                            <div className={styles.genderCardImgWrapper}>
                              <div className={`${styles.cardPlaceholderImg} ${styles.bgGender2}`} />
                            </div>
                            <span className={styles.cardTextTitle}>Men</span>
                          </Link>
                          <Link href="/collections/kids" className={styles.genderCard}>
                            <div className={styles.genderCardImgWrapper}>
                              <div className={`${styles.cardPlaceholderImg} ${styles.bgGender3}`} />
                            </div>
                            <span className={styles.cardTextTitle}>Kids</span>
                          </Link>
                          <Link href="/collections/couple" className={styles.genderCard}>
                            <div className={styles.genderCardImgWrapper}>
                              <div className={`${styles.cardPlaceholderImg} ${styles.bgGender4}`} />
                            </div>
                            <span className={styles.cardTextTitle}>Couple</span>
                          </Link>
                        </div>

                        {/* Special Bottom Banner for Gender */}
                        <div className={styles.bottomBanner}>
                          <div className={styles.bottomBannerLeft}>
                            <div>
                              <h4 className={styles.exploreHeadingTitle}>Explore More Collections</h4>
                            </div>
                          </div>
                          <Link href="/collections" className={styles.bannerViewAllBtn}>
                            View All →
                          </Link>
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              </div>
            </li>

            {/* Rest of Desktop Menu Links */}
            <li><Link href="/gold">Gold</Link></li>
            <li><Link href="/diamond">Diamond</Link></li>
            <li><Link href="/bridal">Bridal</Link></li>
            <li><Link href="/guide">Jewellery Guide</Link></li>
            <li><Link href="/journals">Journal</Link></li>
          </ul>

          {/* Icon System Utility Row Elements */}
       
<ul className={styles.utilityIconsTrack}>
  <li className={styles.utilityIconItem} onClick={() => setActiveOverlay('search')}>
    <img src="/images/search-icon.png" alt="Search" className={styles.iconImage} />
  </li>
  <li className={styles.utilityIconItem} onClick={() => setActiveOverlay('wishlist')}>
    <img src="/images/heart-icon.png" alt="Wishlist" className={styles.iconImage} />
  </li>
  <li className={styles.utilityIconItem} onClick={() => setActiveOverlay('account')}>
    <img src="/images/user-icon.png" alt="Account" className={styles.iconImage} />
  </li>
  <li className={styles.utilityIconItem} onClick={() => setActiveOverlay('cart')}>
    <img src="/images/cart-icon.png" alt="Cart" className={styles.iconImage} />
    <span className={styles.cartBadge}>2</span>
  </li>
</ul>
        </div>
      </nav>
  {/* Right Side Utility Icons */}

      
    </>
  );
}