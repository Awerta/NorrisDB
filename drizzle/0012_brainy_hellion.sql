ALTER TABLE "work_experience" ADD COLUMN "company" char(100) NOT NULL;--> statement-breakpoint
ALTER TABLE "work_experience_translation" DROP COLUMN "company";