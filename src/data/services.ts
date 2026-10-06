export interface Faq { q: string; a: string }

export interface Service {
  slug: string;
  name: string;           // used in lists, nav and the quote form
  formValue: string;      // value in the quote form select
  imageId: string;        // Cloudinary public id
  imgW: number;
  imgH: number;
  imgAlt: string;
  card: string;           // one line for cards
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  includesTitle: string;
  includes: string[];
  process: { title: string; text: string }[];
  tips: { title: string; text: string }[];
  faqs: Faq[];
  related: string[];
  schemaType: string;
}

export const services: Service[] = [
  {
    slug: 'interior-painting',
    name: 'Interior painting',
    formValue: 'Interior painting',
    imageId: 'zona-interior-painting-hallway',
    imgW: 1792, imgH: 2400,
    imgAlt: "Hallway with freshly painted walls, white doors and trim, painter's tape on a door frame and a roller tray on the floor",
    card: 'Walls, ceilings, trim and doors, with careful prep and clean lines.',
    metaTitle: 'Interior Painting in Sebring, FL | Zona Homes',
    metaDescription: 'Interior painting for walls, ceilings, trim and doors in Sebring, FL and nearby cities. Careful prep, sharp lines and tidy cleanup. Call (863) 449-1949.',
    h1: 'Interior painting in Sebring, FL',
    intro: [
      'Fresh paint is the fastest way to make a room feel new. We paint walls, ceilings, trim and doors in homes, rentals and vacant units across Sebring, Avon Park, Lake Placid and the cities around them.',
      'Most of what makes a paint job look good happens before the first coat: patching, sanding, taping and protecting your floors and furniture. We take that part seriously so the finish is even and the lines come out sharp.',
    ],
    includesTitle: 'What an interior paint job covers',
    includes: [
      'Walls and ceilings',
      'Trim, baseboards and doors',
      'Accent walls and full color changes',
      'Drywall patching and caulking before paint',
      'Floors protected and furniture covered',
      'Cleanup when the job is done',
    ],
    process: [
      { title: 'Tell us about the rooms', text: 'Call or send the form with the rooms, the colors you have in mind and any repairs the walls need.' },
      { title: 'Agree on scope and price', text: 'We confirm what gets painted and what it costs before any work starts.' },
      { title: 'Prep the surfaces', text: 'We patch holes, sand rough spots, caulk gaps and tape off trim, then protect floors and furniture.' },
      { title: 'Paint', text: 'Primer where it is needed, then the finish coats, cutting in clean lines at ceilings, corners and trim.' },
      { title: 'Clean up and walk through', text: 'We pick up, remove the tape and go through the rooms with you before we leave.' },
    ],
    tips: [
      { title: 'Humidity changes the paint you pick', text: 'Florida humidity slows drying and can show up as mildew in bathrooms and laundry rooms. In those rooms, ask for a mildew-resistant paint.' },
      { title: 'Match the sheen to the room', text: 'Flat or matte hides flaws on ceilings, eggshell or satin works in living areas and bedrooms, and semi-gloss holds up on trim, kitchens and baths.' },
      { title: 'Rentals need tough paint', text: 'For rentals and unit turns, a scrubbable paint saves repaints later. See our make-ready service for property managers.' },
    ],
    faqs: [
      { q: 'How long does it take to paint a room?', a: 'A typical bedroom takes about a day including prep, and a big color change may need an extra coat. Whole-house jobs take longer. We give you a timeline when we quote the job.' },
      { q: 'Do I need to move my furniture?', a: 'Clearing small items helps. We cover what stays in the room. Tell us about heavy furniture when you call so we can plan for it.' },
      { q: 'Can you fix holes and cracks before painting?', a: 'Yes. Patching drywall, filling nail holes and caulking gaps is part of the prep, and it is a big part of why the finish looks smooth.' },
      { q: 'Can you paint a rental between tenants?', a: 'Yes. We handle unit turns for property managers and landlords, usually together with deep cleaning and small repairs. Read about make-ready service for property managers.' },
      { q: 'How do I get a quote?', a: 'Call (863) 449-1949 or fill in the quote form on this page. Tell us the rooms and what you want done, and we will call you back.' },
    ],
    related: ['exterior-painting', 'repairs-handyman', 'deep-cleaning'],
    schemaType: 'Interior painting',
  },
  {
    slug: 'exterior-painting',
    name: 'Exterior painting',
    formValue: 'Exterior painting',
    imageId: 'zona-exterior-painting-house',
    imgW: 2400, imgH: 1792,
    imgAlt: 'Single-story Florida home with fresh white paint and a navy blue front door',
    card: 'Stucco, siding and trim repainted to stand up to Florida sun and rain.',
    metaTitle: 'Exterior House Painting in Sebring, FL | Zona Homes',
    metaDescription: 'Exterior house painting for stucco, siding, trim and doors in Sebring, FL and nearby cities. Proper prep for Florida sun and rain. Call (863) 449-1949.',
    h1: 'Exterior house painting in Sebring, FL',
    intro: [
      'Sun, heat and afternoon storms are hard on exterior paint. A well-prepped repaint protects stucco and siding and gives the whole house a fresh look from the street.',
      'We paint exteriors of homes in Sebring, Avon Park, Lake Placid and nearby cities, including walls, trim, doors and garage doors. The prep is where we spend our time: clean surfaces, sealed cracks and primed bare spots.',
    ],
    includesTitle: 'What an exterior paint job covers',
    includes: [
      'Stucco and siding walls',
      'Trim, fascia and soffits',
      'Front doors and garage doors',
      'Crack repair and caulking',
      'Primer on bare or repaired spots',
      'Cleanup of the work area',
    ],
    process: [
      { title: 'Look at the house', text: 'We check the walls, trim and any cracks or peeling so the quote matches the real condition of the house.' },
      { title: 'Choose colors and agree on price', text: 'You pick the colors and we confirm scope and cost before starting.' },
      { title: 'Clean and repair', text: 'We clean the surfaces, patch cracks, caulk joints and prime bare areas so the new paint bonds.' },
      { title: 'Paint', text: 'Finish coats on walls first, then trim and doors, protecting plants, windows and walkways.' },
      { title: 'Final check', text: 'We touch up, clean up and walk around the house with you.' },
    ],
    tips: [
      { title: 'Seal hairline cracks first', text: 'Small cracks in stucco let rain in. Paint over an open crack and it will show again, so we patch them before painting.' },
      { title: 'Dry days matter', text: 'Exterior paint needs dry surfaces. In the rainy season we plan around afternoon storms so each coat can cure properly.' },
      { title: 'Light colors reflect heat', text: 'Lighter exterior colors reflect more sun, which helps the paint last and can keep walls cooler.' },
    ],
    faqs: [
      { q: 'Can you paint stucco?', a: 'Yes. Stucco is the most common exterior in our area. We repair cracks and prime where needed before the finish coats.' },
      { q: 'What happens if it rains during the job?', a: 'We reschedule around rain so the paint can dry the way it should. Rushing paint onto wet walls leads to peeling later.' },
      { q: 'How long will exterior paint last in Florida?', a: 'It depends on the surface, the paint and how much sun the walls get. Good prep and quality paint are what stretch it, and we will tell you what to expect for your house.' },
      { q: 'Do you paint garage doors and entry doors?', a: 'Yes. Doors are a quick way to change how a house looks and we can include them in the same job.' },
      { q: 'How do I get a quote?', a: 'Call (863) 449-1949 or use the quote form on this page. Tell us about the house and we will call you back.' },
    ],
    related: ['interior-painting', 'repairs-handyman', 'epoxy-garage-floors'],
    schemaType: 'Exterior painting',
  },
  {
    slug: 'epoxy-garage-floors',
    name: 'Epoxy and garage floors',
    formValue: 'Epoxy / garage floor',
    imageId: 'zona-epoxy-garage-card',
    imgW: 1792, imgH: 2400,
    imgAlt: 'Garage with a new gray epoxy floor and decorative flakes',
    card: 'A seamless, easy-to-clean floor with decorative flakes.',
    metaTitle: 'Epoxy Garage Floors in Sebring, FL | Zona Homes',
    metaDescription: 'Epoxy garage floor coatings with decorative flakes in Sebring, FL and nearby cities. Seamless, easy-to-clean floors for garages. Call (863) 449-1949.',
    h1: 'Epoxy garage floors in Sebring, FL',
    intro: [
      'An epoxy coating turns a stained, dusty concrete slab into a smooth surface you can sweep and mop. It also makes a garage look finished, which matters for homeowners and for rentals.',
      'We coat garage floors and workshops in Sebring, Avon Park, Lake Placid and the cities around them, finishing with decorative flakes in the color mix you choose.',
    ],
    includesTitle: 'What an epoxy floor job covers',
    includes: [
      'Cleaning and preparing the concrete',
      'Repair of cracks and chips',
      'Epoxy base coat in your color',
      'Decorative flakes in the mix you choose',
      'Clear protective topcoat',
      'Cleanup and care instructions',
    ],
    process: [
      { title: 'Look at the floor', text: 'We check the concrete for cracks, stains, old coatings and moisture so the quote fits the real condition of the slab.' },
      { title: 'Pick the look', text: 'Choose a base color and a flake mix. We confirm the price and the schedule before starting.' },
      { title: 'Prepare the surface', text: 'The slab is cleaned and prepared, and cracks and chips are repaired, so the coating bonds to the concrete.' },
      { title: 'Coat and add flakes', text: 'We apply the base coat and broadcast the flakes while it is wet.' },
      { title: 'Seal and cure', text: 'A clear topcoat protects the flakes. We tell you how long to stay off the floor before it is ready for use.' },
    ],
    tips: [
      { title: 'Prep decides how long it lasts', text: 'Epoxy peels when it is applied over dirt, oil or loose concrete. Surface preparation is the step that makes the floor last.' },
      { title: 'Moisture in the slab', text: 'Florida slabs can hold moisture. A floor with a moisture problem needs the right system, so we look at the slab before promising a result.' },
      { title: 'Give it time to cure', text: 'The floor needs time before cars and heavy items go back. We tell you the exact timing for the product used on your garage.' },
    ],
    faqs: [
      { q: 'How long does an epoxy garage floor take?', a: 'Most garage floors take a couple of days from preparation to the final coat, and curing time comes after that. We give you the exact timing for your floor when we quote.' },
      { q: 'Can you put epoxy over old paint or an old coating?', a: 'It depends on the condition. Old coatings usually have to be removed or sanded so the new one bonds, and we check this when we look at the floor.' },
      { q: 'Is an epoxy floor slippery?', a: 'Decorative flakes add some texture. If you want more grip, ask about an anti-slip additive in the topcoat.' },
      { q: 'What colors can I choose?', a: 'Tell us the look you want, such as a light gray base with a mixed flake, and we will go over what is possible for your garage.' },
      { q: 'Can you clear out the garage first?', a: 'Yes. We also do junk removal, so we can haul away what you no longer need and coat the floor in the same project.' },
    ],
    related: ['junk-removal', 'repairs-handyman', 'exterior-painting'],
    schemaType: 'Epoxy garage floor coating',
  },
  {
    slug: 'repairs-handyman',
    name: 'Repairs and handyman',
    formValue: 'Repairs / handyman',
    imageId: 'zona-drywall-repair',
    imgW: 1792, imgH: 2400,
    imgAlt: 'Wall with a sanded drywall patch ready for paint, with a putty knife, sanding block and step ladder',
    card: 'Drywall patches, small fixes and punch lists, finished and ready for paint.',
    metaTitle: 'Handyman & Home Repairs in Sebring, FL | Zona Homes',
    metaDescription: 'Handyman services in Sebring, FL: drywall repair, small home repairs and punch lists for homeowners and rentals. Call (863) 449-1949 for a quote.',
    h1: 'Handyman and small home repairs in Sebring, FL',
    intro: [
      'Small repairs pile up fast: a hole in the drywall, a damaged door, a gap in the trim. We take care of them so the house looks cared for and the paint goes on a smooth surface.',
      'We work on small repairs for homeowners, landlords and property managers in Sebring, Avon Park, Lake Placid and nearby cities, especially drywall and the fixes that come before a paint job or a new tenant.',
    ],
    includesTitle: 'Repairs we take on',
    includes: [
      'Drywall patches and holes',
      'Trim, baseboard and door repairs',
      'Caulking and sealing gaps',
      'Touch-ups after a repair',
      'Punch lists for rentals and unit turns',
      'Small fixes around the house',
    ],
    process: [
      { title: 'Send us the list', text: 'Call or use the form and tell us what needs fixing. Photos and a short list make the quote faster.' },
      { title: 'Confirm scope and price', text: 'We tell you what we can take on and what it costs before starting.' },
      { title: 'Repair', text: 'We fix each item, sanding and finishing so repairs blend in with the surrounding surface.' },
      { title: 'Paint or touch up', text: 'If you want, we paint the repaired area or the whole room in the same visit.' },
      { title: 'Clean up', text: 'We pick up the dust and debris and go through the list with you.' },
    ],
    tips: [
      { title: 'Repair before you paint', text: 'Paint highlights bumps and holes. Fixing the wall first is what makes the final coat look smooth.' },
      { title: 'Batch small jobs', text: 'Several small repairs in one visit usually cost less than separate trips. Keep a list and send it all at once.' },
      { title: 'Know the limits', text: 'We focus on small repairs, drywall and paint-related work. If your list includes electrical, plumbing or roofing, we will say so up front.' },
    ],
    faqs: [
      { q: 'What kind of jobs do you take?', a: 'Small repairs such as drywall patches, trim and door fixes, caulking and punch lists, along with the finishing work that goes with them.' },
      { q: 'What do you not do?', a: 'Electrical, plumbing and roofing are outside what we do. If your list includes them, we tell you right away so you can plan around it.' },
      { q: 'Can you fix a wall and paint it in one visit?', a: 'Yes. We repair, sand and paint the area, or the whole room if you want a uniform finish.' },
      { q: 'Do you do punch lists for rentals?', a: 'Yes. A punch list before a new tenant moves in is a common job for us, often together with painting and cleaning.' },
      { q: 'How do I get a quote?', a: 'Call (863) 449-1949 or fill in the form on this page with a short list of what needs fixing.' },
    ],
    related: ['interior-painting', 'deep-cleaning', 'junk-removal'],
    schemaType: 'Handyman and home repair',
  },
  {
    slug: 'junk-removal',
    name: 'Junk removal',
    formValue: 'Junk removal',
    imageId: 'zona-junk-removal-garage',
    imgW: 1792, imgH: 2400,
    imgAlt: 'Garage being cleared out, with a sofa and cardboard waiting to be hauled away on a trailer',
    card: 'Garages, sheds and move-outs cleared and hauled away with our trailer.',
    metaTitle: 'Junk Removal in Sebring, FL | Zona Homes',
    metaDescription: 'Junk removal and cleanouts for garages, sheds and move-outs in Sebring, FL and nearby cities. We load it and haul it away. Call (863) 449-1949.',
    h1: 'Junk removal in Sebring, FL',
    intro: [
      'A garage full of old furniture, boxes and leftovers from a move is a job nobody wants to do. We load it up and haul it away with our trailer, so you get your space back.',
      'We clear garages, sheds, storage rooms and rentals in Sebring, Avon Park, Lake Placid and the cities around them. It also pairs well with painting, epoxy floors and deep cleaning when the space needs more than a cleanout.',
    ],
    includesTitle: 'What we haul away',
    includes: [
      'Furniture and mattresses',
      'Boxes and household items',
      'Garage and shed cleanouts',
      'Move-out and rental cleanouts',
      'Items left behind by tenants',
      'A sweep of the area when we finish',
    ],
    process: [
      { title: 'Tell us what and where', text: 'Describe what needs to go, where it is and how easy it is to reach.' },
      { title: 'Get a price for the job', text: 'The quote is based on how much there is and how hard it is to get out, and we confirm it before we load.' },
      { title: 'We load and haul', text: 'We do the lifting and carrying. You do not need to move anything to the curb.' },
      { title: 'Sweep up', text: 'We leave the space swept and ready for the next step.' },
    ],
    tips: [
      { title: 'Keep, donate or toss', text: 'Set aside what you want to keep before we arrive. Anything usable you can donate yourself before the haul.' },
      { title: 'Hazardous items are not accepted', text: 'Paint, chemicals, batteries, propane and similar items need special disposal and are not part of a normal haul.' },
      { title: 'Clear first, then finish', text: 'An empty garage is ready for an epoxy floor, and an empty unit is ready for paint and cleaning.' },
    ],
    faqs: [
      { q: 'What can you haul?', a: 'Furniture, mattresses, boxes, household items and general cleanout debris. Tell us what you have when you call and we confirm it fits.' },
      { q: 'What can you not take?', a: 'Hazardous items such as paint, chemicals, batteries and propane cannot go in a normal haul. We tell you if something on your list needs special disposal.' },
      { q: 'How is junk removal priced?', a: 'By the job, based on how much there is and how easy it is to reach. We give you the price before we load anything.' },
      { q: 'Do I have to be home?', a: 'Not always. Tell us about access when you call, and we will work out a plan that fits your situation.' },
      { q: 'Can you clear out a rental after a tenant leaves?', a: 'Yes. Cleanouts are part of our make-ready service for property managers, together with painting, cleaning and repairs.' },
    ],
    related: ['deep-cleaning', 'epoxy-garage-floors', 'interior-painting'],
    schemaType: 'Junk removal',
  },
  {
    slug: 'deep-cleaning',
    name: 'Deep cleaning',
    formValue: 'Deep cleaning',
    imageId: 'zona-deep-cleaning-kitchen',
    imgW: 1792, imgH: 2400,
    imgAlt: 'Clean kitchen with wood cabinets, white counters and a damp tile floor, with a mop and cleaning supplies',
    card: 'Kitchens, bathrooms and whole homes cleaned top to bottom.',
    metaTitle: 'Deep Cleaning in Sebring, FL | Zona Homes',
    metaDescription: 'Deep cleaning for homes, move-outs and rentals in Sebring, FL and nearby cities. Kitchens, bathrooms and floors cleaned top to bottom. Call (863) 449-1949.',
    h1: 'Deep cleaning in Sebring, FL',
    intro: [
      'A deep clean goes further than a regular tidy-up. It reaches the places that build up grime over time, such as kitchens, bathrooms, baseboards and floors, and it is what a home needs before a move-in or after construction.',
      'We deep clean homes and rentals in Sebring, Avon Park, Lake Placid and nearby cities, and we often do it right after painting or repairs so the space is ready to use.',
    ],
    includesTitle: 'What a deep clean covers',
    includes: [
      'Kitchens: counters, sinks, cabinet fronts and appliance exteriors',
      'Bathrooms: tubs, showers, toilets and sinks',
      'Floors vacuumed and mopped',
      'Baseboards, doors and light switches wiped',
      'Window sills and interior glass',
      'Trash removed and the space left ready to use',
    ],
    process: [
      { title: 'Tell us about the space', text: 'Share the size of the home, how it is used and what needs the most attention.' },
      { title: 'Agree on scope and price', text: 'We confirm what is included and the price before we start.' },
      { title: 'Clean top to bottom', text: 'We work from the highest surfaces down so dust and dirt end up on the floor, which we clean last.' },
      { title: 'Final walkthrough', text: 'We go through the rooms with you to make sure nothing was missed.' },
    ],
    tips: [
      { title: 'After painting or repairs', text: 'Dust from sanding and patching settles everywhere. A deep clean after the work leaves the space ready to use.' },
      { title: 'Between tenants', text: 'A clean unit rents faster. Cleaning is part of our make-ready service for property managers.' },
      { title: 'Tell us your priorities', text: 'If the kitchen or bathrooms matter most, tell us when you call and we will focus the time there.' },
    ],
    faqs: [
      { q: 'What is the difference between regular and deep cleaning?', a: 'A regular clean maintains a space that is already in good shape. A deep clean reaches built-up grime in kitchens, bathrooms, baseboards and floors, and suits a move-in, a move-out or the end of a project.' },
      { q: 'Can you clean after painting or repairs?', a: 'Yes. Post-work cleaning is a common job for us, and we can schedule it right after the painting or repair work.' },
      { q: 'Do you do move-out cleaning?', a: 'Yes. Move-out cleaning for homes and rentals is one of the most common requests.' },
      { q: 'Do I have to be home?', a: 'Not always. Tell us about access when you call and we will work out a plan that fits.' },
      { q: 'How do I get a quote?', a: 'Call (863) 449-1949 or use the quote form on this page with the size of the home and what you need.' },
    ],
    related: ['interior-painting', 'junk-removal', 'repairs-handyman'],
    schemaType: 'Deep cleaning',
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug)!;
