import React, { useState } from 'react';
import { TRANSLATIONS } from './constants';
import { Language } from './types';
import { Button } from './components/Button';
import { ChatDemo } from './components/ChatDemo';
import { 
  Menu, X, Globe, Check, Star, Shield, ArrowRight 
} from 'lucide-react';

function App() {
  const [lang, setLang] = useState<Language>('pt');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnnual, setIsAnnual] = useState(true);

  const t = TRANSLATIONS[lang];

  // Helper to change language
  const toggleLang = (l: Language) => {
    setLang(l);
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // SVG Logo Component
  const Logo = () => (
    <div className="flex items-center gap-2 select-none">
      <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" stroke="#1f2937" strokeWidth="10"/>
        <circle cx="50" cy="50" r="18" fill="#16a34a"/>
      </svg>
      <span className="text-2xl font-bold text-slate-900 tracking-tight">
        Finanz<span className="text-[#16a34a]">App</span>
      </span>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#" className="flex items-center">
              <Logo />
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('features')} className="text-slate-600 hover:text-brand-600 font-medium transition-colors">{t.nav.features}</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-slate-600 hover:text-brand-600 font-medium transition-colors">{t.nav.howItWorks}</button>
              <button onClick={() => scrollToSection('pricing')} className="text-slate-600 hover:text-brand-600 font-medium transition-colors">{t.nav.pricing}</button>
              
              <div className="flex items-center gap-4 border-l pl-6 border-slate-200">
                <div className="relative group py-2">
                  <button className="flex items-center gap-1 text-slate-500 hover:text-slate-900">
                    <Globe className="w-4 h-4" />
                    <span className="uppercase text-sm font-semibold">{lang}</span>
                  </button>
                  <div className="absolute right-0 top-full mt-0 w-32 bg-white rounded-lg shadow-xl border border-slate-100 hidden group-hover:block p-2">
                    <button onClick={() => toggleLang('pt')} className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50 rounded font-medium">Português</button>
                    <button onClick={() => toggleLang('es')} className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50 rounded font-medium">Español</button>
                    <button onClick={() => toggleLang('en')} className="w-full text-left px-3 py-2 text-sm hover:bg-slate-50 rounded font-medium">English</button>
                  </div>
                </div>
                
                <a 
                  href="https://app.finanzapp.lat/" 
                  className="text-slate-600 hover:text-slate-900 font-semibold text-sm px-2"
                >
                  {t.nav.login}
                </a>
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={() => scrollToSection('pricing')}
                >
                  {t.nav.cta}
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full pb-6 shadow-lg animate-in slide-in-from-top-2">
            <div className="px-4 pt-4 pb-2 space-y-3">
              <button onClick={() => {scrollToSection('features'); setIsMenuOpen(false)}} className="block w-full text-left px-3 py-2 text-slate-700 font-medium">{t.nav.features}</button>
              <button onClick={() => {scrollToSection('how-it-works'); setIsMenuOpen(false)}} className="block w-full text-left px-3 py-2 text-slate-700 font-medium">{t.nav.howItWorks}</button>
              <button onClick={() => {scrollToSection('pricing'); setIsMenuOpen(false)}} className="block w-full text-left px-3 py-2 text-slate-700 font-medium">{t.nav.pricing}</button>
              <a onClick={() => setIsMenuOpen(false)} href="https://app.finanzapp.lat/" className="block px-3 py-2 text-slate-700 font-medium">{t.nav.login}</a>
              
              <div className="flex gap-4 px-3 pt-4 border-t border-slate-100">
                <button onClick={() => toggleLang('pt')} className={`text-sm font-bold ${lang === 'pt' ? 'text-brand-600' : 'text-slate-400'}`}>PT</button>
                <button onClick={() => toggleLang('es')} className={`text-sm font-bold ${lang === 'es' ? 'text-brand-600' : 'text-slate-400'}`}>ES</button>
                <button onClick={() => toggleLang('en')} className={`text-sm font-bold ${lang === 'en' ? 'text-brand-600' : 'text-slate-400'}`}>EN</button>
              </div>
              <div className="px-3 pt-4">
                <Button className="w-full" onClick={() => {scrollToSection('pricing'); setIsMenuOpen(false)}}>
                  {t.nav.cta}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-48 lg:pb-32 px-4 relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-200/40 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-blue-200/40 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-semibold border border-brand-100 mb-8 shadow-sm">
            <Star className="w-4 h-4 fill-brand-600 text-brand-600" />
            {t.hero.badge}
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto gap-2 group" onClick={() => scrollToSection('pricing')}>
              <div className="bg-white/20 p-1 rounded-full">
                <Check className="w-4 h-4" />
              </div>
              {t.hero.ctaPrimary}
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2" onClick={() => scrollToSection('pricing')}>
              {t.hero.ctaSecondary} <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
          <p className="mt-6 text-sm text-slate-500 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4 text-green-600" />
            {t.hero.disclaimer}
          </p>
        </div>
      </section>

      {/* Demo Section (Interactive Chat) */}
      <section className="bg-white border-y border-slate-100">
        <ChatDemo lang={lang} />
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.features.title}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">{t.features.subtitle}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.items.map((item: any, idx: number) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-200 transition-all duration-300 group">
                <div className="w-14 h-14 bg-brand-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                   {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t.howItWorks.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-gradient-to-r from-brand-200 via-brand-400 to-brand-200 z-0"></div>

            {t.howItWorks.steps.map((step: any, idx: number) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-brand-600 rounded-full flex items-center justify-center shadow-lg shadow-brand-500/30 mb-6 border-4 border-white text-white">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide / Tips Section (New) */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.guide.title}</h2>
            <p className="text-slate-400 text-lg">{t.guide.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.guide.sections.map((section: any, idx: number) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-2xl p-6 hover:border-brand-500/50 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-400">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold">{section.title}</h3>
                </div>
                <div className="mb-4 text-slate-300 text-sm whitespace-pre-line leading-relaxed">
                  {section.content}
                </div>
                <div className="space-y-2">
                  {section.examples.map((ex: string, i: number) => (
                    <div key={i} className="bg-slate-900/50 px-3 py-2 rounded border-l-2 border-brand-500 text-xs font-mono text-slate-400">
                      {ex}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{t.pricing.title}</h2>
            <p className="text-slate-500 mb-8">{t.pricing.subtitle}</p>
            
            {/* Toggle Switch */}
            <div className="flex items-center justify-center gap-4 bg-white p-2 rounded-full shadow-sm inline-flex border border-slate-100">
              <span className={`text-sm font-semibold px-4 cursor-pointer ${!isAnnual ? 'text-brand-600' : 'text-slate-500'}`} onClick={() => setIsAnnual(false)}>
                {t.pricing.monthly}
              </span>
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-14 h-7 bg-slate-200 rounded-full transition-colors duration-300 focus:outline-none"
              >
                <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? 'translate-x-7 bg-brand-600' : ''}`}></div>
              </button>
              <span className={`text-sm font-semibold px-4 cursor-pointer flex items-center gap-2 ${isAnnual ? 'text-brand-600' : 'text-slate-500'}`} onClick={() => setIsAnnual(true)}>
                {t.pricing.annual}
                <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">
                  -10%
                </span>
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {t.pricing.plans.map((plan: any, idx: number) => {
              // Calculate price based on toggle
              const basePrice = plan.price;
              const currency = t.pricing.currencySymbol;

              // Annual Calculation: Price * 12 * 0.90
              const annualTotal = (basePrice * 12 * 0.90);
              const monthlyEquivalentIfAnnual = (annualTotal / 12).toFixed(2);
              
              const displayPrice = isAnnual 
                ? monthlyEquivalentIfAnnual
                : basePrice.toFixed(2);
              
              return (
                <div key={idx} className={`relative p-8 rounded-3xl border-2 transition-all duration-300 flex flex-col ${
                  plan.highlight 
                    ? 'border-brand-500 bg-white shadow-2xl scale-100 md:scale-105 z-10' 
                    : 'border-slate-200 bg-white hover:border-brand-200'
                }`}>
                  {plan.highlight && (
                    <div className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-xl uppercase tracking-wider shadow-sm">
                      Mais Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-extrabold text-slate-900 tracking-tight">{currency}{displayPrice}</span>
                    <span className="text-slate-500 font-medium">/mês</span>
                  </div>
                  
                  <div className="h-6 mb-6">
                  {isAnnual && (
                    <p className="text-xs text-brand-700 font-semibold bg-brand-50 inline-block px-2 py-1 rounded">
                      Cobrado {currency}{annualTotal.toFixed(2)} anualmente
                    </p>
                  )}
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feat: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-start gap-3 text-slate-600 text-sm">
                        <div className="mt-0.5 w-5 h-5 rounded-full bg-brand-100 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-brand-600" />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.highlight ? 'primary' : 'outline'} 
                    className="w-full"
                    onClick={() => window.location.href = 'https://app.finanzapp.lat/cadastro'}
                  >
                    {plan.highlight ? t.nav.cta : 'Começar Agora'}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">{t.faq.title}</h2>
          <div className="space-y-6">
            {t.faq.items.map((item: any, idx: number) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-slate-100">
                <h4 className="font-bold text-lg text-slate-900 mb-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-brand-200 flex items-center justify-center text-brand-800 text-sm">?</div>
                  {item.q}
                </h4>
                <p className="text-slate-600 ml-8">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               {/* Footer Logo - White version */}
               <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="10"/>
                <circle cx="50" cy="50" r="18" fill="white"/>
              </svg>
              <span className="text-xl font-bold text-white tracking-tight">FinanzApp</span>
            </div>
            <p className="text-sm max-w-sm leading-relaxed">
              Sua assistente financeira Pessoal e PJ. Controle gastos, investimentos e cartões com a simplicidade de uma conversa no WhatsApp.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Produto</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => scrollToSection('features')} className="hover:text-brand-400 transition-colors">Funcionalidades</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="hover:text-brand-400 transition-colors">Planos</button></li>
              <li><a href="https://app.finanzapp.lat/" className="hover:text-brand-400 transition-colors">Login</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Privacidade</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} FinanzApp. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;