"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Planos from "../components/planos";
import { ShieldCheck, Headphones, Layers } from "lucide-react";

type Periodo = "mensal" | "anual";

export default function Page() {
  const [periodo, setPeriodo] = useState<Periodo>("mensal");

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <BeneficiosChave />

      <section id="planos" className="max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="mb-6 flex items-center justify-center"
        >
          <BillingToggle periodo={periodo} onChange={setPeriodo} />
        </motion.div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.05 }}
        >
          <Planos period={periodo} />
        </motion.div>
      </section>

      <Servicos />

      <Footer />
      <FloatingCTA />
    </main>
  );
}

/* NAVBAR — pílula flutuante centralizada, com espaçamento entre logo e menus */
function Navbar() {
  return (
    <header className="fixed top-6 z-30 w-full">
      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        <nav
          suppressHydrationWarning
          className="flex items-center gap-10 rounded-full bg-white/90 backdrop-blur-xl border border-gray-200 shadow-[0_4px_10px_rgba(0,0,0,0.06)] px-7 py-3"
          style={{ minWidth: "fit-content" }}
        >
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-extrabold tracking-tight leading-none"
          >
            CuidaPet<span className="text-[#0aa5a5]">.ia</span>
          </a>

          {/* Espaçador visível entre logo e menus */}
          <div className="w-16" aria-hidden />

          {/* Menus */}
          <div className="hidden md:flex items-center gap-8 text-[15px] text-gray-700 font-medium">
            <a href="#beneficios" className="hover:text-[#0aa5a5] transition">
              Benefícios
            </a>
            <a href="#planos" className="hover:text-[#0aa5a5] transition">
              Planos
            </a>
            <a href="#servicos" className="hover:text-[#0aa5a5] transition">
              Sobre
            </a>
            <a
              href="#planos"
              className="text-[#0aa5a5] hover:text-[#088787] transition"
            >
              Unir-se
            </a>
          </div>

          {/* Empurra o botão para a direita quando houver espaço */}
          <div className="flex-1" />

          {/* Botão Painel */}
          <a
            href="#planos"
            className="px-5 py-2 rounded-full bg-[#0aa5a5] text-white font-semibold shadow-md hover:bg-[#088787] text-sm"
          >
            Painel
          </a>
        </nav>
      </div>
    </header>
  );
}

/* HERO com degradê lateral, chips “flutuantes” e blocos sem borda (estilo fluido) */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-28">
      {/* Degradês laterais suaves */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-1/3 top-[-10%] h-[120%] w-[60%] rounded-full bg-teal-100/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-1/3 top-[-10%] h-[120%] w-[60%] rounded-full bg-teal-100/40 blur-3xl"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <motion.div initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          {/* Faixa removida, mantemos apenas o título e textos principais */}
          <h1 className="mt-2 text-5xl font-extrabold leading-tight text-gray-900">
            Proteja e organize a saúde do seu pet com inteligência.
          </h1>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Feito por quem já cuida de mais de{" "}
            <span className="font-bold text-[#0aa5a5]">
              90.000 tutores no Brasil
            </span>
            . Um app criado para quem ama, se preocupa e quer oferecer o melhor
            para o pet.
          </p>

          <p className="mt-3 text-gray-600">
            Carteira de vacinação, lembretes, diário inteligente e rotina com IA.
            Tudo organizado automaticamente, sem esforço.
          </p>

          {/* Chips “flutuando” sem borda, com leve glass */}
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur shadow-md px-4 py-2 text-sm text-gray-800">
              <ShieldCheck className="h-4 w-4 text-[#0aa5a5]" />
              Cobertura completa
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur shadow-md px-4 py-2 text-sm text-gray-800">
              <Headphones className="h-4 w-4 text-[#0aa5a5]" />
              Suporte 24/7
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 backdrop-blur shadow-md px-4 py-2 text-sm text-gray-800">
              <Layers className="h-4 w-4 text-[#0aa5a5]" />
              Planos flexíveis
            </span>
          </div>

          {/* Bloco fluido “glass” com CTAs e métricas sem borda visível */}
          <div className="mt-8 rounded-2xl bg-white/80 backdrop-blur shadow-lg p-4">
            <div className="flex gap-3">
              <a
                href="#planos"
                className="px-6 py-3 rounded-xl bg-[#0aa5a5] text-white hover:bg-[#088787]"
              >
                Ver Planos
              </a>
              <a
                href="#beneficios"
                className="px-6 py-3 rounded-xl bg-white hover:bg-gray-50 shadow-sm"
              >
                Saiba Mais
              </a>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 max-w-sm">
              <div className="rounded-xl bg-white shadow-sm p-4 text-center">
                <p className="text-xl font-extrabold text-gray-900">+80.000</p>
                <p className="text-xs text-gray-600">Clientes Felizes</p>
              </div>
              <div className="rounded-xl bg-white shadow-sm p-4 text-center">
                <p className="text-xl font-extrabold text-gray-900">+35.000</p>
                <p className="text-xs text-gray-600">Pets mais saudáveis</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Mockup com glow */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-teal-100/60 to-white blur-2xl" />
          {/* Imagem */}
          <div className="relative w-[340px] h-[520px] rounded-3xl bg-white border shadow-xl overflow-hidden">
            <Image
              src="/hero-dog5.jpg"
              alt="Tutor cuidando do cachorro com o app CuidaPet.ia"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* BENEFÍCIOS com cards refinados */
function BeneficiosChave() {
  const itens = [
    {
      title: "Organização inteligente",
      desc:
        "Tudo em ordem, sem esforço. A carteira de saúde do seu pet sempre atualizada automaticamente.",
      bullets: [
        "Vacinas, vermífugo e antipulgas organizados",
        "Lembretes inteligentes",
        "Histórico completo",
        "Zero risco de perder datas importantes",
      ],
    },
    {
      title: "Rotina personalizada com IA",
      desc:
        "O plano diário perfeito para o seu pet. A IA analisa idade, raça, peso e comportamento.",
      bullets: [
        "Plano diário de atividades",
        "Higiene e cuidados essenciais",
        "Sugestões de brincadeiras e gasto de energia",
        "Rotina saudável baseada no perfil do pet",
      ],
    },
    {
      title: "Diário inteligente",
      desc:
        "Entenda o seu pet como nunca antes. A IA identifica padrões no comportamento.",
      bullets: [
        "Anotações rápidas (texto ou comportamento)",
        "Identificação de padrões pela IA",
        "Insights sem diagnóstico médico",
        "Linha do tempo organizada",
      ],
    },
  ];

  return (
    <section id="beneficios" className="max-w-6xl mx-auto px-6 pb-16 mt-10">
      <div className="grid md:grid-cols-3 gap-6">
        {itens.map((b) => (
          <motion.div
            key={b.title}
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-lg mb-2">{b.title}</h3>
            <p className="text-gray-600 mb-4">{b.desc}</p>
            <ul className="space-y-2 text-sm text-gray-700">
              {b.bullets.map((txt, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-[#0aa5a5] font-bold">•</span>
                  <span>{txt}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* TOGGLE de cobrança */
function BillingToggle({
  periodo,
  onChange,
}: {
  periodo: Periodo;
  onChange: (v: Periodo) => void;
}) {
  return (
    <div className="flex items-center gap-4 bg-white border rounded-2xl px-3 py-2 shadow-sm">
      <button
        className={`px-4 py-2 rounded-xl text-sm ${
          periodo === "mensal"
            ? "bg-[#0aa5a5] text-white"
            : "hover:bg-gray-100 text-gray-700"
        }`}
        onClick={() => onChange("mensal")}
      >
        Mensal
      </button>
      <button
        className={`px-4 py-2 rounded-xl text-sm flex items-center gap-2 ${
          periodo === "anual"
            ? "bg-[#0aa5a5] text-white"
            : "hover:bg-gray-100 text-gray-700"
        }`}
        onClick={() => onChange("anual")}
      >
        Anual
        <span className="text-xs font-semibold bg-emerald-100 text-emerald-700 rounded-full px-2 py-0.5">
          Economize 20%
        </span>
      </button>
    </div>
  );
}

/* SERVIÇOS no rodapé da página */
function Servicos() {
  return (
    <section id="servicos" className="max-w-6xl mx-auto px-6 py-20 mt-20 border-t">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Conheça mais sobre nossos serviços
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          O CuidaPet.ia faz parte do ecossistema <strong>LevePets</strong>,
          que já impacta mais de <strong>100.000 usuários em todo o Brasil</strong>.
          Saúde, bem-estar e tecnologia conectadas para melhorar a vida de tutores e pets.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* CuidaPet */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">CuidaPet.ia</h3>
          <p className="text-gray-600 mb-4">
            IA que organiza a saúde e a rotina do pet com carteira,
            lembretes, diário inteligente e análises automáticas.
          </p>
          <a href="#planos" className="text-[#0aa5a5] font-semibold hover:underline">
            Conhecer planos →
          </a>
        </div>

        {/* Leve Benefícios */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">LevePets</h3>
          <p className="text-gray-600 mb-4">
            Com mais de <strong>100.000 vidas protegidas</strong>, a Leve oferece
            planos pet, telemedicina veterinária, benefícios exclusivos e serviços
            acessíveis para famílias em todo o país.
          </p>
          <a
            href="https://www.levepets.com.br/"
            target="_blank"
            className="text-[#0aa5a5] font-semibold hover:underline"
          >
            Conhecer a LevePets →
          </a>
        </div>
      </div>
    </section>
  );
}

/* FOOTER + CTA */
function Footer() {
  return (
    <footer id="faq" className="mt-10 border-t">
      <div className="max-w-6xl mx-auto px-6 py-10 text-sm text-gray-600">
        © {new Date().getUTCFullYear()} Beecode. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function FloatingCTA() {
  return (
    <a
      href="#planos"
      className="fixed bottom-5 right-5 px-5 py-3 rounded-full shadow-lg bg-[#0aa5a5] text-white hover:bg-[#088787]"
    >
      Escolher plano ideal
    </a>
  );
}
