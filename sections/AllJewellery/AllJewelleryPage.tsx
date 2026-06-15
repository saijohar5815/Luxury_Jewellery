"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpDown, Search, Calendar, X } from 'lucide-react';
import './AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { productData } from '@/data/product';

export default function AllJewelleryPage() {
  const [isSticky, setIsSticky] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current) {
        setIsSticky(window.scrollY > filterRef.current.offsetTop);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pageWrapper">
      <NavbarPage />
      <header className="heroSection">
        <h1>ALL JEWELLERY</h1>
        <p>Timeless masterpieces crafted for every occasion</p>
      </header>

     
      <main className="productGrid">
        {productData.map((p) => (
          <div key={p.id} className="card">
            <div className="imageBox">
              <img src={p.img} alt={p.name} />
              <div className="hoverOverlay">
                <button className="quickViewBtn" onClick={() => setSelectedProduct(p)}>Quick View</button>
              </div>
            </div>
            <div className="cardInfo">
              <h4>{p.name}</h4>
              <p className="subText">18K Gold</p>
              <div className="rating">★★★★★</div>
              <p className="priceText">{p.price}</p>
              <button className="viewDetailsBtn" onClick={() => setSelectedProduct(p)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Modal Overlay */}
      {selectedProduct && (
        <div className="modalOverlay" onClick={() => setSelectedProduct(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedProduct(null)}><X size={24} /></button>
            <div className="modalGrid">
              <img src={selectedProduct.img} alt={selectedProduct.name} />
              <div className="modalDetails">
                <h2>{selectedProduct.name}</h2>
                <p className="modalPrice">{selectedProduct.price}</p>
                <div className="specs">
                  <p><strong>Reference:</strong> NA-0{selectedProduct.id}</p>
                  <p><strong>Composition:</strong> 18K White Gold / Platinum</p>
                </div>
                <p className="description">Hand-set with a D-flawless center stone, reflecting our commitment to timeless elegance.</p>
                <button className="bookBtn">Initiate Private Acquisition</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}