"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, X, Send, User, Clock, CheckCircle } from 'lucide-react';

interface CustomerServiceProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CustomerService({ isOpen, onClose }: CustomerServiceProps) {
  const [activeTab, setActiveTab] = useState<'chat' | 'contact' | 'faq'>('chat');
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      message: 'Halo! Selamat datang di MotoDiagnose. Ada yang bisa kami bantu?',
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        sender: 'user' as const,
        message: message,
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      };
      
      setChatMessages([...chatMessages, newMessage]);
      setMessage('');

      // Auto reply from bot
      setTimeout(() => {
        const botReply = {
          id: chatMessages.length + 2,
          sender: 'bot' as const,
          message: 'Terima kasih atas pesan Anda. Tim customer service kami akan segera membantu Anda.',
          time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
        };
        setChatMessages(prev => [...prev, botReply]);
      }, 1000);
    }
  };

  const faqData = [
    {
      question: "Bagaimana cara menggunakan sistem diagnosa?",
      answer: "Cukup klik 'Mulai Diagnosis', masukkan data motor Anda, pilih gejala yang dialami, dan sistem akan memberikan analisis hasil."
    },
    {
      question: "Apakah sistem ini gratis?",
      answer: "Ya, sistem MotoDiagnose dapat digunakan secara gratis tanpa perlu registrasi."
    },
    {
      question: "Motor merk apa saja yang didukung?",
      answer: "Saat ini kami mendukung motor matic Honda dan Yamaha dengan berbagai model."
    },
    {
      question: "Seberapa akurat hasil diagnosanya?",
      answer: "Sistem kami menggunakan algoritma sistem pakar dengan tingkat akurasi tinggi berdasarkan data gejala dan kerusakan motor."
    }
  ];

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <MessageCircle size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Customer Service</h3>
              <p className="text-xs text-green-600 flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Online
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200">
          {[
            { id: 'chat', label: 'Chat', icon: MessageCircle },
            { id: 'contact', label: 'Kontak', icon: Phone },
            { id: 'faq', label: 'FAQ', icon: CheckCircle }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-600 bg-blue-50 border-b-2 border-blue-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-hidden">
          {activeTab === 'chat' && (
            <div className="h-full flex flex-col">
              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                        msg.sender === 'user'
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{msg.message}</p>
                      <p
                        className={`text-xs mt-1 ${
                          msg.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Ketik pesan Anda..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  />
                  <button
                    onClick={handleSendMessage}
                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="p-6 space-y-4">
              <div className="text-center mb-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Hubungi Kami</h3>
                <p className="text-gray-600 text-sm">Tim customer service siap membantu Anda 24/7</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <MessageCircle size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                    <p className="text-sm text-gray-600">+62 812-3456-7890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Telepon</h4>
                    <p className="text-sm text-gray-600">(021) 1234-5678</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-sm text-gray-600">support@motodiagnose.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-blue-600" />
                  <h4 className="font-semibold text-blue-800">Jam Operasional</h4>
                </div>
                <p className="text-sm text-blue-700">Senin - Minggu: 08:00 - 22:00 WIB</p>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="p-6">
              <div className="text-center mb-6">
                <h3 className="font-bold text-lg text-gray-800 mb-2">Pertanyaan Umum</h3>
                <p className="text-gray-600 text-sm">Temukan jawaban untuk pertanyaan yang sering diajukan</p>
              </div>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// Floating Customer Service Button
export function CustomerServiceButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all z-40 flex items-center justify-center"
        style={{ boxShadow: '0 8px 32px rgba(59, 130, 246, 0.3)' }}
      >
        <MessageCircle size={24} />
        
        {/* Notification Dot */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-white">1</span>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <CustomerService isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}