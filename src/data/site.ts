export const SITE = {
  name: 'Stockholms Parrådgivning',
  tagline: 'Psykoterapi och parrådgivning',
  url: 'https://stockholmsparradgivning.se',
  email: 'info@stockholmsparradgivning.se',
  address: { street: 'Åsögatan 122', zip: '116 24', city: 'Stockholm', area: 'Södermalm' },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=%C3%85s%C3%B6gatan+122%2C+116+24+Stockholm',
};

export type Member = {
  slug: string;
  name: string;
  title: string;
  credentials: string[];
  phone: string;
  phoneHref: string;
  email: string;
  web?: { label: string; href: string };
};

// Kontaktuppgifter: Beny enligt Stockholms stads förteckning (2026-08-07),
// Pandora och Lilian enligt länkarna på den gamla sidan. Verifiera innan lansering.
export const TEAM: Member[] = [
  {
    slug: 'beny',
    name: 'Beny Plüss',
    title: 'Leg. psykoterapeut',
    credentials: ['Auktoriserad familjerådgivare', 'Socionom', 'Leg. psykoterapeut', 'Handledare'],
    phone: '073-801 79 41',
    phoneHref: '+46738017941',
    email: 'beny@stockholmsparradgivning.se',
    web: { label: 'benypluss.se', href: 'https://benypluss.se' },
  },
  {
    slug: 'pandora',
    name: 'Pandora Hultqvist',
    title: 'Leg. psykoterapeut',
    credentials: [
      'Auktoriserad familjerådgivare',
      'Socionom',
      'Leg. psykoterapeut',
      'Leg. hälso- och sjukvårdskurator',
      'Handledare',
    ],
    phone: '073-612 36 20',
    phoneHref: '+46736123620',
    email: 'pandora@stockholmsparradgivning.se',
    web: { label: 'pandorahultqvist.se', href: 'https://pandorahultqvist.se' },
  },
  {
    slug: 'lilian',
    name: 'Lilian Pohlkamp',
    title: 'Leg. psykoterapeut',
    credentials: ['Familjerådgivare', 'Leg. psykoterapeut', 'Handledare', 'Sjuksköterska', 'Psykiatriforskning'],
    phone: '070-667 38 44',
    phoneHref: '+46706673844',
    email: 'lilian@stockholmsparradgivning.se',
    web: { label: 'lilianpohlkamp.com', href: 'https://lilianpohlkamp.com' },
  },
];

export type Kommun = {
  slug: string;
  name: string; // "Täby"
  official: string; // "Täby kommun"
  fee: number; // egenavgift i kr
  sessions?: string;
  note?: string; // särskilda regler
};

export const KOMMUNER: Kommun[] = [
  { slug: 'haninge', name: 'Haninge', official: 'Haninge kommun', fee: 500 },
  { slug: 'huddinge', name: 'Huddinge', official: 'Huddinge kommun', fee: 255 },
  {
    slug: 'lidingo',
    name: 'Lidingö',
    official: 'Lidingö stad',
    fee: 350,
    sessions: 'Upp till 6 subventionerade samtal',
    note: 'Kontakta först Lidingö stads kontaktcenter på 08-731 31 32 för att få ett referensnummer, boka sedan tid hos oss.',
  },
  { slug: 'nacka', name: 'Nacka', official: 'Nacka kommun', fee: 390 },
  { slug: 'sollentuna', name: 'Sollentuna', official: 'Sollentuna kommun', fee: 400 },
  { slug: 'solna', name: 'Solna', official: 'Solna stad', fee: 465, sessions: 'Upp till 5 samtal' },
  { slug: 'stockholms-stad', name: 'Stockholms stad', official: 'Stockholms stad', fee: 450, sessions: 'Upp till 5 subventionerade samtal' },
  { slug: 'taby', name: 'Täby', official: 'Täby kommun', fee: 350 },
];

export type NavItem = { label: string; href: string; children?: NavItem[] };

export const NAV: NavItem[] = [
  {
    label: 'Familjerådgivning',
    href: '/familjeradgivning/',
    children: [
      { label: 'Familjerådgivning', href: '/familjeradgivning/' },
      { label: 'Kommunal familjerådgivning', href: '/kommunal-familjeradgivning/' },
      { label: 'Kommuner & priser', href: '/kommuner/' },
      { label: 'Parsamtal', href: '/parsamtal/' },
      { label: 'Familjesamtal', href: '/familjesamtal/' },
      { label: 'Efter familjerådgivning', href: '/efter-familjeradgivning/' },
    ],
  },
  {
    label: 'Övriga tjänster',
    href: '/psykoterapi/',
    children: [
      { label: 'Psykoterapi', href: '/psykoterapi/' },
      { label: 'Handledning & grupp', href: '/handledning/' },
    ],
  },
  { label: 'Om oss', href: '/om-oss/' },
];
