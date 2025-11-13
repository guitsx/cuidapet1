"use client";

export default function CardsInicio() {
  const cards = [
    {
      title: "Organização inteligente",
      kicker: "Tudo em ordem, sem esforço.",
      body:
        "A carteira de saúde do seu pet se organiza automaticamente: vacinas, vermífugo, antipulgas e lembretes inteligentes que não deixam nada passar. A IA cuida das datas — você curte os momentos.",
    },
    {
      title: "Rotina personalizada com IA",
      kicker: "O plano diário perfeito para o seu pet.",
      body:
        "A IA analisa idade, raça, peso e comportamento para criar uma rotina simples de seguir, totalmente sob medida. Atividades, hidratação, estímulos mentais e cuidados essenciais gerados automaticamente.",
    },
    {
      title: "Diário inteligente",
      kicker: "Entenda o seu pet como nunca antes.",
      body:
        "Anote o que acontece no dia a dia e deixe a IA interpretar. Ela identifica padrões, hábitos e mudanças importantes — sem diagnóstico — apenas insights úteis e seguros para tutores responsáveis.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 pb-6">
      <div className="grid md:grid-cols-3 gap-6 items-start">
        {cards.map((c) => (
          <div
            key={c.title}
            className="rounded-2xl p-6 border bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
          >
            {/* linha premium */}
            <div className="h-1 w-10 bg-[#0aa5a5] rounded-full mb-4" />

            {/* título */}
            <h3 className="text-xl font-semibold text-gray-900">{c.title}</h3>

            {/* subtítulo */}
            <p className="mt-1 text-[15px] font-medium text-gray-800">{c.kicker}</p>

            {/* conteúdo */}
            <p className="mt-2 text-gray-600 leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
