/** True once the event's calendar day has passed in UK time. */
export function isPastEvent(date: string, now = new Date()) {
	const today = now.toLocaleDateString('en-CA', { timeZone: 'Europe/London' });
	return date < today;
}
