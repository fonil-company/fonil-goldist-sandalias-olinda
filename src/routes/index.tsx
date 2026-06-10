import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  Menu,
  X,
  Play,
  ArrowRight,
  TrendingUp,
  RefreshCw,
  ShoppingBag,
  Wallet,
  Users,
  Package,
  CheckCircle2,
  Instagram,
  Phone,
  MapPin,
  Award,
  Truck,
  Building2,
  Headphones,
  Sparkles,
} from "lucide-react";

import logoAsset from "@/assets/gol distribuidora logo.webp";
import olindaAsset from "@/assets/Olinda logo.png";
import lojistaImg from "@/assets/lojista.jpg";
import empresaImg from "@/assets/empresa.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gol Distribuidora — Distribuição exclusiva para lojistas" },
      {
        name: "description",
        content:
          "Amplie o mix da sua loja com produtos de alto giro, excelente aceitação e rentabilidade real. Atendimento regional no Nordeste há mais de 10 anos.",
      },
      { property: "og:title", content: "Gol Distribuidora — Distribuição exclusiva para lojistas" },
      {
        property: "og:description",
        content: "Produtos de alto giro, logística eficiente e atendimento próximo para lojistas do Nordeste.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { src: "https://elfsightcdn.com/platform.js", async: true }
    ],
  }),
  component: LandingPage,
});

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Quero%20falar%20com%20um%20consultor%20Gol%20Distribuidora";
const INSTAGRAM_URL = "https://instagram.com/goldistribuidora";

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <LeadForm />
        <VSL />
        <Benefits />
        <About />
        <InstagramSection />
        <Authority />
        <FinalCTA />
        <LeadForm id="contato" />
      </main>
      <Footer />
    </div>
  );
}

/* -------------------- HEADER -------------------- */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#quem-somos", label: "Quem Somos" },
    { href: "#beneficios", label: "Benefícios" },
    { href: "#instagram", label: "Instagram" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-18 md:h-20 flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img src={logoAsset} alt="Gol Distribuidora" className="h-10 md:h-12 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contato" className="btn-accent">
            Falar com um consultor
            <ArrowRight className="size-4" />
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          className="lg:hidden p-2 rounded-md text-foreground"
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-foreground/90 hover:bg-muted font-medium"
              >
                {l.label}
              </a>
            ))}
            <a href="#contato" onClick={() => setOpen(false)} className="btn-accent mt-2 justify-center">
              Falar com um consultor
            </a>
          </div>
        </div>
      )}

      <style>{`
        .btn-accent {
          display: inline-flex; align-items: center; gap: .5rem;
          background: var(--accent); color: var(--accent-foreground);
          padding: .75rem 1.25rem; border-radius: 12px;
          font-weight: 600; font-size: .9rem;
          box-shadow: var(--shadow-accent);
          transition: transform .2s ease, box-shadow .2s ease, filter .2s ease;
        }
        .btn-accent:hover { transform: translateY(-1px); filter: brightness(1.05); }
        .btn-primary {
          display: inline-flex; align-items: center; gap: .5rem;
          background: var(--primary); color: var(--primary-foreground);
          padding: .85rem 1.4rem; border-radius: 12px;
          font-weight: 600; font-size: .95rem;
          box-shadow: var(--shadow-glow);
          transition: transform .2s ease, filter .2s ease;
        }
        .btn-primary:hover { transform: translateY(-1px); filter: brightness(1.08); }
        .btn-ghost {
          display: inline-flex; align-items: center; gap: .5rem;
          background: transparent; color: var(--foreground);
          padding: .85rem 1.4rem; border-radius: 12px;
          font-weight: 600; font-size: .95rem;
          border: 1px solid var(--border);
          transition: background .2s ease, border-color .2s ease;
        }
        .btn-ghost:hover { background: var(--muted); border-color: var(--primary); }
      `}</style>
    </header>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-36 pb-20 md:pb-28 gradient-hero overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="size-3.5" />
            Exclusividade Gol Distribuidora
          </span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.05] text-foreground">
            Uma linha exclusiva de <span className="text-primary">sandálias</span> para lojistas que querem{" "}
            <span className="text-accent">vender mais</span> e lucrar melhor.
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Descubra como ampliar seu mix com produtos de alta aceitação, excelente giro e potencial de
            rentabilidade real para a sua loja.
          </p>

          <div className="mt-5 inline-flex items-center gap-2.5 text-sm font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-200 dark:border-emerald-500/20 shadow-sm">
            <Truck className="size-4" />
            Frete grátis para o Piauí, Maranhão, Tocantins e Ceará
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Marcas em destaque
            </span>
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-28 items-center justify-center rounded-2xl border border-border bg-card px-4 shadow-soft">
                <img
                  src={logoAsset}
                  alt="Gol Distribuidora"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="flex h-14 w-28 items-center justify-center rounded-2xl border border-border bg-card px-4 shadow-soft">
                <img src={olindaAsset} alt="Olinda" className="h-8 w-auto object-contain" />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#vsl" className="btn-primary justify-center">
              <Play className="size-4 fill-current" />
              Assistir ao vídeo
            </a>
            <a href="#contato" className="btn-ghost justify-center">
              Falar com um consultor
              <ArrowRight className="size-4" />
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5">
            {[
              { n: "+10", l: "anos de mercado" },
              { n: "100%", l: "Distribuição exclusiva" },
              { n: "NE", l: "Atendimento regional" },
              { n: "+1k", l: "lojistas atendidos" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-display font-extrabold text-primary">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-tight">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-8 -right-6 size-72 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-6 size-72 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card border border-border bg-card">
              <img
                src={lojistaImg}
                alt="Lojista satisfeita em sua loja"
                width={1024}
                height={1024}
                className="w-full h-[460px] md:h-[560px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            <div className="absolute -bottom-8 -left-4 sm:-left-10 bg-card rounded-2xl shadow-card p-3 sm:p-4 border border-border animate-float">
              <img
                src={olindaAsset}
                alt="Sandálias Olinda"
                className="size-20 sm:size-24 object-contain"
              />
            </div>

            <div className="absolute top-6 -right-3 sm:-right-6 bg-card rounded-2xl shadow-card border border-border px-4 py-3 flex items-center gap-3">
              <div className="size-10 rounded-xl bg-accent-soft text-accent flex items-center justify-center">
                <TrendingUp className="size-5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Giro alto</div>
                <div className="text-sm font-semibold">o ano inteiro</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- VSL -------------------- */
function VSL() {
  return (
    <section id="vsl" className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-5xl px-5 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold uppercase tracking-wider">
          Vídeo exclusivo
        </span>
        <h2 className="mt-5 text-3xl md:text-5xl font-display font-extrabold leading-tight text-foreground max-w-3xl mx-auto">
          Conheça a Gol distribuidora
        </h2>

        <div className="mt-12 relative rounded-2xl overflow-hidden shadow-card border border-border bg-primary aspect-video">
          <iframe
            src="https://www.youtube.com/embed/5MnWu0N5LRk"
            title="INSTITUCIONAL GOL DISTRIBUIDORA site 13 10"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
          <div className="absolute bottom-5 left-5 right-5 text-left text-white/90 text-sm font-medium pointer-events-none">
            Apresentação Gol Distribuidora · vídeo institucional
          </div>
        </div>

        <p className="mt-10 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Em poucos minutos você entenderá como alguns lojistas estão construindo um mix mais inteligente e
          aproveitando oportunidades que geram vendas recorrentes.
        </p>

        <a href="#contato" className="btn-accent mt-8 justify-center">
          Quero falar com um consultor
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

/* -------------------- BENEFITS -------------------- */
function Benefits() {
  const items = [
    { icon: TrendingUp, title: "Mais oportunidades de venda", text: "Categorias que abrem espaço para tickets maiores e ampliam o potencial da sua loja." },
    { icon: RefreshCw, title: "Maior frequência de reposição", text: "Produtos que saem rápido, geram giro constante e mantêm a operação ativa." },
    { icon: ShoppingBag, title: "Procurados o ano inteiro", text: "Demanda recorrente que não depende de sazonalidade para acontecer." },
    { icon: Wallet, title: "Melhor aproveitamento do estoque", text: "Capital de giro otimizado e menor risco de parada em prateleira." },
    { icon: Users, title: "Mais variedade ao cliente", text: "Mix robusto que aumenta o tempo na loja e o valor médio de compra." },
    { icon: Package, title: "Previsibilidade de compras", text: "Planejamento mais claro com curva de vendas estável e consistente." },
  ];
  return (
    <section id="beneficios" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold uppercase tracking-wider">
            Benefícios reais
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-display font-extrabold leading-tight">
            O que uma categoria de <span className="text-primary">alto giro</span> pode fazer pela sua loja
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group bg-card rounded-2xl p-7 border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="size-12 rounded-xl bg-primary-soft text-primary grid place-items-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                <Icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-display font-extrabold leading-snug">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- ABOUT -------------------- */
function About() {
  return (
    <section id="quem-somos" className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 rounded-3xl bg-primary/10 blur-2xl pointer-events-none" />
          <div className="relative rounded-3xl overflow-hidden shadow-card border border-border">
            <img
              src={empresaImg}
              alt="Estrutura Gol Distribuidora"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full h-[420px] md:h-[520px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 right-4 bg-card rounded-2xl shadow-card border border-border px-5 py-4 flex items-center gap-3">
            <div className="size-11 rounded-xl bg-accent text-accent-foreground grid place-items-center">
              <Award className="size-5" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Mais de</div>
              <div className="text-sm font-display font-extrabold">10 anos de mercado</div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold uppercase tracking-wider">
            Quem é a Gol
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-display font-extrabold leading-tight">
            Há mais de uma década ajudando lojistas a <span className="text-primary">crescer</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            A Gol Distribuidora conecta grandes marcas a milhares de lojistas no Nordeste, oferecendo atendimento
            próximo, logística eficiente e oportunidades reais para o varejo.
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-3">
            {[
              "Atendimento especializado",
              "Distribuição exclusiva",
              "Logística eficiente",
              "Grandes marcas parceiras",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-3">
                <CheckCircle2 className="size-5 text-accent shrink-0" />
                <span className="text-sm font-medium">{t}</span>
              </li>
            ))}
          </ul>

          <a href="#contato" className="btn-primary mt-8">
            Quero conhecer a Gol
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------- INSTAGRAM -------------------- */
function InstagramSection() {
  return (
    <section id="instagram" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-soft text-accent text-xs font-semibold uppercase tracking-wider">
            <Instagram className="size-3.5" />
            @goldistribuidora
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-display font-extrabold leading-tight">
            Acompanhe nossas novidades no Instagram
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Siga nosso perfil e fique por dentro das últimas tendências, reposições e oportunidades exclusivas.
          </p>
        </div>

        <div className="mt-12 bg-card border border-border rounded-3xl p-8 md:p-12 shadow-soft text-center flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden">
          {/* Decorative background blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative w-full z-10 animate-fade-up">
            <div className="elfsight-app-d9162a5b-67ed-4fad-a1ae-e4bf70ff77b3" data-elfsight-app-lazy></div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="btn-primary">
            <Instagram className="size-4" />
            Ver perfil completo no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

/* -------------------- AUTHORITY -------------------- */
function Authority() {
  const items = [
    { icon: Award, title: "+10 anos de mercado" },
    { icon: MapPin, title: "Presença regional" },
    { icon: Building2, title: "Grandes marcas" },
    { icon: Users, title: "Equipe especializada" },
    { icon: Headphones, title: "Atendimento próximo" },
    { icon: Truck, title: "Logística eficiente" },
  ];
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold uppercase tracking-wider">
            Autoridade
          </span>
          <h2 className="mt-5 text-3xl md:text-5xl font-display font-extrabold leading-tight">
            Por que tantos lojistas escolhem a <span className="text-primary">Gol</span>?
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="bg-card rounded-2xl border border-border shadow-soft p-5 flex flex-col items-center text-center gap-3 hover:-translate-y-1 hover:shadow-card transition-all"
            >
              <div className="size-14 rounded-2xl bg-primary text-primary-foreground grid place-items-center">
                <Icon className="size-6" />
              </div>
              <div className="text-sm font-semibold leading-snug">{title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FINAL CTA -------------------- */
function FinalCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden gradient-cta p-10 md:p-16 text-center text-white shadow-glow">
          <div className="absolute -top-20 -right-20 size-72 rounded-full bg-accent/30 blur-3xl pointer-events-none" />
          <h2 className="text-3xl md:text-5xl font-display font-extrabold leading-tight max-w-3xl mx-auto">
            Pronto para conhecer uma nova oportunidade para sua loja?
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/85 max-w-2xl mx-auto">
            Converse com nossa equipe e descubra como ampliar seu mix com produtos que combinam giro, aceitação
            e rentabilidade.
          </p>
          <div className="mt-8 flex justify-center">
            <a href="#contato" className="btn-accent">
              Quero falar com um consultor
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FORM -------------------- */
function LeadForm({ id }: { id?: string }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", cnpj: "", email: "", estado: "", cidade: "", whatsapp: "" });
  const [cidades, setCidades] = useState<{ id: number; nome: string }[]>([]);

  useEffect(() => {
    if (!form.estado) {
      setCidades([]);
      return;
    }
    const uf = form.estado;
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a: any, b: any) => a.nome.localeCompare(b.nome));
        setCidades(sorted);
      })
      .catch((err) => console.error(err));
  }, [form.estado]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.nome.trim() || !form.whatsapp.trim()) return;
    const msg = `Olá! Sou ${form.nome} (CNPJ: ${form.cnpj}) de ${form.cidade}-${form.estado}. E-mail: ${form.email}. WhatsApp: ${form.whatsapp}. Quero falar com um consultor da Gol Distribuidora.`;
    window.open(`${WHATSAPP_URL}&text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  const upd = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id={id} className="py-20 md:py-28 bg-surface">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-soft text-primary text-xs font-semibold uppercase tracking-wider">
              Solicite contato
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl font-display font-extrabold leading-tight">
              Receba o catálogo e atendimento personalizado
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Preencha o formulário e um consultor regional entrará em contato com as melhores oportunidades para
              o seu mix.
            </p>

            <div className="mt-8 space-y-3 text-sm">
              <div className="flex items-center gap-3 text-foreground/80">
                <Phone className="size-4 text-primary" /> Atendimento por WhatsApp
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <MapPin className="size-4 text-primary" /> Cobertura no Ceará, Maranhão, Piauí e Tocantins
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <CheckCircle2 className="size-4 text-accent" /> Resposta em até 1 dia útil
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 bg-card border border-border rounded-3xl p-7 md:p-9 shadow-card"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Nome" value={form.nome} onChange={upd("nome")} required placeholder="Seu nome completo" />
              <Field label="CNPJ" value={form.cnpj} onChange={upd("cnpj")} placeholder="00.000.000/0000-00" />
              <Field label="E-mail" value={form.email} onChange={upd("email")} type="email" placeholder="seu@email.com" />
              
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Estado <span className="text-accent">*</span>
                </span>
                <select
                  value={form.estado}
                  onChange={upd("estado")}
                  required
                  className="mt-1.5 w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
                >
                  <option value="" disabled>Selecione</option>
                  <option value="CE">Ceará (CE)</option>
                  <option value="MA">Maranhão (MA)</option>
                  <option value="PI">Piauí (PI)</option>
                  <option value="TO">Tocantins (TO)</option>
                </select>
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Cidade <span className="text-accent">*</span>
                </span>
                <select
                  value={form.cidade}
                  onChange={upd("cidade")}
                  required
                  disabled={!form.estado || cidades.length === 0}
                  className="mt-1.5 w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition disabled:opacity-50"
                >
                  <option value="" disabled>
                    {form.estado ? (cidades.length ? "Selecione a cidade" : "Carregando...") : "Selecione o estado"}
                  </option>
                  {cidades.map((c) => (
                    <option key={c.id} value={c.nome}>{c.nome}</option>
                  ))}
                </select>
              </label>

              <Field label="WhatsApp" value={form.whatsapp} onChange={upd("whatsapp")} required placeholder="(00) 00000-0000" />
            </div>

            <button type="submit" className="btn-accent w-full justify-center mt-6 py-3.5 text-base">
              Solicitar atendimento
              <ArrowRight className="size-4" />
            </button>

            {sent && (
              <p className="mt-4 text-sm text-primary flex items-center gap-2">
                <CheckCircle2 className="size-4" /> Pedido enviado! Estamos te redirecionando ao WhatsApp.
              </p>
            )}

            <p className="mt-4 text-xs text-muted-foreground text-center">
              Seus dados são tratados com sigilo e usados apenas para contato comercial.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label, value, onChange, placeholder, required, type = "text"
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        maxLength={120}
        className="mt-1.5 w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
      />
    </label>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  return (
    <footer className="bg-foreground text-white/80">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <div className="bg-white inline-block rounded-xl p-3">
            <img src={logoAsset} alt="Gol Distribuidora" className="h-10 w-auto" />
          </div>
          <p className="mt-5 text-sm text-white/70 max-w-md leading-relaxed">
            Conectando grandes marcas a milhares de lojistas no Nordeste com atendimento próximo, logística
            eficiente e oportunidades reais para o varejo.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="size-10 grid place-items-center rounded-xl bg-white/10 hover:bg-accent hover:text-accent-foreground transition"
            >
              <Instagram className="size-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white text-sm font-display font-extrabold uppercase tracking-wider">Institucional</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#quem-somos" className="hover:text-accent transition">Quem Somos</a></li>
            <li><a href="#beneficios" className="hover:text-accent transition">Benefícios</a></li>
            <li><a href="#instagram" className="hover:text-accent transition">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Gol Distribuidora. Todos os direitos reservados.</p>
          <p>Distribuição exclusiva · Atendimento regional no Nordeste</p>
        </div>
      </div>
    </footer>
  );
}
