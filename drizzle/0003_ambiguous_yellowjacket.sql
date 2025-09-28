DROP TABLE "client_translation" CASCADE;--> statement-breakpoint
ALTER TABLE "client" ADD COLUMN "name" char(150) NOT NULL;