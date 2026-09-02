export type SocialPost = {
	id: number;
	url: string;
	image: string;
	alt: string;
	author: string;
	date: string;
	excerpt: string;
};

type JuicerMedia = {
	type?: string;
	url?: string;
	alt_text?: string | null;
};

type JuicerPost = {
	id: number;
	full_url?: string;
	image?: string | null;
	image_alt_text?: string | null;
	poster_display_name?: string | null;
	poster_name?: string | null;
	formatted_external_created_at?: string;
	unformatted_message?: string;
	message?: string;
	media?: JuicerMedia[];
};

type JuicerFeed = {
	posts?: {
		items?: JuicerPost[];
	};
};

const FEED_URL = 'https://www.juicer.io/api/feeds/intotri';
const INSTAGRAM_URL = 'https://www.instagram.com/intotri/';

export { INSTAGRAM_URL };

function stripHtml(value: string) {
	return value
		.replace(/<br\s*\/?>/gi, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/&nbsp;/gi, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/\s+/g, ' ')
		.trim();
}

function formatDate(value: string | undefined) {
	if (!value) return '';
	const date = new Date(value);
	if (Number.isNaN(date.getTime())) return '';
	return new Intl.DateTimeFormat('en-GB', {
		day: '2-digit',
		month: 'short',
		year: 'numeric',
	}).format(date);
}

function toPost(post: JuicerPost): SocialPost | null {
	const image = post.media?.find((item) => item.url)?.url || post.image;
	if (!image) return null;

	const excerpt = stripHtml(post.unformatted_message || post.message || '');

	return {
		id: post.id,
		url: post.full_url || INSTAGRAM_URL,
		image,
		alt: post.image_alt_text || post.media?.[0]?.alt_text || excerpt || 'IntoTri on Instagram',
		author: post.poster_display_name || post.poster_name || 'intotri',
		date: formatDate(post.formatted_external_created_at),
		excerpt,
	};
}

export async function getSocialPosts(limit = 6): Promise<SocialPost[]> {
	try {
		const response = await fetch(FEED_URL, {
			headers: { Accept: 'application/json' },
		});

		if (!response.ok) return [];

		const feed = (await response.json()) as JuicerFeed;
		const items = feed.posts?.items ?? [];

		return items
			.map(toPost)
			.filter((post): post is SocialPost => post !== null)
			.slice(0, limit);
	} catch {
		return [];
	}
}
