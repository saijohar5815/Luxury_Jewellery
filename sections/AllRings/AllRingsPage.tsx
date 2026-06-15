"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';
import '@/Sections/AllJewellery/AllJewellery.css'; 
import NavbarPage from '@/sections/LuxuryNavbar';
import { ringData } from '@/data/rings';

export default function AllRingsPage() {
  const [selectedRing, setSelectedRing] = useState<any | null>(null);

  return (
    <div className="pageWrapper">
      <NavbarPage />
      <header className="heroSection">
        <h1>OUR MASTERWORK RINGS</h1>
      </header>

      <main className="productGrid">
        {ringData.map((r) => (
          <div key={r.id} className="card">
            <div className="imageBox">
              <img src={r.img} alt={r.name} />
              <button className="quickViewBtn" onClick={() => setSelectedRing(r)}>Quick View</button>
            </div>
            <div className="cardInfo">
              <h4>{r.name}</h4>
              <p className="priceText">{r.price}</p>
              <button className="viewDetailsBtn" onClick={() => setSelectedRing(r)}>View Details →</button>
            </div>
          </div>
        ))}
      </main>

      {/* Modal Popup for Ring Details */}
      {selectedRing && (
        <div className="modalOverlay" onClick={() => setSelectedRing(null)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeModal" onClick={() => setSelectedRing(null)}><X size={24} /></button>
            <div className="modalGrid">
              <img src={selectedRing.img} alt={selectedRing.name} />
              <div className="modalDetails">
                <h2>{selectedRing.name}</h2>
                <p className="modalPrice">{selectedRing.price}</p>
                <p>An exquisite piece from our signature collection, handcrafted for perfection.</p>
                <button className="bookBtn">Initiate Private Acquisition</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}