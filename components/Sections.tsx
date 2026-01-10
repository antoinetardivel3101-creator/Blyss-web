
import React, { useState, useRef, useEffect } from 'react';
import {
  Check,
  Sparkles,
  ArrowRight,
  Instagram,
  Heart,
  Calendar,
  Zap,
  User,
  CreditCard,
  Smartphone,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Plus,
  Minus,
  X,
  Star,
  ArrowLeft,
  Mail,
  Phone,
  Store,
  MapPin,
  Clock,
  Rocket,
  Shield,
  Smile,
  MessageCircle,
  Send,
  Loader2,
  Apple,
  Play,
  Lock,
  Eye,
  EyeOff,
  HelpCircle,
  CheckCircle2,
  Briefcase,
  TrendingUp,
  FileText,
  Bell,
  Menu,
  MoreHorizontal,
  Search,
  PieChart,
  Wifi,
  Battery,
  Building2,
  Twitter,
  Linkedin,
  Facebook,
  CheckCircle,
  Download,
  LayoutGrid,
  Palette,
  Users,
  Home,
  Pencil,
  Ban
} from 'lucide-react';
import { GlassCard } from './Visuals';
import { geminiService } from '../services/geminiService';
import { PageView } from '../App';

const BlyssLogo: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div className="flex items-center gap-3 group cursor-pointer" onClick={onClick}>
    <img
      src="https://i.ibb.co/35940F13/B3-B.png"
      alt="Blyss Logo"
      className="w-10 h-10 md:w-16 md:h-16 object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-[10deg]"
    />
  </div>
);

/* --- PHONE MOCKUP COMPONENT IPHONE 17 STYLE --- */
const PhoneMockup: React.FC<{ type: 'dashboard' | 'calendar-month' | 'calendar-day' | 'clients' | 'overview' | 'screenshot'; className?: string }> = ({ type, className = "" }) => {
  return (
    // Base width reduced to 280px for better mobile fit on small screens, expands on md
    <div className={`relative w-[280px] md:w-[300px] h-[580px] md:h-[620px] bg-[#e3e3e3] rounded-[45px] md:rounded-[55px] p-[4px] shadow-[0_0_2px_rgba(0,0,0,0.1),0_20px_40px_-10px_rgba(0,0,0,0.2)] ring-1 ring-white/50 shrink-0 select-none ${className}`}>

      {/* Side Buttons */}
      <div className="absolute top-28 -left-[2px] w-[3px] h-7 bg-[#bdbdbd] rounded-l-md"></div>
      <div className="absolute top-40 -left-[2px] w-[3px] h-14 bg-[#bdbdbd] rounded-l-md"></div>
      <div className="absolute top-56 -left-[2px] w-[3px] h-14 bg-[#bdbdbd] rounded-l-md"></div>
      <div className="absolute top-44 -right-[2px] w-[3px] h-20 bg-[#bdbdbd] rounded-r-md"></div>

      {/* Titanium Frame Bezel */}
      <div className="w-full h-full bg-[#1c1c1c] rounded-[42px] md:rounded-[52px] p-[8px] shadow-inner">
        {/* Screen */}
        <div className={`w-full h-full ${type === 'screenshot' ? 'bg-[#fff0f6]' : 'bg-[#FDFBFD]'} rounded-[34px] md:rounded-[44px] overflow-hidden flex flex-col font-inter relative isolate`}>

          {/* Background Decorative Elements for Screenshot Type */}
          {type === 'screenshot' && (
            <>
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#eb5e9d]/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#eb5e9d]/10 to-transparent"></div>
            </>
          )}

          {/* Dynamic Island / Notch */}
          <div className="absolute top-0 left-0 right-0 h-[32px] z-50 flex justify-center pointer-events-none">
            <div className={`w-[80px] md:w-[100px] h-[24px] md:h-[28px] bg-black rounded-b-[16px] md:rounded-b-[18px] flex items-center justify-center gap-2 shadow-sm mt-0`}>
              <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#101010]"></div>
            </div>
          </div>

          {/* Status Bar */}
          <div className="h-9 md:h-12 w-full flex items-end justify-between pl-5 md:pl-7 pr-8 md:pr-12 pb-4 md:pb-7 z-40 text-gray-900 select-none">
            {/* Left side: Empty for screenshot type as requested */}
            <div className="flex-1">
              {type !== 'screenshot' && (
                <span className="text-[12px] md:text-[14px] font-semibold tracking-wide">12:35</span>
              )}
            </div>

            {/* Center: Notch space (already handled by Dynamic Island absolute pos) */}
            <div className="flex-1"></div>

            {/* Right side: Empty as requested */}
            <div className="flex-1"></div>
          </div>

          {/* Content Area */}
          <div
            className={`flex-1 relative ${type === 'screenshot' ? 'h-full w-full overflow-hidden' : 'overflow-y-auto px-4 md:px-5 pt-2 pb-24 space-y-4 md:space-y-5 [&::-webkit-scrollbar]:hidden'}`}
            style={type !== 'screenshot' ? { scrollbarWidth: 'none', msOverflowStyle: 'none' } : {}}
          >
            {type === 'screenshot' && (
              <img
                src="/dashboard_new.png"
                className="absolute inset-x-0 bottom-0 w-full h-full object-cover object-bottom"
                alt="App Dashboard"
              />
            )}

            {/* SCREEN 1: DASHBOARD */}
            {type === 'dashboard' && (
              <>
                <div className="bg-[#eb5e9d] rounded-[2rem] p-6 text-white shadow-lg shadow-pink-200/50 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="text-pink-100 text-sm mb-1">Cette semaine</div>
                    <div className="flex justify-between items-end mb-1">
                      <div className="text-4xl font-bold">24</div>
                      <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <TrendingUp size={12} /> +12%
                      </div>
                    </div>
                    <div className="text-pink-100 text-sm mb-4">prestations</div>
                    <div className="text-right text-xs text-pink-200">vs semaine dernière</div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex-1 bg-white rounded-3xl p-4 flex flex-col items-center gap-2 shadow-sm border border-gray-50">
                    <div className="w-12 h-12 rounded-full bg-pink-100 text-[#eb5e9d] flex items-center justify-center">
                      <Plus size={24} />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Créneaux</span>
                  </div>
                  <div className="flex-1 bg-white rounded-3xl p-4 flex flex-col items-center gap-2 shadow-sm border border-gray-50">
                    <div className="w-12 h-12 rounded-full bg-pink-100 text-[#eb5e9d] flex items-center justify-center">
                      <Ban size={24} />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Bloquer</span>
                  </div>
                  <div className="flex-1 bg-white rounded-3xl p-4 flex flex-col items-center gap-2 shadow-sm border border-gray-50">
                    <div className="w-12 h-12 rounded-full bg-pink-100 text-[#eb5e9d] flex items-center justify-center">
                      <Eye size={24} />
                    </div>
                    <span className="text-xs font-medium text-gray-600">Planning</span>
                  </div>
                </div>

                <div className="bg-white rounded-[2rem] p-5 flex justify-between items-center shadow-sm border border-gray-50">
                  <span className="text-gray-600 font-medium">Estimation du jour</span>
                  <span className="text-2xl font-bold text-gray-900">320€</span>
                </div>

                <div>
                  <div className="flex justify-between items-center px-1 mb-3">
                    <h4 className="font-bold text-gray-900">Prochaines clientes</h4>
                    <span className="text-xs text-[#eb5e9d] font-medium">Voir tout</span>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-[1.5rem] shadow-sm flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#eb5e9d] text-white flex items-center justify-center font-bold text-sm">MD</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div className="font-bold text-gray-900">Marie Dupont</div>
                          <span className="bg-[#eb5e9d] text-white text-[10px] px-2 py-0.5 rounded-full">En cours</span>
                        </div>
                        <div className="text-xs text-gray-500 mb-1">Pose complète gel</div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-400">14:00</span>
                          <span className="font-bold text-gray-900">65€</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-[1.5rem] shadow-sm flex items-center gap-4 opacity-80">
                      <div className="w-12 h-12 rounded-full bg-[#eb5e9d]/80 text-white flex items-center justify-center font-bold text-sm">SM</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div className="font-bold text-gray-900">Sophie Martin</div>
                          <span className="bg-[#f3f0ea] text-[#8e8b85] text-[10px] px-2 py-0.5 rounded-full">À venir</span>
                        </div>
                        <div className="text-xs text-gray-500 mb-1">Remplissage</div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-400">15:30</span>
                          <span className="font-bold text-gray-900">45€</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-4 rounded-[1.5rem] shadow-sm flex items-center gap-4 opacity-80">
                      <div className="w-12 h-12 rounded-full bg-[#eb5e9d]/80 text-white flex items-center justify-center font-bold text-sm">EB</div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div className="font-bold text-gray-900">Emma Bernard</div>
                          <span className="bg-[#f3f0ea] text-[#8e8b85] text-[10px] px-2 py-0.5 rounded-full">À venir</span>
                        </div>
                        <div className="text-xs text-gray-500 mb-1">Manucure simple</div>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-400">17:00</span>
                          <span className="font-bold text-gray-900">35€</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* SCREEN 2: CALENDAR MONTH */}
            {type === 'calendar-month' && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">Calendrier</h1>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm"><Calendar size={20} /></div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm"><Search size={20} /></div>
                    <div className="w-10 h-10 rounded-full bg-[#eb5e9d] flex items-center justify-center text-white shadow-sm"><Plus size={20} /></div>
                  </div>
                </div>

                <div className="bg-white rounded-[2rem] p-6 shadow-sm mb-6">
                  <div className="flex justify-between items-center mb-6">
                    <ChevronLeft size={20} className="text-gray-400" />
                    <span className="font-bold text-lg">Janvier 2026</span>
                    <ChevronRight size={20} className="text-gray-400" />
                  </div>

                  <div className="grid grid-cols-7 gap-y-4 text-center text-sm mb-2">
                    {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(d => <span key={d} className="text-gray-400 text-xs">{d}</span>)}
                  </div>
                  <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center text-sm font-medium">
                    {/* Empty cells */}
                    <span></span><span></span><span></span>
                    {/* Days */}
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(d => <span key={d} className="py-2">{d}<div className="h-1 w-1 bg-[#eb5e9d] rounded-full mx-auto mt-1"></div></span>)}
                    <span className="bg-[#eb5e9d] text-white rounded-2xl py-2 shadow-lg shadow-pink-200">10</span>
                    {[11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map(d => <span key={d} className="py-2">{d}<div className="h-1 w-1 bg-[#eb5e9d] rounded-full mx-auto mt-1"></div></span>)}
                  </div>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Rendez-vous</h3>
                  <div className="space-y-3">
                    <div className="bg-white p-4 rounded-[1.5rem] flex items-center gap-4 shadow-sm">
                      <div className="text-center min-w-[3rem]">
                        <div className="font-bold text-gray-900">09:00</div>
                        <div className="text-xs text-gray-400">1h30</div>
                      </div>
                      <div className="h-8 w-[1px] bg-gray-100"></div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">Claire Petit</div>
                        <div className="text-xs text-gray-500">Pose complète</div>
                      </div>
                      <div className="font-bold text-gray-900">65€</div>
                    </div>
                    <div className="bg-white p-4 rounded-[1.5rem] flex items-center gap-4 shadow-sm">
                      <div className="text-center min-w-[3rem]">
                        <div className="font-bold text-gray-900">11:00</div>
                        <div className="text-xs text-gray-400">1h</div>
                      </div>
                      <div className="h-8 w-[1px] bg-gray-100"></div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">Julie Moreau</div>
                        <div className="text-xs text-gray-500">Remplissage</div>
                      </div>
                      <div className="font-bold text-gray-900">45€</div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* SCREEN 3: CALENDAR DAY */}
            {type === 'calendar-day' && (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-900">Calendrier</h1>
                  <div className="flex gap-2">
                    <div className="w-10 h-10 rounded-full bg-[#eb5e9d] flex items-center justify-center text-white shadow-sm"><Calendar size={20} /></div>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-gray-600 shadow-sm"><Search size={20} /></div>
                    <div className="w-10 h-10 rounded-full bg-[#eb5e9d] flex items-center justify-center text-white shadow-sm"><Plus size={20} /></div>
                  </div>
                </div>

                <div className="flex justify-between mb-8 overflow-x-hidden">
                  {[
                    { d: 'Jeu', n: '8', active: false },
                    { d: 'Ven', n: '9', active: false },
                    { d: 'Sam', n: '10', active: true },
                    { d: 'Dim', n: '11', active: false },
                    { d: 'Lun', n: '12', active: false },
                  ].map((day, i) => (
                    <div key={i} className={`flex flex-col items-center justify-center w-14 h-16 rounded-2xl ${day.active ? 'bg-[#eb5e9d] text-white shadow-lg shadow-pink-200' : 'bg-white text-gray-600'}`}>
                      <span className="text-xs mb-1 opacity-80">{day.d}</span>
                      <span className="font-bold text-lg">{day.n}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-bold text-gray-900 mb-4">Rendez-vous du jour</h3>
                <div className="space-y-3">
                  {[
                    { time: '09:00', duration: '1h30', name: 'Claire Petit', type: 'Pose complète', price: '65€' },
                    { time: '11:00', duration: '1h', name: 'Julie Moreau', type: 'Remplissage', price: '45€' },
                    { time: '14:00', duration: '45min', name: 'Marie Dupont', type: 'Manucure', price: '35€' },
                    { time: '16:00', duration: '2h', name: 'Sophie Martin', type: 'Nail art', price: '85€' },
                  ].map((rdv, i) => (
                    <div key={i} className="bg-white p-4 rounded-[1.5rem] flex items-center gap-4 shadow-sm">
                      <div className="text-center min-w-[3rem]">
                        <div className="font-bold text-gray-900">{rdv.time}</div>
                        <div className="text-xs text-gray-400">{rdv.duration}</div>
                      </div>
                      <div className="h-8 w-[1px] bg-gray-100"></div>
                      <div className="flex-1">
                        <div className="font-bold text-gray-900">{rdv.name}</div>
                        <div className="text-xs text-gray-500">{rdv.type}</div>
                      </div>
                      <div className="font-bold text-gray-900">{rdv.price}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* SCREEN 4: CLIENTS */}
            {type === 'clients' && (
              <>
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Mes clientes</h1>

                <div className="bg-white rounded-2xl p-3 flex items-center gap-3 shadow-sm mb-6">
                  <Search size={20} className="text-gray-400 ml-2" />
                  <span className="text-gray-400 text-sm">Rechercher une cliente...</span>
                </div>

                <div className="bg-white rounded-[2rem] p-6 flex justify-between text-center shadow-sm mb-6">
                  <div>
                    <div className="text-2xl font-bold">5</div>
                    <div className="text-xs text-gray-400 mt-1">Total</div>
                  </div>
                  <div className="w-[1px] bg-gray-100 h-10"></div>
                  <div>
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-xs text-gray-400 mt-1">Cette semaine</div>
                  </div>
                  <div className="w-[1px] bg-gray-100 h-10"></div>
                  <div>
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-xs text-gray-400 mt-1">Ce mois</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-[1.5rem] flex items-center gap-4 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-[#eb5e9d] text-white flex items-center justify-center font-bold text-sm">MD</div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900">Marie Dupont</div>
                      <div className="text-xs text-gray-500 mb-1">06 12 34 56 78</div>
                      <div className="flex gap-2 text-[10px] text-gray-400">
                        <span>Il y a 2 jours</span> • <span className="text-[#eb5e9d]">12 visites</span>
                      </div>
                      <div className="text-[10px] text-gray-400 italic mt-1">"Préfère les couleurs nude"</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-[#eb5e9d]"><Pencil size={14} /></div>
                  </div>

                  <div className="bg-white p-4 rounded-[1.5rem] flex items-center gap-4 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-[#eb5e9d] text-white flex items-center justify-center font-bold text-sm">SM</div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900">Sophie Martin</div>
                      <div className="text-xs text-gray-500 mb-1">06 23 45 67 89</div>
                      <div className="flex gap-2 text-[10px] text-gray-400">
                        <span>Il y a 1 semaine</span> • <span className="text-[#eb5e9d]">8 visites</span>
                      </div>
                      <div className="text-[10px] text-gray-400 italic mt-1">"Allergique au gel"</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-[#eb5e9d]"><Pencil size={14} /></div>
                  </div>

                  <div className="bg-white p-4 rounded-[1.5rem] flex items-center gap-4 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-[#eb5e9d] text-white flex items-center justify-center font-bold text-sm">EB</div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900">Emma Bernard</div>
                      <div className="text-xs text-gray-500 mb-1">06 34 56 78 90</div>
                      <div className="flex gap-2 text-[10px] text-gray-400">
                        <span>Il y a 3 jours</span> • <span className="text-[#eb5e9d]">15 visites</span>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-[#eb5e9d]"><Pencil size={14} /></div>
                  </div>

                  <div className="bg-white p-4 rounded-[1.5rem] flex items-center gap-4 shadow-sm">
                    <div className="w-12 h-12 rounded-full bg-[#eb5e9d] text-white flex items-center justify-center font-bold text-sm">CP</div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900">Claire Petit</div>
                      <div className="text-xs text-gray-500 mb-1">06 45 67 89 01</div>
                      <div className="flex gap-2 text-[10px] text-gray-400">
                        <span>Il y a 2 semaines</span> • <span className="text-[#eb5e9d]">5 visites</span>
                      </div>
                      <div className="text-[10px] text-gray-400 italic mt-1">"Aime le nail art"</div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-[#eb5e9d]"><Pencil size={14} /></div>
                  </div>
                </div>
              </>
            )}

            {/* SCREEN 5: OVERVIEW (ORIGINAL APP SHOWCASE - NOW UNUSED IN FAVOR OF DASHBOARD, BUT KEPT FOR REFERENCE) */}
            {type === 'overview' && (
              <>
                {/* Planning Preview */}
                <div className="mb-6">
                  <div className="flex justify-between items-center px-1 mb-3">
                    <h4 className="text-xs font-bold text-gray-800 flex items-center gap-2">
                      <Calendar size={12} className="text-[#eb5e9d]" /> Planning
                    </h4>
                    <span className="text-[10px] text-gray-400">Aujourd'hui</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-gray-100 shadow-sm hover:scale-[1.02] transition-transform cursor-pointer">
                      <div className="w-1.5 h-8 rounded-full bg-[#eb5e9d]"></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-xs font-bold text-gray-800">14:00</span>
                          <span className="text-[10px] font-medium text-gray-500">1h30</span>
                        </div>
                        <div className="text-[10px] text-gray-500">Sophie Marceau • Pose Complète</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl border border-gray-100 shadow-sm opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                      <div className="w-1.5 h-8 rounded-full bg-purple-400"></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span className="text-xs font-bold text-gray-800">16:00</span>
                          <span className="text-[10px] font-medium text-gray-500">45min</span>
                        </div>
                        <div className="text-[10px] text-gray-500">Julie Gayet • Remplissage</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clients Preview */}
                <div className="mb-6">
                  <div className="flex justify-between items-center px-1 mb-3">
                    <h4 className="text-xs font-bold text-gray-800 flex items-center gap-2">
                      <User size={12} className="text-[#eb5e9d]" /> Clients Récents
                    </h4>
                  </div>
                  <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5 no-scrollbar" style={{ scrollbarWidth: 'none' }}>
                    {[
                      { img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", name: "Léa" },
                      { img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100", name: "Sarah" },
                      { img: "https://images.unsplash.com/photo-1521119989659-a83eee488058?w=100", name: "Marc" },
                      { img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100", name: "Emma" }
                    ].map((c, i) => (
                      <div key={i} className="flex flex-col items-center gap-1.5 min-w-[50px] cursor-pointer group/client">
                        <div className="w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-pink-200 to-white group-hover/client:scale-110 transition-transform">
                          <img src={c.img} alt={c.name} className="w-full h-full rounded-full object-cover border border-white" />
                        </div>
                        <span className="text-[9px] font-medium text-gray-600">{c.name}</span>
                      </div>
                    ))}
                    <div className="flex flex-col items-center gap-1.5 min-w-[50px]">
                      <div className="w-10 h-10 rounded-full border border-dashed border-gray-300 flex items-center justify-center text-gray-400 bg-gray-50 hover:bg-white hover:border-[#eb5e9d] hover:text-[#eb5e9d] transition-colors cursor-pointer">
                        <Plus size={14} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services Preview */}
                <div>
                  <div className="flex justify-between items-center px-1 mb-3">
                    <h4 className="text-xs font-bold text-gray-800 flex items-center gap-2">
                      <Sparkles size={12} className="text-[#eb5e9d]" /> Prestations
                    </h4>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-gradient-to-br from-pink-50 to-white p-3 rounded-2xl border border-pink-100 flex flex-col gap-2 hover:shadow-md transition-shadow cursor-pointer">
                      <div className="text-[10px] font-bold text-gray-800">Babyboomer</div>
                      <div className="flex justify-between items-end">
                        <span className="text-[11px] font-black text-[#eb5e9d]">45€</span>
                        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-gray-400 shadow-sm">
                          <ChevronRight size={10} />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white p-3 rounded-2xl border border-gray-100 flex flex-col gap-2 hover:border-pink-200 transition-colors cursor-pointer">
                      <div className="text-[10px] font-bold text-gray-800">Nail Art</div>
                      <div className="flex justify-between items-end">
                        <span className="text-[11px] font-black text-gray-800">15€</span>
                        <div className="w-5 h-5 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
                          <ChevronRight size={10} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>

          {/* Bottom Nav */}
          {type !== 'screenshot' && (
            <div className="absolute bottom-6 left-4 right-4 h-16 bg-white rounded-[2.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] flex justify-around items-center px-4 z-40">
              <div className={`p-2 transition-all cursor-pointer ${type === 'dashboard' ? 'text-[#eb5e9d] bg-pink-50 rounded-full' : 'text-gray-400'}`}>
                <Home size={24} strokeWidth={type === 'dashboard' ? 2.5 : 2} />
              </div>
              <div className={`p-2 transition-all cursor-pointer ${(type === 'calendar-month' || type === 'calendar-day') ? 'text-[#eb5e9d] bg-pink-50 rounded-full' : 'text-gray-400'}`}>
                <Calendar size={24} strokeWidth={(type === 'calendar-month' || type === 'calendar-day') ? 2.5 : 2} />
              </div>
              <div className="p-2 text-gray-400">
                <Heart size={24} />
              </div>
              <div className={`p-2 transition-all cursor-pointer ${type === 'clients' ? 'text-[#eb5e9d] bg-pink-50 rounded-full' : 'text-gray-400'}`}>
                <User size={24} strokeWidth={type === 'clients' ? 2.5 : 2} />
              </div>
            </div>
          )}

          {/* Home Indicator */}
          {type !== 'screenshot' && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-black/80 rounded-full z-50 pointer-events-none"></div>
          )}

        </div>
      </div>
    </div >
  );
};

const ChevronLeft = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m15 18-6-6 6-6" /></svg>
);


export const Navbar: React.FC<{ scrolled: boolean; currentPage: PageView; setCurrentPage: (p: PageView) => void }> = ({ scrolled, currentPage, setCurrentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide if scrolling down AND past 50px. Show if scrolling up.
      if (currentScrollY > 50 && currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: PageView) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className={`fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none transition-all duration-500 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0'}`}>
        <nav className="pointer-events-auto w-full max-w-3xl bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full px-4 py-2 pl-6 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 hover:bg-white/15 hover:border-white/30">

          {/* Logo (Left) */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 group shrink-0"
          >
            <img
              src="https://i.ibb.co/35940F13/B3-B.png"
              alt="Blyss"
              className="w-8 h-8 object-contain group-hover:rotate-[10deg] transition-transform"
            />
          </button>

          {/* Right Section: Links + CTA + Mobile Menu */}
          <div className="flex items-center gap-6">
            {/* Links (Hidden on mobile) */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => handleNav('home')}
                className={`text-sm font-medium transition-colors ${currentPage === 'home' ? 'text-black font-bold' : 'text-gray-800 hover:text-black'}`}
              >
                Découvrir
              </button>
              <button
                onClick={() => handleNav('pricing')}
                className={`text-sm font-medium transition-colors ${currentPage === 'pricing' ? 'text-black font-bold' : 'text-gray-800 hover:text-black'}`}
              >
                Tarifs
              </button>
            </div>

            <div className="flex items-center gap-2">
              {/* CTA (Right) */}
              <button
                onClick={() => handleNav('download')}
                className="bg-[#eb5e9d] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-pink-600 transition-colors whitespace-nowrap shadow-lg shadow-pink-500/30"
              >
                Télécharger l'app
              </button>

              {/* Mobile Menu Trigger */}
              <button
                className="md:hidden w-10 h-10 rounded-full text-white hover:bg-white/10 flex items-center justify-center transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>

        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-white/95 backdrop-blur-3xl transition-all duration-500 md:hidden flex flex-col ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-12 h-12 rounded-full bg-gray-50 text-gray-900 flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 flex flex-col justify-center px-6 gap-4 -mt-10">
          <button
            onClick={() => handleNav('home')}
            className={`flex items-center justify-between p-6 rounded-3xl border transition-all active:scale-[0.98] ${currentPage === 'home' ? 'bg-pink-50 border-pink-100 text-[#eb5e9d]' : 'bg-white border-gray-100 shadow-sm'}`}
          >
            <span className="text-xl font-bold">Découvrir</span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentPage === 'home' ? 'bg-[#eb5e9d] text-white' : 'bg-gray-100 text-gray-400'}`}>
              <ArrowRight size={16} />
            </div>
          </button>

          <button
            onClick={() => handleNav('pricing')}
            className={`flex items-center justify-between p-6 rounded-3xl border transition-all active:scale-[0.98] ${currentPage === 'pricing' ? 'bg-pink-50 border-pink-100 text-[#eb5e9d]' : 'bg-white border-gray-100 shadow-sm'}`}
          >
            <span className="text-xl font-bold">Tarifs</span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentPage === 'pricing' ? 'bg-[#eb5e9d] text-white' : 'bg-gray-100 text-gray-400'}`}>
              <ArrowRight size={16} />
            </div>
          </button>

          <button
            onClick={() => handleNav('download')}
            className="bg-[#eb5e9d] text-white p-6 rounded-3xl font-bold shadow-xl shadow-pink-200 mt-4 active:scale-95 transition-transform text-xl flex items-center justify-center gap-3"
          >
            <Download size={24} /> Télécharger l'app
          </button>
        </div>

        <div className="pb-10 px-6">
          <div className="text-center">
            <p className="font-serif-elegant italic text-2xl text-gray-800 mb-1">Blyss</p>
            <p className="text-gray-400 text-sm">Élevez votre art.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export const Hero: React.FC<{ onJoin?: () => void }> = ({ onJoin }) => {
  return (
    <section className="relative pt-28 md:pt-32 pb-12 px-6 overflow-hidden bg-gradient-to-b from-pink-100/40 via-pink-50/30 to-white">
      {/* Maximum Pink Atmosphere */}
      <div className="absolute top-[-15%] left-[-10%] w-[1000px] h-[1000px] bg-[#eb5e9d]/15 rounded-full blur-[160px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-pink-200/40 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute top-1/4 right-[10%] w-[400px] h-[400px] bg-[#eb5e9d]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/20 blur-[120px] -z-10 rounded-full"></div>

      {/* Background Giant Logo - Watermark style with increased opacity */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140vw] md:w-[80vw] max-w-[800px] opacity-[0.06] md:opacity-[0.12] pointer-events-none z-0 select-none mix-blend-multiply transform -translate-y-10 md:translate-y-0">
        <img src="https://i.ibb.co/1YVVTQTc/B3-B2.png" alt="" className="w-full h-auto" />
      </div>

      <div className="container mx-auto flex flex-col items-center text-center max-w-7xl relative z-10">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif-elegant italic mb-6 leading-[1.1] md:leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
          Sublimez votre <br className="hidden md:block" /> <span className="text-[#eb5e9d] drop-shadow-sm italic">quotidien.</span>
        </h1>
        <p className="text-gray-500 text-base md:text-xl max-w-xl mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 font-light px-2 md:px-4">
          La plateforme de gestion intuitive conçue exclusivement pour les prothésistes ongulaires.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 z-20 relative w-full sm:w-auto px-4 sm:px-0">
          <button
            onClick={onJoin}
            className="bg-[#eb5e9d] text-white px-8 md:px-10 py-4 rounded-xl font-bold text-base shadow-xl shadow-pink-200/50 flex items-center justify-center gap-3 group transition-all hover:scale-105 hover:bg-pink-600 active:scale-95 cursor-pointer w-full sm:w-auto"
          >
            Commencer l'aventure <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export const Mission: React.FC = () => (
  <section className="py-16 md:py-20 px-6 bg-white overflow-hidden relative">
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        <div className="md:w-1/2 relative z-10 order-2 md:order-1 text-center md:text-left">
          <div className="w-12 h-1 bg-[#eb5e9d] mb-6 md:mb-8 rounded-full shadow-sm mx-auto md:mx-0"></div>
          <h2 className="text-4xl md:text-7xl font-serif-elegant italic mb-6 leading-tight">Élevez la <br /> <span className="text-[#eb5e9d] drop-shadow-sm">beauté</span> de votre métier.</h2>
          <div className="space-y-6 md:space-y-8">
            <div>
              <h4 className="font-bold text-xl md:text-2xl mb-2 text-gray-900 tracking-tight">Le temps de créer</h4>
              <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed">Nous pensons que votre énergie doit être dédiée à votre art, pas à vos relances. Blyss est votre assistant invisible qui gère tout en arrière-plan.</p>
            </div>
            <div className="relative p-6 md:p-8 bg-pink-50/40 rounded-[2rem] md:rounded-[2.5rem] border border-pink-100/50 italic text-gray-700 text-base md:text-lg shadow-sm">
              "Nous avons crée Blyss pour les professionnelles ongulaires à leurs comptes ou en salons. Elles doivent passer moins de temps sur la partie organisationnelle et prioriser leurs talents !"
              <br /><span className="font-bold text-[#eb5e9d] mt-4 block not-italic font-outfit text-xs tracking-widest uppercase">— Noah, Fondateur de Blyss</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative group order-1 md:order-2 w-full px-4 md:px-0">
          <div className="grid grid-cols-2 gap-3 md:gap-6 relative z-10">
            <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop" className="rounded-[1.5rem] md:rounded-[3rem] shadow-2xl transform -rotate-2 md:-rotate-3 group-hover:rotate-0 transition-all duration-1000 ease-out" alt="Nail Studio" />
            <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop" className="rounded-[1.5rem] md:rounded-[3rem] shadow-2xl mt-6 md:mt-12 transform rotate-2 md:rotate-3 group-hover:rotate-0 transition-all duration-1000 delay-100 ease-out" alt="Manicure" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-pink-100/30 blur-[60px] md:blur-[100px] -z-0 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
);

export const Features: React.FC = () => (
  <section className="py-16 md:py-20 px-6 bg-white" id="features">
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12">
        {[
          { icon: <Calendar size={32} className="md:w-10 md:h-10" />, title: "Agenda Predictif", desc: "La réservation intelligente qui s'adapte à vos pauses et optimise chaque créneau.", color: "bg-pink-100/80 text-[#eb5e9d]" },
          { icon: <Sparkles size={32} className="md:w-10 md:h-10" />, title: "Galerie Inédite", desc: "Exposez vos chefs-d'œuvre avec un rendu professionnel qui convertit vos abonnés.", color: "bg-pink-100/80 text-[#eb5e9d]" },
          { icon: <ShieldCheck size={32} className="md:w-10 md:h-10" />, title: "Sécurité Totale", desc: "Terminé les 'No-shows'. Vos revenus sont garantis grâce aux acomptes automatisés.", color: "bg-pink-100/80 text-[#eb5e9d]" }
        ].map((feature, i) => (
          <div key={i} className="flex flex-col items-center text-center group cursor-default p-4 md:p-0">
            <div className={`w-16 h-16 md:w-20 md:h-20 ${feature.color} rounded-[1.5rem] md:rounded-[1.75rem] flex items-center justify-center mb-5 md:mb-6 transition-all duration-700 group-hover:scale-110 group-hover:rotate-[15deg] shadow-sm`}>
              {feature.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-800 tracking-tight">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed max-w-xs text-sm md:text-base font-light">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const AppShowcase: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-pink-100/40 via-pink-50/30 to-white">
      {/* Maximum Pink Atmosphere - Same as Hero */}
      <div className="absolute top-[-15%] left-[-10%] w-[1000px] h-[1000px] bg-[#eb5e9d]/15 rounded-full blur-[160px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-pink-200/40 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="absolute top-1/4 right-[10%] w-[400px] h-[400px] bg-[#eb5e9d]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12 md:gap-16 max-w-7xl">
        <div className="lg:w-1/2 relative z-10 text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-4xl md:text-7xl font-serif-elegant italic mb-8 leading-tight">Tout votre salon <br /> dans votre <span className="text-[#eb5e9d]">poche.</span></h2>
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {[
              { label: "Planning", icon: <Calendar size={24} />, color: "text-[#eb5e9d]", bg: "bg-white border-pink-100" },
              { label: "Clientes", icon: <User size={24} />, color: "text-[#eb5e9d]", bg: "bg-pink-50 border-pink-200" },
              { label: "Services", icon: <Zap size={24} />, color: "text-[#eb5e9d]", bg: "bg-white border-pink-100" },
              { label: "Fidélité", icon: <Heart size={24} />, color: "text-[#eb5e9d]", bg: "bg-pink-50 border-pink-200" }
            ].map((item, i) => (
              <GlassCard key={i} className={`p-4 md:p-8 flex flex-col items-center text-center hover:bg-white transition-all border-2 ${item.bg.includes('border') ? '' : 'border-pink-50'} hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100/50 group bg-white/60 active:scale-95 duration-200`}>
                <div className={`${item.color} ${item.bg} p-3 md:p-4 rounded-2xl mb-3 md:mb-4 transition-transform duration-500 group-hover:scale-[1.2] shadow-sm border`}>{item.icon}</div>
                <span className="font-bold text-gray-800 text-sm md:text-lg group-hover:text-[#eb5e9d] transition-colors">Votre {item.label}</span>
              </GlassCard>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 relative flex justify-center items-center w-full order-1 lg:order-2 mb-8 lg:mb-0">
          {/* Static Phone Mockup with Custom Screenshot */}
          <div className="relative z-10 transform scale-100 origin-center">
            <PhoneMockup type="screenshot" className="shadow-2xl" />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#eb5e9d]/20 blur-[100px] -z-10 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-pink-300/30 blur-[60px] -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

/* FloatingAIChat */
export const FloatingAIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: "Bonjour ! Je suis l'IA de Blyss. Une question sur votre business ou une panne d'inspiration Nail Art ? Je suis là ! ✨" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await geminiService.getEventAdvice(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Oups, une petite erreur. Réessayez plus tard ! 💅" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}`}>
        {isOpen && (
          <div className="mb-4 w-[90vw] md:w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col pointer-events-auto animate-in fade-in slide-in-from-bottom-10 duration-300">
            <div className="p-4 bg-gradient-to-r from-[#eb5e9d] to-pink-500 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles size={18} />
                <span className="font-bold">Assistant Blyss</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors"><X size={16} /></button>
            </div>
            <div className="h-[350px] overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
              {messages.map((m, i) => (
                <div key={i} className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-[#eb5e9d] text-white self-end rounded-br-none' : 'bg-white text-gray-700 shadow-sm self-start rounded-bl-none border border-gray-100'}`}>
                  {m.text}
                </div>
              ))}
              {isLoading && (
                <div className="self-start bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
                  <Loader2 size={16} className="animate-spin text-[#eb5e9d]" />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Posez votre question..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-[#eb5e9d] transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-[#eb5e9d] text-white p-2 rounded-xl hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 bg-[#eb5e9d] text-white rounded-full shadow-lg shadow-pink-500/40 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
        >
          {isOpen ? <ChevronDown size={28} /> : <MessageCircle size={28} className="group-hover:animate-pulse" />}
        </button>
      </div>
    </>
  );
};

/* Pricing Modal */
const PricingModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  plan: { title: string; price: string; description: string; features: string[] };
  onJoin: () => void;
}> = ({ isOpen, onClose, plan, onJoin }) => {
  if (!isOpen) return null;

  // Static detailed features based on plan type (simplified for demo, would be prop driven in real app)
  const isSignature = plan.title === 'Signature';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="bg-white w-full max-w-4xl rounded-[2.5rem] p-8 md:p-12 relative z-10 shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
          <X size={20} className="text-gray-500" />
        </button>

        <div className="text-center mb-10">
          <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 shadow-sm ${isSignature ? 'bg-[#eb5e9d] text-white' : 'bg-gray-100 text-gray-600'}`}>
            <Sparkles size={32} />
          </div>
          <div className="flex items-center justify-center gap-3 mb-2">
            <h2 className="text-4xl font-serif-elegant italic">{plan.title}</h2>
            {isSignature && <span className="bg-[#eb5e9d] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Recommandé</span>}
          </div>
          <p className="text-gray-500 text-sm mb-4 max-w-md mx-auto">{plan.description}</p>
          <div className="text-5xl font-black text-[#eb5e9d]">{plan.price}<span className="text-base font-medium text-gray-400 ml-1">€/mois</span></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <CheckCircle2 size={16} className="text-green-500" /> Tout inclus dans Start
            </h4>
            <div className="bg-gray-50 p-4 rounded-2xl text-sm font-medium text-gray-600">
              Toutes les fonctionnalités Start
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <Lock size={16} className="text-[#eb5e9d]" /> Sécurisation
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Paiement en ligne</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Prélèvement d'acomptes (Anti no-show)</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Empreinte bancaire</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <Sparkles size={16} className="text-[#eb5e9d]" /> Marketing & Image
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Galerie Photos HD</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Site web personnalisé premium</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Avis clients vérifiés</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Codes promo & Cartes cadeaux</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <TrendingUp size={16} className="text-[#eb5e9d]" /> Pilotage
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Tableau de bord statistiques</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Suivi du chiffre d'affaires</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-100 mt-auto">
          <button onClick={onClose} className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-50 transition-colors">Fermer</button>
          <button onClick={onJoin} className="bg-[#eb5e9d] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 transition-colors flex items-center gap-2">
            Choisir cette offre <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* Salons Modal */
const SalonsModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
      <div className="bg-white w-full max-w-4xl rounded-[2.5rem] p-8 md:p-12 relative z-10 shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors">
          <X size={20} className="text-gray-500" />
        </button>

        <div className="text-center mb-10">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#eb5e9d] text-white flex items-center justify-center mb-4 shadow-sm">
            <Building2 size={32} />
          </div>
          <h2 className="text-4xl font-serif-elegant italic mb-2">Salons & Franchises</h2>
          <p className="text-gray-500 text-sm mb-4 max-w-md mx-auto">Une solution sur-mesure pour les grandes structures et les réseaux de salons.</p>
          <div className="text-3xl font-black text-[#eb5e9d]">Sur Devis</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <Building2 size={16} className="text-[#eb5e9d]" /> Multi-Comptes
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Gestion centralisée de plusieurs établissements</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Comptes collaborateurs illimités</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <Palette size={16} className="text-[#eb5e9d]" /> Personnalisation
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Marque blanche (White label)</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Développement de fonctionnalités sur mesure</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="flex items-center gap-2 font-bold text-sm text-gray-900 mb-4 uppercase tracking-wider">
              <Users size={16} className="text-[#eb5e9d]" /> Accompagnement
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Chef de projet dédié</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">Formation des équipes sur site</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <Check size={14} className="text-[#eb5e9d]" /> <span className="text-sm">API ouverte</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-100 mt-auto">
          <button onClick={onClose} className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-50 transition-colors">Fermer</button>
          <button className="bg-[#eb5e9d] text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 transition-colors flex items-center gap-2">
            Demander un devis <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

const ComparisonTable: React.FC = () => {
  const checkIcon = <div className="flex justify-center"><div className="bg-green-100 p-1.5 rounded-full"><Check size={14} className="text-green-600" strokeWidth={3} /></div></div>;
  const minusIcon = <div className="flex justify-center"><div className="w-6 h-1 bg-gray-200 rounded-full"></div></div>;

  const rows = [
    { label: "Nombre de RDV", start: "50/mois", signature: "Illimité", serenite: "Illimité", highlight: true },
    { label: "Fiches Clients", start: "Illimité", signature: "Illimité", serenite: "Illimité" },
    { label: "Rappels SMS", start: minusIcon, signature: checkIcon, serenite: checkIcon },
    { label: "Acomptes en ligne", start: minusIcon, signature: checkIcon, serenite: checkIcon },
    { label: "Site de réservation", start: "Basique", signature: "Personnalisé", serenite: "Premium" },
    { label: "Statistiques", start: "Basiques", signature: "Avancées", serenite: "Expert" },
    { label: "Campagnes Marketing", start: minusIcon, signature: minusIcon, serenite: checkIcon },
    { label: "Facturation Automatique", start: minusIcon, signature: minusIcon, serenite: checkIcon },
    { label: "Support Client", start: "Email", signature: "VIP 7j/7", serenite: "Prioritaire" },
  ];

  return (
    <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 scroll-indicator-mask">
        <div className="min-w-[700px] md:min-w-full bg-white rounded-[2rem] p-8 border border-gray-100 shadow-xl shadow-pink-100/20">
          {/* Header */}
          <div className="grid grid-cols-4 gap-6 mb-8 text-center pb-6 border-b border-gray-100">
            <div className="text-left font-serif-elegant text-2xl text-gray-400 italic pt-2">Fonctionnalités</div>
            <div className="font-bold text-gray-900 text-lg">Start</div>
            <div className="font-bold text-[#eb5e9d] text-xl">Signature</div>
            <div className="font-bold text-gray-900 text-lg">Sérénité</div>
          </div>

          {/* Rows */}
          <div className="space-y-4">
            {rows.map((row, i) => (
              <div key={i} className={`grid grid-cols-4 gap-6 items-center text-center py-4 px-4 rounded-xl transition-colors ${i % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'} hover:bg-pink-50/30`}>
                <div className="text-left font-medium text-gray-700 text-sm md:text-base">{row.label}</div>
                <div className="text-sm font-medium text-gray-500">{row.start}</div>
                <div className={`text-sm font-bold ${typeof row.signature === 'string' ? 'text-gray-900' : ''}`}>{row.signature}</div>
                <div className="text-sm font-medium text-gray-500">{row.serenite}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingCards = ({ onJoin }: { onJoin: () => void }) => {
  const [selectedPlan, setSelectedPlan] = useState<{ title: string, price: string, description: string, features: string[] } | null>(null);
  const [isSalonsModalOpen, setIsSalonsModalOpen] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  const plans = [
    {
      title: "Start",
      price: "34,90",
      description: "Pour démarrer votre activité sans pression.",
      features: [
        "Réservation 24/7 illimitée",
        "Agenda intelligent",
        "Fichier clients complet",
        "Rappels automatiques Mail"
      ]
    },
    {
      title: "Signature",
      price: "24,90",
      description: "La formule complète pour propulser votre salon et sécuriser vos revenus.",
      features: [
        "Toutes les fonctions Start",
        "Statistiques de performance",
        "Acomptes CB sécurisés",
        "Portfolio HD illimité",
        "Support VIP 7j/7"
      ],
      isPopular: true,
      commitment: "Engagement 12 mois"
    },
    {
      title: "Sérénité",
      price: "29,90",
      description: "L'équilibre parfait pour les pros.",
      features: [
        "Toutes les fonctions Start",
        "Factures automatisées",
        "Historique photos poses",
        "Support prioritaire"
      ],
      commitment: "Engagement 3 mois"
    }
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
        {/* Start */}
        <div className="bg-[#fff5f9] p-8 rounded-[2rem] border border-pink-100/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full relative group">
          <div className="w-14 h-14 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-gray-400 group-hover:bg-[#eb5e9d] group-hover:text-white transition-colors border border-white/50">
            <Zap size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Start</h3>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-5xl font-black text-[#eb5e9d]">34,90</span>
            <span className="text-gray-400 font-medium">€/mois</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8">Sans engagement</p>
          <ul className="space-y-4 text-left w-full mb-8 flex-1 pl-4">
            {plans[0].features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                <div className="bg-white/60 p-1 rounded-full border border-pink-100/50"><Check size={12} className="text-[#eb5e9d]" /></div> {f}
              </li>
            ))}
          </ul>
          <button onClick={() => setSelectedPlan(plans[0])} className="w-full py-4 rounded-xl bg-white backdrop-blur-md border border-white/50 font-bold text-[#eb5e9d] hover:bg-[#eb5e9d] hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm">Choisir</button>
        </div>

        {/* Signature (Center) */}
        <div className="relative bg-[#fff0f6] p-8 rounded-[2rem] border-2 border-[#eb5e9d] shadow-2xl shadow-pink-200/50 flex flex-col items-center text-center transform scale-105 z-10 group">
          <div className="absolute -top-4 bg-[#eb5e9d] text-white text-[10px] font-bold px-6 py-1.5 rounded-full uppercase tracking-wider shadow-md">Plus Populaire</div>
          <div className="w-16 h-16 bg-[#eb5e9d] rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg shadow-pink-200">
            <Sparkles size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Signature</h3>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-6xl font-black text-[#eb5e9d]">24,90</span>
            <span className="text-gray-400 font-medium">€/mois</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8">Engagement 12 mois</p>
          <ul className="space-y-4 text-left w-full mb-8 flex-1 pl-4">
            {plans[1].features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-800 font-medium">
                <div className="bg-white/60 p-1 rounded-full border border-pink-100/50"><Check size={12} className="text-[#eb5e9d]" /></div> {f}
              </li>
            ))}
          </ul>
          <button onClick={() => setSelectedPlan(plans[1])} className="w-full py-4 rounded-xl bg-white backdrop-blur-md border border-white/50 font-bold text-[#eb5e9d] hover:bg-[#eb5e9d] hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-pink-100">Choisir</button>
        </div>

        {/* Sérénité */}
        <div className="bg-[#fff5f9] p-8 rounded-[2rem] border border-pink-100/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full relative group">
          <div className="w-14 h-14 bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 text-gray-400 group-hover:bg-[#eb5e9d] group-hover:text-white transition-colors border border-white/50">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Sérénité</h3>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-5xl font-black text-[#eb5e9d]">29,90</span>
            <span className="text-gray-400 font-medium">€/mois</span>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-8">Engagement 3 mois</p>
          <ul className="space-y-4 text-left w-full mb-8 flex-1 pl-4">
            {plans[2].features.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                <div className="bg-white/60 p-1 rounded-full border border-pink-100/50"><Check size={12} className="text-[#eb5e9d]" /></div> {f}
              </li>
            ))}
          </ul>
          <button onClick={() => setSelectedPlan(plans[2])} className="w-full py-4 rounded-xl bg-white backdrop-blur-md border border-white/50 font-bold text-[#eb5e9d] hover:bg-[#eb5e9d] hover:text-white hover:scale-[1.02] active:scale-[0.98] transition-all shadow-sm">Choisir</button>
        </div>
      </div>

      <div className="mt-16 max-w-3xl mx-auto bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow cursor-pointer" onClick={() => setIsSalonsModalOpen(true)}>
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center text-gray-600">
            <Building2 size={28} strokeWidth={1.5} />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-gray-900 text-lg">Salons & Franchises</h4>
            <p className="text-sm text-gray-500">Une solution sur-mesure pour les grandes structures.</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sur devis</span>
          <button className="bg-gray-50 hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-xl font-bold transition-colors text-sm">Nous contacter</button>
        </div>
      </div>

      {/* Comparison Toggle */}
      <div className="mt-12 text-center">
        <button
          onClick={() => setShowComparison(!showComparison)}
          className="inline-flex items-center gap-2 bg-white border border-pink-100 text-gray-600 px-8 py-3 rounded-full font-bold shadow-sm hover:shadow-md hover:text-[#eb5e9d] transition-all hover:-translate-y-0.5 active:translate-y-0"
        >
          {showComparison ? 'Masquer le comparatif' : 'Comparer toutes les fonctionnalités'}
          {showComparison ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {/* Comparison Table */}
      {showComparison && <ComparisonTable />}

      {/* Modals */}
      <PricingModal
        isOpen={!!selectedPlan}
        onClose={() => setSelectedPlan(null)}
        plan={selectedPlan || plans[1]}
        onJoin={onJoin}
      />

      <SalonsModal
        isOpen={isSalonsModalOpen}
        onClose={() => setIsSalonsModalOpen(false)}
      />
    </>
  );
};

/* PricingSection */
export const PricingSection: React.FC<{ onSeeDetails: () => void; onJoin: () => void }> = ({ onSeeDetails, onJoin }) => {
  return (
    <section className="py-20 px-6 bg-white" id="pricing">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-4xl md:text-7xl font-serif-elegant italic mb-6">Libérez votre <span className="text-[#eb5e9d]">Potentiel.</span></h2>
        <p className="text-gray-500 text-lg mb-16 max-w-xl mx-auto font-light">Un abonnement clair, sans frais cachés, pour transformer votre passion en business rentable.</p>

        <PricingCards onJoin={onJoin} />

      </div>
    </section>
  );
};

/* PricingPage */
export const PricingPage: React.FC<{ onJoin: () => void }> = ({ onJoin }) => {
  return (
    <div className="pt-32 pb-20 px-6 bg-white min-h-screen">
      <div className="container mx-auto max-w-7xl text-center">
        <h1 className="text-4xl md:text-7xl font-serif-elegant italic mb-6">Libérez votre <span className="text-[#eb5e9d]">Potentiel.</span></h1>
        <p className="text-gray-500 text-lg mb-16 max-w-xl mx-auto font-light">Un abonnement clair, sans frais cachés, pour transformer votre passion en business rentable.</p>

        <PricingCards onJoin={onJoin} />
      </div>
    </div>
  )
}

/* DownloadAppSection */
export const DownloadAppSection: React.FC = () => {
  return (
    <section className="py-0 md:py-20 bg-[#1c1c1c] text-white overflow-hidden relative min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16 pt-32 md:pt-0">
          <h2 className="text-4xl md:text-7xl font-serif-elegant italic mb-6 leading-tight">
            Tout votre empire <br /><span className="text-[#eb5e9d]">dans votre poche.</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-light mb-10">
            Retrouvez toutes les fonctionnalités de Blyss où que vous soyez. Gérez votre planning, encaissez vos clientes et suivez vos stats en temps réel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              className="
      w-48 h-14
      bg-black/80 backdrop-blur-xl
      text-white font-semibold
      flex items-center justify-center gap-3
      rounded-xl
      border border-white/10
      transition-all duration-300
      hover:scale-105
      shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]
      hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]
    "
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span>App Store</span>
            </button>

            <button
              className="
      w-48 h-14
      bg-white/20 backdrop-blur-xl
      text-white font-semibold
      flex items-center justify-center gap-3
      rounded-xl
      border border-white/30
      transition-all duration-300
      hover:scale-105
      shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]
      hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.2)]
    "
            >
              <img
                src="/google_play_icon.webp"
                alt="Google Play"
                className="w-6 h-6"
              />
              <span>Google Play</span>
            </button>
          </div>


          {/* 3 Phones Display Grid - Simplified Balanced Layout */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-12 lg:gap-0 lg:-space-x-16 mt-8 pb-20 md:pb-0 perspective-1000">

            {/* Phone 1: Clients - Left Wing */}
            <div className="transform transition-all duration-500 hover:scale-105 lg:translate-y-16 lg:-rotate-6 z-10 scale-95 opacity-90 hover:opacity-100 hover:z-30">
              <PhoneMockup type="clients" className="shadow-2xl shadow-black/50" />
            </div>

            {/* Phone 2: Dashboard - Center Hero */}
            <div className="transform transition-all duration-500 hover:scale-110 lg:-translate-y-8 z-30 scale-100 lg:scale-110 hover:z-40">
              <div className="relative">
                <div className="absolute -inset-4 bg-pink-500/20 blur-3xl rounded-[60px] animate-pulse"></div>
                <PhoneMockup type="dashboard" className="shadow-[0_0_80px_rgba(235,94,157,0.4)] border border-[#eb5e9d]/30" />
              </div>
            </div>

            {/* Phone 3: Calendar Month - Right Wing */}
            <div className="transform transition-all duration-500 hover:scale-105 lg:translate-y-16 lg:rotate-6 z-10 scale-95 opacity-90 hover:opacity-100 hover:z-30">
              <PhoneMockup type="calendar-month" className="shadow-2xl shadow-black/50" />
            </div>

          </div>

          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#eb5e9d]/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

/* Footer */
export const Footer: React.FC<{ setCurrentPage: (page: PageView) => void }> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer" onClick={() => setCurrentPage('home')}>
              <img
                src="https://i.ibb.co/35940F13/B3-B.png"
                alt="Blyss Logo"
                className="w-10 h-10 object-contain group-hover:rotate-[10deg] transition-transform"
              />
              <span className="font-serif-elegant italic text-2xl">Blyss</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              La première plateforme tout-en-un conçue pour l'excellence des prothésistes ongulaires.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:border-[#eb5e9d] hover:text-[#eb5e9d] transition-colors"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:border-[#eb5e9d] hover:text-[#eb5e9d] transition-colors"><Twitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center text-gray-400 hover:border-[#eb5e9d] hover:text-[#eb5e9d] transition-colors"><Mail size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Produit</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-[#eb5e9d] transition-colors">Fonctionnalités</button></li>
              <li><button onClick={() => setCurrentPage('pricing')} className="hover:text-[#eb5e9d] transition-colors">Tarifs</button></li>
              <li><button onClick={() => setCurrentPage('download')} className="hover:text-[#eb5e9d] transition-colors">Télécharger</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Entreprise</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#eb5e9d] transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-[#eb5e9d] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Légal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#eb5e9d] transition-colors">Mentions légales</a></li>
              <li><a href="#" className="hover:text-[#eb5e9d] transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-[#eb5e9d] transition-colors">CGV</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">© 2026 Blyss App. Tous droits réservés.</p>
          <div className="flex gap-6 text-xs text-gray-400">
            <span>Fait avec ❤️ à Annecy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

/* DownloadPage */
export const DownloadPage: React.FC = () => {
  return (
    <div className="bg-white">
      <DownloadAppSection />
    </div>
  );
};
