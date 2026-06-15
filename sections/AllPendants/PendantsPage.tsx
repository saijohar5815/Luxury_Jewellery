"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/Sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { pendantData } from '@/data/pendants';

export default function PendantsPage() {
  const [selectedPendant, setSelectedPendant] = useState<any | null>(null);

  return (
    <div className="pageWrapper">
      <NavbarPage />
      <header className="heroSection">
        <h1>EXQUISITE PENDANTS</h1>
      </header>

      <main className="productGrid">
        {pendantData.map((p) => (
          <div key={p.id} className="card">
            <div className="imageBox">
              <img src={p.img} alt={p.name} />
              <button className="quickViewBtn" onClick={() => setSelectedPendant(p)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{p.name}</h4>
              <p className="priceText">{p.price}</p>
              <button className="viewDetailsBtn" onClick={() => setSelectedPendant(p)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Reusable Modal Component */}
      {selectedPendant && (
        <div className="modalOverlay" onClick={() => setSelectedPendant(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedPendant(null)}><X size={24} /></button>
            <div className="modalGrid">
              <img src={selectedPendant.img} alt={selectedPendant.name} />
              <div className="modalDetails">
                <h2>{selectedPendant.name}</h2>
                <p className="modalPrice">{selectedPendant.price}</p>
                <p>Designed for grace, these pendants add a refined touch to any necklace collection.</p>
                <button className="bookBtn">Initiate Private Acquisition</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}