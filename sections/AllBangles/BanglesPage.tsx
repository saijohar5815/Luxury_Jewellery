"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/Sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { bangleData } from '@/data/bangles';

export default function BanglesPage() {
  const [selectedBangle, setSelectedBangle] = useState<any | null>(null);

  return (
    <div className="pageWrapper">
      <NavbarPage />
      <header className="heroSection">
        <h1>BANGLE COLLECTION</h1>
      </header>

      <main className="productGrid">
        {bangleData.map((b) => (
          <div key={b.id} className="card">
            <div className="imageBox">
              <img src={b.img} alt={b.name} />
              <button className="quickViewBtn" onClick={() => setSelectedBangle(b)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{b.name}</h4>
              <p className="priceText">{b.price}</p>
              <button className="viewDetailsBtn" onClick={() => setSelectedBangle(b)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Reusable Modal */}
      {selectedBangle && (
        <div className="modalOverlay" onClick={() => setSelectedBangle(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedBangle(null)}><X size={24} /></button>
            <div className="modalGrid">
              <img src={selectedBangle.img} alt={selectedBangle.name} />
              <div className="modalDetails">
                <h2>{selectedBangle.name}</h2>
                <p className="modalPrice">{selectedBangle.price}</p>
                <p>Meticulously crafted gold and stone-studded bangles, perfect for grand celebrations.</p>
                <button className="bookBtn">Initiate Private Acquisition</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}