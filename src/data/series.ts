export type SeriesCalendarEvent = {
	date: string;
	location: string;
	name: string;
	description: string;
};

export const seriesHeading = 'The Best of the South West';

export const seriesIntro = [
	"Challenge yourself at the South West's biggest triathlon series and fall under the spell of Cornwall's natural beauty: 7 events, 7 stunning locations.",
	'Whether you are a beach lover or mountain goat, experience the thrill of triathlon at our family friendly events. With distances to suit all ages (5-99y) and abilities you can pick your favourite race or take on friends and family for the overall series win.',
];

export const seriesCalendar: SeriesCalendarEvent[] = [
	{
		date: '22-Mar 2026',
		location: 'Wheal Jane',
		name: 'The Mole',
		description:
			'New for 2026 with a twist! A classic Duathlon, raced Twice. With heats and finals, everyone gets two chances at some short and fast racing on a closed road course. Junior, Sprint & Super Sprint Duathlon.',
	},
	{
		date: '26-Apr-2026',
		location: 'Wadebridge',
		name: 'The Camel',
		description:
			'A fully tarmacked junior bike course and rolling adult routes await. Junior, Sprint & Super Sprint Triathlon.',
	},
	{
		date: '30-May-2026',
		location: 'Marazion',
		name: 'The Kernowman',
		description:
			"Go long in 2026, with one of the Southwest's biggest 70.3 distance events. Shorter distances available, all in-front of the iconic St Michael's Mount.",
	},
	{
		date: '12-Jul-2026',
		location: 'Tavistock',
		name: 'The Squirrel',
		description:
			'Harry Potter meets triathlon in the wild Dartmoor National Park. Junior, Sprint & Super Sprint Triathlon.',
	},
	{
		date: '23-Aug 2026',
		location: 'Bodmin',
		name: 'The Dragon',
		description:
			'Unleash your inner dragon on the beginner friendly bike and run courses. Junior, Sprint & Super Sprint Triathlon.',
	},
	{
		date: '6-Sept-2026',
		location: 'Perranporth',
		name: 'The Shark',
		description:
			"One of the UK's most challenging yet rewarding events, with a history dating back to 1987, this iconic Cornish event is back on the calender for 2026",
	},
	{
		date: '20-Sep-2026',
		location: 'Falmouth',
		name: 'The Seal',
		description:
			'Golden sand, turquoise water and royal castles to finish off the season in style!. Open water Tri, Junior, Sprint & Super Sprint Triathlon.',
	},
];
