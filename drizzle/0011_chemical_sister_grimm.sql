ALTER TABLE "work_experience_translation" ADD COLUMN "company" char(100) NOT NULL;--> statement-breakpoint
ALTER TABLE "work_experience" DROP COLUMN "company";