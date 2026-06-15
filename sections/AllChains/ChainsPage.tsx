"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/Sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { chainData } from '@/data/chains';

export default function ChainsPage() {
  const [selectedChain, setSelectedChain] = useState<any | null>(null);

  return (
    <div className="pageWrapper">
      <NavbarPage />
      <header className="heroSection">
        <h1>EXQUISITE CHAINS</h1>
      </header>

      <main className="productGrid">
        {chainData.map((c) => (
          <div key={c.id} className="card">
            <div className="imageBox">
              <img src={c.img} alt={c.name} />
              <button className="quickViewBtn" onClick={() => setSelectedChain(c)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{c.name}</h4>
              <p className="priceText">{c.price}</p>
              <button className="viewDetailsBtn" onClick={() => setSelectedChain(c)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Reusable Modal Component */}
      {selectedChain && (
        <div className="modalOverlay" onClick={() => setSelectedChain(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedChain(null)}><X size={24} /></button>
            <div className="modalGrid">
              <img src={selectedChain.img} alt={selectedChain.name} />
              <div className="modalDetails">
                <h2>{selectedChain.name}</h2>
                <p className="modalPrice">{selectedChain.price}</p>
                <p>Meticulously crafted for grace and durability, our chains are the perfect foundation for any look.</p>
                <button className="bookBtn">Initiate Private Acquisition</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}