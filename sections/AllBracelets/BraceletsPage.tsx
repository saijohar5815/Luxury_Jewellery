"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/Sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { braceletData } from '@/data/bracelets';

export default function BraceletsPage() {
  const [selectedBracelet, setSelectedBracelet] = useState<any | null>(null);

  return (
    <div className="pageWrapper">
      <NavbarPage />
      <header className="heroSection">
        <h1>EXQUISITE BRACELETS</h1>
      </header>

      <main className="productGrid">
        {braceletData.map((b) => (
          <div key={b.id} className="card">
            <div className="imageBox">
              <img src={b.img} alt={b.name} />
              <button className="quickViewBtn" onClick={() => setSelectedBracelet(b)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{b.name}</h4>
              <p className="priceText">{b.price}</p>
              <button className="viewDetailsBtn" onClick={() => setSelectedBracelet(b)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Reusable Modal */}
      {selectedBracelet && (
        <div className="modalOverlay" onClick={() => setSelectedBracelet(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedBracelet(null)}><X size={24} /></button>
            <div className="modalGrid">
              <img src={selectedBracelet.img} alt={selectedBracelet.name} />
              <div className="modalDetails">
                <h2>{selectedBracelet.name}</h2>
                <p className="modalPrice">{selectedBracelet.price}</p>
                <p>Meticulously designed for your wrist, blending artisanal craftsmanship with modern luxury.</p>
                <button className="bookBtn">Initiate Private Acquisition</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}