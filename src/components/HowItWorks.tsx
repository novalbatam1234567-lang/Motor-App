import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, 
  Bike,
  Wrench,
  Calendar,
  Search,
  CheckCircle,
  Play,
  Pause,
  RotateCcw,
  ArrowRight,
  Clock,
  Target,
  Zap
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const steps = [
    {
      id: 1,
      title: 'Input Data',
      description: 'Masukkan nama dan informasi dasar anda',
      icon: <User className="w-8 h-8" />,
      color: '#3b82f6'
    },
    {
      id: 2,
      title: 'Pilih Merek',
      description: 'Tentukan merek motor Honda atau Yamaha',
      icon: <Bike className="w-8 h-8" />,
      color: '#10b981'
    },
    {
      id: 3,
      title: 'Pilih Model',
      description: 'Sesuaikan dengan model motor anda',
      icon: <Wrench className="w-8 h-8" />,
      color: '#8b5cf6'
    },
    {
      id: 4,
      title: 'Tahun Motor',
      description: 'Pilih tahun keluaran motor anda',
      icon: <Calendar className="w-8 h-8" />,
      color: '#f59e0b'
    },
    {
      id: 5,
      title: 'Pilih Gejala',
      description: 'Jelaskan masalah yang dialami motor',
      icon: <Search className="w-8 h-8" />,
      color: '#ef4444'
    },
    {
      id: 6,
      title: 'Hasil Diagnosis',
      description: 'Dapatkan hasil dan solusi lengkap',
      icon: <CheckCircle className="w-8 h-8" />,
      color: '#06b6d4'
    }
  ];

  // Demo functionality with countdown
  useEffect(() => {
    let interval: NodeJS.Timeout;
    let countdownInterval: NodeJS.Timeout;
    
    if (isPlaying) {
      // Reset countdown
      setCountdown(3);
      
      // Countdown timer
      countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            return 3; // Reset for next step
          }
          return prev - 1;
        });
      }, 1000);

      // Step progression
      interval = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            setCountdown(3);
            return 0;
          }
          return prev + 1;
        });
      }, 3000); // 3 seconds per step
    }
    
    return () => {
      clearInterval(interval);
      clearInterval(countdownInterval);
    };
  }, [isPlaying, steps.length]);

  const handlePlayDemo = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setCurrentStep(0);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  return (
    <div className="w-full overflow-y-auto">
      {/* Simple Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16 px-6 relative"
      >
        {/* Subtle Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '30px 30px'
            }}
          />
        </div>

        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Cara Kerja{' '}
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              MotoDiagnose
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto mb-12"
          >
            6 langkah sederhana untuk mendiagnosis masalah motor matic anda dengan akurat dan cepat
          </motion.p>

          {/* Demo Controls */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <button
              onClick={handlePlayDemo}
              className="flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105"
              style={{
                background: isPlaying 
                  ? 'linear-gradient(135deg, #ef4444, #dc2626)' 
                  : 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)'
              }}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              {isPlaying ? 'Pause Demo' : 'Start Demo'}
            </button>

            <button
              onClick={handleReset}
              className="p-3 rounded-xl bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Demo Status */}
          <AnimatePresence>
            {isPlaying && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 text-green-400"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Demo berjalan... Langkah {currentStep + 1}/6</span>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-slate-400">Next in</span>
                  <motion.span 
                    key={countdown}
                    initial={{ scale: 1.2, color: '#10b981' }}
                    animate={{ scale: 1, color: '#6b7280' }}
                    className="text-sm font-bold min-w-[12px] text-center"
                  >
                    {countdown}s
                  </motion.span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Workflow Steps */}
      <div className="max-w-5xl mx-auto px-6 pb-20">
        <WorkflowDemo steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>

      {/* Simple Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="py-16 px-6"
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard icon={<Clock className="w-6 h-6" />} value="< 30 detik" label="Waktu Diagnosis" color="#3b82f6" />
          <StatCard icon={<Target className="w-6 h-6" />} value="95%" label="Tingkat Akurasi" color="#10b981" />
          <StatCard icon={<Zap className="w-6 h-6" />} value="Gratis" label="Tanpa Biaya" color="#f59e0b" />
        </div>
      </motion.div>
    </div>
  );
};

function WorkflowDemo({ steps, currentStep, setCurrentStep }: { 
  steps: any[], 
  currentStep: number, 
  setCurrentStep: (step: number) => void 
}) {
  return (
    <div className="space-y-8">
      {/* Step Timeline */}
      <div className="flex items-center justify-center mb-12">
        <div className="flex items-center space-x-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              {/* Step Dot */}
              <button
                onClick={() => setCurrentStep(index)}
                className={`
                  w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all duration-300
                  ${index <= currentStep 
                    ? 'text-white scale-110' 
                    : 'text-slate-400 hover:text-white scale-100'
                  }
                `}
                style={{
                  backgroundColor: index <= currentStep ? step.color : 'transparent',
                  borderColor: index <= currentStep ? step.color : 'rgba(148, 163, 184, 0.3)',
                  boxShadow: index === currentStep ? `0 0 20px ${step.color}50` : 'none'
                }}
              >
                {step.id}
              </button>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="w-16 h-0.5 mx-2 bg-slate-700 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500"
                    initial={{ width: '0%' }}
                    animate={{ width: index < currentStep ? '100%' : '0%' }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Active Step Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="relative"
        >
          <StepCard step={steps[currentStep]} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
          disabled={currentStep === 0}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Sebelumnya
        </button>

        <span className="text-slate-500 font-medium">
          {currentStep + 1} / {steps.length}
        </span>

        <button
          onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
          disabled={currentStep === steps.length - 1}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 text-slate-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          Selanjutnya
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function StepCard({ step }: { step: any }) {
  return (
    <div className="relative backdrop-blur-xl rounded-2xl p-8 border border-white/10 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
      }}
    >
      {/* Background Accent */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: step.color }}
      />

      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className="flex-shrink-0"
        >
          <div 
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-lg"
            style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)` }}
          >
            {step.icon}
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold text-white mb-2"
          >
            {step.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg text-slate-300"
          >
            {step.description}
          </motion.p>
        </div>

        {/* Step Number */}
        <div className="flex-shrink-0 text-right">
          <div 
            className="text-6xl font-black opacity-20"
            style={{ color: step.color }}
          >
            0{step.id}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, value, label, color }: { 
  icon: React.ReactNode, 
  value: string, 
  label: string, 
  color: string 
}) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="text-center p-6 rounded-2xl backdrop-blur-xl border border-white/10"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      }}
    >
      <div 
        className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center"
        style={{ background: `${color}20`, color }}
      >
        {icon}
      </div>
      
      <div className="text-2xl font-bold text-white mb-1">
        {value}
      </div>
      
      <div className="text-sm text-slate-400">
        {label}
      </div>
    </motion.div>
  );
}