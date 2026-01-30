"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "Prestige",
    description: `Model Prestige predstavlja vrhunsku drvenu pergolu namenjenu zahtevnim prostorima gde su stabilnost, estetika i luksuz podjednako važni. Sa naglašenim centralnim delom i bogatim dekorativnim elementima, ova pergola ostavlja snažan vizuelni utisak i podiže vrednost svakog ambijenta.

Zahvaljujući masivnoj konstrukciji i pažljivo biranim materijalima, Pergola Prestige idealna je za prostrane terase, restorane, vinoteke, hotelske bašte i privatne vile.

Konstrukcija je izrađena od lamelirane drvene građe (BSH), koja obezbeđuje izuzetnu nosivost, dug vek trajanja i otpornost na spoljne vremenske uticaje.

Stubovi dimenzija 16×16 cm daju konstrukciji čvrstinu i stabilnost, dok su noseće grede 6×24 cm, izrađene od lameliranog BSH drveta, projektovane za maksimalno opterećenje.

Dodatnu čvrstoću i estetsku vrednost pružaju bočne fosne 4×15 cm (ČPČ kvalitet), kao i dekorativni zakrivljeni kosnici, koji modelu Prestige daju prepoznatljiv i luksuzan izgled.

Krovna konstrukcija izvedena je u više etapa, sa donjim fosnama dimenzije 4×15 cm i gornjim fosnama 4×12 cm, čime se postiže dubina, bogatstvo detalja i snažan vizuelni efekat.

Poseban akcenat stavljen je na završne detalje – gornje i donje maske na stubovima, kao i dekorativne završetke („lutke“), koji se izrađuju po želji kupca.

Svi drveni elementi zaštićeni su lazurnim premazima na vodenoj bazi sa dodatkom voska, koji štite drvo od UV zračenja, vlage i vremenskih uslova, uz očuvanje prirodne strukture drveta. Boja se bira prema želji kupca.

Model prikazan na fotografijama izrađen je u dimenziji 5×6 m (30 m²) i realizovan je na području Fruške gore.

Pergola Prestige se izrađuje po meri, uz mogućnost prilagođavanja dimenzija, boje i dekorativnih elemenata u skladu sa projektom i prostorom.`,
    price: "280 €/m²",
    images: [
      "/products/1/1.avif",
      "/products/1/2.avif",
      "/products/1/3.avif",
      "/products/1/4.avif",
      "/products/1/5.avif",
      "/products/1/6.avif",
    ],
  },
  {
    id: 2,
    title: "Alpina",
    description: `Pergola Alpina predstavlja spoj tradicionalne gradnje, prirodnih materijala i autentičnog planinskog stila. Namenjena je ljubiteljima rustičnog izgleda, topline drveta i prirodnog ambijenta, gde svaka greda nosi svoju priču.

Izrađena je od obrađene stare krovne građe nepravilnog oblika, pažljivo birane i ručno doterivane, čime se zadržava njen originalni karakter, tekstura i jedinstven izgled. Nepravilnosti u drvetu nisu mana, već svesni estetski detalj koji pergoli daje autentičnost i poseban vizuelni identitet.

Krovnu konstrukciju čine suve krovne fosne dimenzije 20×4 cm, koje obezbeđuju stabilnost i čvrstinu, uz očuvan rustičan izgled. Konstrukcija je dodatno ojačana kosnicima izrađenim takođe od stare građe, čime se postiže čvrstina, ali i prepoznatljiv tradicionalni stil.

Pergola Alpina idealno se uklapa u:
	•	planinske kuće i vikendice
	•	etno domaćinstva
	•	restorane i konobe
	•	dvorišta sa prirodnim okruženjem

Zahvaljujući prirodnom izgledu stare građe, svaka pergola je unikat, sa svojim nijansama, godovima i nepravilnostima koje je nemoguće ponoviti.

Površinska zaštita i završna obrada vrše se po dogovoru sa kupcem, uz mogućnost dodatne patine ili lazurnih premaza koji dodatno ističu prirodnu strukturu drveta.

Pergola se izrađuje po meri, u skladu sa prostorom i željama kupca.`,
    price: "300 €/m²",
    images: [
      "/products/2/1.avif",
      "/products/2/2.avif",
      "/products/2/3.avif",
      "/products/2/4.avif",
      "/products/2/5.avif",
    ],
  },
  {
    id: 3,
    title: "Adria",
    description: `Pergola Adria je pažljivo osmišljena za one koji žele trajno, stabilno i estetski snažno rešenje za svoj spoljašnji prostor.

Izrađena je od KVH uzdužno nastavljanog drveta, dok lamelirani noseći stubovi obezbeđuju vrhunsku čvrstoću i dug vek trajanja konstrukcije.
Krov je formiran od suve roštilj-štafne, što omogućava preciznu izradu i pouzdanu nosivost.

Kompletna pergola je zaštićena kvalitetnim lazurnim premazom, koji štiti drvo od sunca, vlage i spoljašnjih uticaja, a pritom zadržava prirodan izgled drveta.

Pergola Adria je idealna za terase, dvorišta, vikendice, letnjikovce, bazenske prostore i objekte za izdavanje, gde su trajnost, izgled i pouzdanost na prvom mestu.`,
    price: "200 €/m²",
    images: [
      "/products/3/1.avif",
      "/products/3/2.avif",
      "/products/3/3.avif",
      "/products/3/4.avif",
      "/products/3/5.avif",
    ],
  },
  {
    id: 4,
    title: "Edge",
    description: `Pergola Edge predstavlja moderan drveni model namenjen savremenim dvorištima, terasama i urbanim prostorima. Karakterišu je čiste linije, pravilan geometrijski oblik i pažljivo izbalansiran odnos funkcionalnosti i estetike.

Konstrukcija je izrađena od lamelirane BSH drvene građe, koja obezbeđuje izuzetnu stabilnost, dug vek trajanja i otpornost na spoljne uticaje. Zahvaljujući preciznoj obradi i kvalitetnom spoju elemenata, pergola Edge pruža maksimalnu čvrstoću uz elegantan, moderan izgled.

Zadnja strana i bočni paneli sa horizontalnim lamelama pružaju dodatnu privatnost, zaštitu od vetra i vizuelnu dinamiku, dok krovni deo sa daskama postavljenim pod uglom od 45° omogućava prirodan protok svetlosti i prijatan hlad.

Po želji kupca, moguće je ugraditi transparentni leksan debljine 10 mm, koji štiti od kiše, a ne narušava minimalistički izgled pergole.

Svi drveni elementi obrađeni su na profesionalnim mašinama i zaštićeni lazurnim premazima na vodenoj bazi sa dodatkom voska, čime se postiže dugotrajna zaštita od sunca, vlage i vremenskih uslova, uz očuvanje prirodne teksture drveta.

Tehničke karakteristike:
	•	Stubovi: 15×15 cm – BSH lamelirano drvo
	•	Noseće grede: 15×12 cm
	•	Krov: daske I klase pod uglom od 45°
	•	Bočne i zadnja strana: horizontalne drvene lamele
	•	Mogućnost izrade po meri (dimenzije, boja, detalji)

Pergola Edge se izrađuje u standardnoj dimenziji 3×3 m, kao i u drugim dimenzijama prema potrebama prostora`,
    price: "240 €/m²",
    images: [
      "/products/4/1.avif",
      "/products/4/2.avif",
      "/products/4/3.avif",
      "/products/4/4.avif",
      "/products/4/5.avif",
    ],
  },
  {
    id: 5,
    title: "Riviera",
    description: `Pergola Riviera predstavlja spoj klasične elegancije i savremenog dizajna. Namenjena je svim prostorima gde je potreban funkcionalan hlad uz prirodan i topao izgled drveta.

Konstrukcija je izrađena od lamelirane drvene građe (BSH) iste debljine i kvaliteta kao kod premium modela, što garantuje stabilnost, dugotrajnost i otpornost na spoljne uticaje.

Stubovi i noseće grede izrađeni su od pažljivo sušene i obrađene lamelirane građe, dok gornju konstrukciju čine poprečne fosne od suve smrče, na koje se postavlja platno za zaštitu od sunca. Platno obezbeđuje prijatan hlad, a istovremeno zadržava prozračnost prostora.

Pergola je dodatno ojačana kosnicima, koji doprinose čvrstini konstrukcije i vizuelnom identitetu modela.

Svi drveni elementi zaštićeni su lazurnim premazima po izboru kupca, čime se naglašava prirodna struktura drveta i produžava vek trajanja pergole.

Idealna za:

* dvorišta i terase
* vikendice i letnjikovce
* bazenske prostore
* ugostiteljske objekte

Izrada se vrši po meri, uz mogućnost prilagođavanja dimenzija, boje i detalja.`,
    price: "300 €/m²",
    images: [
      "/products/5/1.avif",
      "/products/5/2.avif",
      "/products/5/3.avif",
      "/products/5/4.avif",
      "/products/5/5.avif",
    ],
  },
  {
    id: 6,
    title: "Riviera Line",
    description: `
        Pergola Riviera Line – elegantna drvena pergola sa platnom

Model Riviera Line predstavlja savremenu drvenu pergolu koja spaja čistu arhitekturu, funkcionalnost i dekorativne detalje. Namenjena je dvorištima, terasama, letnjikovcima i ugostiteljskim objektima gde je potreban moderan, ali topao prirodni izgled.

Konstrukcija je izrađena od lamelirane drvene građe (BSH), koja obezbeđuje visoku nosivost, stabilnost i dug vek trajanja bez uvijanja i pucanja drveta.

Stubovi dimenzije 16×16 cm daju pergoli čvrstinu i skladne proporcije, dok su noseće grede od lameliranog drveta dimenzija 24×6 cm projektovane za sigurno nošenje kompletne krovne konstrukcije.

Gornji deo pergole čine poprečne fosne od suve smrče, na koje se postavlja platno, čime se dobija prijatan hlad i lagan, mediteranski karakter pergole.

Dodatnu stabilnost i estetsku vrednost pružaju kosnici i dekorativni drveni ukrasi, koji Riviera Line modelu daju prepoznatljiv izgled i osećaj ručne izrade.

Svi drveni elementi se obrađuju na profesionalnim mašinama i štite lazurnim premazima po želji kupca, koji čuvaju drvo od vremenskih uticaja i naglašavaju prirodnu teksturu materijala.

Idealna za:

* privatna dvorišta i terase
* letnjikovce i vikendice
* restorane i bašte na otvorenom
* prostore namenjene odmoru i druženju

Izrada po meri – dimenzije, boja, završna obrada i detalji prilagođavaju se vašem prostoru
      `,
    price: "300 €/m²",
    images: [
      "/products/6/1.avif",
      "/products/6/2.avif",
      "/products/6/3.avif",
      "/products/6/4.avif",
      "/products/6/5.avif",
    ],
  },
  {
    id: 7,
    title: "Riviera Compact",
    description: `Pergola Riviera Kompakt predstavlja idealno rešenje za manje prostore u kojima je potreban kvalitetan hlad, funkcionalnost i estetski sklad. Dizajnirana je tako da zadrži eleganciju klasične drvene pergole, uz dimenzije prilagođene urbanim dvorištima, terasama i manjim objektima.

Konstrukcija je izrađena od lamelirane drvene građe (BSH) visokog kvaliteta, koja obezbeđuje izuzetnu stabilnost, dug vek trajanja i otpornost na spoljne vremenske uslove. Pažljivo sušeno i obrađeno drvo sprečava krivljenje i pucanje tokom vremena.

Stubovi su izrađeni od lamelirane građe dimenzije 16×16 cm, dok noseće grede čine lamelirane grede 24×6 cm, što garantuje čvrstu i pouzdanu konstrukciju.

Gornji deo pergole čine poprečne fosne od suve smrče, preko kojih se postavlja platno za zaštitu od sunca. Platno omogućava prijatan hlad, uz zadržavanje prozračnosti i prirodnog ambijenta.

Pergola je dodatno ojačana kosnicima, a dekorativni drveni ukrasi daju prepoznatljiv, mediteranski karakter celokupnom izgledu.

Svi drveni elementi zaštićeni su lazurnim premazima po želji kupca, koji štite drvo od sunca, vlage i vremenskih uticaja, uz očuvanje prirodne strukture drveta.

Idealna za:

* manje terase
* gradska dvorišta
* vikendice i apartmane
* prostore sa ograničenom površinom

Izrada se vrši po meri, uz mogućnost prilagođavanja dimenzija, boje i detalja prema želji kupca.`,
    price: "300 €/m²",
    images: [
      "/products/7/1.avif",
      "/products/7/2.avif",
      "/products/7/3.avif",
      "/products/7/4.avif",
      "/products/7/5.avif",
    ],
  },
  {
    id: 8,
    title: "Elegance",
    description: `Pergola Elegance je osmišljena za one koji žele više od obične nadstrešnice — prostor u kome se spajaju kvalitet, estetika i funkcionalnost.

Topla nijansa drveta daje prirodnu eleganciju svakom ambijentu i lako se uklapa u dvorišta, terase, letnjikovce, kao i prostore namenjene proslavama i okupljanjima. Namenjena je uživanju na otvorenom — bilo da je u pitanju porodični odmor, druženje sa prijateljima ili posebni trenuci pod vedrim nebom.

Konstrukcija je izrađena od kvalitetne BSH lamelirane i ČPČ suve građe, što pergoli obezbeđuje izuzetnu stabilnost, dug vek trajanja i otpornost na spoljašnje uticaje.
Pažljivo projektovan preplet greda i krovnih letvi ne pruža samo prijatan hlad, već stvara i poseban vizuelni efekat — prirodnu igru svetla i senke koja prostoru daje karakter.

Tehnička specifikacija
	•	Stubovi: 15 × 10 cm, BSH lamelirano drvo
(zaštićeno vodoperivom lazurnom zaštitom sa dodatkom voska)
	•	Nosive i vezne grede: ČPČ suva građa 4 × 15 cm
	•	Krovne letve (štafne): isprepletene 4 × 7 cm
– moderan i atraktivan dizajn

Dimenzije i cena
	•	Model sa fotografija: 4 × 2,5 m (10 m²)
	•	Cena: 220 € / m²

U cenu je uključeno:
✔ kompletna izrada
✔ zaštita drveta
✔ transport
✔ profesionalna montaža na terenu

Bez skrivenih troškova.

Unesite novu dimenziju u svoj spoljašnji prostor uz pergolu koja privlači pažnju i ostavlja snažan utisak.

Kvalitet koji traje — izgled koji se pamti.
Kontaktirajte nas i izradite pergolu po vašim merama.`,
    price: "220 €/m²",
    images: [
      "/products/8/1.avif",
      "/products/8/2.avif",
      "/products/8/3.avif",
      "/products/8/4.avif",
      "/products/8/5.avif",
    ],
  },
  {
    id: 9,
    title: "Elegance Oasis",
    description: `
        Pergola Elegance Oasis

Prirodna elegancija sa stilom

Ako tražite pergolu koja ostavlja utisak na prvi pogled, a traje godinama — Elegance Oasis je pravi izbor.

Ova pergola predstavlja savršen balans između prirodnih materijala, stabilne konstrukcije i toplog mediteranskog izgleda. Namenjena je svima koji žele da u svom dvorištu, na terasi ili u ugostiteljskom prostoru stvore prijatan, zaštićen i estetski snažan kutak za uživanje.

Svaki detalj je pažljivo osmišljen — od masivnih lameliranih stubova, preko čvrste krovne konstrukcije, do prirodne trske koja pruža gust hlad i poseban vizuelni identitet.

Osnovne karakteristike
	•	Dimenzije: 4 × 2,5 m
(mogućnost izrade po meri prema vašem prostoru)
	•	Stubovi: BSH lamelirano drvo 15 × 10 cm
– izuzetna nosivost, stabilnost i otpornost na uvijanje
	•	Grede: četvrtasto rezano drvo (ČPČ) 4 × 15 cm
– glavne i vezivne grede za sigurnu konstrukciju
	•	Krov: prirodna trska
– pruža odličan hlad, prirodnu ventilaciju i autentičan mediteranski izgled
	•	Zadnja strana: zatvorena drvenim daskama
– dodatna privatnost i zaštita od vetra
	•	Bočna strana: zatvorena do polovine
– balans otvorenosti i zaklona

Zaštita i obrada

Kompletna drvena konstrukcija je obrađena na profesionalnim mašinama i zaštićena kvalitetnim lazurnim premazom na bazi vode sa dodatkom voska.

Ova zaštita:
	•	štiti drvo od UV zračenja, kiše i vlage
	•	sprečava isušivanje i pucanje
	•	naglašava prirodnu strukturu drveta
	•	produžava vek trajanja pergole

Idealna za
	•	privatna dvorišta i terase
	•	vikendice i kuće za odmor
	•	bazenske prostore
	•	restorane, kafiće i objekte sa baštom
	•	apartmane i objekte za izdavanje
      `,
    price: "285 €/m²",
    images: [
      "/products/9/1.avif",
      "/products/9/2.avif",
      "/products/9/3.avif",
      "/products/9/4.avif",
      "/products/9/5.avif",
    ],
  },
  {
    id: 10,
    title: "Sharp",
    description: `Pergola Sharp predstavlja savršen spoj modernog arhitektonskog dizajna i topline prirodnog materijala. Ravne linije, crna završna obrada i precizna izrada daju ovoj pergoli snažan, minimalistički karakter koji se savršeno uklapa uz moderne kuće, montažne objekte i savremene terase.

Konstrukcija je izrađena od lamelirane drvene građe (BSH), što obezbeđuje izuzetnu stabilnost, dug vek trajanja i otpornost na spoljašnje uticaje.

Stubovi i noseće grede dimenzija 12×12 cm farbani su u crnu boju, sa efektom metala, čime pergola dobija industrijski i luksuzan izgled, dok unutrašnje krovne daske – takođe od lameliranog drveta – doprinose toplini i vizuelnom balansu konstrukcije.

Svi drveni elementi zaštićeni su kvalitetnim lazurnim premazima, koji štite drvo od UV zračenja, vlage i vremenskih uslova, uz očuvanje strukture i teksture drveta.

Pergola Sharp je idealno rešenje za:
• moderne terase
• dvorišta savremenog dizajna
• montažne i modularne objekte
• ugostiteljske prostore

Izrada po meri – dimenzije, boja i detalji mogu se prilagoditi željama kupca`,
    price: "200 €/m²",
    images: [
      "/products/10/1.avif",
      "/products/10/2.avif",
      "/products/10/3.avif",
      "/products/10/4.avif",
      "/products/10/5.avif",
    ],
  },
  {
    id: 11,
    title: "Roofline",
    description: `Model Hacienda Roofline predstavlja masivnu drvenu nadstrešnicu sa punim krovom, namenjenu za terase, porodične kuće i objekte gde je potrebna trajna i pouzdana zaštita od sunca, kiše i snega.

Konstrukcija je izrađena od lamelirane drvene građe, što obezbeđuje izuzetnu nosivost, stabilnost i dug vek trajanja, bez uvijanja i pucanja materijala.

Stubovi dimenzije 20×20 cm daju konstrukciji snažan i elegantan izgled, dok noseće grede dimenzija 20×10 cm i 15×10 cm garantuju čvrstoću i sigurnost kompletne konstrukcije.

Krov je izveden sa Terran Coppo crepom, uz kompletnu krovnu slojevitu strukturu koja uključuje brodski pod i termo-izolaciju, čime se dobija osećaj pravog krova kuće, a ne klasične pergole.

Svi drveni elementi su farbani lazurnim premazima po želji kupca, koji štite drvo od spoljašnjih uticaja i ujedno ističu prirodnu strukturu drveta.

Hacienda Roofline je idealno rešenje za one koji žele:
* trajnu natkrivenu terasu
* spoj tradicionalnog i modernog dizajna
* vrhunsku stabilnost i dug vek trajanja
* estetski uklopljenu konstrukciju uz postojeći objekat

Izrada po meri – dimenzije, boja i detalji prilagođavaju se svakom objektu`,
    price: "330 €/m²",
    images: [
      "/products/11/1.avif",
      "/products/11/2.avif",
      "/products/11/3.avif",
      "/products/11/4.avif",
      "/products/11/5.avif",
    ],
  },
  {
    id: 12,
    title: "Prestige",
    description: `Model Prestige predstavlja vrhunsku drvenu pergolu namenjenu zahtevnim prostorima gde su stabilnost, estetika i luksuz podjednako važni. Sa naglašenim centralnim delom i bogatim dekorativnim elementima, ova pergola ostavlja snažan vizuelni utisak i podiže vrednost svakog ambijenta.

Zahvaljujući masivnoj konstrukciji i pažljivo biranim materijalima, Pergola Prestige idealna je za prostrane terase, restorane, vinoteke, hotelske bašte i privatne vile.

Konstrukcija je izrađena od lamelirane drvene građe (BSH), koja obezbeđuje izuzetnu nosivost, dug vek trajanja i otpornost na spoljne vremenske uticaje.

Stubovi dimenzija 16×16 cm daju konstrukciji čvrstinu i stabilnost, dok su noseće grede 6×24 cm, izrađene od lameliranog BSH drveta, projektovane za maksimalno opterećenje.

Dodatnu čvrstoću i estetsku vrednost pružaju bočne fosne 4×15 cm (ČPČ kvalitet), kao i dekorativni zakrivljeni kosnici, koji modelu Prestige daju prepoznatljiv i luksuzan izgled.

Krovna konstrukcija izvedena je u više etapa, sa donjim fosnama dimenzije 4×15 cm i gornjim fosnama 4×12 cm, čime se postiže dubina, bogatstvo detalja i snažan vizuelni efekat.

Poseban akcenat stavljen je na završne detalje – gornje i donje maske na stubovima, kao i dekorativne završetke („lutke“), koji se izrađuju po želji kupca.

Svi drveni elementi zaštićeni su lazurnim premazima na vodenoj bazi sa dodatkom voska, koji štite drvo od UV zračenja, vlage i vremenskih uslova, uz očuvanje prirodne strukture drveta. Boja se bira prema želji kupca.

Model prikazan na fotografijama izrađen je u dimenziji 5×6 m (30 m²) i realizovan je na području Fruške gore.

Pergola Prestige se izrađuje po meri, uz mogućnost prilagođavanja dimenzija, boje i dekorativnih elemenata u skladu sa projektom i prostorom.`,
    price: "280 €/m²",
    images: [
      "/products/1/1.avif",
      "/products/1/2.avif",
      "/products/1/3.avif",
      "/products/1/4.avif",
      "/products/1/5.avif",
      "/products/1/6.avif",
    ],
  },
];

const GREEN = "#4cffb3";
const INITIAL_THUMBS = 6;

// --- animations
const pageWrap = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const cardIn = {
  hidden: { opacity: 0, y: 18, scale: 0.99, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const ProductPage = () => {
  const { id } = useParams();

  const product = useMemo(
    () => products.find((p) => p.id === Number.parseInt(id, 10)),
    [id]
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllThumbs, setShowAllThumbs] = useState(false);

  const handlePrevImage = () => {
    if (!product) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    if (!product) return;
    setCurrentImageIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  if (!product) {
    return (
      <section className="min-h-[60vh] bg-black px-4 sm:px-6 lg:px-10 pt-24 pb-14">
        <div className="mx-auto w-full max-w-6xl">
          <div className="rounded-3xl border border-white/10 bg-black/60 p-6 text-center">
            <p className="text-white/70">Proizvod nije pronađen.</p>
          </div>
        </div>
      </section>
    );
  }

  const totalImages = product.images.length;
  const visibleCount = showAllThumbs
    ? totalImages
    : Math.min(INITIAL_THUMBS, totalImages);
  const hiddenCount = totalImages - visibleCount;
  const visibleImages = product.images.slice(0, visibleCount);

  return (
    <section className="relative w-full overflow-hidden bg-black px-4 sm:px-6 lg:px-10 pt-24 pb-14">
      {/* background glows */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 -right-56 h-[34rem] w-[34rem] rounded-full bg-[#4cffb3]/10 blur-3xl" />

      <motion.div
        className="mx-auto w-full max-w-6xl"
        variants={pageWrap}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/60 p-4 sm:p-6"
          variants={fadeUp}
        >
          {/* subtle inner overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

          <div className="relative z-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Gallery */}
            <motion.div className="lg:col-span-7" variants={cardIn}>
              <motion.div
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-white/10 bg-black/40
                  shadow-[0_0_30px_-22px_rgba(76,255,179,0.45)]
                "
                whileHover={{ y: -2 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="relative w-full aspect-[16/9]">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={product.images[currentImageIndex]}
                      className="absolute inset-0"
                      initial={{
                        opacity: 0,
                        scale: 1.015,
                        filter: "blur(10px)",
                      }}
                      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, scale: 0.99, filter: "blur(10px)" }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Image
                        src={product.images[currentImageIndex]}
                        alt={product.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 58vw"
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* title chip */}
                <div className="absolute bottom-3 right-3">
                  <span className="rounded-xl border border-white/10 bg-black/45 px-3 py-1 text-sm font-panchang text-white/85 backdrop-blur-md">
                    {product.title}
                  </span>
                </div>

                {/* nav buttons */}
                <motion.button
                  type="button"
                  onClick={handlePrevImage}
                  aria-label="Prethodna slika"
                  className="
                    absolute left-3 top-1/2 -translate-y-1/2
                    inline-flex h-11 w-11 items-center justify-center rounded-xl
                    border border-white/10 bg-black/45 text-white/85 backdrop-blur-md
                    transition
                    hover:border-[#4cffb3]/50 hover:text-[#4cffb3] hover:shadow-[0_0_22px_-12px_#4cffb3]
                    active:scale-[0.98]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                  "
                >
                  <span className="text-lg font-bold">&lt;</span>
                </motion.button>

                <motion.button
                  type="button"
                  onClick={handleNextImage}
                  aria-label="Sledeća slika"
                  className="
                    absolute right-3 top-1/2 -translate-y-1/2
                    inline-flex h-11 w-11 items-center justify-center rounded-xl
                    border border-white/10 bg-black/45 text-white/85 backdrop-blur-md
                    transition
                    hover:border-[#4cffb3]/50 hover:text-[#4cffb3] hover:shadow-[0_0_22px_-12px_#4cffb3]
                    active:scale-[0.98]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                  "
                >
                  <span className="text-lg font-bold">&gt;</span>
                </motion.button>

                {/* subtle glow */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-[#4cffb3]/0 blur-3xl transition duration-500 group-hover:bg-[#4cffb3]/10" />
              </motion.div>

              {/* Thumbnails */}
              <motion.div
                className="mt-4 grid grid-cols-3 gap-3 sm:gap-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.06 } },
                }}
              >
                {visibleImages.map((image, index) => {
                  const active = index === currentImageIndex;
                  const isLastVisibleWithMore =
                    !showAllThumbs &&
                    index === visibleCount - 1 &&
                    hiddenCount > 0;

                  return (
                    <motion.button
                      key={`${image}-${index}-${
                        showAllThumbs ? "all" : "init"
                      }`}
                      type="button"
                      onClick={() => {
                        if (isLastVisibleWithMore) setShowAllThumbs(true);
                        else setCurrentImageIndex(index);
                      }}
                      aria-label={
                        isLastVisibleWithMore
                          ? `Prikaži još ${hiddenCount} slika`
                          : `Odaberi sliku ${index + 1}`
                      }
                      variants={{
                        hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
                        visible: {
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                          transition: { duration: 0.45, ease: "easeOut" },
                        },
                      }}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.985 }}
                      className={`
                        group relative overflow-hidden rounded-2xl border bg-black/40
                        transition
                        ${
                          active
                            ? "border-[#4cffb3]/60 shadow-[0_0_26px_-15px_rgba(76,255,179,0.75)]"
                            : "border-white/10 hover:border-[#4cffb3]/45 hover:shadow-[0_0_22px_-14px_rgba(76,255,179,0.6)]"
                        }
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                      `}
                    >
                      <div className="relative w-full aspect-[4/3]">
                        <Image
                          src={image}
                          alt={`${product.title} - Slika ${index + 1}`}
                          fill
                          sizes="(max-width: 1024px) 33vw, 20vw"
                          className="object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      </div>

                      {/* +N badge only (images are not darkened otherwise) */}
                      {isLastVisibleWithMore && (
                        <div className="absolute inset-0 grid place-items-center bg-black/55">
                          <span
                            className="rounded-xl bg-[#4cffb3] px-3 py-1 text-sm font-semibold text-black shadow-[0_0_26px_-14px_rgba(76,255,179,0.75)]"
                            style={{ boxShadow: `0 0 26px -14px ${GREEN}` }}
                          >
                            +{hiddenCount}
                          </span>
                        </div>
                      )}
                    </motion.button>
                  );
                })}
              </motion.div>

              {!showAllThumbs && totalImages > INITIAL_THUMBS && (
                <motion.div className="mt-3 flex justify-end" variants={fadeUp}>
                  <motion.button
                    type="button"
                    onClick={() => setShowAllThumbs(true)}
                    whileTap={{ scale: 0.98 }}
                    className="
                      inline-flex items-center justify-center gap-2 rounded-md
                      bg-[#4cffb3] px-3 py-2 text-sm font-bold text-black
                      transition-all duration-300
                      hover:bg-[#4cffb3]/90 hover:shadow-[0_0_26px_-10px_#4cffb3]
                      // active:scale-[0.98]
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                    "
                  >
                    Prikaži sve slike
                  </motion.button>
                </motion.div>
              )}
            </motion.div>

            {/* Details */}
            <motion.div className="lg:col-span-5" variants={cardIn}>
              <motion.div
                className="
                  relative overflow-hidden rounded-2xl
                  border border-white/10 bg-black/40 p-5 sm:p-6
                  shadow-[0_0_30px_-22px_rgba(76,255,179,0.35)]
                "
                whileHover={{ y: -2 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />

                <div className="relative z-10 space-y-4">
                  <motion.h1
                    className="text-2xl sm:text-3xl font-panchang text-white"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                  >
                    {product.title}
                  </motion.h1>

                  <div className="h-px w-full bg-white/10" />

                  <motion.h2
                    className="text-xl font-panchang text-[#4cffb3]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      ease: "easeOut",
                      delay: 0.05,
                    }}
                  >
                    Opis
                  </motion.h2>

                  <motion.p
                    className="text-white/70 text-base sm:text-lg font-serif text-justify leading-relaxed whitespace-pre-line"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
                  >
                    {product.description}
                  </motion.p>

                  <div className="h-px w-full bg-white/10" />

                  <motion.div
                    className="space-y-4 sm:space-y-5"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.55,
                      ease: "easeOut",
                      delay: 0.15,
                    }}
                  >
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <h3 className="text-xl font-panchang text-[#4cffb3]">
                        Cena
                      </h3>

                      <motion.span
                        className="
        inline-flex w-fit items-center justify-center
        rounded-xl px-3 py-1 text-sm font-semibold
        bg-[#4cffb3] text-black
        shadow-[0_0_26px_-14px_rgba(76,255,179,0.75)]
      "
                        style={{ boxShadow: `0 0 26px -14px ${GREEN}` }}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.45,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                        whileHover={{ scale: 1.02 }}
                      >
                        {product.price}
                      </motion.span>
                    </div>

                    {/* extra separation from price */}
                    <div className="pt-1 sm:pt-2">
                      <Link
                        href="/contact"
                        aria-label={`Poruči ${product.title}`}
                        className="block"
                      >
                        <motion.button
                          type="button"
                          whileHover={{ y: -1, scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          className="
          w-full inline-flex items-center justify-center gap-2
          rounded-xl px-4 py-3
          bg-black/30 text-[#4cffb3]
          border border-[#4cffb3]/60
          font-panchang text-sm sm:text-base
          transition-all duration-300
          hover:bg-black/45 hover:border-[#4cffb3]
          hover:shadow-[0_0_26px_-14px_rgba(76,255,179,0.55)]
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4cffb3]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black
        "
                        >
                          Poruči
                        </motion.button>
                      </Link>
                    </div>
                  </motion.div>
                </div>

                <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#4cffb3]/10 blur-3xl" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProductPage;
