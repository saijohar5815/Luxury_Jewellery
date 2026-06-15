"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/Sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { chainData } from '@/data/necklaceset';

export default function ChainsPage() {
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  return (
    <div className="pageWrapper">
      <NavbarPage />
      <header className="heroSection">
        <h1>EXCLUSIVE CHAINS & SETS</h1>
      </header>

      <main className="productGrid">
        {chainData.map((c) => (
          <div key={c.id} className="card">
            <div className="imageBox">
              <img src={c.img} alt={c.name} />
              <button className="quickViewBtn" onClick={() => setSelectedItem(c)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{c.name}</h4>
              <p className="priceText">{c.price}</p>
              <button className="viewDetailsBtn" onClick={() => setSelectedItem(c)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {selectedItem && (
        <div className="modalOverlay" onClick={() => setSelectedItem(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedItem(null)}><X size={24} /></button>
            <div className="modalGrid">
              <img src={selectedItem.img} alt={selectedItem.name} />
              <div className="modalDetails">
                <h2>{selectedItem.name}</h2>
                <p className="modalPrice">{selectedItem.price}</p>
                <p>Meticulously crafted for elegance and poise, this piece defines luxury.</p>
                <button className="bookBtn">Initiate Private Acquisition</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}