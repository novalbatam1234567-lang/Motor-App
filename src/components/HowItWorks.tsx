import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Bike,
  Wrench,
  Calendar,
  Search,
  CheckCircle,
  ChevronRight,
  Sparkles,
  Activity,
  Target
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-16 pt-12 flex flex-col items-center justify-center relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full border mb-6"
          style={{
            background: 'rgba(139,92,246,0.1)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(139,92,246,0.25)'
          }}
        >
          <Sparkles className="w-5 h-5 text-violet-400" />
          <span className="text-sm font-semibold text-violet-300">Cara Kerja MotoDiagnose</span>
        </motion.div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Alur Kerja Modern
        </h1>
        
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Sistem diagnosis motor matic yang mudah dan akurat. Hanya 6 langkah sederhana untuk mendapatkan hasil diagnosis yang tepat.
        </p>
      </motion.div>

      {/* Modern Workflow Steps */}
      <div className="relative w-full max-w-6xl">
        <ModernWorkflowSteps />
      </div>
    </div>
  );
};

function ModernWorkflowSteps() {
  const steps = [
    {
      id: 1,
      title: 'Pengisian Data Pengguna',
      description: 'Masukkan nama dan informasi dasar untuk memulai proses diagnosis',
      icon: <User className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
      borderColor: 'border-blue-200'
    },
    {
      id: 2,
      title: 'Pemilihan Merek Motor',
      description: 'Pilih antara Honda atau Yamaha sesuai motor matic anda',
      icon: <Bike className="w-8 h-8" />,
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-700',
      borderColor: 'border-emerald-200'
    },
    {
      id: 3,
      title: 'Pemilihan Model Motor',
      description: 'Tentukan model motor matic yang sesuai dengan kendaraan anda',
      icon: <Wrench className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-700',
      borderColor: 'border-purple-200'
    },
    {
      id: 4,
      title: 'Pemilihan Tahun Keluaran',
      description: 'Pilih tahun keluaran motor untuk diagnosis yang lebih akurat',
      icon: <Calendar className="w-8 h-8" />,
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-700',
      borderColor: 'border-amber-200'
    },
    {
      id: 5,
      title: 'Memilih Gejala Kerusakan',
      description: 'Identifikasi dan pilih gejala-gejala yang dialami motor anda',
      icon: <Search className="w-8 h-8" />,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-700',
      borderColor: 'border-red-200'
    },
    {
      id: 6,
      title: 'Hasil Diagnosis',
      description: 'Dapatkan hasil diagnosis lengkap dengan solusi dan rekomendasi',
      icon: <CheckCircle className="w-8 h-8" />,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
      borderColor: 'border-green-200'
    }
  ];

  return (
    <div className="relative">
      {/* Desktop Layout - 2 columns */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {steps.filter((_, i) => i % 2 === 0).map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                className="flex items-center justify-end"
              >
                <StepCard step={step} isLeft={true} />
              </motion.div>
            ))}
          </div>

          {/* Center Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300/50 via-purple-300/50 to-green-300/50 transform -translate-x-1/2">
            {/* Animated Flow */}
            <motion.div
              className="absolute inset-0 w-full bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 opacity-60"
              animate={{
                y: ['-100%', '100%'],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            
            {/* Step Numbers */}
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.4, type: 'spring' }}
                className="absolute w-12 h-12 rounded-full border-4 shadow-xl flex items-center justify-center font-bold text-lg transform -translate-x-1/2 backdrop-blur-xl"
                style={{
                  top: `${(index / (steps.length - 1)) * 100}%`,
                  transform: 'translateX(-50%) translateY(-50%)',
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(20px)',
                  borderColor: step.color.includes('blue') ? '#3b82f6' :
                               step.color.includes('emerald') ? '#10b981' :
                               step.color.includes('purple') ? '#8b5cf6' :
                               step.color.includes('amber') ? '#f59e0b' :
                               step.color.includes('red') ? '#ef4444' : '#22c55e'
                }}
              >
                <span className="text-white font-bold">{step.id}</span>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {steps.filter((_, i) => i % 2 === 1).map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                className="flex items-center justify-start"
              >
                <StepCard step={step} isLeft={false} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout - Single column */}
      <div className="md:hidden space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <StepCard step={step} isLeft={true} isMobile={true} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function StepCard({ step, isLeft, isMobile = false }: { 
  step: any, 
  isLeft: boolean, 
  isMobile?: boolean 
}) {
  return (
    <motion.div
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
      }}
      className={`
        relative max-w-md rounded-2xl shadow-xl border p-6 
        backdrop-blur-xl border-white/10
        ${isMobile ? 'w-full' : isLeft ? 'ml-auto' : 'mr-auto'}
      `}
      style={{
        background: 'linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
      }}
    >
      {/* Icon */}
      <div className={`
        w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} 
        flex items-center justify-center text-white shadow-lg mb-4
        ${!isMobile && !isLeft ? 'ml-auto' : ''}
      `}>
        {step.icon}
      </div>

      {/* Content */}
      <div className={!isMobile && !isLeft ? 'text-right' : ''}>
        <h3 className="text-xl font-bold text-white mb-2">
          {step.title}
        </h3>
        <p className="text-slate-300 leading-relaxed">
          {step.description}
        </p>
      </div>

      {/* Connecting Arrow for Desktop */}
      {!isMobile && (
        <div className={`
          absolute top-1/2 transform -translate-y-1/2 
          ${isLeft ? '-right-6' : '-left-6'}
        `}>
          <div className={`
            w-6 h-6 bg-white/20 backdrop-blur-sm border border-white/30 
            transform rotate-45 shadow-sm
          `} />
          <ChevronRight 
            className={`
              absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              w-4 h-4 text-white
              ${!isLeft ? 'rotate-180' : ''}
            `} 
          />
        </div>
      )}

      {/* Glowing effect */}
      <motion.div
        className={`
          absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} 
          opacity-0 group-hover:opacity-20 transition-opacity duration-300
        `}
        whileHover={{ opacity: 0.2 }}
      />
    </motion.div>
  );
}
