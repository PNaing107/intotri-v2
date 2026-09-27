export type EventCategory = "senior" | "junior";

export type Event = {
  name: string;
  slug: string;
  description: string;
  date: string;
  eventThumbnail: string;
  format: string;
  location: string;
  address: string;
  googleMapsUrl: string;
  category: EventCategory;
  images: {
    mobile: string[];
    desktop: string[];
  };
};

export const events: Event[] = [
  {
    name: "An Res Hellys | Cornish GP Race 4",
    slug: "an-res-hellys",
    description:
      "10 mile multi-terrain running race starting and finishing in Helston",
    date: "2027-04-04",
    eventThumbnail: "assets/event_logos/an-res-white.png",
    format: "running",
    location: "Helston",
    address: "The Old Cattle Market, Helston, TR13 0SR",
    googleMapsUrl: "https://maps.app.goo.gl/WsTsM49qMwxuickY9",
    category: "senior",
    images: {
      mobile: [
        "src/assets/an-res/bhicks_portrait.jpg",
        "src/assets/an-res/Aggie_lead_bike_portrait.jpg",
      ],
      desktop: [
        "src/assets/slideshow/desktop/faltri-118.jpg",
        "src/assets/slideshow/desktop/kernowman26-394.jpg",
      ],
    },
  },
  {
    name: "Falmouth Half Marathon | Cornish GP Race 5",
    slug: "falmouth-half",
    description:
      "Half marathon taking in views of Gyllyngvase, Swanpool and Maenporth beaches",
    date: "2027-03-14",
    eventThumbnail: "assets/event_logos/run_falmouth.png",
    format: "running",
    location: "Falmouth",
    address: "Princess Pavilion, Falmouth, TR11 4AR",
    googleMapsUrl: "https://maps.app.goo.gl/j4aGS9Q22b1gD2tC8",
    category: "senior",
    images: {
      mobile: [
        "src/assets/an-res/bhicks_portrait.jpg",
        "src/assets/an-res/Aggie_lead_bike_portrait.jpg",
      ],
      desktop: [
        "src/assets/slideshow/desktop/faltri-118.jpg",
        "src/assets/slideshow/desktop/kernowman26-394.jpg",
      ],
    },
  },
  // {
  //   "name": "Wheal Jane Duathlon (New Event for 2026)",
  //   "slug": "wheal-jane-duathlon",
  //   "description": "Duathlon with a closed road bike circuit and trail run around Wheal Jane",
  //   "date": "2027-03-22",
  //   "eventThumbnail": "assets/event_logos/bhicks.jpg",
  //   "format": "duathlon",
  //   "location": "Wheal Jane",
  //   "category": "senior",
  // },
  {
    name: "Par Duathlon | The Hare",
    slug: "par",
    description:
      "Duathlon with a closed road bike circuit and trail run around Par",
    date: "2027-03-27",
    eventThumbnail: "assets/event_logos/bhicks.jpg",
    format: "duathlon (run - bike - run)",
    location: "Par",
    address: " Par Athletics Track, PL24 2PB",
    googleMapsUrl: "https://maps.app.goo.gl/8qveZyRoHWi8CqUo7",
    category: "senior",
    images: {
      mobile: [
        "src/assets/an-res/bhicks_portrait.jpg",
        "src/assets/an-res/Aggie_lead_bike_portrait.jpg",
      ],
      desktop: [
        "src/assets/slideshow/desktop/faltri-118.jpg",
        "src/assets/slideshow/desktop/kernowman26-394.jpg",
      ],
    },
  },
  {
    name: "Par Duathlon | Mini Hare",
    slug: "par",
    description:
      "Duathlon with a closed road bike circuit and trail run around Par",
    date: "2027-03-27",
    eventThumbnail: "assets/event_logos/bhicks.jpg",
    format: "duathlon (run - bike - run)",
    location: "Par",
    address: " Par Athletics Track, PL24 2PB",
    googleMapsUrl: "https://maps.app.goo.gl/8qveZyRoHWi8CqUo7",
    category: "junior",
    images: {
      mobile: [
        "src/assets/an-res/bhicks_portrait.jpg",
        "src/assets/an-res/Aggie_lead_bike_portrait.jpg",
      ],
      desktop: [
        "src/assets/slideshow/desktop/faltri-118.jpg",
        "src/assets/slideshow/desktop/kernowman26-394.jpg",
      ],
    },
  },
  {
    name: "Wadebridge Tri | The Camel",
    slug: "wadebridge",
    description: "Need to think of a description for this event",
    date: "2027-04-25",
    eventThumbnail: "assets/event_logos/bhicks.jpg",
    format: "triathlon",
    location: "Wadebridge",
    address: "Wadebridge Leisure Centre, PL27 6BU",
    googleMapsUrl: "https://maps.app.goo.gl/5pKnZpqWXxMG6wFo8",
    category: "senior",
    images: {
      mobile: [
        "src/assets/an-res/bhicks_portrait.jpg",
        "src/assets/an-res/Aggie_lead_bike_portrait.jpg",
      ],
      desktop: [
        "src/assets/slideshow/desktop/faltri-118.jpg",
        "src/assets/slideshow/desktop/kernowman26-394.jpg",
      ],
    },
  },
  {
    name: "Wadebridge Tri | Mini Camel",
    slug: "wadebridge",
    description: "Scootathlon (5-8 year olds), Mini Tri (8-16 year olds)",
    date: "2027-04-25",
    eventThumbnail: "assets/event_logos/bhicks.jpg",
    format: "scootathlon",
    location: "Wadebridge",
    address: "Wadebridge Leisure Centre, PL27 6BU",
    googleMapsUrl: "https://maps.app.goo.gl/5pKnZpqWXxMG6wFo8",
    category: "junior",
    images: {
      mobile: [
        "src/assets/an-res/bhicks_portrait.jpg",
        "src/assets/an-res/Aggie_lead_bike_portrait.jpg",
      ],
      desktop: [
        "src/assets/slideshow/desktop/faltri-118.jpg",
        "src/assets/slideshow/desktop/kernowman26-394.jpg",
      ],
    },
  },
  {
    name: "Marazion Tri | The Kernowman",
    slug: "kernowman",
    description:
      "Cornwall's largest triathlon / aquabike event with distances ranging from super sprint to 70.3",
    date: "2027-05-29",
    eventThumbnail: "assets/event_logos/kernowman.png",
    format: "triathlon",
    location: "Marazion",
    address: "Marazion Beach, TR17 0EQ",
    googleMapsUrl: "https://maps.app.goo.gl/hP4KRQozw8SvWxNk6",
    category: "senior",
    images: {
      mobile: [
        "src/assets/an-res/bhicks_portrait.jpg",
        "src/assets/an-res/Aggie_lead_bike_portrait.jpg",
      ],
      desktop: [
        "src/assets/slideshow/desktop/faltri-118.jpg",
        "src/assets/slideshow/desktop/kernowman26-394.jpg",
      ],
    },
  },
  {
    name: "Marazion Tri | Kernow-kid",
    slug: "kernow-kid",
    description: "Scootathlon (5-8 year olds), Aquathlon (8-16 year olds)",
    date: "2027-05-29",
    eventThumbnail: "assets/event_logos/kernowman.png",
    format: "aquathlon",
    location: "Marazion",
    address: "Marazion Beach, TR17 0EQ",
    googleMapsUrl: "https://maps.app.goo.gl/hP4KRQozw8SvWxNk6",
    category: "junior",
    images: {
      mobile: [
        "src/assets/an-res/bhicks_portrait.jpg",
        "src/assets/an-res/Aggie_lead_bike_portrait.jpg",
      ],
      desktop: [
        "src/assets/slideshow/desktop/faltri-118.jpg",
        "src/assets/slideshow/desktop/kernowman26-394.jpg",
      ],
    },
  },
  {
    name: "Tavistock Tri | The Squirrel",
    slug: "tavistock",
    description: "Need to think of a description for this event",
    date: "2027-07-18",
    eventThumbnail: "assets/event_logos/bhicks.jpg",
    format: "triathlon",
    location: "Tavistock",
    address: "Mount Kelly, Tavistock, PL19 0HZ",
    googleMapsUrl: "https://maps.app.goo.gl/kRWp9ubSQyePmztg9",
    category: "senior",
    images: {
      mobile: [
        "src/assets/an-res/bhicks_portrait.jpg",
        "src/assets/an-res/Aggie_lead_bike_portrait.jpg",
      ],
      desktop: [
        "src/assets/slideshow/desktop/faltri-118.jpg",
        "src/assets/slideshow/desktop/kernowman26-394.jpg",
      ],
    },
  },
  {
    name: "Tavistock Tri | Mini Squirrel",
    slug: "tavistock",
    description: "Micro Duathlon (5-8 year olds), Mini Tri (8-16 year olds)",
    date: "2027-07-18",
    eventThumbnail: "assets/event_logos/bhicks.jpg",
    format: "triathlon & scootathlon",
    location: "Tavistock",
    address: "Mount Kelly, Tavistock, PL19 0HZ",
    googleMapsUrl: "https://maps.app.goo.gl/kRWp9ubSQyePmztg9",
    category: "junior",
    images: {
      mobile: [
        "src/assets/an-res/bhicks_portrait.jpg",
        "src/assets/an-res/Aggie_lead_bike_portrait.jpg",
      ],
      desktop: [
        "src/assets/slideshow/desktop/faltri-118.jpg",
        "src/assets/slideshow/desktop/kernowman26-394.jpg",
      ],
    },
  },
  {
    name: "Bodmin Tri | The Dragon",
    slug: "bodmin",
    description: "Need to think of a description for this event",
    date: "2027-08-22",
    eventThumbnail: "assets/event_logos/bhicks.jpg",
    format: "triathlon",
    location: "Bodmin",
    address: "Bodmin Leisure Centre, Bodmin, PL31 1DE",
    googleMapsUrl: "https://maps.app.goo.gl/S3PdXSXimR7BfWG98",
    category: "senior",
    images: {
      mobile: [
        "src/assets/an-res/bhicks_portrait.jpg",
        "src/assets/an-res/Aggie_lead_bike_portrait.jpg",
      ],
      desktop: [
        "src/assets/slideshow/desktop/faltri-118.jpg",
        "src/assets/slideshow/desktop/kernowman26-394.jpg",
      ],
    },
  },
  {
    name: "Bodmin Tri | Mini Dragon",
    slug: "bodmin",
    description: "Micro Duathlon (5-8 year olds), Mini Tri (8-16 year olds)",
    date: "2027-08-22",
    eventThumbnail: "assets/event_logos/bodmin-junior.png",
    format: "triathlon & scootathlon",
    location: "Bodmin",
    address: "Bodmin Leisure Centre, Bodmin, PL31 1DE",
    googleMapsUrl: "https://maps.app.goo.gl/S3PdXSXimR7BfWG98",
    category: "junior",
    images: {
      mobile: [
        "src/assets/an-res/bhicks_portrait.jpg",
        "src/assets/an-res/Aggie_lead_bike_portrait.jpg",
      ],
      desktop: [
        "src/assets/slideshow/desktop/faltri-118.jpg",
        "src/assets/slideshow/desktop/kernowman26-394.jpg",
      ],
    },
  },
  {
    name: "Perranporth Tri | The Shark",
    slug: "perranporth",
    description: "Need to think of a description for this event",
    date: "2027-09-12",
    eventThumbnail: "assets/event_logos/bhicks.jpg",
    format: "triathlon",
    location: "Perranporth",
    address: "Perranporth Beach, TR6 0EY",
    googleMapsUrl: "https://maps.app.goo.gl/wGabRKYKVm5vY3Dy5",
    category: "senior",
    images: {
      mobile: [
        "src/assets/an-res/bhicks_portrait.jpg",
        "src/assets/an-res/Aggie_lead_bike_portrait.jpg",
      ],
      desktop: [
        "src/assets/slideshow/desktop/faltri-118.jpg",
        "src/assets/slideshow/desktop/kernowman26-394.jpg",
      ],
    },
  },
  {
    name: "Falmouth Tri | The Seal",
    slug: "falmouth",
    description: "Need to think of a description for this event",
    date: "2027-09-19",
    eventThumbnail: "assets/event_logos/faltri-logo.jpg",
    format: "triathlon",
    location: "Falmouth",
    address: "Gyllyngvase Beach, Falmouth, TR11 4PA",
    googleMapsUrl: "https://maps.app.goo.gl/Hrv2uGTGvxb5tY658",
    category: "senior",
    images: {
      mobile: [
        "src/assets/an-res/bhicks_portrait.jpg",
        "src/assets/an-res/Aggie_lead_bike_portrait.jpg",
      ],
      desktop: [
        "src/assets/slideshow/desktop/faltri-118.jpg",
        "src/assets/slideshow/desktop/kernowman26-394.jpg",
      ],
    },
  },
  {
    name: "Falmouth Tri | Mini Seal",
    slug: "falmouth",
    description: "Scootathlon (5-8 year olds), Mini Tri (8-16 year olds)",
    date: "2027-09-19",
    eventThumbnail: "assets/event_logos/faltri-kids-logo.jpg",
    format: "triathlon & scootathlon",
    location: "Falmouth",
    address: "Gyllyngvase Beach, Falmouth, TR11 4PA",
    googleMapsUrl: "https://maps.app.goo.gl/Hrv2uGTGvxb5tY658",
    category: "junior",
    images: {
      mobile: [
        "src/assets/an-res/bhicks_portrait.jpg",
        "src/assets/an-res/Aggie_lead_bike_portrait.jpg",
      ],
      desktop: [
        "src/assets/slideshow/desktop/faltri-118.jpg",
        "src/assets/slideshow/desktop/kernowman26-394.jpg",
      ],
    },
  },
  {
    name: "Selsey Tri",
    slug: "selsey",
    description: "Need to think of a description for this event",
    date: "2027-10-04",
    eventThumbnail: "assets/event_logos/bhicks.jpg",
    format: "triathlon",
    location: "Selsey",
    address: "Seal Bay Resort, Selsey, PO20 0HL",
    googleMapsUrl: "https://maps.app.goo.gl/CdcJ2N1nbYXPQV9a7",
    category: "senior",
    images: {
      mobile: [
        "src/assets/an-res/bhicks_portrait.jpg",
        "src/assets/an-res/Aggie_lead_bike_portrait.jpg",
      ],
      desktop: [
        "src/assets/slideshow/desktop/faltri-118.jpg",
        "src/assets/slideshow/desktop/kernowman26-394.jpg",
      ],
    },
  },
  {
    name: "Selsey Junior Triathlon",
    slug: "selsey",
    description: "Scootathlon (5-8 year olds), Mini Tri (8-16 year olds)",
    date: "2027-10-04",
    eventThumbnail: "assets/event_logos/bhicks.jpg",
    format: "triathlon & scootathlon",
    location: "Selsey",
    address: "Seal Bay Resort, Selsey, PO20 0HL",
    googleMapsUrl: "https://maps.app.goo.gl/CdcJ2N1nbYXPQV9a7",
    category: "junior",
    images: {
      mobile: [
        "src/assets/an-res/bhicks_portrait.jpg",
        "src/assets/an-res/Aggie_lead_bike_portrait.jpg",
      ],
      desktop: [
        "src/assets/slideshow/desktop/faltri-118.jpg",
        "src/assets/slideshow/desktop/kernowman26-394.jpg",
      ],
    },
  },
];
