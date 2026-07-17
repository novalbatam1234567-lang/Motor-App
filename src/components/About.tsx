"use client";
import React from 'react';

export const About: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-white mb-4">Tentang MotoDiagnose</h1>
        <p className="text-slate-400 text-lg">Sistem pakar cerdas untuk diagnosa kerusakan motor matic</p>
      </div>
      
      <div className="p-6 rounded-2xl" style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <h3 className="text-lg font-bold text-white mb-2">Misi Kami</h3>
        <p className="text-slate-400">
          Memberikan solusi diagnosa motor matic yang cepat, akurat, dan mudah diakses oleh semua pengguna motor di Indonesia.
        </p>
      </div>
    </div>
  );
};
