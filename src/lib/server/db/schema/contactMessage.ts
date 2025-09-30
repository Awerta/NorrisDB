import { pgTable, char, serial, timestamp } from 'drizzle-orm/pg-core';

// The main table for language-independent messages data
export const contactMessage = pgTable('contact_message', {
	id: serial('id').primaryKey(),
	name: char('name', { length: 80 }),
	email: char('email', { length: 100 }).notNull(),
	message: char('message', { length: 500 }).notNull(),
	created_at: timestamp('created_at', { withTimezone: true, mode: 'date' }).notNull().defaultNow()
});
