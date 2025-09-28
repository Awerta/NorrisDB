import { pgTable, serial, char, text, integer, boolean } from 'drizzle-orm/pg-core';

export const about = pgTable('about', {
	id: serial('id').primaryKey(), // always 1 row
	website: text('website'),
	email: char('email', { length: 100 }).notNull(),
	phone: char('phone', { length: 30 }),
	age: integer('age'), // optional
	freelance: boolean('freelance').notNull().default(false), // true/false
	latitude: integer('latitude'),
	longitude: integer('longitude')
});

export const socialLink = pgTable('social_link', {
	id: serial('id').primaryKey(),
	about_id: integer('about_id')
		.notNull()
		.references(() => about.id, { onDelete: 'cascade' }),
	platform_name: char('platform_name', { length: 50 }).notNull(), // e.g. "GitHub"
	icon: text('icon').notNull(), // Iconify name / path
	url: text('url').notNull()
});

export const resumeFile = pgTable('resume_file', {
	id: serial('id').primaryKey(),
	about_id: integer('about_id')
		.notNull()
		.references(() => about.id, { onDelete: 'cascade' }),
	lang_code: char('lang_code', { length: 2 }).notNull(), // e.g. 'en', 'ja'
	file_url: text('file_url').notNull()
});

export const aboutTranslation = pgTable('about_translation', {
	id: serial('id').primaryKey(),
	about_id: integer('about_id')
		.notNull()
		.references(() => about.id, { onDelete: 'cascade' }),
	lang_code: char('lang_code', { length: 2 }).notNull(), // e.g. 'en', 'ja'
	first_name: char('first_name', { length: 50 }).notNull(),
	last_name: char('last_name', { length: 50 }).notNull(),
	residence: char('residence', { length: 100 }).notNull(),
	citizenship: char('citizenship', { length: 100 }).notNull(),
	address: text('address').notNull()
});
