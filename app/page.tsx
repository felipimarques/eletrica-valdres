import Image from "next/image";

const WA = "https://wa.me/5511989749956?text=Ol%C3%A1!%20Vi%20o%20site%20da%20El%C3%A9trica%20Valdres%20e%20quero%20um%20or%C3%A7amento.";
const IG = "https://instagram.com/eletricistavaldres";

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

      <header className="sticky top-0 z-50 bg-site-light/95 backdrop-blur border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-3 sm:px-4 h-16 sm:h-20 flex items-center justify-between gap-2">
          <a href="#inicio" className="flex items-center gap-2.5 min-w-0">
            <Image src="/images/logo.jpg" alt="Elétrica Valdres" width={40} height={40} className="rounded-xl shrink-0 border border-stone-200" />
            <span className="font-bold text-lg text-site-ink truncate">Elétrica <span className="text-hazard-orange">Valdres</span></span>
          </a>
          <a href={WA} target="_blank" rel="noopener" className="shrink-0 bg-site-ink text-white font-semibold text-xs sm:text-sm rounded-lg px-4 sm:px-6 py-2 sm:py-2.5 hover:bg-hazard-orange transition whitespace-nowrap">
            Orçamento
          </a>
        </div>
      </header>

      <main>
        {/* HERO — o problema que a gente encontra */}
        <section id="inicio" className="pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <h1 className="font-bold text-site-ink text-[36px] sm:text-5xl lg:text-[60px] leading-[1.05] tracking-tight">
                Já abriu uma
                <br />
                caixa assim?
                <br />
                <span className="text-hazard-orange">Nós abrimos toda semana.</span>
              </h1>
              <p className="mt-5 text-lg text-stone-600 max-w-md leading-relaxed">
                Conexão queimada, fio subdimensionado, padrão velho. A foto ao
                lado é de serviço nosso — e é o que evitamos na sua casa com
                instalação feita do jeito certo.
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
              <div className="relative rounded-2xl overflow-hidden border-2 border-stone-300 shadow-2xl">
                <Image src="/images/post-01.jpg" alt="Conexão elétrica queimada encontrada em serviço" fill className="object-cover" priority />
                <span className="absolute top-4 left-4 bg-hazard-orange text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded">
                  Encontrado em serviço
                </span>
              </div>
              <a
                href="#reviews"
                className="mt-4 flex items-center justify-center gap-2 bg-white border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-600 hover:border-hazard-orange transition"
              >
                <span className="text-hazard-orange">★★★★★</span>
                <strong className="text-site-ink">5.0 no Google</strong>
                <span className="text-stone-500">115 avaliações</span>
              </a>
            </div>
          </div>
        </section>

        {/* SERVIÇOS — do padrão ao ar-condicionado */}
        <section className="bg-site-ink text-stone-100 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-bold text-3xl sm:text-5xl tracking-tight max-w-xl leading-tight">
              Do medidor ao ar-condicionado.
            </h2>
            <div className="mt-10 border-t border-stone-700">
              {[
                ["Padrão de entrada", "Medidor, caixa e cabeamento regularizados — como o da foto: dentro do padrão, vedado e identificado.", "/images/post-08.jpg"],
                ["Ar-condicionado", "Instalação de split com ponto elétrico dedicado e interligação limpa.", "/images/post-03.jpg"],
              ].map(([t, d, img], i) => (
                <div key={t} className="grid sm:grid-cols-12 gap-4 items-center py-6 border-b border-stone-700 group">
                  <div className={`sm:col-span-4 relative h-40 rounded-xl overflow-hidden border border-stone-600 ${i % 2 ? "sm:order-3" : ""}`}>
                    <Image src={img} alt={t} fill className="object-cover group-hover:scale-105 transition duration-500" />
                  </div>
                  <div className={`sm:col-span-8 ${i % 2 ? "sm:order-1 sm:pr-4" : "sm:pl-4"}`}>
                    <h3 className="font-bold text-xl sm:text-2xl text-white">{t}</h3>
                    <p className="mt-1.5 text-stone-400">{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-stone-500">
              Quadros, pontos, chuveiros e tomadas: chame no WhatsApp e descreva o serviço.
            </p>
          </div>
        </section>

        {/* PROVA SOCIAL */}
        <section id="reviews" className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <div className="font-bold text-hazard-orange text-4xl tracking-widest">★★★★★</div>
            <div className="font-bold text-site-ink text-3xl sm:text-4xl mt-2">5.0 com 115 avaliações</div>
            <p className="mt-3 text-stone-600">
              Cento e quinze clientes avaliaram a Valdres com a nota máxima no
              Google. Em elétrica, reputação se constrói assim: serviço que
              não volta.
            </p>
            <a href={WA} target="_blank" rel="noopener" className="mt-8 inline-flex bg-hazard-orange text-white font-bold text-lg rounded-xl px-9 py-4 hover:brightness-110 active:scale-95 transition">
              (11) 98974-9956
            </a>
            <p className="mt-3 text-sm text-stone-500">São Paulo e região · orçamento pelo WhatsApp</p>
          </div>
        </section>
      </main>

      <footer className="bg-site-ink text-stone-400 py-8 text-sm text-center">
        Elétrica Valdres · São Paulo · ★ 5.0 no Google · 115 avaliações
      </footer>

      <a href={WA} target="_blank" rel="noopener" aria-label="WhatsApp" className="fixed bottom-6 left-5 md:left-auto md:right-5 md:bottom-24 z-[60] w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-2xl hover:scale-105 transition">✆</a>
    </>
  );
}
