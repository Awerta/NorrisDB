import type { RequestHandler } from '@sveltejs/kit';
import { db } from '$lib/server/db/index';
import { contactMessage } from '$lib/server/db/schema/contactMessage';
import * as yup from 'yup';

let lastRequestTime = 0;
const RATE_LIMIT = 1000; // 1 request per second per server instance (simple rate limiting)

const schema = yup.object({
	name: yup
		.string()
		.required()
		.min(2, 'Too short')
		.max(80, 'Too long')
		.matches(/^[\p{L}\s]+$/u, 'Write alphabet only'),
	email: yup.string().required().email(),
	message: yup
		.string()
		.required()
		.min(5, 'Message too short')
		.max(499, 'Too long')
		.matches(/^[\p{L}\p{N}\p{P}\p{M}\p{Z}\p{S}]+$/u, 'Write a valid sentence')
});

export const POST: RequestHandler = async ({ request }) => {
	try {
		// Simple rate limiting
		const now = Date.now();
		if (now - lastRequestTime < RATE_LIMIT) {
			return new Response(JSON.stringify({ error: 'Too many requests, slow down' }), {
				status: 429
			});
		}
		lastRequestTime = now;

		const data = await request.json();
		await schema.validate(data);

		const { name, email, message } = data;

		await db.insert(contactMessage).values({
			name,
			email,
			message
		});

		return new Response(JSON.stringify({ success: true }), { status: 200 });
	} catch (err: any) {
		console.error(err);

		if (err.name === 'ValidationError') {
			return new Response(JSON.stringify({ error: err.message }), { status: 400 });
		}

		return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
	}
};
