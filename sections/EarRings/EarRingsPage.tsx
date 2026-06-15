"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/Sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { earringData } from '@/data/earrings';

export default function EarringPage() {
  const [selectedEarring, setSelectedEarring] = useState<any | null>(null);

  return (
    <div className="pageWrapper">
      <NavbarPage />
      <header className="heroSection">
        <h1>EXQUISITE EARRINGS</h1>
      </header>

      <main className="productGrid">
        {earringData.map((e) => (
          <div key={e.id} className="card">
            <div className="imageBox">
              <img src={e.img} alt={e.name} />
              <button className="quickViewBtn" onClick={() => setSelectedEarring(e)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{e.name}</h4>
              <p className="priceText">{e.price}</p>
              <button className="viewDetailsBtn" onClick={() => setSelectedEarring(e)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Modal Overlay */}
      {selectedEarring && (
        <div className="modalOverlay" onClick={() => setSelectedEarring(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedEarring(null)}><X size={24} /></button>
            <div className="modalGrid">
              <img src={selectedEarring.img} alt={selectedEarring.name} />
              <div className="modalDetails">
                <h2>{selectedEarring.name}</h2>
                <p className="modalPrice">{selectedEarring.price}</p>
                <p>Hand-crafted for those who appreciate the fine art of detail and luxury.</p>
                <button className="bookBtn">Initiate Private Acquisition</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}