/** Prefix a site-root path with the configured Astro `base`. */
export function withBase(path = '/') {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');

	if (path === '/' || path === '') return `${base}/`;
	if (path.startsWith('/#')) return `${base}${path}`;
	if (path.startsWith('#')) return `${base}/${path}`;

	return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export function pathsMatch(pathname: string, href: string) {
	const normalize = (value: string) => value.replace(/\/$/, '') || '/';
	return normalize(pathname) === normalize(href);
}
