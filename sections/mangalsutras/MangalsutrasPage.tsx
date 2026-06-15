"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/Sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { mangalsutraData } from '@/data/mangalsutras';

export default function MangalsutraPage() {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  return (
    <div className="pageWrapper">
      <NavbarPage />
      <header className="heroSection">
        <h1>TRADITIONAL MANGALSUTRA</h1>
      </header>

      <main className="productGrid">
        {mangalsutraData.map((m) => (
          <div key={m.id} className="card">
            <div className="imageBox">
              <img src={m.img} alt={m.name} />
              <button className="quickViewBtn" onClick={() => setSelectedItem(m)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{m.name}</h4>
              <p className="priceText">{m.price}</p>
              <button className="viewDetailsBtn" onClick={() => setSelectedItem(m)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Reusable Modal */}
      {selectedItem && (
        <div className="modalOverlay" onClick={() => setSelectedItem(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedItem(null)}><X size={24} /></button>
            <div className="modalGrid">
              <img src={selectedItem.img} alt={selectedItem.name} />
              <div className="modalDetails">
                <h2>{selectedItem.name}</h2>
                <p className="modalPrice">{selectedItem.price}</p>
                <p>A timeless symbol of love, meticulously crafted with tradition and modern aesthetics.</p>
                <button className="bookBtn">Initiate Private Acquisition</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}