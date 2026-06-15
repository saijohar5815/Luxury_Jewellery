"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/Sections/AllJewellery/AllJewellery.css';  
import NavbarPage from '@/sections/LuxuryNavbar';
import { nosePinData } from '@/data/nosepins';

export default function NosePinPage() {
  const [selectedPin, setSelectedPin] = useState<any | null>(null);

  return (
    <div className="pageWrapper">
      <NavbarPage />
      <header className="heroSection">
        <h1>EXQUISITE NOSE PINS</h1>
      </header>

      <main className="productGrid">
        {nosePinData.map((p) => (
          <div key={p.id} className="card">
            <div className="imageBox">
              <img src={p.img} alt={p.name} />
              <button className="quickViewBtn" onClick={() => setSelectedPin(p)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{p.name}</h4>
              <p className="priceText">{p.price}</p>
              <button className="viewDetailsBtn" onClick={() => setSelectedPin(p)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Reusable Modal Component */}
      {selectedPin && (
        <div className="modalOverlay" onClick={() => setSelectedPin(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedPin(null)}><X size={24} /></button>
            <div className="modalGrid">
              <img src={selectedPin.img} alt={selectedPin.name} />
              <div className="modalDetails">
                <h2>{selectedPin.name}</h2>
                <p className="modalPrice">{selectedPin.price}</p>
                <p>Designed for grace and elegance, a delicate addition to your collection.</p>
                <button className="bookBtn">Initiate Private Acquisition</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}