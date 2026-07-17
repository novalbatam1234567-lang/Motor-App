"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Users, Code, FileText, Presentation, Search, Brain } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  position: string;
  photo?: string;
  description?: string;
}

const teamMembers: TeamMember[] = [
  // Top Level - Project Manager
  {
    id: 'pm',
    name: 'Boy',
    role: 'Project Manager',
    position: 'Project Manager',
    photo: '/team/placeholder-1.jpg',
    description: 'Memimpin dan mengoordinasikan seluruh aspek pengembangan proyek diagnostik motor.'
  },
  // Software & UI Design Level (2 orang)
  {
    id: 'dev1',
    name: 'Novriyandri',
    role: 'Software & UI Design',
    position: 'Developer',
    photo: '/team/placeholder-2.jpg',
    description: 'Mengembangkan software dan desain antarmuka pengguna.'
  },
  {
    id: 'dev2',
    name: 'Yoga',
    role: 'Software & UI Design',
    position: 'UI Designer',
    photo: '/team/placeholder-3.jpg',
    description: 'Merancang user interface dan user experience.'
  },
  // Presentasi Level (3 orang)
  {
    id: 'present1',
    name: 'Bayu',
    role: 'Presentasi',
    position: 'Presenter',
    photo: '/team/placeholder-4.jpg',
    description: 'Menangani presentasi dan komunikasi proyek.'
  },
  {
    id: 'present2',
    name: 'Nina',
    role: 'Presentasi',
    position: 'Content Creator',
    photo: '/team/placeholder-5.jpg',
    description: 'Membuat konten dan materi presentasi.'
  },
  {
    id: 'present3',
    name: 'Andreas',
    role: 'Presentasi',
    position: 'Public Speaker',
    photo: '/team/placeholder-6.jpg',
    description: 'Mengelola komunikasi publik dan presentasi.'
  },
  // Dokumentasi Level (1 orang)
  {
    id: 'doc',
    name: 'Dejan',
    role: 'Dokumentasi',
    position: 'Technical Writer',
    photo: '/team/placeholder-7.jpg',
    description: 'Menyusun dokumentasi teknis dan panduan sistem.'
  },
  // AI & Analysist Level (2 orang)
  {
    id: 'ai1',
    name: 'Bintan',
    role: 'AI & Analysist',
    position: 'Data Analyst',
    photo: '/team/placeholder-8.jpg',
    description: 'Melakukan analisis data dan pengembangan AI.'
  },
  {
    id: 'ai2',
    name: 'Jonathan',
    role: 'AI & Analysist',
    position: 'AI Specialist',
    photo: '/team/placeholder-9.jpg',
    description: 'Mengembangkan sistem AI dan machine learning.'
  }
];

const roleIcons: Record<string, React.ReactElement> = {
  'Project Manager': <Users size={16} className="text-blue-400" />,
  'Software & UI': <Code size={16} className="text-green-400" />,
  'Documentation': <FileText size={16} className="text-yellow-400" />,
  'Presentation': <Presentation size={16} className="text-purple-400" />,
  'Social Research & Policy': <Search size={16} className="text-orange-400" />,
  'AI Data Analysis': <Brain size={16} className="text-pink-400" />
};

interface TeamNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TeamNavigation({ isOpen, onClose }: TeamNavigationProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const getRoleColor = (role: string) => {
    const colors: { [key: string]: string } = {
      'Project Manager': 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
      'Software & UI': 'from-green-500/20 to-green-600/20 border-green-500/30',
      'Documentation': 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30',
      'Presentation': 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
      'Social Research & Policy': 'from-orange-500/20 to-orange-600/20 border-orange-500/30',
      'AI Data Analysis': 'from-pink-500/20 to-pink-600/20 border-pink-500/30'
    };
    return colors[role] || 'from-gray-500/20 to-gray-600/20 border-gray-500/30';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Lebih transparan */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
          
          {/* Modal - Tanpa background solid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 md:inset-8 z-50 overflow-hidden"
          >
            {/* Header - Floating */}
            <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
              <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-white/10 px-6 py-3">
                <h2 className="text-xl font-bold text-white">Tim Pengembang</h2>
                <p className="text-slate-400 text-sm mt-1">Struktur Organisasi Proyek MotoDiagnose</p>
              </div>
              <button
                onClick={onClose}
                className="bg-slate-900/80 backdrop-blur-xl border border-white/10 p-3 hover:bg-white/10 rounded-xl transition-colors"
              >
                <X size={20} className="text-slate-400" />
              </button>
            </div>

            {/* Organizational Chart - Sama persis seperti foto */}
            <div className="pt-24 pb-6 px-6 h-full flex items-center justify-center">
              <div className="relative w-full max-w-5xl">
                
                {/* Header Title */}
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-white bg-slate-800/60 backdrop-blur-xl rounded-2xl py-4 px-8 inline-block">
                    STRUKTUR ANGGOTA KELOMPOK
                  </h1>
                </div>

                {/* Level 1 - Project Manager (Top Center) */}
                <div className="flex justify-center mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                  >
                    <OrgChartMemberV2
                      member={teamMembers[0]}
                      onClick={setSelectedMember}
                      isHead={true}
                      departmentLabel="Project Manager"
                      bgColor="bg-blue-100"
                    />
                  </motion.div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute top-80 left-0 w-full h-full pointer-events-none z-10">
                  <defs>
                    <linearGradient id="connectionGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1e40af" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  
                  {/* Vertical line from PM */}
                  <motion.line
                    x1="50%" y1="0"
                    x2="50%" y2="60"
                    stroke="url(#connectionGrad)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  />
                  
                  {/* Horizontal line for Software & UI */}
                  <motion.line
                    x1="35%" y1="60"
                    x2="65%" y2="60"
                    stroke="url(#connectionGrad)"
                    strokeWidth="3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                  
                  {/* Vertical lines to Software members */}
                  <motion.line x1="40%" y1="60" x2="40%" y2="100" stroke="url(#connectionGrad)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 0.4 }} />
                  <motion.line x1="60%" y1="60" x2="60%" y2="100" stroke="url(#connectionGrad)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1, duration: 0.4 }} />
                  
                  {/* Continue to Presentasi level */}
                  <motion.line x1="50%" y1="180" x2="50%" y2="220" stroke="url(#connectionGrad)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.5, duration: 0.4 }} />
                  <motion.line x1="25%" y1="220" x2="75%" y2="220" stroke="url(#connectionGrad)" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.7, duration: 0.6 }} />
                  
                  {/* To Presentasi members */}
                  <motion.line x1="30%" y1="220" x2="30%" y2="260" stroke="url(#connectionGrad)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.9, duration: 0.4 }} />
                  <motion.line x1="50%" y1="220" x2="50%" y2="260" stroke="url(#connectionGrad)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.9, duration: 0.4 }} />
                  <motion.line x1="70%" y1="220" x2="70%" y2="260" stroke="url(#connectionGrad)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.9, duration: 0.4 }} />
                  
                  {/* To Dokumentasi */}
                  <motion.line x1="50%" y1="340" x2="50%" y2="380" stroke="url(#connectionGrad)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.3, duration: 0.4 }} />
                  
                  {/* To AI & Analysist */}
                  <motion.line x1="50%" y1="460" x2="50%" y2="500" stroke="url(#connectionGrad)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.7, duration: 0.4 }} />
                  <motion.line x1="35%" y1="500" x2="65%" y2="500" stroke="url(#connectionGrad)" strokeWidth="3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.9, duration: 0.6 }} />
                  <motion.line x1="40%" y1="500" x2="40%" y2="540" stroke="url(#connectionGrad)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 3.1, duration: 0.4 }} />
                  <motion.line x1="60%" y1="500" x2="60%" y2="540" stroke="url(#connectionGrad)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 3.1, duration: 0.4 }} />
                </svg>

                {/* Level 2 - Software & UI Design */}
                <div className="flex justify-center mb-16 relative z-20">
                  <div className="flex items-center gap-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      <OrgChartMemberV2
                        member={teamMembers[1]}
                        onClick={setSelectedMember}
                        departmentLabel="SOFTWARE & UI DESIGN"
                        bgColor="bg-orange-100"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4 }}
                    >
                      <OrgChartMemberV2
                        member={teamMembers[2]}
                        onClick={setSelectedMember}
                        departmentLabel="SOFTWARE & UI DESIGN"
                        bgColor="bg-orange-100"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Level 3 - Presentasi */}
                <div className="flex justify-center mb-16 relative z-20">
                  <div className="flex items-center gap-6">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2.0 }}
                    >
                      <OrgChartMemberV2
                        member={teamMembers[3]}
                        onClick={setSelectedMember}
                        departmentLabel="PRESENTASI"
                        bgColor="bg-orange-100"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2.2 }}
                    >
                      <OrgChartMemberV2
                        member={teamMembers[4]}
                        onClick={setSelectedMember}
                        departmentLabel="PRESENTASI"
                        bgColor="bg-orange-100"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 2.4 }}
                    >
                      <OrgChartMemberV2
                        member={teamMembers[5]}
                        onClick={setSelectedMember}
                        departmentLabel="PRESENTASI"
                        bgColor="bg-orange-100"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Level 4 - Dokumentasi */}
                <div className="flex justify-center mb-16 relative z-20">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.6 }}
                  >
                    <OrgChartMemberV2
                      member={teamMembers[6]}
                      onClick={setSelectedMember}
                      departmentLabel="DOKUMENTASI"
                      bgColor="bg-blue-100"
                    />
                  </motion.div>
                </div>

                {/* Level 5 - AI & Analysist */}
                <div className="flex justify-center relative z-20">
                  <div className="flex items-center gap-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 3.2 }}
                    >
                      <OrgChartMemberV2
                        member={teamMembers[7]}
                        onClick={setSelectedMember}
                        departmentLabel="AI & ANALYSIST"
                        bgColor="bg-blue-100"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 3.4 }}
                    >
                      <OrgChartMemberV2
                        member={teamMembers[8]}
                        onClick={setSelectedMember}
                        departmentLabel="AI & ANALYSIST"
                        bgColor="bg-blue-100"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Member Details Sidebar - Floating */}
            <AnimatePresence>
              {selectedMember && (
                <motion.div
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 300 }}
                  className="absolute top-24 right-6 w-80 bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
                >
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="mb-4 p-1 hover:bg-white/10 rounded-lg transition-colors ml-auto block"
                  >
                    <X size={16} className="text-slate-400" />
                  </button>
                  
                  <MemberDetailCard member={selectedMember} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function OrgChartMemberV2({ 
  member, 
  onClick, 
  isHead = false,
  departmentLabel,
  bgColor = "bg-white"
}: { 
  member: TeamMember; 
  onClick: (member: TeamMember) => void;
  isHead?: boolean;
  departmentLabel?: string;
  bgColor?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(member)}
      className="group text-center cursor-pointer relative"
    >
      {/* Department Label - Seperti di foto dengan background biru dan icon */}
      {departmentLabel && !isHead && (
        <div className="mb-3 flex items-center justify-center gap-2 bg-slate-700 text-white px-4 py-2 rounded-lg text-xs font-bold">
          {departmentLabel === 'SOFTWARE & UI DESIGN' && <Code size={14} />}
          {departmentLabel === 'PRESENTASI' && <Presentation size={14} />}
          {departmentLabel === 'DOKUMENTASI' && <FileText size={14} />}
          {departmentLabel === 'AI & ANALYSIST' && <Brain size={14} />}
          {departmentLabel}
        </div>
      )}
      
      {/* Main Container - Rounded white box seperti di foto */}
      <div className={`${bgColor} rounded-2xl p-4 border-2 border-slate-300 shadow-lg ${isHead ? 'w-72' : 'w-56'} group-hover:shadow-xl transition-shadow`}>
        
        {/* Photo Circle - Biru dengan border putih seperti di foto */}
        <div className={`${isHead ? 'w-20 h-20 mb-4' : 'w-16 h-16 mb-3'} mx-auto bg-blue-600 rounded-full border-4 border-white flex items-center justify-center overflow-hidden shadow-md`}>
          {member.photo ? (
            <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
          ) : (
            <Users size={isHead ? 28 : 20} className="text-white" />
          )}
        </div>
        
        {/* Name - Bold text seperti di foto */}
        <div className="text-slate-900 font-bold text-sm leading-tight uppercase tracking-wide">
          {member.name}
        </div>
        
        {/* Position untuk Project Manager */}
        {isHead && (
          <div className="mt-2 bg-slate-200 rounded-lg px-3 py-1 text-xs font-semibold text-slate-700">
            {member.position}
          </div>
        )}
      </div>
    </motion.button>
  );
}

function OrgChartMember({ 
  member, 
  onClick, 
  isHead = false,
  title 
}: { 
  member: TeamMember; 
  onClick: (member: TeamMember) => void;
  isHead?: boolean;
  title?: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(member)}
      className="group text-center cursor-pointer"
    >
      {/* Title Box - Seperti di foto asli */}
      <div className={`${isHead ? 'w-64 mb-4' : 'w-48 mb-3'} bg-gradient-to-r ${
        isHead ? 'from-yellow-400 to-green-400' : 'from-yellow-300 to-yellow-400'
      } rounded-lg px-4 py-2 text-black font-bold text-sm border-2 border-black/20 shadow-lg`}>
        {title || member.role}
      </div>
      
      {/* Photo Circle - Merah seperti di foto */}
      <div className={`${isHead ? 'w-24 h-24 mb-4' : 'w-20 h-20 mb-3'} mx-auto bg-red-600 rounded-full border-4 border-black/30 flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow`}>
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <Users size={isHead ? 32 : 24} className="text-white" />
        )}
      </div>
      
      {/* Name Box - Putih seperti di foto */}
      <div className={`${isHead ? 'w-64' : 'w-48'} bg-white rounded-lg px-3 py-2 border-2 border-black/20 shadow-lg`}>
        <div className="text-black font-bold text-xs leading-tight">
          {member.name}
        </div>
      </div>
    </motion.button>
  );
}

function MemberDetailCard({ member }: { member: TeamMember }) {
  return (
    <div className={`bg-gradient-to-br ${getRoleColor(member.role)} rounded-2xl p-6 border`}>
      {/* Photo */}
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-slate-600 to-slate-700 border-2 border-white/20 flex items-center justify-center overflow-hidden">
        {member.photo ? (
          <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
        ) : (
          <Users size={24} className="text-slate-300" />
        )}
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
        
        <div className="flex items-center justify-center gap-2 mb-2">
          {roleIcons[member.role] || <Users size={16} className="text-gray-400" />}
          <span className="text-sm font-semibold text-blue-300">{member.role}</span>
        </div>
        
        <div className="text-xs font-medium text-slate-400 mb-4">{member.position}</div>
        
        {member.description && (
          <p className="text-sm text-slate-300 leading-relaxed">{member.description}</p>
        )}
      </div>

      {/* Stats or additional info could go here */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <div className="flex items-center justify-center gap-4 text-xs">
          <div className="text-center">
            <div className="text-white font-bold">Active</div>
            <div className="text-slate-400">Status</div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center">
            <div className="text-white font-bold">2024</div>
            <div className="text-slate-400">Join</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getRoleColor(role: string) {
  const colors: { [key: string]: string } = {
    'Project Manager': 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
    'Software & UI': 'from-green-500/20 to-green-600/20 border-green-500/30',
    'Documentation': 'from-yellow-500/20 to-yellow-600/20 border-yellow-500/30',
    'Presentation': 'from-purple-500/20 to-purple-600/20 border-purple-500/30',
    'Social Research & Policy': 'from-orange-500/20 to-orange-600/20 border-orange-500/30',
    'AI Data Analysis': 'from-pink-500/20 to-pink-600/20 border-pink-500/30'
  };
  return colors[role] || 'from-gray-500/20 to-gray-600/20 border-gray-500/30';
}