import Link from "next/link";

export const metadata = {
  title: "Obchodné podmienky – BeesVitae",
  description: "Obchodné podmienky internetového obchodu beesvitae.sk prevádzkovaného spoločnosťou SofiTronic s. r. o.",
};

export default function ObchodnePodmienkyPage() {
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
          Obchodné podmienky
        </h1>
        <p className="text-muted-foreground mb-10">
          Internetového obchodu beesvitae.sk | Platné od 1. 6. 2026
        </p>

        <div className="space-y-8 text-sm text-muted-foreground">

          {/* Prevádzkovateľ */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Prevádzkovateľ internetového obchodu</h2>
            <p className="leading-relaxed mb-4">
              Prevádzkovateľom internetového obchodu beesvitae.sk je spoločnosť SofiTronic s. r. o.,
              zapísaná v Obchodnom registri SR. Kontaktovať nás môžete na e-mailovej adrese alebo
              telefónnom čísle uvedenom na stránke beesvitae.sk, každý pracovný deň v pracovnej dobe.
            </p>
            <div className="bg-secondary/50 rounded-lg p-5 space-y-1">
              <p className="font-medium text-foreground">SofiTronic s. r. o.</p>
              <p>Priemyselná 4412/1, 031 01 Liptovský Mikuláš</p>
              <p>IČO: 57475091</p>
              <p>DIČ: 2122809513</p>
              <p>IČ DPH: SK2122809513 (registrácia od 1. 5. 2026, podľa §4)</p>
              <p>Zapísaná dňom: 17. marca 2026</p>
              <p>Slovenská republika</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">1) O registrácii</h2>
            <p className="leading-relaxed mb-3">
              Prehlasujeme, že osobné údaje zákazníkov slúžia výhradne na účely identifikácie pri
              nákupe na eshope beesvitae.sk a nebudú poskytnuté tretím osobám ani inak zneužité.
            </p>
            <p className="leading-relaxed mb-3">
              Potvrdením registrácie zákazník súhlasí so zasielaním ponukových e-mailov z
              internetového obchodu beesvitae.sk, v súlade so zákonom č. 351/2011 Z. z. o
              elektronických komunikáciách. Ponukové e-maily budú zasielané maximálne dvakrát
              do mesiaca a veľkosť jednotlivých e-mailových správ neprekročí 1 MB. Zasielanie
              noviniek e-mailom môžete kedykoľvek zrušiť na e-mailovej adrese uvedenej na
              stránke beesvitae.sk.
            </p>
            <p className="leading-relaxed">
              Objednávky je možné uskutočniť aj bez registrácie prostredníctvom objednávkového
              formulára na stránke beesvitae.sk.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">2) Prijatie a vybavenie objednávky, kúpna zmluva</h2>
            <p className="leading-relaxed mb-3">
              Objednávka kupujúceho je návrhom kúpnej zmluvy a samotná kúpna zmluva je uzatvorená
              momentom doručenia záväzného súhlasu predávajúceho s týmto návrhom (záväzným potvrdením
              objednávky zo strany predávajúceho). Od tohto momentu medzi kupujúcim a predávajúcim
              vznikajú vzájomné práva a povinnosti.
            </p>
            <p className="leading-relaxed mb-3">
              Uzatvorením kúpnej zmluvy kupujúci potvrdzuje, že sa oboznámil s týmito obchodnými
              podmienkami vrátane reklamačných podmienok a že s nimi súhlasí.
            </p>
            <p className="leading-relaxed mb-3">
              Predávajúci si vyhradzuje právo zrušiť objednávku alebo jej časť pred uzavretím
              kúpnej zmluvy v týchto prípadoch: tovar sa prestal vyrábať, nedodáva sa alebo sa
              výrazným spôsobom zmenila jeho cena. V prípade, že táto situácia nastane, predávajúci
              bezodkladne kontaktuje kupujúceho. Ak kupujúci zaplatil už časť alebo celú sumu
              kúpnej ceny, táto bude vrátená na jeho bankový účet.
            </p>
            <p className="leading-relaxed mb-3">
              Všetky prijaté objednávky sú záväzné. Objednávku možno zrušiť pred jej expedíciou.
              O prijatí objednávky je zákazník automaticky informovaný elektronickou poštou.
            </p>
            <div className="bg-secondary/30 rounded-lg p-4 mt-3">
              <p className="font-medium text-foreground mb-1">Storno objednávky</p>
              <p>
                Ak vykonáte storno objednávky do 12 hodín od jej podania, považujeme objednávku
                za zrušenú. Storno môžete zaslať e-mailom alebo vykonať telefonicky. Pri zrušení
                objednávky je nutné uviesť vaše meno, e-mail a číslo objednávky.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">3) Spôsoby doručenia</h2>
            <p className="leading-relaxed mb-3">
              Tovar doručujeme prostredníctvom kuriérskej služby alebo poštovej prepravy.
              Konkrétny prepravca bude uvedený pri dokončení objednávky. Poštovné je účtované
              podľa aktuálneho cenníka zvoleného prepravcu.
            </p>
            <p className="leading-relaxed mb-3">
              Zásielka je obvykle doručená do druhého pracovného dňa od odoslania.
              O odoslaní je zákazník informovaný e-mailom.
            </p>
            <div className="border border-amber-500/30 bg-amber-500/5 rounded-lg p-4 mt-3">
              <p className="font-medium text-foreground mb-1">⚠ Poškodená zásielka</p>
              <p>
                Ak je balík viditeľne poškodený alebo je porušená ochranná páska, uplatnite
                reklamáciu priamo u prepravcu. Za škody vzniknuté počas prepravy nenesie
                predávajúci zodpovednosť.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">4) Záručné podmienky</h2>
            <p className="leading-relaxed">
              V balíku vždy nájdete daňový doklad (faktúru). Záručná lehota začína plynúť dátumom
              prevzatia tovaru kupujúcim. Záručná lehota je pri každom produkte uvedená v jeho
              detaile na stránke beesvitae.sk. V sporných prípadoch môže byť záručná lehota predĺžená
              o 5 dní ako náhrada za čas dopravy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">5) Rozpor s kúpnou zmluvou</h2>
            <p className="leading-relaxed mb-3">
              V prípade, že vec pri prevzatí kupujúcim nie je v zhode s kúpnou zmluvou, má kupujúci
              právo na to, aby predávajúci bezplatne a bez zbytočného odkladu vec uviedol do stavu
              zodpovedajúceho kúpnej zmluve – výmenou veci alebo jej opravou. Ak takýto postup nie
              je možný, môže kupujúci požadovať primeranú zľavu alebo od zmluvy odstúpiť.
            </p>
            <p className="leading-relaxed">
              Rozpor s kúpnou zmluvou, ktorý sa prejaví v priebehu šiestich mesiacov odo dňa
              prevzatia veci, sa považuje za rozpor existujúci už pri prevzatí.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">6) Právo spotrebiteľa odstúpiť od zmluvy</h2>
            <p className="leading-relaxed mb-3">
              Ak je kúpna zmluva uzatvorená pomocou prostriedkov komunikácie na diaľku, má spotrebiteľ
              v súlade so zákonom č. 102/2014 Z. z. právo odstúpiť od zmluvy bez udania dôvodu
              do 14 dní od prevzatia tovaru.
            </p>
            <p className="leading-relaxed mb-3">
              V takom prípade spotrebiteľ kontaktuje predávajúceho a písomne uvedie, že odstupuje
              od zmluvy s uvedením čísla objednávky, dátumu nákupu a čísla bankového účtu pre
              vrátenie peňazí. Odstúpenie od zmluvy musí byť doručené najneskôr v posledný deň
              14-dňovej lehoty.
            </p>
            <p className="leading-relaxed mb-3">
              Spotrebiteľ musí predávajúcemu vydať všetko, čo na základe kúpnej zmluvy získal.
              Ak vrátený tovar nie je kompletný alebo je poškodený, môže predávajúci uplatniť
              právo na náhradu škody.
            </p>
            <p className="leading-relaxed">
              Peniaze budú vrátené na bankový účet kupujúceho zvyčajne do 14 dní od doručenia
              vráteného tovaru.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">7) Doručenie a dodacie podmienky</h2>
            <p className="leading-relaxed mb-4">
              Niektoré zásielky môžu byť rozdelené do viacerých balíkov. Poštovné zostáva v
              takom prípade bezo zmeny.
            </p>
            <p className="font-medium text-foreground mb-2">Ako postupovať pri vrátení tovaru:</p>
            <ol className="list-decimal list-inside space-y-2 mb-4">
              <li>Kontaktujte nás e-mailom alebo telefonicky a dohodnite sa na spôsobe vyzdvihnutia alebo zaslania.</li>
              <li>Tovar zašlite na adresu: SofiTronic s. r. o., Priemyselná 4412/1, 031 01 Liptovský Mikuláš.</li>
            </ol>
            <p className="font-medium text-foreground mb-2">Ako zásielku pripraviť:</p>
            <p className="leading-relaxed">
              Zásielka musí byť kompletná a v stave, v akom ste ju prevzali. K tovaru priložte
              doklad o kúpe. Neposielajte tovar na dobierku – nebude prevzatý. Odporúčame tovar
              poistiť. V prípade vrátenia tovaru bude suma znížená o prepravné náklady
              (neplatí pre reklamácie).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">8) Spôsoby úhrady</h2>
            <div className="space-y-3">
              <div className="bg-secondary/30 rounded-lg p-4">
                <p className="font-medium text-foreground mb-1">Platba vopred prevodom</p>
                <p>Po zvolení tejto možnosti obdržíte zálohový list so všetkými údajmi k platbe. Tovar expedujeme po obdržaní platby.</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <p className="font-medium text-foreground mb-1">Platba dobierkou</p>
                <p>Objednaný tovar vám zašleme a pri prevzatí uhradíte v hotovosti alebo kartou priamo prepravcovi.</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-4">
                <p className="font-medium text-foreground mb-1">Online platba kartou alebo platobnou bránou</p>
                <p>Platba je okamžitá a objednávka sa spracuje bezodkladne po jej potvrdení.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">9) Bezpečnosť</h2>
            <p className="leading-relaxed">
              Všetky interné informácie (heslá, osobné údaje, transakcie) sú šifrované pomocou
              protokolu SSL/TLS. Zaväzujeme sa spracúvať osobné údaje v súlade s Nariadením
              GDPR (EÚ) 2016/679 a zákonom č. 18/2018 Z. z. o ochrane osobných údajov.
              Podrobnosti sú uvedené v dokumente{" "}
              <Link href="/gdpr" className="underline hover:text-foreground transition-colors">
                Ochrana osobných údajov
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">10–11) Reklamácie a reklamačný poriadok</h2>
            <p className="leading-relaxed mb-4">
              V prípade, že tovar je poškodený alebo nefunkčný, postupujte nasledovne:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Kontaktujte nás e-mailom alebo telefonicky a popíšte závadu. Tovar zašlite na adresu sídla spoločnosti. Prepravné náklady hradí kupujúci.</li>
              <li>Ihneď po obdržaní tovaru obdržíte reklamačný protokol.</li>
              <li>Tovar musí byť riadne zabalený, aby nedošlo k ďalšiemu poškodeniu.</li>
              <li>Chybný alebo poškodený tovar bude vymenený alebo bude vrátená kúpna cena.</li>
              <li>K tovaru musia byť priložené všetky doklady (faktúra, záručný list a pod.).</li>
              <li>Predávajúci nepreberá zodpovednosť za škody z neodborného používania ani za škody spôsobené vonkajšími udalosťami.</li>
              <li>Tovar je z hygienických dôvodov prijatý na reklamáciu len riadne vyčistený.</li>
              <li>Pri zamietnutých reklamáciách môžu byť účtované náklady na reklamačné konanie.</li>
              <li>O vybavení reklamácie budete informovaní e-mailom.</li>
            </ol>
          </section>

          <div className="pt-6 border-t border-border space-y-2">
            <p className="text-foreground font-medium">Ďakujeme vám za čas, ktorý ste strávili čítaním obchodných podmienok.</p>
            <p className="italic">Váš tím beesvitae.sk</p>
            <p className="text-xs mt-4">
              Obchodné podmienky sú platné od 1. 6. 2026 do odvolania. V prípade zmeny obchodných
              podmienok platia obchodné podmienky, ktoré boli v platnosti ku dátumu nákupu.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
