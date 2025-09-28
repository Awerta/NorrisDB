import { pgTable, serial, char, integer, text } from 'drizzle-orm/pg-core';

// WorkExperience Main table: language-independent fields
export const workExperience = pgTable('work_experience', {
	id: serial('id').primaryKey(),
	company: char('company', { length: 100 }).notNull(), // company name
	start_year: integer('start_year').notNull(), // starting year
	end_year: char('end_year', { length: 20 }).notNull() // ending year, can be "present"
});

// WorkExperience Translation table: language-dependent fields
export const workExperienceTranslation = pgTable('work_experience_translation', {
	id: serial('id').primaryKey(),
	work_id: integer('work_id')
		.notNull()
		.references(() => workExperience.id, { onDelete: 'cascade' }),
	lang_code: char('lang_code', { length: 2 }).notNull(), // e.g., 'en', 'ja'
	position: char('position', { length: 100 }).notNull(), // role or position title
	description: text('description') // short description
});

// Education Main table: language-independent fields
export const education = pgTable('education', {
	id: serial('id').primaryKey(),
	start_year: integer('start_year').notNull(), // starting year
	end_year: char('end_year', { length: 20 }).notNull() // ending year, can be "present"
});

// Education Translation table: language-dependent fields
export const educationTranslation = pgTable('education_translation', {
	id: serial('id').primaryKey(),
	education_id: integer('education_id')
		.notNull()
		.references(() => education.id, { onDelete: 'cascade' }),
	lang_code: char('lang_code', { length: 2 }).notNull(), // e.g., 'en', 'ja'
	institution: char('institution', { length: 100 }).notNull(), // university, institute, or school name
	major: char('major', { length: 100 }).notNull(), // field of study or major
	description: text('description') // short description
});

// SkillSet Main table: language-independent fields
export const skill = pgTable('skill', {
	id: serial('id').primaryKey(),
	category: char('category', { length: 20 }).notNull(), // "language", "coding", "design"
	percentage: integer('percentage').notNull(), // 0 to 100,
	icon: text('icon') // icon name from Iconify - @iconify/svelte
});

// SkillSet Translation table: language-dependent fields
export const skillTranslation = pgTable('skill_translation', {
	id: serial('id').primaryKey(),
	skill_id: integer('skill_id')
		.notNull()
		.references(() => skill.id, { onDelete: 'cascade' }),
	lang_code: char('lang_code', { length: 2 }).notNull(),
	skill_name: char('skill_name', { length: 100 }).notNull(), // translated skill name
	badge: char('badge', { length: 50 }) // translated badge for language skills
});

// Knowledge Main table: language-independent fields
export const knowledge = pgTable('knowledge', {
	id: serial('id').primaryKey(),
	order: integer('order') // optional: to sort knowledge items
});

// Knowledge Translation table: language-dependent fields
export const knowledgeTranslation = pgTable('knowledge_translation', {
	id: serial('id').primaryKey(),
	knowledge_id: integer('knowledge_id')
		.notNull()
		.references(() => knowledge.id, { onDelete: 'cascade' }),
	lang_code: char('lang_code', { length: 2 }).notNull(), // e.g., 'en', 'ja'
	content: text('content').notNull() // actual knowledge text
});

// MyServices Main table: language-independent fields
export const service = pgTable('service', {
	id: serial('id').primaryKey(),
	icon: text('icon').notNull() // icon name from Iconify - @iconify/svelte
});

// MyServices Translation table: language-dependent fields
export const serviceTranslation = pgTable('service_translation', {
	id: serial('id').primaryKey(),
	service_id: integer('service_id')
		.notNull()
		.references(() => service.id, { onDelete: 'cascade' }),
	lang_code: char('lang_code', { length: 2 }).notNull(), // e.g., 'en', 'ja'
	title: char('title', { length: 100 }).notNull(),
	description: text('description') // short description
});

// MyClients Main table: language-independent fields
export const client = pgTable('client', {
	id: serial('id').primaryKey(),
	image: text('image').notNull(), // client logo,
	name: char('name', { length: 150 }).notNull() // company name
});
