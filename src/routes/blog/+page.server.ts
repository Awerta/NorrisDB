import { db } from '$lib/server/db/index';
import { eq, and } from 'drizzle-orm';
import { blogPost, blogPostTranslation } from '$lib/server/db/schema/index';
import { error } from '@sveltejs/kit';

export async function load({ locals }) {
	const lang = locals.lang || 'en';

	try {
		const allPostsData = await db
			.select({
				id: blogPost.id,
				slug: blogPost.slug,
				image: blogPost.image,
				category: blogPost.category,
				created_at: blogPost.created_at,
				title: blogPostTranslation.title,
				excerpt: blogPostTranslation.excerpt,
				lang_code: blogPostTranslation.lang_code
			})
			.from(blogPost)
			.innerJoin(
				blogPostTranslation,
				and(eq(blogPostTranslation.post_id, blogPost.id), eq(blogPostTranslation.lang_code, lang))
			);
		if (!allPostsData) throw new Error('Post not found');
		return { allPostsData };
	} catch (err) {
		throw error(404, 'Not Found!');
	}
}
