import { handleHooks } from '@lucia-auth/sveltekit';
import { auth } from '../src/lib/server/lucia.js';
import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const customHandle: Handle = async ({ resolve, event }) => {
	return resolve(event);
};

export const handle: Handle = sequence(handleHooks(auth), customHandle);
