import { auth } from '$lib/server/lucia.js';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types.js';

export const POST: RequestHandler = async ({ locals }) => {
	const session = await locals.validate();
	if (!session) {
		throw redirect(302, '/login');
	}

	await auth.invalidateSession(session.sessionId);
	locals.setSession(null);

	throw redirect(302, '/login');
};
