"use client";

import React, { useState, use } from 'react';
import Link from 'next/link';
import styles from './CollectionPage.module.css';

interface ProductItem {
  sku: string;
  name: string;
  price: string;
  category: string; // Maps to the specific Capsule Theme
  image: string;
  materials: string[];
}

const COLLECTION_DATA = {
  heritage: {
    title: "The Heritage Collection",
    tagline: "Generations of Brilliance",
    description: "Timeless masterpieces reimagined for the modern collector, highlighting rare-cut diamonds, traditional hand-cut polki, and royal treasures secured in bespoke matrices.",
    filters: [
      { id: "all", display: "The Full Anthology" },
      { id: "royal", display: "👑 Royal Diamond Heritage" },
      { id: "kundan", display: "💎 Kundan & Polki Heritage" },
      { id: "artdeco", display: "✨ Art Deco Heritage" },
      { id: "pearl", display: "🤍 Pearl Heritage" },
      { id: "temple", display: "🏛 Temple Heritage" }
    ],
    items: [
      // 👑 Royal Diamond Heritage
      { sku: "HR-RD-01", name: "Imperial Crown Collection Choker", price: "$145,000", category: "royal", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800", materials: ["D-Flawless Diamonds", "Platinum 950", "Marquise Cuts"] },
      { sku: "HR-RD-02", name: "Queen's Legacy Solitaire Ring", price: "$82,000", category: "royal", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800", materials: ["Cushion Cut Diamond", "18K White Gold"] },
      { sku: "HR-RD-03", name: "Maharaja Diamonds Ceremonial Mala", price: "$210,000", category: "royal", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=800", materials: ["Golconda Diamonds", "22K Solid Gold Matrix"] },
      { sku: "HR-RD-04", name: "Eternal Brilliance Drop Earrings", price: "$35,500", category: "royal", image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800", materials: ["Baguette Cut Diamonds", "Platinum"] },
      
      // 💎 Kundan & Polki Heritage
      { sku: "HR-KP-01", name: "Mughal Majesty Uncut Diamond Set", price: "$125,000", category: "kundan", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800", materials: ["Syndicate Polki Diamonds", "Pure Gold Foil Foil-back", "Deccan Emeralds"] },
      { sku: "HR-KP-02", name: "Regal Bride Collection Jhumkas", price: "$48,000", category: "kundan", image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=800", materials: ["Handcrafted Jadau Polki", "Basra Pearls", "Ruby Beads"] },
      { sku: "HR-KP-03", name: "Palace Treasures Navratna Choker", price: "$95,000", category: "kundan", image: "https://phuljhadi.com/cdn/shop/files/0J7A1794copy_57f04fa9-ed72-4c69-ab93-a8c3359b03f5.jpg?v=1735816103", materials: ["Nine Auspicious Gems", "Traditional Kundan Setting"] },
      { sku: "HR-KP-04", name: "Timeless Traditions Kada Bracelet", price: "$32,000", category: "kundan", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800", materials: ["Meenakari Enamel", "Uncut Polki Diamonds"] },

      // ✨ Art Deco Heritage
      { sku: "HR-AD-01", name: "Vintage Glamour Geometric Pendant", price: "$29,000", category: "artdeco", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800", materials: ["Onyx Accents", "Brilliant Cut Diamonds", "White Gold"] },
      { sku: "HR-AD-02", name: "Geometric Elegance Drop Earrings", price: "$18,500", category: "artdeco", image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=800", materials: ["Step-Cut Sapphires", "Baguette Diamonds"] },
      { sku: "HR-AD-03", name: "Gatsby Collection Diamond Tiara Band", price: "$64,000", category: "artdeco", image: "https://i.pinimg.com/236x/65/d2/db/65d2dbf1b844b059aef001be0fc18434.jpg", materials: ["Platinum Line Work", "VVS Diamonds"] },
      { sku: "HR-AD-04", name: "Modern Classics Structural Bracelet", price: "$22,000", category: "artdeco", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800", materials: ["18K Yellow Gold", "Minimal Diamond Paths"] },

      // 🤍 Pearl Heritage
      { sku: "HR-PL-01", name: "Ocean Legacy Multi-Strand Strand", price: "$55,000", category: "pearl", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800", materials: ["South Sea Cultured Pearls", "Diamond Clasp Matrix"] },
      { sku: "HR-PL-02", name: "Moonlight Pearls Drop Earrings", price: "$14,000", category: "pearl", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800", materials: ["Tahitian Black Pearls", "18K White Gold Frame"] },
      { sku: "HR-PL-03", name: "Eternal Grace Baroque Pearl Ring", price: "$19,500", category: "pearl", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800", materials: ["Rare Form Baroque Pearl", "Champagne Diamonds"] },
      { sku: "HR-PL-04", name: "White Elegance Minimalist Cuff", price: "$26,000", category: "pearl", image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800", materials: ["Akoya Pearls", "Liquid Platinum Wire"] },

      // 🏛 Temple Heritage
      { sku: "HR-TP-01", name: "Divine Gold Antique Temple Choker", price: "$110,000", category: "temple", image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=800", materials: ["Antique Nakshi Work", "22K Gold", "Cabochon Rubies"] },
      { sku: "HR-TP-02", name: "Sacred Heritage Guttapusalu Heritage", price: "$78,000", category: "temple", image: "https://www.blog1.trymintly.com/wp-content/uploads/2023/05/il_fullxfull.3595054601_8l0h.webp", materials: ["Bunched Seed Pearls", "Kemp Stones", "Spinel Beads"] },
      { sku: "HR-TP-03", name: "Goddess Collection Sculpted Bangle", price: "$45,000", category: "temple", image: "https://ksupreme.in/cdn/shop/files/Traditional-Lakshmi-Multicolor-CZ-Enamel-Lotus-Design-Gold-Bangle.jpg?v=1762321709", materials: ["Repoussé Gold Work", "Divine Iconography Inlay"] },
      { sku: "HR-TP-04", name: "Ancient Splendor Intricate Medallion", price: "$31,000", category: "temple", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800", materials: ["22K Red Gold Base", "Uncut Emerald Drops"] }
    ] as ProductItem[]
  },
  luminary: {
    title: "The Luminary Series",
    tagline: "Celestial Architecture",
    description: "Inspired by astrological alignments, featuring flawless gemstones surrounded by cosmic radial fields of stellar dust and precious precious metals.",
    filters: [
      { id: "all", display: "The Full Cosmos" },
      { id: "celestial", display: "🌌 Celestial Lumina" },
      { id: "aurora", display: "✨ Aurora Lumina" },
      { id: "moonlight", display: "🌙 Moonlight Lumina" },
      { id: "starlight", display: "🌟 Starlight Lumina" },
      { id: "solar", display: "☀️ Solar Lumina" }
    ],
    items: [
      // 🌌 Celestial Lumina
      { sku: "LM-CL-01", name: "Infinite Cosmic Brilliance Pendant", price: "$52,000", category: "celestial", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800", materials: ["Deep Colombian Emerald", "18K Cosmic Gold", "Diamond Nebulae"] },
      
      // ✨ Aurora Lumina
      { sku: "LM-AL-01", name: "Northern Sky Vibrant Chromatic Ring", price: "$34,000", category: "aurora", image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=800", materials: ["Rare Paraiba Tourmaline", "Multi-Hue Fancy Sapphires"] },
      
      // 🌙 Moonlight Lumina
      { sku: "LM-ML-01", name: "Graceful Luminous Soft Elegance Drop", price: "$28,500", category: "moonlight", image: "https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&q=80&w=800", materials: ["Blue-Sheen Moonstone", "Liquid Platinum Wire", "Ice Diamonds"] },
      
      // 🌟 Starlight Lumina
      { sku: "LM-SL-01", name: "Night Sky Sparkle Micro-Pavé Choker", price: "$68,000", category: "starlight", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800", materials: ["Supernova Cut Diamonds", "VVS Micro-Pavé Elements"] },
      
      // ☀️ Solar Lumina
      { sku: "LM-SOL-01", name: "Bold Golden Vitality Statement Cuff", price: "$44,000", category: "solar", image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800", materials: ["Heavy 22K Brushed Gold", "Fancy Vivid Yellow Diamonds"] }
    ] as ProductItem[]
  }
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CollectionPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const collectionId = (resolvedParams.id as keyof typeof COLLECTION_DATA) || 'heritage';
  const collection = COLLECTION_DATA[collectionId] || COLLECTION_DATA.heritage;

  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems = activeFilter === 'all' 
    ? collection.items 
    : collection.items.filter(item => item.category === activeFilter);

  return (
    <main className={styles.pageWrapper}>
      {/* Editorial Luxury Top bar */}
      <header className={styles.topHeader}>
        <div className={styles.headerContainer}>
          <span className={styles.brandLogo}>MAISON DE LUXE</span>
          <Link href="/" className={styles.backAnchor}>
            ⟶ Return to Maison
          </Link>
        </div>
      </header>

      {/* Haute-Couture Exhibition Narrative */}
      <section className={styles.heroNarrative}>
        <div className={styles.heroContainer}>
          <span className={styles.goldSubtitle}>{collection.tagline}</span>
          <h1 className={styles.mainTitle}>{collection.title}</h1>
          <p className={styles.descriptionText}>{collection.description}</p>
          <div className={styles.tickerFrame}>
            <span className={styles.pulseDot} />
            <span className={styles.tickerText}>Exclusively available at private ateliers for 2026</span>
          </div>
        </div>
      </section>

      {/* Main Interactive Curated Exhibition Floor */}
      <section className={styles.gallerySection}>
        <div className={styles.galleryContainer}>
          
          {/* High-Concept Chapter Navigation Tabs */}
          <div className={styles.filterContainer}>
            <div className={styles.filterBar}>
              {collection.filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`${styles.filterPill} ${activeFilter === filter.id ? styles.filterActive : ''}`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.display}
                </button>
              ))}
            </div>
          </div>

          {/* Clean, Non-Overlapping Balanced Grid Framework */}
          <div className={styles.productGrid}>
            {filteredItems.map((item) => (
              <div key={item.sku} className={styles.productCard}>
                <div className={styles.imageBox}>
                  <img src={item.image} alt={item.name} className={styles.productImage} />
                  
                  {/* Dynamic Material Drawer Revealed via subtle high-contrast overlay */}
                  <div className={styles.cardHoverOverlay}>
                    <div className={styles.hoverContentInside}>
                      <div className={styles.tagDrawer}>
                        {item.materials.map((mat, i) => (
                          <span key={i} className={styles.materialTag}>{mat}</span>
                        ))}
                      </div>
                      <button className={styles.viewActionBtn}>Request Private Viewing</button>
                    </div>
                  </div>
                </div>

                {/* Balanced Editorial Metadata Grid Underneath Image */}
                <div className={styles.productMeta}>
                  <div className={styles.skuLabel}>SKU: {item.sku}</div>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <div className={styles.itemPrice}>{item.price}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}