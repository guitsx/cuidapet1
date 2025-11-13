function Servicos() {
  return (
    <section
      id="servicos"
      className="max-w-6xl mx-auto px-6 py-20 mt-20 border-t"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">
          Conheça mais sobre nossos serviços
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          O CuidaPet.ia faz parte do ecossistema Leve Benefícios.  
          Uma plataforma pensada para oferecer bem-estar, saúde
          e praticidade para tutores e seus pets.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* bloco CuidaPet */}
        <div className="bg-white border rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            CuidaPet.ia
          </h3>
          <p className="text-gray-600 mb-4">
            IA que ajuda tutores a organizar a saúde, rotina e cuidados
            do pet com inteligência. Carteira digital, lembretes, diário
            e análises personalizadas.
          </p>
          <a
            href="#planos"
            className="text-[#0aa5a5] font-semibold hover:underline"
          >
            Conhecer planos →
          </a>
        </div>

        {/* bloco Leve Benefícios */}
        <div className="bg-white border rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Leve Benefícios
          </h3>
          <p className="text-gray-600 mb-4">
            Plataforma com mais de <strong>100.000 usuários</strong> no Brasil,
            oferecendo planos de saúde pet, telemedicina veterinária,
            descontos em serviços e suporte completo para tutores.
          </p>

          <a
            href="https://levebeneficios.com.br"
            target="_blank"
            className="text-[#0aa5a5] font-semibold hover:underline"
          >
            Saiba mais sobre a Leve →
          </a>
        </div>

      </div>
    </section>
  );
}
