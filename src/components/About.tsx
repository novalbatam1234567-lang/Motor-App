import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Zap, 
  Brain, 
  Users, 
  Award, 
  Clock, 
  Target, 
  Cpu, 
  Database, 
  Globe, 
  CheckCircle, 
  Star,
  Wrench,
  Bike,
  Sparkles
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="w-full overflow-y-auto">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20 px-6 relative"
      >
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 mb-8"
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300">Tentang MotoDiagnose</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Revolusi Diagnosis Motor{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Masa Depan
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Platform diagnosis motor matic berbasis AI yang menghadirkan solusi cerdas untuk mengidentifikasi masalah kendaraan dengan akurasi tinggi dan kecepatan luar biasa.
          </motion.p>
        </div>
      </motion.div>

      {/* Main Article Content */}
      <div className="max-w-6xl mx-auto px-6 pb-20">
        <ArticleContent />
      </div>

      {/* Key Features Grid */}
      <div className="py-20 px-6 bg-gradient-to-b from-transparent to-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-16"
          >
            Keunggulan Platform Kami
          </motion.h2>
          <FeaturesGrid />
        </div>
      </div>

      {/* Technology Stack */}
      <TechnologySection />

      {/* Statistics */}
      <StatisticsSection />
    </div>
  );
};

function ArticleContent() {
  return (
    <div className="grid lg:grid-cols-3 gap-12">
      {/* Main Article */}
      <div className="lg:col-span-2">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <Brain className="w-8 h-8 text-blue-400" />
              Mengapa MotoDiagnose?
            </h2>
            
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white">MotoDiagnose</strong> lahir dari kebutuhan nyata untuk memecahkan masalah kompleks dalam dunia otomotif, khususnya motor matic. Sebagai platform diagnosis berbasis kecerdasan buatan, kami menghadirkan solusi inovatif yang mengubah cara diagnosa kendaraan tradisional.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">🚀 Inovasi Teknologi Terdepan</h3>
              <p>
                Platform kami mengintegrasikan teknologi <strong className="text-blue-400">Neural Network</strong> dan <strong className="text-green-400">Machine Learning</strong> untuk menganalisis gejala motor dengan tingkat akurasi mencapai <strong className="text-yellow-400">95%</strong>. Sistem ini mampu memproses ribuan pola gejala dan memberikan diagnosis dalam waktu kurang dari 30 detik.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">💡 Solusi Cerdas & Praktis</h3>
              <p>
                Berbeda dengan metode diagnosis konvensional yang memerlukan keahlian khusus, MotoDiagnose memungkinkan siapa saja untuk melakukan diagnosis motor secara mandiri. Interface yang intuitif dan guided process memastikan pengguna dari berbagai latar belakang dapat menggunakan platform ini dengan mudah.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">🔬 Database Komprehensif</h3>
              <p>
                Platform ini didukung oleh database yang berisi lebih dari <strong className="text-purple-400">1000+ pattern data</strong> dari berbagai model motor matic Honda dan Yamaha. Data ini dikurasi dari pengalaman teknisi berpengalaman dan terus diperbarui untuk menjaga akurasi diagnosis.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4">🎯 Fokus Pada User Experience</h3>
              <p>
                Kami percaya bahwa teknologi terbaik adalah yang dapat diakses oleh semua orang. Oleh karena itu, MotoDiagnose dirancang dengan prinsip <strong className="text-cyan-400">simplicity without losing functionality</strong>. Setiap fitur dikembangkan berdasarkan research mendalam tentang kebutuhan pengguna.
              </p>

              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 mt-8">
                <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <Target className="w-6 h-6 text-blue-400" />
                  Visi Kami
                </h4>
                <p className="text-slate-300 italic">
                  "Menjadi platform diagnosis motor terdepan yang mengdemokratisasi akses terhadap teknologi otomotif canggih, sehingga setiap pemilik motor dapat merawat kendaraannya dengan optimal."
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="space-y-6"
        >
          <QuickFacts />
          <SupportedBrands />
        </motion.div>
      </div>
    </div>
  );
}

function QuickFacts() {
  const facts = [
    { label: 'Akurasi Diagnosis', value: '95%', icon: <Target className="w-5 h-5" />, color: 'text-green-400' },
    { label: 'Waktu Rata-rata', value: '< 30s', icon: <Clock className="w-5 h-5" />, color: 'text-blue-400' },
    { label: 'Model Motor', value: '30+', icon: <Bike className="w-5 h-5" />, color: 'text-purple-400' },
    { label: 'Pattern Data', value: '1000+', icon: <Database className="w-5 h-5" />, color: 'text-yellow-400' }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <Star className="w-6 h-6 text-yellow-400" />
        Quick Facts
      </h3>
      
      <div className="space-y-4">
        {facts.map((fact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
            className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className={fact.color}>
                {fact.icon}
              </div>
              <span className="text-slate-300 text-sm">{fact.label}</span>
            </div>
            <span className={`font-bold ${fact.color}`}>
              {fact.value}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function SupportedBrands() {
  const brands = [
    { name: 'Honda', models: ['Beat', 'Vario', 'PCX', 'Scoopy'], color: 'text-red-400' },
    { name: 'Yamaha', models: ['Mio', 'Freego', 'Lexi', 'Gear'], color: 'text-blue-400' }
  ];

  return (
    <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <Wrench className="w-6 h-6 text-blue-400" />
        Brand Support
      </h3>
      
      <div className="space-y-4">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.2, duration: 0.4 }}
          >
            <h4 className={`font-bold ${brand.color} mb-2`}>{brand.name}</h4>
            <div className="flex flex-wrap gap-2">
              {brand.models.map((model, modelIndex) => (
                <span
                  key={modelIndex}
                  className="px-2 py-1 text-xs rounded-full bg-white/10 text-slate-300 border border-white/10"
                >
                  {model}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function FeaturesGrid() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI-Powered Analysis',
      description: 'Machine learning algorithms yang terus berkembang untuk akurasi maksimal',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Fast',
      description: 'Hasil diagnosis dalam hitungan detik dengan processing berkecepatan tinggi',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Reliable & Secure',
      description: 'Platform yang aman dan terpercaya dengan uptime 99.9%',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: '24/7 Accessibility',
      description: 'Akses kapan saja, dimana saja melalui web browser modern',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'User Friendly',
      description: 'Interface intuitif yang dapat digunakan oleh siapa saja tanpa training khusus',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expert Validated',
      description: 'Database yang dikurasi dan divalidasi oleh teknisi motor berpengalaman',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
        >
          <div 
            className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white mb-4 shadow-lg`}
          >
            {feature.icon}
          </div>
          
          <h3 className="text-xl font-bold text-white mb-3">
            {feature.title}
          </h3>
          
          <p className="text-slate-300 leading-relaxed">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

function TechnologySection() {
  const technologies = [
    { name: 'Next.js 16', category: 'Frontend Framework', color: '#ffffff' },
    { name: 'TypeScript', category: 'Programming Language', color: '#3178c6' },
    { name: 'Framer Motion', category: 'Animation Library', color: '#ff0055' },
    { name: 'Tailwind CSS', category: 'Styling Framework', color: '#06b6d4' },
    { name: 'Neural Networks', category: 'AI Technology', color: '#10b981' },
    { name: 'Pattern Recognition', category: 'ML Algorithm', color: '#8b5cf6' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Technology Stack
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all"
            >
              <div 
                className="w-12 h-12 rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: tech.color }}
              >
                {tech.name.charAt(0)}
              </div>
              
              <h4 className="text-white font-semibold text-sm mb-1">
                {tech.name}
              </h4>
              
              <p className="text-slate-400 text-xs">
                {tech.category}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function StatisticsSection() {
  const stats = [
    { value: '10,000+', label: 'Diagnosis Completed', icon: <CheckCircle className="w-6 h-6" /> },
    { value: '95%', label: 'User Satisfaction', icon: <Star className="w-6 h-6" /> },
    { value: '24/7', label: 'System Uptime', icon: <Shield className="w-6 h-6" /> },
    { value: '< 30s', label: 'Average Response', icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 0.8 }}
      className="py-20 px-6 bg-gradient-to-t from-slate-900/50 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          Platform Performance
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <div className="text-blue-400 mb-4 flex justify-center">
                {stat.icon}
              </div>
              
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              
              <div className="text-slate-400 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}