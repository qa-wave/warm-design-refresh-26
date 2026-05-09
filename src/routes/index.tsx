import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
  FileText,
  Users,
  Calculator,
  Lock,
  Camera,
  MessageCircle,
  FolderLock,
  KeyRound,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import logoUrl from "@/assets/logo.png";
import heroVideo from "@/assets/hero-video.mp4.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <Services />
        <Process />
        <About />
        <ClientZone />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

/* ───────────────────────── Nav ───────────────────────── */

function SiteNav() {
  return (
    <header className="px-5 sm:px-8 md:px-12 pt-6">
      <nav
        aria-label="Hlavní navigace"
        className="max-w-6xl mx-auto flex items-center justify-between gap-4"
      >
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={logoUrl}
            alt="Libuše Stuňová · Účetnictví"
            className="h-16 sm:h-20 md:h-24 w-auto object-contain"
          />
        </a>

        <div className="hidden lg:flex items-center gap-1 card-warm rounded-full px-2 py-1.5">
          {[
            { href: "#sluzby", label: "Služby" },
            { href: "#proces", label: "Jak to chodí" },
            { href: "#o-mne", label: "O mně" },
            { href: "#klientska-zona", label: "Klientská zóna" },
            { href: "#kontakt", label: "Kontakt" },
          ].map((it) => (
            <a
              key={it.href}
              href={it.href}
              className="px-4 py-1.5 text-sm rounded-full text-ink-soft hover:text-ink hover:bg-cream/80 transition"
            >
              {it.label}
            </a>
          ))}
        </div>

        <a
          href="#kontakt"
          className="btn-gold hover:btn-gold-hover rounded-full px-5 sm:px-6 py-3 text-sm font-medium inline-flex items-center gap-2"
        >
          <span className="hidden sm:inline">Domluvit konzultaci</span>
          <span className="sm:hidden">Konzultace</span>
          <ArrowRight className="size-4" />
        </a>
      </nav>
    </header>
  );
}

/* ───────────────────────── Hero ───────────────────────── */

function Hero() {
  return (
    <section id="top" className="px-5 sm:px-8 md:px-12 pt-10 md:pt-14 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Video header band */}
        <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-12 md:mb-16 aspect-[21/9] card-warm">
          <video
            src={heroVideo.url}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, oklch(0.215 0.030 55 / 0.55) 0%, oklch(0.215 0.030 55 / 0.15) 55%, transparent 80%)",
            }}
            aria-hidden
          />
          <div className="absolute inset-0 flex items-end sm:items-center">
            <div className="p-6 sm:p-10 md:p-14 max-w-xl text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/25 px-3 py-1.5 text-[11px] tracking-[0.18em] uppercase mb-4 sm:mb-6">
                <span className="size-1.5 rounded-full bg-gold-light" /> Beru klienty od ledna 2026
              </span>
              <p className="display italic text-2xl sm:text-3xl md:text-4xl leading-[1.1] text-gold-light/95 drop-shadow">
                Postav si nohy nahoru.
              </p>
              <p className="display text-3xl sm:text-5xl md:text-6xl leading-[1.02] mt-1 drop-shadow-md">
                Papíry mám.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          <div className="fade-up inline-flex items-center gap-2 card-warm rounded-full px-4 py-2 mb-8">
            <span className="pulse-dot size-2 rounded-full bg-gold-dark" aria-hidden />
            <span className="text-xs tracking-wide text-ink-soft">
              Účetnictví v Praze 4 · u kafe i online
            </span>
          </div>

          <h1 className="display fade-up-delay-1 text-[2.6rem] sm:text-6xl md:text-7xl leading-[1.02] mb-7 text-ink">
            Účetnictví,
            <br />
              <span className="gold-grad italic">u kterého se nestresuješ.</span>
          </h1>

          <p className="fade-up-delay-2 text-lg md:text-xl text-ink-soft leading-relaxed mb-9 max-w-xl">
              Pro malé firmy a OSVČ, kterým nevyhovuje, když je účetní vidí jen jednou
              ročně. Sednem si k tomu, dáme to dohromady — a celý rok víš, jak na tom jsi.
          </p>

          <div className="fade-up-delay-3 flex flex-wrap gap-3">
            <a
              href="#kontakt"
              className="btn-gold hover:btn-gold-hover rounded-full px-7 py-4 text-[15px] font-medium inline-flex items-center gap-2"
            >
              Domluvit konzultaci <ArrowRight className="size-4" />
            </a>
            <a
              href="#sluzby"
              className="btn-soft hover:btn-soft-hover rounded-full px-7 py-4 text-[15px] font-medium"
            >
              Co všechno řeším
            </a>
          </div>

          <div className="fade-up-delay-4 mt-10 flex items-center gap-5 text-sm text-ink-soft">
            <div className="flex -space-x-1.5">
              {["★", "★", "★", "★", "★"].map((s, i) => (
                <span key={i} className="size-6 rounded-full bg-gold-light/60 text-gold-dark flex items-center justify-center text-[11px]">
                  {s}
                </span>
              ))}
            </div>
            <span>
              <span className="text-ink font-medium">62 klientů</span>, kteří mě nepustí.
            </span>
          </div>
        </div>

        <div className="lg:col-span-5 fade-up-delay-3 relative">
          <div
            className="absolute -inset-10 rounded-[3rem] blur-3xl opacity-70 -z-10"
            style={{ background: "radial-gradient(circle at 60% 40%, var(--gold) 0%, transparent 70%)" }}
            aria-hidden
          />

          <article className="card-warm rounded-[2rem] p-8 md:p-10">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="relative mb-5">
                <div
                  className="absolute inset-0 rounded-full blur-2xl opacity-60"
                  style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)" }}
                  aria-hidden
                />
                <img src={logoUrl} alt="Logo Libuše Stuňová" className="relative size-32 object-contain drop-shadow-[0_8px_24px_oklch(0.566_0.082_67.5/0.35)]" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold-dark mb-2">
                Karta klienta
              </p>
              <h3 className="display text-2xl text-ink">Tvoje papíry,<br />moje starost.</h3>
            </div>

            <ul className="space-y-3 mb-7">
              {[
                "Měsíční report jasně a česky",
                "Doklady stačí poslat fotkou",
                "Daně bez překvapení v březnu",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] text-ink-soft">
                  <Sparkles className="size-4 text-gold-dark mt-1 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gold/20 text-center">
              {[
                { c: "14+", l: "let praxe" },
                { c: "62",  l: "spokoj. klientů" },
                { c: "0",   l: "stresu navíc" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="display gold-grad text-3xl md:text-4xl">{s.c}</p>
                  <p className="text-[11px] uppercase tracking-wider text-ink-soft mt-1">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Services ───────────────────────── */

type Service = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  t: string;
  d: string;
  cena: string;
};

function Services() {
  const items: Service[] = [
    {
      Icon: Calculator,
      t: "Vedení účetnictví",
      d: "Měsíční zpracování od A do Z. Daně, výkazy, kontrolní hlášení — bez toho, abys o tom musel přemýšlet.",
      cena: "od 4 000 Kč / měs.",
    },
    {
      Icon: FileText,
      t: "Daňová evidence",
      d: "Pro OSVČ co preferují jednoduchost. Kompletní evidence, daňové přiznání, přehledy pro tebe.",
      cena: "od 2 500 Kč / měs.",
    },
    {
      Icon: Users,
      t: "Mzdy a personalistika",
      d: "Mzdy, výplatní pásky, evidence zaměstnanců, ELDP. Celé to za tebe vyřídím a vysvětlím.",
      cena: "od 350 Kč / zam.",
    },
  ];
  return (
    <section id="sluzby" className="px-5 sm:px-8 md:px-12 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-14 md:mb-16">
          <p className="text-xs font-medium gold-grad mb-3 tracking-[0.22em] uppercase">
            S čím pomůžu
          </p>
          <h2 className="display text-4xl md:text-6xl text-ink">
            Tvoje papíry, <em className="gold-grad">moje starost</em>.
          </h2>
        </header>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {items.map(({ Icon, t, d, cena }) => (
            <article
              key={t}
              className="card-warm rounded-3xl p-7 md:p-8 transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-24px_oklch(0.566_0.082_67.5/0.40)]"
            >
              <span className="inline-flex size-12 rounded-2xl logo-mark items-center justify-center mb-6">
                <Icon className="size-5" strokeWidth={2} />
              </span>
              <h3 className="display text-2xl mb-3 text-ink">{t}</h3>
              <p className="text-ink-soft leading-relaxed mb-6 text-[15px]">{d}</p>
              <p className="text-sm font-medium gold-grad">{cena}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Process ───────────────────────── */

function Process() {
  const steps = [
    { n: "01", t: "Seznámení",      d: "Sejdeme se v Praze 4 nebo online. Půl hoďky, zdarma. Řekneš mi, co máš, já ti řeknu, co s tím." },
    { n: "02", t: "Nastavení",      d: "Pošleš mi pár dokladů, podepíšeme si plnou moc, převezmu to po tvém starém účetním (i s problémy)." },
    { n: "03", t: "Měsíční rytmus", d: "Posíláš mi doklady (e-mail, fotka, klidně WhatsApp). Já zpracuju, ty schvaluješ, hotovo." },
    { n: "04", t: "Klid",           d: "Žádné překvapení v březnu. Vždycky vidíš, jak na tom jsi a co tě čeká za kvartál." },
  ];
  return (
    <section id="proces" className="px-5 sm:px-8 md:px-12 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-14 md:mb-16">
          <p className="text-xs font-medium gold-grad mb-3 tracking-[0.22em] uppercase">
            Jak to chodí
          </p>
          <h2 className="display text-4xl md:text-5xl text-ink">
            Začínáme <em className="gold-grad">vždycky osobně</em>.
          </h2>
        </header>

        <ol className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
          <div className="hidden md:block absolute left-0 right-0 top-7 h-px hairline-x -z-0" aria-hidden />
          {steps.map((s) => (
            <li key={s.n} className="relative">
              <div className="flex md:block items-center gap-4">
                <span className="relative flex size-14 rounded-full card-warm items-center justify-center mb-0 md:mb-5">
                  <span className="display gold-grad text-xl">{s.n}</span>
                </span>
                <h3 className="display text-xl text-ink md:mb-2">{s.t}</h3>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed mt-3 md:mt-0">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────────────────────── About ───────────────────────── */

function About() {
  return (
    <section id="o-mne" className="px-5 sm:px-8 md:px-12 py-20 md:py-28 scroll-mt-20">
      <div className="max-w-5xl mx-auto card-warm rounded-[2.5rem] p-8 sm:p-12 md:p-16">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="md:col-span-1">
            <div
              className="aspect-square rounded-3xl flex items-center justify-center relative overflow-hidden p-8"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.945 0.058 86) 0%, oklch(0.875 0.060 82) 100%)",
              }}
            >
              <img src={logoUrl} alt="Logo" className="relative z-10 w-full h-full object-contain" />
              <div
                className="absolute inset-0 opacity-30 mix-blend-multiply"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, transparent 30%, oklch(0.566 0.082 67.5 / 0.4) 100%)",
                }}
                aria-hidden
              />
            </div>
            <div className="mt-5 text-center">
              <p className="display text-xl text-ink">Libuše Stuňová</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold-dark mt-1">
                Daňový poradce · 14 let
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs font-medium gold-grad mb-3 tracking-[0.22em] uppercase">
              Ahoj, jsem Libuše
            </p>
            <h2 className="display text-3xl md:text-[2.6rem] leading-[1.05] mb-6 text-ink">
              Účetní, která vysvětluje
              <br />
              <em className="gold-grad">i třikrát</em>, dokud nedává smysl.
            </h2>
            <p className="text-ink-soft leading-relaxed mb-4 text-[15px]">
              Účetnictví dělám 14 let — z toho 9 sama pro malé firmy a OSVČ. Vystudovala
              jsem VŠE, mám platnou daňovou licenci a každý rok aspoň 40 hodin školení,
              aby mi neuteklo, co stát zase změnil.
            </p>
            <p className="text-ink-soft leading-relaxed text-[15px]">
              Co mě baví: když po pár měsících klient přestane stresovat z papírů a
              začne přemýšlet o tom, co fakt umí. To je smysl téhle práce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Client Zone ───────────────────────── */

function ClientZone() {
  const channels = [
    {
      Icon: Camera,
      t: "Vyfoť doklad",
      d: "Stačí fotka mobilem. Posíláš e-mailem, ostatní vyřeším já.",
      tag: "Nejrychlejší",
    },
    {
      Icon: MessageCircle,
      t: "WhatsApp",
      d: "Krátká otázka? Napiš. Odpovídám obvykle do hodiny v pracovní době.",
      tag: "Bez stresu",
    },
    {
      Icon: FolderLock,
      t: "Sdílená složka",
      d: "Pro pravidelné klienty zakládám zabezpečené úložiště s historií.",
      tag: "Pro stálé",
    },
  ];

  return (
    <section
      id="klientska-zona"
      className="px-5 sm:px-8 md:px-12 py-20 md:py-28 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left intro */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium gold-grad mb-3 tracking-[0.22em] uppercase">
              Klientská zóna
            </p>
            <h2 className="display text-4xl md:text-5xl text-ink leading-[1.05] mb-5">
              Tvoje papíry
              <br />
              <em className="gold-grad">na pár kliků</em>.
            </h2>
            <p className="text-ink-soft leading-relaxed text-[15px] mb-8 max-w-md">
              Žádný komplikovaný portál. Pošli mi doklady, jak ti to nejvíc vyhovuje —
              a já se postarám, aby vše bylo na svém místě a včas.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:doklady@stunova.cz"
                className="btn-gold hover:btn-gold-hover rounded-full px-6 py-3 text-sm font-medium inline-flex items-center gap-2"
              >
                <Mail className="size-4" />
                doklady@stunova.cz
              </a>
              <a
                href="#kontakt"
                className="btn-soft hover:btn-soft-hover rounded-full px-6 py-3 text-sm font-medium inline-flex items-center gap-2"
              >
                <KeyRound className="size-4" />
                Chci přístup do složky
              </a>
            </div>

            <p className="mt-6 text-xs text-ink-soft inline-flex items-center gap-2">
              <Lock className="size-3.5 text-gold-dark" />
              Šifrovaný přenos · GDPR · mlčenlivost samozřejmostí
            </p>
          </div>

          {/* Right channels */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div
                className="absolute -inset-8 rounded-[3rem] blur-3xl opacity-50 -z-10"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, var(--gold) 0%, transparent 70%)",
                }}
                aria-hidden
              />

              <div className="card-warm rounded-[2rem] p-3 sm:p-4">
                <ul className="space-y-2">
                  {channels.map(({ Icon, t, d, tag }, i) => (
                    <li
                      key={t}
                      className="group relative flex items-start gap-4 sm:gap-5 rounded-2xl p-5 sm:p-6 transition hover:bg-cream/60"
                    >
                      <span className="inline-flex size-12 shrink-0 rounded-2xl logo-mark items-center justify-center">
                        <Icon className="size-5" strokeWidth={2} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                          <h3 className="display text-xl text-ink">{t}</h3>
                          <span className="text-[10px] uppercase tracking-[0.18em] text-gold-dark bg-gold/10 ring-1 ring-gold/30 rounded-full px-2 py-0.5">
                            {tag}
                          </span>
                        </div>
                        <p className="text-[14.5px] text-ink-soft leading-relaxed">
                          {d}
                        </p>
                      </div>
                      <span className="display gold-grad text-2xl/none opacity-40 group-hover:opacity-100 transition">
                        0{i + 1}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Contact ───────────────────────── */

function Contact() {
  return (
    <section id="kontakt" className="px-5 sm:px-8 md:px-12 py-20 md:py-28 scroll-mt-20">
      <div
        className="max-w-4xl mx-auto rounded-[2.5rem] md:rounded-[3rem] p-10 sm:p-14 md:p-20 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #2a1f12 0%, #5a3825 50%, #8e6f3f 100%)",
          color: "white",
        }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(circle at 30% 20%, #c8a867 0%, transparent 55%)" }}
          aria-hidden
        />
        <div
          className="absolute -bottom-20 -right-10 size-72 rounded-full opacity-20 blur-3xl"
          style={{ background: "#c8a867" }}
          aria-hidden
        />

        <div className="relative">
          <span className="inline-flex size-20 rounded-2xl bg-white/10 backdrop-blur-sm items-center justify-center mb-6 ring-1 ring-white/15 p-3">
            <img src={logoUrl} alt="" className="w-full h-full object-contain" />
          </span>
          <h2 className="display text-4xl md:text-6xl mb-5 leading-[1.05]">
            Sednem si k <em>tvým číslům</em>?
          </h2>
          <p className="text-lg text-[#e0c890] mb-10 max-w-xl mx-auto leading-relaxed">
            Půl hoďky, online nebo v Praze 4, zdarma. Bez závazku. Když si nepadnem do
            oka, doporučím ti někoho jiného.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:libuse@stunova.cz"
              className="inline-flex items-center gap-2 bg-[#c8a867] text-[#2a1f12] rounded-full px-8 py-4 font-medium shadow-2xl hover:bg-[#e0c890] transition"
            >
              <Mail className="size-4" />
              libuse@stunova.cz
            </a>
            <a
              href="tel:+420728000000"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 font-medium text-white/90 ring-1 ring-white/25 hover:bg-white/10 transition"
            >
              <Phone className="size-4" />
              +420 728 ••• •••
            </a>
          </div>

          <p className="text-xs text-[#bcae93] mt-8 tracking-wide">
            po–pá · 9–17 · IČO 40254186
          </p>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */

function SiteFooter() {
  return (
    <footer className="px-5 sm:px-8 md:px-12 pb-10 pt-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center text-sm text-ink-soft">
        <span>© Libuše Stuňová · Účetnictví · {new Date().getFullYear()}</span>
        <span className="display italic">Variant · Warm</span>
      </div>
    </footer>
  );
}
