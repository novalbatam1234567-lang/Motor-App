"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { OnboardingForm } from '@/components/OnboardingForm';
import { DiagnosticEngine } from '@/components/DiagnosticEngine';
import { DiagnosticResult } from '@/components/DiagnosticResult';
import { HowItWorks } from '@/components/HowItWorks';
import { TeamNavigation } from '@/components/TeamNavigation';
import { BikeProfile, diagnoseSymptoms, DiagnosticRule } from '@/lib/diagnosticData';
import { Sparkles, ArrowRight, Settings, Activity, Zap, Fuel, ShieldCheck, Wrench, Users } from 'lucide-react';
import { CustomerServiceButton } from '@/components/CustomerService';

// Team Navigation Page Component
function TeamNavigationPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-3">
          STRUKTUR ANGGOTA KELOMPOK
        </h1>
        <p className="text-slate-400 text-sm">Proyek MotoDiagnose - Sistem Pakar Diagnostik Motor</p>
      </div>
      <TeamOrganizationChart />
    </div>
  );
}

// Team Organization Chart Component
function TeamOrganizationChart() {
  const [selectedMember, setSelectedMember] = React.useState<any>(null);

  const teamMembers = [
    {
      id: 'pm', name: 'Boy', role: 'Project Manager', position: 'Project Manager',
      description: 'Memimpin dan mengoordinasikan seluruh aspek pengembangan proyek diagnostik motor.'
    },
    {
      id: 'dev1', name: 'Novriyandri', role: 'Software & UI Design', position: 'Developer',
      description: 'Mengembangkan software dan desain antarmuka pengguna.'
    },
    {
      id: 'dev2', name: 'Yoga', role: 'Software & UI Design', position: 'UI Designer',
      description: 'Merancang user interface dan user experience.'
    },
    {
      id: 'present1', name: 'Bayu', role: 'Presentasi', position: 'Presenter',
      description: 'Menangani presentasi dan komunikasi proyek.'
    },
    {
      id: 'present2', name: 'Nina', role: 'Presentasi', position: 'Content Creator',
      description: 'Membuat konten dan materi presentasi.'
    },
    {
      id: 'present3', name: 'Andreas', role: 'Presentasi', position: 'Public Speaker',
      description: 'Mengelola komunikasi publik dan presentasi.'
    },
    {
      id: 'doc', name: 'Dejan', role: 'Dokumentasi', position: 'Technical Writer',
      description: 'Menyusun dokumentasi teknis dan panduan sistem.'
    },
    {
      id: 'ai1', name: 'Bintan', role: 'AI & Analysist', position: 'Data Analyst',
      description: 'Melakukan analisis data dan pengembangan AI.'
    },
    {
      id: 'ai2', name: 'Jonathan', role: 'AI & Analysist', position: 'AI Specialist',
      description: 'Mengembangkan sistem AI dan machine learning.'
    }
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="flex justify-center mb-10">
        <OrgMember member={teamMembers[0]} isHead={true} onClick={setSelectedMember} />
      </div>
      <svg className="absolute top-20 left-0 w-full h-full pointer-events-none z-10">
        <defs>
          <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e40af" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <motion.line x1="50%" y1="0" x2="50%" y2="80" stroke="url(#connectionGrad)" strokeWidth="3"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.8 }} />
        <motion.line x1="35%" y1="80" x2="65%" y2="80" stroke="url(#connectionGrad)" strokeWidth="3"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.8, duration: 0.6 }} />
        <motion.line x1="40%" y1="80" x2="40%" y2="120" stroke="url(#connectionGrad)" strokeWidth="2" 
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 0.4 }} />
        <motion.line x1="60%" y1="80" x2="60%" y2="120" stroke="url(#connectionGrad)" strokeWidth="2" 
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 0.4 }} />
        <motion.line x1="50%" y1="200" x2="50%" y2="240" stroke="url(#connectionGrad)" strokeWidth="2" 
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.4, duration: 0.4 }} />
        <motion.line x1="25%" y1="240" x2="75%" y2="240" stroke="url(#connectionGrad)" strokeWidth="3" 
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.6, duration: 0.8 }} />
        <motion.line x1="30%" y1="240" x2="30%" y2="280" stroke="url(#connectionGrad)" strokeWidth="2" 
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8, duration: 0.4 }} />
        <motion.line x1="50%" y1="240" x2="50%" y2="280" stroke="url(#connectionGrad)" strokeWidth="2" 
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8, duration: 0.4 }} />
        <motion.line x1="70%" y1="240" x2="70%" y2="280" stroke="url(#connectionGrad)" strokeWidth="2" 
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.8, duration: 0.4 }} />
        <motion.line x1="50%" y1="360" x2="50%" y2="400" stroke="url(#connectionGrad)" strokeWidth="2" 
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.2, duration: 0.4 }} />
        <motion.line x1="50%" y1="480" x2="50%" y2="520" stroke="url(#connectionGrad)" strokeWidth="2" 
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.6, duration: 0.4 }} />
        <motion.line x1="35%" y1="520" x2="65%" y2="520" stroke="url(#connectionGrad)" strokeWidth="3" 
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.8, duration: 0.6 }} />
        <motion.line x1="40%" y1="520" x2="40%" y2="560" stroke="url(#connectionGrad)" strokeWidth="2" 
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 3.0, duration: 0.4 }} />
        <motion.line x1="60%" y1="520" x2="60%" y2="560" stroke="url(#connectionGrad)" strokeWidth="2" 
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 3.0, duration: 0.4 }} />
      </svg>

      <div className="flex justify-center items-center mb-16 relative z-20">
        <div className="flex items-center gap-8">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
              className="bg-slate-700 text-white px-4 py-2 rounded-lg text-xs font-bold whitespace-nowrap">
              💻 SOFTWARE & UI DESIGN
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.4 }}>
            <OrgMember member={teamMembers[1]} onClick={setSelectedMember} isCompact={true} />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.6 }}>
            <OrgMember member={teamMembers[2]} onClick={setSelectedMember} isCompact={true} />
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-16 relative z-20">
        <div className="flex items-center gap-6">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.0 }}
              className="bg-slate-700 text-white px-4 py-2 rounded-lg text-xs font-bold">
              🎤 PRESENTASI
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.2 }}>
            <OrgMember member={teamMembers[3]} onClick={setSelectedMember} isCompact={true} />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.4 }}>
            <OrgMember member={teamMembers[4]} onClick={setSelectedMember} isCompact={true} />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.6 }}>
            <OrgMember member={teamMembers[5]} onClick={setSelectedMember} isCompact={true} />
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center items-center mb-16 relative z-20">
        <div className="flex flex-col items-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8 }}
            className="bg-slate-700 text-white px-4 py-2 rounded-lg text-xs font-bold mb-4">
            📝 DOKUMENTASI
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3.0 }}>
            <OrgMember member={teamMembers[6]} onClick={setSelectedMember} isCompact={true} />
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center items-center relative z-20">
        <div className="flex items-center gap-8">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 3.2 }}
              className="bg-slate-700 text-white px-4 py-2 rounded-lg text-xs font-bold">
              🤖 AI & ANALYSIST
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3.4 }}>
            <OrgMember member={teamMembers[7]} onClick={setSelectedMember} isCompact={true} />
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 3.6 }}>
            <OrgMember member={teamMembers[8]} onClick={setSelectedMember} isCompact={true} />
          </motion.div>
        </div>
      </div>

      {selectedMember && (
        <div className="fixed top-24 right-6 w-80 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl z-50">
          <button onClick={() => setSelectedMember(null)}
            className="mb-4 p-1 hover:bg-white/10 rounded-lg transition-colors ml-auto block">
            ✕
          </button>
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full border-2 border-white/20 flex items-center justify-center overflow-hidden">
              <StudentAvatar memberName={selectedMember.name} isHead={false} isCompact={false} />
            </div>
            <h3 className="text-lg font-bold text-white mb-1">{selectedMember.name}</h3>
            <div className="text-sm font-semibold text-blue-300 mb-2">{selectedMember.role}</div>
            <div className="text-xs font-medium text-slate-400 mb-4">{selectedMember.position}</div>
            <p className="text-sm text-slate-300 leading-relaxed">{selectedMember.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
// Individual member component
function OrgMember({ member, isHead = false, onClick, isCompact = false }: any) {
  const cardWidth = isHead ? 'w-64' : (isCompact ? 'w-48' : 'w-56');
  const photoSize = isHead ? 'w-20 h-20 mb-4' : (isCompact ? 'w-14 h-14 mb-2' : 'w-16 h-16 mb-3');
  
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(member)}
      className="text-center cursor-pointer group"
    >
      <div className={`bg-gray-200/90 backdrop-blur-xl rounded-3xl p-5 border border-gray-300/30 shadow-xl ${cardWidth} group-hover:shadow-2xl group-hover:bg-gray-200/95 transition-all duration-500`}
        style={{ 
          boxShadow: '0 20px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.3)',
          background: 'rgba(229, 231, 235, 0.85)',
          backdropFilter: 'blur(20px)',
        }}>
        <div className={`${photoSize} mx-auto rounded-full flex items-center justify-center shadow-lg overflow-hidden group-hover:shadow-xl transition-all duration-300`}>
          <StudentAvatar memberName={member.name} isHead={isHead} isCompact={isCompact} />
        </div>
        <div className={`text-slate-800 font-bold leading-tight uppercase tracking-wider mt-3 ${
          isCompact ? 'text-xs' : 'text-sm'
        }`}
        style={{ letterSpacing: '0.1em' }}>
          {member.name}
        </div>
        {isHead && (
          <div className="mt-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-2xl px-4 py-2 text-xs font-semibold shadow-lg">
            {member.position}
          </div>
        )}
      </div>
    </motion.button>
  );
}

// Modern Simple Avatar Component with User Icon
function StudentAvatar({ memberName, isHead = false, isCompact = false }: { memberName: string; isHead: boolean; isCompact: boolean }) {
  const size = isHead ? 80 : (isCompact ? 56 : 64);
  
  return (
    <div className="w-full h-full rounded-full flex items-center justify-center"
      style={{ 
        background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.25)'
      }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor"/>
      </svg>
    </div>
  );
}

// Helper functions (blue scheme for all)
function getInitials(memberName: string): string {
  return memberName.substring(0, 2).toUpperCase();
}

function getBackgroundColor(memberName: string): string {
  return '#3B82F6'; // Blue color for all like reference
}

function getSecondaryColor(memberName: string): string {
  return '#2563EB'; // Darker blue for all
}
import type { Variants } from 'framer-motion';

type Step = 'landing' | 'onboarding' | 'diagnose' | 'result' | 'how-it-works' | 'team';

const PAGE: Variants = {
  initial:  { opacity: 0, scale: 0.97, filter: 'blur(8px)' },
  animate:  { opacity: 1, scale: 1,    filter: 'blur(0px)', transition: { duration: 0.5, ease: 'easeOut' } },
  exit:     { opacity: 0, scale: 1.02, filter: 'blur(6px)', transition: { duration: 0.3 } },
};

const CATEGORIES = [
  { id:'Mesin',       icon:<Settings  size={20}/>, grad:'linear-gradient(135deg,#ea580c,#dc2626)', glow:'rgba(220,38,38,0.35)',   hint:'Suara, getaran, panas' },
  { id:'CVT',         icon:<Activity  size={20}/>, grad:'linear-gradient(135deg,#059669,#0d9488)', glow:'rgba(5,150,105,0.35)',  hint:'Tarikan, selip, bunyi' },
  { id:'Kelistrikan', icon:<Zap       size={20}/>, grad:'linear-gradient(135deg,#d97706,#b45309)', glow:'rgba(217,119,6,0.35)',  hint:'Aki, lampu, starter' },
  { id:'Injeksi',     icon:<Fuel      size={20}/>, grad:'linear-gradient(135deg,#7c3aed,#4f46e5)', glow:'rgba(124,58,237,0.35)', hint:'Brebet, boros, check engine' },
];

export default function Home() {
  const [step,    setStep]    = useState<Step>('landing');
  const [profile, setProfile] = useState<(BikeProfile & { name: string }) | null>(null);
  const [results, setResults] = useState<DiagnosticRule[]>([]);

  const onComplete = (d: BikeProfile & { name: string }) => { setProfile(d); setStep('diagnose'); };
  const onDiagnose = (ids: string[])                      => { setResults(diagnoseSymptoms(ids)); setStep('result'); };
  const onReset    = ()                                   => { setProfile(null); setResults([]); setStep('landing'); };

  return (
    <div className="fixed inset-0 z-10 overflow-hidden">
      <AnimatePresence mode="wait">

        {step === 'landing' && (
          <motion.div key="landing" variants={PAGE} initial="initial" animate="animate" exit="exit"
            className="absolute inset-0 flex flex-col"
          >
            <nav className="flex-none flex items-center justify-between px-8 md:px-14 h-16 relative z-50"
              style={{ borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background:'linear-gradient(135deg,#7c3aed,#2563eb)', boxShadow:'0 0 12px rgba(124,58,237,0.6)' }}>
                  <Wrench size={14} className="text-white" />
                </div>
                <span className="font-black text-sm tracking-tight" style={{
                  background:'linear-gradient(90deg,#e2e8f0,#94a3b8)',
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
                }}>MotoDiagnose</span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <button onClick={() => onReset()} 
                  className="px-3 py-2 rounded-lg font-semibold text-slate-400 hover:text-white hover:bg-white/10 transition-all text-xs cursor-pointer pointer-events-auto border border-transparent hover:border-white/10">
                  Beranda
                </button>
                <button onClick={() => setStep('team')} 
                  className="px-3 py-2 rounded-lg font-semibold text-slate-400 hover:text-white hover:bg-white/10 transition-all text-xs cursor-pointer pointer-events-auto border border-transparent hover:border-white/10 flex items-center gap-1.5">
                  <Users size={12} />
                  Tim
                </button>
                <button onClick={() => setStep('how-it-works')} 
                  className="px-3 py-2 rounded-lg font-semibold text-slate-400 hover:text-white hover:bg-white/10 transition-all text-xs cursor-pointer pointer-events-auto border border-transparent hover:border-white/10">
                  Cara Kerja
                </button>
              </div>

              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ background:'rgba(5,150,105,0.1)', border:'1px solid rgba(5,150,105,0.25)' }}>
                <motion.div animate={{ opacity:[1,0.3,1] }} transition={{ duration:1.5, repeat:Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold text-emerald-400">Aktif 24/7</span>
              </div>
            </nav>
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center relative">
              <motion.div animate={{ scale:[1,1.2,1], opacity:[0.4,0.7,0.4] }} transition={{ duration:6, repeat:Infinity, ease:'easeInOut' }}
                className="absolute pointer-events-none"
                style={{ width:'600px', height:'300px', borderRadius:'50%',
                  background:'radial-gradient(ellipse,rgba(109,40,217,0.3) 0%,rgba(37,99,235,0.15) 50%,transparent 80%)',
                  filter:'blur(50px)' }} />

              <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 pointer-events-none"
                style={{ background:'rgba(139,92,246,0.1)', border:'1px solid rgba(139,92,246,0.25)' }}>
                <ShieldCheck size={12} className="text-violet-400" />
                <span className="text-xs font-bold text-violet-300 tracking-wide">SISTEM PAKAR MOTOR MATIC INDONESIA</span>
              </motion.div>

              <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} 
                transition={{ delay:0.18, duration:0.6, ease:[0.16,1,0.3,1] }}
                className="font-black leading-[0.9] tracking-tighter mb-5 relative z-10 pointer-events-none"
                style={{ fontSize:'clamp(2.8rem,8vw,6rem)' }}>
                <span className="block text-white">Motor Bermasalah?</span>
                <span className="block" style={{
                  background:'linear-gradient(135deg,#c4b5fd 0%,#818cf8 30%,#38bdf8 65%,#34d399 100%)',
                  WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
                }}>Diagnosa Instan.</span>
              </motion.h1>

              <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.28 }}
                className="text-slate-400 max-w-lg text-base leading-relaxed mb-8 relative z-10 pointer-events-none">
                Identifikasi penyebab kerusakan motor matic Honda & Yamaha dalam hitungan detik.
                Pilih gejala — sistem pakar kami analisis secara akurat.
              </motion.p>

              <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.36 }}
                className="flex items-center gap-4 mb-10 relative z-10 pointer-events-auto">
                <div className="relative">
                  <motion.div className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{ scale:[1, 1.12, 1], opacity:[0.6, 0, 0.6] }}
                    transition={{ duration:2, repeat:Infinity, ease:'easeOut' }}
                    style={{ background:'linear-gradient(135deg,#7c3aed,#2563eb)', filter:'blur(8px)' }} />
                  <motion.div className="absolute inset-0 rounded-2xl pointer-events-none"
                    animate={{ scale:[1, 1.2, 1], opacity:[0.4, 0, 0.4] }}
                    transition={{ duration:2, repeat:Infinity, ease:'easeOut', delay:0.6 }}
                    style={{ background:'linear-gradient(135deg,#7c3aed,#2563eb)', filter:'blur(12px)' }} />

                  <motion.button
                    whileHover={{ scale:1.06, boxShadow:'0 0 60px rgba(124,58,237,0.7), 0 12px 32px rgba(0,0,0,0.6)' }}
                    whileTap={{ scale:0.95 }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Button clicked - navigating to onboarding');
                      setStep('onboarding');
                    }}
                    className="relative overflow-hidden flex items-center gap-2.5 px-8 py-3.5 rounded-2xl text-white font-black text-sm cursor-pointer pointer-events-auto z-50"
                    style={{ background:'linear-gradient(135deg,#7c3aed,#4f46e5,#2563eb)',
                      boxShadow:'0 0 40px rgba(124,58,237,0.5), 0 8px 24px rgba(0,0,0,0.5)' }}>
                    <motion.span className="absolute inset-0"
                      animate={{ x:['-100%','200%'] }}
                      transition={{ duration:1.8, repeat:Infinity, repeatDelay:2 }}
                      style={{ background:'linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)', width:'35%' }} />

                    <motion.span className="relative z-10 inline-flex"
                      initial={{ rotate: -30, scale: 0.6, opacity: 0 }}
                      animate={{ rotate: [0, -25, 20, -15, 10, -8, 0, -25, 20, -15, 10, -8, 0], scale: 1, opacity: 1 }}
                      transition={{ rotate: { duration: 2.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.8 },
                        scale: { delay: 0.5, type: 'spring', stiffness: 260, damping: 12 },
                        opacity: { delay: 0.5, duration: 0.3 } }}
                      style={{ transformOrigin: 'bottom left' }}>
                      <Wrench size={16} />
                    </motion.span>

                    <span className="relative z-10">Mulai Diagnosis</span>

                    <motion.span className="relative z-10"
                      animate={{ x:[0, 5, 0] }}
                      transition={{ duration:1.2, repeat:Infinity, ease:'easeInOut' }}>
                      <ArrowRight size={15} />
                    </motion.span>
                  </motion.button>
                </div>

                <button onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Free button clicked - navigating to onboarding');
                  setStep('onboarding');
                }}
                  className="text-sm font-semibold text-slate-500 hover:text-white transition-colors flex items-center gap-1 group pointer-events-auto cursor-pointer">
                  Gratis &amp; Tanpa Daftar
                </button>
              </motion.div>
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.46 }}
                className="flex items-center gap-6 relative z-10 pointer-events-none">
                {[
                  { v:'25+', l:'Gejala', c:'#a78bfa' },
                  { v:'30+', l:'Model Motor', c:'#60a5fa' },
                  { v:'4',   l:'Kategori', c:'#34d399' },
                  { v:'≈0s', l:'Waktu Analisis', c:'#f59e0b' },
                ].map((s,i)=>(
                  <React.Fragment key={s.l}>
                    <div className="text-center">
                      <div className="text-lg font-black" style={{ color:s.c }}>{s.v}</div>
                      <div className="text-[11px] text-slate-600 font-medium">{s.l}</div>
                    </div>
                    {i < 3 && <div className="w-px h-8" style={{ background:'rgba(255,255,255,0.07)' }} />}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>

            <div className="flex-none px-8 md:px-14 pb-8 pointer-events-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {CATEGORIES.map((cat, i) => (
                  <motion.button key={cat.id}
                    initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
                    transition={{ delay: 0.5 + i*0.07 }}
                    whileHover={{ y:-4, boxShadow:`0 16px 40px ${cat.glow}` }}
                    whileTap={{ scale:0.97 }}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log(`Category ${cat.id} clicked - navigating to onboarding`);
                      setStep('onboarding');
                    }}
                    className="group relative flex items-center gap-3 p-4 rounded-2xl text-left overflow-hidden transition-all duration-300 cursor-pointer pointer-events-auto"
                    style={{ background:'linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))',
                      border:'1px solid rgba(255,255,255,0.07)', backdropFilter:'blur(16px)' }}>
                    <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: cat.grad }} />
                    <motion.div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{ background:`radial-gradient(circle at 30% 50%,${cat.glow} 0%,transparent 70%)` }} />
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0 relative z-10 transition-transform duration-300 group-hover:scale-110"
                      style={{ background:cat.grad, boxShadow:`0 0 16px ${cat.glow}` }}>
                      {cat.icon}
                    </div>
                    <div className="relative z-10 min-w-0">
                      <div className="text-xs font-black text-white">{cat.id}</div>
                      <div className="text-[10px] text-slate-500 font-medium truncate">{cat.hint}</div>
                    </div>
                    <ArrowRight size={13} className="ml-auto relative z-10 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {step === 'onboarding' && (
          <motion.div key="onboarding" variants={PAGE} initial="initial" animate="animate" exit="exit"
            className="absolute inset-0 flex flex-col">
            <PageShell title="Data Kendaraan" sub="Langkah 1 dari 3" onBack={onReset}>
              <OnboardingForm onComplete={onComplete} />
            </PageShell>
          </motion.div>
        )}

        {step === 'diagnose' && profile && (
          <motion.div key="diagnose" variants={PAGE} initial="initial" animate="animate" exit="exit"
            className="absolute inset-0 flex flex-col">
            <PageShell title="Pilih Gejala" sub="Langkah 2 dari 3" onBack={() => setStep('onboarding')}>
              <DiagnosticEngine onDiagnose={onDiagnose} />
            </PageShell>
          </motion.div>
        )}

        {step === 'result' && profile && (
          <motion.div key="result" variants={PAGE} initial="initial" animate="animate" exit="exit"
            className="absolute inset-0 flex flex-col">
            <PageShell title="Hasil Analisis" sub="Langkah 3 dari 3" onBack={onReset} backLabel="Diagnosis Ulang">
              <DiagnosticResult results={results} profile={profile} onReset={onReset} />
            </PageShell>
          </motion.div>
        )}

        {step === 'team' && (
          <motion.div key="team" variants={PAGE} initial="initial" animate="animate" exit="exit"
            className="absolute inset-0 flex flex-col">
            <PageShell title="Tim Pengembang" sub="Struktur Anggota Kelompok" onBack={onReset} backLabel="Kembali">
              <TeamNavigationPage />
            </PageShell>
          </motion.div>
        )}

        {step === 'how-it-works' && (
          <motion.div key="how-it-works" variants={PAGE} initial="initial" animate="animate" exit="exit"
            className="absolute inset-0 flex flex-col">
            <PageShell title="Cara Kerja" sub="Alur Sistem Diagnosa" onBack={onReset} backLabel="Kembali">
              <HowItWorks />
            </PageShell>
          </motion.div>
        )}

      </AnimatePresence>
      
      {/* Customer Service Floating Button */}
      <CustomerServiceButton />
    </div>
  );
}
function PageShell({
  children, title, sub, onBack, backLabel = 'Kembali',
}: {
  children: React.ReactNode;
  title: string; sub: string;
  onBack: () => void; backLabel?: string;
}) {
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  
  return (
    <>
      <nav className="flex-none flex items-center justify-between px-8 md:px-14 h-16"
        style={{ borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background:'linear-gradient(135deg,#7c3aed,#2563eb)', boxShadow:'0 0 12px rgba(124,58,237,0.6)' }}>
            <Wrench size={14} className="text-white" />
          </div>
          <span className="font-black text-sm tracking-tight" style={{
            background:'linear-gradient(90deg,#e2e8f0,#94a3b8)',
            WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent',
          }}>MotoDiagnose</span>
        </div>

        <div className="text-center hidden md:block">
          <div className="text-xs font-bold text-white">{title}</div>
          <div className="text-[11px] text-slate-500">{sub}</div>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={onBack}
            className="text-xs font-bold px-4 py-2 rounded-xl text-slate-400 hover:text-white transition-all hover:bg-white/[0.05]">
            ← {backLabel}
          </button>
        </div>
      </nav>

      <div className="flex-1 overflow-y-auto px-4 py-6"
        style={{ scrollbarWidth:'thin', scrollbarColor:'rgba(139,92,246,0.3) transparent' }}>
        {children}
      </div>
      
      <TeamNavigation isOpen={isTeamOpen} onClose={() => setIsTeamOpen(false)} />
    </>
  );
}