import { db } from '$lib/server/db/index';
import { eq, and } from 'drizzle-orm';
import { blogPost, blogPostTranslation } from '$lib/server/db/schema/index';
import { error } from '@sveltejs/kit';

export async function load({ params, locals }) {
	const { slug } = params;
	const lang = locals.lang || 'en'; // or pick from params/query

	try {
		const rows = await db
			.select({
				id: blogPost.id,
				slug: blogPost.slug,
				image: blogPost.image,
				category: blogPost.category,
				created_at: blogPost.created_at,
				title: blogPostTranslation.title,
				excerpt: blogPostTranslation.excerpt,
				content: blogPostTranslation.content,
				lang_code: blogPostTranslation.lang_code
			})
			.from(blogPost)
			.innerJoin(
				blogPostTranslation,
				and(eq(blogPostTranslation.post_id, blogPost.id), eq(blogPostTranslation.lang_code, lang))
			)
			.where(eq(blogPost.slug, slug))
			.limit(1);

		const postData = rows[0];
		if (!postData) throw new Error('Post not found');

		return { postData };
	} catch (err) {
		throw error(404, 'Not Found!');
	}
}
