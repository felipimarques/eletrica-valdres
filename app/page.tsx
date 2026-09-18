import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "../components/Reveal";
import { wa } from "../lib/wa";

export const metadata: Metadata = {
  title: "Elétrica Valdres | Eletricista e Ar-Condicionado em São Paulo",
  description:
    "Serviços de elétrica residencial e comercial e ar-condicionado (instalação e manutenção) em São Paulo. Nota 5,0 no Google com 115 avaliações.",
};

const WHATSAPP_ICON = (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-5 w-5 shrink-0"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.9 11.9 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411zm-8.47 18.297h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.456-9.884 9.937-9.884 2.654 0 5.148 1.034 7.024 2.91a9.82 9.82 0 0 1 2.909 6.99c-.003 5.45-4.457 9.885-9.986 9.885z" />
  </svg>
);

const LIGHTNING_ICON = (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-5 w-5"
  >
    <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13l0-8z" />
  </svg>
);

const STAR_ICON = (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-4 w-4 text-secondary"
  >
    <path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.11 6.47L12 17.34 6.19 20.4l1.11-6.47L2.6 9.35l6.5-.95L12 2.5z" />
  </svg>
);

const INSTAGRAM_ICON = (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="h-5 w-5"
  >
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.68A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.41-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
  </svg>
);

const services = [
  {
    title: "Instalações Elétricas",
    body: "Tomadas, iluminação, quadros de distribuição e fiação para residências e comércios, executados conforme a necessidade do imóvel.",
  },
  {
    title: "Ar-Condicionado",
    body: "Instalação e manutenção de ar-condicionado, com avaliação técnica do local antes da execução do serviço.",
  },
  {
    title: "Manutenção Predial",
    body: "Atendimento para manter as instalações elétricas de prédios, lojas e empresas em funcionamento.",
  },
  {
    title: "Atendimento Emergencial",
    body: "Contato direto pelo WhatsApp para situações urgentes envolvendo falhas na instalação elétrica.",
  },
];

const gallery = [
  { src: "/images/ig/post-01.jpg", alt: "Serviço elétrico executado pela Elétrica Valdres" },
  { src: "/images/ig/post-03.jpg", alt: "Instalação elétrica realizada pela Elétrica Valdres" },
  { src: "/images/ig/post-04.jpg", alt: "Quadro elétrico montado pela Elétrica Valdres" },
  { src: "/images/ig/post-06.jpg", alt: "Obra elétrica concluída pela Elétrica Valdres" },
  { src: "/images/ig/post-07.jpg", alt: "Infraestrutura elétrica executada pela Elétrica Valdres" },
  { src: "/images/ig/post-08.jpg", alt: "Serviço de elétrica predial da Elétrica Valdres" },
  { src: "/images/ig/post-09.jpg", alt: "Instalação elétrica comercial da Elétrica Valdres" },
  { src: "/images/ig/post-10.jpg", alt: "Trabalho de elétrica finalizado pela Elétrica Valdres" },
];

const steps = [
  {
    n: "01",
    title: "Contato pelo WhatsApp",
    body: "Você descreve o que precisa e envia fotos do local, se quiser.",
  },
  {
    n: "02",
    title: "Avaliação do serviço",
    body: "Entendemos o escopo e as condições da instalação envolvida.",
  },
  {
    n: "03",
    title: "Orçamento",
    body: "Você recebe a proposta do serviço antes de qualquer execução.",
  },
  {
    n: "04",
    title: "Execução",
    body: "O serviço é realizado conforme o que foi combinado.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Elétrica Valdres",
  image: "/images/ig/post-05.jpg",
  telephone: "+55 11 98974-9956",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "São Paulo",
  },
  sameAs: ["https://instagram.com/eletricistavaldres"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "115",
    bestRating: "5",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-card bg-accent text-white">
              {LIGHTNING_ICON}
            </span>
            <span className="font-display text-base font-bold tracking-tight text-ink sm:text-lg">
              Elétrica Valdres
            </span>
          </a>
          <a
            href={wa.geral}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-card bg-accent px-4 py-2.5 font-display text-sm font-semibold text-white transition-colors hover:bg-accent-dark sm:px-5"
          >
            Orçamento
          </a>
        </div>
      </header>

      <main id="top" className="overflow-hidden">
        {/* HERO */}
        <section className="bg-bg">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:gap-14 md:py-20">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-muted shadow-soft">
                <span className="h-2 w-2 rounded-full bg-accent" />
                São Paulo · Capital
              </span>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                Elétrica e ar-condicionado com quem é da região.
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
                Instalações elétricas residenciais e comerciais, instalação e
                manutenção de ar-condicionado e manutenção predial em São Paulo.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="flex items-center gap-1">
                  {STAR_ICON}
                  {STAR_ICON}
                  {STAR_ICON}
                  {STAR_ICON}
                  {STAR_ICON}
                </span>
                <span className="font-display text-sm font-bold text-ink">
                  5,0
                </span>
                <span className="text-sm text-muted">
                  · 115 avaliações no Google
                </span>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={wa.geral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-card bg-accent px-6 py-3.5 font-display text-sm font-semibold text-white shadow-soft transition-colors hover:bg-accent-dark"
                >
                  {WHATSAPP_ICON}
                  Pedir orçamento
                </a>
                <a
                  href={wa.ar}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-card border border-black/10 bg-white px-6 py-3.5 font-display text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  Orçamento de ar-condicionado
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-card border-[3px] border-accent shadow-lift">
                <Image
                  src="/images/ig/post-05.jpg"
                  alt="Ar-condicionado instalado pela Elétrica Valdres"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="bg-white py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-5">
            <Reveal>
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Serviços
              </p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                O que fazemos
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, i) => (
                <Reveal key={service.title} delay={i * 80}>
                  <article className="h-full rounded-card border border-black/5 bg-bg p-6 shadow-soft transition-shadow hover:shadow-lift">
                    <span className="flex h-10 w-10 items-center justify-center rounded-card bg-accent/10 text-accent">
                      {LIGHTNING_ICON}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-ink">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {service.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section id="trabalhos" className="bg-bg py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-5">
            <Reveal>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
                    Trabalhos reais
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                    Serviços executados
                  </h2>
                </div>
                <a
                  href="https://instagram.com/eletricistavaldres"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-card border border-black/10 bg-white px-4 py-2.5 font-display text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {INSTAGRAM_ICON}
                  @eletricistavaldres
                </a>
              </div>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {gallery.map((photo, i) => (
                <Reveal key={photo.src} delay={(i % 4) * 60}>
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-card border border-black/5 bg-white shadow-soft">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* MÉTODO */}
        <section id="metodo" className="bg-white py-16 md:py-24">
          <div className="mx-auto w-full max-w-6xl px-5">
            <Reveal>
              <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Como funciona
              </p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                Do contato à execução
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <Reveal key={step.n} delay={i * 80}>
                  <div className="h-full rounded-card border border-black/5 bg-bg p-6 shadow-soft">
                    <span className="font-display text-3xl font-extrabold text-accent/25">
                      {step.n}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-bg pb-20 pt-4 md:pb-28">
          <div className="mx-auto w-full max-w-6xl px-5">
            <Reveal>
              <div className="overflow-hidden rounded-card bg-accent px-6 py-12 text-center shadow-lift sm:px-12 md:py-16">
                <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                  Precisa de eletricista ou de ar-condicionado?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85">
                  Fale agora pelo WhatsApp e receba o orçamento do seu serviço em
                  São Paulo.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href={wa.geral}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-card bg-white px-6 py-3.5 font-display text-sm font-semibold text-accent transition-colors hover:bg-white/90"
                  >
                    {WHATSAPP_ICON}
                    Pedir orçamento
                  </a>
                  <a
                    href={wa.urgencia}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-card border border-white/40 px-6 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Atendimento emergencial
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/5 bg-white py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-card bg-accent text-white">
              {LIGHTNING_ICON}
            </span>
            <div>
              <p className="font-display text-base font-bold text-ink">
                Elétrica Valdres
              </p>
              <p className="text-xs text-muted">
                Elétrica e ar-condicionado · São Paulo
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <a
              href={wa.geral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
            >
              {WHATSAPP_ICON}
              WhatsApp
            </a>
            <a
              href="https://instagram.com/eletricistavaldres"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
            >
              {INSTAGRAM_ICON}
              Instagram
            </a>
          </div>
        </div>
        <div className="mx-auto mt-8 w-full max-w-6xl px-5">
          <p className="text-center text-xs text-muted sm:text-left">
            © {new Date().getFullYear()} Elétrica Valdres. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href={wa.geral}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lift transition-transform hover:scale-105"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-7 w-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a11.9 11.9 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411zm-8.47 18.297h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.981.999-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.002-5.45 4.456-9.884 9.937-9.884 2.654 0 5.148 1.034 7.024 2.91a9.82 9.82 0 0 1 2.909 6.99c-.003 5.45-4.457 9.885-9.986 9.885z" />
        </svg>
      </a>
    </>
  );
}
