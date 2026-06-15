"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/Sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { pendantSetData } from '@/data/pendantSets';

export default function PendantSetPage() {
  const [selectedSet, setSelectedSet] = useState<any | null>(null);

  return (
    <div className="pageWrapper">
      <NavbarPage />
      <header className="heroSection">
        <h1>PENDANT & EARRING SETS</h1>
      </header>

      <main className="productGrid">
        {pendantSetData.map((item) => (
          <div key={item.id} className="card">
            <div className="imageBox">
              <img src={item.img} alt={item.name} />
              <button className="quickViewBtn" onClick={() => setSelectedSet(item)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{item.name}</h4>
              <p className="priceText">{item.price}</p>
              <button className="viewDetailsBtn" onClick={() => setSelectedSet(item)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Reusable Modal Component */}
      {selectedSet && (
        <div className="modalOverlay" onClick={() => setSelectedSet(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedSet(null)}><X size={24} /></button>
            <div className="modalGrid">
              <img src={selectedSet.img} alt={selectedSet.name} />
              <div className="modalDetails">
                <h2>{selectedSet.name}</h2>
                <p className="modalPrice">{selectedSet.price}</p>
                <p>A perfectly coordinated set designed to add harmonious luxury to your ensemble.</p>
                <button className="bookBtn">Initiate Private Acquisition</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}