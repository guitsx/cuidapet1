"use client";

import { useState, useMemo } from "react";

/* Tipos */
type Feature = { label: string };
type Plan = {
  name: string;
  basePrice: number; // preço mensal base
  badge?: string;
  note?: string;
  cta: string;
  highlight?: boolean;
  summary: Feature[];
  details: { titulo: string; itens: Feature[] }[];
};

/* Util: formatação de moeda */
function moneyBR(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/* Componente principal: recebe o período (mensal|anual) */
export default function Planos({
  period = "mensal",
}: {
  period?: "mensal" | "anual";
}) {
  const fator = period === "anual" ? 0.8 : 1;

  const priceText = (baseMonthly: number) => {
    if (period === "anual") {
      const anualComDesconto = baseMonthly * 12 * fator;
      return `${moneyBR(anualComDesconto)} / ano`;
    }
    return `${moneyBR(baseMonthly)} / mês`;
  };

  /* Modal de stores */
  const [showStores, setShowStores] = useState(false);

  const GOOGLE_PLAY_URL =
    "https://play.google.com/store/apps/details?id=com.seuapp";
  const APP_STORE_URL = "https://apps.apple.com/app/id0000000000";

  /* Planos (com valores base mensais) */
  const PLANS: Plan[] = useMemo(
    () => [
      {
        name: "Plano Essencial",
        basePrice: 19.9,
        note: "7 dias grátis",
        cta: "Começar Agora",
        summary: [
          { label: "1 pet" },
          { label: "Carteira de vacinação" },
          { label: "Lembretes essenciais" },
          { label: "Peso registrado 1x por semana" },
          { label: "Diário inteligente: 10 anotações/mês" },
          { label: "IA Lite: 3 análises/mês" },
        ],
        details: [
          {
            titulo: "IA Lite (básico)",
            itens: [
              {
                label:
                  "Analisa descrições escritas pelo tutor (comportamento, sintomas, rotina)",
              },
              { label: "Nível de atenção + primeiros cuidados" },
              { label: "Resumo semanal do diário" },
            ],
          },
          {
            titulo: "Saúde e organização",
            itens: [
              { label: "Vacinas, vermífugo e antipulgas" },
              { label: "Histórico de 30 dias" },
              { label: "Notificações simples" },
              { label: "Backup básico" },
            ],
          },
        ],
      },
      {
        name: "Plano Premium",
        basePrice: 39.9,
        badge: "Mais Popular",
        cta: "Assinar Premium",
        highlight: true,
        summary: [
          { label: "Até 3 pets" },
          { label: "Diário inteligente ilimitado" },
          { label: "IA de rotina personalizada (ilimitada)" },
          { label: "Lembretes completos" },
          { label: "Gráficos evolutivos" },
          { label: "Exportar carteira em PDF" },
        ],
        details: [
          {
            titulo: "IA Premium (ilimitada)",
            itens: [
              { label: "Análises ilimitadas" },
              { label: "Tendências de comportamento" },
              { label: "Alertas preventivos (não diagnósticos)" },
              { label: "Rotina por raça, idade, porte e histórico" },
            ],
          },
          {
            titulo: "Saúde e relatórios",
            itens: [
              { label: "Carteira completa e histórico ilimitado" },
              { label: "Gráficos de peso e comportamento" },
              { label: "Exportação completa em PDF" },
              { label: "Notificações antecipadas + reforços" },
            ],
          },
        ],
      },
      {
        name: "Plano Pro",
        basePrice: 79.9,
        cta: "Quero o Pro",
        summary: [
          { label: "Até 10 pets" },
          { label: "Diário ilimitado" },
          { label: "Relatórios mensais completos" },
          { label: "Alertas da IA (preditivos)" },
          { label: "Histórico nutricional" },
          { label: "Suporte prioritário" },
        ],
        details: [
          {
            titulo: "IA Pro",
            itens: [
              { label: "Análises aprofundadas de comportamento" },
              { label: "Recomendações avançadas de rotina" },
            ],
          },
          {
            titulo: "Para criadores e multi-pets",
            itens: [
              { label: "Dashboard consolidado" },
              { label: "Relatório mensal por pet" },
              { label: "Exportação de gráficos e evolução" },
            ],
          },
        ],
      },
    ],
    [fator, period]
  );

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      {/* items-start impede que colunas estiquem para a mesma altura */}
      <div className="grid md:grid-cols-3 gap-8 mt-6 items-start">
        {PLANS.map((plan) => (
          <ExpandableCard
            key={plan.name}
            plan={plan}
            priceText={priceText(plan.basePrice)}
            annualBadge={plan.name === "Plano Premium" && period === "anual"}
            onCTAClick={() =>
              plan.name === "Plano Premium" ? setShowStores(true) : undefined
            }
          />
        ))}
      </div>

      {showStores && (
        <StoresModal
          onClose={() => setShowStores(false)}
          googlePlayUrl={GOOGLE_PLAY_URL}
          appStoreUrl={APP_STORE_URL}
        />
      )}
    </section>
  );
}

/* Card expansível — independente e com bordas pretas fortes */
function ExpandableCard({
  plan,
  priceText,
  annualBadge,
  onCTAClick,
}: {
  plan: Plan;
  priceText: string;
  annualBadge?: boolean;
  onCTAClick?: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    // self-start garante que o card fique ancorado no topo da linha do grid
    <div
      className={`self-start rounded-2xl p-8 shadow-md transition bg-white border-4 ${
        plan.highlight ? "border-[#0aa5a5]" : "border-black"
      }`}
    >
      {/* Badges */}
      <div className="flex items-center gap-2 mb-2">
        {plan.badge && (
          <span className="inline-block text-xs font-semibold text-[#0aa5a5] bg-[#e6f8f7] px-3 py-1 rounded-full">
            {plan.badge}
          </span>
        )}
        {annualBadge && (
          <span className="inline-block text-xs font-semibold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
            Economize 20%
          </span>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
      {plan.note && <p className="mt-1 text-sm text-gray-500">{plan.note}</p>}

      <p className="text-4xl font-extrabold text-[#0aa5a5] mt-4">{priceText}</p>

      {/* Resumo */}
      <ul className="mt-6 space-y-2 text-gray-800">
        {plan.summary.map((f, i) => (
          <li key={i} className="flex gap-2">
            ✅ <span>{f.label}</span>
          </li>
        ))}
      </ul>

      {/* CTA principal */}
      <button
        type="button"
        onClick={onCTAClick}
        className={`w-full mt-6 py-3 rounded-xl text-white transition ${
          plan.highlight
            ? "bg-[#0aa5a5] hover:bg-[#088787]"
            : "bg-gray-700 hover:bg-gray-800"
        }`}
      >
        {plan.cta}
      </button>

      {/* Toggle detalhes */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full mt-3 py-2 rounded-xl border text-sm hover:bg-gray-50"
        aria-expanded={open}
        aria-controls={`detalhes-${plan.name}`}
      >
        {open ? "Fechar detalhes" : "Ver todos os recursos"}
      </button>

      {/* Área expansível */}
      <div
        id={`detalhes-${plan.name}`}
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[900px] mt-4" : "max-h-0"
        }`}
      >
        <div className="space-y-5">
          {plan.details.map((sec, sIdx) => (
            <div key={sIdx} className="border-4 border-black rounded-xl p-4">
              <p className="font-semibold text-gray-900">{sec.titulo}</p>
              <ul className="mt-2 space-y-1 text-gray-700">
                {sec.itens.map((it, i) => (
                  <li key={i} className="flex gap-2">
                    • <span>{it.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Modal de stores */
function StoresModal({
  onClose,
  googlePlayUrl,
  appStoreUrl,
}: {
  onClose: () => void;
  googlePlayUrl: string;
  appStoreUrl: string;
}) {
  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-[9999] flex items-center justify-center"
    >
      {/* backdrop */}
      <button
        aria-label="Fechar"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* card */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <h4 className="text-xl font-bold text-gray-900">Baixar o app</h4>
        <p className="text-gray-600 mt-1">
          Escolha sua loja para continuar a assinatura no aplicativo.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3">
          <a
            href={googlePlayUrl}
            target="_blank"
            className="flex items-center justify-center rounded-xl border p-3 hover:bg-gray-50"
          >
            <img
              src="/google-play-badge.svg"
              alt="Disponível no Google Play"
              className="h-12"
            />
          </a>
          <a
            href={appStoreUrl}
            target="_blank"
            className="flex items-center justify-center rounded-xl border p-3 hover:bg-gray-50"
          >
            <img
              src="/app-store-badge.svg"
              alt="Baixar na App Store"
              className="h-12"
            />
          </a>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border hover:bg-gray-50"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
