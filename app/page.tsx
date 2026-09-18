import Image from "next/image";

const WA = "https://wa.me/5511989749956?text=Ol%C3%A1!%20Vi%20o%20site%20da%20El%C3%A9trica%20Valdres%20e%20quero%20um%20or%C3%A7amento.";
const IG = "https://instagram.com/eletricistavaldres";

function Regua() {
  return <div className="h-px bg-line" />;
}

export default function Page() {
  return (
    <>
      {/* faixa técnica superior */}
      <div className="bg-graphite text-stone-300 text-[11px] sm:text-xs font-semibold tracking-wide text-center py-2 px-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-0.5">
        <span className="inline-flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
          São Paulo e região
        </span>
        <span className="text-white font-bold">★★★★★ 5.0 no Google</span>
        <span className="text-stone-400">(115 avaliações)</span>
      </div>

      <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-[72px] flex items-center justify-between gap-3">
          <a href="#inicio" className="flex items-center gap-2.5 min-w-0">
            <Image src="/images/logo.jpg" alt="Elétrica Valdres" width={40} height={40} className="rounded-lg shrink-0" />
            <span className="font-cond font-bold text-2xl tracking-wide text-graphite uppercase leading-none">
              Elétrica <span className="text-signal">Valdres</span>
            </span>
          </a>
          <a
            href={WA}
            target="_blank"
            rel="noopener"
            className="shrink-0 bg-signal text-white font-semibold text-sm rounded-none px-5 py-2.5 hover:brightness-110 active:scale-95 transition whitespace-nowrap"
          >
            Orçamento
          </a>
        </div>
      </header>

      <main>
        {/* HERO — foto real à esquerda, texto à direita */}
        <section id="inicio" className="pt-10 pb-16 lg:pt-16 lg:pb-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -left-3 -top-3 bottom-8 w-2 bg-signal" />
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-300">
                  <Image
                    src="/images/hero-tecnico.jpg"
                    alt="Técnico da Elétrica Valdres com furadeira em quadro elétrico"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
                <p className="mt-3 text-xs text-smoke font-medium">
                  Foto de serviço real — técnico em quadro residencial, São Paulo.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <p className="font-cond font-semibold text-signal text-lg tracking-[0.2em] uppercase">
                Oficina técnica urbana
              </p>
              <h1 className="mt-3 font-cond font-bold text-graphite text-[44px] sm:text-6xl lg:text-[76px] leading-[0.95] uppercase tracking-tight">
                Energia feita
                <br />
                por quem está
                <br />
                na obra.
              </h1>
              <p className="mt-6 max-w-md text-lg text-smoke leading-relaxed">
                Instalações, manutenção e ar-condicionado. Sem promessa de
                cartaz: o que a Valdres entrega está nas fotos — e nas 115
                avaliações 5 estrelas no Google.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener"
                  className="flex-1 text-center bg-signal text-white font-semibold text-lg px-6 py-4 hover:brightness-110 active:scale-95 transition"
                >
                  Chamar no WhatsApp
                </a>
                <a
                  href="#servicos"
                  className="flex-1 text-center border-2 border-graphite text-graphite font-semibold text-lg px-6 py-4 hover:bg-graphite hover:text-paper transition"
                >
                  Ver os serviços
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVIÇOS — pauta editorial, sem cards */}
        <section id="servicos" className="py-16 lg:py-24 border-t border-line">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="font-cond font-bold text-graphite text-4xl sm:text-5xl uppercase tracking-tight">
                O que sai da nossa mão
              </h2>
              <span className="text-sm text-smoke font-medium">três frentes, um padrão</span>
            </div>
            <div className="mt-8 border-t-2 border-graphite">
              {[
                ["01", "Instalações elétricas", "Pontos, tomadas, chuveiros e circuitos novos — dimensionados, identificados e testados.", "/images/quadro-id.jpg"],
                ["02", "Manutenção e padrão", "Quadro, medidor e entrada regularizados. O fio certo, no borne certo, no disjuntor certo.", "/images/quadro-obra.jpg"],
                ["03", "Ar-condicionado", "Instalação de split com ponto dedicado e higienização do equipamento.", "/images/post-03.jpg"],
              ].map(([n, t, d, img]) => (
                <div key={t} className="grid sm:grid-cols-12 gap-5 items-center py-8 border-b border-line group">
                  <span className="sm:col-span-1 font-cond font-bold text-4xl text-line group-hover:text-signal transition-colors">{n}</span>
                  <div className="sm:col-span-6">
                    <h3 className="font-cond font-semibold text-2xl sm:text-3xl uppercase text-graphite">{t}</h3>
                    <p className="mt-1.5 text-smoke max-w-md">{d}</p>
                  </div>
                  <div className="sm:col-span-5 relative h-44 overflow-hidden bg-stone-200">
                    <Image src={img} alt={t} fill className="object-cover group-hover:scale-[1.03] transition duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EVIDÊNCIA — o fio queimado */}
        <section className="bg-graphite text-stone-200 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square overflow-hidden">
                <Image src="/images/evidencia-fio.jpg" alt="Fio queimado por mau contato em quadro" fill className="object-cover" />
              </div>
              <p className="mt-3 text-xs text-stone-400">Evidência de campo: aquecimento por mau contato.</p>
            </div>
            <div className="lg:col-span-7">
              <p className="font-cond font-semibold text-signal text-lg tracking-[0.2em] uppercase">Por que chamar um eletricista</p>
              <h2 className="mt-3 font-cond font-bold text-4xl sm:text-5xl uppercase leading-[1.0] tracking-tight text-white">
                Fio queimado não avisa.
                <br />
                Ele só queima.
              </h2>
              <p className="mt-5 max-w-lg text-stone-300 leading-relaxed">
                A própria Valdres alerta: 1 em cada 3 incêndios no Brasil tem
                origem em acidente com eletricidade. Revisão preventiva custa
                menos que reforma depois do prejuízo.
              </p>
              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="mt-7 inline-flex bg-signal text-white font-semibold text-lg px-8 py-4 hover:brightness-110 active:scale-95 transition"
              >
                Pedir uma revisão
              </a>
            </div>
          </div>
        </section>

        {/* PROVA — 115 */}
        <section className="py-16 lg:py-24 border-t border-line">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <div className="font-cond font-bold text-graphite text-[120px] sm:text-[180px] leading-none tracking-tight">
                115<span className="text-signal">×</span>
              </div>
              <p className="mt-2 text-xl text-smoke max-w-md">
                avaliações 5 estrelas no Google. Reputação em elétrica se
                constrói assim: serviço que não volta.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="font-bold text-signal tracking-[0.4em] text-xl">★★★★★</div>
              <p className="mt-2 font-semibold text-graphite">Elétrica Valdres · São Paulo</p>
              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="mt-5 inline-flex bg-graphite text-white font-semibold text-lg px-8 py-4 hover:bg-signal transition"
              >
                (11) 98974-9956
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-graphite text-stone-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <span className="font-cond font-bold text-lg uppercase tracking-wide text-white">
            Elétrica <span className="text-signal">Valdres</span>
          </span>
          <span>São Paulo · Instagram @eletricistavaldres</span>
        </div>
      </footer>

      <a
        href={WA}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fixed bottom-6 left-5 md:left-auto md:right-5 md:bottom-24 z-[60] w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-2xl hover:scale-105 transition"
      >
        ✆
      </a>
    </>
  );
}
