"use client";

import React, { useState, use } from 'react';
import Link from 'next/link';
import styles from './CategoryPage.module.css'; // You can style this independently!

interface ProductItem {
  sku: string;
  name: string;
  price: string;
  category: string;       // 'rings', 'necklaces', etc.
  collectionSource: string; // 'heritage' or 'luminary'
  diamondCut: string;     // 'solitaire', 'polki', 'cushion', 'marquise'
  image: string;
  details: string[];
}

// Global dataset shared across your app
// 1. UPDATED MASTER CATALOG WITH NEW EARRINGS & BRACELETS
const MASTER_CATALOG: ProductItem[] = [
  // --- RINGS ---
  { sku: "RG-HER-01", name: "Queen's Legacy Solitaire Ring", price: "$82,000", category: "rings", collectionSource: "heritage", diamondCut: "solitaire", image: "https://www.candere.com/media/jewellery/images/KC04347YG_1.jpeg", details: ["Cushion Cut Diamond", "18K White Gold Frame"] },
  { sku: "RG-LUM-02", name: "Aurora Northern Sky Chromatic Ring", price: "$34,000", category: "rings", collectionSource: "luminary", diamondCut: "fancy", image: "https://lustra.co.in/cdn/shop/files/Gemini_Generated_Image_ic0deqic0deqic0d.png?v=1777737844", details: ["Paraiba Tourmaline", "Fancy Cut Micro-Diamonds"] },
  { sku: "RG-HER-03", name: "Eternal Grace Baroque Diamond Band", price: "$19,500", category: "rings", collectionSource: "heritage", diamondCut: "cushion", image: "https://luire.in/cdn/shop/files/1_096af69c-21cf-464e-8e9c-3a7dcbfcd7fb_1370x.jpg?v=1742020375", details: ["Champagne Diamonds", "Platinum 950"] },

  // --- NECKLACES ---
  { sku: "NK-HER-01", name: "Imperial Crown Choker", price: "$145,000", category: "necklaces", collectionSource: "heritage", diamondCut: "marquise", image: "https://m.media-amazon.com/images/I/614Ytc0vmUL._AC_UY1100_.jpg", details: ["D-Flawless Diamonds", "Marquise Cuts"] },

  // --- EARRINGS (NEW DATA) ---
  { sku: "ER-HER-01", name: "Celestial Pear Drop Earrings", price: "$56,000", category: "earrings", collectionSource: "heritage", diamondCut: "pear", image: "https://estele.co/cdn/shop/files/0000.jpg?v=1754475583&width=1000", details: ["Pear Cut Drops", "Vintage Filigree"] },
  { sku: "ER-LUM-02", name: "Prism Galaxy Studs", price: "$12,400", category: "earrings", collectionSource: "luminary", diamondCut: "emerald", image: "https://assets.ajio.com/medias/sys_master/root/20240316/nusZ/65f5c8a605ac7d77bbbcb643/-1117Wx1400H-466719017-gold-MODEL.jpg", details: ["Emerald Cut Center", "Micro-Pave Halo"] },
  { sku: "ER-HER-03", name: "Royal Jhumka Chandeliers", price: "$89,000", category: "earrings", collectionSource: "heritage", diamondCut: "polki", image: "https://cdn.eternz.com/thumbnails/products/sjer225128229_49df6557_thumbnail_1024.jpg", details: ["Uncut Diamonds", "South Sea Pearl Drops"] },
  { sku: "ER-LUM-04", name: "Infinite Orbit Linear Drops", price: "$28,500", category: "earrings", collectionSource: "luminary", diamondCut: "marquise", image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/c/6/c67eff7EAR-PR-51028-2.jpg?rnd=20200526195200&tr=w-512", details: ["Sequential Marquise", "18K Rose Gold"] },

  // --- BRACELETS (NEW DATA) ---
  { sku: "BR-HER-01", name: "Sovereign Heritage Gold Cuff", price: "$72,000", category: "bracelets", collectionSource: "heritage", diamondCut: "cushion", image: "https://images.meesho.com/images/products/875424128/vey4m_512.jpg", details: ["Structured 22K Gold", "Hand-Carved Accents"] },
  { sku: "BR-LUM-02", name: "Starlight Tennis Line Bracelet", price: "$41,000", category: "bracelets", collectionSource: "luminary", diamondCut: "solitaire", image: "https://images.meesho.com/images/products/949364367/qivuv_512.webp?width=256", details: ["Continuous Diamond Line", "Hidden Box Clasp"] },
  { sku: "BR-LUM-03", name: "Nova Kinetic Bangle", price: "$15,800", category: "bracelets", collectionSource: "luminary", diamondCut: "emerald", image: "https://img.joomcdn.net/0bf2173ec93ad36a0ec15c6d53f529f3f4e8cfbe_original.jpeg", details: ["Minimalist Torque Design", "Brilliant Emerald Ends"] },
  { sku: "BR-HER-04", name: "Empress Silk Diamond Chain", price: "$110,000", category: "bracelets", collectionSource: "heritage", diamondCut: "marquise", image: "https://www.candere.com/media/jewellery/images/KC06298YG_1.jpeg", details: ["Flexible Mesh Inlay", "Marquise Cluster Focal"] },
];

// 2. UPDATED META WITH DETAILED FILTERS FOR EARRINGS & BRACELETS
const CATEGORY_META = {
  rings: {
    title: "Bespoke Diamond Rings",
    subtitle: "Sculpted Eternity",
    description: "An extraordinary collection of hand-forged diamond rings, ranging from timeless heritage cuts to contemporary celestial bands.",
    filters: [
      { id: "all", display: "All Masterwork Rings" },
      { id: "heritage", display: "Heritage Collection" },
      { id: "luminary", display: "Luminary Series" },
      { id: "solitaire", display: "Flawless Solitaires" }
    ]
  },
  necklaces: {
    title: "High Jewelry Necklaces",
    subtitle: "Breathtaking Silhouettes",
    description: "Statement neckpieces, collars, and exquisite diamond strands tailored for unmatched prominence.",
    filters: [
      { id: "all", display: "All Neckpieces" },
      { id: "heritage", display: "Heritage Antiques" },
      { id: "luminary", display: "Luminary Aesthetics" }
    ]
  },
  earrings: {
    title: "Statement Earrings",
    subtitle: "Luminous Radiance",
    description: "Linear diamond drops, traditional jhumkas, and brilliant studs configured to reflect light with every movement.",
    filters: [
      { id: "all", display: "All Creations" },
      { id: "heritage", display: "Heritage Drops" },
      { id: "luminary", display: "Modern Studs" },
      { id: "pear", display: "Pear Cut Specialties" }
    ]
  },
  bracelets: {
    title: "Luxury Bracelets & Cuffs",
    subtitle: "Liquid Metal Elegance",
    description: "Structured precious metal cuffs and fluid chain lines embedded with precision-cut diamonds.",
    filters: [
      { id: "all", display: "All Bracelets" },
      { id: "heritage", display: "Sculpted Cuffs" },
      { id: "luminary", display: "Tennis Lines" },
      { id: "solitaire", display: "Solitaire Accents" }
    ]
  }
};

interface PageProps {
  params: Promise<{ type: string }>;
}

export default function CategoryPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const typeKey = (resolvedParams.type.toLowerCase() as keyof typeof CATEGORY_META) || 'rings';
  const metadata = CATEGORY_META[typeKey] || CATEGORY_META.rings;

  const [activeFilter, setActiveFilter] = useState<string>('all');

  // Filter items down to only show products matching this page's category (e.g., rings)
  const categorySpecificItems = MASTER_CATALOG.filter(item => item.category === typeKey);

  // Sub-filter configuration logic
  const displayedItems = categorySpecificItems.filter(item => {
    if (activeFilter === 'all') return true;
    
    // Sort by either the collection origin or specific diamond cut traits
    return item.collectionSource === activeFilter || item.diamondCut === activeFilter;
  });

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Link href="/" className={styles.backLink}>← Return to Showroom</Link>
        <span className={styles.subtitle}>{metadata.subtitle}</span>
        <h1 className={styles.title}>{metadata.title}</h1>
        <p className={styles.description}>{metadata.description}</p>
      </header>

      {/* Interactive Filter Pills */}
      <div className={styles.filterWrapper}>
        <div className={styles.filterBar}>
          {metadata.filters.map((filter) => (
            <button
              key={filter.id}
              className={`${styles.filterButton} ${activeFilter === filter.id ? styles.activeFilter : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.display}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Display Grid */}
      <div className={styles.productGrid}>
        {displayedItems.map((product) => (
          <div key={product.sku} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={product.image} alt={product.name} className={styles.image} />
            </div>
            <div className={styles.meta}>
              <span className={styles.collectionTag}>{product.collectionSource} series</span>
              <h3 className={styles.itemName}>{product.name}</h3>
              <p className={styles.price}>{product.price}</p>
              <div className={styles.detailsList}>
                {product.details.map((detail, idx) => (
                  <span key={idx} className={styles.detailTag}>{detail}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}