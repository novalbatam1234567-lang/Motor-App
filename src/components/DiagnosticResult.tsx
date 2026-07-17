import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DiagnosticRule, BikeProfile } from '@/lib/diagnosticData';
import {
  AlertTriangle, Wrench, RefreshCcw, Info,
  CheckCircle2, ChevronDown, ChevronUp, Bike,
  ArrowRight, ShieldAlert, BadgeCheck, Sparkles, Target
} from 'lucide-react';

interface DiagnosticResultProps {
  results: DiagnosticRule[];
  profile: BikeProfile & { name: string };
  onReset: () => void;
}

/* ── Premium Animated progress bar ── */
function ProgressBar({ pct, color, delay }: { pct: number; color: string; delay: number }) {
  return (
    <div className="h-2 w-full rounded-full overflow-hidden relative"
      style={{ background: 'rgba(0,0,0,0.4)', boxShadow: 'inset 0 1px 4px rgba(0,0,0,0.6)' }}
    >
      <motion.div
        className="absolute top-0 bottom-0 left-0 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${pct}%` }}
        transition={{ duration: 1.5, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ 
          background: `linear-gradient(90deg, ${color}40, ${color})`,
          boxShadow: `0 0 12px ${color}80`
        }}
      >
        <motion.div 
          className="absolute inset-0"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)' }}
        />
      </motion.div>
    </div>
  );
}

/* ── Confidence score mapping ── */
function getConfidence(idx: number, total: number) {
  const scores = [96, 82, 65, 48, 35];
  return scores[idx] ?? Math.max(20, 35 - idx * 8);
}

export const DiagnosticResult: React.FC<DiagnosticResultProps> = ({ results, profile, onReset }) => {
  const [expanded, setExpanded] = useState<Set<number>>(new Set([0]));
  const [showAll, setShowAll]   = useState(false);
  const [isScanning, setIsScanning] = useState(true);

  // Premium loading simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsScanning(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const toggleExpand = (idx: number) => {
    const s = new Set(expanded);
    s.has(idx) ? s.delete(idx) : s.add(idx);
    setExpanded(s);
  };

  const displayed = showAll ? results : results.slice(0, 3);
  const hasMore   = results.length > 3;

  // Premium High-Tech Color Palette
  const ACCENT_COLORS = ['#38bdf8','#818cf8','#34d399','#fbbf24','#f87171'];
  const ACCENT_GLOWS  = [
    'rgba(56,189,248,0.5)','rgba(129,140,248,0.5)',
    'rgba(52,211,153,0.5)','rgba(251,191,36,0.5)','rgba(248,113,113,0.5)',
  ];

  if (isScanning) {
    return (
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center py-32 h-[60vh]">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="relative w-32 h-32 mb-10 flex items-center justify-center"
        >
          {/* Complex scanning rings */}
          <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-indigo-500 border-l-indigo-500 blur-[1px]"></div>
          <div className="absolute inset-2 rounded-full border-[2px] border-transparent border-r-sky-400 border-b-sky-400 opacity-80" style={{ animation: 'spin 2s linear infinite reverse' }}></div>
          <div className="absolute inset-5 rounded-full border border-dashed border-emerald-400 opacity-60" style={{ animation: 'spin 4s linear infinite' }}></div>
          <motion.div 
            animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full bg-indigo-500/10 blur-xl"
          />
          <Target className="text-indigo-300 relative z-10" size={40} />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.h3 
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-400 tracking-widest uppercase mb-3 drop-shadow-[0_0_15px_rgba(129,140,248,0.5)]"
            style={{ backgroundSize: '200% auto', animation: 'gradient 3s linear infinite' }}
          >
            Memproses Diagnosa
          </motion.h3>
          <div className="flex flex-col items-center gap-2">
            <p className="text-slate-400 text-sm font-medium tracking-wide">AI SYSTEM ANALYZING SENSORY DATA...</p>
            <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-indigo-500 to-sky-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
      className="w-full max-w-3xl mx-auto pb-10"
    >

      {/* ══ PREMIUM HERO HEADER ══ */}
      <div className="relative overflow-hidden rounded-[2.5rem] mb-8 p-10 text-center shadow-2xl"
        style={{
          background: 'linear-gradient(160deg, rgba(30,27,75,0.8) 0%, rgba(15,23,42,0.95) 100%)',
          border: '1px solid rgba(129,140,248,0.25)',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255,255,255,0.1)'
        }}
      >
        {/* Animated Tech Background */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(129,140,248,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(129,140,248,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            backgroundPosition: 'center center'
          }}
        />
        <motion.div
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(129,140,248,0.8) 0%, transparent 50%)',
            backgroundSize: '100% 100%'
          }}
        />

        {/* Sweeping Highlight */}
        <motion.div
          animate={{ left: ['-100%', '200%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 bottom-0 w-1/2 pointer-events-none skew-x-[-20deg]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)' }}
        />

        {/* Premium Icon Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.1 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mx-auto mb-6 relative z-10"
          style={{
            background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(14,165,233,0.1))',
            border: '1px solid rgba(129,140,248,0.4)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 40px rgba(99,102,241,0.4), inset 0 0 20px rgba(129,140,248,0.2)',
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-[-1px] rounded-3xl"
            style={{ 
              background: 'conic-gradient(from 0deg, transparent, rgba(129,140,248,0.8), transparent)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              padding: '1px'
            }}
          />
          <BadgeCheck size={36} className="text-indigo-300 relative z-10 drop-shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
        </motion.div>

        {/* Title & Glow */}
        <div className="relative z-10">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -inset-4 bg-indigo-500/20 blur-2xl rounded-full"
          />
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-slate-300 mb-3 relative z-10 drop-shadow-sm"
          >
            Laporan Diagnosa AI
          </motion.h2>
        </div>

        {/* Profile Card Summary */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative z-10 inline-flex items-center gap-3 px-5 py-2.5 rounded-full mt-2"
          style={{ 
            background: 'rgba(15,23,42,0.6)', 
            border: '1px solid rgba(148,163,184,0.15)',
            boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 4px 6px -1px rgba(0,0,0,0.5)'
          }}
        >
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center shadow-lg">
            <Bike size={14} className="text-white" />
          </div>
          <span className="text-sm">
            <span className="text-indigo-200 font-bold uppercase tracking-wider">{profile.name}</span>
            <span className="text-slate-500 mx-2">|</span>
            <span className="text-white font-black">{profile.brand} {profile.model}</span>
            <span className="text-slate-500 mx-2">|</span>
            <span className="text-sky-300 font-semibold">{profile.year}</span>
          </span>
        </motion.div>

        {/* High-End Stats Row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          className="relative z-10 flex items-center justify-center gap-4 mt-8"
        >
          {[
            { v: results.length, l: 'Total Temuan', c: '#818cf8', icon: AlertTriangle },
            { v: `${getConfidence(0, results.length)}%`, l: 'Akurasi Puncak', c: '#34d399', icon: Target },
          ].map((s, i) => (
            <div key={s.l} className="flex-1 max-w-[200px] flex items-center gap-4 p-4 rounded-2xl"
              style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.03)' }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${s.c}15`, border: `1px solid ${s.c}30` }}
              >
                <s.icon size={18} style={{ color: s.c }} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-black tracking-tight" style={{ color: s.c, textShadow: `0 0 15px ${s.c}60` }}>
                  {s.v}
                </div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{s.l}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ══ PREMIUM RESULT CARDS ══ */}
      <div className="space-y-4 mb-8">
        <AnimatePresence>
          {displayed.map((result, idx) => {
            const color    = ACCENT_COLORS[idx % ACCENT_COLORS.length];
            const glow     = ACCENT_GLOWS[idx % ACCENT_GLOWS.length];
            const conf     = getConfidence(idx, results.length);
            const isOpen   = expanded.has(idx);
            const isTop    = idx === 0;

            return (
              <motion.div key={result.id}
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
                transition={{ delay: 0.1 + idx * 0.1, duration: 0.5, type: 'spring', bounce: 0.4 }}
                className="relative overflow-hidden rounded-3xl group"
                style={{
                  background: isTop
                    ? `linear-gradient(160deg, ${color}15, rgba(15,23,42,0.8) 60%)`
                    : 'linear-gradient(160deg, rgba(30,41,59,0.5), rgba(15,23,42,0.8))',
                  border: isTop
                    ? `1px solid ${color}40`
                    : '1px solid rgba(255,255,255,0.05)',
                  boxShadow: isTop 
                    ? `0 10px 30px -10px ${glow}40, inset 0 1px 0 rgba(255,255,255,0.1)` 
                    : '0 10px 20px -10px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.02)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                {/* Neon Side Bar */}
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 w-1 rounded-l-3xl"
                  animate={isTop ? { opacity: [0.6, 1, 0.6], width: [4, 6, 4] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ 
                    background: `linear-gradient(to bottom, ${color}, ${color}20)`,
                    boxShadow: `0 0 15px ${color}`
                  }}
                />

                {/* Ambient Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 80% 20%, ${color}10, transparent 50%)` }}
                />

                {/* Top badge for #1 */}
                {isTop && (
                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, type: 'spring' }}
                    className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-black tracking-widest shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${color}30, ${color}10)`, border:`1px solid ${color}50`, color, backdropFilter: 'blur(5px)' }}
                  >
                    <Sparkles size={10} className="animate-pulse" />
                    PALING MUNGKIN
                  </motion.div>
                )}

                {/* Card header — clickable */}
                <button
                  className="w-full flex items-center gap-5 px-6 py-5 text-left relative z-10"
                  onClick={() => toggleExpand(idx)}
                >
                  {/* Number bubble with premium style */}
                  <div className="relative">
                    {isTop && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        className="absolute -inset-1.5 rounded-2xl border border-dashed opacity-50"
                        style={{ borderColor: color }}
                      />
                    )}
                    <motion.div
                      className="relative w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg text-white shadow-xl"
                      style={{ 
                        background: `linear-gradient(135deg, ${color}, ${color}60)`, 
                        boxShadow: `0 0 20px ${glow}60, inset 0 2px 5px rgba(255,255,255,0.3)` 
                      }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {idx + 1}
                    </motion.div>
                  </div>

                  <div className="flex-1 min-w-0 py-1">
                    {/* Diagnosis title with disclaimer inline */}
                    <div className="flex items-start gap-3">
                      <p className="text-base font-bold text-white leading-tight line-clamp-2 drop-shadow-md flex-1">
                        {result.diagnosis}
                      </p>
                      {isTop && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          className="flex-shrink-0 px-2 py-1 rounded-lg border flex items-center gap-1.5"
                          style={{
                            background: 'rgba(245,158,11,0.1)',
                            borderColor: 'rgba(245,158,11,0.3)'
                          }}
                        >
                          <Info size={10} className="text-amber-400" />
                          <span className="text-[9px] font-bold text-amber-400/90 uppercase tracking-wider">AI Disclaimer</span>
                        </motion.div>
                      )}
                    </div>
                    {/* Confidence bar container */}
                    <div className="mt-3 flex items-center gap-4">
                      <div className="flex-1 max-w-[70%]">
                        <ProgressBar pct={conf} color={color} delay={0.4 + idx * 0.15} />
                      </div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-black" style={{ color, textShadow: `0 0 10px ${glow}` }}>{conf}</span>
                        <span className="text-[10px] text-slate-400 font-bold">%</span>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0, backgroundColor: isOpen ? `${color}20` : 'transparent' }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    style={{ border: `1px solid rgba(255,255,255,0.05)`, color: isOpen ? color : '#64748b' }}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                {/* Expandable detail - Premium styling */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} // smooth ease out
                      className="overflow-hidden relative z-10"
                    >
                      <div className="px-6 pb-6 pt-2"
                        style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          {/* Full diagnosis box */}
                          <motion.div 
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.4 }}
                            className="rounded-2xl p-5"
                            style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.02)' }}
                          >
                            <div className="flex items-center gap-2 mb-3">
                              <div className="p-1.5 rounded-lg" style={{ background: `${color}15` }}>
                                <AlertTriangle size={14} style={{ color }} />
                              </div>
                              <span className="text-[11px] font-black uppercase tracking-widest text-slate-300">
                                Detail Kendala
                              </span>
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed">
                              {result.diagnosis}
                            </p>
                          </motion.div>

                          {/* Action box */}
                          <motion.div
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.4 }}
                            className="rounded-2xl p-5 relative overflow-hidden"
                            style={{
                              background: `linear-gradient(135deg, ${color}10, transparent)`,
                              border: `1px solid ${color}30`,
                            }}
                          >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 blur-[50px] rounded-full" />
                            <div className="flex items-center gap-2 mb-3 relative z-10">
                              <div className="p-1.5 rounded-lg" style={{ background: `${color}20` }}>
                                <Wrench size={14} style={{ color }} />
                              </div>
                              <span className="text-[11px] font-black uppercase tracking-widest" style={{ color }}>
                                Rekomendasi
                              </span>
                            </div>
                            <p className="text-slate-200 text-sm leading-relaxed relative z-10 font-medium">
                              {result.action}
                            </p>
                          </motion.div>
                        </div>

                        {/* Urgency tag */}
                        <motion.div 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex items-center gap-3 mt-4 p-3 rounded-xl inline-flex"
                          style={{ background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.2)' }}
                        >
                          <ShieldAlert size={14} className="text-amber-400" />
                          <span className="text-xs text-amber-400 font-bold uppercase tracking-wide">
                            {idx === 0 ? 'Tindakan Segera Disarankan' : 'Pantau Kondisi Ini'}
                          </span>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Premium Show more/less */}
      {hasMore && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mb-10"
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex items-center gap-3 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-white transition-all px-6 py-3 rounded-full relative overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            {showAll ? (
              <><ChevronUp size={16} className="text-indigo-400" /> Sembunyikan Detail</>
            ) : (
              <><ChevronDown size={16} className="text-indigo-400" /> Buka {results.length - 3} Analisis Lainnya</>
            )}
          </button>
        </motion.div>
      )}

      {/* ══ HIGH-END ACTIONS ══ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-5"
      >
        {/* Primary Action */}
        <div className="relative group w-full sm:w-auto">
          <motion.div className="absolute inset-0 rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ scale:[1,1.05,1] }}
            transition={{ duration:3, repeat:Infinity }}
            style={{ background:'linear-gradient(135deg, #6366f1, #0ea5e9)', filter:'blur(12px)' }}
          />
          <motion.button
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            onClick={onReset}
            className="relative w-full sm:w-auto overflow-hidden flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-white font-black text-sm uppercase tracking-widest"
            style={{
              background: 'linear-gradient(135deg, #4f46e5, #0284c7)',
              border: '1px solid rgba(255,255,255,0.2)',
              boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)'
            }}
          >
            <motion.span className="absolute inset-0"
              animate={{ x:['-100%','200%'] }}
              transition={{ duration:2.5, repeat:Infinity, repeatDelay:1.5 }}
              style={{ background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)', width:'40%' }}
            />
            <RefreshCcw size={16} className="relative z-10" />
            <span className="relative z-10 text-shadow-sm">Diagnosis Ulang</span>
            <motion.span className="relative z-10"
              animate={{ x:[0,5,0] }} transition={{ duration:1.5, repeat:Infinity }}
            >
              <ArrowRight size={16} />
            </motion.span>
          </motion.button>
        </div>

        {/* Secondary Action */}
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm uppercase tracking-widest text-slate-300 transition-all"
          style={{ 
            background:'rgba(255,255,255,0.03)', 
            border:'1px solid rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)'
          }}
          onClick={onReset}
        >
          <CheckCircle2 size={16} className="text-emerald-400" />
          Selesai
        </motion.button>
      </motion.div>

    </motion.div>
  );
};
