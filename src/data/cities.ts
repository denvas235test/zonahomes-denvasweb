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
      { q: 'Are you based in Sebring?', a: 'Yes. Zona Homes Services is based in Sebring, FL, and we also serve nearby cities within about 70 miles.' },
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
  {
    slug: 'davenport',
    name: 'Davenport',
    metaTitle: 'Painting & Epoxy Floors in Davenport, FL | Zona Homes',
    metaDescription: 'Interior painting, epoxy garage floors, repairs, junk removal and deep cleaning in Davenport, FL, including rentals and vacation homes. Call (863) 449-1949.',
    h1: 'Painting, epoxy floors and home repairs in Davenport, FL',
    intro: 'We travel from our Sebring base to Davenport for painting, epoxy garage floors, repairs, junk removal and deep cleaning. Many homes here are newer subdivisions, second homes and rentals, so the work is often about a clean finish and a quick turnaround.',
    sections: [
      {
        title: 'Homes we work on in Davenport',
        text: 'Newer homes often come with bare concrete garages, builder-grade paint that scuffs easily and plain white walls. That makes interior repainting, epoxy garage floors and touch-up work common requests. We also repair drywall and trim before painting so the finish looks smooth.',
      },
      {
        title: 'Rentals and vacation homes',
        text: 'Owners and property managers around Davenport need units ready between guests or tenants. We handle painting, deep cleaning, junk removal and small repairs with one crew, usually in 24 to 48 hours. Tell us the dates and we plan the work around them.',
      },
    ],
    nearby: ['Haines City', 'Winter Haven', 'Lakeland'],
    faqs: [
      { q: 'Do you serve Davenport?', a: 'Yes. We are based in Sebring, FL and travel to Davenport for jobs. Tell us your address when you call so we can plan the visit.' },
      { q: 'Can you turn a rental or vacation home between guests?', a: 'Yes. We paint, deep clean, haul away leftovers and make small repairs, usually in 24 to 48 hours. See our make-ready service for property managers.' },
      { q: 'Do you do epoxy garage floors in Davenport?', a: 'Yes. We coat garage floors with epoxy and decorative flakes in the colors you choose.' },
    ],
  },
  {
    slug: 'sarasota',
    name: 'Sarasota',
    metaTitle: 'Painting & Epoxy Floors in Sarasota, FL | Zona Homes',
    metaDescription: 'Interior and exterior painting, epoxy garage floors, repairs, junk removal and deep cleaning in Sarasota, Bradenton and Lakewood Ranch. Call (863) 449-1949.',
    h1: 'Painting, epoxy floors and home repairs in Sarasota, FL',
    intro: 'Sarasota is one of the cities we travel to from our Sebring base. We paint, coat garage floors with epoxy, make small repairs, haul away junk and deep clean homes and rentals in Sarasota, Bradenton and Lakewood Ranch.',
    sections: [
      {
        title: 'Homes we work on in Sarasota',
        text: 'Homes near the Gulf deal with salt air, strong sun and humidity, which wear exterior paint faster. We repair cracks, caulk, prime and repaint exteriors, and we can add garage doors and garage floors to the same project. Inside, we repaint, repair drywall and clean up so the home is ready to use.',
      },
      {
        title: 'Planning the visit',
        text: 'We are based in Sebring, so tell us your address and what you need when you call. We confirm the scope and the price before we come, and we plan the schedule with you.',
      },
    ],
    nearby: ['Bradenton', 'Lakewood Ranch', 'Arcadia'],
    faqs: [
      { q: 'Are you based in Sarasota?', a: 'No. We are based in Sebring, FL and travel to Sarasota, Bradenton and Lakewood Ranch for jobs.' },
      { q: 'What services do you offer in Sarasota?', a: 'Interior and exterior painting, epoxy and garage floors, repairs and handyman work, junk removal and deep cleaning.' },
      { q: 'How do I get a quote for a job in Sarasota?', a: 'Call (863) 449-1949 or send the quote form with your address and a short description of the job, and we will call you back.' },
    ],
  },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug)!;
