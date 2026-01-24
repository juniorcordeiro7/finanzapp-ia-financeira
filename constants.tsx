import React from 'react';
import { Language } from './types';
import {
  Briefcase,
  CreditCard,
  TrendingUp,
  Users,
  Smartphone,
  ShieldCheck,
  Zap,
  MessageCircle,
  CalendarClock,
  Building2,
  Wallet
} from 'lucide-react';

export const TRANSLATIONS: Record<Language, any> = {
  pt: {
    nav: {
      features: "Funcionalidades",
      howItWorks: "Como Funciona",
      pricing: "Planos",
      login: "Entrar",
      cta: "Começar Agora"
    },
    hero: {
      badge: "🚀 Sua Agente Financeira no WhatsApp",
      title: "Controle suas finanças conversando com a Fina",
      subtitle: "A inteligência artificial que organiza seu dinheiro Pessoal e Empresarial (PJ) diretamente no WhatsApp. Sem planilhas, apenas conversa.",
      ctaPrimary: "Testar Grátis Agora",
      ctaSecondary: "Ver Planos e Preços",
      disclaimer: "Não pedimos sua senha do banco. 100% Seguro."
    },
    features: {
      title: "Tudo o que você precisa em um só lugar",
      subtitle: "Do controle de gastos diários aos investimentos complexos.",
      items: [
        {
          title: "Pessoal & PJ Inteligente",
          desc: "O padrão é sua conta Pessoal. Para lançar na empresa, basta dizer 'na empresa', 'PJ' ou 'negócio'.",
          icon: <Briefcase className="w-6 h-6 text-brand-600" />
        },
        {
          title: "Investimentos & Cotações",
          desc: "Cotações automáticas de Ações, FIIs e Cripto. Acompanhe a evolução do seu patrimônio em tempo real.",
          icon: <TrendingUp className="w-6 h-6 text-brand-600" />
        },
        {
          title: "Gestão de Cartões",
          desc: "Controle limites e faturas. A Fina sabe a diferença entre 'Gastei' (Débito) e 'Comprei no Crédito'.",
          icon: <CreditCard className="w-6 h-6 text-brand-600" />
        },
        {
          title: "Plano Casal & Sócios",
          desc: "Compartilhamento de conta para casais ou gestão com funcionários e sócios.",
          icon: <Users className="w-6 h-6 text-brand-600" />
        }
      ]
    },
    guide: {
      title: "Entenda o Poder da Fina",
      subtitle: "Basta conversar naturalmente. Veja como é fácil:",
      sections: [
        {
          title: "Pessoal vs PJ",
          icon: <Building2 className="w-5 h-5" />,
          content: "Quando você não especificar, vai para a conta **Pessoal**.\nPara **PJ/Empresa**, use palavras como 'empresa', 'PJ', 'negócio' ou 'empresarial'.",
          examples: [
            '"Gastei 50 no almoço" (Pessoal)',
            '"Recebi 1200 de consultoria na conta empresarial" (PJ)'
          ]
        },
        {
          title: "Gastei vs Tenho que Pagar",
          icon: <CalendarClock className="w-5 h-5" />,
          content: "**Gastei**: Transação que já aconteceu (Débito/Dinheiro).\n**Tenho que pagar**: Agendamento futuro.\n**Paguei**: Confirmar algo agendado.",
          examples: [
            '"Gastei 230 no mercado"',
            '"Tenho que pagar 1500 de aluguel dia 10"',
            '"Paguei o aluguel hoje"'
          ]
        },
        {
          title: "Débito vs Crédito",
          icon: <CreditCard className="w-5 h-5" />,
          content: "**Débito**: Desconta agora do saldo.\n**Crédito**: Fica em aberto na fatura.\n**Parcelado**: A Fina entende '12x', 'parcelado', etc.",
          examples: [
            '"Comprei 85 de remédio no débito"',
            '"Comprei notebook de 3000 em 12 parcelas no crédito Nubank"'
          ]
        },
        {
          title: "Saldo e Relatórios",
          icon: <Wallet className="w-5 h-5" />,
          content: "Pergunte sobre seus gastos, receitas e previsões a qualquer momento.",
          examples: [
            '"Qual meu saldo?"',
            '"Quanto gastei em alimentação este mês?"',
            '"Extrato do mês da empresa"'
          ]
        }
      ]
    },
    howItWorks: {
      title: "Como Funciona",
      steps: [
        {
          title: "1. Salve o Contato",
          desc: "Adicione o número da Fina na sua agenda do celular.",
          icon: <Smartphone className="w-6 h-6 text-white" />
        },
        {
          title: "2. Inicie a Conversa",
          desc: "Envie um 'Oi' no WhatsApp para ativar sua conta.",
          icon: <Zap className="w-6 h-6 text-white" />
        },
        {
          title: "3. Converse Naturalmente",
          desc: "Fale como se fosse um amigo: 'Gastei 50 no almoço'.",
          icon: <MessageCircle className="w-6 h-6 text-white" />
        }
      ]
    },
    chat: {
      title: "Experimente a Fina",
      tabs: ["Despesas", "Receitas", "Futuros", "Relatórios"],
      tipTitle: "💡 Dica da Fina",
      tips: {
        expense: "A Fina sabe a diferença entre 'Gastei' (Agora) e 'Tenho que pagar' (Futuro).",
        income: "Separe receitas pessoais das empresariais dizendo 'na empresa'.",
        future: "Agende IPTU ou faça assinaturas recorrentes como 'Netflix mensal'.",
        report: "Peça relatórios específicos como 'Quanto gastei com Uber este mês?'"
      },
      demoData: {
        expense: [
          { sender: 'user', text: 'Gastei 230 no mercado', time: '10:42' },
          { sender: 'agent', text: '✅ Anotado! R$ 230,00 em Mercado (Alimentação) na conta Pessoal.', time: '10:42' },
          { sender: 'user', text: 'Comprei material de escritório 120 na empresa', time: '14:15' },
          { sender: 'agent', text: '🏢 Feito! R$ 120,00 lançados na conta PJ em Material de Escritório.', time: '14:15' },
          { sender: 'user', text: 'Comprei notebook de 3000 em 12 parcelas no crédito Nubank', time: '14:20' },
          { sender: 'agent', text: '💳 Compra parcelada registrada no Nubank (12x R$ 250,00).', time: '14:20' }
        ],
        income: [
          { sender: 'user', text: 'Recebi 3500 de salário', time: '09:00' },
          { sender: 'agent', text: '💰 Oba! Receita de R$ 3.500,00 registrada na conta Pessoal.', time: '09:00' },
          { sender: 'user', text: 'Entrou 800 de freelance no perfil empresarial', time: '11:20' },
          { sender: 'agent', text: '🏢 Receita PJ de R$ 800,00 registrada!', time: '11:20' }
        ],
        future: [
          { sender: 'user', text: 'Tenho IPTU de 70 reais vence dia 10/01/2026 e são 3 parcelas', time: '19:00' },
          { sender: 'agent', text: '🗓️ Agendado! 3 parcelas de R$ 70,00 para IPTU.\n1ª vence em 10/01/2026.', time: '19:00' },
          { sender: 'user', text: 'Tenho Netflix mensal recorrente de 29,90', time: '19:05' },
          { sender: 'agent', text: '🔄 Assinatura Netflix de R$ 29,90 configurada como recorrente mensal.', time: '19:05' }
        ],
        report: [
          { sender: 'user', text: 'Qual a fatura atual do cartão Nubank?', time: '08:00' },
          { sender: 'agent', text: '💳 Fatura Atual Nubank: R$ 1.250,00\nFechamento: 05/12\nVencimento: 12/12', time: '08:00' },
          { sender: 'user', text: 'Resumo financeiro da empresa', time: '18:00' },
          { sender: 'agent', text: '📊 *Resumo PJ - Mês Atual*\n\nEntradas: R$ 12.500,00\nSaídas: R$ 4.200,00\nSaldo: R$ 8.300,00', time: '18:00' }
        ]
      }
    },
    pricing: {
      title: "Planos acessíveis em Dólares",
      subtitle: "Comece a organizar sua vida financeira hoje.",
      monthly: "Mensal",
      annual: "Anual",
      currencySymbol: "$",
      perMonth: "/mês",
      chargedAnnually: "Cobrado",
      annually: "anualmente",
      mostPopular: "Mais Popular",
      startNow: "Começar Agora",
      plans: [
        {
          name: "Starter",
          description: "Pra quem quer organizar a vida financeira sem dor de cabeça.",
          price: 5.99,
          annualPrice: 61.10,
          discount: 15,
          colorScheme: "white",
          monthlyLink: "https://payfast.greenn.com.br/155022",
          annualLink: "https://payfast.greenn.com.br/155015",
          features: ["Sistema web com gráficos interativos", "Controle de gastos via WhatsApp por texto, áudio e imagem", "Transações ilimitadas via WhatsApp", "Categorias e subcategorias personalizadas", "Gestão individual e personalização de perfil", "Lembretes de contas a pagar e receber pelo WhatsApp", "Metas financeiras", "Controle de cartão de crédito", "Gestão de investimentos", "Pagamentos programados", "Relatórios completos", "Exportação de dados", "Suporte via WhatsApp"]
        },
        {
          name: "Plus",
          description: "Pra quem divide contas e decisões financeiras.",
          price: 7.99,
          annualPrice: 81.50,
          discount: 15,
          colorScheme: "green",
          highlight: true,
          monthlyLink: "https://payfast.greenn.com.br/155016",
          annualLink: "https://payfast.greenn.com.br/155018",
          features: ["Tudo do plano Start", "Gestão compartilhada", "Cada membro usa seu próprio número de WhatsApp", "Alertas individuais de contas a pagar e receber", "Visualização centralizada, sempre atualizada e visível para todos", "1 usuário extra incluso sem custo adicional", "Metas, cartões, investimentos, pagamentos programados e relatórios para todos os usuários", "Exportação de dados", "Ideal para casais, famílias ou sócios"]
        },
        {
          name: "Pro",
          description: "Pra quem empreende e precisa separar o pessoal do profissional.",
          price: 9.99,
          annualPrice: 107.90,
          discount: 10,
          colorScheme: "blue",
          monthlyLink: "https://payfast.greenn.com.br/155019",
          annualLink: "https://payfast.greenn.com.br/155020",
          features: ["Tudo dos planos anteriores", "Conta PJ", "Gestão financeira para microempreendedores", "Metas financeiras pessoais e do negócio", "Controle de cartões e investimentos da empresa", "Pagamentos programados para despesas fixas", "Relatórios completos para tomada de decisão", "Suporte humanizado pelo WhatsApp", "Suporte por ligação", "Exportação de dados", "Lembretes de contas a pagar e receber pelo WhatsApp"]
        }
      ]
    },
    faq: {
      title: "Perguntas Frequentes",
      items: [
        { q: "Como separo pessoal de PJ?", a: "O padrão é Pessoal. Para lançar na empresa, use palavras como 'empresa', 'PJ', 'negócio' ou 'empresarial' na frase." },
        { q: "Funciona com cartão de crédito?", a: "Sim! A Fina entende parcelamentos e compras a crédito. Basta dizer 'em 12x no cartão Nubank'." },
        { q: "Posso cancelar quando quiser?", a: "Sim, sem fidelidade no plano mensal. Cancele a qualquer momento direto pelo app." },
        { q: "É seguro?", a: "Sim. Usamos criptografia de ponta a ponta e não solicitamos sua senha bancária para realizar transações, apenas registramos o que você nos conta." }
      ]
    },
    footer: {
      description: "Sua assistente financeira Pessoal e PJ. Controle gastos, investimentos e cartões com a simplicidade de uma conversa no WhatsApp.",
      product: "Produto",
      features: "Funcionalidades",
      plans: "Planos",
      login: "Login",
      legal: "Legal",
      terms: "Termos de Uso",
      privacy: "Privacidade",
      contact: "Contato",
      contactInfo: "Contato",
      address: "Av. Bernardino Caballero, San Alberto, Alto Paraná, Paraguay",
      phone: "+595982690952",
      email: "contacto@finanzapp.lat",
      instagram: "@finanzapp.latam",
      rights: "Todos os direitos reservados."
    }
  },
  es: {
    nav: {
      features: "Funciones",
      howItWorks: "Cómo funciona",
      pricing: "Precios",
      login: "Entrar",
      cta: "Empezar Ahora"
    },
    hero: {
      badge: "🚀 Tu Agente Financiero en WhatsApp",
      title: "Controla tus finanzas chateando con Fina",
      subtitle: "La IA que organiza tu dinero personal y empresarial (PJ) directamente en WhatsApp. Sin hojas de cálculo.",
      ctaPrimary: "Prueba Gratis Ahora",
      ctaSecondary: "Ver Planes",
      disclaimer: "No pedimos contraseña bancaria. 100% Seguro."
    },
    features: {
      title: "Todo lo que necesitas en un solo lugar",
      subtitle: "Desde el control de gastos diarios hasta inversiones complejas.",
      items: [
        { title: "Personal y Negocio", desc: "El valor predeterminado es Personal. Para empresa, di 'en la empresa' o 'negocio'.", icon: <Briefcase className="w-6 h-6 text-brand-600" /> },
        { title: "Inversiones", desc: "Cotizaciones automáticas de Acciones y Cripto en tiempo real.", icon: <TrendingUp className="w-6 h-6 text-brand-600" /> },
        { title: "Tarjetas", desc: "Control de facturas, límites y cuotas.", icon: <CreditCard className="w-6 h-6 text-brand-600" /> },
        { title: "Plan Compartido", desc: "Ideal para parejas o socios.", icon: <Users className="w-6 h-6 text-brand-600" /> }
      ]
    },
    guide: {
      title: "Entiende el Poder de Fina",
      subtitle: "Solo habla naturalmente. Mira qué fácil:",
      sections: [
        {
          title: "Personal vs Negocio",
          icon: <Building2 className="w-5 h-5" />,
          content: "Si no especificas, va a la cuenta **Personal**.\nPara **Negocio**, usa palabras como 'empresa' o 'negocio'.",
          examples: ['"Gasté 50 en el almuerzo" (Personal)', '"Recibí 1200 de consultoría en la empresa" (PJ)']
        },
        {
          title: "Gasté vs Tengo que Pagar",
          icon: <CalendarClock className="w-5 h-5" />,
          content: "**Gasté**: Transacción inmediata.\n**Tengo que pagar**: Futuro.\n**Pagué**: Confirmar agendamiento.",
          examples: ['"Gasté 230 en el mercado"', '"Tengo que pagar 1500 de alquiler el día 10"']
        },
        {
          title: "Débito vs Crédito",
          icon: <CreditCard className="w-5 h-5" />,
          content: "**Débito**: Descuenta ahora.\n**Crédito**: A la factura.\n**Cuotas**: Fina entiende '12 cuotas', etc.",
          examples: ['"Compré 85 en farmacia débito"', '"Notebook de 3000 en 12 cuotas crédito"']
        },
        {
          title: "Saldo y Reportes",
          icon: <Wallet className="w-5 h-5" />,
          content: "Pregunta sobre tus gastos e ingresos en cualquier momento.",
          examples: ['"¿Cuál es mi saldo?"', '"Resumen del mes de la empresa"']
        }
      ]
    },
    howItWorks: {
      title: "Cómo Funciona",
      steps: [
        { title: "1. Guarda el Contacto", desc: "Añade el número de Fina a tu agenda.", icon: <Smartphone className="w-6 h-6 text-white" /> },
        { title: "2. Inicia la Conversación", desc: "Envía un 'Hola' en WhatsApp.", icon: <Zap className="w-6 h-6 text-white" /> },
        { title: "3. Habla Naturalmente", desc: "Habla como con un amigo: 'Gasté 50 en el almuerzo'.", icon: <MessageCircle className="w-6 h-6 text-white" /> }
      ]
    },
    chat: {
      title: "Prueba Fina ahora",
      tabs: ["Gastos", "Ingresos", "Futuros", "Reportes"],
      tipTitle: "💡 Tip de Fina",
      tips: {
        expense: "Fina sabe la diferencia entre 'Gasté' (Ahora) y 'Tengo que pagar' (Futuro).",
        income: "Separa ingresos personales de los empresariales diciendo 'en la empresa'.",
        future: "Agenda impuestos o haz suscripciones recurrentes como 'Netflix mensual'.",
        report: "Pide reportes específicos como '¿Cuánto gasté en Uber este mes?'"
      },
      demoData: {
        expense: [
          { sender: 'user', text: 'Gasté 230 en el mercado', time: '10:42' },
          { sender: 'agent', text: '✅ ¡Anotado! $ 230.00 en Mercado (Categoría: Alimentación) en cuenta Personal.', time: '10:42' },
          { sender: 'user', text: 'Compré material de oficina 120 en la empresa', time: '14:15' },
          { sender: 'agent', text: '🏢 ¡Listo! $ 120.00 registrados en la cuenta Negocio.', time: '14:15' }
        ],
        income: [
          { sender: 'user', text: 'Recibí 3500 de salario', time: '09:00' },
          { sender: 'agent', text: '💰 ¡Genial! Ingreso de $ 3,500.00 registrado.', time: '09:00' }
        ],
        future: [], report: []
      }
    },
    pricing: {
      title: "Planes accesibles en Dólares",
      subtitle: "Organiza tu vida financiera hoy.",
      monthly: "Mensual",
      annual: "Anual",
      currencySymbol: "$",
      perMonth: "/mes",
      chargedAnnually: "Cobrado",
      annually: "anualmente",
      mostPopular: "Más Popular",
      startNow: "Empezar Ahora",
      plans: [
        {
          name: "Starter",
          description: "Para quien quiere organizar su vida financiera sin complicaciones.",
          price: 5.99,
          annualPrice: 61.10,
          discount: 15,
          colorScheme: "white",
          monthlyLink: "https://payfast.greenn.com.br/155022",
          annualLink: "https://payfast.greenn.com.br/155015",
          features: ["Sistema web con gráficos interactivos", "Control de gastos vía WhatsApp por texto, audio e imagen", "Transacciones ilimitadas vía WhatsApp", "Categorías y subcategorías personalizadas", "Gestión individual y personalización de perfil", "Recordatorios de cuentas a pagar y recibir por WhatsApp", "Metas financieras", "Control de tarjeta de crédito", "Gestión de inversiones", "Pagos programados", "Informes completos", "Exportación de datos", "Soporte vía WhatsApp"]
        },
        {
          name: "Plus",
          description: "Para quien comparte cuentas y decisiones financieras.",
          price: 7.99,
          annualPrice: 81.50,
          discount: 15,
          colorScheme: "green",
          highlight: true,
          monthlyLink: "https://payfast.greenn.com.br/155016",
          annualLink: "https://payfast.greenn.com.br/155018",
          features: ["Todo del plan Start", "Gestión compartida", "Cada miembro usa su propio número de WhatsApp", "Alertas individuales de cuentas a pagar y recibir", "Visualización centralizada, siempre actualizada y visible para todos", "1 usuario extra incluido sin costo adicional", "Metas, tarjetas, inversiones, pagos programados e informes para todos los usuarios", "Exportación de datos", "Ideal para parejas, familias o socios"]
        },
        {
          name: "Pro",
          description: "Para quien emprende y necesita separar lo personal de lo profesional.",
          price: 9.99,
          annualPrice: 107.90,
          discount: 10,
          colorScheme: "blue",
          monthlyLink: "https://payfast.greenn.com.br/155019",
          annualLink: "https://payfast.greenn.com.br/155020",
          features: ["Todo de los planes anteriores", "Cuenta Negocio", "Gestión financiera para microemprendedores", "Metas financieras personales y del negocio", "Control de tarjetas e inversiones de la empresa", "Pagos programados para gastos fijos", "Informes completos para toma de decisiones", "Soporte humanizado por WhatsApp", "Soporte por llamada", "Exportación de datos", "Recordatorios de cuentas a pagar y recibir por WhatsApp"]
        }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        { q: "¿Cómo separo personal de negocio?", a: "Usa palabras como 'empresa' o 'negocio' en la frase." },
        { q: "¿Es seguro?", a: "Sí, encriptación de extremo a extremo." }
      ]
    },
    footer: {
      description: "Tu asistente financiera Personal y Empresarial. Controla gastos, inversiones y tarjetas con la simplicidad de una conversación en WhatsApp.",
      product: "Producto",
      features: "Funciones",
      plans: "Planes",
      login: "Entrar",
      legal: "Legal",
      terms: "Términos de Uso",
      privacy: "Privacidad",
      contact: "Contacto",
      contactInfo: "Contacto",
      address: "Av. Bernardino Caballero, San Alberto, Alto Paraná, Paraguay",
      phone: "+595982690952",
      email: "contacto@finanzapp.lat",
      instagram: "@finanzapp.latam",
      rights: "Todos los derechos reservados."
    }
  },
  en: {
    nav: {
      features: "Features",
      howItWorks: "How it works",
      pricing: "Pricing",
      login: "Login",
      cta: "Get Started"
    },
    hero: {
      badge: "🚀 Financial Assistant on WhatsApp",
      title: "Master your finances by chatting with Fina",
      subtitle: "The AI that organizes your Personal and Business money directly on WhatsApp. No spreadsheets.",
      ctaPrimary: "Try Free Now",
      ctaSecondary: "View Plans",
      disclaimer: "We don't ask for bank passwords. 100% Secure."
    },
    features: {
      title: "Everything you need in one place",
      subtitle: "From daily expense tracking to complex investments.",
      items: [
        { title: "Personal & Business", desc: "Default is Personal. Say 'business' or 'office' to log for your company.", icon: <Briefcase className="w-6 h-6 text-brand-600" /> },
        { title: "Investments", desc: "Auto quotes for Stocks and Crypto in real-time.", icon: <TrendingUp className="w-6 h-6 text-brand-600" /> },
        { title: "Cards", desc: "Control bills, limits and installments.", icon: <CreditCard className="w-6 h-6 text-brand-600" /> },
        { title: "Shared Plan", desc: "Ideal for couples or partners.", icon: <Users className="w-6 h-6 text-brand-600" /> }
      ]
    },
    guide: {
      title: "Understand the Power of Fina",
      subtitle: "Just talk naturally. See how easy it is:",
      sections: [
        {
          title: "Personal vs Business",
          icon: <Building2 className="w-5 h-5" />,
          content: "Default is **Personal**.\nFor **Business**, use words like 'business', 'office', or 'company'.",
          examples: ['"Spent 50 on lunch" (Personal)', '"Received 1200 consulting fee for business" (PJ)']
        },
        {
          title: "Spent vs Must Pay",
          icon: <CalendarClock className="w-5 h-5" />,
          content: "**Spent**: Immediate transaction.\n**Must Pay**: Future scheduling.\n**Paid**: Confirm schedule.",
          examples: ['"Spent 230 at market"', '"Must pay 1500 rent on the 10th"']
        },
        {
          title: "Debit vs Credit",
          icon: <CreditCard className="w-5 h-5" />,
          content: "**Debit**: Deducts now.\n**Credit**: Goes to bill.\n**Installments**: Fina understands '12 installments', etc.",
          examples: ['"Bought 85 pharmacy debit"', '"Laptop 3000 in 12 installments credit"']
        },
        {
          title: "Balance & Reports",
          icon: <Wallet className="w-5 h-5" />,
          content: "Ask about expenses and income anytime.",
          examples: ['"What is my balance?"', '"Business month report"']
        }
      ]
    },
    howItWorks: {
      title: "How It Works",
      steps: [
        { title: "1. Save Contact", desc: "Add Fina's number to your phone.", icon: <Smartphone className="w-6 h-6 text-white" /> },
        { title: "2. Start Chatting", desc: "Send a 'Hi' on WhatsApp.", icon: <Zap className="w-6 h-6 text-white" /> },
        { title: "3. Talk Naturally", desc: "Just say: 'Spent 50 on lunch'.", icon: <MessageCircle className="w-6 h-6 text-white" /> }
      ]
    },
    chat: {
      title: "Try Fina now",
      tabs: ["Expenses", "Income", "Future", "Reports"],
      tipTitle: "💡 Fina's Tip",
      tips: {
        expense: "Fina knows the difference between 'Spent' (Now) and 'Must pay' (Future).",
        income: "Separate personal income from business by saying 'for business'.",
        future: "Schedule taxes or set up recurring subscriptions like 'Netflix monthly'.",
        report: "Ask for specific reports like 'How much did I spend on Uber this month?'"
      },
      demoData: {
        expense: [
          { sender: 'user', text: 'Spent 230 at the market', time: '10:42' },
          { sender: 'agent', text: '✅ Noted! $ 230.00 at Market (Category: Groceries) on Personal account.', time: '10:42' },
          { sender: 'user', text: 'Bought office supplies 120 for business', time: '14:15' },
          { sender: 'agent', text: '🏢 Done! $ 120.00 logged to Business account.', time: '14:15' }
        ],
        income: [], future: [], report: []
      }
    },
    pricing: {
      title: "Affordable Plans (USD)",
      subtitle: "Start organizing your finances today.",
      monthly: "Monthly",
      annual: "Annual",
      currencySymbol: "$",
      perMonth: "/month",
      chargedAnnually: "Charged",
      annually: "annually",
      mostPopular: "Most Popular",
      startNow: "Start Now",
      plans: [
        {
          name: "Starter",
          description: "For those who want to organize their financial life without hassle.",
          price: 5.99,
          annualPrice: 61.10,
          discount: 15,
          colorScheme: "white",
          monthlyLink: "https://payfast.greenn.com.br/155022",
          annualLink: "https://payfast.greenn.com.br/155015",
          features: ["Web system with interactive charts", "Expense control via WhatsApp by text, audio and image", "Unlimited transactions via WhatsApp", "Customized categories and subcategories", "Individual management and profile customization", "Reminders of bills to pay and receive via WhatsApp", "Financial goals", "Credit card control", "Investment management", "Scheduled payments", "Complete reports", "Data export", "Support via WhatsApp"]
        },
        {
          name: "Plus",
          description: "For those who share accounts and financial decisions.",
          price: 7.99,
          annualPrice: 81.50,
          discount: 15,
          colorScheme: "green",
          highlight: true,
          monthlyLink: "https://payfast.greenn.com.br/155016",
          annualLink: "https://payfast.greenn.com.br/155018",
          features: ["Everything from Start plan", "Shared management", "Each member uses their own WhatsApp number", "Individual alerts for bills to pay and receive", "Centralized view, always updated and visible to all", "1 extra user included at no additional cost", "Goals, cards, investments, scheduled payments and reports for all users", "Data export", "Ideal for couples, families or partners"]
        },
        {
          name: "Pro",
          description: "For those who run a business and need to separate personal from professional.",
          price: 9.99,
          annualPrice: 107.90,
          discount: 10,
          colorScheme: "blue",
          monthlyLink: "https://payfast.greenn.com.br/155019",
          annualLink: "https://payfast.greenn.com.br/155020",
          features: ["Everything from previous plans", "Business Account", "Financial management for micro-entrepreneurs", "Personal and business financial goals", "Company card and investment control", "Scheduled payments for fixed expenses", "Complete reports for decision making", "Humanized support via WhatsApp", "Phone support", "Data export", "Reminders of bills to pay and receive via WhatsApp"]
        }
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        { q: "Is it secure?", a: "Yes! End-to-end encryption." },
      ]
    },
    footer: {
      description: "Your Personal and Business financial assistant. Control expenses, investments and cards with the simplicity of a WhatsApp conversation.",
      product: "Product",
      features: "Features",
      plans: "Pricing",
      login: "Login",
      legal: "Legal",
      terms: "Terms of Use",
      privacy: "Privacy",
      contact: "Contact",
      contactInfo: "Contact",
      address: "Av. Bernardino Caballero, San Alberto, Alto Paraná, Paraguay",
      phone: "+595982690952",
      email: "contacto@finanzapp.lat",
      instagram: "@finanzapp.latam",
      rights: "All rights reserved."
    }
  }
};