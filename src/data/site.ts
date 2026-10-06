export const SITE = {
  name: 'Zona Homes Services LLC',
  short: 'Zona Homes Services',
  url: 'https://zonahomes-denvasweb.vercel.app',
  phoneDisplay: '(863) 449-1949',
  phoneTel: '+18634491949',
  slogan: 'We build. We fix. We clean.',
  locality: 'Sebring',
  region: 'FL',
  ogImage: 'https://res.cloudinary.com/kat6qihq/image/upload/zona-og-cover.jpg',
  /** Keep false while the site is being tested. Set to true at launch to allow Google to index it. */
  indexable: false,
  web3formsKey: '3b22060f-4d39-46bd-b017-f286a8af9fb1',
  cloudinary: 'https://res.cloudinary.com/kat6qihq/image/upload/',
};

export type Tier = 'home' | 'near' | 'far';

export interface Town {
  name: string;
  lat: number;
  lon: number;
  tier: Tier;
  /** city page slug if we have one */
  page?: string;
  label: { anchor: 'start' | 'middle' | 'end'; dx: number; dy: number };
  secondary?: boolean;
}

export const TOWNS: Town[] = [
  { name: 'Sebring',      lat: 27.4956, lon: -81.4409, tier: 'home', page: 'sebring', label: { anchor: 'middle', dx: 0, dy: 0 } },
  { name: 'Avon Park',    lat: 27.5959, lon: -81.5062, tier: 'home', page: 'avon-park', label: { anchor: 'end', dx: -13, dy: 6 }, secondary: true },
  { name: 'Lake Placid',  lat: 27.2931, lon: -81.3631, tier: 'home', page: 'lake-placid', label: { anchor: 'middle', dx: 0, dy: 30 } },
  { name: 'Frostproof',   lat: 27.7453, lon: -81.5312, tier: 'home', label: { anchor: 'end', dx: -13, dy: 6 }, secondary: true },
  { name: 'Wauchula',     lat: 27.5470, lon: -81.8115, tier: 'near', label: { anchor: 'end', dx: -13, dy: 6 } },
  { name: 'Lake Wales',   lat: 27.9014, lon: -81.5859, tier: 'near', label: { anchor: 'start', dx: 13, dy: 6 }, secondary: true },
  { name: 'Arcadia',      lat: 27.2159, lon: -81.8584, tier: 'near', label: { anchor: 'end', dx: -13, dy: 6 } },
  { name: 'Bartow',       lat: 27.8964, lon: -81.8431, tier: 'near', label: { anchor: 'end', dx: -13, dy: 6 }, secondary: true },
  { name: 'Winter Haven', lat: 28.0222, lon: -81.7329, tier: 'far',  label: { anchor: 'start', dx: 13, dy: 6 }, secondary: true },
  { name: 'Okeechobee',   lat: 27.2439, lon: -80.8298, tier: 'far',  label: { anchor: 'middle', dx: 0, dy: 30 } },
  { name: 'Haines City',  lat: 28.1145, lon: -81.6184, tier: 'far',  label: { anchor: 'end', dx: -13, dy: 6 }, secondary: true },
  { name: 'Davenport',    lat: 28.1611, lon: -81.6020, tier: 'far',  label: { anchor: 'start', dx: 13, dy: 6 } },
  { name: 'Lakeland',     lat: 28.0395, lon: -81.9498, tier: 'far',  label: { anchor: 'end', dx: -13, dy: 6 } },
];

export const TIER_TEXT: Record<Tier, { title: string; range: string }> = {
  home: { title: 'Home base', range: 'up to 20 miles' },
  near: { title: 'Nearby', range: '20 to 40 miles' },
  far: { title: 'Further out', range: '40 to 60 miles' },
};

export const townsByTier = (tier: Tier) => TOWNS.filter((t) => t.tier === tier);
export const cityOptions = [...TOWNS.map((t) => t.name), 'Other'];
