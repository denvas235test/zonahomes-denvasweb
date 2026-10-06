import { SITE } from '../data/site';

/** Delivery URL only: the originals uploaded to Cloudinary are never modified. */
export const cld = (id: string, w: number) => `${SITE.cloudinary}f_auto,q_auto:best,w_${w}/${id}`;
export const cldSrcset = (id: string, widths: number[]) => widths.map((w) => `${cld(id, w)} ${w}w`).join(', ');
