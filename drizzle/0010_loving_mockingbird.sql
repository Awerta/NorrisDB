ALTER TABLE "education_translation" ADD COLUMN "institution" char(100) NOT NULL;--> statement-breakpoint
ALTER TABLE "education" DROP COLUMN "institution";