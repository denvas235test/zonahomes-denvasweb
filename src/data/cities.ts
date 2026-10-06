import type { Faq } from './services';

export interface City {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { title: string; text: string }[];
  nearby: string[];
  faqs: Faq[];
}

export const cities: City[] = [
  {
    slug: 'sebring',
    name: 'Sebring',
    metaTitle: 'Sebring, FL Painter & Home Repairs | Zona Homes Services',
    metaDescription: 'Based in Sebring, FL: interior and exterior painting, epoxy garage floors, repairs, junk removal and deep cleaning. Call Zona Homes at (863) 449-1949.',
    h1: 'Painting, epoxy floors and home repairs in Sebring, FL',
    intro: 'Sebring is our home base. Whether you live near Lake Jackson, close to downtown or out along US-27, one crew can paint, repair, clean out and clean your home without you chasing different contractors.',
    sections: [
      {
        title: 'Homes we work on in Sebring',
        text: 'Sebring has a mix of older homes, newer subdivisions, rentals and seasonal properties. That means a lot of repainting for sun-faded stucco, garage floors that have never been coated, and units that need a quick turnaround between tenants or guests.',
      },
      {
        title: 'Why being local helps',
        text: 'We live and work in Sebring, so we can come out to look at a job quickly, schedule work around your timeline and be back fast if a touch-up is needed. For property managers and landlords in Sebring, that means shorter vacancies.',
      },
    ],
    nearby: ['Avon Park', 'Lake Placid', 'Frostproof'],
    faqs: [
      { q: 'Are you based in Sebring?', a: 'Yes. Zona Homes Services is based in Sebring, FL, and we also serve nearby cities within about 60 miles.' },
      { q: 'What services do you offer in Sebring?', a: 'Interior and exterior painting, epoxy and garage floors, repairs and handyman work, junk removal and deep cleaning.' },
      { q: 'Do you work with landlords and property managers in Sebring?', a: 'Yes. We handle unit turns with painting, cleaning, cleanouts and repairs from one crew, usually in 24 to 48 hours.' },
    ],
  },
  {
    slug: 'avon-park',
    name: 'Avon Park',
    metaTitle: 'Painting & Epoxy Floors in Avon Park, FL | Zona Homes',
    metaDescription: 'Painting, epoxy garage floors, repairs, junk removal and deep cleaning in Avon Park, FL, a short drive from our Sebring base. Call (863) 449-1949.',
    h1: 'Painting, epoxy floors and home repairs in Avon Park, FL',
    intro: 'Avon Park is a short drive north of our Sebring base on US-27, so we can reach you quickly for quotes and for the job itself. We paint, repair, clean out and clean homes and rentals across Avon Park.',
    sections: [
      {
        title: 'Homes we work on in Avon Park',
        text: 'Avon Park has older homes near the downtown area as well as newer subdivisions and lakeside properties. Older houses often need drywall repair and trim work before paint, and many garages are good candidates for an epoxy floor.',
      },
      {
        title: 'One crew for the whole list',
        text: 'If you are getting a house ready to sell, rent or move into, we can handle the cleanout, the repairs, the paint and the final cleaning in one project, which keeps the schedule simple.',
      },
    ],
    nearby: ['Sebring', 'Frostproof', 'Lake Placid'],
    faqs: [
      { q: 'Do you serve Avon Park?', a: 'Yes. Avon Park is part of our home-base area, a short drive from our Sebring base.' },
      { q: 'Can you paint and repair a house before I sell it?', a: 'Yes. Patching, painting and a final deep clean are a common combination for getting a house ready for the market.' },
      { q: 'Do you do epoxy garage floors in Avon Park?', a: 'Yes. We coat garage floors and workshops in Avon Park with decorative flakes in the colors you choose.' },
    ],
  },
  {
    slug: 'lake-placid',
    name: 'Lake Placid',
    metaTitle: 'Painting & Epoxy Floors in Lake Placid, FL | Zona Homes',
    metaDescription: 'Interior and exterior painting, epoxy garage floors, repairs, junk removal and deep cleaning in Lake Placid, FL. Call Zona Homes at (863) 449-1949.',
    h1: 'Painting, epoxy floors and home repairs in Lake Placid, FL',
    intro: 'Lake Placid is just south of Sebring on US-27, so it is an easy trip for our crew. We paint, repair, clean out and clean homes and rentals around Lake Placid, from golf and lakeside communities to older neighborhoods.',
    sections: [
      {
        title: 'Homes we work on in Lake Placid',
        text: 'Many homes around Lake Placid are second homes, seasonal rentals or retirement homes, so jobs often come with a deadline: a house to refresh before the season, or a unit to turn around between guests. We plan the work around your dates.',
      },
      {
        title: 'Exterior work that lasts',
        text: 'Sun and humidity take a toll on exterior paint around the lakes. We repair cracks, caulk, prime and then paint so the finish holds up, and we can add the garage door, the entry door and the garage floor to the same project.',
      },
    ],
    nearby: ['Sebring', 'Avon Park', 'Okeechobee'],
    faqs: [
      { q: 'Do you serve Lake Placid?', a: 'Yes. Lake Placid is part of our home-base area, a short drive south of Sebring.' },
      { q: 'Can you work around a seasonal rental schedule?', a: 'Yes. Tell us the dates you need the home ready and we plan the painting, repairs and cleaning around them.' },
      { q: 'Do you paint exteriors in Lake Placid?', a: 'Yes. We repaint stucco and siding, trim and doors, with repair and priming first so the paint bonds and lasts.' },
    ],
  },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug)!;
