import { pgTable, char, serial, integer, text, timestamp } from 'drizzle-orm/pg-core';

// The main table for language-independent blog post data
export const blogPost = pgTable('blog_post', {
	id: serial('id').primaryKey(),
	slug: char('slug', { length: 50 }).notNull().unique(), // Slug remains unique across all languages
	image: text('image').notNull(), // Image path is the same for all languages
	category: char('category', { length: 50 }).notNull(), // Category is also language-independent
	created_at: timestamp('created_at', { withTimezone: true, mode: 'date' }).notNull().defaultNow()
});

// A separate table for multilingual content
export const blogPostTranslation = pgTable('blog_post_translation', {
	id: serial('id').primaryKey(),
	post_id: integer('post_id')
		.notNull()
		.references(() => blogPost.id, { onDelete: 'cascade' }),
	lang_code: char('lang_code', { length: 2 }).notNull(), // ISO 639-1 language code (e.g., 'en', 'ja', 'es')
	title: char('title', { length: 100 }).notNull(),
	excerpt: char('excerpt', { length: 270 }).notNull(),
	content: text('content').notNull()
});
