import React, { useState } from 'react';
import { TRANSLATIONS } from '../constants';
import { Language, ChatMessage } from '../types';
import { Mic, Phone, Video, MoreVertical, ArrowLeft } from 'lucide-react';

interface ChatDemoProps {
  lang: Language;
}

export const ChatDemo: React.FC<ChatDemoProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'expense' | 'income' | 'future' | 'report'>('expense');
  const t = TRANSLATIONS[lang].chat;
  
  // Default to simplified data if empty (for ES/EN in this demo)
  const messages: ChatMessage[] = t.demoData[activeTab].length > 0 
    ? t.demoData[activeTab] 
    : t.demoData['expense']; 

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 py-16 px-4 max-w-7xl mx-auto">
      
      {/* Controls */}
      <div className="flex-1 w-full max-w-lg space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
          {t.title}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {(['expense', 'income', 'future', 'report'] as const).map((tab, idx) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`p-4 rounded-xl text-left border transition-all duration-300 ${
                activeTab === tab 
                  ? 'border-brand-500 bg-brand-50 shadow-md ring-1 ring-brand-500' 
                  : 'border-slate-200 bg-white hover:border-brand-200 hover:bg-slate-50'
              }`}
            >
              <span className="block text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">
                {idx === 0 ? '📝' : idx === 1 ? '💰' : idx === 2 ? '🗓️' : '📊'}
              </span>
              <span className={`text-lg font-medium ${activeTab === tab ? 'text-brand-700' : 'text-slate-700'}`}>
                {t.tabs[idx]}
              </span>
            </button>
          ))}
        </div>
        <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200">
          <h4 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
            💡 Dica da Fina
          </h4>
          <p className="text-slate-600 text-sm">
            {activeTab === 'expense' && "A Fina sabe a diferença entre 'Gastei' (Agora) e 'Tenho que pagar' (Futuro)."}
            {activeTab === 'income' && "Separe receitas pessoais das empresariais dizendo 'na empresa'."}
            {activeTab === 'future' && "Agende IPTU ou faça assinaturas recorrentes como 'Netflix mensal'."}
            {activeTab === 'report' && "Peça relatórios específicos como 'Quanto gastei com Uber este mês?'"}
          </p>
        </div>
      </div>

      {/* Phone Mockup */}
      <div className="flex-1 w-full flex justify-center">
        <div className="relative w-[320px] h-[640px] bg-slate-900 rounded-[3rem] shadow-2xl border-8 border-slate-900 overflow-hidden ring-4 ring-slate-900/10 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
          {/* Notch */}
          <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 z-20 flex justify-center">
            <div className="w-32 h-4 bg-black rounded-b-xl"></div>
          </div>

          {/* WhatsApp UI Header */}
          <div className="bg-[#075E54] text-white p-3 pt-8 flex items-center justify-between z-10 relative shadow-md">
            <div className="flex items-center gap-2">
              <ArrowLeft className="w-5 h-5" />
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center overflow-hidden">
                 <img src="https://api.dicebear.com/7.x/bottts/svg?seed=Fina&backgroundColor=transparent" alt="Fina Agent" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Fina (FinanzApp)</h3>
                <p className="text-[10px] text-brand-100">online</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Video className="w-5 h-5 opacity-80" />
              <Phone className="w-5 h-5 opacity-80" />
              <MoreVertical className="w-5 h-5 opacity-80" />
            </div>
          </div>

          {/* Chat Background */}
          <div className="bg-[#e5ddd5] h-full overflow-y-auto p-4 pb-20 scrollbar-hide flex flex-col gap-3 relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")' }}></div>
            
            <div className="bg-[#dcf8c6] text-xs text-slate-600 self-center px-2 py-1 rounded shadow-sm opacity-80 mb-2 relative z-10">
              Hoje
            </div>

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] relative z-10 p-2 px-3 rounded-lg shadow-sm text-sm ${
                  msg.sender === 'user' 
                    ? 'bg-[#dcf8c6] self-end rounded-tr-none text-slate-800' 
                    : 'bg-white self-start rounded-tl-none text-slate-800'
                }`}
              >
                <p className="whitespace-pre-line leading-snug">{msg.text}</p>
                <span className="text-[10px] text-slate-400 block text-right mt-1 flex justify-end gap-1 items-center">
                  {msg.time}
                  {msg.sender === 'user' && <span className="text-blue-400">✓✓</span>}
                </span>
              </div>
            ))}
          </div>

          {/* Input Bar */}
          <div className="absolute bottom-0 w-full bg-[#f0f0f0] px-2 py-2 flex items-center gap-2 border-t border-slate-200">
            <div className="bg-white flex-1 rounded-full px-4 py-2 text-sm text-slate-400 shadow-sm flex items-center justify-between">
              <span>Mensagem</span>
            </div>
            <div className="w-10 h-10 bg-[#00897b] rounded-full flex items-center justify-center shadow-md text-white">
              <Mic className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};