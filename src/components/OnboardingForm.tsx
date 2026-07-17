"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BikeProfile, BIKE_MODELS, AVAILABLE_YEARS } from '@/lib/diagnosticData';
import {
  User, Bike, Calendar, ChevronLeft,
  Check, Sparkles, ArrowRight
} from 'lucide-react';

interface OnboardingFormProps {
  onComplete: (profile: BikeProfile & { name: string }) => void;
}

const STEPS = ['Identitas', 'Merek', 'Model', 'Tahun'];

const BRAND_LOGOS: Record<string, string> = {
  Honda: 'https://static.vecteezy.com/system/resources/previews/020/336/706/original/honda-logo-honda-icon-free-free-vector.jpg',
  Yamaha: 'https://listcarbrands.com/wp-content/uploads/2022/12/Yamaha-Logo.png',
};

export const OnboardingForm: React.FC<OnboardingFormProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [brand, setBrand] = useState<'Honda' | 'Yamaha' | null>(null);
  const [model, setModel] = useState<string | null>(null);
  const [year, setYear] = useState<number | null>(null);
  const [focused, setFocused] = useState(false);

  const canNext = [
    name.trim().length > 0,
    brand !== null,
    model !== null,
    year !== null,
  ];

  const goNext = () => {
    if (step < 3) setStep(s => s + 1);
    else if (brand && model && year) {
      onComplete({ name, brand, model, type: 'Matic', year });
    }
  };

  const goPrev = () => setStep(s => s - 1);

  const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  const [dir, setDir] = useState(1);
  const handleNext = () => { setDir(1); goNext(); };
  const handlePrev = () => { setDir(-1); goPrev(); };

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* ── Card wrapper ── */}
      <div className="relative rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 0 0 0.5px rgba(255,255,255,0.04) inset, 0 24px 80px rgba(0,0,0,0.7), 0 0 100px rgba(109,40,217,0.12)',
          backdropFilter: 'blur(28px)',
        }}
      >
        {/* Top gradient bar */}
        <div className="h-0.5 w-full"
          style={{ background: 'linear-gradient(90deg, #7c3aed, #2563eb, #06b6d4)' }}
        />

        {/* ── Header ── */}
        <div className="px-8 pt-8 pb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                Langkah {step + 1} dari {STEPS.length}
              </p>
              <h2 className="text-2xl font-black text-white">{STEPS[step]}</h2>
            </div>

            {/* Step icon */}
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.25), rgba(37,99,235,0.25))',
                border: '1px solid rgba(139,92,246,0.3)',
                boxShadow: '0 0 20px rgba(124,58,237,0.3)',
              }}
            >
              {step === 0 && <User size={22} className="text-violet-300" />}
              {step === 1 && <Bike size={22} className="text-violet-300" />}
              {step === 2 && <Sparkles size={22} className="text-violet-300" />}
              {step === 3 && <Calendar size={22} className="text-violet-300" />}
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative h-1 rounded-full overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{ background: 'linear-gradient(90deg, #7c3aed, #2563eb)' }}
              animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            />
          </div>

          {/* Step dots */}
          <div className="flex gap-2 mt-3">
            {STEPS.map((s, i) => (
              <motion.div key={s}
                animate={{
                  background: i <= step
                    ? 'linear-gradient(135deg, #7c3aed, #2563eb)'
                    : 'rgba(255,255,255,0.07)',
                  scale: i === step ? 1 : 0.85,
                }}
                transition={{ duration: 0.3 }}
                className="flex-1 h-1 rounded-full cursor-pointer"
                onClick={() => i < step && setStep(i)}
              />
            ))}
          </div>
        </div>

        {/* ── Content area ── */}
        <div className="px-8 pb-8" style={{ minHeight: '280px' }}>
          <AnimatePresence mode="wait" custom={dir}>

            {/* STEP 0 — Nama */}
            {step === 0 && (
              <motion.div key="step0"
                custom={dir}
                variants={slideVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="space-y-6"
              >
                <p className="text-slate-400 text-sm leading-relaxed">
                  Halo! Siapa nama Anda? Kami akan mempersonalisasi hasil diagnosis untuk Anda.
                </p>

                {/* Floating label input */}
                <div className="relative mt-8">
                  <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{
                      boxShadow: focused
                        ? '0 0 0 2px rgba(124,58,237,0.5), 0 0 30px rgba(124,58,237,0.2)'
                        : '0 0 0 1px rgba(255,255,255,0.08)',
                    }}
                    transition={{ duration: 0.25 }}
                  />
                  <div className="relative rounded-2xl overflow-hidden"
                    style={{ background: 'rgba(255,255,255,0.03)' }}
                  >
                    <div className="flex items-center px-5 py-4 gap-3">
                      <User size={18} className={focused || name ? 'text-violet-400' : 'text-slate-600'} />
                      <div className="flex-1 relative">
                        <motion.label
                          animate={{
                            y: focused || name ? -20 : 0,
                            scale: focused || name ? 0.78 : 1,
                            color: focused ? '#c4b5fd' : '#64748b',
                          }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 font-semibold pointer-events-none origin-left"
                          style={{ top: '2px' }}
                        >
                          Nama lengkap Anda
                        </motion.label>
                        <input
                          type="text"
                          value={name}
                          onChange={e => setName(e.target.value)}
                          onFocus={() => setFocused(true)}
                          onBlur={() => setFocused(false)}
                          className="w-full bg-transparent text-white font-semibold text-base outline-none pt-4"
                          autoFocus
                        />
                      </div>
                      <AnimatePresence>
                        {name.length > 0 && (
                          <motion.div
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0 }}
                            className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                            style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}
                          >
                            <Check size={12} className="text-white" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>

                {/* Greeting preview */}
                <AnimatePresence>
                  {name.trim().length > 2 && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(37,99,235,0.1))',
                        border: '1px solid rgba(139,92,246,0.2)',
                      }}
                    >
                      <span className="text-2xl">👋</span>
                      <p className="text-sm font-semibold text-slate-300">
                        Halo, <span className="text-violet-300 font-black">{name}</span>! Mari mulai diagnosa motor Anda.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {/* STEP 1 — Merek */}
            {step === 1 && (
              <motion.div key="step1"
                custom={dir}
                variants={slideVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="space-y-5"
              >
                <p className="text-slate-400 text-sm">Pilih merek motor matic yang akan Anda diagnosa.</p>

                <div className="grid grid-cols-2 gap-4 mt-2">
                  {(['Honda', 'Yamaha'] as const).map((b, i) => {
                    const isSelected = brand === b;
                    return (
                      <motion.button
                        key={b}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ scale: 1.03, y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => setBrand(b)}
                        className="relative flex flex-col items-center justify-center gap-3 py-8 rounded-2xl font-bold transition-all duration-300 overflow-hidden"
                        style={isSelected ? {
                          background: 'linear-gradient(145deg, rgba(124,58,237,0.35), rgba(37,99,235,0.35))',
                          border: '1px solid rgba(139,92,246,0.6)',
                          boxShadow: '0 0 40px rgba(124,58,237,0.35), inset 0 0 30px rgba(124,58,237,0.05)',
                          color: 'white',
                        } : {
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.07)',
                          color: '#64748b',
                        }}
                      >
                        {/* Glow orb behind icon when selected */}
                        {isSelected && (
                          <motion.div
                            className="absolute inset-0 rounded-2xl"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2.5, repeat: Infinity }}
                            style={{
                              background: 'radial-gradient(circle at 50% 40%, rgba(139,92,246,0.3) 0%, transparent 65%)',
                            }}
                          />
                        )}

                        {/* Brand logo */}
                        <div className="relative z-10 w-20 h-20 rounded-2xl overflow-hidden flex items-center justify-center"
                          style={{
                            background: b === 'Honda' ? 'rgba(255,255,255,0.95)' : 'rgba(10,10,30,0.85)',
                            boxShadow: isSelected ? '0 0 24px rgba(139,92,246,0.5)' : '0 4px 16px rgba(0,0,0,0.4)',
                            border: '2px solid rgba(255,255,255,0.1)',
                          }}
                        >
                          <img
                            src={BRAND_LOGOS[b]}
                            alt={`Logo ${b}`}
                            width={64}
                            height={64}
                            style={{ objectFit: 'contain', width: '64px', height: '64px' }}
                          />
                        </div>

                        <div className="relative z-10 text-center">
                          <div className="font-black text-lg">{b}</div>
                          <div className="text-xs mt-0.5" style={{ color: isSelected ? '#c4b5fd' : '#475569' }}>
                            {b === 'Honda' ? 'Beat, Vario, PCX, ADV...' : 'NMAX, Aerox, Fazzio, Lexi...'}
                          </div>
                        </div>

                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center"
                            style={{ background: 'linear-gradient(135deg, #7c3aed, #2563eb)' }}
                          >
                            <Check size={11} className="text-white" />
                          </motion.div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 2 — Model */}
            {step === 2 && brand && (
              <motion.div key="step2"
                custom={dir}
                variants={slideVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl overflow-hidden flex items-center justify-center shrink-0"
                    style={{ background: brand === 'Honda' ? 'white' : 'rgba(10,10,30,0.9)' }}
                  >
                    <img src={BRAND_LOGOS[brand]} alt={brand} style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                  </div>
                  <p className="text-slate-400 text-sm">
                    Pilih model motor <span className="text-white font-bold">{brand}</span> Anda.
                    <span className="text-slate-500 text-xs ml-1">({BIKE_MODELS[brand].length} model tersedia)</span>
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 max-h-64 overflow-y-auto pr-1"
                  style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(139,92,246,0.4) transparent' }}
                >
                  {BIKE_MODELS[brand].map((m, i) => {
                    const isSelected = model === m;
                    return (
                      <motion.button
                        key={m}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05, type: 'spring', stiffness: 280 }}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        onClick={() => setModel(m)}
                        className="relative py-3.5 px-4 rounded-xl font-bold text-sm text-left transition-all duration-250 overflow-hidden"
                        style={isSelected ? {
                          background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                          boxShadow: '0 0 22px rgba(124,58,237,0.5), 0 4px 12px rgba(0,0,0,0.4)',
                          color: 'white',
                          border: '1px solid transparent',
                        } : {
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid rgba(255,255,255,0.08)',
                          color: '#64748b',
                        }}
                      >
                        {isSelected && (
                          <motion.div
                            className="absolute inset-0"
                            animate={{ opacity: [0.4, 0.7, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            style={{
                              background: 'radial-gradient(ellipse at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
                            }}
                          />
                        )}
                        <span className="relative z-10 flex items-center justify-between">
                          {m}
                          {isSelected && <Check size={14} className="text-white/80" />}
                        </span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 3 — Tahun */}
            {step === 3 && (
              <motion.div key="step3"
                custom={dir}
                variants={slideVariants}
                initial="enter" animate="center" exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="space-y-5"
              >
                <p className="text-slate-400 text-sm">
                  Pilih tahun keluaran motor <span className="text-white font-bold">{brand} {model}</span> Anda.
                </p>

                {/* Year scroll grid — recent years highlighted */}
                <div className="grid grid-cols-5 gap-2">
                  {AVAILABLE_YEARS.slice(0, 15).map((y, i) => {
                    const isSelected = year === y;
                    const isRecent = y >= 2022;
                    return (
                      <motion.button
                        key={y}
                        initial={{ opacity: 0, scale: 0.7 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.025, type: 'spring', stiffness: 250 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.94 }}
                        onClick={() => setYear(y)}
                        className="py-2.5 rounded-xl font-black text-sm transition-all duration-250"
                        style={isSelected ? {
                          background: 'linear-gradient(135deg, #7c3aed, #2563eb)',
                          boxShadow: '0 0 18px rgba(124,58,237,0.55)',
                          color: 'white',
                          border: '1px solid transparent',
                        } : isRecent ? {
                          background: 'rgba(124,58,237,0.08)',
                          border: '1px solid rgba(139,92,246,0.2)',
                          color: '#a78bfa',
                        } : {
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid rgba(255,255,255,0.06)',
                          color: '#475569',
                        }}
                      >
                        {y}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Older years dropdown */}
                <div className="relative mt-1">
                  <select
                    onChange={e => setYear(parseInt(e.target.value))}
                    defaultValue=""
                    className="w-full rounded-xl px-4 py-3 text-sm font-semibold appearance-none outline-none cursor-pointer"
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      color: '#64748b',
                    }}
                  >
                    <option value="" disabled className="bg-[#0a0618]">Atau pilih tahun lebih lama...</option>
                    {AVAILABLE_YEARS.slice(15).map(y => (
                      <option key={y} value={y} className="bg-[#0a0618] text-white">{y}</option>
                    ))}
                  </select>
                </div>

                {/* Preview */}
                <AnimatePresence>
                  {year && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(124,58,237,0.1), rgba(37,99,235,0.1))',
                        border: '1px solid rgba(139,92,246,0.2)',
                      }}
                    >
                      <Bike size={16} className="text-violet-400 shrink-0" />
                      <p className="text-sm text-slate-300">
                        <span className="font-black text-white">{brand} {model}</span>
                        <span className="text-violet-400 font-bold"> {year}</span>
                        <span className="text-slate-500"> — siap diagnosa!</span>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Navigation ── */}
        <div className="px-8 pb-8 flex gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          {/* Back button */}
          <AnimatePresence>
            {step > 0 && (
              <motion.button
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handlePrev}
                className="flex items-center gap-2 px-5 py-4 rounded-xl font-bold text-sm text-slate-400 transition-all"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <ChevronLeft size={18} />
                Kembali
              </motion.button>
            )}
          </AnimatePresence>

          {/* Next / Submit button */}
          <motion.button
            className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-black text-sm transition-all duration-300 relative overflow-hidden"
            whileHover={canNext[step] ? { scale: 1.02 } : {}}
            whileTap={canNext[step] ? { scale: 0.98 } : {}}
            onClick={canNext[step] ? handleNext : undefined}
            style={canNext[step] ? {
              background: step === 3
                ? 'linear-gradient(135deg, #059669, #2563eb)'
                : 'linear-gradient(135deg, #7c3aed, #2563eb)',
              boxShadow: step === 3
                ? '0 0 32px rgba(5,150,105,0.45)'
                : '0 0 32px rgba(124,58,237,0.45)',
              color: 'white',
              cursor: 'pointer',
            } : {
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.06)',
              color: '#334155',
              cursor: 'not-allowed',
            }}
          >
            {/* Shimmer */}
            {canNext[step] && (
              <motion.div
                className="absolute inset-0 -skew-x-12"
                animate={{ x: ['-150%', '200%'] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
                style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)', width: '50%' }}
              />
            )}
            <span className="relative z-10 flex items-center gap-2">
              {step === 3 ? (
                <><Sparkles size={18} /> Mulai Diagnosis</>
              ) : (
                <>{STEPS[step + 1]} <ArrowRight size={18} /></>
              )}
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};
