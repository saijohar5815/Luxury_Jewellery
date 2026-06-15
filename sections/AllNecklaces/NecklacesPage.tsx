"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/Sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { necklaceData } from '@/data/necklaces';

export default function NecklacePage() {
  const [selectedNecklace, setSelectedNecklace] = useState<any | null>(null);

  return (
    <div className="pageWrapper">
      <NavbarPage />
      <header className="heroSection">
        <h1>SIGNATURE NECKLACES</h1>
      </header>

      <main className="productGrid">
        {necklaceData.map((n) => (
          <div key={n.id} className="card">
            <div className="imageBox">
              <img src={n.img} alt={n.name} />
              <button className="quickViewBtn" onClick={() => setSelectedNecklace(n)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{n.name}</h4>
              <p className="priceText">{n.price}</p>
              <button className="viewDetailsBtn" onClick={() => setSelectedNecklace(n)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Reusable Modal */}
      {selectedNecklace && (
        <div className="modalOverlay" onClick={() => setSelectedNecklace(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedNecklace(null)}><X size={24} /></button>
            <div className="modalGrid">
              <img src={selectedNecklace.img} alt={selectedNecklace.name} />
              <div className="modalDetails">
                <h2>{selectedNecklace.name}</h2>
                <p className="modalPrice">{selectedNecklace.price}</p>
                <p>An extraordinary piece designed to be the centerpiece of your formal ensemble.</p>
                <button className="bookBtn">Initiate Private Acquisition</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}