"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Shield,
  Heart,
  Zap,
  Settings,
  Bug,
  TrendingDown,
  PackageX,
  Leaf,
  Wrench,
  Power,
  Clock,
  Users,
  ChevronDown,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

function HexagonIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z" />
    </svg>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HexagonIcon className="w-7 h-7 text-accent" />
          <span className="font-semibold text-lg tracking-tight">BeesVitae</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#o-produkte" className="text-muted-foreground hover:text-foreground transition-colors">
            O produkte
          </a>
          <a href="#vyhody" className="text-muted-foreground hover:text-foreground transition-colors">
            Výhody
          </a>
          <a href="#ako-to-funguje" className="text-muted-foreground hover:text-foreground transition-colors">
            Ako to funguje
          </a>
          <a href="#studie" className="text-muted-foreground hover:text-foreground transition-colors">
            Štúdie
          </a>
          <a href="#kontakt" className="text-muted-foreground hover:text-foreground transition-colors">
            Kontakt
          </a>
        </nav>
        <Button asChild size="sm" className="hidden md:inline-flex">
          <a href="#kontakt">Kontaktujte nás</a>
        </Button>
      </div>
    </header>
  );
}

function HeroSection() {
  const scrollToContent = () => {
    document.getElementById("o-produkte")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/images/hero-bees.jpg"
          alt="Včely na pláste"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-muted-foreground mb-8">
          <HexagonIcon className="w-4 h-4 text-accent" />
          <span>Ultrazvuková ochrana proti varroáze</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-balance leading-tight mb-6">
          BeesVitae – Koniec varroázy bez chemikálií
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Inovatívna ultrazvuková technológia na elimináciu klieštika Varroa destructor. Vedecky overená metóda, ktorá chráni včely bez použitia škodlivých chemických látok.
        </p>

        <Button size="lg" className="px-8 py-6 text-base" onClick={scrollToContent}>
          Zistiť viac
          <ChevronDown className="ml-2 w-5 h-5" />
        </Button>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="o-produkte" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">O produkte</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2 mb-6 text-balance">
              Ultrazvuková technológia proti Varroa destructor
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              BeesVitae využíva vysokofrekvenčné ultrazvukové vlny na elimináciu klieštika Varroa destructor - najväčšej hrozby pre včelstvá na celom svete. Táto revolučná metóda bola vyvinutá na základe výskumu University College Cork v Írsku.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Na rozdiel od tradičných chemických metód, ultrazvuk stimuluje včely k prirodzenému čistiacemu správaniu, pri ktorom aktívne odstraňujú roztočov zo seba navzájom - bez akýchkoľvek vedľajších účinkov na včely alebo kontaminácie medu.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Vedecké štúdie preukázali dramatický nárast vypadávania roztočov už po 30 minútach ultrazvukového ošetrenia, pričom účinok pretrváva aj po vypnutí zariadenia.
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden border border-border">
              <img
                src="/images/beevitae-device.jpg"
                alt="BeesVitae zariadenie"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, label: "Ochrana" },
                { icon: Heart, label: "Zdravie" },
                { icon: Zap, label: "Efektivita" },
                { icon: Settings, label: "Technológia" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-lg p-6 flex flex-col items-center text-center hover:border-accent/50 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-accent mb-3" />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const problems = [
    {
      icon: Bug,
      title: "Varroa destructor",
      description: "Roztoč Varroa je označovaný včelármi celosvetovo ako najzávažnejší problém. Oslabuje včely konzumáciou ich tukového telieska a prenáša vírus deformovaných krídel (DWV).",
    },
    {
      icon: TrendingDown,
      title: "Kolaps kolónií",
      description: "Varroa prispieva k ničivému kolapsu kolónií (CCD), ktorý spôsobuje masívne straty včelstiev po celom svete a ohrozuje globálne poľnohospodárstvo.",
    },
    {
      icon: PackageX,
      title: "Problémy s chemikáliami",
      description: "Tradičné pesticídy majú vedľajšie účinky, zanechávajú zvyšky v mede a vosku. Roztoče si navyše vyvíjajú rezistenciu voči týmto látkam.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Problém</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2 text-balance">
              Prečo je varroáza taký vážny problém?
            </h2>
            <p className="text-muted-foreground mt-4">
              Hodnota opeľovania včelami sa odhaduje na viac ako 155 miliárd EUR ročne. Až 84% pestovaných druhov zeleniny v Európe je závislých od včiel na opeľovanie.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-border">
            <img
              src="/images/bee-closeup.jpg"
              alt="Zdravá včela zbierajúca peľ"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-8">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <problem.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-lg font-medium mb-3">{problem.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionSection() {
  const solutions = [
    {
      icon: Zap,
      title: "Ultrazvukové vlny",
      description: "Vysokofrekvenčné ultrazvukové vlny priamo dráždia roztoče Varroa a stimulujú včely k samoošetrovaniu a vzájomnému čisteniu.",
    },
    {
      icon: Settings,
      title: "Vedecky overené",
      description: "Výskum na University College Cork preukázal dramatický nárast vypadávania roztočov už po 30 minútach ultrazvukového ošetrenia.",
    },
    {
      icon: Heart,
      title: "Bezpečné pre včely",
      description: "Testy potvrdili, že včely vystavené ultrazvuku vykazujú normálne správanie - chodia, čistia sa a kŕmia sa bez akéhokoľvek stresu.",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-xl overflow-hidden border border-border">
            <img
              src="/images/healthy-bees.jpg"
              alt="Zdravé včely pracujúce na pláste"
              className="w-full h-72 object-cover"
            />
          </div>
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Riešenie</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2 text-balance">
              Ako ultrazvuk eliminuje Varroa?
            </h2>
            <p className="text-muted-foreground mt-4">
              BeesVitae využíva rovnakú technológiu, akú vyvinuli vedci na University College Cork - ultrazvuk stimuluje prirodzené obranné správanie včiel.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <div
              key={i}
              className="group relative bg-card border border-border rounded-lg p-8 hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <solution.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-medium mb-3">{solution.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: Leaf,
      title: "Bez chemikálií",
      description: "Úplne ekologické riešenie bez použitia škodlivých chemických látok, ktoré môžu kontaminovať med a poškodiť včely.",
    },
    {
      icon: TrendingDown,
      title: "Zvýšená produktivita",
      description: "Zdravé včelstvá bez parazitov produkujú viac medu a sú odolnejšie voči chorobám a environmentálnym stresom.",
    },
    {
      icon: Shield,
      title: "Dlhodobé úspory",
      description: "Investícia do BeesVitae sa rýchlo vráti vďaka úsporám na chemických prípravkoch a vyššej produktivite včelstiev.",
    },
    {
      icon: Heart,
      title: "Šetrné k životnému prostrediu",
      description: "Prispievate k ochrane ekosystému a udržateľnému včelárstvu bez negatívneho vplyvu na prírodu.",
    },
  ];

  return (
    <section id="vyhody" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">
            Výhody BeesVitae
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2 text-balance">
            Prečo si vybrať ultrazvukovú ochranu?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <div key={i} className="flex gap-5 bg-card border border-border rounded-lg p-6">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      icon: Wrench,
      step: "1",
      title: "Inštalácia do úľa",
      description: "Zariadenie BeesVitae jednoducho umiestnite do úľa. Nevyžaduje žiadne špeciálne úpravy ani nástroje.",
    },
    {
      icon: Power,
      step: "2",
      title: "Ultrazvukové ošetrenie",
      description: "Zariadenie generuje vysokofrekvenčné ultrazvukové vlny, ktoré dráždia roztoče a stimulujú včely k čistiacemu správaniu.",
    },
    {
      icon: Clock,
      step: "3",
      title: "Kontinuálna ochrana",
      description: "Účinok pretrváva aj po vypnutí - včely pokračujú v odstraňovaní roztočov vďaka aktivovanému čistiacemu inštinktu.",
    },
  ];

  return (
    <section id="ako-to-funguje" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Ako to funguje</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2 text-balance">
            Jednoduchý princíp, overené výsledky
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Ultrazvukové vlny stimulujú samoošetrovanie a aloošetrovanie - včely aktívne odstraňujú roztoče zo seba aj navzájom.
          </p>
        </div>

        <div className="mb-12 rounded-xl overflow-hidden border border-border">
          <img
            src="/images/ultrasound-tech.jpg"
            alt="BeeVitae zariadenie v úli"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-foreground" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                  {step.step}
                </span>
              </div>
              <h3 className="text-lg font-medium mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScienceSection() {
  const facts = [
    {
      number: "155+",
      unit: "miliárd EUR",
      description: "Hodnota opeľovania včelami pre svetovú ekonomiku ročne",
    },
    {
      number: "84%",
      unit: "plodín",
      description: "Európskych pestovaných druhov zeleniny závislých od včiel",
    },
    {
      number: "30",
      unit: "minút",
      description: "Stačí na dramatický nárast vypadávania roztočov z úľa",
    },
    {
      number: "0",
      unit: "chemikálií",
      description: "Žiadne vedľajšie účinky ani kontaminácia medu",
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Vedecké pozadie</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2 mb-4 text-balance">
            Overené výskumom, potvrdené praxou
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Technológia BeesVitae vychádza z výskumu realizovaného na University College Cork v Írsku. Vedci preukázali, že vysokofrekvenčné ultrazvukové vlny prenášané vzduchom efektívne kontrolujú populácie roztočov Varroa bez akéhokoľvek negatívneho vplyvu na včely.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {facts.map((fact, i) => (
            <div key={i} className="text-center p-6 bg-card border border-border rounded-lg">
              <div className="text-3xl md:text-4xl font-bold text-accent">{fact.number}</div>
              <div className="text-sm font-medium text-foreground">{fact.unit}</div>
              <p className="text-xs text-muted-foreground mt-2">{fact.description}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-xl overflow-hidden border border-border">
            <img
              src="/images/apiary.jpg"
              alt="Včelnica s úľmi v prírode"
              className="w-full h-72 object-cover"
            />
          </div>
          <div className="bg-secondary/50 rounded-xl p-8">
            <blockquote className="text-lg italic text-muted-foreground">
              &quot;Predbežné výsledky experimentov v úli naznačujú významný nárast miery padania roztočov Varroa už po 30 minútach vystavenia ultrazvuku, pričom účinok pretrváva aj po vypnutí ultrazvukového systému.&quot;
            </blockquote>
            <p className="text-sm text-muted-foreground mt-4">
              — Výskum University College Cork, Írsko
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StudiesSection() {
  const studies = [
    {
      title: "Použitie ultrazvuku na kontrolu roztočov Varroa destructor v úľoch",
      authors: "University College Cork, Írsko",
      year: "2021",
      description: "Výskum preukázal, že vysokofrekvenčné ultrazvukové vlny stimulujú včely k hygienickému správaniu a dramaticky zvyšujú vypadávanie roztočov.",
      link: "/docs/ultrazvuk-varroa-ucc.pdf",
      type: "PDF štúdia",
    },
    {
      title: "Ultrazvuková metoda boje proti Varroáze",
      authors: "Prof. Dr. hab. Marian Surowiec, Vysoká škola technická v Katoviciach",
      year: "2021",
      description: "Ultrazvukový spad je až 15-krát vyšší než prirodzený spad Varroa. Približne 84% spadnutých roztočov vykazuje známky podvýživy.",
      link: "https://www.varroaza.cz/ultrazvukova-metoda-boje-proti-varroaze",
      type: "Odborný článok",
    },
    {
      title: "Varroa Sensitive Hygiene (VSH) - Breeding bees for resistance to Varroa",
      authors: "J.W. Harris, USDA-ARS Honey Bee Lab",
      year: "2007",
      description: "Popis schopnosti včiel detekovať a eliminovať napadené larvy z plástov - kľúčový mechanizmus, ktorý ultrazvuk stimuluje.",
      link: "https://honeybee.org.au/wp-content/uploads/2024/05/AGF575-Breeding-S3V2.pdf",
      type: "Vedecká publikácia",
    },
    {
      title: "Behavioral defenses of honey bees against Varroa jacobsoni",
      authors: "O. Boecking, M. Spivak",
      year: "1999",
      description: "Základný výskum autogroomingu a allogroomingu - samoošetrovania a vzájomného čistenia včiel.",
      link: "https://scispace.com/pdf/behavioral-defenses-of-honey-bees-against-varroa-jacobsoni-3cqnzli2os.pdf",
      type: "Vedecká publikácia",
    },
  ];

  const keyFindings = [
    {
      stat: "15x",
      label: "vyšší spad roztočov",
      description: "Ultrazvukový spad je až 15-krát vyšší ako prirodzený spad Varroa",
    },
    {
      stat: "84%",
      label: "anorektických roztočov",
      description: "Väčšina spadnutých roztočov má deformovaný brušný štít - znak podvýživy",
    },
    {
      stat: "81,8",
      label: "kusov/hodinu",
      description: "Hodinový spad Varroa pri ultrazvukovej stimulácii vs. 7,6 pri kontrolnej skupine",
    },
  ];

  return (
    <section id="studie" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Štúdie a literatúra</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2 mb-4 text-balance">
            Vedecky podložená metóda
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Ultrazvuková technológia BeesVitae vychádza z výskumu popredných svetových inštitúcií. Tu nájdete kľúčové štúdie a publikácie, ktoré dokazujú účinnosť tejto metódy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {keyFindings.map((finding, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-accent mb-1">{finding.stat}</div>
              <div className="text-sm font-medium text-foreground mb-2">{finding.label}</div>
              <p className="text-xs text-muted-foreground">{finding.description}</p>
            </div>
          ))}
        </div>

        <div className="space-y-4 mb-12">
          {studies.map((study, i) => (
            <a
              key={i}
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-card border border-border rounded-lg p-6 hover:border-accent/50 transition-colors group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded">{study.type}</span>
                    <span className="text-xs text-muted-foreground">{study.year}</span>
                  </div>
                  <h3 className="text-lg font-medium mb-1 group-hover:text-accent transition-colors">{study.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{study.authors}</p>
                  <p className="text-sm text-muted-foreground">{study.description}</p>
                </div>
                <div className="flex items-center text-accent">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="bg-card border border-border rounded-xl p-8">
          <h3 className="text-lg font-medium mb-4">Kľúčové zistenia z výskumu</h3>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Ultrazvukové vlny narušujú výživový mechanizmus roztočov - rozkmitávajú ich sacie ústrojenstvo</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Stimulovaný roztoč sa stáva oscilátorom, ktorý dráždi včelu k hygienickému správaniu (VSH)</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Včely agresívne odstraňujú parazitov - spôsobujú im trvalé poškodenia končatín a štítov</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Metóda je aplikovateľná vo všetkých fázach vývoja včelstva bez vplyvu na produktivitu</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
              <span>Mladé včely (mladušky) útočia na roztoče ešte pred vylíhnutím z buňky</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function TargetAudienceSection() {
  const audiences = [
    {
      icon: Users,
      title: "Včelári",
      description: "Či už ste začiatočník alebo skúsený včelár, BeeVitae vám pomôže chrániť vaše včelstvá.",
    },
    {
      icon: Leaf,
      title: "Farmy",
      description: "Ideálne riešenie pre poľnohospodárske farmy s väčším počtom úľov.",
    },
    {
      icon: Heart,
      title: "Ekologické projekty",
      description: "Podporujeme udržateľné včelárstvo a ochranu životného prostredia.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-wider">Pre koho je určené</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2 text-balance">
              BeesVitae je pre všetkých, ktorým záleží na včelách
            </h2>
          </div>
          <div className="rounded-xl overflow-hidden border border-border">
            <img
              src="/images/beekeeper.jpg"
              alt="Včelár kontroluje úle"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <audience.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-medium mb-3">{audience.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Ďakujeme za vašu správu! Čoskoro vás budeme kontaktovať.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="kontakt" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm text-muted-foreground uppercase tracking-wider">Kontakt</span>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2 mb-4 text-balance">
            Kontaktujte nás
          </h2>
          <p className="text-muted-foreground">
            Máte otázky? Radi vám pomôžeme. Napíšte nám a ozveme sa vám čo najskôr.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Meno
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Vaše meno"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-mail
              </label>
              <Input
                id="email"
                type="email"
                placeholder="vas@email.sk"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Správa
            </label>
            <Textarea
              id="message"
              placeholder="Napíšte nám vašu správu..."
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>
          <Button type="submit" size="lg" className="w-full">
            Odoslať správu
          </Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <HexagonIcon className="w-6 h-6 text-accent" />
          <span className="font-semibold">BeesVitae</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} BeesVitae. Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  );
}

export default function BeeVitaeLandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <HowItWorksSection />
      <ScienceSection />
      <StudiesSection />
      <TargetAudienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}