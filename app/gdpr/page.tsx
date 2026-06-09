import Link from "next/link";

export const metadata = {
  title: "Ochrana osobných údajov (GDPR) – BeesVitae",
  description: "Zásady ochrany osobných údajov pre internetový obchod beesvitae.sk prevádzkovaný spoločnosťou SofiTronic s. r. o.",
};

export default function GdprPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Späť na hlavnú stránku
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
          Ochrana osobných údajov
        </h1>
        <p className="text-muted-foreground mb-10">
          Platné od 1. 6. 2026 | Prevádzkovateľ: SofiTronic s. r. o.
        </p>

        <div className="prose prose-sm max-w-none space-y-8 text-foreground">

          <section>
            <h2 className="text-xl font-semibold mb-3">1. Prevádzkovateľ osobných údajov</h2>
            <p className="text-muted-foreground leading-relaxed">
              Prevádzkovateľom osobných údajov v zmysle Nariadenia GDPR (EÚ) 2016/679 a zákona
              č. 18/2018 Z. z. o ochrane osobných údajov je:
            </p>
            <div className="mt-4 bg-secondary/50 rounded-lg p-5 text-sm space-y-1">
              <p className="font-medium">SofiTronic s. r. o.</p>
              <p className="text-muted-foreground">Priemyselná 4412/1, 031 01 Liptovský Mikuláš</p>
              <p className="text-muted-foreground">IČO: 57475091</p>
              <p className="text-muted-foreground">DIČ: 2122809513</p>
              <p className="text-muted-foreground">IČ DPH: SK2122809513</p>
              <p className="text-muted-foreground">Zapísaná dňom: 17. marca 2026</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Aké osobné údaje spracúvame</h2>
            <p className="text-muted-foreground leading-relaxed">
              V súvislosti s prevádzkou internetového obchodu beesvitae.sk spracúvame nasledovné
              kategórie osobných údajov:
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground text-sm list-disc list-inside">
              <li>Identifikačné údaje: meno, priezvisko</li>
              <li>Kontaktné údaje: e-mailová adresa, telefónne číslo</li>
              <li>Doručovacie a fakturačné údaje: adresa doručenia, adresa sídla (pri firmách)</li>
              <li>Transakčné údaje: história objednávok, spôsob platby (bez čísla karty)</li>
              <li>Technické údaje: IP adresa, typ prehliadača, cookies (viď bod 6)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Účel a právny základ spracúvania</h2>
            <div className="space-y-4 text-muted-foreground text-sm">
              <div>
                <p className="font-medium text-foreground">Vybavenie objednávky</p>
                <p>Právny základ: plnenie zmluvy (čl. 6 ods. 1 písm. b) GDPR). Údaje spracúvame po dobu nevyhnutnú na splnenie objednávky a zákonnú dobu archivácie (10 rokov pre účtovné doklady).</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Zasielanie obchodných oznámení</p>
                <p>Právny základ: súhlas (čl. 6 ods. 1 písm. a) GDPR) alebo oprávnený záujem pri existujúcich zákazníkoch. Súhlas môžete kedykoľvek odvolať odhlásením z odberu e-mailov.</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Kontaktný formulár</p>
                <p>Právny základ: oprávnený záujem prevádzkovateľa (čl. 6 ods. 1 písm. f) GDPR) – odpoveď na váš dopyt.</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Analytika a zlepšovanie stránky</p>
                <p>Právny základ: súhlas udelený prostredníctvom cookie banneru (čl. 6 ods. 1 písm. a) GDPR).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Príjemcovia osobných údajov</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Vaše osobné údaje môžeme zdieľať s nasledovnými kategóriami príjemcov:
            </p>
            <ul className="mt-3 space-y-2 text-muted-foreground text-sm list-disc list-inside">
              <li>Prepravné a kuriérske spoločnosti (na účely doručenia objednávky)</li>
              <li>Poskytovatelia platobných služieb (na spracovanie platieb)</li>
              <li>Poskytovatelia cloudovej infraštruktúry (hosting, e-mail)</li>
              <li>Účtovníci a daňoví poradcovia (na účely plnenia zákonných povinností)</li>
            </ul>
            <p className="mt-3 text-muted-foreground text-sm">
              Osobné údaje neposkytujeme tretím stranám na ich vlastné marketingové účely
              a nezverejňujeme ich bez vášho súhlasu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Vaše práva</h2>
            <p className="text-muted-foreground leading-relaxed text-sm mb-3">
              V súlade s GDPR máte nasledovné práva:
            </p>
            <div className="space-y-3 text-sm">
              {[
                { title: "Právo na prístup", desc: "Máte právo získať potvrdenie o tom, či spracúvame vaše osobné údaje, a ak áno, prístup k nim." },
                { title: "Právo na opravu", desc: "Máte právo na opravu nesprávnych alebo neúplných osobných údajov." },
                { title: "Právo na vymazanie", desc: "Za určitých podmienok máte právo požiadať o vymazanie vašich osobných údajov." },
                { title: "Právo na obmedzenie spracúvania", desc: "Máte právo požiadať o obmedzenie spracúvania vašich údajov." },
                { title: "Právo na prenosnosť", desc: "Máte právo získať vaše údaje v štruktúrovanom, strojovo čitateľnom formáte." },
                { title: "Právo namietať", desc: "Máte právo namietať proti spracúvaniu na základe oprávneného záujmu alebo na priame marketingové účely." },
                { title: "Právo odvolať súhlas", desc: "Ak je spracúvanie založené na súhlase, môžete ho kedykoľvek odvolať bez toho, aby to malo vplyv na zákonnosť predchádzajúceho spracúvania." },
              ].map((item) => (
                <div key={item.title} className="bg-secondary/30 rounded-lg p-4">
                  <p className="font-medium text-foreground">{item.title}</p>
                  <p className="text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-muted-foreground text-sm">
              Práva si môžete uplatniť písomne na e-mailovej adrese alebo poštou na adresu
              sídla spoločnosti. Máte tiež právo podať sťažnosť na Úrad na ochranu osobných
              údajov SR (<a href="https://dataprotection.gov.sk" className="underline hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">dataprotection.gov.sk</a>).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Naša stránka používa cookies – malé textové súbory ukladané vo vašom prehliadači.
              Používame nasledovné typy cookies:
            </p>
            <div className="mt-3 space-y-3 text-sm">
              <div className="bg-secondary/30 rounded-lg p-4">
                <p className="font-medium text-foreground">Nevyhnutné cookies</p>
                <p className="text-muted-foreground mt-1">Zabezpečujú základnú funkčnosť stránky (napr. pamätanie vášho súhlasu s cookies). Tieto cookies nevyžadujú váš súhlas.</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <p className="font-medium text-foreground">Analytické cookies</p>
                <p className="text-muted-foreground mt-1">Pomáhajú nám pochopiť, ako návštevníci používajú stránku (Vercel Analytics). Aktivujú sa iba po udelení vášho súhlasu.</p>
              </div>
            </div>
            <p className="mt-3 text-muted-foreground text-sm">
              Súhlas s cookies môžete kedykoľvek odvolať vymazaním cookies vo vašom prehliadači
              alebo zmenou nastavení.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Bezpečnosť údajov</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Všetky osobné údaje sú prenášané šifrovaným protokolom SSL/TLS. Prijali sme
              primerané technické a organizačné opatrenia na ochranu vašich údajov pred
              neoprávneným prístupom, stratou alebo zneužitím.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Kontakt na ochranu údajov</h2>
            <p className="text-muted-foreground leading-relaxed text-sm">
              V prípade otázok týkajúcich sa spracúvania vašich osobných údajov nás môžete
              kontaktovať prostredníctvom kontaktného formulára na{" "}
              <Link href="/#kontakt" className="underline hover:text-foreground transition-colors">
                beesvitae.sk/#kontakt
              </Link>{" "}
              alebo poštou na adresu sídla spoločnosti SofiTronic s. r. o.,
              Priemyselná 4412/1, 031 01 Liptovský Mikuláš.
            </p>
          </section>

          <p className="text-xs text-muted-foreground pt-4 border-t border-border">
            Tieto zásady ochrany osobných údajov sú platné od 1. 6. 2026.
            Vyhradzujeme si právo ich aktualizovať. O zmenách vás informujeme prostredníctvom
            stránky beesvitae.sk.
          </p>
        </div>
      </div>
    </main>
  );
}
