export type Dress = {
  id: string;
  name: string;
  nameLv: string;
  category: string;
  color: string;
  colorHex: string;
  length: string;
  silhouette: string;
  occasion: string[];
  price: number;
  available: boolean;
  description: string;
  notes: string;
  sizes: string[];
  cover: string;
  gallery: string[];
  placeholder?: boolean;
};

export const DRESSES: Dress[] = [
  {
    id: "noir-corset",
    name: "Noir Corsetière",
    nameLv: "Noir Korsete",
    category: "Vakara kleita",
    color: "Melna",
    colorHex: "#0A0A0A",
    length: "Garā",
    silhouette: "Korsete · Sequīni",
    occasion: ["Gala", "Kāzas", "Balle"],
    price: 95,
    available: true,
    description:
      "Strukturēta korsetes kleita ar manuāli šūtu sequīnu pārklājumu un dramatisku astes garumu. Augsts šķēlums, atklāta mugura.",
    notes: "Izmērs S/M · Augstums 165–178 cm",
    sizes: ["S", "M"],
    cover: "/assets/black/black1.jpg",
    gallery: [
      "/assets/black/black1.jpg",
      "/assets/black/black2.jpg",
      "/assets/black/black3.jpg",
      "/assets/black/black4.jpg",
      "/assets/black/black5.jpg",
      "/assets/black/black6.jpg",
    ],
  },
  {
    id: "silver-mesh",
    name: "Silver Mesh",
    nameLv: "Sudraba Tīkls",
    category: "Vakara kleita",
    color: "Sudraba",
    colorHex: "#C9C6C0",
    length: "Garā",
    silhouette: "Halter · Nāriņa",
    occasion: ["Gala", "Izlaidums"],
    price: 110,
    available: true,
    description:
      "Halter kakla izgriezuma kleita ar geometrisku sudraba pērļu izšuvumu un nāriņas siluetu. Atvērta mugura.",
    notes: "Izmērs S · Augstums 168–180 cm",
    sizes: ["S"],
    cover: "/assets/silver/silver1.jpg",
    gallery: [
      "/assets/silver/silver1.jpg",
      "/assets/silver/silver2.jpg",
      "/assets/silver/silver3.jpg",
    ],
  },
  {
    id: "ivory-volant",
    name: "Ivory Volant",
    nameLv: "Volāns",
    category: "Kokteiļa kleita",
    color: "Balta",
    colorHex: "#F4F1EA",
    length: "Midi",
    silhouette: "Bardo · Šķēlums",
    occasion: ["Kāzas", "Vasaras balle", "Izlaidums"],
    price: 75,
    available: true,
    description:
      "Skulpturāls bardo volāns uz neoprēna auduma. Augsts sānu šķēlums, taisns silueta apakša.",
    notes: "Izmērs S/M · Augstums 160–175 cm",
    sizes: ["S", "M"],
    cover: "/assets/white/white1.jpg",
    gallery: [
      "/assets/white/white1.jpg",
      "/assets/white/white2.jpg",
      "/assets/white/white3.jpg",
    ],
  },
  {
    id: "blush-plume",
    name: "Blush Plume",
    nameLv: "Rozā Spalva",
    category: "Vakara kleita",
    color: "Rozā",
    colorHex: "#F2C8D0",
    length: "Garā",
    silhouette: "Strapless · Spalvas",
    occasion: ["Vasaras balle", "Izlaidums"],
    price: 85,
    available: true,
    description:
      "Mīksta strausa spalvu apdare uz strapless korsetes un slaida silueta ar sānu šķēlumu. Romantisks rozā tonis.",
    notes: "Izmērs S · Augstums 165–178 cm",
    sizes: ["S"],
    cover: "/assets/pink/pink1.jpg",
    gallery: ["/assets/pink/pink1.jpg", "/assets/pink/pink2.jpg", "/assets/pink/pink3.jpg"],
  },
];

export const NAV = [
  { id: "home", label: "Sākums", href: "/" },
  { id: "catalog", label: "Kolekcija", href: "/kolekcija" },
  { id: "how", label: "Kā tas notiek", href: "/ka-tas-notiek" },
  { id: "about", label: "Par mums", href: "/par-mums" },
  { id: "contact", label: "Sazinies", href: "/sazinies" },
] as const;

export const COPY = {
  tagline: "Kleitu noma · Visa Latvija",
  heroEyebrow: "Est. MMXX · Saņemšana Liepājā · Sūtām visā Latvijā",
  heroLine1: "Vakars,",
  heroLine2: "kas paliek",
  heroLine3: "atmiņā.",
  heroSub:
    "Rūpīgi atlasīta dizaineru kleitu kolekcija nomai vienam vakaram, kāzām, izlaidumam vai gala pasākumam.",
  heroCTA: "Skatīt kolekciju",
  heroCTA2: "Rezervēt tikšanos",
  introLine:
    "Mēs ticam, ka īstā kleita neatrod tevi pirkumā — tā atrod tevi mirklī, kad vajag.",
  introBody:
    "Dress Rent Latvia ir privāts kleitu studio Liepājā ar nomu visā Latvijā. Mūsu kolekcijā ir rūpīgi atlasītas vakarkleitas — no minimālistiskām midi siluetēm līdz manuāli šūtām sequīnu un spalvu kreācijām. Katra kleita tiek profesionāli tīrīta un sagatavota pirms katras nomas.",
  featuredEyebrow: "Šī sezona",
  featuredTitle: "Izvēlētās siluetes",
  processEyebrow: "Process",
  processTitle: "Četri soļi",
  contactEyebrow: "Kontakti",
  contactTitle: "Pieraksties uz pielaikošanu",
  contactSub:
    "Atstāj ziņu un mēs sazināsimies 24 stundu laikā, lai vienotos par tikšanos studio.",
};

export const PROCESS_STEPS = [
  { n: "01", title: "Izvēlies", body: "Pārlūko kolekciju tiešsaistē un saglabā kleitas, kas ievelk uzmanību." },
  { n: "02", title: "Pielaiko", body: "Atnāc uz studio Liepājā — vienā tikšanās reizē pielaikojam līdz 8 kleitām." },
  { n: "03", title: "Rezervē", body: "Apstiprini datumu, depozītu un pielāgojumus. Kleita gaida tevi." },
  { n: "04", title: "Atgriez", body: "Pēc vakara — vienkārši atgriez. Mēs parūpējamies par tīrīšanu." },
];

export const FAQ = [
  {
    q: "Cik ilgi ilgst noma?",
    a: "Standarta noma — 3 dienas (saņem dienu pirms, atgriez dienu pēc pasākuma). Garākam periodam — pēc vienošanās.",
  },
  {
    q: "Kāds ir depozīts?",
    a: "Depozīts ir vienāds ar kleitas nomas cenu un tiek atgriezts pilnībā pēc kleitas atgriešanas neskartā stāvoklī.",
  },
  {
    q: "Vai kleitas var pielāgot?",
    a: "Jā — garumu un sānu šuves pielāgojam bez maksas. Lielākas izmaiņas — pēc atsevišķas vienošanās.",
  },
  {
    q: "Ko darīt ja kleita tiek bojāta?",
    a: "Standarta lietošanas pēdas (smaržas, neliels mākslīgs lietus) ir iekļauti. Bojājumi tiek vērtēti individuāli no depozīta.",
  },
  {
    q: "Vai jūs sūtāt uz citām pilsētām?",
    a: "Sūtām ar Omniva un DPD pa visu Latviju. Sūtīšanas izmaksas — no €6.",
  },
];

export const MARQUEE_WORDS = [
  "Kleitu noma",
  "Visa Latvija",
  "Saņemšana Liepājā",
  "Est. 2020",
  "Privāts studio",
  "Pielaiko pēc pieraksta",
  "Dress Rent Latvia",
];
