
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
  CheckCircle
} from 'lucide-react';
import { GlassCard } from './Visuals';
import { geminiService } from '../services/geminiService';
import { PageView } from '../App';

const BlyssLogo: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div className="flex items-center gap-3 group cursor-pointer" onClick={onClick}>
    <div className="w-12 h-12 md:w-16 md:h-16 bg-pink-50 rounded-2xl flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-[10deg] shadow-sm border border-pink-100/50">
       <img src="https://i.ibb.co/35940F13/B3-B.png" alt="Blyss Logo" className="w-7 h-7 md:w-9 md:h-9 object-contain" />
    </div>
    <span className="text-2xl md:text-3xl font-outfit font-bold tracking-tighter text-[#1a1a1a] group-hover:text-[#eb5e9d] transition-colors">BLYSS</span>
  </div>
);

/* --- PHONE MOCKUP COMPONENT IPHONE 17 STYLE --- */
const PhoneMockup: React.FC<{ type: 'home' | 'calendar' | 'stats' | 'overview'; className?: string }> = ({ type, className = "" }) => {
  return (
    <div className={`relative w-[310px] h-[630px] bg-[#e3e3e3] rounded-[60px] p-[4px] shadow-[0_0_2px_rgba(0,0,0,0.1),0_20px_40px_-10px_rgba(0,0,0,0.2)] ring-1 ring-white/50 ${className}`}>
      
      {/* Side Buttons */}
      <div className="absolute top-28 -left-[2px] w-[3px] h-7 bg-[#bdbdbd] rounded-l-md"></div>
      <div className="absolute top-40 -left-[2px] w-[3px] h-14 bg-[#bdbdbd] rounded-l-md"></div>
      <div className="absolute top-56 -left-[2px] w-[3px] h-14 bg-[#bdbdbd] rounded-l-md"></div>
      <div className="absolute top-44 -right-[2px] w-[3px] h-20 bg-[#bdbdbd] rounded-r-md"></div>

      {/* Titanium Frame Bezel */}
      <div className="w-full h-full bg-[#1c1c1c] rounded-[56px] p-[8px] shadow-inner">
        {/* Screen */}
        <div className="w-full h-full bg-[#FDFBFD] rounded-[48px] overflow-hidden flex flex-col font-inter relative isolate">
          
          {/* Dynamic Island */}
          <div className="absolute top-0 left-0 right-0 h-[32px] z-50 flex justify-center pointer-events-none">
             <div className="w-[100px] h-[28px] bg-black rounded-b-[18px] flex items-center justify-center gap-2 shadow-sm mt-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#101010]"></div>
             </div>
          </div>

          {/* Status Bar */}
          <div className="h-12 w-full flex items-end justify-between px-7 pb-2 z-40 text-gray-900 select-none">
            <span className="text-[14px] font-semibold tracking-wide">9:41</span>
            <div className="flex gap-1.5 items-center">
              <Wifi size={16} strokeWidth={2.5} />
              <Battery size={20} strokeWidth={2.5} />
            </div>
          </div>

          {/* Scrollable Content Area - No Scrollbar */}
          <div 
             className="flex-1 overflow-y-auto relative px-5 pt-0 pb-24 space-y-5 [&::-webkit-scrollbar]:hidden"
             style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Sticky Header */}
            <div className="py-2 flex justify-between items-center sticky top-0 z-30 bg-[#FDFBFD]/90 backdrop-blur-xl -mx-5 px-5 transition-all">
               <div className="flex items-center gap-3">
                  <div className="relative group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-100 to-white p-0.5 shadow-sm ring-2 ring-transparent group-hover:ring-pink-100 transition-all">
                       <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" className="w-full h-full rounded-full object-cover" alt="Profile" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">Bonjour</span>
                    <span className="text-sm font-bold text-gray-800 leading-none">Julie N.</span>
                  </div>
               </div>
               <div className="w-10 h-10 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-400 relative hover:bg-gray-50 transition-colors cursor-pointer">
                 <Bell size={18} />
                 <span className="absolute top-2.5 right-3 w-1.5 h-1.5 bg-[#eb5e9d] rounded-full ring-2 ring-white"></span>
               </div>
            </div>

            {/* Content Logic */}
            {type === 'home' && (
              <>
              {/* Revenue Card Premium */}
              <div className="w-full bg-gradient-to-br from-[#eb5e9d] via-[#f472b6] to-[#fb7185] rounded-[2rem] p-6 text-white shadow-xl shadow-pink-200/40 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                 {/* Decorative circles */}
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                 <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl"></div>
                 
                 <div className="relative z-10">
                   <div className="flex justify-between items-start mb-6">
                     <div>
                       <div className="text-pink-100 text-xs font-medium mb-1">Chiffre d'affaires</div>
                       <div className="text-3xl font-bold tracking-tight">845,00 €</div>
                     </div>
                     <div className="bg-white/20 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold flex items-center gap-1">
                       <TrendingUp size={10} /> +12%
                     </div>
                   </div>
                   
                   <div className="flex gap-2">
                      <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-2.5 border border-white/10 hover:bg-white/20 transition-colors">
                        <div className="text-[10px] text-pink-100 opacity-80">RDV</div>
                        <div className="text-lg font-bold">8</div>
                      </div>
                      <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-2.5 border border-white/10 hover:bg-white/20 transition-colors">
                        <div className="text-[10px] text-pink-100 opacity-80">Panier Moy.</div>
                        <div className="text-lg font-bold">65€</div>
                      </div>
                   </div>
                 </div>
              </div>

              {/* Quick Actions Grid */}
              <div>
                <h4 className="text-xs font-bold text-gray-800 mb-3 ml-1">Actions Rapides</h4>
                <div className="grid grid-cols-4 gap-3">
                   {[
                     { icon: <Plus size={18} />, label: "Nouveau", color: "bg-gray-900 text-white" },
                     { icon: <User size={18} />, label: "Clients", color: "bg-white text-gray-600 border border-gray-100 hover:border-[#eb5e9d] hover:text-[#eb5e9d]" },
                     { icon: <MessageCircle size={18} />, label: "Message", color: "bg-white text-gray-600 border border-gray-100 hover:border-[#eb5e9d] hover:text-[#eb5e9d]" },
                     { icon: <Sparkles size={18} />, label: "Galerie", color: "bg-white text-gray-600 border border-gray-100 hover:border-[#eb5e9d] hover:text-[#eb5e9d]" }
                   ].map((action, i) => (
                     <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${action.color} transition-all duration-300 active:scale-95`}>
                         {action.icon}
                       </div>
                       <span className="text-[10px] font-medium text-gray-500 group-hover:text-gray-800 transition-colors">{action.label}</span>
                     </div>
                   ))}
                </div>
              </div>

              {/* Next Appointment Detailed */}
              <div>
                <div className="flex justify-between items-center mb-3 px-1">
                  <h4 className="text-xs font-bold text-gray-800">Prochain Client</h4>
                  <span className="text-[10px] text-[#eb5e9d] font-bold cursor-pointer hover:underline">14:00</span>
                </div>
                <div className="bg-white p-4 rounded-[1.5rem] border border-gray-100 shadow-lg shadow-gray-100/50 flex items-center gap-4 hover:border-pink-100 transition-colors cursor-pointer">
                   <div className="relative">
                     <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" className="w-12 h-12 rounded-2xl object-cover" alt="Client" />
                     <div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full">
                       <div className="bg-[#eb5e9d] rounded-full p-0.5">
                         <Clock size={10} className="text-white" />
                       </div>
                     </div>
                   </div>
                   <div className="flex-1">
                      <div className="text-sm font-bold text-gray-800">Sarah Connor</div>
                      <div className="text-[11px] text-gray-400 mt-0.5">Remplissage Gel • Babyboomer</div>
                      <div className="flex gap-2 mt-2">
                        <span className="bg-pink-50 text-[#eb5e9d] px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wide">Confirmé</span>
                        <span className="bg-gray-50 text-gray-500 px-2 py-0.5 rounded-md text-[9px] font-medium">1h30</span>
                      </div>
                   </div>
                </div>
              </div>
              </>
            )}

            {type === 'calendar' && (
               <>
                 <div className="flex justify-between items-center px-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-gray-800">Octobre</h4>
                      <span className="text-lg text-gray-400 font-medium">2024</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-600 hover:bg-white hover:shadow-sm transition-all cursor-pointer">
                      <Calendar size={14} />
                    </div>
                 </div>
                 
                 <div className="flex justify-between items-center bg-white p-3 rounded-2xl border border-gray-100 shadow-sm">
                   {['L', 'M', 'M', 'J', 'V', 'S'].map((d, i) => (
                     <div key={i} className={`flex flex-col items-center gap-2 ${i === 2 ? 'text-[#eb5e9d]' : 'text-gray-400'}`}>
                       <span className="text-[10px] font-medium">{d}</span>
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${i === 2 ? 'bg-[#eb5e9d] text-white shadow-md shadow-pink-200 scale-110' : 'bg-transparent text-gray-600 hover:bg-gray-50'}`}>
                         {22 + i}
                       </div>
                       {i === 2 && <div className="w-1 h-1 bg-[#eb5e9d] rounded-full"></div>}
                     </div>
                   ))}
                 </div>

                 <div className="relative pl-4 space-y-6">
                   <div className="absolute left-[1.65rem] top-2 bottom-0 w-[2px] bg-gradient-to-b from-gray-100 via-gray-100 to-transparent"></div>
                   {[
                     { time: '09:00', end: '10:30', client: 'Léa M.', task: 'Pose Complète', color: 'bg-[#feeef2] border-l-[#eb5e9d] text-[#be185d]', icon: '💅' },
                     { time: '11:00', end: '12:00', client: 'Sophie D.', task: 'Dépose + Soin', color: 'bg-blue-50 border-l-blue-400 text-blue-700', icon: '✨' },
                     { time: '13:30', end: '14:00', client: 'Pause', task: 'Déjeuner', color: 'bg-gray-50 border-l-gray-300 text-gray-500', icon: '🥗' },
                     { time: '14:00', end: '15:30', client: 'Emma W.', task: 'Nail Art 3D', color: 'bg-purple-50 border-l-purple-400 text-purple-700', icon: '🎨' }
                   ].map((item, i) => (
                     <div key={i} className="relative pl-8 group">
                       <div className="absolute left-[1.35rem] top-3 w-3 h-3 bg-white border-[3px] border-gray-200 rounded-full z-10 group-hover:border-[#eb5e9d] transition-colors"></div>
                       <div className={`p-4 rounded-2xl border-l-4 ${item.color} shadow-sm transition-transform hover:scale-[1.02] active:scale-95 cursor-pointer`}>
                          <div className="flex justify-between items-start mb-1">
                            <span className="text-xs font-bold opacity-80">{item.time} - {item.end}</span>
                            <span className="text-xs">{item.icon}</span>
                          </div>
                          <div className="font-bold text-sm mb-0.5">{item.client}</div>
                          <div className="text-[11px] opacity-70 font-medium">{item.task}</div>
                       </div>
                     </div>
                   ))}
                 </div>
               </>
            )}

            {type === 'stats' && (
               <>
                  <div className="flex items-center justify-between mb-2">
                     <h4 className="text-xs font-bold text-gray-800">Aperçu Mensuel</h4>
                     <select className="bg-gray-50 border border-gray-100 text-[10px] rounded-lg px-2 py-1 font-medium text-gray-600 outline-none hover:bg-gray-100 cursor-pointer">
                       <option>Octobre</option>
                       <option>Septembre</option>
                     </select>
                  </div>

                  <div className="bg-white p-5 rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-100/50">
                     <div className="flex gap-4 mb-6">
                        <div>
                          <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Revenus</div>
                          <div className="text-2xl font-bold text-gray-800">2,450€</div>
                        </div>
                        <div className="h-auto w-px bg-gray-100"></div>
                        <div>
                          <div className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Rendez-vous</div>
                          <div className="text-2xl font-bold text-gray-800">42</div>
                        </div>
                     </div>
                     
                     <div className="flex items-end justify-between gap-2 h-32 w-full pt-4 border-t border-dashed border-gray-100">
                        {[35, 55, 30, 85, 45, 95, 60].map((h, i) => (
                          <div key={i} className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                             <div className="w-full bg-gray-50 rounded-full relative h-full flex items-end overflow-hidden group-hover:bg-gray-100 transition-colors">
                                <div 
                                  className="w-full rounded-t-full transition-all duration-1000 ease-out relative" 
                                  style={{ height: `${h}%`, background: i === 5 ? 'linear-gradient(to top, #eb5e9d, #f472b6)' : 'linear-gradient(to top, #e5e7eb, #d1d5db)' }}
                                >
                                  {i === 5 && <div className="absolute top-0 left-0 right-0 h-1/2 bg-white/20 blur-sm"></div>}
                                </div>
                             </div>
                             <span className={`text-[9px] font-bold ${i === 5 ? 'text-[#eb5e9d]' : 'text-gray-300'}`}>
                               {['L', 'M', 'M', 'J', 'V', 'S', 'D'][i]}
                             </span>
                          </div>
                        ))}
                     </div>
                  </div>

                  <h4 className="text-xs font-bold text-gray-800 mb-2 mt-2">Top Prestations</h4>
                  <div className="space-y-3">
                     {[
                       { name: 'Pose Complète', count: '1,240€', percent: 60, color: 'bg-purple-500' },
                       { name: 'Remplissage', count: '850€', percent: 30, color: 'bg-pink-500' },
                       { name: 'Nail Art', count: '360€', percent: 10, color: 'bg-blue-400' },
                     ].map((item, i) => (
                       <div key={i} className="bg-white p-3 rounded-2xl border border-gray-50 shadow-sm flex items-center gap-3 hover:shadow-md transition-shadow">
                          <div className={`w-10 h-10 rounded-xl ${item.color} bg-opacity-10 flex items-center justify-center text-${item.color.replace('bg-', '')}`}>
                            <Star size={16} className={item.color.replace('bg-', 'text-')} fill="currentColor" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between text-[11px] mb-1.5">
                               <span className="font-bold text-gray-700">{item.name}</span>
                               <span className="font-bold text-gray-900">{item.count}</span>
                            </div>
                            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                               <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.percent}%` }}></div>
                            </div>
                          </div>
                       </div>
                     ))}
                  </div>
               </>
            )}

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
          <div className="absolute bottom-6 left-4 right-4 h-16 bg-white/90 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] border border-white/50 flex justify-around items-center px-2 z-40">
             <div className={`p-3 rounded-full transition-all cursor-pointer ${type === 'home' || type === 'overview' ? 'text-[#eb5e9d] bg-pink-50' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}>
               <Store size={22} strokeWidth={type === 'home' || type === 'overview' ? 2.5 : 2} />
             </div>
             <div className={`p-3 rounded-full transition-all cursor-pointer ${type === 'calendar' ? 'text-[#eb5e9d] bg-pink-50' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}>
               <Calendar size={22} strokeWidth={type === 'calendar' ? 2.5 : 2} />
             </div>
             
             {/* Main Action */}
             <div className="relative -top-6 cursor-pointer group">
               <div className="w-16 h-16 bg-[#eb5e9d] rounded-full text-white flex items-center justify-center shadow-xl shadow-pink-300 ring-4 ring-[#FDFBFD] transform transition-transform group-hover:scale-105 group-active:scale-95">
                  <Plus size={28} />
               </div>
             </div>

             <div className={`p-3 rounded-full transition-all cursor-pointer ${type === 'stats' ? 'text-[#eb5e9d] bg-pink-50' : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'}`}>
               <PieChart size={22} strokeWidth={type === 'stats' ? 2.5 : 2} />
             </div>
             <div className="p-3 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-all cursor-pointer">
               <User size={22} strokeWidth={2} />
             </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1.5 bg-black/80 rounded-full z-50 pointer-events-none"></div>

        </div>
      </div>
    </div>
  );
};


export const Navbar: React.FC<{ scrolled: boolean; currentPage: PageView; setCurrentPage: (p: PageView) => void }> = ({ scrolled, currentPage, setCurrentPage }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || currentPage !== 'home' ? 'bg-white/80 backdrop-blur-xl border-b border-pink-100/30 py-2 shadow-sm' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-7xl">
        <BlyssLogo onClick={() => setCurrentPage('home')} />
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <button onClick={() => setCurrentPage('home')} className={`hover:text-[#eb5e9d] transition-all relative group ${currentPage === 'home' ? 'text-[#eb5e9d] font-bold' : ''}`}>
            Découvrir
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#eb5e9d] rounded-full transition-all duration-300 ${currentPage === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>
          <button onClick={() => setCurrentPage('pricing')} className={`hover:text-[#eb5e9d] transition-all relative group ${currentPage === 'pricing' ? 'text-[#eb5e9d] font-bold' : ''}`}>
            Tarifs
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#eb5e9d] rounded-full transition-all duration-300 ${currentPage === 'pricing' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </button>
          <button 
            onClick={() => setCurrentPage('join')}
            className="bg-[#eb5e9d] text-white px-6 py-2.5 rounded-full font-bold shadow-[0_10px_20px_-5px_rgba(235,94,157,0.3)] hover:shadow-[0_15px_30px_-5px_rgba(235,94_157,0.4)] hover:scale-105 active:scale-95 transition-all text-sm"
          >
            Nous rejoindre
          </button>
        </div>
      </div>
    </nav>
  );
};

export const Hero: React.FC<{ onJoin?: () => void }> = ({ onJoin }) => {
  return (
    <section className="relative pt-28 pb-12 px-6">
      {/* Background Giant Logo - Watermark style with increased opacity */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] opacity-[0.12] pointer-events-none z-0 select-none mix-blend-multiply">
         <img src="https://i.ibb.co/1YVVTQTc/B3-B2.png" alt="" className="w-full h-auto" />
      </div>

      <div className="container mx-auto flex flex-col items-center text-center max-w-7xl relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-pink-50/80 backdrop-blur-sm text-[#eb5e9d] rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-4 animate-in fade-in slide-in-from-bottom-2 duration-1000 shadow-sm border border-pink-100/50">
           <Sparkles size={12} /> La révolution du Nail Art
        </div>
        <h1 className="text-5xl md:text-8xl font-serif-elegant italic mb-4 leading-tight md:leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
          Sublimez votre <br/> <span className="text-[#eb5e9d] drop-shadow-sm italic">quotidien.</span>
        </h1>
        <p className="text-gray-500 text-base md:text-xl max-w-xl mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200 font-light">
          La plateforme de gestion intuitive conçue exclusivement pour les prothésistes ongulaires passionnées.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 z-20 relative">
          <button 
            onClick={onJoin}
            className="bg-[#eb5e9d] text-white px-10 py-4 rounded-xl font-bold text-base shadow-xl shadow-pink-200/50 flex items-center gap-3 group transition-all hover:scale-105 hover:bg-pink-600 active:scale-95 cursor-pointer"
          >
            Commencer l'aventure <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export const Mission: React.FC = () => (
  <section className="py-16 px-6 bg-white overflow-hidden relative">
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2 relative z-10">
          <div className="w-12 h-1 bg-[#eb5e9d] mb-8 rounded-full shadow-sm"></div>
          <h2 className="text-5xl md:text-7xl font-serif-elegant italic mb-6 leading-tight">Élevez la <br/> <span className="text-[#eb5e9d] drop-shadow-sm">beauté</span> de votre métier.</h2>
          <div className="space-y-8">
            <div>
              <h4 className="font-bold text-2xl mb-2 text-gray-900 tracking-tight">Le temps de créer</h4>
              <p className="text-gray-500 text-lg font-light leading-relaxed">Nous pensons que votre énergie doit être dédiée à votre art, pas à vos relances. Blyss est votre assistant invisible qui gère tout en arrière-plan.</p>
            </div>
            <div className="relative p-8 bg-pink-50/40 rounded-[2.5rem] border border-pink-100/50 italic text-gray-700 text-lg shadow-sm">
              "Blyss est né de la volonté de redonner de la valeur au temps des créatrices. C'est l'outil que nous aurions aimé avoir à nos débuts."
              <br/><span className="font-bold text-[#eb5e9d] mt-4 block not-italic font-outfit text-xs tracking-widest uppercase">— Noah, Fondateur de Blyss</span>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative group">
           <div className="grid grid-cols-2 gap-6 relative z-10">
              <img src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop" className="rounded-[3rem] shadow-2xl transform -rotate-3 group-hover:rotate-0 transition-all duration-1000 ease-out" alt="Nail Studio" />
              <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800&auto=format&fit=crop" className="rounded-[3rem] shadow-2xl mt-12 transform rotate-3 group-hover:rotate-0 transition-all duration-1000 delay-100 ease-out" alt="Manicure" />
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] bg-pink-100/30 blur-[100px] -z-0 rounded-full"></div>
        </div>
      </div>
    </div>
  </section>
);

export const Features: React.FC = () => (
  <section className="py-16 px-6 bg-white" id="features">
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { icon: <Calendar size={40} />, title: "Agenda Predictif", desc: "La réservation intelligente qui s'adapte à vos pauses et optimise chaque créneau.", color: "bg-pink-100/80 text-[#eb5e9d]" },
          // Changement couleurs: Galerie Inédite (Maintenant en rose)
          { icon: <Sparkles size={40} />, title: "Galerie Inédite", desc: "Exposez vos chefs-d'œuvre avec un rendu professionnel qui convertit vos abonnés.", color: "bg-pink-100/80 text-[#eb5e9d]" },
          { icon: <ShieldCheck size={40} />, title: "Sécurité Totale", desc: "Terminé les 'No-shows'. Vos revenus sont garantis grâce aux acomptes automatisés.", color: "bg-pink-100/80 text-[#eb5e9d]" }
        ].map((feature, i) => (
          <div key={i} className="flex flex-col items-center text-center group cursor-default">
            <div className={`w-20 h-20 ${feature.color} rounded-[1.75rem] flex items-center justify-center mb-6 transition-all duration-700 group-hover:scale-110 group-hover:rotate-[15deg] shadow-sm`}>
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold mb-3 text-gray-800 tracking-tight">{feature.title}</h3>
            <p className="text-gray-500 leading-relaxed max-w-xs text-base font-light">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const AppShowcase: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 max-w-7xl">
        <div className="lg:w-1/2 relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif-elegant italic mb-8 leading-tight">Tout votre salon <br/> dans votre <span className="text-[#eb5e9d]">poche.</span></h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Planning", icon: <Calendar size={24} />, color: "text-purple-500", bg: "bg-purple-50" },
              { label: "Clientes", icon: <User size={24} />, color: "text-[#eb5e9d]", bg: "bg-pink-50" },
              { label: "Services", icon: <Zap size={24} />, color: "text-amber-500", bg: "bg-amber-50" },
              { label: "Fidélité", icon: <Heart size={24} />, color: "text-red-500", bg: "bg-red-50" }
            ].map((item, i) => (
              <GlassCard key={i} className="p-8 flex flex-col items-center text-center hover:bg-white transition-all border-2 border-pink-50 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100/50 group bg-white/60">
                <div className={`${item.color} ${item.bg} p-4 rounded-2xl mb-4 transition-transform duration-500 group-hover:scale-[1.2] shadow-sm`}>{item.icon}</div>
                <span className="font-bold text-gray-800 text-lg group-hover:text-[#eb5e9d] transition-colors">Votre {item.label}</span>
              </GlassCard>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 relative flex justify-center items-center">
           {/* Phone Mockup with Overview (Planning, Clients, Services) - Floating Animation */}
           <div className="relative z-10">
             <PhoneMockup type="overview" className="shadow-2xl animate-float scale-105" />
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-pink-100/40 blur-[80px] -z-10 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export const DownloadAppSection: React.FC = () => {
  return (
    <section className="py-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-[#1a1a1a] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col items-center text-center">
          {/* Background Blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#eb5e9d]/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/10">
              <Smartphone size={12} className="text-[#eb5e9d]" /> Disponible sur iOS & Android
            </div>
            <h2 className="text-5xl md:text-7xl font-serif-elegant italic mb-6 leading-tight">
              Tout votre empire <br/><span className="text-[#eb5e9d]">dans votre poche.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 font-light">
              Retrouvez toutes les fonctionnalités de Blyss où que vous soyez. 
              Gérez votre planning, encaissez vos clientes et suivez vos stats en temps réel.
            </p>
            <div className="flex gap-4 justify-center">
                <button className="bg-white text-[#1a1a1a] px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                    <Apple size={20} /> App Store
                </button>
                <button className="bg-white/10 text-white border border-white/20 px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-white/20 transition-all">
                    <Play size={20} /> Google Play
                </button>
            </div>
          </div>

          {/* 3 Phones Display */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0 mt-8">
             {/* Phone Left - Calendar */}
             <div className="transform md:translate-x-16 md:rotate-[-12deg] md:scale-90 z-0 opacity-90 hover:opacity-100 hover:z-20 transition-all duration-500">
                <PhoneMockup type="calendar" className="shadow-2xl" />
             </div>
             
             {/* Phone Center - Home */}
             <div className="z-10 transform md:-translate-y-12 hover:scale-105 transition-transform duration-500">
                <PhoneMockup type="home" className="shadow-[0_0_50px_rgba(235,94,157,0.4)] border-4 border-[#eb5e9d]/30" />
             </div>

             {/* Phone Right - Stats */}
             <div className="transform md:-translate-x-16 md:rotate-[12deg] md:scale-90 z-0 opacity-90 hover:opacity-100 hover:z-20 transition-all duration-500">
                <PhoneMockup type="stats" className="shadow-2xl" />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

interface PricingTierProps {
  title: string;
  price: string;
  engagement: string;
  features: string[];
  recommended?: boolean;
  onSelect?: () => void;
  isCustomQuote?: boolean; // Nouvelle prop pour le devis
}

const PricingTier: React.FC<PricingTierProps> = ({ title, price, engagement, features, recommended = false, onSelect, isCustomQuote = false }) => (
  <div className={`pricing-card flex flex-col p-8 rounded-[2.5rem] bg-white transition-all duration-700 ${recommended ? 'border-2 border-[#eb5e9d] shadow-[0_30px_60px_-10px_rgba(235,94,157,0.15)] scale-105 z-10' : 'border border-pink-50 shadow-xl shadow-gray-200/30 hover:border-pink-200'} relative group`}>
    {recommended && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#eb5e9d] text-white px-6 py-1.5 rounded-full text-[8px] font-black uppercase tracking-[0.2em] shadow-lg">
        Plus populaire
      </div>
    )}
    <h3 className="text-xl font-bold mb-4 text-center text-gray-800 tracking-tight group-hover:text-[#eb5e9d] transition-colors">{title}</h3>
    
    <div className="text-center mb-1">
      <span className={`font-black tracking-tighter text-[#eb5e9d] drop-shadow-sm ${isCustomQuote ? 'text-3xl' : 'text-5xl'}`}>{price}</span>
      {!isCustomQuote && <span className="text-gray-400 ml-1 font-bold text-sm">€/mois</span>}
    </div>
    
    <p className="text-gray-400 text-center text-[8px] mb-8 font-black uppercase tracking-[0.2em]">{engagement}</p>
    
    <div className="flex-1 space-y-4 mb-8">
      {features.map((f, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110">
            <Check size={12} className="text-[#eb5e9d]" />
          </div>
          <span className="text-gray-600 text-xs leading-tight font-medium">{f}</span>
        </div>
      ))}
    </div>

    <button 
      onClick={onSelect}
      className={`w-full py-4 rounded-2xl font-bold text-base transition-all active:scale-95 ${recommended ? 'bg-[#eb5e9d] text-white shadow-lg hover:bg-pink-600' : 'bg-white text-[#eb5e9d] border-2 border-pink-100 hover:border-[#eb5e9d]'}`}
    >
      {isCustomQuote ? 'Contactez-nous' : 'Choisir'}
    </button>
  </div>
);

// --- MODAL COMPONENT & DATA ---
const PLAN_DETAILS = {
  start: {
    title: "Start",
    price: "34,90",
    description: "L'essentiel pour digitaliser votre activité et gagner du temps.",
    features: {
      "Gestion Quotidienne": ["Agenda en ligne 24/7", "Rappels de RDV (Email)", "Fichier clients illimité", "Historique des RDV"],
      "Visibilité": ["Page de réservation simple", "Lien Instagram/Bio"],
      "Support": ["Support par email (48h)", "Centre d'aide en ligne"]
    },
    icon: <Rocket size={32} className="text-white" />
  },
  signature: {
    title: "Signature",
    price: "24,90",
    tag: "Recommandé",
    description: "La formule complète pour propulser votre salon et sécuriser vos revenus.",
    features: {
      "Tout inclus dans Start": ["Toutes les fonctionnalités Start"],
      "Sécurisation": ["Paiement en ligne", "Prélèvement d'acomptes (Anti no-show)", "Empreinte bancaire"],
      "Marketing & Image": ["Galerie Photos HD", "Site web personnalisé premium", "Avis clients vérifiés", "Codes promo & Cartes cadeaux"],
      "Pilotage": ["Tableau de bord statistiques", "Suivi du chiffre d'affaires"]
    },
    icon: <Sparkles size={32} className="text-white" />
  },
  serenite: {
    title: "Sérénité",
    price: "29,90",
    description: "Pour les pros qui veulent une tranquillité d'esprit totale et une gestion comptable.",
    features: {
      "Tout inclus dans Signature": ["Toutes les fonctionnalités Signature"],
      "Administratif": ["Facturation automatique", "Livre de recettes exportable", "Gestion des dépenses"],
      "Service VIP": ["Support prioritaire WhatsApp", "Formation de 30min offerte", "Import de base client gratuit"]
    },
    icon: <ShieldCheck size={32} className="text-white" />
  },
  salons: {
    title: "Salons & Franchises",
    price: "Sur Devis",
    description: "Une solution sur-mesure pour les grandes structures et les réseaux de salons.",
    features: {
      "Multi-comptes": ["Gestion centralisée de plusieurs établissements", "Comptes collaborateurs illimités"],
      "Personnalisation": ["Marque blanche (White label)", "Développement de fonctionnalités sur mesure"],
      "Accompagnement": ["Chef de projet dédié", "Formation des équipes sur site", "API ouverte"]
    },
    icon: <Building2 size={32} className="text-white" />
  }
};

const PricingModal: React.FC<{ planType: 'start' | 'signature' | 'serenite' | 'salons'; onClose: () => void; onConfirm: () => void }> = ({ planType, onClose, onConfirm }) => {
  const plan = PLAN_DETAILS[planType];
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleChoice = () => {
    setIsRedirecting(true);
    // Simuler un petit délai pour l'effet de chargement avant de rediriger
    setTimeout(() => {
      onConfirm();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity animate-in fade-in" onClick={onClose}></div>
      <GlassCard className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto !p-0 shadow-2xl animate-in zoom-in-95 duration-300 bg-white/90 custom-scrollbar">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-50 to-white p-8 border-b border-pink-100 relative overflow-hidden">
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/50 hover:bg-white text-gray-500 hover:text-gray-800 transition-all">
            <X size={18} />
          </button>
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#eb5e9d]/10 rounded-full blur-3xl"></div>
          
          <div className="flex items-start gap-6 relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-[#eb5e9d] flex items-center justify-center shadow-lg shadow-pink-300/50 shrink-0">
              {plan.icon}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-3xl font-serif-elegant italic">{plan.title}</h3>
                {/* @ts-ignore */}
                {plan.tag && <span className="bg-[#eb5e9d] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">{plan.tag}</span>}
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-3">{plan.description}</p>
              <div className="flex items-baseline gap-1">
                <span className={`font-black text-[#eb5e9d] ${planType === 'salons' ? 'text-3xl' : 'text-4xl'}`}>{plan.price}</span>
                {planType !== 'salons' && <span className="text-gray-400 font-bold text-sm">€/mois</span>}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-8">
           {Object.entries(plan.features).map(([category, items], idx) => (
             <div key={idx}>
               <h4 className="flex items-center gap-2 font-bold text-gray-800 mb-4 text-sm uppercase tracking-wider">
                 {category === "Gestion Quotidienne" && <Briefcase size={16} className="text-pink-400" />}
                 {category === "Visibilité" && <Eye size={16} className="text-pink-400" />}
                 {category === "Support" && <HelpCircle size={16} className="text-pink-400" />}
                 {category === "Sécurisation" && <Lock size={16} className="text-pink-400" />}
                 {category === "Marketing & Image" && <Sparkles size={16} className="text-pink-400" />}
                 {category === "Pilotage" && <TrendingUp size={16} className="text-pink-400" />}
                 {category === "Administratif" && <FileText size={16} className="text-pink-400" />}
                 {category === "Service VIP" && <Star size={16} className="text-pink-400" />}
                 {category === "Multi-comptes" && <Building2 size={16} className="text-pink-400" />}
                 {category.includes("Tout inclus") && <CheckCircle2 size={16} className="text-green-500" />}
                 {category}
               </h4>
               <div className="grid md:grid-cols-2 gap-3">
                 {/* @ts-ignore */}
                 {items.map((item, i) => (
                   <div key={i} className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50/50 p-2.5 rounded-xl border border-gray-100">
                     <Check size={14} className="text-[#eb5e9d] mt-0.5 shrink-0" />
                     <span className="leading-tight">{item}</span>
                   </div>
                 ))}
               </div>
             </div>
           ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 bg-gray-50 flex justify-end gap-4">
          <button onClick={onClose} className="px-6 py-3 rounded-xl font-bold text-gray-500 hover:bg-gray-200 transition-colors">
            Fermer
          </button>
          <button 
            onClick={handleChoice} 
            disabled={isRedirecting}
            className={`px-8 py-3 rounded-xl font-bold bg-[#eb5e9d] text-white shadow-lg hover:bg-pink-600 transition-all flex items-center gap-2 ${isRedirecting ? 'opacity-90 cursor-wait' : 'hover:scale-105 active:scale-95'}`}
          >
            {isRedirecting ? (
              <>
                <Loader2 className="animate-spin" size={18} />
                Redirection...
              </>
            ) : (
              <>{planType === 'salons' ? 'Demander un devis' : 'Choisir cette offre'} <ArrowRight size={18} /></>
            )}
          </button>
        </div>

      </GlassCard>
    </div>
  );
};

export const PricingSection: React.FC<{ onSeeDetails: () => void; onJoin: () => void }> = ({ onSeeDetails, onJoin }) => {
  const [selectedPlan, setSelectedPlan] = useState<'start' | 'signature' | 'serenite' | 'salons' | null>(null);

  const handleSelect = (plan: 'start' | 'signature' | 'serenite' | 'salons') => {
    setSelectedPlan(plan);
  };

  const handleConfirm = () => {
    setSelectedPlan(null);
    if (onJoin) onJoin();
  };

  return (
    <section className="py-20 px-6" id="pricing">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-7xl font-serif-elegant italic mb-4">Libérez votre <span className="text-[#eb5e9d]">Potentiel.</span></h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg font-light leading-relaxed">
            Un abonnement clair, sans frais cachés, pour transformer votre passion en business rentable.
          </p>
        </div>
        
        {/* GRILLE PRINCIPALE : 3 Colonnes pour les offres principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mb-10">
          <PricingTier 
            title="Start" 
            price="34,90" 
            engagement="Sans engagement" 
            features={[
              "Réservation 24/7 illimitée",
              "Agenda intelligent",
              "Fichier clients complet",
              "Rappels automatiques Mail"
            ]} 
            onSelect={() => handleSelect('start')}
          />
          <PricingTier 
            title="Signature" 
            price="24,90" 
            recommended 
            engagement="Engagement 12 mois" 
            features={[
              "Toutes les fonctions Start",
              "Statistiques de performance",
              "Acomptes CB sécurisés",
              "Portfolio HD illimité",
              "Support VIP 7j/7"
            ]} 
            onSelect={() => handleSelect('signature')}
          />
          <PricingTier 
            title="Sérénité" 
            price="29,90" 
            engagement="Engagement 3 mois" 
            features={[
              "Toutes les fonctions Start",
              "Factures automatisées",
              "Historique photos poses",
              "Support prioritaire"
            ]} 
            onSelect={() => handleSelect('serenite')}
          />
        </div>

        {/* OFFRE SALON PRO : Format réduit / Banner horizontal */}
        <div className="max-w-4xl mx-auto">
           <div 
             onClick={() => handleSelect('salons')}
             className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md hover:border-pink-200 transition-all cursor-pointer group"
           >
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 group-hover:bg-[#eb5e9d] group-hover:text-white transition-colors">
                    <Building2 size={24} />
                 </div>
                 <div className="text-left">
                    <h3 className="text-lg font-bold text-gray-800">Salons & Franchises</h3>
                    <p className="text-sm text-gray-500">Une solution sur-mesure pour les grandes structures.</p>
                 </div>
              </div>
              <div className="flex items-center gap-4">
                 <span className="text-sm font-bold text-gray-400 uppercase tracking-wider">Sur Devis</span>
                 <button className="px-6 py-2.5 rounded-xl bg-gray-50 text-gray-600 font-bold text-sm group-hover:bg-[#eb5e9d] group-hover:text-white transition-colors">
                   Nous contacter
                 </button>
              </div>
           </div>
        </div>

        {onSeeDetails && (
          <div className="mt-12 text-center">
            <button onClick={onSeeDetails} className="inline-flex items-center gap-2 px-8 py-4 bg-white/60 backdrop-blur-md border border-pink-100 rounded-2xl text-[#eb5e9d] font-bold hover:bg-white hover:shadow-lg transition-all group text-sm">
              Comparer toutes les fonctionnalités <ChevronRight size={18} className="group-hover:translate-x-1" />
            </button>
          </div>
        )}
      </div>
      
      {selectedPlan && (
        <PricingModal 
          planType={selectedPlan} 
          onClose={() => setSelectedPlan(null)} 
          onConfirm={handleConfirm} 
        />
      )}
    </section>
  );
};

export const PricingPage: React.FC<{ onJoin: () => void }> = ({ onJoin }) => {
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
       <div className="container mx-auto max-w-7xl text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-serif-elegant italic mb-6">Nos <span className="text-[#eb5e9d]">Offres</span></h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto">Choisissez le plan qui correspond à votre ambition. Changez à tout moment.</p>
       </div>
       
       <PricingSection onSeeDetails={() => setShowTable(!showTable)} onJoin={onJoin} />

       {showTable && (
         <div className="container mx-auto max-w-5xl mt-12 animate-in fade-in slide-in-from-bottom-8">
            <GlassCard className="overflow-hidden p-0">
               <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="bg-pink-50/50 border-b border-pink-100">
                       <th className="p-6 text-gray-500 font-medium">Fonctionnalités</th>
                       <th className="p-6 text-center font-bold text-gray-800">Start</th>
                       <th className="p-6 text-center font-bold text-[#eb5e9d]">Signature</th>
                       <th className="p-6 text-center font-bold text-gray-800">Sérénité</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-gray-100">
                     {[
                       { name: "Nombre de RDV", start: "50/mois", sign: "Illimité", ser: "Illimité" },
                       { name: "Fiches Clients", start: "Illimité", sign: "Illimité", ser: "Illimité" },
                       { name: "Rappels SMS", start: false, sign: true, ser: true },
                       { name: "Acomptes en ligne", start: false, sign: true, ser: true },
                       { name: "Site de réservation", start: "Basique", sign: "Personnalisé", ser: "Premium" },
                       { name: "Statistiques", start: "Basiques", sign: "Avancées", ser: "Expert" },
                       { name: "Campagnes Marketing", start: false, sign: false, ser: true },
                     ].map((row, i) => (
                       <tr key={i} className="hover:bg-pink-50/30 transition-colors">
                         <td className="p-6 font-medium text-gray-700">{row.name}</td>
                         <td className="p-6 text-center text-gray-600">
                           {typeof row.start === 'boolean' ? (row.start ? <Check className="mx-auto text-green-500" size={18} /> : <Minus className="mx-auto text-gray-300" size={18} />) : row.start}
                         </td>
                         <td className="p-6 text-center text-gray-800 font-bold bg-pink-50/30">
                           {typeof row.sign === 'boolean' ? (row.sign ? <Check className="mx-auto text-[#eb5e9d]" size={18} /> : <Minus className="mx-auto text-gray-300" size={18} />) : row.sign}
                         </td>
                         <td className="p-6 text-center text-gray-600">
                           {typeof row.ser === 'boolean' ? (row.ser ? <Check className="mx-auto text-green-500" size={18} /> : <Minus className="mx-auto text-gray-300" size={18} />) : row.ser}
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </GlassCard>
         </div>
       )}
    </div>
  );
};

export const JoinUsPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', email: '', password: '',
    salonName: '', role: '', instagram: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center px-6 py-24 md:px-16 lg:px-24 xl:px-32 relative">
        <div className="max-w-md mx-auto w-full animate-in fade-in slide-in-from-left-8 duration-700">
           
           <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-serif-elegant italic mb-3 text-gray-900">
                Créez votre <span className="text-[#eb5e9d]">Espace.</span>
              </h1>
              <p className="text-gray-500 font-light text-lg">
                Rejoignez Blyss et transformez votre activité.
              </p>
           </div>

           {/* Simple Steps Indicator */}
           <div className="flex items-center gap-2 mb-8">
              <div className={`h-1.5 w-8 rounded-full transition-colors ${step >= 1 ? 'bg-[#eb5e9d]' : 'bg-gray-100'}`}></div>
              <div className={`h-1.5 w-8 rounded-full transition-colors ${step >= 2 ? 'bg-[#eb5e9d]' : 'bg-gray-100'}`}></div>
           </div>

           {step === 1 ? (
             <div className="space-y-5 animate-in fade-in duration-300">
                <div className="space-y-1.5">
                   <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Nom Complet</label>
                   <input 
                      type="text" 
                      name="name"
                      placeholder="Julie Nailartist"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 outline-none focus:border-[#eb5e9d] focus:bg-white focus:ring-4 focus:ring-pink-50 transition-all"
                   />
                </div>
                <div className="space-y-1.5">
                   <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</label>
                   <input 
                      type="email" 
                      name="email"
                      placeholder="julie@exemple.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 outline-none focus:border-[#eb5e9d] focus:bg-white focus:ring-4 focus:ring-pink-50 transition-all"
                   />
                </div>
                <div className="space-y-1.5">
                   <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Mot de passe</label>
                   <input 
                      type="password" 
                      name="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 outline-none focus:border-[#eb5e9d] focus:bg-white focus:ring-4 focus:ring-pink-50 transition-all"
                   />
                </div>

                <button 
                  onClick={() => setStep(2)}
                  className="w-full bg-black text-white py-4 rounded-xl font-bold mt-4 hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group"
                >
                  Continuer <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
             </div>
           ) : (
             <div className="space-y-5 animate-in fade-in duration-300">
                <button onClick={() => setStep(1)} className="text-sm text-gray-400 hover:text-gray-600 flex items-center gap-1 mb-2 font-medium">
                  <ArrowLeft size={14} /> Retour
                </button>

                <div className="space-y-1.5">
                   <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Nom du Salon</label>
                   <input 
                      type="text" 
                      name="salonName"
                      placeholder="Institut Blyss"
                      value={formData.salonName}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3.5 outline-none focus:border-[#eb5e9d] focus:bg-white focus:ring-4 focus:ring-pink-50 transition-all"
                   />
                </div>
                
                <div className="space-y-1.5">
                   <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Votre Niveau</label>
                   <div className="grid grid-cols-3 gap-3">
                      {['Débutante', 'Intermédiaire', 'Experte'].map((lvl) => (
                        <div 
                          key={lvl}
                          onClick={() => setFormData({...formData, role: lvl})}
                          className={`cursor-pointer border rounded-xl py-3 text-center text-xs font-bold transition-all ${formData.role === lvl ? 'border-[#eb5e9d] bg-pink-50 text-[#eb5e9d]' : 'border-gray-100 bg-white text-gray-500 hover:border-gray-200'}`}
                        >
                          {lvl}
                        </div>
                      ))}
                   </div>
                </div>

                <button 
                  className="w-full bg-[#eb5e9d] text-white py-4 rounded-xl font-bold mt-4 hover:bg-pink-600 transition-colors shadow-lg shadow-pink-200"
                >
                  Commencer maintenant
                </button>
                <p className="text-center text-[10px] text-gray-400 mt-2">
                  En cliquant, vous acceptez les CGU et la Politique de Confidentialité.
                </p>
             </div>
           )}
           
           <div className="mt-10 pt-6 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400 font-medium">
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#eb5e9d]" /> Sans engagement</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-[#eb5e9d]" /> Données sécurisées</span>
           </div>
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden md:block w-1/2 relative bg-gray-100">
         <img 
            src="https://images.unsplash.com/photo-1519017635425-63628ee3e56c?q=80&w=1974&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Workspace"
         />
         <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
         
         <div className="absolute bottom-16 left-12 right-12 text-white">
            <h2 className="text-4xl font-serif-elegant italic mb-4">"Tout est devenu plus simple."</h2>
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md p-0.5">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" className="w-full h-full rounded-full object-cover" alt="User" />
               </div>
               <div>
                  <p className="font-bold text-sm">Clara M.</p>
                  <p className="text-xs text-white/80">Prothésiste depuis 3 ans</p>
               </div>
            </div>
         </div>
      </div>

    </div>
  );
};

export const FloatingAIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Bonjour ! Je suis l'IA de Blyss. Besoin d'un conseil business ou d'une idée Nail Art ?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const response = await geminiService.getEventAdvice(userMsg);
      setMessages(prev => [...prev, { role: 'ai', text: response }]);
    } catch (e) {
      setMessages(prev => [...prev, { role: 'ai', text: "Désolé, je suis momentanément indisponible." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-8 right-8 z-[60] w-16 h-16 rounded-full shadow-2xl shadow-pink-300 flex items-center justify-center transition-all duration-300 hover:scale-110 ${isOpen ? 'bg-white text-gray-800 rotate-90' : 'bg-[#eb5e9d] text-white'}`}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={32} />}
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-28 right-8 z-[60] w-[90vw] md:w-[400px] h-[500px] bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/50 flex flex-col transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10 pointer-events-none'}`}>
         {/* Header */}
         <div className="p-5 border-b border-gray-100 flex items-center gap-3 bg-white/50 rounded-t-[2rem]">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#eb5e9d] to-pink-200 flex items-center justify-center text-white">
               <Sparkles size={20} />
            </div>
            <div>
               <h3 className="font-bold text-gray-800">Blyss Assistant</h3>
               <span className="text-[10px] text-green-500 font-bold uppercase flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> En ligne</span>
            </div>
         </div>

         {/* Messages */}
         <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-[#eb5e9d] text-white rounded-tr-sm' : 'bg-gray-100 text-gray-700 rounded-tl-sm'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-4 rounded-2xl rounded-tl-sm flex gap-1">
                   <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                   <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                   <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef}></div>
         </div>

         {/* Input */}
         <div className="p-4 bg-white rounded-b-[2rem] border-t border-gray-100">
           <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="relative">
             <input 
               type="text" 
               value={input}
               onChange={(e) => setInput(e.target.value)}
               placeholder="Posez votre question..." 
               className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:border-[#eb5e9d] transition-colors"
             />
             <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#eb5e9d] text-white rounded-lg hover:bg-pink-600 transition-colors disabled:opacity-50">
               <Send size={16} />
             </button>
           </form>
         </div>
      </div>
    </>
  );
};

export const Footer: React.FC<{ setCurrentPage: (p: PageView) => void }> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-white pt-20 pb-10 px-6 border-t border-pink-50">
       <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
             <div className="col-span-1 md:col-span-1">
                <BlyssLogo onClick={() => setCurrentPage('home')} />
                <p className="mt-6 text-gray-500 text-sm leading-relaxed">
                  La première suite logicielle dédiée à l'élévation des prothésistes ongulaires indépendantes.
                </p>
             </div>
             <div>
               <h4 className="font-bold text-gray-900 mb-6">Produit</h4>
               <ul className="space-y-4 text-gray-500 text-sm">
                 <li className="hover:text-[#eb5e9d] cursor-pointer">Fonctionnalités</li>
                 <li className="hover:text-[#eb5e9d] cursor-pointer">Tarifs</li>
                 <li className="hover:text-[#eb5e9d] cursor-pointer">Témoignages</li>
                 <li className="hover:text-[#eb5e9d] cursor-pointer">Roadmap</li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold text-gray-900 mb-6">Ressources</h4>
               <ul className="space-y-4 text-gray-500 text-sm">
                 <li className="hover:text-[#eb5e9d] cursor-pointer">Blog Academy</li>
                 <li className="hover:text-[#eb5e9d] cursor-pointer">Centre d'aide</li>
                 <li className="hover:text-[#eb5e9d] cursor-pointer">Communauté</li>
                 <li className="hover:text-[#eb5e9d] cursor-pointer">Événements</li>
               </ul>
             </div>
             <div>
               <h4 className="font-bold text-gray-900 mb-6">Légal</h4>
               <ul className="space-y-4 text-gray-500 text-sm">
                 <li className="hover:text-[#eb5e9d] cursor-pointer">Mentions Légales</li>
                 <li className="hover:text-[#eb5e9d] cursor-pointer">Confidentialité</li>
                 <li className="hover:text-[#eb5e9d] cursor-pointer">CGV</li>
               </ul>
             </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 gap-4">
             <span className="text-gray-400 text-xs">© 2024 Blyss Inc. All rights reserved.</span>
             <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#eb5e9d] hover:text-white transition-colors cursor-pointer"><Instagram size={16} /></div>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#eb5e9d] hover:text-white transition-colors cursor-pointer"><Twitter size={16} /></div>
                <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-[#eb5e9d] hover:text-white transition-colors cursor-pointer"><Linkedin size={16} /></div>
             </div>
          </div>
       </div>
    </footer>
  );
};
