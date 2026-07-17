import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { SYMPTOMS, Category } from '@/lib/diagnosticData';
import {
  CheckCircle2, Settings, Zap, Activity, Fuel,
  ArrowRight, ScanSearch, ChevronRight
} from 'lucide-react';

interface DiagnosticEngineProps {
  onDiagnose: (selectedSymptomIds: string[]) => void;
}

const CATEGORIES: {
  id: Category; icon: React.ReactNode; label: string;
  grad: string; glow: string; color: string; hint: string;
}[] = [
  { id:'Mesin',       icon:<Settings  size={18}/>, label:'Mesin',       grad:'linear-gradient(135deg,#ea580c,#dc2626)', glow:'rgba(234,88,12,0.5)',   color:'#f97316', hint:'Suara · Panas · Tenaga' },
  { id:'CVT',         icon:<Activity  size={18}/>, label:'CVT',         grad:'linear-gradient(135deg,#059669,#0d9488)', glow:'rgba(5,150,105,0.5)',  color:'#10b981', hint:'Tarikan · Selip · Bunyi' },
  { id:'Kelistrikan', icon:<Zap       size={18}/>, label:'Kelistrikan', grad:'linear-gradient(135deg,#d97706,#b45309)', glow:'rgba(217,119,6,0.5)',  color:'#f59e0b', hint:'Aki · Lampu · Starter' },
  { id:'Injeksi',     icon:<Fuel      size={18}/>, label:'Injeksi',     grad:'linear-gradient(135deg,#7c3aed,#4f46e5)', glow:'rgba(124,58,237,0.5)', color:'#8b5cf6', hint:'Brebet · Boros · ECU' },
];

export const DiagnosticEngine: React.FC<DiagnosticEngineProps> = ({ onDiagnose }) => {
  const [activeTab, setActiveTab]   = useState<Category>('Mesin');
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [prevTab, setPrevTab]         = useState<Category>('Mesin');
  const [dir, setDir]                 = useState(1);

  const toggle = (id: string) => {
    const s = new Set(selectedIds);
    s.has(id) ? s.delete(id) : s.add(id);
    setSelectedIds(s);
  };

  const switchTab = (cat: Category) => {
    const order = CATEGORIES.map(c => c.id);
    setDir(order.indexOf(cat) > order.indexOf(prevTab) ? 1 : -1);
    setPrevTab(cat);
    setActiveTab(cat);
  };

  const currentSymptoms = SYMPTOMS.filter(s => s.category === activeTab);
  const activeCat = CATEGORIES.find(c => c.id === activeTab)!;
  const totalSelected = selectedIds.size;

  const slideVariants: Variants = {
    enter: (d: number) => ({ opacity: 0, x: d * 40, filter: 'blur(4px)' }),
    center: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.28, ease: 'circOut' as const } },
    exit:  (d: number) => ({ opacity: 0, x: d * -30, filter: 'blur(4px)', transition: { duration: 0.2 } }),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full max-w-3xl mx-auto"
    >
      {/* ── Header ── */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4"
          style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.25)' }}
        >
          <ScanSearch size={13} className="text-violet-400" />
          <span className="text-xs font-bold text-violet-300 tracking-wide">IDENTIFIKASI GEJALA</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="text-3xl font-black text-white mb-2"
        >
          Apa yang Anda Rasakan?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-sm"
        >
          Pilih semua gejala yang dialami — bisa lebih dari satu kategori
        </motion.p>
      </div>

      {/* ── Category Tabs ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.22 }}
        className="grid grid-cols-4 gap-2 mb-4"
      >
        {CATEGORIES.map((cat, i) => {
          const isActive = activeTab === cat.id;
          const count = SYMPTOMS.filter(s => s.category === cat.id && selectedIds.has(s.id)).length;
          return (
            <motion.button key={cat.id}
              onClick={() => switchTab(cat.id)}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.06 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.96 }}
              className="relative flex flex-col items-center gap-2 py-4 px-2 rounded-2xl font-bold text-xs transition-all duration-300 overflow-hidden"
              style={isActive ? {
                background: cat.grad,
                boxShadow: `0 0 28px ${cat.glow}, 0 6px 20px rgba(0,0,0,0.4)`,
                color: 'white',
                border: '1px solid transparent',
              } : {
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid rgba(255,255,255,0.07)`,
                color: '#475569',
              }}
            >
              {/* Active shimmer */}
              {isActive && (
                <motion.div className="absolute inset-0"
                  animate={{ x: ['-100%','200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
                  style={{ background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.15),transparent)', width:'40%' }}
                />
              )}

              {/* Icon with glow when active */}
              <motion.div
                className="relative z-10 w-9 h-9 rounded-xl flex items-center justify-center"
                animate={isActive ? {
                  boxShadow: [`0 0 0px ${cat.glow}`, `0 0 16px ${cat.glow}`, `0 0 0px ${cat.glow}`],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  background: isActive ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.04)',
                }}
              >
                {cat.icon}
              </motion.div>

              <span className="relative z-10 leading-tight">{cat.label}</span>
              <span className="relative z-10 text-[10px] font-normal opacity-70 truncate w-full text-center">{cat.hint}</span>

              {/* Badge */}
              {count > 0 && (
                <motion.span
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center shadow-lg border-2"
                  style={{ background: cat.color, color:'white', borderColor: 'rgba(5,3,15,0.9)' }}
                >
                  {count}
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </motion.div>

      {/* ── Symptom Panel ── */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: 'linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))',
          border: '1px solid rgba(255,255,255,0.07)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Top accent bar */}
        <motion.div
          key={activeTab + '-bar'}
          className="h-0.5 w-full"
          style={{ background: activeCat.grad }}
          layoutId="tabBar"
          transition={{ duration: 0.3 }}
        />

        {/* Panel header */}
        <div className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="flex items-center gap-3">
            <motion.div
              key={activeTab + '-icon'}
              initial={{ scale: 0.5, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              className="w-8 h-8 rounded-xl flex items-center justify-center text-white"
              style={{ background: activeCat.grad, boxShadow: `0 0 16px ${activeCat.glow}` }}
            >
              {activeCat.icon}
            </motion.div>
            <div>
              <AnimatePresence mode="wait">
                <motion.div key={activeTab}
                  initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                >
                  <div className="text-sm font-black text-white">{activeTab}</div>
                  <div className="text-xs text-slate-500">{activeCat.hint}</div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full"
              style={{ background:'rgba(255,255,255,0.05)', color:'#64748b', border:'1px solid rgba(255,255,255,0.07)' }}
            >
              {currentSymptoms.length} gejala
            </span>
          </div>
        </div>

        {/* Symptom grid with slide transition */}
        <div className="p-5">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={activeTab}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5"
            >
              {currentSymptoms.map((symptom, i) => {
                const isSelected = selectedIds.has(symptom.id);
                return (
                  <motion.button
                    key={symptom.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                    whileHover={{ y: -2, borderColor: isSelected ? 'transparent' : activeCat.color + '40' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => toggle(symptom.id)}
                    className="group relative flex items-center gap-3 p-4 rounded-2xl text-left transition-all duration-200 overflow-hidden"
                    style={isSelected ? {
                      background: `linear-gradient(135deg,${activeCat.color}22,${activeCat.color}10)`,
                      border: `1px solid ${activeCat.color}50`,
                      boxShadow: `0 0 20px ${activeCat.glow}40, inset 0 0 20px ${activeCat.glow}10`,
                    } : {
                      background: 'rgba(255,255,255,0.025)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                  >
                    {/* Selected glow overlay */}
                    {isSelected && (
                      <motion.div
                        className="absolute inset-0 pointer-events-none rounded-2xl"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        style={{ background: `radial-gradient(circle at 20% 50%,${activeCat.glow} 0%,transparent 60%)` }}
                      />
                    )}

                    {/* Check indicator */}
                    <motion.div
                      className="relative z-10 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center"
                      animate={isSelected ? {
                        background: activeCat.color,
                        borderColor: activeCat.color,
                        scale: [1, 1.3, 1],
                      } : {
                        background: 'transparent',
                        borderColor: 'rgba(255,255,255,0.15)',
                        scale: 1,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                          >
                            <CheckCircle2 size={12} className="text-white" strokeWidth={3} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Label */}
                    <span className="relative z-10 text-xs font-semibold leading-snug flex-1"
                      style={{ color: isSelected ? 'white' : '#94a3b8' }}
                    >
                      {symptom.label}
                    </span>

                    {/* Arrow on hover */}
                    <motion.div
                      className="relative z-10 flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200"
                      style={{ color: activeCat.color }}
                    >
                      <ChevronRight size={14} />
                    </motion.div>
                  </motion.button>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* ── Footer / CTA ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex items-center justify-between mt-5 px-1"
      >
        {/* Selected count */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <motion.span
                key={totalSelected}
                initial={{ scale: 1.4, opacity: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                className="text-2xl font-black"
                style={{
                  background: totalSelected > 0
                    ? 'linear-gradient(135deg,#c4b5fd,#93c5fd)'
                    : 'rgba(255,255,255,0.2)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {totalSelected}
              </motion.span>
              <span className="text-xs text-slate-500 font-medium">gejala dipilih</span>
            </div>
            {totalSelected > 0 && (
              <motion.p
                initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                className="text-[11px] text-slate-600"
              >
                Sistem siap menganalisis
              </motion.p>
            )}
          </div>
        </div>

        {/* Analyse button */}
        <div className="relative">
          {totalSelected > 0 && (
            <>
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{ scale:[1,1.1,1], opacity:[0.6,0,0.6] }}
                transition={{ duration:2, repeat:Infinity }}
                style={{ background:'linear-gradient(135deg,#7c3aed,#2563eb)', filter:'blur(8px)' }}
              />
              <motion.div
                className="absolute inset-0 rounded-2xl"
                animate={{ scale:[1,1.18,1], opacity:[0.3,0,0.3] }}
                transition={{ duration:2, repeat:Infinity, delay:0.5 }}
                style={{ background:'linear-gradient(135deg,#7c3aed,#2563eb)', filter:'blur(12px)' }}
              />
            </>
          )}
          <motion.button
            disabled={totalSelected === 0}
            onClick={() => onDiagnose(Array.from(selectedIds))}
            whileHover={totalSelected > 0 ? { scale: 1.05 } : {}}
            whileTap={totalSelected > 0 ? { scale: 0.96 } : {}}
            className="relative overflow-hidden flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-black text-sm transition-all duration-300"
            style={totalSelected > 0 ? {
              background: 'linear-gradient(135deg,#7c3aed,#4f46e5,#2563eb)',
              color: 'white',
              boxShadow: '0 0 32px rgba(124,58,237,0.5)',
              cursor: 'pointer',
            } : {
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              color: '#334155',
              cursor: 'not-allowed',
            }}
          >
            {totalSelected > 0 && (
              <motion.span className="absolute inset-0"
                animate={{ x:['-100%','200%'] }}
                transition={{ duration:1.8, repeat:Infinity, repeatDelay:1.5 }}
                style={{ background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.2),transparent)', width:'35%' }}
              />
            )}
            <ScanSearch size={16} className="relative z-10" />
            <span className="relative z-10">Analisis Sekarang</span>
            {totalSelected > 0 && (
              <motion.span className="relative z-10"
                animate={{ x:[0,4,0] }} transition={{ duration:1.2, repeat:Infinity }}
              >
                <ArrowRight size={14} />
              </motion.span>
            )}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};
