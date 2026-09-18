import Image from "next/image";

const WA = "https://wa.me/5511989749956?text=Ol%C3%A1!%20Vi%20o%20site%20da%20El%C3%A9trica%20Valdres%20e%20quero%20um%20or%C3%A7amento.";
const IG = "https://instagram.com/eletricistavaldres";

function FaixaPerigo() {
  return (
    <div
      className="h-9 border-y-4 border-black"
      style={{
        background:
          "repeating-linear-gradient(-45deg, #FACC15 0 28px, #111111 28px 56px)",
      }}
    />
  );
}

export default function Page() {
  return (
    <>
      <div className="bg-site-ink text-stone-300 text-[11px] sm:text-[13px] font-semibold text-center py-2 px-2 flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          São Paulo e região •
        </span>
        <span className="text-hazard-orange">★★★★★ 5.0 no Google</span>
        <span className="font-bold">(115 avaliações)</span>
      </div>

      <header className="sticky top-0 z-50 bg-site-light/95 backdrop-blur border-b-2 border-site-ink">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 h-16 sm:h-20 flex items-center justify-between gap-2">
          <a href="#inicio" className="flex items-center gap-2.5 min-w-0">
            <Image src="/images/logo.jpg" alt="Elétrica Valdres" width={40} height={40} className="rounded-lg shrink-0 border-2 border-site-ink" />
            <span className="font-bold text-lg text-site-ink truncate">Elétrica <span className="text-hazard-orange">Valdres</span></span>
          </a>
          <a href={WA} target="_blank" rel="noopener" className="shrink-0 bg-site-ink text-white font-semibold text-xs sm:text-sm rounded-lg px-4 sm:px-6 py-2 sm:py-2.5 hover:bg-hazard-orange transition whitespace-nowrap">
            Pedir avaliação
          </a>
        </div>
      </header>

      <main>
        {/* HERO — o perigo real */}
        <section id="inicio" className="pt-12 pb-14 lg:pt-20 lg:pb-20">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <h1 className="font-bold text-site-ink text-[36px] sm:text-5xl lg:text-[60px] leading-[1.05] tracking-tight">
                Isso aqui dentro
                <br />
                queima casa.
                <br />
                <span className="bg-hazard-orange text-white px-3 rounded-lg inline-block mt-2 -rotate-1">A gente resolve.</span>
              </h1>
              <p className="mt-5 text-lg text-stone-600 max-w-md leading-relaxed">
                Conexão derretida, fio fino demais, padrão fora de norma: é o
                que encontramos em obra por aí. A foto é de um serviço nosso —
                e é por isso que 115 clientes deram 5 estrelas.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
                <a href={WA} target="_blank" rel="noopener" className="flex-1 text-center bg-hazard-orange text-white font-bold text-lg rounded-xl px-6 py-4 hover:brightness-110 active:scale-95 transition">
                  Avaliar minha instalação
                </a>
                <a href={IG} target="_blank" rel="noopener" className="flex-1 text-center bg-white border-2 border-stone-300 text-site-ink font-semibold text-lg rounded-xl px-6 py-4 hover:border-hazard-orange transition">
                  Obras no Instagram
                </a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border-4 border-site-ink shadow-2xl rotate-1">
                <Image src="/images/post-01.jpg" alt="Conexão elétrica queimada encontrada em serviço" fill className="object-cover" priority />
                <span className="absolute top-4 left-4 bg-hazard-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded border-2 border-black">
                  ⚠ Encontrado em serviço
                </span>
              </div>
            </div>
          </div>
        </section>

        <FaixaPerigo />

        {/* ANTES / DEPOIS */}
        <section className="py-14 lg:py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-bold text-site-ink text-3xl sm:text-5xl tracking-tight max-w-2xl leading-tight">
              O antes a gente mostra.
              <br />
              O depois, a gente entrega.
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              <div className="rounded-2xl overflow-hidden border-4 border-hazard-orange bg-white shadow-xl">
                <div className="bg-hazard-orange text-white text-xs font-bold uppercase tracking-widest px-4 py-2">Antes · risco real</div>
                <div className="relative h-64">
                  <Image src="/images/post-01.jpg" alt="Conexão queimada" fill className="object-cover" />
                </div>
                <p className="px-5 py-4 text-sm text-stone-600 font-medium">Derretimento por mau contato — risco de incêndio e de choque.</p>
              </div>
              <div className="rounded-2xl overflow-hidden border-4 border-site-ink bg-white shadow-xl">
                <div className="bg-site-ink text-white text-xs font-bold uppercase tracking-widest px-4 py-2">Depois · padrão Valdres</div>
                <div className="relative h-64">
                  <Image src="/images/post-08.jpg" alt="Padrão de entrada novo com medidor" fill className="object-cover" />
                </div>
                <p className="px-5 py-4 text-sm text-stone-600 font-medium">Medidor novo, caixa vedada, cabeamento identificado — dentro do padrão.</p>
              </div>
            </div>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                ["Padrão de entrada", "Medidor e caixa regularizados, do jeito que a concessionária exige."],
                ["Ar-condicionado", "Split com ponto dedicado e interligação limpa, sem fio aparente."],
                ["Revisão geral", "Quadro, tomadas e chuveiro: ponto por ponto, sem chute."],
              ].map(([t, d]) => (
                <div key={t} className="bg-site-panel border-2 border-stone-200 rounded-2xl p-5">
                  <h3 className="font-bold text-site-ink text-lg">{t}</h3>
                  <p className="text-sm text-stone-600 mt-1">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FaixaPerigo />

        {/* PROVA */}
        <section className="bg-site-ink text-stone-100 py-14 lg:py-20 text-center">
          <div className="max-w-2xl mx-auto px-4">
            <div className="font-bold text-hazard-orange text-2xl tracking-[0.3em]">★★★★★</div>
            <div className="font-bold text-white text-5xl sm:text-6xl mt-2">115×</div>
            <p className="mt-3 text-stone-400 text-lg">
              Cento e quinze avaliações 5 estrelas no Google. Reputação em
              elétrica se constrói assim: serviço que não volta.
            </p>
            <a href={WA} target="_blank" rel="noopener" className="mt-8 inline-flex bg-hazard-orange text-white font-bold text-lg rounded-xl px-9 py-4 hover:brightness-110 active:scale-95 transition">
              (11) 98974-9956
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-black text-stone-400 py-8 text-sm text-center">
        Elétrica Valdres · São Paulo · ★ 5.0 no Google · 115 avaliações
      </footer>

      <a href={WA} target="_blank" rel="noopener" aria-label="WhatsApp" className="fixed bottom-6 left-5 md:left-auto md:right-5 md:bottom-24 z-[60] w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-2xl hover:scale-105 transition">✆</a>
    </>
  );
}
