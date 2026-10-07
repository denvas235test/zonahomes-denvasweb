import { TOWNS } from '../data/site';

const CENTER = { lat: 27.4956, lon: -81.4409 };
export const MAP = { size: 640, c: 320, scale: 4.14 }; // px per mile; 70 mi = 290 px

export function project(lat: number, lon: number) {
  const dy = (lat - CENTER.lat) * 69.0;
  const dx = (lon - CENTER.lon) * 69.17 * Math.cos((CENTER.lat * Math.PI) / 180);
  return { x: MAP.c + dx * MAP.scale, y: MAP.c - dy * MAP.scale };
}

export const rings = [
  { mi: 70, fill: 'rgba(62,74,45,.035)' },
  { mi: 60, fill: 'rgba(62,74,45,.05)' },
  { mi: 40, fill: 'rgba(62,74,45,.08)' },
  { mi: 20, fill: 'rgba(62,74,45,.12)' },
];

export const mapTowns = TOWNS.filter((t) => t.name !== 'Sebring').map((t) => ({ ...t, ...project(t.lat, t.lon) }));
