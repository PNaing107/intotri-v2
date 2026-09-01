export type EventCategory = 'senior' | 'junior';

export type Event = {
	name: string;
	format: string;
	location: string;
	date: string;
	category: EventCategory;
};

export const events: Event[] = [
	{
		name: 'Newquay Duathlon',
		format: 'Duathlon',
		location: 'Newquay',
		date: '05 Apr 2026',
		category: 'senior',
	},
	{
		name: 'Falmouth Triathlon',
		format: 'Super Sprint',
		location: 'Falmouth',
		date: '14 Jun 2026',
		category: 'senior',
	},
	{
		name: 'The Squirrel',
		format: 'Olympic',
		location: 'Tavistock',
		date: '12 Jul 2026',
		category: 'senior',
	},
	{
		name: 'Bodmin Triathlon',
		format: 'Sprint',
		location: 'Bodmin',
		date: '23 Aug 2026',
		category: 'senior',
	},
	{
		name: 'Falmouth Aquathlon',
		format: 'Aquathlon',
		location: 'Falmouth',
		date: '14 Jun 2026',
		category: 'junior',
	},
	{
		name: 'Mini Squirrel',
		format: 'Triathlon',
		location: 'Tavistock',
		date: '12 Jul 2026',
		category: 'junior',
	},
	{
		name: 'Mini Bodmin',
		format: 'Triathlon',
		location: 'Bodmin',
		date: '23 Aug 2026',
		category: 'junior',
	},
];
